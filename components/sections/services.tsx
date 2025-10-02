"use client";

type ServiceItem = {
  title: string;
  desc: string;
};

const items: ServiceItem[] = [
  {
    title: "Problem Discovery",
    desc: "We analyze your workflows end-to-end, reveal the bottlenecks even your teams can’t see, and design solutions that save hours and cash. Every solution we design pays back with measurable savings, not wiht vague promises.",
  },
  {
    title: "Connect & Clean Data",
    desc: "Scattered budgets, forecasts, and invoices? We unify and clean them so numbers finally speak the same language. Once your foundation is solid, AI delivers results.",
  },
  {
    title: "The Right AI, Not the Shiny AI",
    desc: "We test models on the real data, not in theory. You’ll get a working prototype fast — proof that it actually solves your problem.",
  },
  {
    title: "Security Matters",
    desc: "Your data stays yours. We build automations with enterprise-grade security, compliance from day one, and deployment on your terms — cloud, hybrid, or in-house.",
  },
  {
    title: "More Than Automation",
    desc: "We don’t stop at building automated reports. We design AI copilots that highlight anomalies, predict outcomes, and free your team for strategy.",
  },
  {
    title: " Make It Stick",
    desc: "We train your team with playbooks and workshops, track adoption with KPIs, and stay until AI becomes second nature — not shelfware.",
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