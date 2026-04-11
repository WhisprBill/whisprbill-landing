// app/components/Pricing.tsx
"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Clock3, Lock, Sparkles, Tag } from "lucide-react";
import ComparisonModal from "./ComparisonModal";

const BASE_PLANS_FALLBACK = {
  "basic-month": {
    name: "Basic",
    description: "For freelancers getting started.",
    billingInterval: "month",
    priceINR: 99,
    isPopular: false,
    badge: "",
  },
  "basic-year": {
    name: "Basic",
    description: "For freelancers getting started.",
    billingInterval: "year",
    priceINR: 999,
    isPopular: false,
    badge: "Save 16%",
  },
  "pro-month": {
    name: "Pro",
    description: "For freelancers and small businesses.",
    billingInterval: "month",
    priceINR: 299,
    isPopular: true,
    badge: "Most Popular",
  },
  "pro-year": {
    name: "Pro",
    description: "For freelancers and small businesses.",
    billingInterval: "year",
    priceINR: 2999,
    isPopular: false,
    badge: "Save 16%",
  },
  "premium-month": {
    name: "Premium",
    description: "For businesses that need scale and advanced flows.",
    billingInterval: "month",
    priceINR: 699,
    isPopular: false,
    badge: "",
  },
  "premium-year": {
    name: "Premium",
    description: "For businesses that need scale and advanced flows.",
    billingInterval: "year",
    priceINR: 6999,
    isPopular: false,
    badge: "Best Value",
  },
} as const;

const FREE_PLAN = {
  name: "Free",
  description: "Try WhisprBill with no commitment.",
  priceINR: 0,
  coreHighlights: [
    { label: "AI Invoices", value: "5 per month", status: "included" },
    { label: "Manual Invoices", value: "Unlimited", status: "included" },
    { label: "GST Invoice Templates", value: "1 template", status: "included" },
    { label: "Inventory Management", value: "Unlimited items", status: "included" },
    { label: "Customer Management", value: "Unlimited", status: "included" },
    { label: "Custom Invoice Number", status: "included" },
    { label: "Dashboard & Analytics", status: "included" },
    { label: "Bulk Upload / Export", status: "locked" },
    { label: "Variants & Price Lists", status: "locked" },
  ],
  lockedTeaser: ["Priority support", "WhatsApp invoicing", "Team scaling tools"],
} as const;

const PLAN_FEATURES: Record<PlanKey, FeatureItem[]> = {
  basic: [
    { label: "AI Invoices / Month", value: "25", status: "included" },
    { label: "Manual Invoices", value: "Unlimited", status: "included" },
    { label: "Templates", value: "2", status: "included" },
    { label: "Business Profiles", value: "1", status: "included" },
    { label: "Priority Support", value: "Not Included", status: "locked" },
    { label: "WhatsApp Invoicing", value: "Not Included", status: "locked" },
  ],
  pro: [
    { label: "AI Invoices / Month", value: "80", status: "included" },
    { label: "Manual Invoices", value: "Unlimited", status: "included" },
    { label: "Templates", value: "5", status: "included" },
    { label: "Business Profiles", value: "2", status: "included" },
    { label: "Priority Support", value: "Included", status: "included" },
    { label: "WhatsApp Invoicing", value: "Coming Soon", status: "coming_soon" },
  ],
  premium: [
    { label: "AI Invoices / Month", value: "200", status: "included" },
    { label: "Manual Invoices", value: "Unlimited", status: "included" },
    { label: "Templates", value: "10", status: "included" },
    { label: "Business Profiles", value: "5", status: "included" },
    { label: "Priority Support", value: "Included", status: "included" },
    { label: "WhatsApp Invoicing", value: "Coming Soon", status: "coming_soon" },
  ],
};

const PLAN_ORDER = ["basic", "pro", "premium"] as const;
const TARGET_PACKS = [
  { price: 49, invoiceCount: 25, label: "Starter Value" },
  { price: 99, invoiceCount: 60, label: "Most Popular" },
  { price: 149, invoiceCount: 100, label: "Max Value" },
] as const;

type PlanKey = (typeof PLAN_ORDER)[number];
type BillingInterval = "month" | "year";
type FeatureStatus = "included" | "coming_soon" | "locked";

type FeatureItem = {
  label: string;
  status?: FeatureStatus;
  value?: string;
};

