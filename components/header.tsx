"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const nav = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-mist/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand: icon instead of text */}
        <Link href="#hero" className="flex items-center gap-2" aria-label="Nimtion – Home">
          <motion.span initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}>
            <Image
              src="/nimtionicon.png"
              alt="Nimtion logo"
              width={90}
              height={90}
              className="h-17 w-17"
              priority
            />
          </motion.span>
          {/* optional wordmark — remove if you want icon only */}
          {/* <span className="hidden text-sm font-semibold text-ink/90 sm:inline">Nimtion</span> */}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 sm:flex">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-sm font-medium text-ink/80 transition hover:text-ink"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-xl bg-accent-1 px-5 py-3 font-semibold text-ink shadow transition hover:shadow-lg"
          >
            Book a call
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="sm:hidden rounded-md border border-black/10 px-2 py-1 text-sm"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="sm:hidden border-t border-black/5 bg-mist"
        >
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-3">
              {nav.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className="py-1"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-xl bg-accent-1 px-5 py-3 font-semibold text-ink shadow transition hover:shadow-lg"
                onClick={() => setOpen(false)}
              >
                Book a call
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}