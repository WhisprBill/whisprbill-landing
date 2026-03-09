"use client";

import {
  ShieldCheck,
  Bot,
  CheckCircle2,
  Calculator,
  ClipboardList,
  Lock,
  EyeOff,
  FileCheck,
} from "lucide-react";
import Link from "next/link";

// ─── Static Data ─────────────────────────────────────────────────────────────

const steps = [
  {
    step: "1",
    title: "Intent Parsing Only",
    description:
      'The AI reads your natural language request — "Create invoice for ₹50,000" — and understands intent, not your actual business data.',
  },
  {
    step: "2",
    title: "PII Masking Before AI",
    description:
      "Customer names, GSTINs, amounts, and product details are replaced with placeholders before any request reaches the AI layer.",
  },
  {
    step: "3",
    title: "Deterministic Backend",
    description:
      "All calculations, GST rates, and business logic run on our secure backend — not through AI. Math is math, not magic.",
  },
  {
    step: "4",
    title: "AI as Translator Only",
    description:
      "Think of AI as a smart interface layer between you and the system — it makes invoicing conversational, not risky.",
  },
];

const highlights = [
  {
    Icon: Lock,
    bg: "bg-emerald-50 border-emerald-100",
    iconBg: "bg-emerald-500",
    title: "Your Data Stays Yours",
    description:
      "We don't train AI models on your invoices, customer lists, or financial records. Your business intelligence remains confidential.",
  },
  {
    Icon: Calculator,
    bg: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-500",
    title: "No AI Hallucinations in Calculations",
    description:
      "GST rates, totals, and tax breakdowns are computed by rule-based algorithms — not generative AI. Your invoices are always mathematically accurate.",
  },
  {
    Icon: ClipboardList,
    bg: "bg-violet-50 border-violet-100",
    iconBg: "bg-violet-500",
    title: "Audit-Ready Logs",
    description:
      "Every invoice generation is logged with timestamps and user actions — ready for GST audits, financial reviews, and compliance checks.",
  },
];

const stats = [
  { Icon: EyeOff,      value: "PII",   label: "Masked before AI layer" },
  { Icon: CheckCircle2, value: "100%",  label: "Data ownership" },
  { Icon: Bot,          value: "Zero",  label: "AI training on your data" },
  { Icon: FileCheck,    value: "2FA",   label: "On all accounts" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function PrivacySecurity() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-background py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-violet-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            <ShieldCheck className="h-3.5 w-3.5" />
            Privacy-First Architecture
          </p>
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl md:text-5xl">
            AI-Powered.{" "}
            <span className="text-primary">Privacy-First.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-accent/70 sm:text-lg">
            We believe AI should empower your business — not compromise your privacy. Here's exactly how we keep your sensitive data safe while delivering intelligent automation.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left: How AI works */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
              <Bot className="h-7 w-7" strokeWidth={1.6} />
            </div>

            <h3 className="mb-3 text-2xl font-extrabold text-secondary sm:text-3xl">
              How Our AI Actually Works
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-accent/70 sm:text-base">
              WhisprBill uses a <strong className="text-secondary">privacy-by-design architecture</strong> that completely separates conversation from computation — your real data never touches the AI layer.
            </p>

            <div className="space-y-5">
              {steps.map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-extrabold text-secondary">
                      {s.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-accent/70">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="space-y-5">
            {highlights.map((h) => {
              const Icon = h.Icon;
              return (
                <div
                  key={h.title}
                  className={`rounded-2xl border p-6 sm:p-7 ${h.bg}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white ${h.iconBg}`}>
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="mb-1.5 text-lg font-extrabold text-secondary">
                        {h.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-accent/75">
                        {h.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((s) => {
            const Icon = s.Icon;
            return (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:p-6"
              >
                <div className="mx-auto mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </div>
                <p className="text-2xl font-extrabold text-primary sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-accent/60 sm:text-sm">
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
