import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Multi-Company Management - Manage Multiple Businesses from One Account | WhisprBill",
  description: "Run up to 10 businesses from a single login. Each with separate customers, inventory, invoices, and financial reports. Switch companies in one click. Perfect for franchises and entrepreneurs.",
  keywords: [
    "multi-company accounting software",
    "manage multiple businesses",
    "franchise management software India",
    "consolidated business reports",
    "multiple GSTIN management",
    "multi-entity accounting"
  ],
  openGraph: {
    title: "Multi-Company Management - One Login, Multiple Businesses",
    description: "Manage up to 10 companies with separate inventory, customers, and reports. Switch instantly between businesses.",
    url: "https://whisprbill.com/features/multi-company",
    images: [
      {
        url: "/og-multi-company.png",
        width: 1200,
        height: 630,
        alt: "WhisprBill Multi-Company Dashboard",
      },
    ],
  },
  alternates: {
    canonical: "https://whisprbill.com/features/multi-company",
  },
};

export default function MultiCompanyPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "WhisprBill Multi-Company Management",
            "applicationCategory": "BusinessApplication",
            "description": "Manage multiple businesses from one account with separate inventory, customers, and financial reports for each entity",
            "operatingSystem": "Web browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            },
            "featureList": [
              "Manage up to 10 companies",
              "One-click company switching",
              "Separate inventory per business",
              "Individual financial reports",
              "Consolidated analytics",
              "User access control per company"
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
                "name": "How many companies can I manage with WhisprBill?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can manage up to 10 companies under one login on Pro and Enterprise plans. Each company operates independently with its own customer database, product catalog, invoice numbering, GST settings, and financial reports."
                }
              },
              {
                "@type": "Question",
                "name": "Does data mix between companies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, never. Each company operates completely independently. Invoices created for Company A won't appear in Company B's records. All data is isolated per company entity."
                }
              },
              {
                "@type": "Question",
                "name": "Can I get consolidated reports across all companies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Generate consolidated reports across all companies or individual P&L statements per business. Perfect for holding companies overseeing multiple subsidiaries."
                }
              }
            ]
          })
        }}
      />

      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-cyan-500/10 rounded-full text-cyan-700 font-semibold text-sm mb-6">
                  🏢 Enterprise-Grade Organization
                </div>
                
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-secondary mb-6 leading-tight">
                  Manage Multiple Businesses <span className="text-primary">Without the Chaos</span>
                </h1>
                
                <p className="text-xl text-accent/80 mb-8 leading-relaxed">
                  Run multiple businesses from a single account—each with its own customers, inventory, and financial reports. Switch between companies in one click without logging out. Perfect for entrepreneurs managing multiple brands, franchises, or separate business entities.
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
                    <span className="text-accent/70">Up to 10 companies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">One-click switching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Separate data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Consolidated reports</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-4 border border-gray-100">
                  <Image
                    src="/wbill-multicompany.jpeg"
                    alt="WhisprBill Multi-Company Dashboard"
                    width={800}
                    height={600}
                    className="rounded-2xl"
                    priority
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="text-2xl font-bold text-primary">10x</div>
                  <div className="text-xs text-accent/70">Companies per account</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              How Multi-Company Management Works
            </h2>
            <p className="text-center text-accent/70 mb-12 max-w-2xl mx-auto">
              Complete isolation with effortless switching—the best of both worlds
            </p>

            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Add Your Companies",
                  description: "Set up each business entity with its own details:",
                  examples: [
                    "Business name, logo, and branding colors",
                    "Separate GSTIN and tax registration numbers",
                    "Unique invoice numbering sequences",
                    "Custom payment terms and bank details"
                  ],
                  icon: "➕"
                },
                {
                  step: "2",
                  title: "Complete Data Isolation",
                  description: "Each company operates independently:",
                  examples: [
                    "Separate customer databases per company",
                    "Individual product catalogs and pricing",
                    "Independent invoice histories and numbering",
                    "Isolated financial reports and tax filings"
                  ],
                  icon: "🔒"
                },
                {
                  step: "3",
                  title: "Switch Instantly",
                  description: "Change active company with one click:",
                  examples: [
                    "Select 'Electronics Store' in the morning",
                    "Switch to 'Consulting Firm' in the afternoon",
                    "No logging out or browser switching needed",
                    "Work context preserved per company"
                  ],
                  icon: "⚡"
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

        {/* Perfect For */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              Perfect For These Business Scenarios
            </h2>
            <p className="text-center text-accent/70 mb-16 max-w-2xl mx-auto">
              Whether you run franchises, multiple brands, or manage client books—we've got you covered
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏪",
                  title: "Franchise Owners",
                  description: "Manage multiple outlet locations with separate inventory, staff access, and local reporting per franchise",
                  example: "6 retail stores across 3 cities"
                },
                {
                  icon: "🚀",
                  title: "Serial Entrepreneurs",
                  description: "Run parallel ventures without confusion—e-commerce shop + consulting firm + manufacturing unit",
                  example: "3 different business models"
                },
                {
                  icon: "🏗️",
                  title: "Holding Companies",
                  description: "Oversee subsidiary businesses with consolidated reporting while maintaining entity independence",
                  example: "Parent company + 4 subsidiaries"
                },
                {
                  icon: "📊",
                  title: "Accountants & CAs",
                  description: "Manage multiple client books from one dashboard with strict data separation and client-level reports",
                  example: "15+ client businesses"
                },
                {
                  icon: "🌍",
                  title: "Multi-State Operations",
                  description: "Separate companies for different GSTINs in different states while maintaining central control",
                  example: "Delhi GSTIN + Mumbai GSTIN"
                },
                {
                  icon: "🎯",
                  title: "Brand Portfolio Managers",
                  description: "Run multiple brands under one umbrella—each with unique branding, pricing, and customer bases",
                  example: "Premium brand + Budget brand"
                },
              ].map((scenario, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="text-4xl mb-4">{scenario.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{scenario.title}</h3>
                  <p className="text-accent/80 text-sm mb-3 leading-relaxed">{scenario.description}</p>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-2 mt-3">
                    <p className="text-xs text-primary font-semibold">Example: {scenario.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              Everything Stays Organized
            </h2>
            <p className="text-center text-accent/70 mb-16 max-w-2xl mx-auto">
              Complete feature set for each company entity
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Separate Branding Per Company",
                  description: "Upload different logos, letterheads, and invoice templates for each business. Each company maintains its unique visual identity.",
                  icon: "🎨"
                },
                {
                  title: "Independent Customer Databases",
                  description: "Customer lists never overlap between companies. ABC Corp in Electronics Store won't appear in Consulting Firm records.",
                  icon: "👥"
                },
                {
                  title: "Isolated Inventory Management",
                  description: "Each company has its own product catalog, pricing tiers, and stock levels. Perfect for businesses selling different products.",
                  icon: "📦"
                },
                {
                  title: "Company-Specific Settings",
                  description: "Set different payment terms, GST rates, invoice numbering, tax settings, and business rules per company.",
                  icon: "⚙️"
                },
                {
                  title: "Individual Financial Reports",
                  description: "Generate P&L, balance sheets, GST reports separately for each company. Perfect for separate tax filings.",
                  icon: "📊"
                },
                {
                  title: "Consolidated Analytics",
                  description: "View overall performance across all companies or drill down into individual business metrics with one toggle.",
                  icon: "📈"
                },
                {
                  title: "User Access Control",
                  description: "Assign employees to specific companies only. Warehouse manager sees Retail inventory, not Consulting data.",
                  icon: "🔐"
                },
                {
                  title: "Bulk Import Per Company",
                  description: "Import customers and products separately for each company using bulk upload. Data maps to correct entity.",
                  icon: "📂"
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                  <p className="text-accent/80 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Success Story */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Real Success Story
            </h2>

            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🏪</div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    Retail Chain Owner Managing 6 Outlets
                  </h3>
                  <p className="text-accent/70">Electronics & Appliances • Mumbai</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-red-600 mb-2">The Problem:</p>
                  <p className="text-accent/80 leading-relaxed">
                    "I was juggling 6 separate accounting systems—one per store. Each month, consolidating reports took 3 full days. Staff couldn't transfer products between stores without manual reconciliation. I spent ₹18,000/month on 6 separate software subscriptions."
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-blue-600 mb-2">The Solution:</p>
                  <p className="text-accent/80 leading-relaxed">
                    "Switched to WhisprBill's multi-company feature. Set up all 6 stores under one login with separate inventory, staff access, and local reports. Store managers can only see their store data, but I can switch between all 6 instantly from my phone."
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-600 mb-2">The Results:</p>
                  <ul className="space-y-2">
                    {[
                      "Saved ₹15,000/month (6 subscriptions → 1)",
                      "Month-end reporting reduced from 3 days to 2 hours",
                      "Identified underperforming store in Week 1 using consolidated analytics",
                      "Inter-store transfers now tracked properly without confusion",
                      "Can see which store is profitable from my phone anytime"
                    ].map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-accent/80">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-lg">
                  <p className="text-accent/80 italic">
                    "I can finally see which store needs attention and which is my star performer—all from one screen. Game changer for multi-location businesses."
                  </p>
                  <p className="text-sm text-accent/60 mt-2">— Rajesh Mehta, Owner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Built for Scale, Designed for Simplicity
            </h2>

            <div className="bg-cyan-50/50 border border-cyan-100 rounded-2xl p-6 lg:p-8 mb-8">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Complete Independence, Zero Confusion
              </h3>
              <p className="text-accent/80 mb-4 leading-relaxed">
                Manage up to 10 companies under one login—no need to juggle multiple accounts or pay for separate subscriptions. Each company operates completely independently with its own customer database, product catalog, invoice numbering, GST settings, and financial reports. Data never mixes: invoices created for Company A won't appear in Company B's records.
              </p>
              <p className="text-accent/80 leading-relaxed">
                Switch between companies instantly from the dashboard—select 'Electronics Store' in the morning, 'Consulting Firm' in the afternoon. Perfect for: Franchise owners managing multiple locations, Entrepreneurs running parallel ventures (e.g., retail + services), Holding companies overseeing subsidiary businesses, Accountants/CAs managing client books, Business owners with different GSTINs for different states.
              </p>
            </div>

            <div className="bg-green-50/50 border border-green-100 rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Control & Visibility When You Need It
              </h3>
              <p className="text-accent/80 mb-4 leading-relaxed">
                Each company has its own branding: upload separate logos, letterheads, and invoice templates per business. Set different pricing tiers, payment terms, and tax settings for each entity. Generate consolidated reports across all companies or individual P&L statements per business.
              </p>
              <p className="text-accent/80 leading-relaxed">
                User access control: assign employees to specific companies only—your warehouse manager sees Retail inventory, not Consulting data. Import customers and products separately for each company using bulk upload. One user managing 6 retail outlets told us: "I can finally see which store is profitable and which needs attention—all from one screen." Switch seamlessly, stay organized, grow fearlessly.
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
                  q: "How many companies can I manage with WhisprBill?",
                  a: "You can manage up to 10 companies under one login on Pro and Enterprise plans. Each company operates independently with its own customer database, product catalog, invoice numbering, GST settings, and financial reports."
                },
                {
                  q: "Does data mix between companies?",
                  a: "No, never. Each company operates completely independently. Invoices created for Company A won't appear in Company B's records. All data is isolated per company entity for complete data integrity."
                },
                {
                  q: "Can I get consolidated reports across all companies?",
                  a: "Yes! Generate consolidated reports across all companies or individual P&L statements per business. Perfect for holding companies overseeing multiple subsidiaries or tracking overall portfolio performance."
                },
                {
                  q: "How does company switching work?",
                  a: "Simply select the company from a dropdown in your dashboard. The entire interface updates to show that company's data. No logging out, no browser switching—instant context change in one click."
                },
                {
                  q: "Can I assign different staff to different companies?",
                  a: "Yes! User access control lets you assign employees to specific companies only. Your retail store manager won't see consulting firm data, even though both are in the same account."
                },
                {
                  q: "Do I pay extra for multiple companies?",
                  a: "No! Multi-company management is included in Pro and Enterprise plans. You save money compared to buying separate subscriptions for each business entity."
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
                  title: "Business Analytics",
                  description: "Get separate analytics dashboards per company or consolidated reports across all entities",
                  link: "/features/analytics",
                  icon: "📊"
                },
                {
                  title: "Professional Templates",
                  description: "Set different invoice templates per company—each business maintains unique branding",
                  link: "/features/templates",
                  icon: "📄"
                },
                {
                  title: "GST Compliance",
                  description: "Separate GSTIN, tax filings, and E-invoicing per company with centralized monitoring",
                  link: "/features/gst-compliance",
                  icon: "🇮🇳"
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
              Simplify Multi-Business Management Today
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join entrepreneurs managing 2-10 businesses from one powerful dashboard
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
              ✓ Up to 10 companies  ✓ Complete data isolation  ✓ Instant switching
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


