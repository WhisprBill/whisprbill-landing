import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  ServerCrash,
  FileSearch,
  UserCog,
  CreditCard,
  EyeOff,
  Download,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrivacySecurity from "../components/PrivacySecurity";
import FAQItem from "../components/FAQItem";

// ─── Static Data ─────────────────────────────────────────────────────────────

const securityFeatures = [
  {
    Icon: EyeOff,
    title: "PII Masking Before AI",
    description:
      "Customer names, GSTINs, phone numbers, and amounts are replaced with placeholders before any request reaches the AI layer. Your actual business data never leaves our database.",
    details: [
      "Real data stays in your DB",
      "AI sees anonymised intent only",
      "No business data in AI prompts",
    ],
  },
  {
    Icon: Lock,
    title: "Encrypted at Every Layer",
    description:
      "Data is encrypted both at rest and in transit. Whether your data is stored or moving between your device and our servers, it's always protected.",
    details: ["Encrypted at rest", "TLS in transit", "Hosted in India"],
  },
  {
    Icon: KeyRound,
    title: "Secure Authentication",
    description:
      "Sign in with Google OAuth or email. We use refresh token rotation with tokens stored securely server-side — not in browser storage.",
    details: [
      "Google OAuth support",
      "Refresh token rotation",
      "Secure server-side storage",
    ],
  },
  {
    Icon: Smartphone,
    title: "Two-Factor Authentication",
    description:
      "2FA is live and available on all accounts. We strongly recommend enabling it for anyone with access to financial data.",
    details: [
      "Available on all plans",
      "Authenticator app support",
      "Adds a second layer to login",
    ],
  },
  {
    Icon: CreditCard,
    title: "Payment Security",
    description:
      "Payments are processed by a trusted Indian payment provider — we never handle or store card details. Every payment event is cryptographically verified before any action is taken.",
    details: [
      "No card data stored",
      "Webhook signature verification",
      "India-native payment processing",
    ],
  },
  {
    Icon: FileSearch,
    title: "Activity & Webhook Logs",
    description:
      "Every key action — invoice creation, payment event, login — is logged with timestamps. A full trail for audit and dispute resolution.",
    details: [
      "Invoice & payment event logs",
      "Webhook delivery history",
      "User activity timestamps",
    ],
  },
  {
    Icon: UserCog,
    title: "Role-Based Access Control",
    description:
      "Assign team members specific roles so they only access what's relevant to their work. Admins control permissions across the workspace.",
    details: [
      "Per-user role assignment",
      "Workspace-level controls",
      "Admin permission management",
    ],
  },
  {
    Icon: Download,
    title: "Data Portability",
    description:
      "Export your complete data — customers, products, invoices, and history — in standard formats at any time. No restrictions, no delays.",
    details: [
      "CSV and JSON export",
      "Full history included",
      "Export before or after cancelling",
    ],
  },
  {
    Icon: ServerCrash,
    title: "Managed Backups",
    description:
      "Your database is backed up on a regular schedule by our infrastructure provider. Your data is not at risk from a single point of failure.",
    details: [
      "Automated backup schedule",
      "Point-in-time recovery",
      "No single point of failure",
    ],
  },
];

const privacyCommitments = [
  {
    title: "We Never Sell Your Data",
    description:
      "Your customer lists, invoices, and financial information will never be sold or shared with third parties for commercial purposes.",
  },
  {
    title: "AI Never Sees Your Real Business Data",
    description:
      "PII masking ensures that names, GSTINs, amounts, and product details are anonymised before reaching the AI layer. The AI parses intent — not your actual records.",
  },
  {
    title: "Deterministic Calculations, Not AI Guesses",
    description:
      "All GST calculations, tax breakdowns, and invoice totals are computed by rule-based backend logic — not by generative AI. Zero hallucinations on financial figures.",
  },
  {
    title: "You Own Your Data Completely",
    description:
      "Export everything in standard formats at any time. Cancel your account and take all your data with you — no lock-in.",
  },
  {
    title: "Transparent Data Processing",
    description:
      "We clearly document what data we collect, why we need it, and how it's processed. No hidden surprises.",
  },
];

const stats = [
  { value: "2FA", label: "Available on all accounts" },
  { value: "PII", label: "Masked before AI layer" },
  { value: "Zero", label: "Card data stored" },
  { value: "100%", label: "Data ownership" },
];

