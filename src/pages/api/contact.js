// src/pages/api/contact.js
export async function POST({ request }) {
  const form = await request.formData();
  const captcha = form.get("g-recaptcha-response");

  if (!captcha) {
    return new Response(
      JSON.stringify({ success: false, message: "Captcha requerido." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const secretKey = import.meta.env.RECAPTCHA_SECRET_KEY;

  const verify = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secretKey}&response=${captcha}`,
  });

  const result = await verify.json();

  if (!result.success) {
    return new Response(
      JSON.stringify({ success: false, message: "Captcha inválido." }),
      {
        status: 403,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  return new Response(
    JSON.stringify({ success: true, message: "Formulario enviado correctamente." }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
