"use client";

import { useState, useEffect, useRef } from "react";

const steps = [
  {
    id: 1,
    step: "01",
    title: "Chat Naturally",
    shortDesc: "Talk to your invoice assistant like a human.",
    fullDesc:
      "No forms, no dropdowns. Just type 'Create an invoice for Stark Industries for $1200 for web development' and our AI extracts details instantly.",
    icon: "💬",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    step: "02",
    title: "Review & Refine",
    shortDesc: "AI generates a draft. You perfect it.",
    fullDesc:
      "See your invoice instantly. Want to add a discount? Say 'Apply 10% off.' Need manual control? Switch to edit mode and tweak every detail until it's pixel-perfect.",
    icon: "✍️",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    step: "03",
    title: "Export & Share",
    shortDesc: "One-click PDF. Share anywhere.",
    fullDesc:
      "Generate a professional, branded PDF in seconds. Share directly via WhatsApp, Email, or download for your records. Your client gets it instantly.",
    icon: "🚀",
    color: "from-green-500 to-emerald-500",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-cycle logic (pauses on hover)
  useEffect(() => {
    if (hoveredStep !== null) return; // Pause if user is interacting

    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev === 3 ? 1 : prev + 1));
    }, 4000); // 4 seconds per step

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hoveredStep]);

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-background to-white relative overflow-hidden">
      
      {/* Background Decor - Hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hidden sm:block absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header - Responsive */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-primary font-bold uppercase text-xs sm:text-sm mb-2 sm:mb-3 flex items-center justify-center gap-2">
            <span className="w-6 sm:w-8 h-0.5 bg-primary"></span>
            Simple Workflow
            <span className="w-6 sm:w-8 h-0.5 bg-primary"></span>
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary leading-tight px-4 sm:px-0">
            Invoicing in <span className="text-primary">3 easy steps.</span>
          </h3>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-accent/70 leading-relaxed px-4 sm:px-0">
            From conversation to professional invoice in under 30 seconds.
          </p>
        </div>

        {/* STEPS AREA - Responsive */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Progress Line (Background) - Hidden on mobile/tablet */}
          <div className="hidden lg:block absolute top-8 left-[16%] right-[16%] h-1 bg-gray-200 rounded-full -z-10"></div>
          
          {/* Progress Line (Animated Fill) - Hidden on mobile/tablet */}
          <div 
            className="hidden lg:block absolute top-8 left-[16%] h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full -z-10 transition-all duration-[1000ms] ease-linear shadow-[0_0_10px_rgba(0,114,233,0.6)]"
            style={{
               width: activeStep === 1 ? '0%' : activeStep === 2 ? '34%' : '68%' 
            }}
          ></div>

          {/* Grid - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {steps.map((item, index) => {
              const isCurrent = activeStep === item.id;
              const isFlipped = hoveredStep === item.id; // Flip only on hover
              
              return (
                <div 
                   key={item.id} 
                   className="relative flex flex-col items-center group perspective-1000"
                   onMouseEnter={() => {
                     setHoveredStep(item.id);
                     setActiveStep(item.id);
                   }}
                   onMouseLeave={() => setHoveredStep(null)}
                   onClick={() => {
                     // Mobile tap to flip
                     if (hoveredStep === item.id) {
                       setHoveredStep(null);
                     } else {
                       setHoveredStep(item.id);
                       setActiveStep(item.id);
                     }
                   }}
                >
                  
                  {/* --- BADGE (Flips between Number & Icon) --- Responsive */}
                  <div className={`
                    w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mb-6 sm:mb-8 relative z-20 transition-all duration-500 border-2 sm:border-4
                    ${isCurrent 
                      ? `bg-white text-primary border-primary scale-110 shadow-[0_0_20px_rgba(0,114,233,0.3)]` 
                      : 'bg-white text-gray-400 border-gray-100 shadow-sm'}
                  `}>
                     <div className="relative w-full h-full flex items-center justify-center">
                       {/* Number (Shows when NOT active) */}
                       <span className={`absolute text-sm sm:text-base lg:text-lg transition-all duration-500 ${isCurrent ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
                         {item.step}
                       </span>
                       {/* Icon (Shows when ACTIVE) */}
                       <span className={`absolute text-xl sm:text-2xl transition-all duration-500 ${isCurrent ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'}`}>
                         {item.icon}
                       </span>
                     </div>
                  </div>

                  {/* --- 3D FLIP CARD --- Responsive height */}
                  <div
                    className={`relative w-full h-[280px] sm:h-[300px] lg:h-[320px] transition-transform duration-700 preserve-3d cursor-pointer ${
                      isFlipped ? "rotate-y-180" : ""
                    }`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* FRONT SIDE - Responsive padding */}
                    <div
                      className={`absolute inset-0 backface-hidden bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 pt-8 sm:pt-10 shadow-lg border flex flex-col items-center text-center transition-all duration-500
                        ${isCurrent ? 'border-primary/40 shadow-xl scale-105' : 'border-gray-100 scale-100'}
                      `}
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      {/* Icon Bubble - Responsive */}
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${item.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 text-white shadow-md`}>
                        {item.icon}
                      </div>

                      <h4 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${isCurrent ? 'text-secondary' : 'text-gray-600'}`}>
                        {item.title}
                      </h4>
                      <p className="text-accent/70 leading-relaxed text-sm">
                        {item.shortDesc}
                      </p>

                      <div className="mt-auto text-xs text-primary font-semibold flex items-center gap-1 opacity-70">
                        <span className="hidden sm:inline">Hover for details</span>
                        <span className="sm:hidden">Tap for details</span>
                        <span className="text-lg">↻</span>
                      </div>
                    </div>

                    {/* BACK SIDE (Detailed Info) - Responsive padding */}
                    <div
                      className={`absolute inset-0 backface-hidden bg-gradient-to-br ${item.color} rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center text-white rotate-y-180 shadow-2xl`}
                      style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    >
                      <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 border-b border-white/20 pb-2 w-full">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed font-medium opacity-95">
                        {item.fullDesc}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* CTA - Responsive */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <a href="https://app.whisprbill.com/login" className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 bg-secondary text-white font-bold text-sm sm:text-base rounded-xl hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
            Start Free Forever
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>

      </div>
    </section>
  );
}


