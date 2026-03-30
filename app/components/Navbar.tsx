"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navLinkClass = isHome
    ? (isScrolled ? "text-accent/80 hover:text-primary" : "text-blue-100/90 hover:text-white")
    : "text-accent/80 hover:text-primary";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`${isHome ? "fixed" : "sticky"} top-0 w-full px-4 py-4 sm:px-8 sm:py-6 z-50 transition-all duration-300 ${
        isHome
          ? (isScrolled
              ? "bg-white/10 backdrop-blur-md border-b border-white/20"
              : "bg-transparent border-b border-transparent")
          : "bg-white/90 backdrop-blur-md border-b border-gray-200/60"
      }`}
    >

      <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
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
          <span className={`font-bold text-xl sm:text-2xl tracking-tight ${isHome && !isScrolled ? "text-white" : "text-secondary"}`}>
            Whispr<span className="text-primary">Bill</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link
            href="/features"
            className={`font-medium transition-colors text-sm ${
              pathname?.startsWith('/features')
                ? 'text-primary'
                : navLinkClass
            }`}
          >
            Features
          </Link>
          <Link
            href="/how-it-works"
            className={`font-medium transition-colors text-sm ${
              pathname === '/how-it-works'
                ? 'text-primary'
                : navLinkClass
            }`}
          >
            How It Works
          </Link>
          <Link
            href="/pricing"
            className={`font-medium transition-colors text-sm ${
              pathname === '/pricing'
                ? 'text-primary'
                : navLinkClass
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/testimonials"
            className={`font-medium transition-colors text-sm ${
              pathname === '/testimonials'
                ? 'text-primary'
                : navLinkClass
            }`}
          >
            Testimonials
          </Link>
          <Link
            href="/security"
            className={`font-medium transition-colors text-sm ${
              pathname === '/security'
                ? 'text-primary'
                : navLinkClass
            }`}
          >
            Security
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="https://app.whisprbill.com/login"
            className={`relative group px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300
              ${isScrolled
                ? "bg-white/60 backdrop-blur-sm border border-gray-200/70 hover:bg-white hover:border-primary/30 text-secondary hover:text-primary"
                : isHome
                  ? "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/35 text-white hover:text-white"
                  : "bg-white border border-gray-200/70 hover:bg-gray-50 hover:border-primary/30 text-secondary hover:text-primary"}
              overflow-hidden`}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              <span>Log in</span>
              <svg
                className="w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>

          <Link
            href="https://app.whisprbill.com/signup"
            className="relative group px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300
              bg-gradient-to-r from-primary to-blue-600
              text-white shadow-lg shadow-primary/30 
              hover:shadow-xl hover:shadow-primary/40
              hover:scale-[1.02] active:scale-[0.98]
              overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              <span>Sign up free</span>
              <svg
                className="w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Mobile: Auth + Hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Mobile Sign Up Button */}
          <Link
            href="https://app.whisprbill.com/signup"
            className="relative group px-4 py-2 rounded-lg font-bold text-xs sm:text-sm transition-all duration-300
              bg-gradient-to-r from-primary to-blue-600
              text-white shadow-md shadow-primary/30
              active:scale-95
              overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            <span className="relative">Sign up</span>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 transition-colors ${isHome && !isScrolled ? "text-white hover:text-blue-100" : "text-secondary hover:text-primary"}`}
            aria-label="Toggle menu"
          >
            {!isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
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
            <Link
              href="/features"
              className={`text-left font-medium transition-colors py-2 px-3 rounded-lg ${
                pathname?.startsWith('/features')
                  ? 'text-primary bg-primary/5'
                  : 'text-accent/80 hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className={`text-left font-medium transition-colors py-2 px-3 rounded-lg ${
                pathname === '/how-it-works'
                  ? 'text-primary bg-primary/5'
                  : 'text-accent/80 hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className={`text-left font-medium transition-colors py-2 px-3 rounded-lg ${
                pathname === '/pricing'
                  ? 'text-primary bg-primary/5'
                  : 'text-accent/80 hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/testimonials"
              className={`text-left font-medium transition-colors py-2 px-3 rounded-lg ${
                pathname === '/testimonials'
                  ? 'text-primary bg-primary/5'
                  : 'text-accent/80 hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/security"
              className={`text-left font-medium transition-colors py-2 px-3 rounded-lg ${
                pathname === '/security'
                  ? 'text-primary bg-primary/5'
                  : 'text-accent/80 hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Security
            </Link>

            {/* Divider */}
            <div className="border-t border-gray-200 my-2"></div>

            {/* Mobile Login Link */}
            <Link
              href="https://app.whisprbill.com/login"
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
