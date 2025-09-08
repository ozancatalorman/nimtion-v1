"use client";

import { InlineWidget } from "react-calendly";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(formData: FormData) {
    try {
      setStatus("sending");
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message")
        }),
        headers: { "Content-Type": "application/json" }
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div>
        <h2 className="text-3xl font-bold">Let’s talk</h2>
        <p className="mt-2 text-ink/80">
          Send a message and we’ll reply in a day. Or grab a 15-minute slot below.
        </p>

        <form action={onSubmit} className="mt-6 space-y-4">
          <input name="name" placeholder="Your name" required className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3" />
          <input name="email" type="email" placeholder="you@company.com" required className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3" />
          <textarea name="message" placeholder="What would you like to discuss?" rows={5} className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3" />
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-xl bg-accent-1 px-5 py-3 font-semibold text-ink shadow transition hover:shadow-lg"
          >
            {status === "sending" ? "Sending..." : status === "sent" ? "Sent ✓" : "Send message"}
          </button>
          {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}
        </form>
      </div>

      <div className="rounded-2xl border border-ink/10 bg-white/60 p-2">
        {/* Replace with your Calendly link */}
        <InlineWidget url="https://calendly.com/your-calendly-username/15min" styles={{ height: 520 }} />
      </div>
    </div>
  );
}