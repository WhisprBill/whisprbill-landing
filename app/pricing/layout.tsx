import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pricing - Free Invoice Generator & GST Billing Software | WhisprBill India",
  description:
    "WhisprBill pricing for AI-powered GST invoicing in India. Start free, upgrade when ready — built for freelancers, MSMEs, and small businesses.",
  keywords: [
    "free invoice generator India pricing",
    "GST billing software plans",
    "billing software pricing India",
    "invoice maker India plans",
    "invoicing software for small business India",
    "MSME billing software pricing",
    "freelancer invoice software pricing India",
    "online invoice generator subscription",
    "AI invoice generator India pricing",
    "GST invoice app pricing",
    "best billing software India cost",
    "affordable invoicing software India",
  ],
  openGraph: {
    title: "WhisprBill Pricing - Free and Pro Plans for GST Billing in India",
    description:
      "Start with a free invoice generator, then scale with AI-powered GST billing software plans built for Indian businesses.",
    url: "https://whisprbill.com/pricing",
    images: [{ url: "/og-pricing.png", width: 1200, height: 630, alt: "WhisprBill Pricing Plans" }],
  },
  alternates: {
    canonical: "https://whisprbill.com/pricing",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is WhisprBill really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our Free plan is free forever with no hidden charges — unlimited customers, basic invoicing, and GST compliance at no cost.",
      },
    },
    {
      "@type": "Question",
      name: "Can I upgrade or downgrade my plan anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can upgrade, downgrade, or cancel at any time with no penalties or long-term contracts.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept major credit/debit cards, UPI, net banking, and digital wallets. All payments are processed securely.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I exceed my plan limits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll receive a notification and can upgrade your plan. No surprise overage charges.",
      },
    },
  ],
};

export default function PricingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
