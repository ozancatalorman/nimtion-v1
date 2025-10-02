"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="relative py-2 sm:py-4">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-4 sm:grid-cols-2 sm:gap-10 lg:px-10">
        {/* Left: text */}
        <div className="flex flex-col justify-center">
          <motion.h1
            className="whitespace-normal sm:whitespace-nowrap text-4xl font-extrabold leading-tight sm:text-5xl"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Click less, create more
            <span className="block bg-gradient-to-r from-accent-2 via-accent-1 to-accent-3 bg-clip-text text-transparent">
              Touch what matters
            </span>
          </motion.h1>

          <p className="mt-5 max-w-prose text-ink/80">
            We don’t replace people — we replace busywork, so people can do what only humans can.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-accent-1 px-5 py-3 font-semibold text-ink shadow transition hover:shadow-lg"
            >
              Book a 15-min call
            </a>
            <a
              href="#services"
              className="rounded-xl border border-ink/10 bg-white px-5 py-3 font-semibold"
            >
              Explore services
            </a>
          </div>
        </div>

        {/* Right: cat logo + glow (glow centered/locked to cat) */}
        <motion.div
          className="relative flex items-center justify-center sm:justify-end lg:-mr-14 xl:-mr-24"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* local positioning context for glow + cat */}
          <div className="relative">
            {/* Glow stays centered behind the cat and scales with it */}
            <div className="
              pointer-events-none absolute left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
              w-[115%] sm:w-[125%] lg:w-[135%] aspect-square
              rounded-full bg-gradient-to-r from-accent-2 via-accent-1 to-accent-3
              blur-3xl opacity-40
            " />
            {/* Cat icon */}
            <Image
              src="/cat.png"
              alt="Nimtion cat logo"
              width={700}
              height={700}
              priority
              className="relative z-10 h-auto w-[22rem] sm:w-[26rem] lg:w-[30rem]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}