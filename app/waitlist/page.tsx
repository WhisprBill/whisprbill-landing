"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { submitWaitlistRequest } from "../actions";

export default function WaitlistPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    setMessage("");
    const result = await submitWaitlistRequest(formData);

    if (result.success) {
      setStatus("success");
      setMessage(result.message);
    } else {
      setStatus("error");
      setMessage(result.message);
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="relative overflow-hidden py-24 sm:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-blue-950 to-primary" />
          <div className="absolute -left-16 top-8 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-0 bottom-6 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 text-white shadow-2xl backdrop-blur-md sm:p-10 lg:p-12">
              <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
                Early Access
              </p>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
                Join the WhisprBill Waitlist
              </h1>
              <p className="mt-4 max-w-2xl text-blue-100 sm:text-lg">
                Be among the first to get updates, early feature access, and launch perks.
              </p>

              {status !== "success" ? (
                <form
                  action={handleSubmit}
                  className="mt-8 grid gap-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Full name"
                      className="rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-blue-100/70 outline-none transition-colors focus:border-white/60"
                    />
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Work email"
                      className="rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-blue-100/70 outline-none transition-colors focus:border-white/60"
                    />
                  </div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name (optional)"
                    className="rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-blue-100/70 outline-none transition-colors focus:border-white/60"
                  />
                  <textarea
                    name="notes"
                    rows={4}
                    placeholder="Tell us what you want most from WhisprBill"
                    className="rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-blue-100/70 outline-none transition-colors focus:border-white/60"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-secondary transition-all hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl sm:text-base"
                  >
                    {status === "loading" ? "Joining..." : "Join Waitlist"}
                  </button>
                  {status === "error" && (
                    <p className="rounded-xl border border-red-300/30 bg-red-400/15 px-4 py-3 text-sm text-red-100">
                      {message || "Something went wrong. Please try again."}
                    </p>
                  )}
                </form>
              ) : (
                <div className="mt-8 rounded-2xl border border-emerald-300/30 bg-emerald-400/15 p-6">
                  <p className="text-lg font-semibold text-emerald-100">
                    {message || "You are on the waitlist."}
                  </p>
                  <p className="mt-2 text-sm text-blue-100">
                    We will reach out with updates and early access details.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
