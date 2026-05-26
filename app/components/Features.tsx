"use client";

import Image from "next/image";
import Link from "next/link";

type BentoFeature = {
  title: string;
  description: string;
  image: string;
  link: string;
  tile: string;
  span: string;
  imageMode?: "contain" | "cover";
  layout?: "bottom" | "side";
};

const bentoFeatures: BentoFeature[] = [
  {
    title: "Invoice by Voice or Chat",
    description: "Create GST-ready invoices from a simple prompt in seconds.",
    image: "/chat_with_ai.svg",
    link: "/features/ai-invoicing",
    tile: "bg-[#e9e8ff]",
    span: "md:col-span-2 md:row-span-2",
    imageMode: "contain",
    layout: "bottom",
  },
  {
    title: "Smart Templates",
    description: "Choose from professional layouts and adapt them instantly.",
    image: "/Wbill-Templates.png",
    link: "/features/templates",
    tile: "bg-[#ffe7f1]",
    span: "md:col-span-2",
    imageMode: "contain",
    layout: "side",
  },
  {
    title: "GST Accuracy",
    description: "Auto-handles CGST, SGST, and IGST by invoice context.",
    image: "/gst_accuracy.png",
    link: "/features/gst-compliance",
    tile: "bg-[#fff4dc]",
    span: "md:col-span-1",
    imageMode: "contain",
    layout: "bottom",
  },
  {
    title: "Client Tracking",
    description: "Track invoice status, follow-ups, and payment history.",
    image: "/client_tracking.svg",
    link: "/features/customer-management",
    tile: "bg-[#e8f7ec]",
    span: "md:col-span-1",
    imageMode: "contain",
    layout: "bottom",
  },
  {
    title: "Invoice Analytics",
    description: "See trends, top customers, and monthly revenue snapshots.",
    image: "/invoice_analytics.svg",
    link: "/features/dashboard-analytics",
    tile: "bg-[#ffece1]",
    span: "md:col-span-2",
    imageMode: "contain",
    layout: "side",
  },
  {
    title: "Fast Share & Export",
    description: "Send invoices by PDF, link, or WhatsApp-ready workflows.",
    image: "/fast_share_and_export.svg",
    link: "/features/invoice-sharing",
    tile: "bg-[#e8f1ff]",
    span: "md:col-span-2",
    imageMode: "contain",
    layout: "side",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-28">

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 lg:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">Core Features</p>
          <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.06] tracking-tight text-secondary sm:text-5xl lg:text-6xl">
            A smarter billing stack.
            <span className="text-primary"> Built for speed and clarity.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-4 auto-rows-[220px]">
          {bentoFeatures.map((feature, index) => (
            // Tune small 1x1 tiles so illustration cards stay readable.
            // Only applies to GST Accuracy and Client Tracking.
            (() => {
              const isSmallIllustrationTile =
                feature.title === "GST Accuracy" || feature.title === "Client Tracking";

              return (
            <Link
              key={feature.title}
              href={feature.link}
              className={`group relative overflow-hidden rounded-3xl border border-primary/15 ${feature.tile} p-5 shadow-[0_10px_30px_rgba(1,38,82,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(1,38,82,0.16)] ${feature.span}`}
            >
              <div className="relative z-10 h-full">
                {feature.layout === "side" ? (
                  <div className="grid h-full grid-cols-12 gap-4">
                    <div className="col-span-7 flex flex-col justify-start">
                      <h3 className="text-2xl font-extrabold leading-[1.08] tracking-tight text-secondary sm:text-3xl">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-secondary/75 sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                    <div className="relative col-span-5 min-h-[140px]">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-contain object-center p-1 transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full flex-col justify-between gap-4">
                    <div>
                      <h3
                        className={`font-extrabold leading-[1.08] tracking-tight text-secondary ${
                          isSmallIllustrationTile ? "text-[2.05rem] sm:text-[2.35rem]" : "text-2xl sm:text-3xl"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`mt-2 leading-relaxed text-secondary/75 ${
                          isSmallIllustrationTile ? "max-w-none text-[1.02rem] sm:text-[1.08rem]" : "max-w-sm text-sm sm:text-base"
                        }`}
                      >
                        {feature.description}
                      </p>
                    </div>

                    <div
                      className={`relative ${
                        index === 0
                          ? "h-[220px] sm:h-[280px]"
                          : isSmallIllustrationTile
                            ? "h-[150px] sm:h-[170px]"
                            : "h-[120px] sm:h-[140px]"
                      }`}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className={`${
                          feature.imageMode === "contain"
                            ? index === 0
                              ? "object-contain object-center p-2 sm:p-4"
                              : isSmallIllustrationTile
                                ? "object-contain object-center p-1"
                                : "object-contain object-center p-2"
                            : "object-cover object-center"
                        } transition-transform duration-300 group-hover:scale-[1.03]`}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Link>
              );
            })()
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-7 py-3 text-sm font-bold text-white shadow-[0_14px_32px_rgba(1,38,82,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/90"
          >
            Explore all features
          </Link>
        </div>
      </div>
    </section>
  );
}
