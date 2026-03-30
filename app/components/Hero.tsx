"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const scrollToDemo = () => {
    document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-background pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[62%] bg-gradient-to-br from-secondary via-blue-950 to-primary" />
      <div className="pointer-events-none absolute inset-x-0 top-[50%] h-40 bg-gradient-to-b from-transparent to-background" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-[-6rem] h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-blob" />
        <div className="absolute right-[-4rem] top-8 h-72 w-72 rounded-full bg-secondary/15 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-8 left-1/3 h-52 w-52 rounded-full bg-primary/10 blur-3xl animate-float" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
            <span className="h-2 w-2 rounded-full bg-primary" />
            AI-Powered Billing Workflow
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Create invoices by chatting.
            <span className="block bg-gradient-to-r from-blue-100 to-cyan-200 bg-clip-text text-transparent">
              Fast, accurate, GST-ready.
            </span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-blue-100/90 sm:text-lg">
            WhisprBill turns simple prompts into professional invoices, so your team can spend less time billing and more time running the business.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-100">
              Invoice Types
            </span>
            {[
              "Tax Invoice",
              "Bill of Supply",
              "Quotation",
              "Purchase Order",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary/80" />
                {item}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100/85">
              <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              More soon
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center rounded-xl bg-secondary px-7 py-3.5 text-base font-bold text-white shadow-[0_12px_28px_rgba(1,38,82,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/90"
            >
              Get Premium Access
              <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <button
              onClick={scrollToDemo}
              className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
            >
              Book a Live Demo
            </button>
          </div>
        </div>

        <div className="relative mt-10 sm:mt-12">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/20 bg-white/90 p-2 shadow-[0_26px_65px_rgba(1,38,82,0.18)] sm:p-3 lg:p-4">
            <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-slate-200 bg-white/85 px-4 py-2 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-blue">
                Product Walkthrough View
              </p>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                Live Preview
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white pt-10">
              <Image
                src="/wbill-heroimage.jpeg"
                alt="WhisprBill full product walkthrough preview"
                width={2200}
                height={1200}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

