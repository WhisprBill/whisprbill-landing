import Link from "next/link";

export default function Stats() {
  const stats = [
    {
      value: "15 hrs",
      label: "Average time saved per week",
      detail: "Automated capture, draft, and send flow.",
      valueTone: "from-primary to-blue-500",
    },
    {
      value: "95%",
      label: "Fewer manual invoicing errors",
      detail: "Structured AI parsing reduces entry mistakes.",
      valueTone: "from-secondary to-primary",
    },
    {
      value: "100%",
      label: "GST-ready invoice structure",
      detail: "Consistent format prepared for compliance.",
      valueTone: "from-primary to-cyan-500",
    },
    {
      value: "Secure",
      label: "Privacy-first data handling",
      detail: "Access controls and protected invoice workflows.",
      valueTone: "from-secondary to-primary",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-white to-background py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-6 h-44 w-44 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute right-12 top-16 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-6 left-1/3 h-28 w-28 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-[2rem] border border-primary/15 bg-gradient-to-br from-white via-[#f8fbff] to-[#f5f8fc] p-6 shadow-[0_22px_60px_rgba(1,38,82,0.10)] sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-col gap-5 lg:mb-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                Performance Metrics
              </p>
              <h2 className="text-3xl font-extrabold leading-tight text-secondary sm:text-4xl">
                Faster billing. Better control.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-accent/75 sm:text-base">
                Track outcomes that matter while keeping invoice operations private and secure.
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <Link
                href="/how-it-works"
                className="inline-flex items-center rounded-full border border-primary/25 bg-white px-4 py-2 text-sm font-semibold text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/[0.04] hover:shadow-sm"
              >
                Demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/90 hover:shadow-[0_10px_24px_rgba(1,38,82,0.22)]"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <article
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-b from-white to-primary/[0.03] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_34px_rgba(1,38,82,0.14)] sm:p-5"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-3 flex items-center gap-2">
                  <span className={`inline-block h-2.5 w-2.5 rounded-full ${idx === 3 ? "bg-secondary/70" : "bg-primary/70"}`} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-blue">
                    Insight
                  </span>
                </div>
                <p
                  className={`bg-gradient-to-r ${stat.valueTone} bg-clip-text text-4xl font-extrabold tracking-tight text-transparent transition-all duration-300 group-hover:brightness-110 sm:text-5xl`}
                >
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-semibold text-secondary">{stat.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-accent/75 sm:text-sm">{stat.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
