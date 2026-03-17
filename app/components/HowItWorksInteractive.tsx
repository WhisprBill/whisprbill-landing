"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const steps = [
  {
    id: 1,
    title: "Capture Details",
    description:
      "Chat or type your invoice request in plain language. WhisprBill turns it into a structured draft instantly.",
    image: "/wbill-chatwithai.png",
  },
  {
    id: 2,
    title: "Refine in One View",
    description:
      "Adjust line items, tax, and discounts with a focused editor that stays in sync with the preview.",
    image: "/preview-screenshot-cropped.png",
  },
  {
    id: 3,
    title: "Send & Track",
    description:
      "Export a branded PDF, share in a click, and keep every invoice tracked in one timeline.",
    image: "/wbill-customers.jpeg",
  },
];

export default function HowItWorksInteractive() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-white to-background py-16 sm:py-20 lg:py-24">
      {/* subtle background orbs from your theme */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-4rem] right-[-2rem] h-60 w-60 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-14">
        {/* LEFT: browser / app preview */}
        <div className="w-full max-w-xl lg:w-[56%] lg:max-w-none">
          {/* Browser chrome */}
          <div className="mx-auto rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 sm:p-5 shadow-[0_24px_60px_rgba(15,23,42,0.20)] transition-all duration-500">
            <div className="flex items-center justify-between pb-3">
              {/* traffic lights */}
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-medium text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                app.whisprbill.com
              </div>
              <div className="h-5 w-8 rounded-full bg-slate-100" />
            </div>

            {/* Screen content – replace src with your actual dashboard shot */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-background">
              
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-accent/70">
            See your entire invoice journey — from request to paid — in one clean workspace.
          </p>
        </div>

        {/* RIGHT: heading + vertical steps */}
        <div className="w-full max-w-xl lg:w-[44%] lg:max-w-lg">
          <h2 className="mt-1 text-3xl font-extrabold leading-tight text-secondary sm:text-4xl">
            3 simple steps to go from{" "}
            <span className="text-primary">idea to invoice</span>
            <Image
  key={steps[activeStep].image}
  src={steps[activeStep].image}
  alt={steps[activeStep].title}
  width={900}
  height={650}
  className={`h-auto w-full object-cover transition-all duration-700 ${
    activeStep === 0
      ? "scale-[1.01]"
      : activeStep === 1
      ? "scale-[1.015]"
      : "scale-[1.02]"
  } opacity-100`}
/>
          </h2>
          <p className="mt-2 text-sm text-accent/75 sm:text-base">
            Skip templates and manual formatting. Describe the work once — WhisprBill handles structure, taxes, and delivery.
          </p>

          <div className="mt-7 space-y-6">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                type="button"
                onMouseEnter={() => setActiveStep(idx)}
                onFocus={() => setActiveStep(idx)}
                className={`group flex w-full gap-4 rounded-xl p-2 text-left transition-all duration-300 ${
                  idx === activeStep ? "bg-primary/[0.04]" : "hover:bg-slate-50/80"
                }`}
              >
                {/* bullet column */}
                <div className="mt-1 flex flex-col items-center">
                  <div
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold leading-none [font-variant-numeric:tabular-nums] transition-all duration-300 ${
                      idx === activeStep
                        ? "bg-primary text-white ring-2 ring-primary/20 shadow-[0_8px_18px_rgba(0,82,204,0.22)]"
                        : "bg-primary/90 text-white"
                    }`}
                  >
                    {String(step.id).padStart(2, "0")}
                  </div>
                  {idx !== steps.length - 1 && (
                    <div className={`mt-1 h-full w-px transition-colors duration-300 ${idx < activeStep ? "bg-primary/40" : "bg-slate-200"}`} />
                  )}
                </div>

                {/* text column */}
                <div>
                  <h3
                    className={`text-sm font-semibold transition-colors sm:text-base ${
                      idx === activeStep ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-1 text-xs transition-colors sm:text-sm ${
                      idx === activeStep ? "text-accent/90" : "text-accent/80"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="mt-8 inline-flex items-center rounded-xl bg-secondary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-secondary/90"
          >
            Start Creating Invoices
          </button>
        </div>
      </div>
    </section>
  );
}
