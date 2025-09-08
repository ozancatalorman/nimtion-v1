"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <section id="hero" className="py-2 sm:py-10">
          <Hero />
        </section>

        <div className="decoborder w-24 rounded-full" />

        <section id="about" className="py-20 sm:py-28">
          <About />
        </section>

        <div className="decoborder w-24 rounded-full" />

        <section id="services" className="py-20 sm:py-28">
          <Services />
        </section>

        <div className="decoborder w-24 rounded-full" />

        <section id="contact" className="py-20 sm:py-28">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}