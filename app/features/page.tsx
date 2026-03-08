"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  MessageSquare,
  FileText,
  BarChart2,
  Upload,
  Users,
  Building2,
  Layers,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Mic,
  Lock,
  CheckCircle2,
  Zap,
  Info,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── Static Data ─────────────────────────────────────────────────────────────

const spotlightFeatures = [
  {
    id: "ai-invoicing",
    href: "/features/ai-invoicing",
    title: "Your AI Invoice Assistant That Speaks Your Language",
    description:
      "Forget navigating through endless menus and forms. Simply chat naturally: 'Create an invoice for Sharma Enterprises for ₹45,000 with 18% GST' and watch your invoice appear instantly. It's invoicing that feels like texting a colleague.",
    Icon: MessageSquare,
    image: "/wbill-chatwithai.png",
  },
  {
    id: "templates",
    href: "/features/templates",
    title: "Professional Templates for Every Business Type",
    description:
      "Choose from 50+ beautifully designed invoice templates spanning every industry — from minimalist designs for tech startups to detailed formats for construction firms. Each template is GST-compliant, fully customizable, and looks stunning on any device or printer.",
    Icon: FileText,
    image: "/Wbill-Templates.png",
  },
  {
    id: "analytics",
    href: "/features/analytics",
    title: "Intelligent Business Insights, Not Just Data Storage",
    description:
      "Stop drowning in spreadsheets. Our AI-powered analytics dashboard transforms your raw invoicing data into actionable business intelligence. Instantly see which products are flying off shelves, which customers drive revenue, and where your cash is stuck — all without hiring a data analyst.",
    Icon: BarChart2,
    image: "/wbill-dashboard.png",
  },
];

const advancedFeatures = [
  {
    id: "bulk",
    href: "/features/bulk-import",
    title: "Lightning-Fast Bulk Import",
    description:
      "Migrating from another system? Upload your entire customer database and product catalog in seconds. Supports Excel, CSV, and Google Sheets with intelligent field mapping.",
    Icon: Upload,
    image: "/wbill-bulkupload2.png",
  },
  {
    id: "customers",
    href: "/features/customer-management",
    title: "Unlimited Customer Management",
    description:
      "Add unlimited customers even on the Free plan — no artificial caps on your growth. Store complete contact details, billing addresses, payment terms, and transaction history.",
    Icon: Users,
    image: "/wbill-customers.jpeg",
  },
  {
    id: "multi-company",
    href: "/features/multi-company",
    title: "Multi-Company Management",
    description:
      "Run multiple businesses from a single account — each with its own customers, inventory, and financial reports. Switch between companies in one click without logging out.",
    Icon: Building2,
    image: "/wbill-multicompany.jpeg",
  },
  {
    id: "variants-pricing",
    href: "/features/variants-pricing",
    title: "Smart Variants & Dynamic Pricing",
    description:
      "Sell products in multiple sizes, colors, or configurations? Create one master product with unlimited variants — each with its own SKU, stock level, and pricing.",
    Icon: Layers,
    image: "/wbill-variantspricing.jpeg",
  },
  {
    id: "gst",
    href: "/features/gst-compliance",
    title: "100% GST Compliance Guarantee",
    description:
      "Auto-calculate CGST, SGST, IGST based on buyer location. Generate GSTR-1 and GSTR-3B reconciliation reports instantly. Supports reverse charge, e-invoicing, and E-way bills.",
    Icon: ShieldCheck,
    image: "/wbill-gstcompliance.jpeg",
  },
];

