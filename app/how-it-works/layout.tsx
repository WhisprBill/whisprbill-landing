import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "How WhisprBill Works - AI Invoice Generator in 3 Steps for India",
  description:
    "Learn how to create GST-ready invoices in India in 3 simple steps with WhisprBill. Chat naturally, review instantly, and share professional invoices in seconds.",
  keywords: [
    "how to create GST invoice online",
    "AI invoice generator tutorial India",
    "invoice maker step by step",
    "how billing software works",
    "online invoice generator guide India",
    "GST invoice format walkthrough",
    "invoicing software tutorial for small business",
    "AI billing assistant demo",
    "invoice app onboarding India",
    "freelancer invoice workflow India",
    "MSME billing workflow",
    "WhisprBill how it works",
  ],
  openGraph: {
    title: "How WhisprBill Works - 3 Steps to Fast GST Invoicing",
    description:
      "See the complete flow from chat prompt to GST-ready invoice PDF, built for Indian small businesses and freelancers.",
    url: "https://whisprbill.com/how-it-works",
    images: [
      {
        url: "/og-how-it-works.png",
        width: 1200,
        height: 630,
        alt: "WhisprBill How It Works Process",
      },
    ],
  },
  alternates: {
    canonical: "https://whisprbill.com/how-it-works",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create Invoices with WhisprBill AI",
  description: "Create professional invoices in 3 simple steps using conversational AI",
  totalTime: "PT30S",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Chat Naturally",
      text: "Talk to your invoice assistant like a human. No forms, no dropdowns. Just type your request and our AI extracts details instantly.",
    //   image: "https://whisprbill.com/wbill-chatwithai.png",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Review & Refine",
      text: "AI generates a draft invoice instantly. Say 'Apply 10% off' or switch to edit mode for full control.",
    //   image: "https://whisprbill.com/wbill-dashboard.png",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Export & Share",
      text: "Generate a professional branded PDF in seconds. Share via WhatsApp, Email, or download directly.",
    //   image: "https://whisprbill.com/wbill-invoice-preview.png",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to create an invoice with WhisprBill?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most users create complete invoices in under 30 seconds. Simply describe what you need in natural language, the AI generates a draft, you review it, and export. No form-filling required.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need training to use WhisprBill?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No training needed. WhisprBill works like having a conversation. If you can send a text message, you can create invoices. The AI understands English and Hindi.",
      },
    },
    {
      "@type": "Question",
      name: "Can I edit invoices after AI generates them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Chat corrections like 'Change due date to 30 days' work instantly, or switch to manual edit mode for full field control.",
      },
    },
    {
      "@type": "Question",
      name: "What if I have complex invoice requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AI handles multi-product, tiered pricing, discounts, shipping charges, and custom fields. Just describe what you need.",
      },
    },
    {
      "@type": "Question",
      name: "How does the AI remember my customers and products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every invoice trains your workspace. Customer details, product catalogs, and pricing are stored securely and auto-filled in future invoices.",
      },
    },
    {
      "@type": "Question",
      name: "Can I create invoices on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The chat interface is built mobile-first. Full functionality on any device.",
      },
    },
  ],
};

export default function HowItWorksLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
