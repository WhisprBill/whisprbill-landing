// app/components/ComingSoonModal.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ComingSoonModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Show modal on page load
    setIsOpen(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with your API call
    // await fetch('/api/waitlist', { ... })

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSuccess(true);
    setEmail("");

    // Auto-close after success
    setTimeout(() => {
      setIsOpen(false);
      setIsSuccess(false);
    }, 2500);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsSuccess(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal - MUCH BIGGER */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 lg:p-8 pointer-events-none">
        <div
          className="relative bg-white w-full max-w-6xl h-[85vh] rounded-3xl shadow-2xl overflow-hidden pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Background gradient matching your app theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/30 to-white" />

          {/* Decorative blobs matching Hero section */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-3xl" />

          {/* Close Button - FIXED */}
          <button
            onClick={handleClose}
            type="button"
            className="absolute top-6 right-6 sm:top-8 sm:right-8 z-50 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-primary transition-all duration-300 group"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content - Centered with lots of space */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 sm:px-16 lg:px-24 text-center">
            {!isSuccess ? (
              <>
                {/* Logo */}
                <div className="mb-2">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mb-6 mx-auto animate-bounce-slow">
                    <Image
                      src="/icon.svg"
                      alt="WhisprBill Logo"
                      fill
                      className="object-contain drop-shadow-xl"
                    />
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text">
                    Whispr<span className="text-primary">Bill</span>
                  </h2>
                </div>

                {/* Coming Soon - Huge with gradient */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-8 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight" style={{ lineHeight: '1.5' }}>
  Coming Soon
</h1>

                {/* Description */}
                <p className="text-lg sm:text-xl lg:text-2xl text-accent/70 mb-16 max-w-3xl leading-relaxed">
                  AI-powered invoicing and inventory management for modern
                  businesses.
                  <br className="hidden sm:block" />
                  Be the first to know when we launch.
                </p>

                {/* Email Form - Bigger */}
                <form onSubmit={handleSubmit} className="w-full max-w-2xl">
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-6 py-4 sm:py-5 text-base sm:text-lg bg-white border-2 border-gray-200 rounded-xl text-text placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none shadow-sm"
                      required
                      disabled={isSubmitting}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-primary to-blue-600 text-white font-bold text-base sm:text-lg rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                        </span>
                      ) : (
                        "Notify Me"
                      )}
                    </button>
                  </div>

                  {/* Footer text */}
                  <p className="text-sm sm:text-base text-accent/50 italic">
                    Notify me when the app is launched
                  </p>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="animate-scale-in">
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg
                    className="w-12 h-12 sm:w-14 sm:h-14 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">
                  You're on the list! 🎉
                </h3>
                <p className="text-xl sm:text-2xl text-accent/70">
                  We'll notify you as soon as we launch.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
