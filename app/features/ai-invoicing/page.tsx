import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "AI Conversational Invoicing - Create Invoices by Chatting | WhisprBill",
  description: "Generate professional invoices in 10 seconds using natural language. Just chat: 'Invoice Sharma Enterprises for ₹45,000 with 18% GST'. Reduce billing time by 80%. Free trial available.",
  keywords: [
    "AI invoice generator",
    "conversational invoicing software",
    "voice invoice creation",
    "automated billing India",
    "AI accounting assistant",
    "chat-based invoicing"
  ],
  openGraph: {
    title: "AI Invoice Generator - Create Invoices by Chatting",
    description: "Create invoices by chatting naturally. No forms, no menus—just describe what you need and get a professional invoice in seconds.",
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
              "Multi-language support (English/Hindi)",
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
                  "text": "Simply describe your invoice needs in natural language. For example, type 'Create invoice for ABC Corp for 5 laptops at ₹50,000 each with 18% GST'. WhisprBill's AI understands your request, fetches customer details from your database, calculates taxes automatically, and generates a professional invoice in under 10 seconds."
                }
              },
              {
                "@type": "Question",
                "name": "Can I create invoices in Hindi using AI?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! WhisprBill's AI understands commands in both English and Hindi. You can mix languages naturally, and the system will generate properly formatted invoices."
                }
              },
              {
                "@type": "Question",
                "name": "Does AI invoicing support GST compliance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. The AI automatically calculates CGST, SGST, or IGST based on customer location, validates GSTINs in real-time, and ensures all invoices are 100% GST-compliant with proper HSN codes and tax breakdowns."
                }
              },
              {
                "@type": "Question",
                "name": "How much time can I save with AI invoicing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Businesses using WhisprBill's AI invoicing save an average of 15 hours per week. What used to take 20 minutes of manual data entry now takes just 10-15 seconds of natural conversation."
                }
              }
            ]
          })
        }}
      />

      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
                  💬 AI-Powered Feature
                </div>
                
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-secondary mb-6 leading-tight">
                  Create Invoices by Simply <span className="text-primary">Chatting</span>
                </h1>
                
                <p className="text-xl text-accent/80 mb-6 leading-relaxed">
                  Forget forms and menus. Just type or speak naturally:
                </p>

                <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-primary mb-8">
                  <p className="text-primary font-semibold italic">
                    "Invoice Sharma Enterprises for ₹45,000 with 18% GST, payment due in 15 days"
                  </p>
                  <p className="text-sm text-accent/60 mt-2">→ Professional invoice ready in 10 seconds</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/pricing"
                    className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg text-center"
                  >
                    Start Free Trial
                  </Link>
                  <a
                    href="#how-it-works"
                    className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-colors border-2 border-primary text-center"
                  >
                    See How It Works ↓
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">80% faster</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Zero errors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">GST compliant</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-4 border border-gray-100">
                  <Image
                    src="/wbill-chatwithai.png"
                    alt="WhisprBill AI Chat Invoice Creation Interface"
                    width={800}
                    height={600}
                    className="rounded-2xl"
                    priority
                  />
                </div>
                
                {/* Floating stats */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="text-2xl font-bold text-primary">10 sec</div>
                  <div className="text-xs text-accent/70">Average creation time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              How AI Invoicing Works in 3 Simple Steps
            </h2>
            <p className="text-center text-accent/70 mb-12 max-w-2xl mx-auto">
              From conversation to professional invoice in seconds—no training required
            </p>

            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Describe What You Need in Plain Language",
                  description: "Type or speak naturally—no special commands needed. Examples:",
                  examples: [
                    "Create invoice for ABC Corp, 5 laptops at ₹50,000 each, 18% GST",
                    "Bill Sharma Enterprises ₹45,000 for consulting, payment due in 30 days",
                    "Invoice for 10 chairs @ ₹2,500 with 12% GST, add 5% trade discount"
                  ],
                  icon: "💬"
                },
                {
                  step: "2",
                  title: "AI Understands Context & Fetches Data",
                  description: "The system intelligently:",
                  examples: [
                    "Fetches ABC Corp's details from your customer database",
                    "Calculates CGST/SGST/IGST based on customer location automatically",
                    "Remembers product prices, HSN codes, and your business preferences",
                    "Applies payment terms and discounts as specified"
                  ],
                  icon: "🧠"
                },
                {
                  step: "3",
                  title: "Review, Tweak & Send Instantly",
                  description: "Your invoice is ready! You can:",
                  examples: [
                    "Preview the professional invoice before sending",
                    "Make quick edits by chatting: 'Change due date to 45 days'",
                    "Send via WhatsApp, Email, or download PDF",
                    "Generate E-invoice and E-way bill with one click"
                  ],
                  icon: "✅"
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

        {/* Benefits Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              Why Businesses Love AI Invoicing
            </h2>
            <p className="text-center text-accent/70 mb-12 max-w-2xl mx-auto">
              Real results from 5,000+ businesses using WhisprBill's AI
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "⚡",
                  title: "15 Hours Saved Per Week",
                  description: "Average time saved by switching from manual data entry to AI invoicing. That's 780 hours per year!"
                },
                {
                  icon: "🎯",
                  title: "95% Fewer Errors",
                  description: "AI eliminates typos, wrong GST calculations, and customer detail mistakes automatically"
                },
                {
                  icon: "💰",
                  title: "Get Paid 40% Faster",
                  description: "Professional invoices sent instantly lead to quicker payments and better cash flow"
                },
                {
                  icon: "🌍",
                  title: "Works in English & Hindi",
                  description: "Chat naturally in your preferred language—the AI understands both and even mixed commands"
                },
                {
                  icon: "📱",
                  title: "Works on Any Device",
                  description: "Create invoices from phone, tablet, or desktop—chat interface works everywhere"
                },
                {
                  icon: "🔒",
                  title: "Learns Your Business",
                  description: "AI remembers your products, customers, and preferences—getting smarter with each invoice"
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{benefit.title}</h3>
                  <p className="text-accent/70 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Examples */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-12">
              Real Conversations, Real Invoices
            </h2>

            <div className="space-y-8">
              {[
                {
                  scenario: "Retail Store Owner",
                  chat: "Create invoice for Sharma Electronics, 3 Samsung TVs @ ₹45,000, 2 soundbars @ ₹8,000, 18% GST, 10% dealer discount",
                  result: "Generated invoice with all items, calculated total ₹155,520 after discount and GST, fetched Sharma's GSTIN and address automatically"
                },
                {
                  scenario: "Freelance Consultant",
                  chat: "Bill ABC Corp ₹1,20,000 for digital marketing services in December, add 18% GST, Net 30 payment terms",
                  result: "Created service invoice with ₹1,41,600 total, set due date 30 days from today, included ABC's billing details"
                },
                {
                  scenario: "Restaurant Supplier",
                  chat: "Invoice Hotel Taj for 50kg rice ₹3,000, 30kg wheat ₹1,800, 5% GST, delivery challan also needed",
                  result: "Generated both tax invoice and delivery challan, calculated ₹5,040 total with 5% GST on food items"
                }
              ].map((example, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-primary/20">
                  <div className="text-sm font-semibold text-primary mb-3">
                    {example.scenario}
                  </div>
                  <div className="bg-white rounded-xl p-4 mb-4 border-l-4 border-primary">
                    <p className="text-secondary italic font-medium">"{example.chat}"</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <p className="text-sm text-accent/80">{example.result}</p>
                  </div>
                </div>
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
                  a: "Simply describe your invoice needs in natural language. For example, type 'Create invoice for ABC Corp for 5 laptops at ₹50,000 each with 18% GST'. WhisprBill's AI understands your request, fetches customer details from your database, calculates taxes automatically, and generates a professional invoice in under 10 seconds."
                },
                {
                  q: "Can I create invoices in Hindi using AI?",
                  a: "Yes! WhisprBill's AI understands commands in both English and Hindi. You can mix languages naturally, and the system will generate properly formatted invoices."
                },
                {
                  q: "Does AI invoicing support GST compliance?",
                  a: "Absolutely. The AI automatically calculates CGST, SGST, or IGST based on customer location, validates GSTINs in real-time, and ensures all invoices are 100% GST-compliant with proper HSN codes and tax breakdowns."
                },
                {
                  q: "How much time can I save with AI invoicing?",
                  a: "Businesses using WhisprBill's AI invoicing save an average of 15 hours per week. What used to take 20 minutes of manual data entry now takes just 10-15 seconds of natural conversation."
                },
                {
                  q: "What if the AI makes a mistake?",
                  a: "You can review every invoice before sending and make instant corrections by chatting: 'Change quantity to 10' or 'Update discount to 15%'. The AI learns from corrections to improve future accuracy."
                },
                {
                  q: "Do I need to train the AI?",
                  a: "No training required! The AI works immediately. As you use it, the system learns your business patterns, customer names, and product details to get even faster over time."
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

        {/* Comparison: Manual vs AI */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Manual Invoicing vs AI Invoicing
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left font-bold text-secondary">Task</th>
                    <th className="p-4 text-center font-bold text-red-600">Manual Entry</th>
                    <th className="p-4 text-center font-bold text-primary">AI Invoicing</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { task: "Time to create invoice", manual: "15-20 minutes", ai: "10-15 seconds [web:6]" },
                    { task: "Error rate", manual: "8-12% [web:6]", ai: "< 0.5%" },
                    { task: "GST calculation", manual: "Manual with calculator", ai: "Automatic & accurate [page:1]" },
                    { task: "Customer data entry", manual: "Type every time", ai: "Auto-fetched from database [page:1]" },
                    { task: "Learning curve", manual: "2-3 days training", ai: "Works immediately" },
                    { task: "Multi-language support", manual: "Not available", ai: "English + Hindi [page:1]" },
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="p-4 font-medium text-secondary">{row.task}</td>
                      <td className="p-4 text-center text-accent/70">{row.manual}</td>
                      <td className="p-4 text-center font-semibold text-primary">{row.ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  title: "Professional Templates",
                  description: "AI-generated invoices use your chosen templates automatically",
                  link: "/features/templates",
                  icon: "📄"
                },
                {
                  title: "GST Compliance",
                  description: "Every AI invoice is 100% GST-compliant with automatic tax calculations",
                  link: "/features/gst-compliance",
                  icon: "🇮🇳"
                },
                {
                  title: "Customer Management",
                  description: "AI remembers all customer details for instant invoice creation",
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
              Experience the Future of Invoicing Today
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join 5,000+ businesses already creating invoices by chatting with AI
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
              ✓ Free forever plan available  ✓ 5-minute setup  ✓ Works in English & Hindi
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
