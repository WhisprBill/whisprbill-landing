// app/components/Pricing.tsx
"use client";

import { useState } from "react";
import ComparisonModal from "./ComparisonModal";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for testing and small projects",
    features: ["Coming Soon"],
    cta: "Start Free Forever",
    popular: false,
  },
  {
    name: "Basic",
    price: "₹???",
    period: "per month",
    description: "For growing small businesses",
    features: ["Coming Soon"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "₹???",
    period: "per month",
    description: "For established businesses scaling fast",
    features: [
      // "50 AI invoices/month",
      "Coming Soon",
      // "Product variants & price lists",
      // "Multi-currency support",
      // "Up to 5 team members",
      // "Voice commands & API access",
      // "No watermark",
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large teams with complex needs",
    features: ["Coming Soon"],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <>
      <section
        id="pricing"
        className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header - Responsive */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-primary font-bold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
              Pricing Plans
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary leading-tight mb-4 sm:mb-6 px-4 sm:px-0">
              Choose the plan that{" "}
              <span className="text-primary">fits your business</span>
            </h3>
            <p className="text-base sm:text-lg text-accent/70 leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
              Start free, upgrade when you grow. No hidden fees. Cancel anytime.
            </p>

            {/* Compare Button - Responsive */}
            <button
              onClick={() => setShowComparison(true)}
              className="inline-flex items-center gap-2 text-sm sm:text-base text-primary font-semibold hover:text-blue-700 transition-colors group"
            >
              <span>Compare all plans</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Pricing Cards Grid - Fully Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  plan.popular
                    ? "border-primary shadow-xl sm:scale-105 lg:scale-110"
                    : "border-gray-100 shadow-sm"
                }`}
              >
                {/* Popular Badge - Responsive */}
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}

                {/* Plan Header - Responsive */}
                <div className="mb-5 sm:mb-6">
                  <h4 className="text-xl sm:text-2xl font-bold text-secondary mb-2">
                    {plan.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-accent/70 min-h-[36px] sm:min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                {/* Price - Responsive */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary">
                      {plan.price}
                    </span>
                    {plan.period !== "contact us" && (
                      <span className="text-sm sm:text-base text-accent/60">
                        /{plan.period.split(" ")[1] || "mo"}
                      </span>
                    )}
                  </div>
                  {plan.period === "contact us" && (
                    <p className="text-xs sm:text-sm text-accent/60 mt-1">
                      Tailored pricing for your needs
                    </p>
                  )}
                </div>

                {/* Features List - Responsive */}
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-xs sm:text-sm text-accent/80 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button - Responsive */}
                <button
                  type="button"
                  onClick={() => {
                    if (plan.cta.toLowerCase().includes("start free")) {
                      window.location.href = "https://app.whisprbill.com/login";
                    }
                  }}
                  className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-bold text-sm sm:text-base transition-all ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-200"
                      : "bg-gray-100 text-secondary hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Additional Info - Mobile friendly */}
          <div className="text-center mt-10 sm:mt-12 lg:mt-16">
            <p className="text-xs sm:text-sm text-accent/60 mb-4 px-4 sm:px-0">
              All plans include 24/7 support and secure cloud storage. Need a
              custom solution?
            </p>
            <a
              href="#demo-form"
              className="inline-flex items-center gap-2 text-sm sm:text-base text-primary font-semibold hover:text-blue-700 transition-colors group"
            >
              <span>Talk to our sales team</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Modal */}
      {showComparison && (
        <ComparisonModal onClose={() => setShowComparison(false)} />
      )}
    </>
  );
}

