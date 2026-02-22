"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type SpotlightFeature = {
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
  link: string;
  chip: string;
};

const spotlightFeatures: SpotlightFeature[] = [
  {
    title: "Your AI Invoice Assistant That Speaks Your Language",
    description:
      "Forget navigating through endless menus and forms. Simply chat naturally: 'Create an invoice for Sharma Enterprises for INR 45,000 with 18% GST' and watch your invoice appear instantly. It's invoicing that feels like texting a colleague.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v7A2.5 2.5 0 0 1 16.5 17H9l-4 3.5V17A2.5 2.5 0 0 1 2.5 14V7.5A2.5 2.5 0 0 1 5 5.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 10h8M8 13.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    image: "/wbill-chatwithai.png",
    link: "/features/ai-invoicing",
    chip: "AI Assistant",
  },
  {
    title: "Professional Templates for Every Business Type",
    description:
      "Choose from 50+ beautifully designed invoice templates spanning every industry - from minimalist designs for tech startups to detailed formats for construction firms. Each template is GST-compliant, fully customizable, and looks stunning on any device or printer.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M7 3h7l5 5v13H7V3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14 3v5h5M10 12h6M10 15h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    image: "/Wbill-Templates.png",
    link: "/features/templates",
    chip: "Templates",
  },
  {
    title: "100% GST Compliant",
    description:
      "Stay fully compliant with Indian tax regulations. Auto-calculate CGST, SGST, IGST based on buyer location. Generate GSTR-1, GSTR-3B reconciliation reports instantly. Supports reverse charge, e-invoicing, and E-way bills.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M12 3 5 6v6c0 5 3.4 8.3 7 9 3.6-.7 7-4 7-9V6l-7-3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    image: "/wbill-gstcompliance.jpeg",
    link: "/features/gst-compliance",
    chip: "Compliance",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#f9fbff] to-background py-14 sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-8 top-8 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-8 top-20 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wide text-primary sm:mb-3 sm:text-sm">
            Core Features
          </h2>
          <h3 className="mb-4 px-4 text-2xl font-extrabold leading-tight text-secondary sm:mb-6 sm:px-0 sm:text-3xl md:text-4xl lg:text-5xl">
            The tools that make <span className="text-primary">invoicing effortless</span>
          </h3>
          <p className="px-4 text-base leading-relaxed text-accent/70 sm:px-0 sm:text-lg">
            AI-powered automation, professional design, and complete GST compliance - everything you need in one platform.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-7 lg:space-y-8">
          {spotlightFeatures.map((feature, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-[0_14px_35px_rgba(1,38,82,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_20px_45px_rgba(1,38,82,0.14)]"
            >
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className={`relative min-h-[260px] sm:min-h-[320px] lg:min-h-[360px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className={`flex flex-col p-5 sm:p-6 lg:p-7 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary">
                      {feature.chip}
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-white text-primary shadow-sm">
                      {feature.icon}
                    </span>
                  </div>

                  <h4 className="mb-3 text-xl font-bold text-secondary sm:text-2xl">
                    {feature.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-accent/80">
                    {feature.description}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={feature.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-blue-700 group/link"
                    >
                      <span>Learn more</span>
                      <span className="transition-transform group-hover/link:translate-x-1">-&gt;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <Link
            href="/features"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-secondary to-primary px-7 py-3.5 text-base font-bold text-white shadow-[0_16px_35px_rgba(1,38,82,0.28)] ring-1 ring-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_45px_rgba(1,38,82,0.35)] sm:px-10 sm:py-4 sm:text-lg"
          >
            <span>Explore All Features</span>
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <p className="mt-3 text-xs font-medium text-accent/65 sm:text-sm">
            View detailed walkthroughs, workflows, and use-case pages.
          </p>
        </div>
      </div>
    </section>
  );
}
