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
} from "lucide-react";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

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
      "Try the Free plan with no upfront payment. Upgrade only when you're ready with no pressure.",
  },
  {
    Icon: ShieldCheck,
    title: "Secure and GST-Compliant",
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
    a: "Yes. Our Free plan is free forever with no hidden charges, including unlimited customers and GST-ready invoices.",
  },
  {
    q: "Can I upgrade or downgrade my plan anytime?",
    a: "Yes. You can upgrade, downgrade, or cancel at any time with no penalties or lock-ins.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We support major cards, UPI, net banking, and digital wallets for Indian businesses.",
  },
  {
    q: "What happens if I exceed my plan limits?",
    a: "You will see an in-app notification and can upgrade anytime. We do not surprise you with hidden overage charges.",
  },
  {
    q: "Will my data be safe if I cancel?",
    a: "Yes. You can export invoices, customer data, and reports before or after cancellation. Your data always belongs to you.",
  },
];

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
        <span className="text-sm font-semibold text-secondary sm:text-base">
          {q}
        </span>
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

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-blue-950 to-primary py-14 sm:py-16 lg:py-20">
          <div className="absolute -left-16 top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center text-white">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
              Transparent Pricing
            </p>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Simple plans for{" "}
              <span className="bg-gradient-to-r from-blue-100 to-cyan-200 bg-clip-text text-transparent">
                powerful invoicing
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
              Start with Free and scale when you grow. Built for Indian
              freelancers, MSMEs, and small teams that need fast GST-ready
              billing.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://app.whisprbill.com/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-secondary transition-all hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
              >
                <Zap className="h-4 w-4 text-primary" />
                Start Free
              </a>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/5 px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                See Features
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>

            <ul className="mt-6 flex flex-col items-center justify-center gap-3 text-sm text-blue-100 sm:flex-row sm:gap-6">
              {["Free plan forever", "Instant activation", "Cancel anytime"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2
                      className="h-4 w-4 text-emerald-300"
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </section>

        <Pricing />

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Why WhisprBill
              </p>
              <h2 className="mt-4 text-3xl font-extrabold text-secondary sm:text-4xl">
                Built for real billing work,{" "}
                <span className="text-primary">not bloated dashboards</span>
              </h2>
              <p className="mt-3 text-sm text-accent/70 sm:text-base">
                WhisprBill helps you invoice faster, stay GST-ready, and reduce
                manual billing effort every day.
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

        <section className="relative overflow-hidden bg-gradient-to-br from-primary to-blue-600 py-16 sm:py-20 text-white">
          <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-extrabold lg:text-4xl">
              Ready to streamline invoicing?
            </h2>
            <p className="mx-auto mt-4 mb-8 max-w-xl text-lg opacity-90">
              Launch with the Free plan and upgrade only when your invoice
              volume grows.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://app.whisprbill.com/signup"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-primary transition-colors hover:bg-blue-50 hover:shadow-lg"
              >
                <Zap className="h-4 w-4" />
                Start Free
              </a>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/60 bg-transparent px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                Explore Features
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
            <ul className="mt-6 flex flex-col items-center justify-center gap-3 text-sm opacity-80 sm:flex-row sm:gap-6">
              {["Free plan forever", "No credit card needed", "GST-ready invoicing"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2
                      className="h-4 w-4 text-emerald-300"
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

