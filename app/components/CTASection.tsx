import Link from "next/link";

export default function CTASection() {
  const highlights = [
    "Free forever plan available",
    "No credit card required",
    "Set up in 5 minutes",
  ];

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-blue-950 to-primary" />
      <div className="absolute -left-16 top-14 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-6 h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center text-white shadow-2xl backdrop-blur-md sm:p-12">
          <p className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
            Start in Minutes
          </p>

          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Upgrade Your Invoicing Workflow with AI
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base text-blue-100 sm:text-lg">
            Join 5,000+ businesses saving 15+ hours every week with faster invoice creation and automated billing.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-secondary transition-all hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
            >
              Join the Waitlist
            </Link>

            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/15"
            >
              See How It Works
            </Link>
          </div>

          <ul className="mt-7 flex flex-col items-center justify-center gap-3 text-sm text-blue-100 sm:flex-row sm:gap-6">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-200">
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.414l-7.2 7.2a1 1 0 01-1.414 0l-3.2-3.2a1 1 0 011.414-1.414l2.493 2.493 6.493-6.493a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
