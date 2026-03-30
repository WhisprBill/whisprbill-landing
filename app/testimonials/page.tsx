import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Testimonials - WhisprBill",
  description: "Our fans are still in the making. WhisprBill is building the next wave of success stories.",
  keywords: [
    "WhisprBill testimonials",
    "customer stories",
    "AI invoicing reviews",
    "coming soon testimonials",
  ],
  openGraph: {
    title: "Testimonials - WhisprBill",
    description: "Our fans are still in the making.",
    url: "https://whisprbill.com/testimonials",
    images: [
      {
        url: "/og-testimonials.png",
        width: 1200,
        height: 630,
        alt: "WhisprBill Testimonials",
      },
    ],
  },
  alternates: {
    canonical: "https://whisprbill.com/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-blue-950 to-primary" />
          <div className="absolute -left-20 top-12 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-10 bottom-12 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center text-white shadow-2xl backdrop-blur-md sm:p-12 lg:p-16">
              <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
                Coming Soon
              </p>

              <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Our Fans Are Still In The Making
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
                We are helping early users move faster every day. The first wave of detailed success stories will be published soon.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/waitlist"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-secondary transition-all hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
                >
                  Get Premium Access
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/15"
                >
                  See How It Works
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/*
          Legacy testimonials page content has been intentionally commented out
          while we prepare verified customer stories and case studies.
        */}
      </main>

      <Footer />
    </>
  );
}

