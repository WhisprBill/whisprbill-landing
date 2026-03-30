import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  FileCheck2,
  MessageSquareText,
  RefreshCcw,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Users,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "AI Invoice Generator India - Create GST Invoices by Chat | WhisprBill",
  description: "Use WhisprBill as your AI billing assistant in India. Create GST-ready invoices through chat, reduce manual entry, and speed up billing for freelancers and small businesses.",
  keywords: [
    "AI invoice generator India",
    "ai bill generator",
    "ai billing system",
    "ai billing assistant",
    "chat invoice generator",
    "conversational invoicing software India",
    "voice based invoice maker",
    "automatic GST invoice generator",
    "smart billing software India",
    "AI invoice template generator",
    "online AI invoicing tool",
    "invoice automation for small business India"
  ],
  openGraph: {
    title: "AI Invoice Generator India - Chat to Create GST Invoices",
    description: "Generate professional GST invoices with natural language prompts using WhisprBill's AI billing assistant.",
    url: "https://whisprbill.com/features/ai-invoicing",
    images: [
      {
        url: "/og-ai-invoicing.png",
        width: 1200,
        height: 630,
        alt: "WhisprBill AI Chat Invoice Interface",
      },
    ],
  },
  alternates: {
    canonical: "https://whisprbill.com/features/ai-invoicing",
  },
};

