"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type Step = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  icon: ReactNode;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Capture Details",
    subtitle: "Chat or type your invoice request",
    description:
      "Describe customer, items, tax, and due date in plain language. WhisprBill structures everything into a clean invoice draft instantly.",
    bullets: ["Natural language input", "Auto field extraction", "GST-ready structure"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v7a2.5 2.5 0 0 1-2.5 2.5H9l-5 4v-4.5A2.5 2.5 0 0 1 1.5 14V7.5A2.5 2.5 0 0 1 4 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 10H16M7.5 13.5H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Refine Draft",
    subtitle: "Review and edit in one focused panel",
    description:
      "Adjust discount, add notes, or correct line items before sending. You can continue via prompts or switch to direct field edits.",
    bullets: ["Live preview updates", "Quick tax and discount edits", "Manual override when needed"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M4 20h4l10.1-10.1a1.5 1.5 0 0 0 0-2.1l-1.9-1.9a1.5 1.5 0 0 0-2.1 0L4 16v4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m12.2 7.8 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Send Invoice",
    subtitle: "Export and share in seconds",
    description:
      "Generate a polished PDF and share through email or messaging instantly. Keep every invoice tracked from one unified workflow.",
    bullets: ["Branded PDF export", "One-click share actions", "Centralized invoice history"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M14 4h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 15 20 4M13 4h7v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function HowItWorksInteractive() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (paused) return;

    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  const current = steps[active];
  const previewCards = [
    {
      heading: "Input Parsed",
      status: "Draft Ready",
      lines: [
        "Client: Stark Industries",
        "Service: UI Development",
        "Amount: $1,200",
      ],
      action: "AI extracted 7 invoice fields",
    },
    {
      heading: "Draft Editor",
      status: "Refining",
      lines: [
        "Discount: 10%",
        "GST: 18% applied",
        "Payment terms: Net 7",
      ],
      action: "2 changes updated live",
    },
    {
      heading: "Delivery Center",
      status: "Ready to Send",
      lines: [
        "PDF generated",
        "Email prepared",
        "Reminder rule enabled",
      ],
      action: "Share to client in one click",
    },
  ];
  const preview = previewCards[active];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-white to-background py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-8 right-8 h-52 w-52 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            How It Works
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-secondary sm:text-4xl lg:text-5xl">
            A guided flow your users can
            <span className="text-primary"> scan in one glance</span>
          </h2>
          <p className="mt-4 text-base text-accent/75 sm:text-lg">
            Step indicators, live progress, and content transitions are now inside one cohesive card.
          </p>
        </div>

        <div
          className="mt-12 rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-[0_20px_60px_rgba(1,38,82,0.10)] backdrop-blur-sm sm:p-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-500"
              style={{ width: `${((active + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {steps.map((step, idx) => {
              const isActive = idx === active;
              const isDone = idx < active;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={`rounded-2xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border-primary/30 bg-primary/5 shadow-sm"
                      : "border-slate-200 bg-white hover:border-primary/20 hover:bg-primary/[0.03]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold ${
                        isActive || isDone ? "bg-primary text-white" : "bg-slate-100 text-gray-blue"
                      }`}
                    >
                      {isDone ? (
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 5.29a1 1 0 0 1 0 1.414l-7.2 7.2a1 1 0 0 1-1.414 0l-3.2-3.2a1 1 0 0 1 1.414-1.414l2.493 2.493 6.493-6.493a1 1 0 0 1 1.414 0Z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        `0${step.id}`
                      )}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-secondary">{step.title}</p>
                      <p className="text-xs text-accent/65">{step.subtitle}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div key={current.id} className="mt-6 grid animate-fade-in gap-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-background p-5 sm:p-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="animate-scale-in">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-secondary text-white">{current.icon}</span>
                Step {current.id}
              </div>
              <h3 className="mt-4 text-2xl font-bold text-secondary sm:text-3xl">{current.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-accent/80 sm:text-base">{current.description}</p>
              <ul className="mt-5 space-y-2">
                {current.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2 text-sm text-accent/80">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 5.29a1 1 0 0 1 0 1.414l-7.2 7.2a1 1 0 0 1-1.414 0l-3.2-3.2a1 1 0 0 1 1.414-1.414l2.493 2.493 6.493-6.493a1 1 0 0 1 1.414 0Z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => setActive((prev) => (prev - 1 + steps.length) % steps.length)}
                  className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-secondary transition-colors hover:bg-slate-50"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setActive((prev) => (prev + 1) % steps.length)}
                  className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Next Step
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/15 bg-white p-4 shadow-sm sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Live Step Preview</p>
              <div key={preview.heading} className="mt-4 animate-fade-in space-y-4 rounded-xl border border-slate-200 bg-background/50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-secondary">{preview.heading}</p>
                    <p className="text-xs text-accent/65">Invoice #WB-{1000 + current.id}</p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                    {preview.status}
                  </span>
                </div>

                <div className="space-y-2.5">
                  {preview.lines.map((line) => (
                    <div
                      key={line}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-accent/85"
                    >
                      {line}
                    </div>
                  ))}
                </div>

                <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700">
                  {preview.action}
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1">
                  {steps.map((item, idx) => (
                    <div
                      key={`chip-${item.id}`}
                      className={`rounded-lg px-2 py-1 text-center text-[11px] font-semibold ${
                        idx === active
                          ? "bg-primary text-white"
                          : idx < active
                            ? "bg-primary/10 text-primary"
                            : "bg-slate-100 text-accent/60"
                      }`}
                    >
                      Step {item.id}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/pricing"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-secondary px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-secondary/90"
              >
                Start Creating Invoices
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
