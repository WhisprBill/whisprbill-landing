// app/components/PrivacySecurity.tsx
"use client";

export default function PrivacySecurity() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Enterprise-Grade Security
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary mb-4 sm:mb-6">
            AI-Powered. <span className="text-primary">Privacy-First.</span>
          </h2>
          
          <p className="text-base sm:text-lg text-accent/70 leading-relaxed">
            We believe AI should empower your business—not compromise your privacy. Here's how we keep your sensitive data safe while delivering intelligent automation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          
          {/* Left: How Our AI Works */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-3xl mb-6">
              🤖
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
              How Our AI Actually Works
            </h3>
            
            <p className="text-accent/80 leading-relaxed mb-6">
              Unlike traditional AI systems that process your sensitive data directly, WhisprBill uses a <strong>privacy-by-design architecture</strong> that separates conversation from computation.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Intent Parsing Only</h4>
                  <p className="text-sm text-accent/70">
                    The AI reads your natural language request ("Create invoice for ₹50,000") and understands <strong>intent</strong>—not your actual business data.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Zero Data Exposure</h4>
                  <p className="text-sm text-accent/70">
                    Customer names, amounts, GSTINs, and product details <strong>never leave your secure database</strong>. The AI never sees or stores this information.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Deterministic Backend</h4>
                  <p className="text-sm text-accent/70">
                    All calculations, GST rates, validations, and business logic run on <strong>our secure backend</strong>—not through AI. Math is math, not magic.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Conversation Layer</h4>
                  <p className="text-sm text-accent/70">
                    Think of AI as a smart translator between you and the system—it makes the interface friendly, not risky.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: What This Means for You */}
          <div className="space-y-6">
            
            {/* Security Guarantee */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-green-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-2xl shrink-0">
                  🔒
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    Your Data Stays Yours
                  </h3>
                  <p className="text-sm text-accent/70 leading-relaxed">
                    We don't train AI models on your invoices, customer lists, or financial records. Your business intelligence remains confidential—forever.
                  </p>
                </div>
              </div>
            </div>

            {/* No Hallucinations */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-2xl shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    No AI "Hallucinations" in Calculations
                  </h3>
                  <p className="text-sm text-accent/70 leading-relaxed">
                    GST rates, totals, and tax breakdowns are computed by <strong>rule-based algorithms</strong>—not generative AI. Your invoices are always mathematically accurate.
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance Ready */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 border border-purple-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-2xl shrink-0">
                  📜
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    Audit-Ready & Compliant
                  </h3>
                  <p className="text-sm text-accent/70 leading-relaxed">
                    Every invoice generation is logged with timestamps and user actions—perfect for GST audits, financial reviews, and regulatory compliance.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Stats/Trust Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm border border-gray-100">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">256-bit</div>
            <div className="text-xs sm:text-sm text-accent/60">Encryption</div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm border border-gray-100">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-xs sm:text-sm text-accent/60">Data Ownership</div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm border border-gray-100">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">Zero</div>
            <div className="text-xs sm:text-sm text-accent/60">AI Training on Your Data</div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm border border-gray-100">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">SOC 2</div>
            <div className="text-xs sm:text-sm text-accent/60">Compliant Infrastructure</div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-accent/60 mb-4">
            Questions about our security? Read our detailed <a href="#" className="text-primary font-semibold hover:underline">Security Whitepaper</a>
          </p>
        </div>

      </div>
    </section>
  );
}
