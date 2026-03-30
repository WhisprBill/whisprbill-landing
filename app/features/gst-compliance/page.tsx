import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "GST Compliance Software - 100% Compliant Invoicing | WhisprBill",
  description: "Auto-calculate CGST, SGST, IGST based on location. Generate GSTR-1, GSTR-3B reports instantly. E-invoicing with NIC integration. Trusted by 5,000+ businesses. Zero penalties guaranteed.",
  keywords: [
    "GST compliance software India",
    "GST billing software",
    "E-invoice generator",
    "GSTR report software",
    "E-way bill generation",
    "automated GST calculation"
  ],
  openGraph: {
    title: "100% GST Compliance Software - Automated Tax Calculation",
    description: "Stay compliant with Indian tax regulations. Auto-calculate taxes, generate E-invoices, E-way bills. Zero penalties.",
    url: "https://whisprbill.com/features/gst-compliance",
    images: [
      {
        url: "/og-gst-compliance.png",
        width: 1200,
        height: 630,
        alt: "WhisprBill GST Compliance Dashboard",
      },
    ],
  },
  alternates: {
    canonical: "https://whisprbill.com/features/gst-compliance",
  },
};

export default function GSTCompliancePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "WhisprBill GST Compliance Tool",
            "applicationCategory": "FinanceApplication",
            "description": "100% GST compliant invoicing software with automatic tax calculation, E-invoice generation, and GSTR report creation",
            "operatingSystem": "Web browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            },
            "featureList": [
              "Automatic CGST/SGST/IGST calculation",
              "Real-time GSTIN validation",
              "E-invoice NIC integration",
              "E-way bill generation",
              "GSTR-1 and GSTR-3B reports",
              "Reverse charge mechanism"
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
                "name": "Is WhisprBill GST compliant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, WhisprBill is 100% GST compliant. The system automatically calculates CGST/SGST/IGST based on customer location, validates GSTINs in real-time, and generates all necessary reports for GST filing. Trusted by 5,000+ businesses with zero penalties reported."
                }
              },
              {
                "@type": "Question",
                "name": "Can I generate E-invoices with WhisprBill?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! WhisprBill has direct NIC integration for E-invoice generation. For businesses with turnover over ₹5 crores, E-invoices are generated automatically with IRN (Invoice Reference Number) and QR codes as per government requirements."
                }
              },
              {
                "@type": "Question",
                "name": "How does automatic tax calculation work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The system automatically determines the correct tax type based on customer location. For intra-state transactions, it applies CGST+SGST. For inter-state transactions, it applies IGST. All calculations happen in real-time with support for multiple GST rates: 0%, 5%, 12%, 18%, 28%, and cess items."
                }
              }
            ]
          })
        }}
      />

      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-green-500/10 rounded-full text-green-700 font-semibold text-sm mb-6">
                  🇮🇳 100% Indian Tax Compliant
                </div>
                
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-secondary mb-6 leading-tight">
                  <span className="text-primary">100% GST Compliance</span> Guarantee
                </h1>
                
                <p className="text-xl text-accent/80 mb-8 leading-relaxed">
                  Stay fully compliant with Indian tax regulations. Auto-calculate CGST, SGST, IGST based on buyer location. Generate GSTR-1, GSTR-3B reconciliation reports instantly. Supports reverse charge, e-invoicing, and E-way bills.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="https://app.whisprbill.com/login"
                    className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg text-center"
                  >
                    Start Free Forever
                  </Link>
                  <a
                    href="#how-it-works"
                    className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-colors border-2 border-primary text-center"
                  >
                    See How It Works ↓
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Zero penalties</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Real-time validation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">NIC integrated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Auto-updates</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-4 border border-gray-100">
                  <Image
                    src="/wbill-gstcompliance.jpeg"
                    alt="WhisprBill GST Compliance Dashboard"
                    width={800}
                    height={600}
                    className="rounded-2xl"
                    priority
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="text-2xl font-bold text-green-600">5,000+</div>
                  <div className="text-xs text-accent/70">Businesses compliant</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              How GST Compliance Works Automatically
            </h2>
            <p className="text-center text-accent/70 mb-12 max-w-2xl mx-auto">
              From tax calculation to government filings—everything handled automatically
            </p>

            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Automatic Tax Type Detection",
                  description: "The system automatically determines tax type based on your and your customer's location:",
                  examples: [
                    "Intra-state (same state): Applies CGST + SGST",
                    "Inter-state (different states): Applies IGST",
                    "Export transactions: Zero-rated with proper documentation",
                    "Reverse charge: Automatically handled for unregistered vendors"
                  ],
                  icon: "🎯"
                },
                {
                  step: "2",
                  title: "Real-Time GSTIN Validation",
                  description: "Every customer GSTIN is validated using government APIs:",
                  examples: [
                    "Validates GSTIN format and checksum instantly",
                    "Verifies GSTIN is active and not cancelled",
                    "Fetches registered business name and address",
                    "Alerts you if GSTIN doesn't match customer details"
                  ],
                  icon: "✓"
                },
                {
                  step: "3",
                  title: "One-Click Report Generation",
                  description: "Generate GST reports ready for filing:",
                  examples: [
                    "GSTR-1: Sales summary with JSON export for portal",
                    "GSTR-3B: Tax liability with input credit calculations",
                    "HSN-wise summary: Product-level tax breakdowns",
                    "Reconciliation reports: Match with GSTR-2A automatically"
                  ],
                  icon: "📊"
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-2xl shrink-0 shadow-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{item.icon}</span>
                      <h3 className="text-xl lg:text-2xl font-bold text-secondary">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-accent/80 mb-3">{item.description}</p>
                    <ul className="space-y-2">
                      {item.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-accent/70">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GST Features Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              Complete GST Feature Set
            </h2>
            <p className="text-center text-accent/70 mb-12 max-w-2xl mx-auto">
              Everything you need for Indian tax compliance
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "📑",
                  title: "E-Invoice Generation",
                  description: "Direct NIC integration for B2B transactions over ₹5 crores. Auto-generates IRN and QR codes."
                },
                {
                  icon: "🚚",
                  title: "E-Way Bill Creation",
                  description: "One-click E-way bill generation with automatic distance calculation and validity computation."
                },
                {
                  icon: "🔄",
                  title: "Reverse Charge Support",
                  description: "Automatically handles reverse charge mechanism for purchases from unregistered vendors."
                },
                {
                  icon: "📈",
                  title: "All GST Rates Supported",
                  description: "0%, 5%, 12%, 18%, 28%, and cess items all handled automatically with HSN code mapping."
                },
                {
                  icon: "💾",
                  title: "JSON File Export",
                  description: "Export reports in JSON format ready for direct upload to GST portal—no manual data entry."
                },
                {
                  icon: "🔍",
                  title: "GSTR-2A Reconciliation",
                  description: "Match your purchase data with GSTR-2A to catch discrepancies before filing returns."
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                  <p className="text-accent/70 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Breakdown */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              How WhisprBill Ensures 100% Compliance
            </h2>

            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 lg:p-8 mb-8">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Automatic Tax Calculation
              </h3>
              <p className="text-accent/80 mb-4 leading-relaxed">
                The system automatically determines tax type: CGST+SGST for intra-state, IGST for inter-state transactions. Supports all GST rates: 0%, 5%, 12%, 18%, 28%, and cess items. Validates GSTIN in real-time using government APIs.
              </p>
              <p className="text-accent/80 leading-relaxed">
                Generates JSON files ready for upload to GST portal—no manual data entry. E-invoice generation with NIC integration for B2B transactions over ₹5 crores turnover. One-click E-way bill creation with automatic distance calculation and validity computation.
              </p>
            </div>

            <div className="bg-green-50/50 border border-green-100 rounded-2xl p-6 lg:p-8 mb-8">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Comprehensive Reporting
              </h3>
              <p className="text-accent/80 mb-4 leading-relaxed">
                Reverse charge mechanism for unregistered vendors handled automatically. Comprehensive reports: HSN-wise summary, tax liability statements, input credit ledgers. Monthly reconciliation tools match your data with GSTR-2A to catch discrepancies before filing.
              </p>
              <p className="text-accent/80 leading-relaxed">
                Tax rate changes? Update centrally and all future invoices reflect new rates. Trusted by 5,000+ businesses including CA firms who verify GST compliance—zero penalties reported in 2+ years.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Is WhisprBill GST compliant?",
                  a: "Yes, WhisprBill is 100% GST compliant. The system automatically calculates CGST/SGST/IGST based on customer location, validates GSTINs in real-time, and generates all necessary reports for GST filing. Trusted by 5,000+ businesses with zero penalties reported."
                },
                {
                  q: "Can I generate E-invoices with WhisprBill?",
                  a: "Yes! WhisprBill has direct NIC integration for E-invoice generation. For businesses with turnover over ₹5 crores, E-invoices are generated automatically with IRN (Invoice Reference Number) and QR codes as per government requirements."
                },
                {
                  q: "How does automatic tax calculation work?",
                  a: "The system automatically determines the correct tax type based on customer location. For intra-state transactions, it applies CGST+SGST. For inter-state transactions, it applies IGST. All calculations happen in real-time with support for multiple GST rates."
                },
                {
                  q: "Can I generate GSTR reports?",
                  a: "Yes, WhisprBill generates GSTR-1, GSTR-3B, and HSN summary reports with one click. Reports are exported in JSON format ready for direct upload to the GST portal—no manual data entry required."
                },
                {
                  q: "What happens when GST rates change?",
                  a: "When GST rates change, we update the system centrally. All new invoices automatically use the updated rates. You can also set custom effective dates for rate changes if needed."
                },
                {
                  q: "Do you support E-way bills?",
                  a: "Yes! Generate E-way bills with one click. The system automatically calculates distance, suggests vehicle types, and computes validity periods based on government rules."
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

        {/* Related Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Works Seamlessly With Other Features
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Conversational Invoicing",
                  description: "AI automatically applies correct GST rates based on customer location",
                  link: "/features/ai-invoicing",
                  icon: "💬"
                },
                {
                  title: "Professional Templates",
                  description: "All templates include compliant GST breakdowns and tax summaries",
                  link: "/features/templates",
                  icon: "📄"
                },
                {
                  title: "Customer Management",
                  description: "Store customer GSTINs with real-time validation for every transaction",
                  link: "/features/customer-management",
                  icon: "👥"
                },
              ].map((feature, index) => (
                <Link
                  key={index}
                  href={feature.link}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-accent/70 mb-3">{feature.description}</p>
                  <div className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Stay 100% GST Compliant, Effortlessly
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join 5,000+ businesses filing GST returns with zero penalties
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="https://app.whisprbill.com/login"
                className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start Free Forever - No Credit Card Required
              </Link>
              <Link
                href="/features"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                Explore All Features
              </Link>
            </div>
            <p className="text-sm opacity-75">
              ✓ Free forever plan  ✓ NIC integrated  ✓ Zero penalties guarantee
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


