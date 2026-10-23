<?php
// Cliente SMTP mínimo (SSL o STARTTLS + AUTH LOGIN), sin dependencias.

class SmtpMailer
{
    private $socket;
    private string $host;
    private int $port;
    private string $secure;
    private string $user;
    private string $pass;
    private int $timeout = 15;

    public function __construct(string $host, int $port, string $secure, string $user, string $pass)
    {
        $this->host = $host;
        $this->port = $port;
        $this->secure = strtolower($secure);
        $this->user = $user;
        $this->pass = $pass;
    }

    public function send(string $fromEmail, string $fromName, array $to, string $subject, string $body, ?string $replyTo = null): void
    {
        $this->connect();
        try {
            $this->command('MAIL FROM:<' . $fromEmail . '>', [250]);
            foreach ($to as $rcpt) {
                $this->command('RCPT TO:<' . $rcpt . '>', [250, 251]);
            }
            $this->command('DATA', [354]);

            $headers = [
                'Date: ' . date('r'),
                'From: ' . $this->encodeHeader($fromName) . ' <' . $fromEmail . '>',
                'To: ' . implode(', ', $to),
                'Subject: ' . $this->encodeHeader($subject),
                'Message-ID: <' . bin2hex(random_bytes(16)) . '@' . substr(strrchr($fromEmail, '@'), 1) . '>',
                'MIME-Version: 1.0',
                'Content-Type: text/plain; charset=UTF-8',
                'Content-Transfer-Encoding: base64',
            ];
            if ($replyTo) {
                $headers[] = 'Reply-To: ' . $replyTo;
            }

            $data = implode("\r\n", $headers) . "\r\n\r\n" . rtrim(chunk_split(base64_encode($body), 76, "\r\n"));
            $this->write($data . "\r\n.");
            $this->expect([250]);
        } finally {
            $this->quit();
        }
    }

    private function connect(): void
    {
        $context = stream_context_create(['ssl' => ['verify_peer' => true, 'verify_peer_name' => true]]);
        $remote = ($this->secure === 'ssl' ? 'ssl://' : 'tcp://') . $this->host . ':' . $this->port;
        $this->socket = @stream_socket_client($remote, $errno, $errstr, $this->timeout, STREAM_CLIENT_CONNECT, $context);
        if (!$this->socket) {
            throw new RuntimeException("No se pudo conectar al SMTP: $errstr ($errno)");
        }
        stream_set_timeout($this->socket, $this->timeout);

        $this->expect([220]);
        $hostname = gethostname() ?: 'localhost';
        $this->command('EHLO ' . $hostname, [250]);

        if ($this->secure === 'tls') {
            $this->command('STARTTLS', [220]);
            if (!stream_socket_enable_crypto($this->socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                throw new RuntimeException('No se pudo iniciar TLS');
            }
            $this->command('EHLO ' . $hostname, [250]);
        }

        $this->command('AUTH LOGIN', [334]);
        $this->command(base64_encode($this->user), [334]);
        $this->command(base64_encode($this->pass), [235]);
    }

    private function quit(): void
    {
        if ($this->socket) {
            @fwrite($this->socket, "QUIT\r\n");
            fclose($this->socket);
            $this->socket = null;
        }
    }

    private function command(string $line, array $codes): string
    {
        $this->write($line);
        return $this->expect($codes);
    }

    private function write(string $data): void
    {
        // El cuerpo va en base64, así que nunca hay líneas que empiecen por "."
        fwrite($this->socket, $data . "\r\n");
    }

    private function expect(array $codes): string
    {
        $response = '';
        while (($line = fgets($this->socket, 515)) !== false) {
            $response .= $line;
            if (isset($line[3]) && $line[3] === ' ') {
                break;
            }
        }
        $code = (int) substr($response, 0, 3);
        if (!in_array($code, $codes, true)) {
            throw new RuntimeException('Respuesta SMTP inesperada: ' . trim($response));
        }
        return $response;
    }

    private function encodeHeader(string $text): string
    {
        return preg_match('/[^\x20-\x7E]/', $text) ? '=?UTF-8?B?' . base64_encode($text) . '?=' : $text;
    }
}
