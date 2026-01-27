// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full py-4 sm:py-6 px-4 sm:px-8 bg-white relative z-50">
      {/* Matching gradient background - extends from Hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-br from-blue-100 via-purple-100 to-transparent animate-pulse" />
        <div className="absolute top-10 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-0 left-10 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
        {/* Logo + Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 group"
        >
          {/* Logo Image */}
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/icon.svg"
              alt="WhisprBill Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Brand Text */}
          <span className="font-bold text-xl sm:text-2xl tracking-tight text-text">
            Whispr<span className="text-primary">Bill</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <button
            onClick={() => scrollToSection("features")}
            className="text-accent/80 font-medium hover:text-primary transition-colors text-sm"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-accent/80 font-medium hover:text-primary transition-colors text-sm"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-accent/80 font-medium hover:text-primary transition-colors text-sm"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-accent/80 font-medium hover:text-primary transition-colors text-sm"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("demo-form")}
            className="text-accent/80 font-medium hover:text-primary transition-colors text-sm"
          >
            Contact
          </button>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Login Button */}
          <Link
            href="/app/login"
            className="relative group px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300
              bg-white/60 backdrop-blur-sm border border-gray-200/50
              hover:bg-white hover:border-primary/30 hover:shadow-lg
              text-text hover:text-primary
              overflow-hidden"
          >
            {/* Shine sweep */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <span className="relative flex items-center gap-2">
              <span>Log in</span>
              {/* Arrow icon - only visible on hover */}
              <svg className="w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>

          {/* Sign Up Button */}
          <Link
            href="/app/signup"
            className="relative group px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300
              bg-gradient-to-r from-primary to-blue-600
              text-white shadow-lg shadow-primary/30 
              hover:shadow-xl hover:shadow-primary/40
              hover:scale-[1.02] active:scale-[0.98]
              overflow-hidden"
          >
            {/* Shine sweep */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <span className="relative flex items-center gap-2">
              <span>Sign up free</span>
              {/* Arrow icon - only visible on hover */}
              <svg className="w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Mobile: Auth + Hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Mobile Sign Up Button */}
          <Link
            href="/app/signup"
            className="relative group px-4 py-2 rounded-lg font-bold text-xs sm:text-sm transition-all duration-300
              bg-gradient-to-r from-primary to-blue-600
              text-white shadow-md shadow-primary/30
              active:scale-95
              overflow-hidden"
          >
            {/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            <span className="relative">Sign up</span>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-text hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {!isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg animate-slide-down">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {/* Navigation Links */}
            <button
              onClick={() => scrollToSection("features")}
              className="text-left text-accent/80 font-medium hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-left text-accent/80 font-medium hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-left text-accent/80 font-medium hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-left text-accent/80 font-medium hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("demo-form")}
              className="text-left text-accent/80 font-medium hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
            >
              Contact
            </button>

            {/* Divider */}
            <div className="border-t border-gray-200 my-2"></div>

            {/* Mobile Login Link */}
            <Link
              href="/app/login"
              className="text-left font-semibold transition-all py-2.5 px-3 rounded-lg
                text-text hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log in
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
