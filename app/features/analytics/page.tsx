import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Business Analytics Dashboard - AI-Powered Insights | WhisprBill",
  description: "Transform invoicing data into actionable insights. AI-powered analytics show revenue trends, top customers, slow-moving inventory, and payment patterns. Make data-driven decisions without hiring analysts.",
  keywords: [
    "business analytics dashboard",
    "invoice analytics software",
    "revenue forecasting India",
    "customer insights dashboard",
    "inventory analytics",
    "payment tracking software"
  ],
  openGraph: {
    title: "AI-Powered Business Analytics - Data-Driven Decisions",
    description: "Visual dashboards track revenue growth, identify top customers, highlight slow inventory, and flag overdue payments automatically.",
    url: "https://whisprbill.com/features/analytics",
    images: [
      {
        url: "/og-analytics.png",
        width: 1200,
        height: 630,
        alt: "WhisprBill Analytics Dashboard",
      },
    ],
  },
  alternates: {
    canonical: "https://whisprbill.com/features/analytics",
  },
};

export default function AnalyticsPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "WhisprBill Business Analytics Dashboard",
            "applicationCategory": "BusinessApplication",
            "description": "AI-powered analytics dashboard that transforms raw invoicing data into actionable business intelligence with predictive insights",
            "operatingSystem": "Web browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            },
            "featureList": [
              "Revenue growth tracking",
              "Top customer identification",
              "Inventory turnover analysis",
              "Payment pattern monitoring",
              "Predictive revenue forecasting",
              "Automated payment alerts"
            ]
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What insights does the analytics dashboard provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The dashboard provides visual charts tracking month-over-month revenue growth, identifies top 10 customers by value, highlights slow-moving inventory, flags overdue payments, shows Days Sales Outstanding (DSO), inventory turnover ratios, and profit margins per product category."
                }
              },
              {
                "@type": "Question",
                "name": "Does WhisprBill offer revenue forecasting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! The system uses predictive analytics to forecast next month's revenue based on current trends and seasonal patterns. It helps you plan inventory, staffing, and cash flow proactively."
                }
              },
              {
                "@type": "Question",
                "name": "Can I get alerts for overdue payments?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. The system sends automated alerts when a customer's payment pattern changes or when invoices become overdue. You can set custom thresholds and notification preferences."
                }
              }
            ]
          })
        }}
      />

      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-indigo-500/10 rounded-full text-indigo-700 font-semibold text-sm mb-6">
                  📊 AI-Powered Analytics
                </div>
                
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-secondary mb-6 leading-tight">
                  Intelligent Business Insights, <span className="text-primary">Not Just Data Storage</span>
                </h1>
                
                <p className="text-xl text-accent/80 mb-8 leading-relaxed">
                  Stop drowning in spreadsheets. Our AI-powered analytics dashboard transforms your raw invoicing data into actionable business intelligence. Instantly see which products are flying off shelves, which customers drive revenue, and where your cash is stuck—all without hiring a data analyst.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/pricing"
                    className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg text-center"
                  >
                    Start Free Trial
                  </Link>
                  <a
                    href="#dashboard-features"
                    className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-colors border-2 border-primary text-center"
                  >
                    Explore Dashboard ↓
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Real-time insights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Predictive analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Automated alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Visual reports</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-4 border border-gray-100">
                  <Image
                    src="/wbill-dashboard.png"
                    alt="WhisprBill Business Analytics Dashboard"
                    width={800}
                    height={600}
                    className="rounded-2xl"
                    priority
                  />
                </div>
                
                {/* Floating metrics */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="text-2xl font-bold text-green-600">+23%</div>
                  <div className="text-xs text-accent/70">Revenue growth</div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="text-2xl font-bold text-primary">15 hrs</div>
                  <div className="text-xs text-accent/70">Saved weekly</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Features */}
        <section id="dashboard-features" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              What You Can Track & Analyze
            </h2>
            <p className="text-center text-accent/70 mb-16 max-w-2xl mx-auto">
              Everything you need to make data-driven decisions in one visual dashboard
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "📈",
                  title: "Revenue Growth Tracking",
                  description: "Visual charts show month-over-month and year-over-year revenue trends. Identify growth patterns and seasonal fluctuations instantly.",
                  metrics: ["MoM growth %", "YoY comparison", "Seasonal trends"]
                },
                {
                  icon: "👥",
                  title: "Top Customer Analysis",
                  description: "Identify your top 10 customers by revenue, order frequency, and profit margins. Focus on relationships that matter most.",
                  metrics: ["Revenue per customer", "Order frequency", "Lifetime value"]
                },
                {
                  icon: "📦",
                  title: "Inventory Intelligence",
                  description: "Highlight slow-moving inventory, best-sellers, and stock reorder points. Optimize inventory investment automatically.",
                  metrics: ["Turnover ratios", "Stock levels", "Reorder alerts"]
                },
                {
                  icon: "💰",
                  title: "Payment Pattern Monitoring",
                  description: "Track Days Sales Outstanding (DSO), overdue invoices, and customer payment behavior. Improve cash flow proactively.",
                  metrics: ["DSO tracking", "Overdue amounts", "Payment trends"]
                },
                {
                  icon: "🎯",
                  title: "Product Performance",
                  description: "See which products drive revenue and which drag margins down. Optimize pricing and product mix strategically.",
                  metrics: ["Profit margins", "Sales velocity", "Category analysis"]
                },
                {
                  icon: "🔮",
                  title: "Predictive Forecasting",
                  description: "AI forecasts next month's revenue based on historical trends and seasonal patterns. Plan inventory and staffing ahead.",
                  metrics: ["Revenue forecasts", "Demand prediction", "Trend analysis"]
                },
                {
                  icon: "🚨",
                  title: "Automated Alerts",
                  description: "Get notified when customer payment patterns change, stock hits reorder points, or margins drop below thresholds.",
                  metrics: ["Payment alerts", "Stock warnings", "Margin alerts"]
                },
                {
                  icon: "📊",
                  title: "Custom Reports",
                  description: "Generate detailed reports filtered by date range, customer, product, or category. Export to Excel for presentations.",
                  metrics: ["Custom filters", "Date ranges", "Excel export"]
                },
                {
                  icon: "💡",
                  title: "Business Recommendations",
                  description: "AI suggests actionable steps: which customers to upsell, which products to discount, and when to reorder stock.",
                  metrics: ["Upsell opportunities", "Price optimization", "Inventory timing"]
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                  <p className="text-accent/80 text-sm mb-4 leading-relaxed">{feature.description}</p>
                  <div className="space-y-1">
                    {feature.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-accent/60">
                        <span className="text-primary">•</span>
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Metrics Explained */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              Key Business Metrics You'll Track
            </h2>
            <p className="text-center text-accent/70 mb-16 max-w-2xl mx-auto">
              Understand what these metrics mean and how they help your business
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  metric: "Days Sales Outstanding (DSO)",
                  definition: "Average number of days it takes to collect payment after a sale",
                  why: "Lower DSO = Better cash flow. Track this to identify slow-paying customers and improve collection processes.",
                  target: "Target: 30-45 days for B2B, 0-15 days for retail",
                  icon: "⏱️"
                },
                {
                  metric: "Inventory Turnover Ratio",
                  definition: "How many times you sell and replace inventory in a period",
                  why: "Higher ratio = Less capital tied in stock. Identifies fast-moving vs slow-moving products.",
                  target: "Target: 5-10x annually (varies by industry)",
                  icon: "🔄"
                },
                {
                  metric: "Customer Lifetime Value (CLV)",
                  definition: "Total revenue expected from a customer over their relationship with you",
                  why: "Focus on high-CLV customers for retention. Helps prioritize sales and marketing efforts.",
                  target: "Target: CLV should be 3x customer acquisition cost",
                  icon: "💎"
                },
                {
                  metric: "Gross Profit Margin",
                  definition: "Percentage of revenue left after deducting cost of goods sold",
                  why: "Shows pricing effectiveness and cost control. Track per product to optimize pricing strategy.",
                  target: "Target: 20-40% for most businesses",
                  icon: "💵"
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">{item.metric}</h3>
                      <p className="text-sm text-accent/70 italic">{item.definition}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-secondary mb-1">Why it matters:</p>
                      <p className="text-sm text-accent/80">{item.why}</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                      <p className="text-sm font-semibold text-primary">{item.target}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real-World Use Cases */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              How Businesses Use Analytics to Grow
            </h2>

            <div className="space-y-8">
              {[
                {
                  business: "Electronics Retailer",
                  challenge: "Didn't know which products were profitable",
                  solution: "Used profit margin analysis to discover that laptop accessories had 60% margins vs 12% on laptops",
                  result: "Increased accessories promotion, boosted overall profit by 18% without increasing sales volume",
                  icon: "💻"
                },
                {
                  business: "Textile Wholesaler",
                  challenge: "Cash flow issues due to late payments",
                  solution: "Set up DSO tracking and automated payment reminders for customers crossing 45 days",
                  result: "Reduced average DSO from 67 days to 38 days, improving cash flow by ₹12 lakhs monthly",
                  icon: "👔"
                },
                {
                  business: "Restaurant Supply Chain",
                  challenge: "Overstocking some items, running out of others",
                  solution: "Used inventory turnover analytics and reorder alerts based on sales velocity",
                  result: "Reduced inventory carrying costs by 22% while eliminating stockouts",
                  icon: "🍽️"
                },
              ].map((story, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8 border border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{story.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-1">{story.business}</h3>
                      <p className="text-sm text-accent/70">Real customer success story</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div>
                      <p className="text-xs font-semibold text-red-600 mb-1">Challenge:</p>
                      <p className="text-sm text-accent/80">{story.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-blue-600 mb-1">Solution:</p>
                      <p className="text-sm text-accent/80">{story.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-green-600 mb-1">Result:</p>
                      <p className="text-sm text-accent/80 font-medium">{story.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Analytics That Make You Smarter
            </h2>

            <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-6 lg:p-8 mb-8">
              <h3 className="text-xl font-bold text-secondary mb-4">
                From Data to Decisions in Seconds
              </h3>
              <p className="text-accent/80 mb-4 leading-relaxed">
                Visual charts automatically track month-over-month revenue growth, identify your top 10 customers by value, highlight slow-moving inventory, and flag overdue payments before they become problems. See real-time metrics like Days Sales Outstanding (DSO), inventory turnover ratios, and profit margins per product category.
              </p>
              <p className="text-accent/80 leading-relaxed">
                The system uses predictive analytics to forecast next month's revenue based on current trends and seasonal patterns. Get automated alerts when a customer's payment pattern changes or when stock levels hit reorder points. Perfect for business owners who want to make data-driven decisions without needing an MBA in finance.
              </p>
            </div>

            <div className="bg-green-50/50 border border-green-100 rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Discover Hidden Revenue Opportunities
              </h3>
              <p className="text-accent/80 leading-relaxed">
                Most users discover hidden revenue opportunities within their first week of using the dashboard—whether it's upselling to high-value customers, discontinuing unprofitable products, or optimizing pricing strategies based on demand patterns. The analytics engine works silently in the background, turning every invoice into actionable intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "What insights does the analytics dashboard provide?",
                  a: "The dashboard provides visual charts tracking month-over-month revenue growth, identifies top 10 customers by value, highlights slow-moving inventory, flags overdue payments, shows Days Sales Outstanding (DSO), inventory turnover ratios, and profit margins per product category."
                },
                {
                  q: "Does WhisprBill offer revenue forecasting?",
                  a: "Yes! The system uses predictive analytics to forecast next month's revenue based on current trends and seasonal patterns. It helps you plan inventory, staffing, and cash flow proactively."
                },
                {
                  q: "Can I get alerts for overdue payments?",
                  a: "Absolutely. The system sends automated alerts when a customer's payment pattern changes or when invoices become overdue. You can set custom thresholds and notification preferences."
                },
                {
                  q: "How does inventory analytics help my business?",
                  a: "Inventory analytics shows turnover ratios, identifies slow-moving products, and alerts you when stock hits reorder points. This prevents both overstocking (capital waste) and stockouts (lost sales)."
                },
                {
                  q: "Can I export analytics reports?",
                  a: "Yes! Generate custom reports filtered by date range, customer, product, or category. Export to Excel for presentations, accounting software integration, or detailed analysis."
                },
                {
                  q: "Do I need data analysis skills to use the dashboard?",
                  a: "No! The dashboard is designed for business owners, not data scientists. All metrics are explained in plain language with visual charts. The AI even suggests actionable steps based on your data."
                }
              ].map((faq, index) => (
                <details key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 group">
                  <summary className="font-bold text-secondary cursor-pointer list-none flex justify-between items-center">
                    <span>{faq.q}</span>
                    <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-accent/80 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Works Seamlessly With Other Features
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Conversational Invoicing",
                  description: "Every AI-generated invoice feeds analytics automatically—no manual data entry",
                  link: "/features/ai-invoicing",
                  icon: "💬"
                },
                {
                  title: "Customer Management",
                  description: "Analytics identify top customers automatically for targeted retention campaigns",
                  link: "/features/customer-management",
                  icon: "👥"
                },
                {
                  title: "Multi-Company Management",
                  description: "Get separate analytics dashboards per company or consolidated reports across all",
                  link: "/features/multi-company",
                  icon: "🏢"
                },
              ].map((feature, index) => (
                <Link
                  key={index}
                  href={feature.link}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-accent/70 mb-3">{feature.description}</p>
                  <div className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Turn Your Invoicing Data Into Growth
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join 5,000+ businesses making smarter decisions with AI-powered analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/pricing"
                className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start Free Trial - No Credit Card Required
              </Link>
              <Link
                href="/features"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                Explore All Features
              </Link>
            </div>
            <p className="text-sm opacity-75">
              ✓ Real-time insights  ✓ Predictive forecasting  ✓ Automated alerts
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