const upcomingFeatures = [
  {
    id: "whatsapp",
    title: "WhatsApp-native invoicing",
    status: "In active development",
    statusColor: "text-green-700",
    bg: "from-green-50/60",
    iconBg: "bg-green-500",
    Icon: MessageCircle,
    description:
      "Create and share invoices directly from WhatsApp by chatting with WhisprBot — no need to open the app every time.",
    detail:
      'Type "Invoice Raj Traders for yesterday\'s order" in WhatsApp, let the bot prepare the invoice using your existing catalog and tax rules, and get a ready-to-share PDF in the same chat.',
  },
  {
    id: "voice",
    title: "Voice-first invoice creation",
    status: "On our near-term roadmap",
    statusColor: "text-blue-700",
    bg: "from-blue-50/60",
    iconBg: "bg-blue-500",
    Icon: Mic,
    description:
      "Speak your invoice instead of typing it. Say it once, let WhisprBill handle the structure, math, and compliance.",
    detail:
      'Say "Create an invoice for Mehta Medicals for 12 strips of Crocin at ₹45 each with 12% GST, due in 7 days." The system converts your voice into a structured, validated invoice ready to review.',
  },
  {
    id: "privacy",
    title: "Next-gen private AI engine",
    status: "Exploring & prototyping",
    statusColor: "text-slate-700",
    bg: "from-slate-50/80",
    iconBg: "bg-slate-800",
    Icon: Lock,
    description:
      "Today we use PII masking so sensitive details never reach the AI layer. Over time, we want to push privacy even further.",
    detail: null,
    bullets: [
      { label: "Own-model direction.", text: "Long-term goal to move towards models trained on infrastructure we control — your data never leaves our environment." },
      { label: "Stronger isolation.", text: "Combined with our deterministic backend, this gives end-to-end control over how every token of data is processed." },
      { label: "Local-first possibilities.", text: "Exploring whether parts of this intelligence can eventually run on your own device for an extra layer of privacy." },
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-blue-100 via-purple-100 to-transparent">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] lg:w-[1000px] h-[400px] sm:h-[500px] lg:h-[600px] bg-blue-200/40 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <p className="text-primary font-bold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
              Powerful Features, Simple Interface
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-4 sm:mb-6 leading-tight px-4 sm:px-0">
              AI invoicing and GST billing features for Indian businesses.{" "}
              <br className="hidden sm:block" />
              <span className="text-primary">Built for MSMEs, freelancers, and growing teams.</span>
            </h1>
            <p className="text-base sm:text-lg text-accent/80 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              From AI invoice automation to GST-compliant templates, analytics, and customer workflows — everything you need in one billing software stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white text-base sm:text-lg font-bold rounded-xl shadow-lg hover:bg-blue-600 transition-all hover:-translate-y-0.5"
              >
                Start Free Trial
              </Link>
              <Link
                href="/how-it-works"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-secondary border-2 border-gray-200 text-base sm:text-lg font-bold rounded-xl hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </section>

        {/* ── Spotlight Features ─────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="space-y-16 sm:space-y-24 lg:space-y-32">
              {spotlightFeatures.map((feature, index) => {
                const Icon = feature.Icon;
                return (
                  <div
                    key={feature.id}
                    onClick={() => router.push(feature.href)}
                    className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-24 cursor-pointer ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Text */}
                    <div className="flex-1 space-y-5 text-center lg:text-left">
                      <div className="inline-flex items-center justify-center lg:justify-start">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary px-4 sm:px-0">
                        {feature.title}
                      </h3>
                      <p className="text-base sm:text-lg text-accent/80 leading-relaxed px-4 sm:px-0">
                        {feature.description}
                      </p>
                      <Link
                        href={feature.href}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-primary font-bold text-base sm:text-lg hover:text-blue-700 transition-colors group"
                      >
                        Learn how this saves you hours
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                      </Link>
                    </div>

                    {/* Image */}
                    <div className="flex-1 w-full px-4 sm:px-0">
                      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border border-gray-100 p-2 sm:p-3 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                        <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            width={1600}
                            height={1000}
                            className="w-full h-auto"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Advanced Features ──────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16 px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 sm:mb-4">
                Advanced features that give you the competitive edge
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-accent/70 max-w-2xl mx-auto">
                From multi-company management to GST compliance — industry-specific tools that solve real business problems, not generic features.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
              {/* LEFT: Feature list */}
              <div className="w-full lg:w-2/5 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-100">
                <div className="space-y-3 max-h-[600px] lg:max-h-[700px] overflow-y-auto pr-2">
                  {advancedFeatures.map((feature, index) => {
                    const Icon = feature.Icon;
                    const isActive = activeTab === index;
                    return (
                      <div
                        key={feature.id}
                        onClick={() => setActiveTab(index)}
                        className={`group cursor-pointer rounded-xl p-4 transition-all duration-300 border text-left ${
                          isActive
                            ? "bg-primary/5 border-primary/30 shadow-sm"
                            : "bg-transparent border-gray-100 hover:bg-gray-50 hover:border-primary/20"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all shrink-0 ${
                              isActive
                                ? "bg-primary text-white shadow-md"
                                : "bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary"
                            }`}
                          >
                            <Icon className="h-4 w-4" strokeWidth={1.8} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <h4 className={`text-base font-bold transition-colors mb-1 ${
                              isActive ? "text-primary" : "text-gray-700 group-hover:text-secondary"
                            }`}>
                              {feature.title}
                            </h4>
                            <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                              {feature.description}
                            </p>

                            {/* Expandable action — direct link, no modal */}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                              isActive ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                            }`}>
                              <Link
                                href={feature.href}
                                onClick={(e) => e.stopPropagation()}
                                className="mt-1 inline-flex items-center gap-1.5 text-primary text-xs font-semibold hover:text-blue-700 transition-colors"
                              >
                                Read full details
                                <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                              </Link>
                            </div>
                          </div>

                          {isActive && (
                            <div className="w-1 h-10 bg-primary rounded-full shrink-0" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT: Image display */}
              <div className="w-full lg:w-3/5 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-100">
                <div
                  onClick={() => router.push(advancedFeatures[activeTab].href)}
                  className="relative cursor-pointer bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl overflow-hidden"
                >
                  <div className="relative w-full aspect-[3/2]">
                    {advancedFeatures.map((feature, index) => (
                      <div
                        key={feature.id}
                        className={`absolute inset-0 transition-all duration-700 ease-out ${
                          activeTab === index
                            ? "opacity-100 scale-100 z-10"
                            : "opacity-0 scale-95 z-0 pointer-events-none"
                        }`}
                      >
                        <div className="relative w-full h-full p-3 sm:p-4">
                          <div className="relative w-full h-full bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 60vw"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Caption */}
                  <div className="bg-white/95 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-100">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm sm:text-base font-bold text-secondary truncate">
                          {advancedFeatures[activeTab].title}
                        </h5>
                        <p className="text-xs text-gray-500">Live feature preview</p>
                      </div>
                      <Link
                        href={advancedFeatures[activeTab].href}
                        onClick={(e) => e.stopPropagation()}
                        className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
                      >
                        Learn More
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Upcoming Features ──────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-12 lg:mb-14">
              <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-semibold mb-4">
                Coming Soon
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary mb-4">
                The roadmap we're building next
              </h2>
              <p className="text-base sm:text-lg text-accent/70 max-w-2xl mx-auto px-4 sm:px-0">
                We ship fast, but we communicate even faster. Here's what we're actively working on for the next versions of WhisprBill.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
              {upcomingFeatures.map((item) => {
                const Icon = item.Icon;
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl sm:rounded-2xl border border-gray-100 bg-gradient-to-br ${item.bg} to-white p-6 lg:p-7 shadow-sm`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center text-white`}>
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-secondary">
                          {item.title}
                        </h3>
                        <p className={`text-xs font-semibold uppercase tracking-wide ${item.statusColor}`}>
                          {item.status}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-accent/80 leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {item.detail && (
                      <p className="text-xs sm:text-sm text-accent/70 leading-relaxed">
                        {item.detail}
                      </p>
                    )}

                    {item.bullets && (
                      <ul className="space-y-2 text-xs sm:text-sm text-accent/70 leading-relaxed">
                        {item.bullets.map((b) => (
                          <li key={b.label}>
                            <span className="font-semibold text-secondary">{b.label}</span>{" "}
                            {b.text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 sm:mt-10 text-center">
              <p className="text-xs text-accent/60 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                Roadmaps can change as we learn from customers. These features represent our current direction, not fixed launch dates — we'll always prioritise stability, compliance, and privacy over rushing a release.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-4 sm:mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-base sm:text-lg text-accent/80 mb-6 sm:mb-8">
              Early access is open — no credit card, no setup, no learning curve.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white text-base sm:text-lg font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:-translate-y-0.5"
            >
              Start Free Trial — No Credit Card Required
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </Link>
            <ul className="mt-6 flex flex-col items-center justify-center gap-3 text-sm text-accent/70 sm:flex-row sm:gap-6">
              {["GST-ready invoices", "Free forever plan", "No training needed"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" strokeWidth={2} />
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
