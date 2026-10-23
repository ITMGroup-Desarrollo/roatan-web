<?php
// Endpoint del formulario de contacto de Port Roatan.
//   GET  -> entrega un token de un solo uso y marca la hora de carga.
//   POST -> valida, aplica los filtros antibot y envía el aviso por SMTP.
//
// La configuración (.env) y los datos (storage/) se buscan, en este orden, en:
//   1) /home/itmgroupmx/roatan-form/      (fuera de public_html, si existe)
//   2) <sitio>/private/                   (bloqueada con .htaccess y excluida del rsync del despliegue)

declare(strict_types=1);

require __DIR__ . '/../app/env.php';
require __DIR__ . '/../app/SmtpMailer.php';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

session_set_cookie_params([
    'httponly' => true,
    'samesite' => 'Strict',
    'secure' => !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
]);
session_start();

$lang = (($_POST['lang'] ?? $_GET['lang'] ?? 'es') === 'en') ? 'en' : 'es';
$messages = [
    'es' => [
        'config' => 'Error de configuración del servidor.',
        'method' => 'Método no permitido.',
        'generic' => 'No pudimos procesar tu solicitud. Recarga la página e inténtalo de nuevo.',
        'captcha' => 'Por favor completa el captcha.',
        'rate' => 'Demasiados envíos. Inténtalo más tarde.',
        'name' => 'Escribe un nombre válido.',
        'lastName' => 'Escribe un apellido válido.',
        'email' => 'Escribe un correo válido.',
        'field' => 'Revisa los datos del formulario.',
        'send' => 'No pudimos enviar tu mensaje en este momento. Inténtalo más tarde.',
        'ok' => 'Formulario enviado correctamente.',
    ],
    'en' => [
        'config' => 'Server configuration error.',
        'method' => 'Method not allowed.',
        'generic' => 'We could not process your request. Please reload the page and try again.',
        'captcha' => 'Please complete the captcha.',
        'rate' => 'Too many requests. Please try again later.',
        'name' => 'Please enter a valid name.',
        'lastName' => 'Please enter a valid last name.',
        'email' => 'Please enter a valid email address.',
        'field' => 'Please check the form fields.',
        'send' => 'We could not send your message right now. Please try again later.',
        'ok' => 'Form sent successfully.',
    ],
][$lang];

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

$configDir = dirname(__DIR__) . '/private';
foreach ([dirname(__DIR__, 3) . '/roatan-form', dirname(__DIR__) . '/private'] as $dir) {
    if (is_readable($dir . '/.env')) {
        $configDir = $dir;
        break;
    }
}

try {
    $env = load_env($configDir . '/.env');
} catch (RuntimeException $e) {
    error_log('[contact] ' . $e->getMessage() . ' en ' . $configDir);
    respond(500, ['ok' => false, 'error' => $messages['config']]);
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

// ---------- GET: token + hora de carga ----------
if ($method === 'GET') {
    $_SESSION['form_token'] = bin2hex(random_bytes(32));
    $_SESSION['form_time'] = time();
    respond(200, ['token' => $_SESSION['form_token']]);
}

if ($method !== 'POST') {
    header('Allow: GET, POST');
    respond(405, ['ok' => false, 'error' => $messages['method']]);
}

// ---------- Antibot 1: mismo origen ----------
$origin = $_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '';
$host = $_SERVER['HTTP_HOST'] ?? '';
if ($origin !== '' && parse_url($origin, PHP_URL_HOST) !== parse_url('http://' . $host, PHP_URL_HOST)) {
    respond(403, ['ok' => false, 'error' => $messages['generic']]);
}

// ---------- Antibot 2: token de un solo uso ----------
$token = (string) ($_POST['token'] ?? '');
$sessionToken = (string) ($_SESSION['form_token'] ?? '');
$formTime = (int) ($_SESSION['form_time'] ?? 0);
unset($_SESSION['form_token'], $_SESSION['form_time']);

if ($sessionToken === '' || !hash_equals($sessionToken, $token)) {
    respond(403, ['ok' => false, 'error' => $messages['generic']]);
}

// ---------- Antibot 3: honeypot ----------
if (trim((string) ($_POST['website'] ?? '')) !== '') {
    respond(200, ['ok' => true, 'message' => $messages['ok']]);
}

// ---------- Antibot 4: tiempo mínimo para rellenar ----------
$minSeconds = (int) ($env['FORM_MIN_SECONDS'] ?? 3);
if (time() - $formTime < $minSeconds) {
    respond(200, ['ok' => true, 'message' => $messages['ok']]);
}

// ---------- reCAPTCHA (solo si hay clave secreta en el .env) ----------
$recaptchaSecret = $env['RECAPTCHA_SECRET_KEY'] ?? '';
if ($recaptchaSecret !== '') {
    $captcha = (string) ($_POST['g-recaptcha-response'] ?? '');
    if ($captcha === '') {
        respond(400, ['ok' => false, 'error' => $messages['captcha']]);
    }
    $ctx = stream_context_create(['http' => [
        'method' => 'POST',
        'header' => 'Content-Type: application/x-www-form-urlencoded',
        'content' => http_build_query([
            'secret' => $recaptchaSecret,
            'response' => $captcha,
            'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
        ]),
        'timeout' => 10,
    ]]);
    $verify = @file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $ctx);
    $result = $verify ? json_decode($verify, true) : null;
    if (empty($result['success'])) {
        respond(403, ['ok' => false, 'error' => $messages['captcha']]);
    }
}

