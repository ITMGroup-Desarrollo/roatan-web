import nodemailer from "nodemailer";

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

  const verify = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${captcha}`,
    }
  );

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

  // ✅ Obtener los datos del formulario
  const nombre = form.get("nombre")?.toString() || "";
  const correo = form.get("correo")?.toString() || "";
  const naviera = form.get("naviera")?.toString() || "";
  const fecha = form.get("fecha")?.toString() || "";
  const mensaje = form.get("mensaje")?.toString() || "";

  // ✅ Configurar nodemailer
  const transporter = nodemailer.createTransport({
    host: import.meta.env.MAIL_HOST,
    port: Number(import.meta.env.MAIL_PORT),
    auth: {
      user: import.meta.env.MAIL_USER,
      pass: import.meta.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formulario Web" <itmgroupmxappsg@gmail.com>`,
      to: "cristian.mendoza.026@gmail.com",
      // to: "info@porttainobay.com",
      subject: `Nuevo contacto de ${nombre}`,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Naviera:</strong> ${naviera}</p>
        <p><strong>Fecha:</strong> ${fecha}</p>
        <p><strong>Mensaje:</strong><br>${mensaje}</p>
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Formulario enviado correctamente.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Error al enviar correo:", err);
    return new Response(
      JSON.stringify({ success: false, message: "Error al enviar el correo." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
