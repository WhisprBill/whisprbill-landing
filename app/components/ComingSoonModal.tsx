// app/components/ComingSoonModal.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { submitWaitlistEmailOnly } from "../actions";

export default function ComingSoonModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Show modal on each page mount (fresh refresh/navigation to Home)
    setIsOpen(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData();
    formData.set("email", email);
    const result = await submitWaitlistEmailOnly(formData);

    if (result.success) {
      setIsSuccess(true);
      setEmail("");

      setTimeout(() => {
        setIsOpen(false);
        setIsSuccess(false);
      }, 2500);
    } else {
      setErrorMessage(result.message || "Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsSuccess(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />

      <div className="pointer-events-none fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div
          className="pointer-events-auto relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/70 to-background" />
          <div className="absolute -right-20 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />

          <button
            onClick={handleClose}
            type="button"
            className="group absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition-all duration-300 hover:bg-primary hover:text-white"
            aria-label="Close modal"
          >
            <svg
              className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90"
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

          <div className="relative z-10 px-6 py-10 text-center sm:px-10 sm:py-12">
            {!isSuccess ? (
              <>
                <div>
                  <div className="mx-auto mb-5 relative h-16 w-16 sm:h-20 sm:w-20">
                    <Image
                      src="/icon.svg"
                      alt="WhisprBill Logo"
                      fill
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-text sm:text-3xl">
                    Whispr<span className="text-primary">Bill</span>
                  </h2>
                </div>

                <h1
                  className="mt-3 mb-4 pb-1 bg-gradient-to-r from-secondary via-primary to-blue-500 bg-clip-text text-4xl font-extrabold tracking-tight leading-[1.15] text-transparent sm:text-5xl"
                >
                  Coming Soon
                </h1>

                <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-accent/75 sm:text-base">
                  AI-powered invoicing and inventory management for modern businesses.
                  Be the first to know when we launch.
                </p>

                <form onSubmit={handleSubmit} className="mx-auto w-full max-w-xl">
                  <div className="mb-3 flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-text shadow-sm outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10 sm:text-base"
                      required
                      disabled={isSubmitting}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="whitespace-nowrap rounded-xl bg-gradient-to-r from-primary to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Join the Waitlist"}
                    </button>
                  </div>
                  <p className="text-xs italic text-accent/55 sm:text-sm">
                    No spam. Product updates only.
                  </p>
                  {errorMessage && (
                    <p className="mt-3 rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-xs text-red-700 sm:text-sm">
                      {errorMessage}
                    </p>
                  )}
                </form>
              </>
            ) : (
              <div className="animate-scale-in">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 sm:h-20 sm:w-20">
                  <svg
                    className="h-8 w-8 text-green-600 sm:h-10 sm:w-10"
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
                <h3 className="mb-3 text-3xl font-bold text-secondary sm:text-4xl">
                  You are on the list!
                </h3>
                <p className="text-base text-accent/70 sm:text-lg">
                  We will notify you as soon as we launch.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