type CardPlan = {
  id: string;
  name: string;
  description: string;
  priceINR: number;
  billingInterval: BillingInterval | "forever";
  badge: string;
  isPopular: boolean;
  isFreeCard?: boolean;
  coreHighlights: FeatureItem[];
  lockedTeaser: string[];
  yearlySavingsPct?: number;
  monthlyBasePrice?: number;
};

const getSavingsPercent = (original: number | null, current: number) => {
  if (!original || !current) return null;
  return Math.round(((original - current) / original) * 100);
};

const getMonthlyOriginalPrice = (price: number) => {
  if (!price || price === 0) return null;
  const multiplied = price * 2.8;
  if (multiplied >= 1000) return Math.round(multiplied / 100) * 100;
  if (multiplied >= 500) return Math.round(multiplied / 50) * 50;
  return Math.round(multiplied / 10) * 10;
};

function PlanCard({
  plan,
  isFeatured,
}: {
  plan: CardPlan;
  isFeatured: boolean;
}) {
  const isFreeCard = Boolean(plan.isFreeCard);
  const price = Number(plan.priceINR || 0);
  const isYearly = plan.billingInterval === "year";
  const monthlyEquivalent = isYearly ? Math.round(price / 12) : price;
  const originalPrice = isFreeCard
    ? null
    : isYearly
      ? Number(plan.monthlyBasePrice || 0) * 12
      : getMonthlyOriginalPrice(price);
  const savingsPct = isFreeCard
    ? null
    : getSavingsPercent(originalPrice, price) || plan.yearlySavingsPct || null;

  const handleCTA = () => {
    if (isFreeCard || plan.name.toLowerCase() !== "premium") {
      window.location.href = "https://app.whisprbill.com/login";
      return;
    }
    window.location.href = "#demo-form";
  };

  const getFeatureMeta = (feature: FeatureItem) => {
    const status = feature?.status || "included";

    if (status === "coming_soon") {
      return {
        icon: <Clock3 className="w-3.5 h-3.5 text-amber-400 shrink-0" />,
        textColor: "text-[#7A8F9E]",
      };
    }

    if (status === "locked") {
      return {
        icon: (
          <div className="w-3.5 h-3.5 rounded-full border-2 border-[#D5E3EC] shrink-0" />
        ),
        textColor: "text-[#B8CCDA]",
      };
    }

    return {
      icon: (
        <div
          className={`w-3.5 h-3.5 rounded-full shrink-0 flex items-center justify-center ${
            isFeatured ? "bg-[#0072E9]" : "bg-[#22A559]"
          }`}
        >
          <svg
            viewBox="0 0 10 8"
            className="w-2 h-2 fill-none stroke-white stroke-[2]"
          >
            <polyline points="1,4 3.5,6.5 9,1" />
          </svg>
        </div>
      ),
      textColor: "text-[#1A2B36]",
    };
  };

  return (
    <div className="relative w-full">
      {(isFeatured || plan.badge) && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
          <span
            className={`text-[11px] font-bold px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow-md ${
              isFeatured
                ? "bg-gradient-to-r from-[#0055CC] to-[#0080FF] text-white"
                : "bg-[#0E4A8A] text-white"
            }`}
          >
            {isFeatured ? (
              <>
                <Sparkles className="w-3 h-3" />
                {plan.badge || "Most Popular"}
              </>
            ) : (
              plan.badge
            )}
          </span>
        </div>
      )}

      <div
        className={`relative h-full rounded-2xl flex flex-col overflow-hidden transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 ${
          isFeatured
            ? "border-2 border-[#0072E9] shadow-xl shadow-[#0072E9]/15"
            : "border border-[#DDE7F1] shadow-md"
        }`}
      >
        <div
          className={`px-6 pt-7 pb-6 ${
            isFeatured
              ? "bg-gradient-to-br from-[#0055CC] to-[#0080FF]"
              : "bg-gradient-to-br from-[#1A2B36] to-[#2A3F52]"
          }`}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-extrabold text-white tracking-tight">
                {plan.name}
              </h3>
              <p className="text-xs text-white/60 mt-0.5 leading-snug">
                {plan.description}
              </p>
            </div>

            {isYearly && !isFreeCard && (
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white/15 text-white/90 border border-white/20 whitespace-nowrap shrink-0">
                Yearly
              </span>
            )}
          </div>

          {isFreeCard ? (
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-white tracking-tight">
                  {"\u20B9"}0
                </span>
                <span className="text-sm text-white/50 font-medium">
                  / forever
                </span>
              </div>
              <p className="text-xs text-white/40 mt-1.5">
                No credit card needed
              </p>
            </div>
          ) : (
            <div>
              {originalPrice && (
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-base text-white/40 font-semibold relative">
                    {"\u20B9"}
                    {originalPrice}
                    <span className="absolute inset-0 flex items-center">
                      <span className="w-full h-[2px] bg-red-400/70 block rotate-[-8deg]" />
                    </span>
                  </span>

                  {savingsPct && (
                    <span className="inline-flex items-center gap-1 text-[12px] font-extrabold px-2.5 py-0.5 rounded-lg bg-[#FFE066] text-[#7A4F00]">
                      <Tag className="w-3 h-3" />
                      Save {savingsPct}%
                    </span>
                  )}
                </div>
              )}

              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-white tracking-tight">
                  {"\u20B9"}
                  {price}
                </span>
                <span className="text-sm text-white/50 font-medium">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>

              {isYearly ? (
                <p className="text-xs text-white/50 mt-1.5">
                  {"\u2248"} {"\u20B9"}
                  {monthlyEquivalent} / month - billed annually
                </p>
              ) : (
                <p className="text-xs text-white/40 mt-1.5">
                  Billed monthly - cancel anytime
                </p>
              )}
            </div>
          )}
        </div>

        <div className="bg-white flex flex-col flex-grow px-6 py-5">
          <ul className="space-y-2 flex-grow mb-5">
            {plan.coreHighlights.map((item, idx) => {
              const meta = getFeatureMeta(item);
              const isLocked = item?.status === "locked";

              return (
                <li
                  key={idx}
                  className={`flex items-center gap-2.5 ${
                    isLocked ? "opacity-55" : ""
                  }`}
                >
                  {meta.icon}
                  <div className="min-w-0 flex-1 py-1.5 border-b border-[#EEF3F8] last:border-b-0">
                    <span
                      className={`text-[14px] font-semibold leading-tight ${meta.textColor}`}
                    >
                      {item?.label || ""}
                    </span>
                    {item?.value && (
                      <span className="text-[12px] text-[#6E90A5] font-semibold block mt-1">
                        {item.value}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {isFreeCard && plan.lockedTeaser.length > 0 && (
            <div className="mb-5 rounded-xl border border-dashed border-[#C8DCEF] bg-[#F7FAFD] px-3 py-3">
              <p className="text-[10px] font-bold text-[#9BB5C4] uppercase tracking-widest mb-2">
                Unlock with paid plans
              </p>
              <ul className="space-y-1.5">
                {plan.lockedTeaser.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Lock className="w-3 h-3 text-[#C0D4E0] shrink-0" />
                    <span className="text-[11px] text-[#9BB5C4]">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-2">
            <button
              onClick={handleCTA}
              className={`w-full py-3 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-[0.98] ${
                isFreeCard
                  ? "bg-white text-[#0072E9] border-2 border-[#0072E9] hover:bg-[#EBF4FF]"
                  : isFeatured
                    ? "bg-[#0072E9] text-white hover:bg-[#005EC2] shadow-lg shadow-[#0072E9]/25"
                    : "bg-[#1A2B36] text-white hover:bg-[#243546]"
              }`}
            >
              {isFreeCard
                ? "Get Started Free"
                : isYearly
                  ? "Start Yearly Plan"
                  : "Start Monthly Plan"}
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-center text-[#A8BECB]">
              {isFreeCard
                ? "No credit card - Instant access"
                : "Instant activation - GST invoice included"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [showComparison, setShowComparison] = useState(false);
  const [billingInterval, setBillingInterval] = useState<BillingInterval>(
    "month"
  );

  const cards = useMemo<CardPlan[]>(() => {
    const paidPlans: CardPlan[] = PLAN_ORDER.map((planKey) => {
      const planData = BASE_PLANS_FALLBACK[`${planKey}-${billingInterval}`];
        const monthPrice = BASE_PLANS_FALLBACK[`${planKey}-month`].priceINR;
        const yearPrice = BASE_PLANS_FALLBACK[`${planKey}-year`].priceINR;
        const yearlySavingsPct = getSavingsPercent(monthPrice * 12, yearPrice) || 0;

      return {
        id: `${planKey}-${billingInterval}`,
        name: planData.name,
        description: planData.description,
        priceINR: planData.priceINR,
        billingInterval: planData.billingInterval,
        badge: planData.badge,
        isPopular: planData.isPopular,
        coreHighlights: PLAN_FEATURES[planKey],
        lockedTeaser: [],
        yearlySavingsPct,
        monthlyBasePrice: monthPrice,
      };
    });

    return [
      {
        id: "free-forever",
        name: FREE_PLAN.name,
        description: FREE_PLAN.description,
        priceINR: FREE_PLAN.priceINR,
        billingInterval: "forever",
        badge: "",
        isPopular: false,
        isFreeCard: true,
        coreHighlights: [...FREE_PLAN.coreHighlights],
        lockedTeaser: [...FREE_PLAN.lockedTeaser],
        monthlyBasePrice: 0,
      },
      ...paidPlans,
    ];
  }, [billingInterval]);

  const yearlyDiscountLabel = useMemo(() => {
    const discounts = PLAN_ORDER.map((planKey) => {
      const monthPrice = BASE_PLANS_FALLBACK[`${planKey}-month`].priceINR;
      const yearPrice = BASE_PLANS_FALLBACK[`${planKey}-year`].priceINR;
      return getSavingsPercent(monthPrice * 12, yearPrice) || 0;
    });
    return Math.max(...discounts);
  }, []);

  return (
    <>
      <section
        id="pricing"
        className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
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

            <div className="inline-flex items-center bg-gray-100 rounded-2xl p-1.5 mb-4 sm:mb-5 shadow-sm border border-gray-200/70">
              <button
                type="button"
                onClick={() => setBillingInterval("month")}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                  billingInterval === "month"
                    ? "bg-white text-secondary shadow-sm"
                    : "text-accent/70 hover:text-secondary"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingInterval("year")}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                  billingInterval === "year"
                    ? "bg-white text-secondary shadow-sm"
                    : "text-accent/70 hover:text-secondary"
                }`}
              >
                Yearly
              </button>
            </div>
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                Save up to {yearlyDiscountLabel}% with yearly billing
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {cards.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                isFeatured={Boolean(!plan.isFreeCard && plan.isPopular)}
              />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
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

          <div className="mt-14 sm:mt-16 lg:mt-20 rounded-3xl border border-[#DCE8F4] bg-gradient-to-br from-[#F8FBFF] via-white to-[#F3F8FF] p-6 sm:p-8 lg:p-10">
            <div className="text-center max-w-3xl mx-auto">
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-secondary">
                Add-On Packs
              </h4>
              <p className="text-sm sm:text-base text-accent/70 mt-3 leading-relaxed">
                Run out of AI invoices? No worries. We&apos;ve got affordable
                add-ons that don&apos;t expire. Buy once, use anytime.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {TARGET_PACKS.map((pack) => (
                <div
                  key={`${pack.price}-${pack.invoiceCount}`}
                  className={`relative rounded-2xl border bg-white p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 ${
                    pack.label === "Most Popular"
                      ? "border-[#0072E9] ring-2 ring-[#0072E9]/15"
                      : "border-[#DDE7F1]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                        pack.label === "Most Popular"
                          ? "bg-[#EAF4FF] text-[#005EC2]"
                          : "bg-[#F1F5F9] text-[#4E6778]"
                      }`}
                    >
                      {pack.label}
                    </span>
                    <span className="text-xs font-semibold text-[#6E90A5]">
                      Non-expiring
                    </span>
                  </div>

                  <div className="mb-4">
                    <p className="text-4xl font-black tracking-tight text-[#1A2B36]">
                      {"\u20B9"}
                      {pack.price}
                    </p>
                    <p className="text-sm font-semibold text-[#4E6778] mt-1">
                      {pack.invoiceCount} AI invoices
                    </p>
                  </div>

                  <ul className="space-y-2.5">
                    <li className="flex items-center gap-2.5 text-[13px] text-[#3B5566] font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#22A559]" />
                      Use whenever you need extra invoices
                    </li>
                    <li className="flex items-center gap-2.5 text-[13px] text-[#3B5566] font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#22A559]" />
                      Works with any paid plan
                    </li>
                    <li className="flex items-center gap-2.5 text-[13px] text-[#3B5566] font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#22A559]" />
                      Available inside app after signup
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {showComparison && (
        <ComparisonModal onClose={() => setShowComparison(false)} />
      )}
    </>
  );
}
