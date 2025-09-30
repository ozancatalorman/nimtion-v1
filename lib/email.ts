import { Resend } from "resend";
import { contactSchema, ContactInput } from "./validation";
import "server-only";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendContactEmail(payload: ContactInput) {
  const data = contactSchema.parse(payload);

  // Hard checks so we don’t “think” we sent
  if (!process.env.MAIL_FROM) {
    console.error("❌ MAIL_FROM missing");
    throw new Error("MAIL_FROM is not set");
  }
  if (!process.env.CONTACT_TO_EMAIL) {
    console.error("❌ CONTACT_TO_EMAIL missing");
    throw new Error("CONTACT_TO_EMAIL is not set");
  }

  console.log("📫 MAIL_FROM =", process.env.MAIL_FROM);
  console.log("📫 CONTACT_TO_EMAIL =", process.env.CONTACT_TO_EMAIL);
  console.log("📫 USER_EMAIL =", data.email);

  // Send owner copy
  let ownerResult: any;
  try {
    ownerResult = await resend.emails.send({
      from: process.env.MAIL_FROM,
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: data.email, // so reply from your inbox goes to the user
      subject: `New contact from ${data.name}`,
      html: `
        <h2>New Contact</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:ui-monospace,monospace">${data.message}</pre>
      `,
    });
    console.log("✅ Owner email send response:", ownerResult);
  } catch (err) {
    console.error("❌ Owner email failed:", err);
    throw err; // bubble up so we see 400 in the route
  }

  // Send confirmation to user (don’t block owner mail if this fails)
  let userResult: any;
  try {
    userResult = await resend.emails.send({
      from: process.env.MAIL_FROM,
      to: [data.email],
      subject: "Thanks for reaching out to Nimtion",
      html: `
        <h2>We got your message ✅</h2>
        <p>Hi ${data.name},</p>
        <p>Thanks for contacting Nimtion. We’ll reply shortly.</p>
        <hr />
        <p><strong>Your message</strong></p>
        <pre style="white-space:pre-wrap;font-family:ui-monospace,monospace">${data.message}</pre>
      `,
    });
    console.log("✅ User confirmation send response:", userResult);
  } catch (err) {
    console.error("⚠️ User confirmation failed (owner mail already sent):", err);
    // don’t throw; owner copy already delivered
  }

  return {
    ok: true,
    ownerId: ownerResult?.data?.id ?? ownerResult?.id,
    userId: userResult?.data?.id ?? userResult?.id,
  };
}