"use client";

import { InlineWidget } from "react-calendly";
import { useRef, useState } from "react";

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";

export function Contact() {
  const [status, setStatus] =
    useState<"idle" | "sending" | "sent" | "error">("idle");

  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(formData: FormData): Promise<void> {
    try {
      setStatus("sending");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      // Clear inputs on success
      formRef.current?.reset();

      setStatus("sent");

      // Brief success display, then back to idle
      setTimeout(() => setStatus("idle"), 2500);
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

        <form ref={formRef} action={onSubmit} className="mt-6 space-y-4">
          <input
            name="name"
            placeholder="Your name"
            required
            className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3"
          />
          <input
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3"
          />
          <textarea
            name="message"
            placeholder="What would you like to discuss?"
            rows={5}
            className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-xl bg-accent-1 px-5 py-3 font-semibold text-ink shadow transition hover:shadow-lg disabled:opacity-60"
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Sent!"
              : "Send message"}
          </button>
          <div aria-live="polite" className="text-sm">
            {status === "error" && (
              <p className="text-red-600">Something went wrong. Please try again.</p>
            )}
          </div>
        </form>
      </div>

      <div className="rounded-2xl border border-ink/10 bg-white/60 p-2">
        <InlineWidget
          url={calendlyUrl}
          styles={{ height: 520 }}
        />
      </div>
    </div>
  );
}