const faqs = [
  {
    q: "Does WhisprBill send my business data to AI models?",
    a: "No. Before any request reaches the AI layer, real customer names, GSTINs, and amounts are replaced with placeholders. The AI only sees anonymised intent — your actual business data never leaves our database.",
  },
  {
    q: "How does WhisprBill prevent AI hallucinations in invoices?",
    a: "GST rates, totals, and tax breakdowns are computed by deterministic rule-based algorithms on our backend — not by generative AI. The AI only parses your intent; all maths runs on verified, predictable logic.",
  },
  {
    q: "Where is my data stored?",
    a: "All data is stored on AWS ap-south-1 (Mumbai), keeping your business data within Indian jurisdiction.",
  },
  {
    q: "How are payments secured?",
    a: "Payments are processed entirely by Razorpay. WhisprBill verifies every payment webhook using cryptographic signature verification via Node.js — we never store raw card or payment details.",
  },
  {
    q: "Is two-factor authentication available?",
    a: "Yes — 2FA is live on all accounts. We recommend enabling it for anyone with access to invoicing and financial data.",
  },
  {
    q: "Can I export all my data?",
    a: "Yes. Export your complete dataset — customers, invoices, products, and history — in CSV or JSON format at any time. No restrictions.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "You can export everything before cancelling. Reach out to us and we'll ensure a clean handoff of your data.",
  },
  {
    q: "Does WhisprBill have formal security certifications?",
    a: "We're an early-stage product and don't currently hold independent certifications like SOC 2 or ISO 27001. Our infrastructure providers (AWS and Supabase) carry their own certifications. We're building toward formal audits as we scale.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SecurityPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-blue-950 to-primary py-16 sm:py-20 lg:py-28">
          <div className="absolute -left-16 top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center text-white">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
              Security & Privacy
            </p>

            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
              AI-Powered.{" "}
              <span className="bg-gradient-to-r from-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Privacy-First.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-blue-100 sm:text-lg lg:text-xl">
              We believe AI should empower your business — not compromise your
              privacy. Here's exactly how we keep your sensitive financial data
              secure while delivering intelligent automation.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-secondary transition-all hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
              >
                Get Early Access
              </Link>
              <a
                href="#security-details"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/5 px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                See How It Works
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
            </div>

            <ul className="mt-7 flex flex-col items-center justify-center gap-3 text-sm text-blue-100 sm:flex-row sm:gap-6">
              {[
                "PII masked before AI",
                "Hosted in India",
                "Payments verified cryptographically",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 text-emerald-300"
                    strokeWidth={2}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Interactive Component ──────────────────────────────────────── */}
        <div id="security-details">
          <PrivacySecurity />
        </div>

        {/* ── Security Features Grid ─────────────────────────────────────── */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Security Architecture
              </p>
              <h2 className="mt-4 text-3xl font-extrabold text-secondary sm:text-4xl">
                Layered protection for{" "}
                <span className="text-primary">your financial data</span>
              </h2>
              <p className="mt-3 text-sm text-accent/70 sm:text-base">
                Built on trusted infrastructure, with security decisions made at
                every layer of the stack.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {securityFeatures.map((feature) => {
                const Icon = feature.Icon;
                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_48px_rgba(1,38,82,0.10)]"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-4 text-base font-extrabold text-secondary sm:text-lg">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-accent/70">
                      {feature.description}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {feature.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2 text-xs text-accent/70"
                        >
                          <CheckCircle2
                            className="h-3.5 w-3.5 shrink-0 text-emerald-500"
                            strokeWidth={2}
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Privacy Commitments ────────────────────────────────────────── */}
        <section className="bg-gradient-to-b from-slate-50 to-background py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <p className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Our Commitments
              </p>
              <h2 className="mt-4 text-3xl font-extrabold text-secondary">
                What we promise about your data
              </h2>
            </div>

            <div className="space-y-4">
              {privacyCommitments.map((c) => (
                <div
                  key={c.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2
                      className="h-4 w-4 text-primary"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-secondary sm:text-lg">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-accent/75">
                      {c.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

       

        {/* ── Stats Strip ───────────────────────────────────────────────── */}
        <section className="bg-gradient-to-r from-secondary via-blue-950 to-primary py-10 sm:py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center text-white">
                  <p className="text-2xl font-extrabold sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-blue-200 sm:text-sm">
                    {s.label}
                  </p>
                </div>
              ))}
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
                Security & privacy questions
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
              Security you can verify. AI you can trust.
            </h2>
            <p className="mx-auto mt-4 mb-8 max-w-xl text-lg opacity-90">
              Early access is open. No credit card, no surprises.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-primary transition-colors hover:bg-blue-50 hover:shadow-lg"
              >
                Get Early Access
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
              {[
                "PII masked before AI",
                "2FA on all accounts",
                "Your data stays yours",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 text-emerald-300"
                    strokeWidth={2}
                  />
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
