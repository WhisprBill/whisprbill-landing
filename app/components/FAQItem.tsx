"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl border bg-white px-6 py-5 transition-all duration-200 ${
        open ? "border-primary/25 shadow-sm" : "border-slate-200"
      }`}
    >
      <button
        type="button"
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-semibold text-secondary sm:text-base">{q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-primary transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={2}
        />
      </button>
      {open && (
        <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-relaxed text-accent/75">
          {a}
        </p>
      )}
    </div>
  );
}
