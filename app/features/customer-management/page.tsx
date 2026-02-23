import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Unlimited Customer Management - CRM for Invoicing | WhisprBill",
  description: "Store unlimited customers even on Free plan. Complete contact details, GSTIN validation, transaction history, custom tags. Migrate 5,000+ customers in 60 seconds with bulk import.",
  keywords: [
    "customer management software India",
    "CRM for small business",
    "unlimited customer database",
    "GSTIN validation software",
    "customer contact management",
    "bulk customer import"
  ],
  openGraph: {
    title: "Unlimited Customer Management - No Caps on Growth",
    description: "Add unlimited customers with full details, GSTIN validation, and transaction history. Free forever.",
    url: "https://whisprbill.com/features/customer-management",
    images: [
      {
        url: "/og-customer-management.png",
        width: 1200,
        height: 630,
        alt: "WhisprBill Customer Management Dashboard",
      },
    ],
  },
  alternates: {
    canonical: "https://whisprbill.com/features/customer-management",
  },
};

export default function CustomerManagementPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "WhisprBill Customer Management System",
            "applicationCategory": "BusinessApplication",
            "description": "Unlimited customer database with GSTIN validation, transaction history, and bulk import capabilities",
            "operatingSystem": "Web browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            },
            "featureList": [
              "Unlimited customer storage",
              "Real-time GSTIN validation",
              "Complete transaction history",
              "Custom tags and categories",
              "Bulk CSV/Excel import",
              "Customer segmentation"
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
                "name": "How many customers can I store in WhisprBill?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Unlimited! Even on the Free plan, you can add unlimited customers with no artificial caps. Store complete contact details, GSTIN, addresses, payment terms, and full transaction history for every customer."
                }
              },
              {
                "@type": "Question",
                "name": "Can WhisprBill validate customer GSTINs automatically?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! WhisprBill validates GSTINs in real-time using government APIs. The system checks format validity, verifies the GSTIN is active, fetches the registered business name, and flags any mismatches with customer details."
                }
              },
              {
                "@type": "Question",
                "name": "How fast can I import existing customers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Upload 5,000+ customers with full details in under 60 seconds using bulk CSV/Excel import. The system validates data in real-time, auto-maps fields, flags duplicates, and handles GSTIN validation during import."
                }
              }
            ]
          })
        }}
      />

      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-rose-500/10 rounded-full text-rose-700 font-semibold text-sm mb-6">
                  👥 Unlimited on Free Plan
                </div>
                
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-secondary mb-6 leading-tight">
                  Unlimited Customer Management <span className="text-primary">Without the Fees</span>
                </h1>
                
                <p className="text-xl text-accent/80 mb-8 leading-relaxed">
                  Add unlimited customers even on the Free plan—no artificial caps on your growth. Store complete contact details, billing addresses, payment terms, and transaction history. Organize customers with custom tags and categories for targeted campaigns.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/pricing"
                    className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg text-center"
                  >
                    Start Free Trial
                  </Link>
                  <a
                    href="#features"
                    className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-colors border-2 border-primary text-center"
                  >
                    See Features ↓
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Unlimited contacts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">GSTIN validation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Bulk import</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Custom tags</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-4 border border-gray-100">
                  <Image
                    src="/wbill-customers.jpeg"
                    alt="WhisprBill Customer Management Dashboard"
                    width={800}
                    height={600}
                    className="rounded-2xl"
                    priority
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="text-2xl font-bold text-primary">∞</div>
                  <div className="text-xs text-accent/70">Unlimited customers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Unlimited Matters */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              Why We Believe in Unlimited Customers
            </h2>
            <p className="text-center text-accent/70 mb-12 max-w-2xl mx-auto">
              Your growth shouldn't be limited by software pricing
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-10 border border-primary/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                    <span className="text-2xl">❌</span>
                    Other Software Limits You
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "50 customers on Free plan",
                      "₹10/customer/month beyond limit",
                      "Delete old customers to add new ones",
                      "Forced upgrades when you grow",
                      "Pay more as business succeeds"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-accent/80">
                        <span className="text-red-500 mt-0.5">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    WhisprBill Grows With You
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Unlimited customers on Free plan",
                      "Zero per-customer charges ever",
                      "Keep all historical customer data",
                      "Upgrade only for features, not contacts",
                      "Pay the same as you scale"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-accent/80">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-xl p-6 border border-gray-100">
                <p className="text-accent/80 leading-relaxed">
                  <span className="font-bold text-secondary">Our philosophy:</span> Customer data is the foundation of your business. It should never be held hostage by pricing tiers. We charge for features that save you time, not for storing basic contact information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              Complete Customer Relationship Management
            </h2>
            <p className="text-center text-accent/70 mb-16 max-w-2xl mx-auto">
              Everything you need to manage customer relationships and grow sales
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "📋",
                  title: "Complete Contact Profiles",
                  description: "Store names, phone numbers, emails, GSTIN, billing/shipping addresses, credit limits, payment terms (Net 30, COD, etc.), and custom notes per customer.",
                  features: ["Multiple addresses", "Payment preferences", "Custom fields"]
                },
                {
                  icon: "✓",
                  title: "Real-Time GSTIN Validation",
                  description: "Validates GSTINs using government APIs—checks format, verifies active status, fetches registered business name, and flags mismatches automatically.",
                  features: ["Format validation", "Active status check", "Name matching"]
                },
                {
                  icon: "📊",
                  title: "Complete Transaction History",
                  description: "View total sales, pending payments, average order value, and purchase frequency for every customer. Track trends over time with visual charts.",
                  features: ["Sales history", "Payment tracking", "Order frequency"]
                },
                {
                  icon: "🏷️",
                  title: "Custom Tags & Categories",
                  description: "Tag customers as 'VIP', 'Wholesale', 'Retail', or create your own categories. Filter and segment customers for targeted WhatsApp campaigns.",
                  features: ["Unlimited tags", "Smart filtering", "Bulk tagging"]
                },
                {
                  icon: "🔍",
                  title: "Instant Search & Filters",
                  description: "Search and filter customers instantly even with 10,000+ records. Find by name, phone, email, GSTIN, city, or custom tags in milliseconds.",
                  features: ["Fuzzy search", "Multi-filter", "Quick access"]
                },
                {
                  icon: "📂",
                  title: "Bulk Import & Export",
                  description: "Migrate from other systems with CSV/Excel upload. Automatic field mapping handles 5,000 customers in 60 seconds. Export anytime for backup or analysis.",
                  features: ["CSV/Excel support", "Auto-mapping", "Duplicate detection"]
                },
                {
                  icon: "💰",
                  title: "Credit Limit Management",
                  description: "Set credit limits per customer and get alerts when they exceed it. Track outstanding balances and days overdue automatically.",
                  features: ["Limit tracking", "Overdue alerts", "Balance monitoring"]
                },
                {
                  icon: "📞",
                  title: "Communication History",
                  description: "Track when you last contacted customers, quotes sent, pending follow-ups. Never forget to follow up with high-value prospects.",
                  features: ["Contact log", "Follow-up reminders", "Quote tracking"]
                },
                {
                  icon: "🎯",
                  title: "Customer Segmentation",
                  description: "Segment customers for targeted campaigns—send festive offers to 'VIP' customers or stock clearance alerts to 'Retail' only.",
                  features: ["Smart segments", "Campaign targeting", "Bulk messaging"]
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                  <p className="text-accent/80 text-sm mb-4 leading-relaxed">{feature.description}</p>
                  <div className="space-y-1">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-accent/60">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bulk Import Feature */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              Migrate 5,000+ Customers in 60 Seconds
            </h2>
            <p className="text-center text-accent/70 mb-12 max-w-2xl mx-auto">
              Switch from any system without losing data or spending days on manual entry
            </p>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Export from Your Current System",
                  description: "Download customer data as CSV or Excel from Tally, Excel, or any other software you're currently using.",
                  icon: "📤"
                },
                {
                  step: "2",
                  title: "Upload to WhisprBill",
                  description: "Drag & drop your file. Our smart mapper automatically detects columns (Name, Phone, GSTIN, Address, etc.)—no manual configuration needed.",
                  icon: "⬆️"
                },
                {
                  step: "3",
                  title: "Automatic Validation",
                  description: "System validates GSTINs in real-time, flags duplicates, checks formatting errors, and shows preview before final import.",
                  icon: "✓"
                },
                {
                  step: "4",
                  title: "Import Complete",
                  description: "5,000 customers with full details imported in under 60 seconds. Rollback available if anything looks wrong. Start invoicing immediately.",
                  icon: "🎉"
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-primary/20">
                  <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl shrink-0 shadow-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="text-xl font-bold text-secondary">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-accent/80 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-green-50 border border-green-100 rounded-xl p-6">
              <p className="text-sm text-accent/80 leading-relaxed">
                <span className="font-bold text-secondary">Pro tip:</span> The system handles messy data gracefully. Mixed formats, extra spaces, and international characters are cleaned automatically. Duplicates are flagged but not auto-deleted—you decide what to keep.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Features Breakdown */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Why Businesses Love This Feature
            </h2>

            <div className="bg-rose-50/50 border border-rose-100 rounded-2xl p-6 lg:p-8 mb-8">
              <h3 className="text-xl font-bold text-secondary mb-4">
                No Growth Limits, Ever
              </h3>
              <p className="text-accent/80 mb-4 leading-relaxed">
                Unlike competitors who charge per contact, we believe customer data should be unlimited from day one. Store names, phone numbers, emails, GSTIN, billing/shipping addresses, credit limits, payment terms (Net 30, COD, etc.), and custom notes. Tag customers as 'VIP', 'Wholesale', 'Retail', or create your own categories.
              </p>
              <p className="text-accent/80 leading-relaxed">
                View complete transaction history: total sales, pending payments, average order value, and purchase frequency. Search and filter customers instantly even with 10,000+ records. Migrating from another system? Our bulk import tool handles CSV/Excel files with automatic field mapping—upload 5,000 customers with full details in under 60 seconds.
              </p>
            </div>

            <div className="bg-green-50/50 border border-green-100 rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Smart Validation & Organization
              </h3>
              <p className="text-accent/80 mb-4 leading-relaxed">
                The system validates GSTINs in real-time using government APIs and flags duplicates before import. Export customer lists anytime for backup or external analysis. Set credit limits and get alerts when customers exceed them. Track communication history: when you last contacted them, quotes sent, pending follow-ups.
              </p>
              <p className="text-accent/80 leading-relaxed">
                Segment customers for targeted WhatsApp campaigns: send festive offers to 'VIP' customers or stock clearance alerts to 'Retail' only. One distributor managing 8,000+ customer records told us: "Finally, a system that doesn't charge me extra for growing my business." Customer data syncs across devices in real-time—add a customer on mobile, invoice them instantly from desktop.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "How many customers can I store in WhisprBill?",
                  a: "Unlimited! Even on the Free plan, you can add unlimited customers with no artificial caps. Store complete contact details, GSTIN, addresses, payment terms, and full transaction history for every customer."
                },
                {
                  q: "Can WhisprBill validate customer GSTINs automatically?",
                  a: "Yes! WhisprBill validates GSTINs in real-time using government APIs. The system checks format validity, verifies the GSTIN is active, fetches the registered business name, and flags any mismatches with customer details."
                },
                {
                  q: "How fast can I import existing customers?",
                  a: "Upload 5,000+ customers with full details in under 60 seconds using bulk CSV/Excel import. The system validates data in real-time, auto-maps fields, flags duplicates, and handles GSTIN validation during import."
                },
                {
                  q: "Can I organize customers with custom tags?",
                  a: "Yes! Create unlimited custom tags like 'VIP', 'Wholesale', 'Retail', 'Overdue', etc. Use tags to filter customers, run targeted campaigns, and segment your customer base for better relationship management."
                },
                {
                  q: "What customer data can I store?",
                  a: "Store names, phone numbers, emails, GSTIN, billing/shipping addresses, credit limits, payment terms, custom notes, transaction history, communication logs, and any custom fields you need for your business."
                },
                {
                  q: "Can I export customer data anytime?",
                  a: "Absolutely! Export your complete customer database to CSV or Excel anytime for backup, analysis, or migration. You own your data—no lock-in, no restrictions."
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Works Seamlessly With Other Features
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Conversational Invoicing",
                  description: "AI remembers all customer details for instant invoice creation—no manual lookup",
                  link: "/features/ai-invoicing",
                  icon: "💬"
                },
                {
                  title: "Business Analytics",
                  description: "Analytics identify top customers automatically for targeted retention campaigns",
                  link: "/features/analytics",
                  icon: "📊"
                },
                {
                  title: "GST Compliance",
                  description: "Customer GSTINs validated in real-time for every transaction with compliance checks",
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
              Start Managing Customers Without Limits
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join 5,000+ businesses storing unlimited customer data on WhisprBill
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
              ✓ Unlimited customers  ✓ GSTIN validation  ✓ Bulk import in 60 seconds
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
