// app/components/DemoForm.tsx
"use client";

import { Instagram, X, Youtube } from "lucide-react";
import { useState } from "react";
import { submitDemoRequest } from "../actions";

export default function DemoForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    const result = await submitDemoRequest(formData);

    if (result.success) {
      setStatus("success");
      setMessage(result.message);
    } else {
      setStatus("error");
      setMessage(result.message);
    }
  }

  return (
    <section
      id="demo-form"
      className="relative isolate overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-[#eff6ff] via-[#dbeafe] to-[#bfdbfe] p-6 shadow-[0_22px_60px_rgba(1,38,82,0.14)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.25),transparent_42%),radial-gradient(circle_at_82%_18%,rgba(59,130,246,0.28),transparent_38%)]" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            <div className="flex min-h-full flex-col justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-secondary/70">
                  Contact
                </p>
                <h3 className="mt-6 max-w-md text-4xl font-semibold leading-[1.05] tracking-tight text-secondary sm:text-5xl">
                  Let&apos;s simplify your invoicing workflow.
                </h3>
              </div>

              <div className="mt-10 space-y-7">
                <div className="grid gap-6 text-sm text-secondary/80 sm:grid-cols-2">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-secondary/60">Contact Info</p>
                    <p>+91 91089 12983</p>
                    <p>+91 87927 68035</p>
                    <p>contact@whisprbill.com</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-secondary/60">Availability</p>
                    <p>Mon-Fri, 9 AM - 6 PM IST</p>
                    <p>Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-secondary/80">
                  <a href="https://x.com/whisprbill" target="_blank" rel="noopener noreferrer" aria-label="X" className="rounded-full border border-secondary/20 p-2 transition hover:bg-secondary hover:text-white">
                    <X className="h-4 w-4" />
                  </a>
                  <a href="https://instagram.com/whisprbill" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-secondary/20 p-2 transition hover:bg-secondary hover:text-white">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="https://youtube.com/whisprbill" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="rounded-full border border-secondary/20 p-2 transition hover:bg-secondary hover:text-white">
                    <Youtube className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              {status === "success" ? (
                <div className="flex min-h-[320px] flex-col items-start justify-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-secondary/60">Submitted</p>
                  <h4 className="mt-3 text-3xl font-semibold text-secondary">Message sent.</h4>
                  <p className="mt-3 max-w-md text-sm text-secondary/70">
                    Thanks for reaching out. One of our specialists will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 rounded-lg border border-secondary/20 px-4 py-2 text-sm font-semibold text-secondary transition hover:bg-secondary hover:text-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form action={handleSubmit} className="space-y-4 pt-1">
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Full name or company"
                      className="w-full border-0 border-b border-secondary/35 bg-transparent px-1 py-3 text-base text-secondary outline-none placeholder:text-secondary/50 focus:border-primary"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      className="w-full border-0 border-b border-secondary/35 bg-transparent px-1 py-3 text-base text-secondary outline-none placeholder:text-secondary/50 focus:border-primary"
                    />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full border-0 border-b border-secondary/35 bg-transparent px-1 py-3 text-base text-secondary outline-none placeholder:text-secondary/50 focus:border-primary"
                    />
                    <div className="relative">
                      <select
                        name="queryType"
                        className="w-full appearance-none border-0 border-b border-secondary/35 bg-transparent px-1 py-3 pr-8 text-base text-secondary outline-none focus:border-primary"
                        defaultValue="Full Demo"
                      >
                        <option value="Full Demo">Full product demo</option>
                        <option value="Pricing Query">Pricing details</option>
                        <option value="Feature Query">Specific feature</option>
                        <option value="Other">Other inquiry</option>
                      </select>
                      <svg
                        className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary/70"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Enter your message here..."
                      className="w-full resize-none border-0 border-b border-secondary/35 bg-transparent px-1 py-3 text-base text-secondary outline-none placeholder:text-secondary/50 focus:border-primary"
                    />
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex min-w-[150px] items-center justify-center rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-white transition hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "loading" ? "Sending..." : "Submit Form"}
                    </button>
                  </div>

                  {status === "error" && (
                    <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
                      {message}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
