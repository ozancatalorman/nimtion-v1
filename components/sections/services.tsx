"use client";

type ServiceItem = {
  title: string;
  desc: string;
};

const items: ServiceItem[] = [
  {
    title: "Spot & Prove AI Value",
    desc: "We dig into your finance workflows, uncover where time and money are wasted, and design a 90-day pilot that proves the impact. Real results, not slide decks.",
  },
  {
    title: "Unify Your Data",
    desc: "Budgets in Sheets, forecasts in Excel, invoices in SAP — we connect and clean it all. Once your numbers speak the same language, AI can finally do its job.",
  },
  {
    title: "Pick the Right AI",
    desc: "Not every model fits every problem. We test options on your real data and deliver working prototypes fast. You’ll see what works in practice, not theory.",
  },
  {
    title: "AI in Daily Workflow",
    desc: "We drop copilots right into the tools you already live in — Excel, Slack, SAP, email. They explain, flag, and assist without adding new tabs to your day.",
  },
  {
    title: "Secure & In-House",
    desc: "Every workflow we build is designed with enterprise-grade security. Whether it’s your own systems or trusted AI tools, we keep data safe, controlled, and compliant from day one.",
  },
  {
    title: "Adoption That Sticks",
    desc: "AI only works if people actually use it. We train your team with playbooks and workshops, track adoption with KPIs, and stay until it’s second nature.",
  }
];

const accentByIndex = (i: number) =>
  i % 3 === 0
    ? { line: "bg-accent-2/60", text: "text-accent-2", ring: "ring-accent-2/20" }
    : i % 3 === 1
    ? { line: "bg-accent-1/60", text: "text-accent-1", ring: "ring-accent-1/20" }
    : { line: "bg-accent-3/60", text: "text-accent-3", ring: "ring-accent-3/20" };

function ServiceCard({
  i,
  s,
  align
}: {
  i: number;
  s: ServiceItem;
  align: "left" | "right";
}) {
  const colors = accentByIndex(i);

  return (
    <article
      className={`group rounded-2xl border border-ink/5 bg-white/60 p-6 backdrop-blur transition
                  hover:shadow-lg hover:ring-2 ${colors.ring}
                  ${align === "left" ? "text-right pr-8" : "text-left pl-8"}`}
    >
      {/* number + divider */}
      <div
        className={`mb-4 flex items-center gap-3 ${
          align === "left" ? "justify-end" : "justify-start"
        }`}
      >
        {align === "right" ? (
          <>
            <span className={`text-sm font-bold tracking-wider ${colors.text}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className={`h-[2px] w-16 rounded-full ${colors.line}`} />
          </>
        ) : (
          <>
            <span className={`h-[2px] w-16 rounded-full ${colors.line}`} />
            <span className={`text-sm font-bold tracking-wider ${colors.text}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
          </>
        )}
      </div>

      {/* title */}
      <h3 className="text-lg font-extrabold text-ink sm:text-xl">{s.title}</h3>

      {/* description */}
      <p className="mt-2 text-sm text-ink/70">{s.desc}</p>
    </article>
  );
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          What we offer you and how we do it?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-ink/70">
          We do not just advice - we find the problem, implement the solution and we own the outcomes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
        {items.map((s, i) => (
          <ServiceCard
            key={s.title}
            i={i}
            s={s}
            align={i % 2 === 0 ? "right" : "left"} // alternate
          />
        ))}
      </div>
    </section>
  );
}