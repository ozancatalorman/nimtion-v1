"use client";

type ServiceItem = { title: string; desc: string };

const items: ServiceItem[] = [
  {
    title: "Finance Ops Automation",
    desc: "Reconciliations, royalty/fee reports, cash flows and more..."
  },
  {
    title: "Data Pipelines",
    desc: "Validate, transform, and sync across CRMs, ERPs, spreadsheets, and DBs; and of course Excel :D"
  },
  {
    title: "AI Powered Analyzes on Your Reports",
    desc: "We can make best AI models pre-analyze your reports after automation process."
  },
  {
    title: "Dashboards and QA",
    desc: "Consistent tables, QA checks, and single-source-of-truth exports."
  },
  {
    title: "Process Design",
    desc: "Map the real workflow, remove friction, and measure ROI quickly. We also want immediate results, you are not alone."
  },
  {
    title: "Lightweight Integrations",
    desc: "APIs, webhooks, Sheets, and internal tools—no heavy platforms required. All in-house, not a subscription model."
  }
];

/** Accent helpers: line bg + matching number text color */
const accentByIndex = (i: number) =>
  i % 3 === 0
    ? { line: "bg-accent-2/60", text: "text-accent-2" } // purple
    : i % 3 === 1
    ? { line: "bg-accent-1/60", text: "text-accent-1" } // mint
    : { line: "bg-accent-3/60", text: "text-accent-3" }; // amber

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
      className={`mb-12 ${align === "left" ? "text-right pr-8" : "text-left pl-8"}`}
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
      {/* Section heading */}
      <h2 className="mb-16 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
        What Can We Offer You? ALPER REVIZE LAZIM
      </h2>

      <div className="grid md:grid-cols-2">
        {/* left column: 1,2,3 */}
        <div>
          {items.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.title} i={i} s={s} align="right" />
          ))}
        </div>

        {/* right column: 4,5,6 */}
        <div>
          {items.slice(3).map((s, i) => (
            <ServiceCard key={s.title} i={i + 3} s={s} align="left" />
          ))}
        </div>
      </div>
    </section>
  );
}