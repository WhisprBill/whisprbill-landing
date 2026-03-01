// app/features/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoice Software Features for Indian Businesses | AI, GST, Templates",
  description:
    "Explore WhisprBill features for Indian billing teams: AI invoice assistant, GST compliance, invoice templates, bulk import, analytics, multi-company support, and customer management.",
  keywords: [
    "invoice software features India",
    "AI billing assistant",
    "AI invoice automation",
    "GST compliance billing software",
    "invoice template software",
    "bulk invoice import",
    "customer billing management",
    "multi-company billing software",
    "billing analytics dashboard",
    "invoice workflow automation",
    "business invoicing tools",
    "WhisprBill features",
  ],
  openGraph: {
    title: "WhisprBill Features - AI and GST Billing Tools for India",
    description:
      "Compare powerful invoicing features including AI creation, templates, GST tools, analytics, and multi-company billing workflows.",
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
