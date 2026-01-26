// app/components/DemoForm.tsx
"use client";

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
    <section id="demo-form" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* LEFT SIDE: Contact Info & Value Prop - Responsive */}
          <div className="lg:w-5/12 bg-secondary p-8 sm:p-10 lg:p-14 text-white flex flex-col justify-between relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-primary rounded-full blur-[60px] sm:blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="relative z-10">
               <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Let's grow your business together.</h3>
               <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
                 Ready to automate your invoicing? Have questions about features? Our team is ready to help you set up the perfect workflow.
               </p>

               <div className="space-y-5 sm:space-y-6">
                 <div className="flex items-center gap-3 sm:gap-4">
                   <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl sm:text-2xl shrink-0">
                     ✉️
                   </div>
                   <div>
                     <p className="text-xs sm:text-sm text-white/60 font-semibold uppercase tracking-wider">Email Us</p>
                     <a href="mailto:hello@whisprbill.com" className="font-medium text-sm sm:text-base hover:text-white/80 transition-colors">
                       contact@whisprbill.com
                     </a>
                   </div>
                 </div>
                 
                 <div className="flex items-center gap-3 sm:gap-4">
                   <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl sm:text-2xl shrink-0">
                     📞
                   </div>
                   <div>
                     <p className="text-xs sm:text-sm text-white/60 font-semibold uppercase tracking-wider">Call Us</p>
                     <a href="tel:+919876543210" className="font-medium text-sm sm:text-base hover:text-white/80 transition-colors">
                       +91 91089 12983 / +91 87927 68035 
                     </a>
                   </div>
                 </div>

                 <div className="flex items-center gap-3 sm:gap-4">
                   <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl sm:text-2xl shrink-0">
                     💬
                   </div>
                   <div>
                     <p className="text-xs sm:text-sm text-white/60 font-semibold uppercase tracking-wider">Live Chat</p>
                     <p className="font-medium text-sm sm:text-base">Available Mon-Fri, 9 AM - 6 PM IST</p>
                   </div>
                 </div>

                 <div className="flex items-center gap-3 sm:gap-4">
                   <div className="w-11 h-11 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl sm:text-2xl shrink-0">
                     ⚡
                   </div>
                   <div>
                     <p className="text-xs sm:text-sm text-white/60 font-semibold uppercase tracking-wider">Response Time</p>
                     <p className="font-medium text-sm sm:text-base">Within 24 hours on business days</p>
                   </div>
                 </div>
               </div>
             </div>

             <div className="mt-10 sm:mt-12 lg:mt-0 relative z-10">
               <p className="text-xs sm:text-sm text-white/40">
                 © 2026 WhisprBill. All rights reserved.
               </p>
             </div>
          </div>

          {/* RIGHT SIDE: The Form - Responsive */}
          <div className="lg:w-7/12 p-8 sm:p-10 lg:p-14 bg-white">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8 sm:py-12 animate-in fade-in">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl sm:text-4xl mb-4 sm:mb-6 shadow-sm">
                  🎉
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-2 sm:mb-3">Message Sent!</h3>
                <p className="text-base sm:text-lg text-accent/70 max-w-md mx-auto px-4 sm:px-0">
                  Thanks for reaching out. One of our specialists will contact you within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-6 sm:mt-8 text-sm sm:text-base text-primary font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-1">Get in Touch</h3>
                  <p className="text-sm sm:text-base text-accent/60 mb-6 sm:mb-8">Fill out the form below and we'll get back to you.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-secondary">Full Name / Company</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50/50" 
                      placeholder="John Doe / Acme Corp" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-secondary">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50/50" 
                      placeholder="+91 99999 88888" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-semibold text-secondary">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50/50" 
                    placeholder="john@example.com" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-semibold text-secondary">What are you looking for?</label>
                  <div className="relative">
                    <select 
                      name="queryType" 
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50/50 appearance-none cursor-pointer"
                    >
                      <option value="Full Demo">I want a full product demo</option>
                      <option value="Pricing Query">I have questions about pricing</option>
                      <option value="Feature Query">I want to know about a specific feature</option>
                      <option value="Other">Other / General Inquiry</option>
                    </select>
                    {/* Custom Arrow Icon */}
                    <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-semibold text-secondary">Your Message (Optional)</label>
                  <textarea 
                    name="message" 
                    rows={4} 
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-gray-50/50 resize-none" 
                    placeholder="Tell us more about your requirements..." 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full bg-primary text-white font-bold text-base sm:text-lg py-3 sm:py-4 rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Sending...
                    </span>
                  ) : "Send Request"}
                </button>

                {status === "error" && (
                  <p className="text-red-500 text-center text-xs sm:text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-100">
                    ⚠️ {message}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
