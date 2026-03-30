"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Clock,
  CreditCard,
  ShieldCheck,
  HeadphonesIcon,
  BadgeCheck,
  RefreshCcw,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Zap,
  Bell,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

// ─── Static Data ─────────────────────────────────────────────────────────────

const benefits = [
  {
    Icon: Clock,
    title: "Start in Minutes",
    description:
      "No lengthy setup. Sign up, optionally import your existing data, and start invoicing right away.",
  },
  {
    Icon: CreditCard,
    title: "No Credit Card Required",
    description:
      "Try the Free plan with no upfront payment. Upgrade only when you're ready — no pressure.",
  },
  {
    Icon: ShieldCheck,
    title: "Secure & GST-Compliant",
    description:
      "Encrypted data storage, automated GST calculations, and compliant invoice formats included in all plans.",
  },
  {
    Icon: HeadphonesIcon,
    title: "Onboarding Support",
    description:
      "Get setup help via chat or email. We make sure you're invoicing confidently from day one.",
  },
  {
    Icon: BadgeCheck,
    title: "No Hidden Fees",
    description:
      "What you see is what you pay. No surprise charges, no per-user fees, no transaction limits.",
  },
  {
    Icon: RefreshCcw,
    title: "Cancel Anytime",
    description:
      "No long-term contracts. Downgrade to the Free plan or cancel your subscription with one click.",
  },
];

const faqs = [
  {
    q: "Is WhisprBill really free?",
    a: "Yes. Our Free plan is free forever with no hidden charges — unlimited customers, basic invoicing, and GST compliance at no cost.",
  },
  {
    q: "Can I upgrade or downgrade my plan anytime?",
    a: "Yes. You can upgrade, downgrade, or cancel at any time with no penalties or long-term contracts.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept major credit/debit cards, UPI, net banking, and digital wallets. All payments are processed securely.",
  },
  {
    q: "What happens if I exceed my plan limits?",
    a: "You'll receive a notification and can upgrade your plan. No surprise overage charges.",
  },
  {
    q: "Can I try paid features before upgrading?",
    a: "We're working on a trial experience. Get premium access and we'll notify you as soon as early access opens.",
  },
  {
    q: "Will my data be safe if I cancel?",
    a: "Yes. You can export all your invoices, customer data, and reports before or after cancelling — your data always belongs to you.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

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
        aria-expanded={open}
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">

        {/* ── Pricing Coming Soon Banner ─────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-blue-950 to-primary py-16 sm:py-20 lg:py-24">
          <div className="absolute -left-16 top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center text-white">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
              <Bell className="h-3.5 w-3.5 text-yellow-300" />
              Pricing Coming Soon
            </p>

            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              We're working on{" "}
              <span className="bg-gradient-to-r from-blue-100 to-cyan-200 bg-clip-text text-transparent">
                fair, simple pricing
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
              WhisprBill is in early access. Pricing plans will be revealed soon — the Free plan stays free forever, and paid plans are being designed to be genuinely affordable for Indian MSMEs and freelancers.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/waitlist"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-secondary transition-all hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
              >
                <Zap className="h-4 w-4 text-primary" />
                Get Early Access
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/5 px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                Explore Features
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>

            <ul className="mt-7 flex flex-col items-center justify-center gap-3 text-sm text-blue-100 sm:flex-row sm:gap-6">
              {["Free plan forever", "No credit card needed", "Early access open now"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Existing Pricing Component ─────────────────────────────────── */}
        <Pricing />

        {/* ── Why WhisprBill ─────────────────────────────────────────────── */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Why Choose Us
              </p>
              <h2 className="mt-4 text-3xl font-extrabold text-secondary sm:text-4xl">
                Built different, priced{" "}
                <span className="text-primary">honestly</span>
              </h2>
              <p className="mt-3 text-sm text-accent/70 sm:text-base">
                No inflated feature lists, no gotcha tiers. Here's what every plan actually gives you.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => {
                const Icon = b.Icon;
                return (
                  <div
                    key={b.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(1,38,82,0.10)]"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-4 text-base font-extrabold text-secondary sm:text-lg">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-accent/70">
                      {b.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-b from-slate-50 to-background py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="mb-10 text-center">
              <p className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                FAQ
              </p>
              <h2 className="mt-4 text-3xl font-extrabold text-secondary">
                Pricing questions, answered
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ──────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary to-blue-600 py-16 sm:py-20 text-white">
          <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-extrabold lg:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 mb-8 max-w-xl text-lg opacity-90">
              Early access is open - get premium access and be among the first to use WhisprBill when we launch.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-primary transition-colors hover:bg-blue-50 hover:shadow-lg"
              >
                <Zap className="h-4 w-4" />
                Get Premium Access
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/60 bg-transparent px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                Explore Features
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
            <ul className="mt-6 flex flex-col items-center justify-center gap-3 text-sm opacity-80 sm:flex-row sm:gap-6">
              {["Free plan forever", "No credit card needed", "GST-ready invoicing"].map((item) => (
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


