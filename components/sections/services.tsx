"use client";

type ServiceItem = {
  title: string;
  desc: string;
};

const items: ServiceItem[] = [
  {
    title: "AI Strategy for Finance Teams",
    desc: "We find where AI can cut costs and save hours in your finance processes. From variance checks to faster closes, we map use cases, estimate ROI, and design a 90-day pilot that makes sense for your business.",
  },
  {
    title: "Clean & Connect Your Data",
    desc: "Budgets in Sheets, forecasts in Excel, invoices in SAP… we connect and clean it all so your AI copilots run smoothly. Think of us as the team that makes your numbers actually talk to each other.",
  },
  {
    title: "Choose & Test the Right Models",
    desc: "We pick the right AI model for your needs and build quick prototypes. Whether it’s explaining variances or double-checking forecasts, we prove value fast with live demos, not just promises.",
  },
  {
    title: "AI Copilots in Daily Workflow",
    desc: "Your P&L that explains itself. An AI sidekick that flags anomalies before auditors do. We put copilots right where you work — Excel, Slack, SAP, or even email — so they fit naturally into your workflow.",
  },
  {
    title: "Stay Safe & Compliant",
    desc: "We add audit logs, controls, and EU AI Act-friendly guardrails from day one. So when compliance asks ‘where did that number come from?’, you’ll have the answer ready without breaking a sweat.",
  },
  {
    title: "Train & Scale with Confidence",
    desc: "We train your finance team so they actually use AI tools (and don’t ignore them like another dashboard). Playbooks, workshops, and KPIs help adoption stick — and set you up to scale across the business.",
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
          What we offer you and how we do it? !!!! ALPER !!!!
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-ink/70">
          We do not just advice - we implement and we own the outcomes.
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