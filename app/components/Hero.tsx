// app/components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const scrollToDemo = () => {
    document.getElementById("demo-form")?.scrollIntoView({ 
      behavior: "smooth" 
    });
  };

  return (
    <section className="relative pt-8 sm:pt-12 pb-8 sm:pb-12 lg:pt-16 lg:pb-20 overflow-hidden bg-white">
      {/* Enhanced Background Gradient Mesh - Extended upward to blend with Navbar */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top gradient - Extended higher to reach Navbar */}
        <div className="absolute -top-32 left-0 right-0 h-[900px] bg-gradient-to-br from-blue-100 via-purple-100 to-transparent animate-pulse" />
        
        {/* Radial gradient - Center glow with slow float - Responsive sizing */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] lg:w-[1000px] h-[400px] sm:h-[500px] lg:h-[600px] bg-blue-200/40 rounded-full blur-3xl animate-float" />
        
        {/* Accent blobs - Decorative colored circles with animations - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-40 right-10 lg:right-20 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="hidden sm:block absolute top-60 left-5 lg:left-10 w-56 sm:w-72 lg:w-80 h-56 sm:h-72 lg:h-80 bg-purple-300/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Headline - Optimized sizes */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-text tracking-tight mb-4 sm:mb-6 leading-tight">
          WhisprBill: Invoice with a Chat. <br className="hidden sm:block" />
          <span className="text-secondary">AI-Powered. </span>
          <span className="text-primary">GST-Ready.</span>
        </h1>

        {/* Subheadline - Optimized sizes */}
        <p className="text-base sm:text-lg md:text-xl text-accent/80 mb-4 sm:mb-5 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
          AI-Powered extensions to simplify business invoicing. Create, manage,
          and track invoices with simple conversation.
        </p>

        {/* NEW: Invoice Types Subtext - Responsive */}
        <div className="mb-8 sm:mb-10 px-4 sm:px-0">
          <p className="text-xs sm:text-sm text-accent/60 mb-2 font-medium">
            Create any invoice type:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-primary text-xs sm:text-sm font-semibold rounded-full border border-blue-100">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Tax Invoice
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-600 text-xs sm:text-sm font-semibold rounded-full border border-purple-100">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Bill of Supply
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-600 text-xs sm:text-sm font-semibold rounded-full border border-green-100">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Quotation
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-600 text-xs sm:text-sm font-semibold rounded-full border border-orange-100">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Purchase Order
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-500 text-xs sm:text-sm font-medium rounded-full border border-gray-200">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
              </svg>
              More coming soon
            </span>
          </div>
        </div>

        {/* CTA Buttons - Responsive sizing */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0">
          <Link
            href="/app/signup"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white text-base sm:text-lg font-bold rounded-xl shadow-lg hover:bg-blue-600 transition-all transform hover:-translate-y-1"
          >
            Start Free Trial
          </Link>
          <button 
            onClick={scrollToDemo}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-text border-2 border-gray-200 text-base sm:text-lg font-bold rounded-xl hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            Request Free Demo
          </button>
        </div>
      </div>

      {/* Hero Image / Mockup Area - Responsive container */}
      <div className="relative mx-auto max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] xl:max-w-[90rem] px-2 sm:px-4 mt-2 z-10">
        
        {/* Decorative background glow behind image - Enhanced with animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 blur-3xl rounded-[50px] -z-10 animate-pulse-slow"></div>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border border-gray-200 overflow-hidden p-1.5 sm:p-2 md:p-3 lg:p-4">
          {/* ACTUAL IMAGE IMPLEMENTATION */}
          <div className="relative rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50/30 border border-gray-100">
            <Image
              src="/preview-screenshot-cropped.png"
              alt="WhisprBill Dashboard Interface"
              width={1600}
              height={900}
              priority
              quality={100}
              className="w-full h-auto object-cover"
            />

            {/* Optional: Overlay Chat Bubble - Responsive sizing and positioning */}
            <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-12 lg:left-12 max-w-[160px] sm:max-w-[200px] md:max-w-xs lg:max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="bg-white/95 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 border border-gray-100">
                <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center text-[8px] sm:text-[10px] text-green-700 font-bold">
                    AI
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-500">
                    Whispr Assistant
                  </span>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-800 font-medium leading-snug">
                  "I've created the invoice for Client X. Ready to send?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