export default function AIInvoicingPage() {
  return (
    <>
      {/* Structured Data for AI Invoicing Feature */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "WhisprBill AI Invoice Generator",
            "applicationCategory": "BusinessApplication",
            "description": "AI-powered conversational invoice creation software that understands natural language commands and generates GST-compliant invoices instantly",
            "operatingSystem": "Web browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "featureList": [
              "Natural language invoice creation",
              "Context-aware AI assistant",
              "Automatic GST calculation",
              "Customer database memory",
              "Real-time invoice generation"
            ],
            "screenshot": "https://whisprbill.com/wbill-chatwithai.png",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "245"
            }
          })
        }}
      />

      {/* FAQ Schema for AI Invoicing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How does AI invoice creation work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Describe your invoice in natural language, and WhisprBill creates a draft with customer, item, and tax details. You can review and edit any field before sharing."
                }
              },
              {
                "@type": "Question",
                "name": "Does AI invoicing support GST compliance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "WhisprBill supports GST-aware invoice workflows with HSN and tax slab assistance. Final compliance should be reviewed based on your business and filing requirements."
                }
              },
              {
                "@type": "Question",
                "name": "How much time can I save with AI invoicing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Time savings depend on invoice complexity, but AI invoicing generally reduces repetitive data entry and speeds up draft creation and edits."
                }
              },
              {
                "@type": "Question",
                "name": "What if the AI makes a mistake?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can edit quantities, rates, GST, customer details, due dates, and discounts at any point before finalizing the invoice."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to train the AI?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No setup training is required to start. You can begin by entering a natural prompt and then refine the generated draft as needed."
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
          <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-50/60 to-primary/10" />
          <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                  <Sparkles className="h-4 w-4" />
                  AI-Powered Invoicing
                </div>

                <h1 className="mb-6 text-4xl lg:text-5xl xl:text-6xl font-extrabold text-secondary leading-tight">
                  Generate GST invoices by <span className="text-primary">chatting naturally</span>
                </h1>

                <p className="mb-8 text-lg sm:text-xl text-accent/80 leading-relaxed max-w-2xl">
                  Skip complex forms. Tell WhisprBill what to bill, to whom, and with what GST rate. Your invoice is generated in seconds.
                </p>

                <div className="mb-8 rounded-2xl border border-primary/20 bg-white/90 p-5 shadow-lg shadow-primary/10">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary">
                    <MessageSquareText className="h-4 w-4" />
                    Example prompt
                  </div>
                  <p className="text-sm sm:text-base text-secondary font-medium italic">
                    "Create an invoice for Sharma Enterprises for Rs.45,000 with 18% GST, due in 15 days."
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="https://app.whisprbill.com/login"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5 text-center"
                  >
                    Start Free Forever
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-primary/5 transition-colors border-2 border-primary/30 text-center"
                  >
                    See How It Works
                  </a>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-accent/75">
                    <Clock3 className="h-4 w-4 text-primary" />
                    <span>80% faster</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent/75">
                    <BadgeCheck className="h-4 w-4 text-primary" />
                    <span>Zero errors</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent/75">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span>GST compliant</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl border border-white/70 bg-white/90 p-4 shadow-2xl shadow-secondary/10 backdrop-blur">
                  <Image
                    src="/wbill-chatwithai.png"
                    alt="WhisprBill AI Chat Invoice Creation Interface"
                    width={800}
                    height={600}
                    className="rounded-2xl"
                    priority
                  />
                </div>

                <div className="absolute -bottom-5 left-4 sm:-bottom-6 sm:left-6 bg-white rounded-xl shadow-lg p-4 border border-primary/15">
                  <div className="text-xl sm:text-2xl font-extrabold text-primary">10 sec</div>
                  <div className="text-xs text-accent/70">Average creation time</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How It Works */}
        <section id="how-it-works" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              How WhisprBill AI Works in Real Billing Scenarios
            </h2>
            <p className="text-center text-accent/70 mb-12 max-w-3xl mx-auto">
              Built for real-world invoicing: dynamic edits mid-invoice, AI-assisted item intelligence, and faster completion without rework.
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                {
                  step: "01",
                  title: "Start with Intent, Not Forms",
                  description: "Type what you want to bill in plain language. Add a new customer or select an existing one in the same flow.",
                  points: [
                    "Create invoice draft from one prompt",
                    "Add or select customer without leaving the screen",
                    "Add item variants and pricing tiers using AI suggestions",
                  ],
                  type: "chat",
                },
                {
                  step: "02",
                  title: "AI Enriches Items with GST Context",
                  description: "When you add a new item, WhisprBill maps product details to HSN code and GST slab references from official GOI GST documentation.",
                  points: [
                    "Auto-suggest HSN and tax slab per item",
                    "Apply CGST/SGST or IGST based on place of supply",
                    "Keep line-level tax logic consistent across edits",
                  ],
                  type: "compliance",
                },
                {
                  step: "03",
                  title: "Edit Any Field Mid-Invoice",
                  description: "Made a mistake? No problem. Update quantity, GST rate, customer, due date, discounts, or line items at any stage.",
                  points: [
                    "No restart required for corrections",
                    "Recalculate totals instantly after each change",
                    "Maintain audit-friendly invoice structure",
                  ],
                  type: "edit",
                },
                {
                  step: "04",
                  title: "Finalize, Share, and Repeat Faster",
                  description: "Review final output, send invoice through your preferred channel, and reuse context for the next invoice.",
                  points: [
                    "Preview before sharing",
                    "Send via PDF, email, or WhatsApp",
                    "AI learns recurring customer and product patterns",
                  ],
                  type: "done",
                },
              ].map((item) => (
                <article
                  key={item.step}
                  className="rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {item.type === "chat" && <MessageSquareText className="h-5 w-5" />}
                      {item.type === "compliance" && <ShieldCheck className="h-5 w-5" />}
                      {item.type === "edit" && <Clock3 className="h-5 w-5" />}
                      {item.type === "done" && <BadgeCheck className="h-5 w-5" />}
                    </div>
                    <span className="text-xs font-semibold tracking-[0.12em] text-accent/60">{item.step}</span>
                  </div>

                  <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-sm text-accent/80 mb-4 leading-relaxed">{item.description}</p>

                  <ul className="space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-accent/75">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "How does AI invoice creation work?",
                  a: "Describe your invoice in natural language, and WhisprBill creates a draft with customer, item, and tax details. You can review and edit any field before sharing."
                },
                {
                  q: "Does AI invoicing support GST compliance?",
                  a: "WhisprBill supports GST-aware invoice workflows with HSN and tax slab assistance. Final compliance should be reviewed based on your business and filing requirements."
                },
                {
                  q: "How much time can I save with AI invoicing?",
                  a: "Time savings depend on invoice complexity, but AI invoicing generally reduces repetitive data entry and speeds up draft creation and edits."
                },
                {
                  q: "What if the AI makes a mistake?",
                  a: "You can edit quantities, rates, GST, customer details, due dates, and discounts at any point before finalizing the invoice."
                },
                {
                  q: "Do I need to train the AI?",
                  a: "No setup training is required to start. You can begin by entering a natural prompt and then refine the generated draft as needed."
                }
              ].map((faq, index) => (
                <details key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 group">
                  <summary className="font-bold text-secondary cursor-pointer list-none flex justify-between items-center">
                    <span>{faq.q}</span>
                    <span className="text-primary group-open:rotate-180 transition-transform">v</span>
                  </summary>
                  <p className="mt-4 text-accent/80 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        {/* Comparison: Manual vs AI */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-4">
              Manual vs AI-Assisted Invoicing
            </h2>
            <p className="text-center text-accent/70 mb-10 max-w-3xl mx-auto">
              A practical comparison based on common invoice workflows used by small businesses and teams.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left font-bold text-secondary">Workflow Step</th>
                    <th className="p-4 text-center font-bold text-accent">Manual Process</th>
                    <th className="p-4 text-center font-bold text-primary">With WhisprBill AI</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { step: "Create first draft", manual: "Fill each field one by one", ai: "Generate from a single prompt" },
                    { step: "Add customer", manual: "Switch screens and re-enter details", ai: "Add or select customer inline" },
                    { step: "Add items with tax", manual: "Lookup and enter HSN/GST manually", ai: "Get AI-assisted HSN and GST slab suggestions" },
                    { step: "Correct mistakes", manual: "Multiple edits across sections", ai: "Edit any field mid-invoice with instant recalculation" },
                    { step: "Variants and pricing tiers", manual: "Manual item duplication and pricing edits", ai: "Use AI to add variants and tiered pricing faster" },
                    { step: "Final review and sharing", manual: "Recheck totals and export manually", ai: "Review-ready output with quick share/export" },
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="p-4 font-semibold text-secondary">{row.step}</td>
                      <td className="p-4 text-center text-sm text-accent/75">{row.manual}</td>
                      <td className="p-4 text-center text-sm font-semibold text-primary">{row.ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-center text-xs text-accent/55">
              Stats and comparisons shown here are based on internal WhisprBill product testing across representative invoice scenarios and may vary by workflow complexity.
            </p>
          </div>
        </section>
        {/* Related Features */}
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
                Connect AI invoicing with the modules that keep billing accurate, reusable, and easier to operate daily.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  badge: "Templates",
                  title: "Professional Templates",
                  description: "Apply your invoice template style to AI-generated drafts for consistent output every time.",
                  link: "/features/templates",
                  Icon: FileCheck2,
                },
                {
                  badge: "Compliance",
                  title: "GST Compliance",
                  description: "Use compliance-ready invoice structure with tax-aware line items and cleaner review before sharing.",
                  link: "/features/gst-compliance",
                  Icon: ShieldCheck,
                },
                {
                  badge: "Customers",
                  title: "Customer Management",
                  description: "Select existing customers or add new ones during invoice creation without breaking workflow context.",
                  link: "/features/customer-management",
                  Icon: Users,
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
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-blue-700" />
          <div className="absolute -top-10 right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-16 left-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center text-white shadow-2xl backdrop-blur-md sm:p-12">
              <p className="mb-4 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
                Ready to Try AI Invoicing
              </p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Build invoices faster with fewer manual steps
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base text-blue-100 sm:text-lg">
                Create, edit, and finalize GST-ready invoices in one smooth flow with WhisprBill AI.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="https://app.whisprbill.com/login"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Start Free Forever
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/70 bg-transparent px-8 py-4 font-bold text-white transition-colors hover:bg-white/10"
                >
                  Explore All Features
                </Link>
              </div>

              <p className="mt-6 text-sm text-blue-100/90">
                No credit card required | Quick setup | Built for day-to-day invoicing workflows
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}












