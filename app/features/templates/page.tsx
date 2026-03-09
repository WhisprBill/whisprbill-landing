import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  LayoutTemplate,
  FileText,
  Download,
  Palette,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  MessageSquare,
  BadgeIndianRupee,
  Building2,
  Clock,
  Stamp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Invoice Templates - Modern & Classic Designs | WhisprBill",
  description:
    "Choose from a growing library of GST-compliant invoice templates - from clean modern styles to classic formats. Covers tax invoices, bill of supply, proforma, quotations, and more. Export to PDF instantly.",
  keywords: [
    "invoice templates India",
    "GST invoice templates",
    "professional invoice designs",
    "modern invoice format",
    "tax invoice template",
    "proforma invoice template",
    "GST billing software India",
  ],
  openGraph: {
    title: "Professional Invoice Templates | WhisprBill",
    description:
      "A growing library of GST-compliant invoice templates - modern to classic. Customize with your branding and export instantly.",
    url: "https://whisprbill.com/features/templates",
    images: [
      {
        url: "/og-templates.png",
        width: 1200,
        height: 630,
        alt: "WhisprBill Invoice Templates Gallery",
      },
    ],
  },
  alternates: {
    canonical: "https://whisprbill.com/features/templates",
  },
};

export default function TemplatesPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "WhisprBill Invoice Templates",
            applicationCategory: "BusinessApplication",
            description:
              "GST-compliant invoice templates ranging from modern to classic styles. Covers tax invoices, bill of supply, proforma, quotations, delivery challans, and more.",
            operatingSystem: "Web browser",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "INR",
            },
            featureList: [
              "Modern and classic invoice styles",
              "GST-compliant formats",
              "Custom branding and logos",
              "PDF export and WhatsApp sharing",
              "Growing template library",
            ],
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What invoice templates does WhisprBill offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "WhisprBill offers a growing library of GST-compliant invoice templates ranging from modern minimal styles to classic formats. Supported invoice types include tax invoices, bill of supply, proforma invoices, and quotations - with credit notes, debit notes, and delivery challans coming soon.",
                },
              },
              {
                "@type": "Question",
                name: "Can I add my branding to invoice templates?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. You can upload your company logo and it will appear on every invoice. Paid plans remove the WhisprBill watermark entirely, and Pro plans will support custom logo watermarks on invoice backgrounds.",
                },
              },
              {
                "@type": "Question",
                name: "Are WhisprBill templates GST compliant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Every template includes mandatory GST fields - GSTIN, HSN/SAC codes, tax breakdowns (CGST, SGST, IGST), and all fields required under Indian GST regulations.",
                },
              },
            ],
          }),
        }}
      />

      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
                  <LayoutTemplate size={15} />
                  Invoice Templates
                </div>

                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-secondary mb-6 leading-tight">
                  Templates That Make Your{" "}
                  <span className="text-primary">Invoice Stand Out</span>
                </h1>

                <p className="text-xl text-accent/80 mb-8 leading-relaxed">
                  Choose from a growing library of GST-compliant invoice
                  templates - ranging from clean modern designs to classic
                  professional formats. Every template is print-ready and
                  customizable with your branding.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/pricing"
                    className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg text-center"
                  >
                    Get Started Free
                  </Link>
                  <a
                    href="#template-styles"
                    className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-colors border-2 border-primary text-center"
                  >
                    Browse Templates
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    "Modern & classic styles",
                    "GST compliant",
                    "Your logo on every invoice",
                    "Print & PDF ready",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      <span className="text-accent/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-4 border border-gray-100">
                  <Image
                    src="/Wbill-Templates.png"
                    alt="WhisprBill Invoice Templates Gallery"
                    width={800}
                    height={600}
                    className="rounded-2xl"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="text-sm font-bold text-primary">Growing</div>
                  <div className="text-xs text-accent/70">Template library</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Template Styles */}
        <section id="template-styles" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              From Classic to Modern
            </h2>
            <p className="text-center text-accent/70 mb-16 max-w-2xl mx-auto">
              Whether you prefer a clean minimal look or a traditional
              structured format, there's a template that fits your business
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Modern & Minimal",
                  description:
                    "Clean layouts with generous whitespace, subtle accents, and a contemporary feel. Ideal for service businesses, agencies, and tech companies that want a polished first impression.",
                  Icon: Sparkles,
                  tags: ["Clean layout", "Accent colors", "Whitespace-forward"],
                },
                {
                  title: "Classic & Structured",
                  description:
                    "Traditional invoice formats with clearly defined sections, bordered tables, and a formal look. Works well for traders, manufacturers, and businesses that prefer a conventional style.",
                  Icon: FileText,
                  tags: ["Bordered tables", "Formal layout", "Structured sections"],
                },
              ].map(({ title, description, Icon, tags }, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
                  <p className="text-accent/80 text-sm leading-relaxed mb-5">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/8 text-primary text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Invoice Types */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              Supported Invoice Types
            </h2>
            <p className="text-center text-accent/70 mb-16 max-w-2xl mx-auto">
              Templates are available for the most common invoice formats, with
              more types being added regularly
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  type: "Tax Invoice",
                  description:
                    "Standard GST-registered invoice with CGST, SGST, and IGST breakdowns. Mandatory for registered businesses.",
                  available: true,
                },
                {
                  type: "Bill of Supply",
                  description:
                    "For businesses not charging GST on outward supply under applicable rules. Includes bill-of-supply structure with required fields.",
                  available: true,
                },
                {
                  type: "Proforma Invoice",
                  description:
                    "Pre-sale invoice sent before confirming an order. Useful for advance payments and order confirmations.",
                  available: true,
                },
                {
                  type: "Quotation / Estimate",
                  description:
                    "Send a formal price quote to clients before work begins. Convert to invoice with one click.",
                  available: true,
                },
                {
                  type: "Credit Note",
                  description:
                    "Issue refunds or adjustments against a previously sent invoice.",
                  available: false,
                },
                {
                  type: "Debit Note",
                  description:
                    "Raise additional charges or corrections against an existing invoice.",
                  available: false,
                },
                {
                  type: "Delivery Challan",
                  description:
                    "Document goods dispatched without an invoice - for internal transfers or approval-based deliveries.",
                  available: false,
                },
              ].map(({ type, description, available }, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 border transition-all ${
                    available
                      ? "border-gray-100 shadow-sm hover:shadow-md"
                      : "border-dashed border-gray-200 opacity-75"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-secondary">{type}</h3>
                    {available ? (
                      <span className="text-xs font-semibold px-2.5 py-1 bg-green-50 text-green-600 rounded-full">
                        Available
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-600 rounded-full">
                        <Clock size={11} />
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-accent/70 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Branding & Watermarks */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-4">
              Your Brand on Every Invoice
            </h2>
            <p className="text-center text-accent/70 mb-16 max-w-2xl mx-auto">
              Upload your logo and brand your invoices. Paid plans keep them
              clean and watermark-free.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  plan: "Free Plan",
                  Icon: FileText,
                  color: "border-gray-200",
                  badge: "bg-gray-100 text-gray-600",
                  badgeText: "Free",
                  points: [
                    "Your logo on invoices",
                    "WhisprBill watermark included",
                    "All template styles accessible",
                  ],
                  note: null,
                },
                {
                  plan: "Paid Plans",
                  Icon: CheckCircle2,
                  color: "border-primary/30",
                  badge: "bg-primary/10 text-primary",
                  badgeText: "Starter & above",
                  points: [
                    "Your logo on invoices",
                    "No WhisprBill watermark",
                    "Clean, professional output",
                  ],
                  note: null,
                },
                {
                  plan: "Pro Plan",
                  Icon: Stamp,
                  color: "border-indigo-200",
                  badge: "bg-indigo-50 text-indigo-600",
                  badgeText: "Pro",
                  points: [
                    "Everything in Paid Plans",
                    "No WhisprBill watermark",
                    "Custom logo watermark on invoice background",
                  ],
                  note: "Coming soon",
                },
              ].map(({ plan, Icon, color, badge, badgeText, points, note }) => (
                <div
                  key={plan}
                  className={`bg-white rounded-2xl p-6 border-2 ${color} shadow-sm`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badge}`}>
                      {badgeText}
                    </span>
                  </div>
                  <h3 className="font-bold text-secondary mb-4">{plan}</h3>
                  <ul className="space-y-3">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-accent/80">
                        <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {note && (
                    <p className="mt-4 text-xs text-amber-600 font-medium flex items-center gap-1">
                      <Clock size={11} />
                      {note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Template Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              What Every Template Includes
            </h2>
            <p className="text-center text-accent/70 mb-16 max-w-2xl mx-auto">
              Every template in the library ships with these essentials out of
              the box
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Full GST Compliance",
                  description:
                    "All templates include mandatory GST fields - GSTIN, HSN/SAC codes, and separate CGST, SGST, and IGST breakdowns as required by Indian tax regulations.",
                  Icon: BadgeIndianRupee,
                },
                {
                  title: "Your Logo & Branding",
                  description:
                    "Upload your company logo once and it appears on every invoice automatically. Paid plans remove the WhisprBill watermark for a fully branded output.",
                  Icon: Palette,
                },
                {
                  title: "PDF Export & Sharing",
                  description:
                    "Export any invoice as a PDF for printing or email, or share directly via WhatsApp. All exports preserve your template styling exactly.",
                  Icon: Download,
                },
                {
                  title: "Growing Library",
                  description:
                    "New templates are added regularly. More invoice types - including credit notes, debit notes, and delivery challans - are actively being worked on.",
                  Icon: LayoutTemplate,
                },
              ].map(({ title, description, Icon }, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
                  <p className="text-accent/80 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "What invoice templates does WhisprBill offer?",
                  a: "WhisprBill offers a growing library of GST-compliant invoice templates ranging from modern minimal styles to classic formats. Currently supported types include tax invoices, bill of supply, proforma invoices, and quotations - with credit notes, debit notes, and delivery challans coming soon.",
                },
                {
                  q: "Can I add my branding to templates?",
                  a: "Yes. Upload your company logo once and it will appear on every invoice automatically. Paid plans remove the WhisprBill watermark entirely. Pro plans will also support a custom logo watermark in the invoice background.",
                },
                {
                  q: "Do free plan invoices have a watermark?",
                  a: "Yes. Invoices generated on the free plan include a WhisprBill watermark. Upgrading to any paid plan removes it and gives you clean, fully branded invoice output.",
                },
                {
                  q: "Are the templates GST compliant?",
                  a: "Every template includes mandatory GST fields - GSTIN, HSN/SAC codes, and tax breakdowns for CGST, SGST, and IGST as required under Indian GST regulations.",
                },
                {
                  q: "What export formats are supported?",
                  a: "Export invoices as PDF for printing or email, or share directly via WhatsApp. All exports retain your chosen template style and branding.",
                },
                {
                  q: "Will more templates and invoice types be added?",
                  a: "Yes. The template library is actively growing. Credit notes, debit notes, and delivery challans are in development. New template designs are added regularly.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 group"
                >
                  <summary className="font-semibold text-secondary cursor-pointer list-none flex justify-between items-center gap-4">
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className="text-primary shrink-0 group-open:rotate-180 transition-transform"
                    />
                  </summary>
                  <p className="mt-4 text-accent/80 leading-relaxed text-sm">{faq.a}</p>
                </details>
              ))}
            </div>
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
                Related Modules
              </p>
              <h2 className="mt-4 text-3xl font-extrabold text-secondary sm:text-4xl">
                Works seamlessly with other features
              </h2>
              <p className="mt-3 text-accent/70 sm:text-lg">
                Use templates with AI drafting, GST controls, and multi-company workflows for cleaner billing operations.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  badge: "AI",
                  title: "AI Conversational Invoicing",
                  description:
                    "AI-generated drafts automatically apply your selected invoice template and branding style.",
                  link: "/features/ai-invoicing",
                  Icon: MessageSquare,
                },
                {
                  badge: "Compliance",
                  title: "GST Compliance",
                  description:
                    "Templates include GST-ready structure with required tax sections and cleaner pre-send review.",
                  link: "/features/gst-compliance",
                  Icon: BadgeIndianRupee,
                },
                {
                  badge: "Operations",
                  title: "Multi-Company Management",
                  description:
                    "Assign different templates per company and keep brand output separated across entities.",
                  link: "/features/multi-company",
                  Icon: Building2,
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
                Ready to Send Better Invoices
              </p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Pick a template and send your first invoice today
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-base text-blue-100 sm:text-lg">
                Choose your format, add your logo, and generate clean GST-ready invoices in minutes.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Get Started Free
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
                GST compliant | Watermark-free on paid plans | PDF ready
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}




