import type { Metadata } from "next";
import Link from "next/link"; // ADD THIS
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesOverview from "./components/FeaturesOverview";
import Stats from "./components/Stats";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import Pricing from "./components/Pricing";
import HowItWorksInteractive from "./components/HowItWorksInteractive";
import Features from "./components/Features";
import DemoForm from "./components/DemoForm";
import ComingSoonModal from "./components/ComingSoonModal";

export const metadata: Metadata = {
  title: "Free Invoice Generator India | AI GST Billing Software for Small Business",
  description:
    "Use WhisprBill as your free invoice generator in India. Create GST invoices with AI, manage billing for small businesses, freelancers, and MSMEs, and send professional invoices faster.",
  keywords: [
    "free invoice generator India",
    "AI invoice generator India",
    "invoice maker India",
    "GST invoice generator",
    "GST billing software",
    "billing software for small business",
    "free billing software India",
    "online invoice generator",
    "MSME billing software",
    "freelancer invoice India",
    "GST invoice app",
    "invoicing software India",
    "WhisprBill"
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://whisprbill.com",
    title: "Free Invoice Generator India - AI GST Billing by WhisprBill",
    description:
      "Create GST-ready invoices in seconds with AI. Built for Indian freelancers, MSMEs, and small businesses.",
    siteName: "WhisprBill",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "WhisprBill AI Invoicing Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhisprBill - Free Invoice Generator India with AI",
    description:
      "AI invoice maker for India with GST billing support and faster invoice creation.",
    images: ["/twitter-home.png"],
  },
  alternates: {
    canonical: "https://whisprbill.com",
  },
};

export default function Home() {
  return (
    <>
      <ComingSoonModal />
      <main className="min-h-screen bg-background font-sans selection:bg-primary/20">
        <Navbar />
        <Hero />
        
        {/* NEW: Quick stats/social proof */}
        <Stats />

        <HowItWorksInteractive />
        
        {/* NEW: Features OVERVIEW (not full details) */}
       <Features />

        <Pricing />

        
      
        
        {/* Testimonials preview - ADDED CONTENT */}
      
        
        <CTASection />
        <DemoForm />
        {/* Final CTA */}

        
        <Footer />
      </main>
      <ChatWidget />
    </>
  );
}
