  "use client";

  import Link from "next/link";
  import { useState } from "react";
  import {
    Zap,
    CheckCircle2,
    ChevronDown,
    MessageSquareText,
    SlidersHorizontal,
    Send,
    Bot,
    LayoutTemplate,
    ShieldCheck,
  } from "lucide-react";
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  import HowItWorksInteractive from "../components/HowItWorksInteractive";

  // ─── Static Data ────────────────────────────────────────────────────────────

  const breakdown = [
    {
      step: "01",
      icon: MessageSquareText,
      title: "Chat Naturally",
      description:
        "Describe the invoice in plain English or Hindi. No forms — just type like you'd message a colleague.",
      example: '"Invoice ABC Corp, 5 laptops ₹50k each, 18% GST"',
      gradient: "from-blue-500 to-cyan-500",
      chip: "bg-blue-50 border-blue-100 text-blue-700",
    },
    {
      step: "02",
      icon: SlidersHorizontal,
      title: "Review & Refine",
      description:
        "Tweak via follow-up prompts or switch to manual edit mode for full field-level control.",
      example: '"Apply 10% discount and change due date to Net 30"',
      gradient: "from-violet-500 to-purple-500",
      chip: "bg-violet-50 border-violet-100 text-violet-700",
    },
    {
      step: "03",
      icon: Send,
      title: "Export & Share",
      description:
        "One click generates a branded GST-ready PDF. Send via Email, WhatsApp, or download directly.",
      example: "Delivered in under 3 seconds",
      gradient: "from-emerald-500 to-teal-500",
      chip: "bg-emerald-50 border-emerald-100 text-emerald-700",
    },
  ];

  const timeRows = [
    { task: "Find customer in database",  traditional: "45 sec",  ai: "0 sec (AI finds it)",       saved: "45 sec" },
    { task: "Enter customer details",     traditional: "60 sec",  ai: "0 sec (auto-filled)",        saved: "60 sec" },
    { task: "Add products / services",    traditional: "90 sec",  ai: "5 sec (describe in chat)",   saved: "85 sec" },
    { task: "Calculate taxes",            traditional: "30 sec",  ai: "0 sec (automatic)",          saved: "30 sec" },
    { task: "Apply discounts",            traditional: "20 sec",  ai: "2 sec ('add 10% off')",      saved: "18 sec" },
    { task: "Format & branding",          traditional: "40 sec",  ai: "0 sec (template)",           saved: "40 sec" },
    { task: "Generate PDF",               traditional: "15 sec",  ai: "3 sec (one-click)",          saved: "12 sec" },
  ];

  const faqs = [
    {
      q: "How long does it take to create an invoice?",
      a: "Under 30 seconds. Describe what you need, AI drafts it, you review and export. No form-filling required.",
    },
    {
      q: "Do I need training to use WhisprBill?",
      a: "None. If you can send a text message, you can create invoices. The AI understands English and Hindi naturally.",
    },
    {
      q: "Can I edit after the AI generates a draft?",
      a: "Yes — chat corrections like 'Change due date to 30 days' work instantly, or flip to manual edit mode for full field control.",
    },
    {
      q: "Does it handle complex invoice requirements?",
      a: "Yes — multi-product, tiered pricing, discounts, shipping charges, custom fields. Just describe it.",
    },
    {
      q: "How does the AI remember my customers?",
      a: "Every invoice trains your workspace. Customer details, products, and pricing are stored and auto-filled next time.",
    },
    {
      q: "Can I use it on mobile?",
      a: "Fully. The chat interface is built mobile-first — create invoices from client sites, on the road, anywhere.",
    },
  ];

  const relatedFeatures = [
    {
      title: "AI Conversational Invoicing",
      description: "See how natural prompts become structured invoice drafts in seconds.",
      link: "/features/ai-invoicing",
      badge: "AI Workflow",
      Icon: Bot,
    },
    {
      title: "Professional Templates",
      description: "Industry-ready templates for cleaner branding and faster payments.",
      link: "/features/templates",
      badge: "Design System",
      Icon: LayoutTemplate,
    },
    {
      title: "GST Compliance",
      description: "Tax logic, filing support, and compliant invoice formatting — built in.",
      link: "/features/gst-compliance",
      badge: "Tax Engine",
      Icon: ShieldCheck,
    },
  ];

  // ─── Sub-components ──────────────────────────────────────────────────────────

  function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
      <div
        className={`rounded-2xl border bg-white px-6 py-5 transition-all duration-200 ${
          open ? "border-primary/25 shadow-sm" : "border-slate-200"
        }`}
      >
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 text-left"
          onClick={() => setOpen(!open)}
        >
          <span className="text-sm font-semibold text-secondary sm:text-base">{q}</span>
          <ChevronDown
            className={`h-4 w-4 flex-shrink-0 text-primary transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            strokeWidth={2}
          />
        </button>
        {open && (
          <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-relaxed text-accent/75">
            {a}
          </p>
        )}
      </div>
    );
  }

  // ─── Page ────────────────────────────────────────────────────────────────────

  export default function HowItWorksPage() {
    return (
      <>
        

        <Navbar />

        <main className="min-h-screen bg-background">

          {/* ── Hero ─────────────────────────────────────────────────────── */}
          <section className="relative overflow-hidden py-20 lg:py-28">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-blue-950 to-primary" />
            <div className="absolute -left-16 top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center text-white shadow-2xl backdrop-blur-md sm:p-10 lg:p-14">
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
                  <Zap className="h-3.5 w-3.5 text-yellow-300" fill="currentColor" />
                  Lightning-Fast Process
                </p>

                <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                  Invoicing in
                  <span className="bg-gradient-to-r from-blue-100 to-cyan-200 bg-clip-text text-transparent">
                    {" "}30 Seconds
                  </span>
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-blue-100 sm:text-lg lg:text-xl">
                  No forms. No dropdowns. No training. Just chat naturally and watch professional invoices appear instantly.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/waitlist"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-bold text-secondary transition-all hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
                  >
                    Get Premium Access
                  </Link>
                  <a
                    href="#interactive-demo"
                    className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/5 px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/15"
                  >
                    See It In Action
                  </a>
                </div>

                <ul className="mt-7 flex flex-col items-center justify-center gap-3 text-sm text-blue-100 sm:flex-row sm:gap-6">
                  {["No credit card", "30-second setup", "Free forever plan"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-300" strokeWidth={2} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── Interactive 3-Step Demo ───────────────────────────────────── */}
          <div id="interactive-demo">
            <HowItWorksInteractive />
          </div>

          {/* ── Detailed Breakdown ───────────────────────────────────────── */}
          <section className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="mx-auto max-w-2xl text-center">
                <p className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  Step by Step
                </p>
                <h2 className="mt-4 text-3xl font-extrabold text-secondary lg:text-4xl">
                  Everything you need,{" "}
                  <span className="text-primary">nothing you don't</span>
                </h2>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {breakdown.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.step}
                      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(1,38,82,0.10)]"
                    >
                      {/* Watermark step number */}
                      <span className="absolute right-4 top-3 select-none text-7xl font-black text-slate-100">
                        {item.step}
                      </span>

                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-md`}>
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </div>

                      <h3 className="mt-5 text-lg font-extrabold text-secondary">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-accent/75">
                        {item.description}
                      </p>

                      <div className={`mt-5 inline-block rounded-xl border px-3 py-2 text-xs font-medium ${item.chip}`}>
                        {item.example}
                      </div>

                      {/* Connector arrow between cards */}
                      {idx < breakdown.length - 1 && (
                        <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                            <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path d="M5 12h14M13 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── Time Comparison ──────────────────────────────────────────── */}
          <section className="bg-gradient-to-b from-slate-50 to-background py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="mx-auto mb-12 max-w-3xl text-center">
                <p className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  Time Comparison
                </p>
                <h2 className="mt-4 text-3xl font-extrabold text-secondary lg:text-4xl">
                  Traditional workflow vs WhisprBill AI
                </h2>
                <p className="mt-3 text-accent/70">
                  See how conversational invoicing removes friction at every step.
                </p>
              </div>

              {/* Summary stats */}
              <div className="mb-6 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Traditional", value: "5m 20s", color: "text-red-600",     border: "border-slate-200",    bg: "" },
                  { label: "WhisprBill AI", value: "10s",  color: "text-secondary",   border: "border-primary/20",   bg: "bg-gradient-to-br from-white to-primary/5" },
                  { label: "Time Saved",   value: "97%",   color: "text-emerald-700", border: "border-emerald-200",  bg: "bg-emerald-50" },
                ].map((s) => (
                  <div key={s.label} className={`rounded-xl border ${s.border} ${s.bg} p-4 text-center shadow-sm`}>
                    <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${s.color}`}>{s.label}</p>
                    <p className={`mt-2 text-2xl font-extrabold ${s.color}`}>{s.value}</p>
                    <p className="text-xs text-accent/65">Average time per invoice</p>
                  </div>
                ))}
              </div>

              {/* Comparison table */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_14px_35px_rgba(1,38,82,0.08)]">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[680px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50">
                        <th className="p-4 text-left text-sm font-bold text-secondary">Task</th>
                        <th className="p-4 text-center text-sm font-bold text-red-600">Traditional</th>
                        <th className="p-4 text-center text-sm font-bold text-primary bg-primary/10">WhisprBill AI</th>
                        <th className="p-4 text-center text-sm font-bold text-emerald-700">Saved</th>
                      </tr>
                    </thead>
                    <tbody>
                      {timeRows.map((row) => (
                        <tr key={row.task} className="border-t border-slate-100 transition-colors hover:bg-slate-50/70">
                          <td className="p-4 text-sm font-medium text-secondary">{row.task}</td>
                          <td className="p-4 text-center text-sm text-accent/70">{row.traditional}</td>
                          <td className="p-4 text-center text-sm font-semibold text-primary bg-primary/[0.04]">{row.ai}</td>
                          <td className="p-4 text-center text-sm font-bold text-emerald-700">{row.saved}</td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-primary/20 bg-gradient-to-r from-primary/5 via-white to-emerald-50">
                        <td className="p-4 text-sm font-bold text-secondary">Total</td>
                        <td className="p-4 text-center text-sm font-bold text-red-600">5 min 20 sec</td>
                        <td className="p-4 text-center text-sm font-bold text-primary bg-primary/10">10 seconds</td>
                        <td className="p-4 text-center text-base font-extrabold text-emerald-700">5 min 10 sec</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-primary/15 bg-gradient-to-r from-secondary via-blue-950 to-primary p-6 text-center text-white">
                <p className="text-base leading-relaxed text-blue-100 sm:text-lg">
                  <span className="font-bold text-white">That's a 97% reduction in invoicing time.</span>{" "}
                  Create up to 32 invoices in the time traditional tools take for one — GST-ready every time.
                </p>
              </div>
            </div>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────────── */}
          <section className="bg-gradient-to-b from-background to-white py-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
              <div className="mb-10 text-center">
                <p className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  FAQ
                </p>
                <h2 className="mt-4 text-3xl font-extrabold text-secondary">
                  Questions about the process
                </h2>
              </div>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </section>

          {/* ── Related Features ─────────────────────────────────────────── */}
          <section className="relative overflow-hidden bg-gradient-to-b from-background via-white to-background py-20">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-secondary/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <p className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  Next Steps
                </p>
                <h2 className="mt-4 text-3xl font-extrabold text-secondary sm:text-4xl">
                  Explore related features
                </h2>
                <p className="mt-3 text-accent/70 sm:text-lg">
                  Dive deeper into the capabilities behind fast AI invoicing.
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {relatedFeatures.map((feature) => (
                  <Link
                    key={feature.title}
                    href={feature.link}
                    className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-white p-6 shadow-[0_12px_30px_rgba(1,38,82,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_22px_45px_rgba(1,38,82,0.16)]"
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-primary/10 via-cyan-100/40 to-secondary/10 opacity-70" />

                    <div className="relative flex items-center justify-between">
                      <span className="rounded-full border border-primary/20 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary">
                        {feature.badge}
                      </span>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                        <feature.Icon className="h-5 w-5" strokeWidth={1.7} />
                      </span>
                    </div>

                    <h3 className="relative mt-5 text-xl font-bold text-secondary transition-colors group-hover:text-primary">
                      {feature.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-accent/75">
                      {feature.description}
                    </p>

                    <div className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      <span>Explore feature</span>
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-secondary to-primary px-8 py-3.5 text-base font-bold text-white shadow-[0_16px_34px_rgba(1,38,82,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(1,38,82,0.34)]"
                >
                  View All Features
                </Link>
              </div>
            </div>
          </section>

          {/* ── Final CTA ────────────────────────────────────────────────── */}
          <section className="bg-gradient-to-br from-primary to-blue-600 py-20 text-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
              <h2 className="text-3xl font-extrabold lg:text-4xl">
                Ready to experience 30-second invoicing?
              </h2>
              <p className="mt-4 mb-8 text-lg opacity-90">
                Early access is open — no credit card, no setup, no learning curve.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/waitlist"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-bold text-primary transition-colors hover:bg-blue-50 hover:shadow-lg"
                >
                  Get Premium Access
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/60 bg-transparent px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
                >
                  Explore All Features
                </Link>
              </div>
              <ul className="mt-6 flex flex-col items-center justify-center gap-3 text-sm opacity-80 sm:flex-row sm:gap-6">
                {["30-second invoices", "No training needed", "Free forever plan"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </main>

        <Footer />
      </>
    );
  }

