import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Pricing Plans - Affordable Invoicing Software | WhisprBill",
  description: "Start free forever. Upgrade to Pro for ₹499/month. No hidden fees, cancel anytime. Compare WhisprBill pricing plans and find the perfect fit for your business.",
  keywords: [
    "invoice software pricing",
    "WhisprBill plans",
    "affordable billing software India",
    "free invoice generator",
    "GST software pricing"
  ],
  openGraph: {
    title: "WhisprBill Pricing - Plans Starting at ₹0",
    description: "Free forever plan available. Pro plan with unlimited features at ₹499/month. No credit card required to start.",
    url: "https://whisprbill.com/pricing",
    images: [{ url: "/og-pricing.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://whisprbill.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      {/* FAQ Schema for Pricing Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is WhisprBill really free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Our Free plan is completely free forever with no hidden charges. You get unlimited customers, basic invoicing, and GST compliance at no cost."
                }
              },
              {
                "@type": "Question",
                "name": "Can I upgrade or downgrade my plan anytime?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! You can upgrade, downgrade, or cancel your subscription at any time with no penalties or long-term contracts."
                }
              },
              {
                "@type": "Question",
                "name": "What payment methods do you accept?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We accept all major credit/debit cards, UPI, net banking, and digital wallets. All payments are processed securely."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer discounts for annual billing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Save 20% when you choose annual billing. Contact our sales team for custom enterprise pricing."
                }
              }
            ]
          })
        }}
      />

      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Use your existing Pricing component - UNCHANGED */}
        <Pricing />

        {/* Additional Value Props - MATCHING PRICING COMPONENT TYPOGRAPHY */}
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Header matches Pricing component style */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-primary font-bold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
                Why Choose Us
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary leading-tight px-4 sm:px-0">
                Why Choose WhisprBill?
              </h3>
            </div>

            {/* Grid - Responsive like Pricing cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: "🚀",
                  title: "Start in 5 Minutes",
                  description: "No lengthy setup. Sign up, import data (optional), and start invoicing immediately."
                },
                {
                  icon: "💳",
                  title: "No Credit Card Required",
                  description: "Try our Free plan forever. Upgrade when you're ready—no upfront payment needed."
                },
                {
                  icon: "🔒",
                  title: "Secure & Compliant",
                  description: "Bank-grade encryption, automated GST compliance, and daily backups included in all plans."
                },
                {
                  icon: "📞",
                  title: "24/7 Support",
                  description: "Get help anytime via chat, email, or phone. Free onboarding assistance included."
                },
                {
                  icon: "📊",
                  title: "No Hidden Fees",
                  description: "What you see is what you pay. No surprise charges, no per-user fees, no transaction limits."
                },
                {
                  icon: "🔄",
                  title: "Cancel Anytime",
                  description: "No long-term contracts. Downgrade to Free plan or cancel subscription with one click."
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{benefit.icon}</div>
                  <h4 className="text-xl sm:text-2xl font-bold text-secondary mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-accent/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - MATCHING TYPOGRAPHY */}
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {/* Header matches Pricing style */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <h2 className="text-primary font-bold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
                Common Questions
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary leading-tight px-4 sm:px-0">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  q: "Is WhisprBill really free?",
                  a: "Yes! Our Free plan is completely free forever with no hidden charges. You get unlimited customers, basic invoicing, and GST compliance at no cost."
                },
                {
                  q: "Can I upgrade or downgrade my plan anytime?",
                  a: "Absolutely! You can upgrade, downgrade, or cancel your subscription at any time with no penalties or long-term contracts."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit/debit cards, UPI, net banking, and digital wallets. All payments are processed securely."
                },
                {
                  q: "Do you offer discounts for annual billing?",
                  a: "Yes! Save 20% when you choose annual billing. Contact our sales team for custom enterprise pricing."
                },
                {
                  q: "What happens if I exceed my plan limits?",
                  a: "You'll receive a notification and can either upgrade your plan or wait until the next billing cycle. No overage charges."
                },
                {
                  q: "Can I try Pro features before upgrading?",
                  a: "Yes! Start a 14-day free trial of any paid plan—no credit card required. Cancel anytime during the trial period."
                }
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl p-6 shadow-lg border border-gray-100 group"
                >
                  <summary className="text-base sm:text-lg font-bold text-secondary cursor-pointer list-none flex justify-between items-center">
                    <span>{faq.q}</span>
                    <span className="text-primary group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-sm sm:text-base text-accent/80 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - MATCHING HERO STYLE */}
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-blue-100 via-purple-100 to-transparent relative overflow-hidden">
          {/* Matching background elements from Hero */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] lg:w-[1000px] h-[400px] sm:h-[500px] lg:h-[600px] bg-blue-200/40 rounded-full blur-3xl animate-float" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-4 sm:mb-6 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-accent/80 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
              Join 5,000+ businesses transforming their invoicing workflow
            </p>
            
            {/* Buttons matching Hero exactly */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <Link
                href="/app/signup"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white text-base sm:text-lg font-bold rounded-xl shadow-lg hover:bg-blue-600 transition-all transform hover:-translate-y-1"
              >
                Start Free Trial
              </Link>
              <Link
                href="/features"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-text border-2 border-gray-200 text-base sm:text-lg font-bold rounded-xl hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                Explore All Features
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
