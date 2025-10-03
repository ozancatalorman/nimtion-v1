import Script from "next/script";

export function About() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2 className="text-5xl font-bold">Who are we?</h2>
      <h2 className="text-3xl font-bold">
        And how are we so sure we can make your life easier?
      </h2>
      <div className="space-y-6 mt-6">
        <p>
          <span className="font-semibold">
            Based in Istanbul, finance-first.
          </span>
          <br />
          We’re a team of finance folks who know the pain of midnight closes,
          and tech nerds who get way too excited about connectors, copilots, and
          clean data.
          <br />
          But most importantly — we don’t just wait for you to tell us the
          problems. We dive into your workflows, uncover what’s slowing you
          down, and design AI solutions that actually fix it. Together, we speak
          both <span className="font-semibold">Excel</span> and{" "}
          <span className="font-semibold">API</span>.
        </p>

        <p>
          <span className="font-semibold">We’ve lived your pain.</span>
          <br />
          Endless reconciliations, variance hunts, reports nobody reads. We know
          what steals your time - and sometimes you do not even see it until
          someone points it out. That’s why we come, identify the problems and
          build systems that handle the boring stuff — so humans (
          <span className="font-semibold">yes, that means you</span>) can focus
          on strategy, creativity, and the big picture.
        </p>

        <p>
          <span className="font-semibold">Our mission is simple:</span>
          <br />
          Less time fighting spreadsheets; more time leading with insights. And
          unlike traditional consultants, we don’t wait for a brief or deliver a
          shiny deck — we diagnose the problems, implement the solutions, and
          stay until it works actually works.
        </p>

        <p className="italic">
          In short: we make your teams look like superheroes (minus the
          late-night coffee jitters).
        </p>
      </div>
      <Script
        id="about-org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Nimtion Automation",
            url: "https://www.nimtion.com",
            logo: "https://www.nimtion.com/nimtionicon.png",
            address: {
              "@type": "ozancatalorman@nimtion.com",
              addressLocality: "Istanbul",
              addressCountry: "TR",
            },
            foundingDate: "2025",
            description:
              "Nimtion Automation is an Istanbul-based company offering AI-powered workflow automation and automation solutions for finance teams and businesses.",
          }),
        }}
      />
    </div>
  );
}
