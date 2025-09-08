import { Resend } from "resend";
import { contactSchema, ContactInput } from "./validation";
import "server-only";

const resend = new Resend(process.env.RESEND_API_KEY);

/** Sends the main message and a confirmation copy to the sender. */
export async function sendContactEmail(payload: ContactInput) {
  const data = contactSchema.parse(payload);

  // Main: to you
  await resend.emails.send({
    from: process.env.MAIL_FROM ?? "Nimtion <no-reply@your-domain.com>",
    to: [process.env.CONTACT_TO_EMAIL ?? "founder@your-domain.com"],
    subject: `New contact from ${data.name}`,
    html: `
      <h2>New Contact</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:ui-monospace,monospace">${data.message}</pre>
    `
  });

  // Confirmation: to the sender
  await resend.emails.send({
    from: process.env.MAIL_FROM ?? "Nimtion <no-reply@your-domain.com>",
    to: [data.email],
    subject: "Thanks for reaching out to Nimtion",
    html: `
      <h2>We got your message ✅</h2>
      <p>Hi ${data.name},</p>
      <p>Thanks for contacting Nimtion. We’ll reply shortly.</p>
      <hr />
      <p><strong>Your message</strong></p>
      <pre style="white-space:pre-wrap;font-family:ui-monospace,monospace">${data.message}</pre>
    `
  });
}