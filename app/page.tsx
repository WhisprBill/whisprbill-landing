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

export const metadata: Metadata = {
  title: "WhisprBill - AI-Powered Invoicing & Billing Software for Indian Businesses",
  description: "Create professional invoices in 10 seconds using AI. GST-compliant invoicing, inventory management, and automated billing. Trusted by 5,000+ businesses. Start free.",
  keywords: [
    "AI invoice generator India",
    "GST billing software",
    "invoicing software for small business",
    "automated invoice creation",
    "conversational invoicing",
    "WhisprBill"
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://whisprbill.com",
    title: "WhisprBill - Create Invoices by Chatting with AI",
    description: "Join 5,000+ businesses saving 15 hours/week with AI-powered invoicing. GST-compliant, unlimited customers, professional templates.",
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
    title: "WhisprBill - AI-Powered Invoicing Software",
    description: "Create invoices conversationally. Save 80% of billing time.",
    images: ["/twitter-home.png"],
  },
  alternates: {
    canonical: "https://whisprbill.com",
  },
};

export default function Home() {
  return (
    <>
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
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Trusted by 5,000+ Businesses
            </h2>
            
            {/* Quick testimonials grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  quote: "WhisprBill reduced our invoicing time from 3 hours to 15 minutes daily. The AI is a game-changer!",
                  author: "Rajesh Kumar",
                  role: "Owner, Kumar Electronics"
                },
                {
                  quote: "GST compliance was our biggest headache. WhisprBill handles everything automatically—zero errors!",
                  author: "Priya Sharma",
                  role: "Accountant, Sharma & Co."
                },
                {
                  quote: "Managing 6 stores from one dashboard is incredible. Best investment we made this year.",
                  author: "Amit Patel",
                  role: "CEO, Patel Retail Group"
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-accent/80 mb-4 italic text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-secondary text-sm">{testimonial.author}</p>
                    <p className="text-xs text-accent/60">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CHANGED: Use Link instead of <a> */}
            <div className="text-center">
              <Link 
                href="/testimonials" 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-blue-700 transition-colors"
              >
                Read All Success Stories
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>
        
        <CTASection />
        <DemoForm />
        {/* Final CTA */}

        
        <Footer />
      </main>
      <ChatWidget />
    </>
  );
}
