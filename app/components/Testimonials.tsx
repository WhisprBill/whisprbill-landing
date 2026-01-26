// app/components/Testimonials.tsx
"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Wholesale Distributor",
    company: "Kumar Traders",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "WhisprBill changed how we work. Bulk uploading inventory used to take days, now it's done in minutes. The batch tracking is a lifesaver for our pharma distribution.",
  },
  {
    name: "Sarah Jenkins",
    role: "Freelance Designer",
    company: "Creative Studio",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I love the AI chat feature! I just type 'Invoice client for logo design' and it's done. No more fiddling with templates manually.",
  },
  {
    name: "Amit Patel",
    role: "Owner",
    company: "Patel Electronics",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    text: "GST filing was a nightmare before. Now all my tax reports are ready automatically. The multi-tier pricing helps me manage retail and wholesale customers easily.",
  },
  {
    name: "Priya Sharma",
    role: "Operations Head",
    company: "Fresh Foods Ltd",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Inventory management is top-notch. The low stock alerts have saved us from running out of best-sellers multiple times.",
  },
  {
    name: "David Chen",
    role: "Consultant",
    company: "Growth Labs",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "Simple, fast, and effective. The mobile view is perfect for sending invoices on the go. Highly recommend it for any small business.",
  },
];

// Component for individual testimonial card - Responsive
function TestimonialCard({ item }: { item: typeof testimonials[0] }) {
  return (
    <div className="w-[280px] sm:w-[320px] md:w-[380px] flex-shrink-0 bg-gray-50 border border-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="mb-5 sm:mb-6">
        <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-base sm:text-lg">★</span>
          ))}
        </div>
        <p className="text-sm sm:text-base text-accent/80 leading-relaxed">
          "{item.text}"
        </p>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 mt-auto">
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
          <Image 
            src={item.image} 
            alt={item.name} 
            fill 
            className="object-cover" 
          />
        </div>
        <div>
          <h4 className="font-bold text-secondary text-sm sm:text-base">{item.name}</h4>
          <p className="text-xs text-gray-500">{item.role}, {item.company}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-12 lg:mb-16 text-center">
        <h2 className="text-primary font-bold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
          Customer Stories
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary px-4 sm:px-0">
          Trusted by modern businesses
        </h3>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Left/Right Fade Gradients - Responsive width */}
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 lg:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 lg:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track - Pause on hover, responsive speed */}
        <div className="flex gap-4 sm:gap-6 animate-marquee-scroll hover:animate-marquee-pause">
          {/* First Set */}
          <div className="flex gap-4 sm:gap-6 shrink-0">
            {testimonials.map((item, index) => (
              <TestimonialCard key={`first-${index}`} item={item} />
            ))}
          </div>
          
          {/* Duplicate Set (for seamless infinite loop) */}
          <div className="flex gap-4 sm:gap-6 shrink-0">
            {testimonials.map((item, index) => (
              <TestimonialCard key={`second-${index}`} item={item} />
            ))}
          </div>

          {/* Third Set (ensures no gaps on wide screens) */}
          <div className="flex gap-4 sm:gap-6 shrink-0">
            {testimonials.map((item, index) => (
              <TestimonialCard key={`third-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile-friendly note */}
      <div className="text-center mt-8 sm:mt-10 lg:mt-12 px-4">
        <p className="text-xs sm:text-sm text-accent/60 mb-4">
          Join 500+ businesses already using WhisprBill
        </p>
        <a 
          href="/app/signup" 
          className="inline-flex items-center gap-2 text-sm sm:text-base text-primary font-semibold hover:text-blue-700 transition-colors group"
        >
          <span>Start your free trial</span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
