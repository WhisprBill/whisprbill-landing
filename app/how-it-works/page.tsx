import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HowItWorksInteractive from "../components/HowItWorksInteractive";


export const metadata: Metadata = {
  title: "How It Works - AI Invoice Creation in 3 Easy Steps | WhisprBill",
  description: "See how WhisprBill creates professional invoices in 30 seconds. Chat naturally → AI generates invoice → Export & share. No forms, no training, just results.",
  keywords: [
    "how invoice software works",
    "AI invoicing tutorial",
    "invoice creation steps",
    "automated billing process",
    "invoice generator guide",
    "WhisprBill tutorial"
  ],
  openGraph: {
    title: "How WhisprBill Works - 3 Simple Steps to Perfect Invoices",
    description: "From conversation to professional invoice in under 30 seconds. See our AI-powered workflow in action.",
    url: "https://whisprbill.com/how-it-works",
    images: [
      {
        url: "/og-how-it-works.png",
        width: 1200,
        height: 630,
        alt: "WhisprBill How It Works Process",
      },
    ],
  },
  alternates: {
    canonical: "https://whisprbill.com/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Create Invoices with WhisprBill AI",
            "description": "Create professional invoices in 3 simple steps using conversational AI",
            "totalTime": "PT30S",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Chat Naturally",
                "text": "Talk to your invoice assistant like a human. No forms, no dropdowns. Just type 'Create an invoice for Stark Industries for $1200 for web development' and our AI extracts details instantly.",
                "image": "https://whisprbill.com/wbill-chatwithai.png"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Review & Refine",
                "text": "AI generates a draft invoice instantly. Want to add a discount? Say 'Apply 10% off.' Need manual control? Switch to edit mode and tweak every detail until it's pixel-perfect.",
                "image": "https://whisprbill.com/wbill-dashboard.png"
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Export & Share",
                "text": "Generate a professional, branded PDF in seconds. Share directly via WhatsApp, Email, or download for your records. Your client gets it instantly.",
                "image": "https://whisprbill.com/wbill-invoice-preview.png"
              }
            ]
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does it take to create an invoice with WhisprBill?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most users create complete invoices in under 30 seconds. Simply describe what you need in natural language, the AI generates a draft, you review it, and export. No form-filling or data entry required."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need training to use WhisprBill?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No training needed! WhisprBill works like having a conversation. If you can send a text message, you can create invoices. The AI understands natural language including English and Hindi."
                }
              },
              {
                "@type": "Question",
                "name": "Can I edit invoices after AI generates them?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! You can make quick edits by chatting ('Change due date to 30 days') or switch to manual edit mode for complete control over every field and detail."
                }
              }
            ]
          })
        }}
      />

      <Navbar />
      
      <main className="min-h-screen bg-background">
                {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-blue-950 to-primary" />
          <div className="absolute -left-16 top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center text-white shadow-2xl backdrop-blur-md sm:p-10 lg:p-14">
              <p className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
                Lightning-Fast Process
              </p>

              <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Invoicing in
                <span className="bg-gradient-to-r from-blue-100 to-cyan-200 bg-clip-text text-transparent"> 30 Seconds</span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-blue-100 sm:text-lg lg:text-xl">
                No forms to fill. No dropdowns to navigate. No training required. Just chat naturally and watch professional invoices appear instantly.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-bold text-secondary transition-all hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
                >
                  Try It Free
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

        {/* Interactive 3-Step Component */}
        <div id="interactive-demo">
          <HowItWorksInteractive />
        </div>

                {/* Detailed Breakdown */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <p className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                Detailed Breakdown
              </p>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-secondary">
                Understand Each Step at a Glance
              </h2>
              <p className="mt-3 text-accent/70">
                Clean, guided steps so users instantly know what happens and what to do next.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path d="M6 9h12M6 13h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H10l-4 3v-3A2.5 2.5 0 0 1 3.5 13V6.5A2.5 2.5 0 0 1 4 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Step 1</p>
                <h3 className="mt-2 text-xl font-bold text-secondary">Chat Naturally</h3>
                <p className="mt-3 text-sm leading-relaxed text-accent/80">
                  Describe the invoice in plain language. AI understands customer, items, tax, and pricing context instantly.
                </p>

                <div className="mt-5 rounded-xl bg-blue-50/70 border border-blue-100 p-4">
                  <p className="text-xs font-semibold text-secondary mb-2">Example prompt</p>
                  <p className="text-sm text-accent/80">"Create invoice for ABC Corp, 5 laptops at INR 50,000 each, 18% GST"</p>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-accent/75">
                  <li className="flex items-center gap-2"><span className="text-primary">�</span>Auto-identifies customer details</li>
                  <li className="flex items-center gap-2"><span className="text-primary">�</span>Fetches tax and billing fields</li>
                  <li className="flex items-center gap-2"><span className="text-primary">�</span>Builds invoice draft instantly</li>
                </ul>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path d="M4 20h4l10-10a1.4 1.4 0 0 0 0-2L16 6a1.4 1.4 0 0 0-2 0L4 16v4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="m12 8 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Step 2</p>
                <h3 className="mt-2 text-xl font-bold text-secondary">Review and Refine</h3>
                <p className="mt-3 text-sm leading-relaxed text-accent/80">
                  AI prepares a ready draft. Make instant updates by chat or switch to manual mode for full field-level control.
                </p>

                <div className="mt-5 rounded-xl bg-purple-50/70 border border-purple-100 p-4">
                  <p className="text-xs font-semibold text-secondary mb-2">Quick edits</p>
                  <div className="flex flex-wrap gap-2">
                    {["Apply 10% discount", "Update due date", "Add shipping charges"].map((edit) => (
                      <span key={edit} className="rounded-full bg-white border border-purple-100 px-3 py-1 text-xs font-medium text-accent/80">
                        {edit}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-accent/75">
                  <li className="flex items-center gap-2"><span className="text-primary">�</span>Chat-based corrections in seconds</li>
                  <li className="flex items-center gap-2"><span className="text-primary">�</span>Manual mode for precise control</li>
                  <li className="flex items-center gap-2"><span className="text-primary">�</span>Live preview before export</li>
                </ul>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path d="M14 4h6v6M20 4l-9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 5H5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Step 3</p>
                <h3 className="mt-2 text-xl font-bold text-secondary">Export and Share</h3>
                <p className="mt-3 text-sm leading-relaxed text-accent/80">
                  Generate a polished PDF and deliver instantly. Clients receive professional invoices with clear payment details.
                </p>

                <div className="mt-5 rounded-xl bg-green-50/70 border border-green-100 p-4">
                  <p className="text-xs font-semibold text-secondary mb-2">Delivery channels</p>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <span className="rounded-lg bg-white border border-green-100 px-2 py-2 text-xs font-medium text-accent/80">Email</span>
                    <span className="rounded-lg bg-white border border-green-100 px-2 py-2 text-xs font-medium text-accent/80">WhatsApp</span>
                    <span className="rounded-lg bg-white border border-green-100 px-2 py-2 text-xs font-medium text-accent/80">Download</span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-accent/75">
                  <li className="flex items-center gap-2"><span className="text-primary">�</span>Branded, GST-ready PDF output</li>
                  <li className="flex items-center gap-2"><span className="text-primary">�</span>One-click sharing options</li>
                  <li className="flex items-center gap-2"><span className="text-primary">�</span>Professional format for faster payments</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

                {/* Time Comparison */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                Time Comparison
              </p>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-secondary">
                Traditional Workflow vs WhisprBill AI
              </h2>
              <p className="mt-3 text-accent/70">
                See how conversational invoicing cuts friction and removes repetitive work at every step.
              </p>
            </div>

            <div className="mb-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <p className="text-xs uppercase tracking-[0.12em] text-gray-blue font-semibold">Traditional</p>
                <p className="mt-2 text-2xl font-extrabold text-red-600">5m 20s</p>
                <p className="text-xs text-accent/65">Average time per invoice</p>
              </div>
              <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-white to-primary/5 p-4 text-center shadow-sm">
                <p className="text-xs uppercase tracking-[0.12em] text-primary font-semibold">WhisprBill AI</p>
                <p className="mt-2 text-2xl font-extrabold text-secondary">10s</p>
                <p className="text-xs text-accent/65">Average time per invoice</p>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center shadow-sm">
                <p className="text-xs uppercase tracking-[0.12em] text-emerald-700 font-semibold">Time Saved</p>
                <p className="mt-2 text-2xl font-extrabold text-emerald-700">97%</p>
                <p className="text-xs text-emerald-700/80">Up to 5m 10s faster</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_14px_35px_rgba(1,38,82,0.08)]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px]">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="p-4 text-left text-sm font-bold text-secondary">Task</th>
                      <th className="p-4 text-center text-sm font-bold text-red-600">Traditional</th>
                      <th className="p-4 text-center text-sm font-bold text-primary bg-primary/10 rounded-t-xl">WhisprBill AI</th>
                      <th className="p-4 text-center text-sm font-bold text-emerald-700">Time Saved</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { task: "Find customer in database", traditional: "45 seconds", whisprbill: "0 sec (AI finds it)", saved: "45 sec" },
                      { task: "Enter customer details", traditional: "60 seconds", whisprbill: "0 sec (auto-filled)", saved: "60 sec" },
                      { task: "Add products/services", traditional: "90 seconds", whisprbill: "5 sec (describe in chat)", saved: "85 sec" },
                      { task: "Calculate taxes", traditional: "30 seconds", whisprbill: "0 sec (automatic)", saved: "30 sec" },
                      { task: "Apply discounts", traditional: "20 seconds", whisprbill: "2 sec ('add 10% off')", saved: "18 sec" },
                      { task: "Format and branding", traditional: "40 seconds", whisprbill: "0 sec (template)", saved: "40 sec" },
                      { task: "Generate PDF", traditional: "15 seconds", whisprbill: "3 sec (one-click)", saved: "12 sec" },
                    ].map((row, index) => (
                      <tr key={index} className="border-t border-slate-100 hover:bg-slate-50/70 transition-colors">
                        <td className="p-4 text-sm font-medium text-secondary">{row.task}</td>
                        <td className="p-4 text-center text-sm text-accent/70">{row.traditional}</td>
                        <td className="p-4 text-center text-sm font-semibold text-primary bg-primary/[0.06]">{row.whisprbill}</td>
                        <td className="p-4 text-center text-sm font-bold text-emerald-700">{row.saved}</td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-primary/20 bg-gradient-to-r from-primary/5 via-white to-emerald-50">
                      <td className="p-4 text-sm font-bold text-secondary">Total Time</td>
                      <td className="p-4 text-center text-sm font-bold text-red-600">5 min 20 sec</td>
                      <td className="p-4 text-center text-sm font-bold text-primary bg-primary/10 rounded-b-xl">10 seconds</td>
                      <td className="p-4 text-center text-base font-extrabold text-emerald-700">5 min 10 sec</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-primary/15 bg-gradient-to-r from-secondary via-blue-950 to-primary p-6 text-center text-white">
              <p className="text-base leading-relaxed text-blue-100 sm:text-lg">
                <span className="font-bold text-white">That is a 97% reduction in invoicing time.</span> Create up to 32 invoices in the time traditional tools take for one, while keeping GST-ready quality.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Common Questions About Our Process
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "How long does it take to create an invoice with WhisprBill?",
                  a: "Most users create complete invoices in under 30 seconds. Simply describe what you need in natural language, the AI generates a draft, you review it, and export. No form-filling or data entry required."
                },
                {
                  q: "Do I need training to use WhisprBill?",
                  a: "No training needed! WhisprBill works like having a conversation. If you can send a text message, you can create invoices. The AI understands natural language including English and Hindi."
                },
                {
                  q: "Can I edit invoices after AI generates them?",
                  a: "Absolutely! You can make quick edits by chatting ('Change due date to 30 days') or switch to manual edit mode for complete control over every field and detail."
                },
                {
                  q: "What if I have complex invoice requirements?",
                  a: "The AI handles complex scenarios: multiple products, variants, tiered pricing, discounts, shipping charges, custom fields, and more. Just describe what you need—the system adapts."
                },
                {
                  q: "How does the AI remember my customers and products?",
                  a: "Every time you create an invoice, the system learns. Customer details, product catalogs, pricing—all stored securely. The AI references this database to auto-fill future invoices."
                },
                {
                  q: "Can I create invoices on mobile?",
                  a: "Yes! The chat interface works perfectly on mobile. Create invoices from anywhere—at client meetings, on the road, or from home. Full functionality on any device."
                }
              ].map((faq, index) => (
                <details key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 group">
                  <summary className="font-bold text-secondary cursor-pointer list-none flex justify-between items-center">
                    <span>{faq.q}</span>
                    <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-accent/80 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

                {/* Related Features CTA */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-b from-background via-white to-background">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-60 w-60 rounded-full bg-secondary/10 blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                Next Steps
              </p>
              <h2 className="mt-4 text-3xl font-bold text-secondary sm:text-4xl">
                Explore Related Features
              </h2>
              <p className="mt-3 text-accent/70 sm:text-lg">
                Dive deeper into the exact capabilities behind fast AI invoicing and compliance automation.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "AI Conversational Invoicing",
                  description: "See how natural-language prompts are converted into structured invoice drafts in seconds.",
                  link: "/features/ai-invoicing",
                  badge: "AI Workflow",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                      <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v7A2.5 2.5 0 0 1 16.5 17H9l-4 3.5V17A2.5 2.5 0 0 1 2.5 14V7.5A2.5 2.5 0 0 1 5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 10h8M8 13.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  title: "Professional Templates",
                  description: "Browse industry-ready templates designed for cleaner branding and better payment confidence.",
                  link: "/features/templates",
                  badge: "Design System",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                      <path d="M7 3h7l5 5v13H7V3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 3v5h5M10 12h6M10 15h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  title: "GST Compliance",
                  description: "Understand how WhisprBill handles tax logic, filings support, and compliant invoice formatting.",
                  link: "/features/gst-compliance",
                  badge: "Tax Engine",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                      <path d="M12 3 5 6v6c0 5 3.4 8.3 7 9 3.6-.7 7-4 7-9V6l-7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  ),
                },
              ].map((feature) => (
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
                      {feature.icon}
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
                      <path d="M5 12h14M13 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience 30-Second Invoicing?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join 5,000+ businesses creating invoices at lightning speed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/pricing"
                className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start Free Trial - No Credit Card Required
              </Link>
              <Link
                href="/features"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                Explore All Features
              </Link>
            </div>
            <p className="text-sm opacity-75">
              ✓ 30-second invoices  ✓ No training needed  ✓ Free forever plan
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}




