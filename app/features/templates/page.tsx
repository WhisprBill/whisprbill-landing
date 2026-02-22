import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Professional Invoice Templates - 50+ Industry-Specific Designs | WhisprBill",
  description: "Choose from 50+ beautifully designed GST-compliant invoice templates. Retail, Wholesale, Services, Healthcare formats. Fully customizable with your branding. Export to PDF instantly.",
  keywords: [
    "invoice templates India",
    "professional invoice designs",
    "GST compliant templates",
    "customizable invoice formats",
    "retail invoice template",
    "service invoice template"
  ],
  openGraph: {
    title: "50+ Professional Invoice Templates - GST Compliant",
    description: "Beautiful invoice templates for every industry. Customize colors, fonts, logos. GST-compliant and ready to use.",
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
            "name": "WhisprBill Invoice Templates",
            "applicationCategory": "BusinessApplication",
            "description": "50+ professional invoice templates for every industry. GST-compliant, customizable, and print-ready.",
            "operatingSystem": "Web browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            },
            "featureList": [
              "50+ industry-specific templates",
              "GST-compliant formats",
              "Custom branding and logos",
              "Drag-and-drop editor",
              "PDF/WhatsApp sharing",
              "Multi-language support"
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
                "name": "How many invoice templates does WhisprBill offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "WhisprBill offers 50+ professionally designed invoice templates covering industries like Retail, Wholesale, Services, Manufacturing, Healthcare, Real Estate, Hospitality, and more. New templates are added monthly based on user requests."
                }
              },
              {
                "@type": "Question",
                "name": "Can I customize invoice templates with my branding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Customize colors, fonts, logos, and layouts using our drag-and-drop editor. Add custom fields for industry-specific information. No design skills needed—changes preview in real-time."
                }
              },
              {
                "@type": "Question",
                "name": "Are the templates GST compliant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Every template is designed to be 100% GST compliant with proper tax breakdowns, HSN codes, GSTIN fields, and all mandatory information required by Indian tax regulations."
                }
              }
            ]
          })
        }}
      />

      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-purple-500/10 rounded-full text-purple-700 font-semibold text-sm mb-6">
                  📄 50+ Professional Templates
                </div>
                
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-secondary mb-6 leading-tight">
                  Professional Templates for <span className="text-primary">Every Business Type</span>
                </h1>
                
                <p className="text-xl text-accent/80 mb-8 leading-relaxed">
                  Choose from 50+ beautifully designed invoice templates spanning every industry—from minimalist designs for tech startups to detailed formats for construction firms. Each template is GST-compliant, fully customizable, and looks stunning on any device or printer.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/pricing"
                    className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg text-center"
                  >
                    Start Free Trial
                  </Link>
                  <a
                    href="#template-gallery"
                    className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-colors border-2 border-primary text-center"
                  >
                    Browse Templates ↓
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">50+ designs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">GST compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Fully customizable</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Print ready</span>
                  </div>
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
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs text-accent/70">Templates available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Template Categories */}
        <section id="template-gallery" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              Templates for Every Industry
            </h2>
            <p className="text-center text-accent/70 mb-16 max-w-2xl mx-auto">
              Specialized formats designed for your business type with industry best practices built-in
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Retail & Wholesale",
                  description: "Product invoices with SKU codes, batch numbers, and inventory tracking",
                  icon: "🛍️",
                  features: ["Itemized pricing", "Bulk discounts", "Stock tracking"]
                },
                {
                  category: "Services & Consulting",
                  description: "Service invoices with hourly breakdowns, project milestones, and time tracking",
                  icon: "💼",
                  features: ["Hourly rates", "Project phases", "Time logs"]
                },
                {
                  category: "Manufacturing",
                  description: "Detailed BOMs, material costs, labor charges, and production tracking",
                  icon: "🏭",
                  features: ["BOM breakdown", "Material costs", "Labor tracking"]
                },
                {
                  category: "Healthcare & Pharmacy",
                  description: "Medical invoices with patient IDs, prescription details, and insurance codes",
                  icon: "🏥",
                  features: ["Patient records", "Medicine details", "Insurance fields"]
                },
                {
                  category: "Real Estate & Construction",
                  description: "Property invoices with plot numbers, milestone payments, and legal references",
                  icon: "🏗️",
                  features: ["Plot details", "Milestone billing", "Legal refs"]
                },
                {
                  category: "Hospitality & Food",
                  description: "Restaurant bills, hotel invoices with room services, and F&B breakdowns",
                  icon: "🍽️",
                  features: ["Menu items", "Room charges", "Service tax"]
                },
                {
                  category: "Technology & Software",
                  description: "SaaS invoices, license fees, subscription billing, and support charges",
                  icon: "💻",
                  features: ["Subscriptions", "License keys", "Support tiers"]
                },
                {
                  category: "Transportation & Logistics",
                  description: "Freight invoices with vehicle details, distance calculation, and fuel surcharges",
                  icon: "🚚",
                  features: ["Vehicle IDs", "Distance calc", "Fuel charges"]
                },
                {
                  category: "Education & Training",
                  description: "Course fees, admission charges, exam fees, and student enrollment details",
                  icon: "🎓",
                  features: ["Course details", "Student IDs", "Fee structure"]
                },
              ].map((category, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{category.category}</h3>
                  <p className="text-accent/80 text-sm mb-4 leading-relaxed">{category.description}</p>
                  <div className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-accent/70">
                        <span className="text-primary">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customization Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              Customize Every Detail
            </h2>
            <p className="text-center text-accent/70 mb-16 max-w-2xl mx-auto">
              Make templates truly yours with our drag-and-drop editor—no design skills needed
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Branding & Colors",
                  description: "Upload your logo, set brand colors, and customize fonts to match your company identity. Changes apply across all future invoices automatically.",
                  icon: "🎨"
                },
                {
                  title: "Custom Fields",
                  description: "Add industry-specific fields like vehicle numbers for transporters, patient IDs for clinics, or project codes for agencies. Fields save for future use.",
                  icon: "📋"
                },
                {
                  title: "Layout Options",
                  description: "Choose between compact, standard, or detailed layouts. Adjust spacing, column widths, and section order with drag-and-drop simplicity.",
                  icon: "📐"
                },
                {
                  title: "Multi-Language Support",
                  description: "Generate invoices in English, Hindi, Tamil, Telugu, and more regional languages. Coming soon: Auto-translate product descriptions.",
                  icon: "🌍"
                },
                {
                  title: "Terms & Conditions",
                  description: "Add custom payment terms, return policies, warranty information, and legal disclaimers. Save templates for different customer types.",
                  icon: "📜"
                },
                {
                  title: "Export Formats",
                  description: "Export to PDF for printing, share via WhatsApp/Email, or download as Excel for accounting. All formats maintain your custom styling.",
                  icon: "📤"
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

        {/* Detailed Features Breakdown */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Why Businesses Love Our Templates
            </h2>

            <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-6 lg:p-8 mb-8">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Complete Flexibility, Zero Design Work
              </h3>
              <p className="text-accent/80 mb-4 leading-relaxed">
                Stop sending boring, generic invoices. Our template library includes specialized formats for Retail, Wholesale, Services, Manufacturing, Healthcare, Real Estate, Hospitality, and more. Each template follows industry best practices: Service invoices with hourly breakdowns, Product invoices with SKU codes, Proforma invoices for advance orders, Tax invoices with detailed GST breakdowns, Credit/Debit notes for returns, Quotations and Estimates, Delivery Challans, and Purchase Orders.
              </p>
              <p className="text-accent/80 leading-relaxed">
                Customize colors, fonts, logos, and layouts in minutes using our drag-and-drop editor—no design skills needed. Add custom fields for industry-specific information like vehicle numbers for transporters or patient IDs for clinics. Set your preferred template as default and never worry about formatting again.
              </p>
            </div>

            <div className="bg-green-50/50 border border-green-100 rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Professional Presentation Gets You Paid Faster
              </h3>
              <p className="text-accent/80 mb-4 leading-relaxed">
                Preview exactly how your invoice will look before sending. Export to PDF, print directly, or share via WhatsApp/Email with one click. New templates are added monthly based on user requests—we've already released templates for Event Management, Photography, Consulting, Legal Services, and Educational Institutions.
              </p>
              <p className="text-accent/80 leading-relaxed">
                Coming soon: Multi-language templates in Hindi, Tamil, Telugu, and more regional languages. One fashion boutique owner told us: "Clients now compliment our invoices—something I never imagined possible!" Professional presentation builds trust and gets you paid faster.
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
                  q: "How many invoice templates does WhisprBill offer?",
                  a: "WhisprBill offers 50+ professionally designed invoice templates covering industries like Retail, Wholesale, Services, Manufacturing, Healthcare, Real Estate, Hospitality, and more. New templates are added monthly based on user requests."
                },
                {
                  q: "Can I customize invoice templates with my branding?",
                  a: "Yes! Customize colors, fonts, logos, and layouts using our drag-and-drop editor. Add custom fields for industry-specific information. No design skills needed—changes preview in real-time before you send."
                },
                {
                  q: "Are the templates GST compliant?",
                  a: "Absolutely. Every template is designed to be 100% GST compliant with proper tax breakdowns, HSN codes, GSTIN fields, and all mandatory information required by Indian tax regulations."
                },
                {
                  q: "Can I create different templates for different customers?",
                  a: "Yes! Save multiple customized templates for different customer types (e.g., 'Retail Template', 'Wholesale Template', 'VIP Template'). Assign default templates per customer or select manually per invoice."
                },
                {
                  q: "What export formats are supported?",
                  a: "Export invoices as PDF (for printing/email), Excel (for accounting software), or share directly via WhatsApp/Email. All exports maintain your custom styling and branding."
                },
                {
                  q: "Can I add my company letterhead?",
                  a: "Yes! Upload your letterhead image and it will appear on every invoice. You can also add footer information like bank details, terms & conditions, and digital signatures."
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
                  description: "AI-generated invoices automatically use your chosen template with all customizations",
                  link: "/features/ai-invoicing",
                  icon: "💬"
                },
                {
                  title: "GST Compliance",
                  description: "Every template includes mandatory GST fields with automatic tax calculations",
                  link: "/features/gst-compliance",
                  icon: "🇮🇳"
                },
                {
                  title: "Multi-Company Management",
                  description: "Set different templates for each company you manage—automatic brand switching",
                  link: "/features/multi-company",
                  icon: "🏢"
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
              Start Using Professional Templates Today
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join 5,000+ businesses creating beautiful, branded invoices
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
              ✓ 50+ templates  ✓ Fully customizable  ✓ GST compliant
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
