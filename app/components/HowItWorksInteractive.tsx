"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const steps = [
  {
    id: 1,
    title: "Say it or type it",
    image: "/wbill-chatwithai.png",
  },
  {
    id: 2,
    title: "AI builds it instantly",
    image: "/preview-screenshot-cropped.png",
  },
  {
    id: 3,
    title: "Send & get paid",
    image: "/wbill-customers.jpeg",
  },
];

export default function HowItWorksInteractive() {
  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_84%_12%,rgba(254,215,170,0.3),transparent_38%),radial-gradient(circle_at_14%_34%,rgba(196,181,253,0.24),transparent_40%),linear-gradient(to_bottom,#f8fbff,#fffefd_42%,#f7fbff)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">

        {/* Section header */}
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            How it works
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.05] tracking-tight">
            Invoice sent in{" "}
            <span className="text-primary">three steps.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

          {/* LEFT: App preview */}
          <div className="w-full lg:w-[58%]">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3 py-1 text-[10px] font-medium text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  app.whisprbill.com
                </div>
                <div className="w-8" />
              </div>
              <div className="relative aspect-[16/10] bg-slate-50">
                <Image
                  key={steps[activeStep].image}
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  fill
                  className="object-contain transition-opacity duration-500"
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Steps */}
          <div className="w-full lg:w-[42%] flex flex-col gap-3">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={step.id}
                  type="button"
                  onMouseEnter={() => { setActiveStep(idx); setPaused(true); }}
                  onMouseLeave={() => setPaused(false)}
                  onFocus={() => setActiveStep(idx)}
                  className={`group text-left w-full rounded-2xl px-5 py-5 flex items-center gap-4 border transition-all duration-300 ${
                    isActive
                      ? "bg-primary/[0.05] border-primary/25 shadow-sm"
                      : "bg-slate-50 border-slate-100 hover:border-slate-200 hover:bg-slate-100/60"
                  }`}
                >
                  {/* Step number */}
                  <span
                    className={`text-xs font-bold shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-white border border-slate-200 text-slate-400"
                    }`}
                  >
                    {step.id}
                  </span>

                  {/* Title */}
                  <h3
                    className={`font-extrabold leading-tight tracking-tight transition-all duration-300 ${
                      isActive
                        ? "text-2xl sm:text-3xl text-secondary"
                        : "text-lg sm:text-xl text-slate-400"
                    }`}
                  >
                    {step.title}
                  </h3>
                </button>
              );
            })}

            {/* CTA */}
            <div className="pt-4 pl-1">
              <Link
                href="https://app.whisprbill.com/login"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary/90 hover:-translate-y-px"
              >
                Try it free
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <p className="mt-2 text-xs text-slate-400">No credit card · Free forever plan</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
