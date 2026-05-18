import FAQItem from "./FAQItem";

const homeFaqs = [
  {
    q: "Can I create invoices using voice as well as text?",
    a: "Yes. You can type or speak your invoice details, and WhisprBill converts that into a structured invoice draft you can review before sending.",
  },
  {
    q: "How long does it take to create an invoice?",
    a: "Most invoices are ready in under 30 seconds. Describe what you need, review the draft, and export or share.",
  },
  {
    q: "Can I edit the invoice after AI generates it?",
    a: "Absolutely. You can refine it with follow-up prompts or switch to manual editing for full field-level control.",
  },
  {
    q: "Will my business data be sent directly to AI models?",
    a: "No. Sensitive customer and invoice details are masked before AI processing. Your actual business records stay protected in your workspace.",
  },
  {
    q: "Is there a free plan while I test the app?",
    a: "Yes. WhisprBill has a free plan so you can get started without a credit card and upgrade only when needed.",
  },
];

export default function HomeFAQ() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.16),transparent_42%),radial-gradient(circle_at_85%_16%,rgba(16,185,129,0.12),transparent_40%),linear-gradient(to_bottom,#f8fbff,#fffefc_55%,#f7fbff)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center lg:mb-12">
          <p className="mb-3 inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            FAQ
          </p>
          <h2 className="text-3xl font-extrabold leading-tight text-secondary sm:text-4xl lg:text-5xl">
            Common questions before you start
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-accent/70 sm:text-base">
            Quick answers about AI invoicing, voice input, security, and getting started.
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4">
          {homeFaqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
