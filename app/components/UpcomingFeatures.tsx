// app/components/UpcomingFeatures.tsx
"use client";

export default function UpcomingFeatures() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs sm:text-sm font-semibold mb-4">
            Coming Soon
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary mb-3 sm:mb-4">
            The roadmap we’re building next
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-accent/70">
            We ship fast, but we communicate even faster. Here’s what we’re actively working on for the next versions of WhisprBill.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          
          {/* WhatsApp Integration */}
          <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-green-50/60 to-white p-5 sm:p-6 lg:p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-green-500 flex items-center justify-center text-white text-2xl">
                💬
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-secondary">
                  WhatsApp-native invoicing
                </h3>
                <p className="text-[11px] sm:text-xs text-green-700 font-semibold uppercase tracking-wide">
                  In active development
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-accent/80 leading-relaxed mb-3">
              Create and share invoices directly from WhatsApp by chatting with WhisprBot—no need to open the app every time.
            </p>
            <p className="text-xs sm:text-sm text-accent/70 leading-relaxed">
              Multiple businesses have specifically asked for this workflow: 
              type “Invoice Raj Traders for yesterday’s order” in WhatsApp, let the bot prepare the invoice using your existing catalog and tax rules, and get a ready-to-share PDF in the same chat—plus an option to send it to your customer instantly.
            </p>
          </div>

          {/* Voice-first invoicing */}
          <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-blue-50/60 to-white p-5 sm:p-6 lg:p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-500 flex items-center justify-center text-white text-2xl">
                🎙️
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-secondary">
                  Voice-first invoice creation
                </h3>
                <p className="text-[11px] sm:text-xs text-blue-700 font-semibold uppercase tracking-wide">
                  On our near-term roadmap
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-accent/80 leading-relaxed mb-3">
              Speak your invoice instead of typing it. Say it once, let WhisprBill handle the structure, math, and compliance.
            </p>
            <p className="text-xs sm:text-sm text-accent/70 leading-relaxed">
              Imagine: “Create an invoice for Mehta Medicals for 12 strips of Crocin at ₹45 each with 12% GST, due in 7 days.”  
              The system will convert your voice into a structured request, run the same deterministic validations and GST rules used today, and present a ready-to-review invoice before you send it.
            </p>
          </div>

          {/* Future of Privacy & On-device Compute */}
          <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-slate-50/80 to-white p-5 sm:p-6 lg:p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-800 flex items-center justify-center text-white text-2xl">
                🛡️
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-secondary">
                  Next‑gen private AI engine
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-700 font-semibold uppercase tracking-wide">
                  Exploring & prototyping
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-accent/80 leading-relaxed mb-3">
              Today we use techniques like PII masking so sensitive details never reach the AI layer. Over time, we want to push privacy even further.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-accent/70 leading-relaxed">
              <li>
                <span className="font-semibold text-secondary">Own-model direction.</span> 
                Our long-term goal is to move towards models trained from scratch on infrastructure we control, so your data never leaves our environment even at the AI layer.
              </li>
              <li>
                <span className="font-semibold text-secondary">Stronger isolation.</span> 
                Combined with the current deterministic backend, this would give us end-to-end control over how every token of data is processed.
              </li>
              <li>
                <span className="font-semibold text-secondary">Local-first possibilities.</span> 
                We’re also exploring whether parts of this intelligence can eventually run on your own device for an extra layer of privacy—no promises yet, but it’s a direction we’re actively evaluating.
              </li>
            </ul>
          </div>
        </div>

        {/* Small disclaimer */}
        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-[11px] sm:text-xs text-accent/60 max-w-2xl mx-auto leading-relaxed">
            Roadmaps can change as we learn from customers. These features represent our current direction, not fixed launch dates—we’ll always prioritise stability, compliance, and privacy over rushing a release.
          </p>
        </div>
      </div>
    </section>
  );
}
