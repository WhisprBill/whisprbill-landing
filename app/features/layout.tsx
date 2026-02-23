// app/features/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features - AI Invoicing & Business Management Tools | WhisprBill",
  description: "Everything you need to run invoicing like a Fortune 500 company. AI-powered invoice creation, professional templates, GST compliance, multi-company management, and advanced analytics.",
  keywords: [
    "invoice software features",
    "AI invoicing tools India",
    "GST compliance software",
    "multi-company accounting",
    "invoice automation",
    "business intelligence dashboard"
  ],
  openGraph: {
    title: "WhisprBill Features - Complete Invoicing Solution",
    description: "AI invoicing, professional templates, GST compliance, unlimited customers, multi-company support. All the tools modern businesses need.",
    url: "https://whisprbill.com/features",
    images: [{ url: "/og-features.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://whisprbill.com/features",
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