// ---------- Antibot 5: límite de envíos por IP ----------
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$maxHits = (int) ($env['RATE_LIMIT_MAX'] ?? 5);
$window = (int) ($env['RATE_LIMIT_WINDOW'] ?? 3600);
$storage = $configDir . '/storage';
if (!is_dir($storage)) {
    @mkdir($storage, 0775, true);
}

// Si storage/ no se puede escribir, se registra el problema y el correo se envía igual.
$fp = @fopen($storage . '/rate-limit.json', 'c+');
if ($fp === false) {
    error_log('[contact] No se puede escribir en ' . $storage . ' (límite por IP desactivado)');
} else {
    flock($fp, LOCK_EX);
    $hits = json_decode(stream_get_contents($fp) ?: '{}', true) ?: [];
    $now = time();
    foreach ($hits as $key => $times) {
        $hits[$key] = array_values(array_filter($times, fn($t) => $t > $now - $window));
        if (!$hits[$key]) {
            unset($hits[$key]);
        }
    }
    $ipKey = hash('sha256', $ip);
    if (count($hits[$ipKey] ?? []) >= $maxHits) {
        flock($fp, LOCK_UN);
        fclose($fp);
        respond(429, ['ok' => false, 'error' => $messages['rate']]);
    }
    $hits[$ipKey][] = $now;
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, json_encode($hits));
    flock($fp, LOCK_UN);
    fclose($fp);
}

// ---------- Validación ----------
$clean = fn(string $k) => trim(preg_replace('/[\r\n\t]+/', ' ', (string) ($_POST[$k] ?? '')));
$hasLink = fn(string $v) => (bool) preg_match('~https?://|www\.|<|>~i', $v);

$name = $clean('nombre');
$lastName = $clean('apellido');
$email = trim((string) ($_POST['correo'] ?? ''));
$phone = $clean('telefono');
$country = $clean('country');
$naviera = $clean('naviera');
$mensaje = trim(str_replace("\r\n", "\n", (string) ($_POST['mensaje'] ?? '')));

if ($name === '' || mb_strlen($name) > 100 || $hasLink($name)) {
    respond(422, ['ok' => false, 'error' => $messages['name']]);
}
if ($lastName === '' || mb_strlen($lastName) > 100 || $hasLink($lastName)) {
    respond(422, ['ok' => false, 'error' => $messages['lastName']]);
}
if (mb_strlen($email) > 150 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => $messages['email']]);
}
if (mb_strlen($phone) > 30 || !preg_match('/^[0-9+()\-\s.]*$/', $phone)
    || mb_strlen($country) > 80 || $hasLink($country)
    || mb_strlen($naviera) > 80
    || mb_strlen($mensaje) > 3000) {
    respond(422, ['ok' => false, 'error' => $messages['field']]);
}

// ---------- Respaldo en CSV ----------
$csv = @fopen($storage . '/contacts.csv', 'a');
if ($csv) {
    flock($csv, LOCK_EX);
    $safe = fn($v) => preg_match('/^[=+\-@]/', $v) ? "'" . $v : $v;
    fputcsv($csv, array_map($safe, [date('Y-m-d H:i:s'), $name, $lastName, $email, $phone, $country, $naviera, $mensaje, $ip]));
    flock($csv, LOCK_UN);
    fclose($csv);
}

// ---------- Envío del correo ----------
$recipients = array_filter(array_map('trim', explode(',', $env['MAIL_TO'] ?? '')));
$body = "Nuevo mensaje desde el formulario de contacto de Port Roatan\n\n"
    . "Nombre: $name $lastName\n"
    . "Correo: $email\n"
    . "Teléfono: $phone\n"
    . "País: $country\n"
    . "Naviera: $naviera\n"
    . 'Idioma: ' . strtoupper($lang) . "\n"
    . 'Fecha: ' . date('d/m/Y H:i') . "\n\n"
    . "Mensaje:\n$mensaje\n";

try {
    $mailer = new SmtpMailer(
        $env['SMTP_HOST'] ?? '',
        (int) ($env['SMTP_PORT'] ?? 465),
        $env['SMTP_SECURE'] ?? 'ssl',
        $env['SMTP_USER'] ?? '',
        $env['SMTP_PASS'] ?? ''
    );
    $mailer->send(
        $env['MAIL_FROM'] ?? ($env['SMTP_USER'] ?? ''),
        $env['MAIL_FROM_NAME'] ?? 'Port Roatan',
        $recipients,
        "Nuevo contacto Port Roatan: $name $lastName",
        $body,
        $email
    );
} catch (Throwable $e) {
    error_log('[contact] ' . $e->getMessage());
    respond(500, ['ok' => false, 'error' => $messages['send']]);
}

respond(200, ['ok' => true, 'message' => $messages['ok']]);
