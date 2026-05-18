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
    {
      label: "Inventory Management",
      value: "Unlimited items",
      status: "included",
    },
    { label: "Customer Management", value: "Unlimited", status: "included" },
    { label: "Custom Invoice Number", status: "included" },
    { label: "Dashboard & Analytics", status: "included" },
    { label: "Bulk Upload / Export", status: "locked" },
    { label: "Variants & Price Lists", status: "locked" },
  ],
  lockedTeaser: [
    "Priority support",
    "WhatsApp invoicing",
    "Team scaling tools",
  ],
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
    {
      label: "WhatsApp Invoicing",
      value: "Coming Soon",
      status: "coming_soon",
    },
  ],
  premium: [
    { label: "AI Invoices / Month", value: "200", status: "included" },
    { label: "Manual Invoices", value: "Unlimited", status: "included" },
    { label: "Templates", value: "10", status: "included" },
    { label: "Business Profiles", value: "5", status: "included" },
    { label: "Priority Support", value: "Included", status: "included" },
    {
      label: "WhatsApp Invoicing",
      value: "Coming Soon",
      status: "coming_soon",
    },
  ],
};

const PLAN_ORDER = ["basic", "pro", "premium"] as const;

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

function FeatureRow({
  item,
  isFeatured,
}: {
  item: FeatureItem;
  isFeatured: boolean;
}) {
  const status = item?.status || "included";

  if (status === "locked") {
    return (
      <li className="flex items-center gap-2.5 opacity-40">
        <div className="w-4 h-4 rounded-full border border-current shrink-0" />
        <span className="text-[13px]">{item.label}</span>
      </li>
    );
  }

  if (status === "coming_soon") {
    return (
      <li className="flex items-center gap-2.5">
        <Clock3 className="w-4 h-4 text-amber-400 shrink-0" />
        <span className="text-[13px]">{item.label}</span>
        <span className="ml-auto text-[10px] font-semibold bg-amber-400/15 text-amber-600 px-2 py-0.5 rounded-full">
          Soon
        </span>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-2.5">
      <div
        className={`w-4 h-4 rounded-full shrink-0 flex items-center justify-center ${
          isFeatured ? "bg-white/25" : "bg-primary/10"
        }`}
      >
        <svg
          viewBox="0 0 10 8"
          className={`w-2.5 h-2.5 fill-none stroke-[2.5] ${isFeatured ? "stroke-white" : "stroke-primary"}`}
        >
          <polyline points="1,4 3.5,6.5 9,1" />
        </svg>
      </div>
      <span className="text-[13px] font-medium">{item.label}</span>
      {item.value && (
        <span
          className={`ml-auto text-[12px] font-bold ${isFeatured ? "text-white/70" : "text-slate-400"}`}
        >
          {item.value}
        </span>
      )}
    </li>
  );
}

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

  return (
    <div className="relative flex flex-col">
      {/* Popular badge */}
      {isFeatured && (
        <div className="absolute -top-3.5 inset-x-0 flex justify-center z-10">
          <span className="inline-flex items-center gap-1.5 bg-primary text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-lg shadow-primary/30">
            <Sparkles className="w-3 h-3" />
            Most Popular
          </span>
        </div>
      )}
      {!isFeatured && plan.badge && (
        <div className="absolute -top-3.5 inset-x-0 flex justify-center z-10">
          <span className="inline-flex items-center gap-1.5 bg-slate-700 text-white text-[11px] font-bold px-3.5 py-1 rounded-full">
            {plan.badge}
          </span>
        </div>
      )}

      <div
        className={`relative flex flex-col flex-1 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
          isFeatured
            ? "bg-primary shadow-2xl shadow-primary/20 ring-2 ring-primary"
            : "bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300"
        }`}
      >
        {/* Header */}
        <div
          className={`px-6 pt-7 pb-6 ${isFeatured ? "text-white" : "text-secondary"}`}
        >
          <p
            className={`text-xs font-bold uppercase tracking-widest mb-1 ${isFeatured ? "text-white/60" : "text-slate-400"}`}
          >
            {plan.name}
          </p>

          {/* Price */}
          <div className="mt-3 mb-1 flex items-end gap-1">
            {originalPrice && (
              <span
                className={`text-base font-semibold line-through mr-1 ${isFeatured ? "text-white/30" : "text-slate-300"}`}
              >
                ₹{originalPrice}
              </span>
            )}
            <span className="text-5xl font-black tracking-tight leading-none">
              {isFreeCard ? "₹0" : `₹${price}`}
            </span>
            <span
              className={`text-sm mb-1 ml-1 ${isFeatured ? "text-white/50" : "text-slate-400"}`}
            >
              /{isFreeCard ? "forever" : isYearly ? "yr" : "mo"}
            </span>
          </div>

          {savingsPct && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-lg bg-amber-400/20 text-amber-300 mt-2">
              <Tag className="w-3 h-3" />
              Save {savingsPct}%
            </span>
          )}

          <p
            className={`text-[12px] mt-3 ${isFeatured ? "text-white/50" : "text-slate-400"}`}
          >
            {isFreeCard
              ? "No credit card needed"
              : isYearly
                ? "Billed annually"
                : "Cancel anytime"}
          </p>
        </div>

        {/* Divider */}
        <div
          className={`mx-6 h-px ${isFeatured ? "bg-white/10" : "bg-slate-100"}`}
        />

        {/* Features */}
        <div
          className={`px-6 py-5 flex flex-col flex-1 ${isFeatured ? "text-white" : "text-slate-600"}`}
        >
          <ul className="space-y-3 flex-1">
            {plan.coreHighlights.map((item, idx) => (
              <FeatureRow key={idx} item={item} isFeatured={isFeatured} />
            ))}
          </ul>

          {/* Locked teaser */}
          {isFreeCard && plan.lockedTeaser.length > 0 && (
            <div
              className={`mt-5 rounded-xl border border-dashed px-4 py-3 ${isFeatured ? "border-white/15 bg-white/5" : "border-slate-200 bg-slate-50"}`}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                Unlock with paid plans
              </p>
              <ul className="space-y-1.5">
                {plan.lockedTeaser.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Lock className="w-3 h-3 text-slate-300 shrink-0" />
                    <span className="text-[12px] text-slate-400">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <button
            onClick={handleCTA}
            className={`mt-6 w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] ${
              isFeatured
                ? "bg-white text-primary hover:bg-white/90 shadow-lg"
                : isFreeCard
                  ? "bg-slate-50 text-secondary border border-slate-200 hover:bg-slate-100"
                  : "bg-secondary text-white hover:bg-secondary/90"
            }`}
          >
            {isFreeCard ? "Get started free" : `Start ${plan.name}`}
            <ArrowRight className="w-4 h-4" />
          </button>
          <p
            className={`text-[11px] text-center mt-2 ${isFeatured ? "text-white/40" : "text-slate-400"}`}
          >
            {isFreeCard
              ? "Instant access"
              : "Instant activation · GST invoice included"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [showComparison, setShowComparison] = useState(false);
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("month");

  const cards = useMemo<CardPlan[]>(() => {
    const paidPlans: CardPlan[] = PLAN_ORDER.map((planKey) => {
      const planData = BASE_PLANS_FALLBACK[`${planKey}-${billingInterval}`];
      const monthPrice = BASE_PLANS_FALLBACK[`${planKey}-month`].priceINR;
      const yearPrice = BASE_PLANS_FALLBACK[`${planKey}-year`].priceINR;
      const yearlySavingsPct =
        getSavingsPercent(monthPrice * 12, yearPrice) || 0;

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
      <section id="pricing" className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_9%_22%,rgba(186,230,253,0.34),transparent_36%),radial-gradient(circle_at_90%_25%,rgba(253,224,71,0.16),transparent_34%),radial-gradient(circle_at_48%_92%,rgba(254,205,211,0.26),transparent_38%),linear-gradient(to_bottom,#f7fbff,#fffefb_48%,#f8fbff)]" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12 lg:mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Pricing
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.05] tracking-tight">
                Start free.
                <br />
                <span className="text-primary">Upgrade when ready.</span>
              </h2>
              <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
                No hidden fees. Cancel anytime. Your free plan never expires.
              </p>
            </div>
          </div>

          {/* Billing toggle */}
          <div className="flex items-center gap-4 mb-10">
            <div className="inline-flex items-center bg-slate-100 rounded-xl p-1">
              <button
                type="button"
                onClick={() => setBillingInterval("month")}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  billingInterval === "month"
                    ? "bg-white text-secondary shadow-sm"
                    : "text-slate-400 hover:text-secondary"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingInterval("year")}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  billingInterval === "year"
                    ? "bg-white text-secondary shadow-sm"
                    : "text-slate-400 hover:text-secondary"
                }`}
              >
                Yearly
              </button>
            </div>
            <span className="text-xs font-semibold bg-primary/8 text-primary border border-primary/15 px-3 py-1.5 rounded-full">
              Save up to {yearlyDiscountLabel}% yearly
            </span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-start pt-5">
            {cards.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                isFeatured={Boolean(!plan.isFreeCard && plan.isPopular)}
              />
            ))}
          </div>

          {/* Compare link */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowComparison(true)}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-primary transition-colors duration-200"
            >
              Compare all plans in detail
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>

          {/* Add-ons */}
          <div className="mt-16 lg:mt-20 rounded-2xl border border-slate-100 bg-slate-50 p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Need more?
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-secondary tracking-tight leading-tight mb-3">
                Top up anytime.
                <br />
                No plan change needed.
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Run out of AI invoices mid-month? Grab an add-on pack for a
                fraction of the cost — no expiry, no fuss, works with any paid
                plan.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center gap-3 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/8 border border-primary/15 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Starting at just
              </p>
              <p className="text-4xl font-black text-secondary tracking-tight">
                ₹49
              </p>
              <p className="text-xs text-slate-400">
                per invoice pack · never expires
              </p>
              <button
                onClick={() =>
                  (window.location.href = "https://app.whisprbill.com/login")
                }
                className="mt-2 inline-flex items-center gap-2 bg-secondary text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-secondary/90 transition-all duration-200"
              >
                View packs
                <ArrowRight className="w-4 h-4" />
              </button>
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
