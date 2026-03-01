import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrivacySecurity from "../components/PrivacySecurity";

export const metadata: Metadata = {
  title: "Invoice Data Security & Privacy for Indian Businesses | WhisprBill",
  description:
    "Explore WhisprBill security controls for GST billing software in India, including encryption, access controls, audit logs, and privacy-first AI invoice processing.",
  keywords: [
    "secure invoice generator India",
    "GST billing software security",
    "invoice data privacy India",
    "billing software with encryption",
    "SOC 2 invoicing platform",
    "GDPR compliant billing software",
    "Indian IT Act compliant invoicing",
    "audit trail invoice software",
    "privacy first AI billing assistant",
    "secure GST invoice app",
    "role based access billing software",
    "business data protection for invoicing"
  ],
  openGraph: {
    title: "WhisprBill Security - Private, Encrypted, Audit-Ready Invoicing",
    description:
      "See how WhisprBill protects invoice data with layered security and privacy controls designed for Indian businesses.",
    url: "https://whisprbill.com/security",
    images: [
      {
        url: "/og-security.png",
        width: 1200,
        height: 630,
        alt: "WhisprBill Security and Privacy",
      },
    ],
  },
  alternates: {
    canonical: "https://whisprbill.com/security",
  },
};

export default function SecurityPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "WhisprBill Security & Privacy",
            "description": "Enterprise-grade security and privacy protection for AI-powered invoicing software",
            "provider": {
              "@type": "Organization",
              "name": "WhisprBill",
              "description": "AI-powered invoicing with privacy-first architecture"
            }
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
                "name": "Does WhisprBill train AI models on my business data?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, never. WhisprBill uses AI only for intent parsing (understanding your requests). Customer names, amounts, GSTINs, and product details never leave your secure database and are never used for AI training. Your business intelligence remains confidential forever."
                }
              },
              {
                "@type": "Question",
                "name": "How does WhisprBill prevent AI hallucinations in invoices?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "GST rates, totals, and tax breakdowns are computed by rule-based algorithms—not generative AI. The AI only understands your intent; all calculations run on deterministic backend systems. This ensures invoices are always mathematically accurate with zero hallucinations."
                }
              },
              {
                "@type": "Question",
                "name": "Is WhisprBill compliant with data protection regulations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. WhisprBill infrastructure is SOC 2 compliant with 256-bit encryption. Every invoice generation is logged for audit trails. We comply with GDPR, Indian IT Act, and GST regulations. You retain 100% ownership of your data with export rights anytime."
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Bank-Level Security
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-secondary mb-6 leading-tight">
              AI-Powered. <span className="text-primary">Privacy-First.</span>
            </h1>
            
            <p className="text-xl text-accent/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              We believe AI should empower your business—not compromise your privacy. Here's exactly how we keep your sensitive financial data secure while delivering intelligent automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg text-center"
              >
                Start Secure Trial
              </Link>
              <a
                href="#security-details"
                className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-colors border-2 border-primary text-center"
              >
                See Security Details ↓
              </a>
            </div>
          </div>
        </section>

        {/* Main Interactive Component */}
        <div id="security-details">
          <PrivacySecurity />
        </div>

        {/* Detailed Security Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              Comprehensive Security Architecture
            </h2>
            <p className="text-center text-accent/70 mb-16 max-w-2xl mx-auto">
              Multiple layers of protection for your business-critical data
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🔐",
                  title: "End-to-End Encryption",
                  description: "All data transmitted between your device and our servers uses 256-bit AES encryption—the same standard used by banks and government agencies.",
                  details: ["TLS 1.3 in transit", "AES-256 at rest", "Encrypted backups"]
                },
                {
                  icon: "🏢",
                  title: "Data Sovereignty",
                  description: "Your data is stored in secure Indian data centers, ensuring compliance with local regulations and complete control over your information.",
                  details: ["India-based servers", "GDPR compliant", "Right to erasure"]
                },
                {
                  icon: "👤",
                  title: "Access Control",
                  description: "Role-based permissions ensure team members only see data relevant to their role. Multi-factor authentication available for added security.",
                  details: ["2FA support", "Role-based access", "Session management"]
                },
                {
                  icon: "📝",
                  title: "Audit Trails",
                  description: "Every action is logged with timestamps and user IDs. Perfect for compliance audits, dispute resolution, and security monitoring.",
                  details: ["Complete activity logs", "Export for audits", "Tamper-proof records"]
                },
                {
                  icon: "🔄",
                  title: "Automatic Backups",
                  description: "Your data is backed up every 6 hours to geographically distributed servers. Recovery point objective (RPO) of under 6 hours.",
                  details: ["4x daily backups", "30-day retention", "One-click restore"]
                },
                {
                  icon: "🛡️",
                  title: "DDoS Protection",
                  description: "Enterprise-grade DDoS mitigation ensures your invoicing continues uninterrupted even during targeted attacks.",
                  details: ["99.9% uptime SLA", "Real-time monitoring", "Auto-scaling"]
                },
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                  <p className="text-accent/80 text-sm mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-accent/70">
                        <span className="text-green-500">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Commitments */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              Our Privacy Commitments
            </h2>
            <p className="text-center text-accent/70 mb-12 max-w-2xl mx-auto">
              Clear promises about how we handle your data
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "We Never Sell Your Data",
                  description: "Your customer lists, invoices, and financial information will never be sold, shared, or monetized. Period."
                },
                {
                  title: "No AI Training on Your Business Data",
                  description: "Unlike many AI tools, we don't use your invoices to train our models. Your competitive intelligence stays confidential."
                },
                {
                  title: "You Own Your Data Completely",
                  description: "Export all your data anytime in standard formats. Cancel your account and take everything with you—no lock-in."
                },
                {
                  title: "Transparent Data Processing",
                  description: "We clearly document what data we collect, why we need it, and exactly how it's processed. No hidden surprises."
                },
                {
                  title: "Right to Deletion",
                  description: "Request complete deletion of your account and data. We'll permanently remove everything within 30 days."
                },
              ].map((commitment, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary mb-2">{commitment.title}</h3>
                    <p className="text-accent/80 text-sm leading-relaxed">{commitment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Certifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Compliance & Certifications
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  cert: "SOC 2 Type II",
                  description: "Audited for security, availability, and confidentiality"
                },
                {
                  cert: "GDPR Compliant",
                  description: "Full compliance with EU data protection regulations"
                },
                {
                  cert: "ISO 27001",
                  description: "Information security management certified"
                },
                {
                  cert: "Indian IT Act",
                  description: "Compliant with Section 43A data protection"
                },
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center border border-gray-100">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-secondary mb-2">{item.cert}</h3>
                  <p className="text-xs text-accent/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Security & Privacy FAQ
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Does WhisprBill train AI models on my business data?",
                  a: "No, never. WhisprBill uses AI only for intent parsing (understanding your requests). Customer names, amounts, GSTINs, and product details never leave your secure database and are never used for AI training. Your business intelligence remains confidential forever."
                },
                {
                  q: "How does WhisprBill prevent AI hallucinations in invoices?",
                  a: "GST rates, totals, and tax breakdowns are computed by rule-based algorithms—not generative AI. The AI only understands your intent; all calculations run on deterministic backend systems. This ensures invoices are always mathematically accurate with zero hallucinations."
                },
                {
                  q: "Is WhisprBill compliant with data protection regulations?",
                  a: "Yes. WhisprBill infrastructure is SOC 2 compliant with 256-bit encryption. Every invoice generation is logged for audit trails. We comply with GDPR, Indian IT Act, and GST regulations. You retain 100% ownership of your data with export rights anytime."
                },
                {
                  q: "Where is my data stored?",
                  a: "All data is stored in secure data centers located in India, ensuring compliance with local data residency requirements. We use geographically distributed backups for disaster recovery while keeping data within Indian jurisdiction."
                },
                {
                  q: "Can I export all my data?",
                  a: "Absolutely! Export your complete database anytime in CSV or JSON format. This includes customers, products, invoices, and all historical records. No restrictions, no delays—you own your data."
                },
                {
                  q: "What happens to my data if I cancel my subscription?",
                  a: "Your data remains accessible for 90 days after cancellation for export purposes. After that, if you don't reactivate or export, we permanently delete all your information per your request. You're always in control."
                },
                {
                  q: "How do you handle security incidents?",
                  a: "We have a 24/7 security monitoring team. In the unlikely event of a breach, we notify affected users within 72 hours per GDPR requirements and provide detailed incident reports and remediation steps."
                },
                {
                  q: "Is two-factor authentication (2FA) available?",
                  a: "Yes! We strongly recommend enabling 2FA for all accounts. Supports authenticator apps (Google Authenticator, Authy) and SMS-based verification for added account security."
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

        {/* Trust Badges */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-green-100">
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-secondary mb-3">
                  Trusted by 5,000+ Businesses
                </h2>
                <p className="text-accent/70">
                  Join companies that trust WhisprBill with their most sensitive financial data
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
                  <div className="text-xs text-accent/60">Uptime SLA</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">256-bit</div>
                  <div className="text-xs text-accent/60">Encryption</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">4x</div>
                  <div className="text-xs text-accent/60">Daily Backups</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-xs text-accent/60">Security Monitoring</div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-accent/60 mb-4">
                  Questions about our security practices?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Contact our security team
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Security You Can Trust. AI You Can Control.
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Experience intelligent invoicing without compromising on privacy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/pricing"
                className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start Secure Free Trial
              </Link>
              <Link
                href="/features"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                Explore Features
              </Link>
            </div>
            <p className="text-sm opacity-75">
              ✓ No credit card  ✓ Bank-level encryption  ✓ Your data stays yours
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
