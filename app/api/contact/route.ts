import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendContactEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    console.log("📩 Incoming contact request");

    const body = await req.json();
    console.log("📦 Raw body:", body);

    const data = contactSchema.parse(body);
    console.log("✅ Validation passed:", data);

    const result = await sendContactEmail(data);
    console.log("📤 sendContactEmail result:", result);

    return NextResponse.json(result);
  } catch (err) {
    console.error("❌ Error handling contact form:", err);
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}