import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Security & Privacy | WhisprBill Invoice Software India",
  description:
    "WhisprBill protects your invoice data with Supabase + AWS infrastructure, PII masking before AI processing, secure auth via Supabase and Google OAuth, and Razorpay-verified payments.",
  keywords: [
    "secure invoice generator India",
    "GST billing software security",
    "invoice data privacy India",
    "billing software with encryption",
    "privacy first AI billing assistant",
    "secure GST invoice app",
    "role based access billing software",
    "business data protection invoicing",
    "Indian IT Act compliant invoicing",
    "audit trail invoice software",
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

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "WhisprBill Security & Privacy",
  description:
    "How WhisprBill protects invoice data using AWS Mumbai infrastructure, Supabase auth, PII masking, and secure payment verification.",
  provider: {
    "@type": "Organization",
    name: "WhisprBill",
    description: "AI-powered invoicing with privacy-first architecture",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does WhisprBill send my business data to AI models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Before any request reaches the AI layer, real customer names, GSTINs, and amounts are replaced with placeholders. The AI only sees anonymised intent — your actual business data never leaves our database.",
      },
    },
    {
      "@type": "Question",
      name: "How does WhisprBill prevent AI hallucinations in invoices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GST rates, totals, and tax breakdowns are computed by deterministic rule-based algorithms on our backend — not by generative AI. The AI only parses your intent; all maths runs on verified, predictable logic.",
      },
    },
    {
      "@type": "Question",
      name: "Where is my data stored?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All data is stored on AWS ap-south-1 (Mumbai), keeping your business data within Indian jurisdiction.",
      },
    },
    {
      "@type": "Question",
      name: "How are payments secured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Payments are processed entirely by Razorpay. WhisprBill verifies every payment webhook using cryptographic signature verification via Node.js — we never store raw card or payment details.",
      },
    },
  ],
};

export default function SecurityLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
