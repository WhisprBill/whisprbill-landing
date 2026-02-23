import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: "💬",
    title: "AI Conversational Invoicing",
    description: "Create invoices by chatting: 'Invoice Sharma Enterprises for ₹45,000 with 18% GST'. Done in 10 seconds.",
    link: "/features/ai-invoicing",
    image: "/wbill-chatwithai.png",
  },
  {
    icon: "📄",
    title: "Professional Templates",
    description: "50+ industry-specific invoice templates. GST-compliant, customizable, stunning.",
    link: "/features/templates",
    image: "/Wbill-Templates.png",
  },
  {
    icon: "🇮🇳",
    title: "100% GST Compliance",
    description: "Auto-calculate taxes, generate GSTR reports, E-invoices, and E-way bills instantly.",
    link: "/features/gst-compliance",
    image: "/wbill-gstcompliance.jpeg",
  },
  {
    icon: "📊",
    title: "Business Analytics",
    description: "AI-powered insights show revenue trends, top customers, and payment patterns.",
    link: "/features/analytics",
    image: "/wbill-dashboard.png",
  },
  {
    icon: "🏢",
    title: "Multi-Company Management",
    description: "Run up to 10 businesses from one account with separate inventory and reports.",
    link: "/features/multi-company",
    image: "/wbill-multicompany.jpeg",
  },
  {
    icon: "👥",
    title: "Unlimited Customers",
    description: "Store unlimited customers with full contact history—even on the free plan.",
    link: "/features/customer-management",
    image: "/wbill-customers.jpeg",
  },
];

export default function FeaturesOverview() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
            Powerful Features
          </h2>
          <h3 className="text-4xl font-extrabold text-secondary mb-4">
            Built for Modern Businesses
          </h3>
          <p className="text-lg text-accent/70 max-w-2xl mx-auto">
            From startups to enterprises—tools that scale with your growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.link}
              className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              <h4 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h4>

              <p className="text-accent/80 mb-4 text-sm leading-relaxed">
                {feature.description}
              </p>

              <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                Learn more
                <span className="group-hover:translate-x-1 transition-transform ml-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg"
          >
            Explore All Features in Detail
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
