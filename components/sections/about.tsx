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
          clean data. Together, we speak both{" "}
          <span className="font-semibold">Excel</span> and{" "}
          <span className="font-semibold">API</span>.
        </p>

        <p>
          <span className="font-semibold">We’ve lived your pain.</span>
          <br />
          Endless reconciliations, variance hunts, reports nobody reads. We know
          what steals your time. That’s why we build copilots that handle the
          boring stuff — so humans (
          <span className="font-semibold">yes, that means you</span>) can focus
          on strategy, creativity, and the big picture.
        </p>

        <p>
          <span className="font-semibold">Our mission is simple:</span>
          <br />
          Less time fighting spreadsheets. More time leading with insights. And
          unlike traditional consultants, we don’t just hand you a shiny deck —
          we implement, integrate, and stick around until it actually works.
        </p>

        <p className="italic">
          In short: we make finance teams look like superheroes (minus the
          late-night coffee jitters).
        </p>
      </div>
    </div>
  );
}
