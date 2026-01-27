// app/components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-secondary text-white pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12 lg:mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Logo + Brand */}
            <Link href="/" className="flex items-center gap-2.5 group inline-flex">
              {/* Logo Image */}
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/icon.svg"
                  alt="WhisprBill Logo"
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Brand Text */}
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Whispr<span className="text-primary">Bill</span>
              </h2>
            </Link>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs">
              AI-powered invoicing and inventory management for modern businesses. 
              Simplify your operations today.
            </p>
            <div className="flex gap-3 sm:gap-4">
               {/* Social Icons - Professional */}
               <a 
                 href="https://twitter.com/whisprbill" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 group"
                 aria-label="Twitter"
               >
                 <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                 </svg>
               </a>
               <a 
                 href="https://linkedin.com/company/whisprbill" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 group"
                 aria-label="LinkedIn"
               >
                 <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                 </svg>
               </a>
               <a 
                 href="https://facebook.com/whisprbill" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 group"
                 aria-label="Facebook"
               >
                 <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                 </svg>
               </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Product</h3>
            <ul className="space-y-3 sm:space-y-4 text-gray-400 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection("features")}
                  className="hover:text-primary transition-colors text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("pricing")}
                  className="hover:text-primary transition-colors text-left"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("how-it-works")}
                  className="hover:text-primary transition-colors text-left"
                >
                  How It Works
                </button>
              </li>
              <li><Link href="#" className="hover:text-primary transition-colors">API</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Resources</h3>
            <ul className="space-y-3 sm:space-y-4 text-gray-400 text-xs sm:text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">GST Guide</Link></li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Contact</h3>
            <ul className="space-y-3 sm:space-y-4 text-gray-400 text-xs sm:text-sm">
              <li>
                <a href="mailto:support@whisprbill.com" className="hover:text-primary transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  support@whisprbill.com
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="hover:text-primary transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  +91 98765 43210
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("demo-form")}
                  className="hover:text-primary transition-colors flex items-center gap-2 text-left"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  Request Demo
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar - Responsive */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-gray-500">
          <p className="text-center sm:text-left">© 2026 WhisprBill. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
