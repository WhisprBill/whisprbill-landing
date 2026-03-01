"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Spotlight features data
const spotlightFeatures = [
  {
    id: "ai-invoicing",
    href: "/features/ai-invoicing",
    title: "Your AI Invoice Assistant That Speaks Your Language",
    description:
      "Forget navigating through endless menus and forms. Simply chat naturally: 'Create an invoice for Sharma Enterprises for â‚¹45,000 with 18% GST' and watch your invoice appear instantly. It's invoicing that feels like texting a colleague.",
    details:
      "Our advanced AI engine understands context, intent, and business terminology in plain English. Say 'Add 5% trade discount' or 'Change payment terms to Net 30' and it happens in real-time. Need to create a proforma invoice instead? Just ask. Want to add batch numbers to pharmacy items? Simply mention it. The AI remembers your business preferences, customer details, and product catalogsâ€”so you never have to repeat information. It's like having a trained accountant who knows your business inside-out, available 24/7, never takes breaks, and works at the speed of thought. Within minutes of your first conversation, you'll create professional invoices that used to take 20+ minutes of manual data entry.",
    icon: "ðŸ’¬",
    image: "/wbill-chatwithai.png",
  },
  {
    id: "templates",
    href: "/features/templates",
    title: "Professional Templates for Every Business Type",
    description:
      "Choose from 50+ beautifully designed invoice templates spanning every industryâ€”from minimalist designs for tech startups to detailed formats for construction firms. Each template is GST-compliant, fully customizable, and looks stunning on any device or printer.",
    details:
      "Stop sending boring, generic invoices. Our template library includes specialized formats for Retail, Wholesale, Services, Manufacturing, Healthcare, Real Estate, Hospitality, and more. Each template follows industry best practices: Service invoices with hourly breakdowns, Product invoices with SKU codes, Proforma invoices for advance orders, Tax invoices with detailed GST breakdowns, Credit/Debit notes for returns, Quotations and Estimates, Delivery Challans, and Purchase Orders. Customize colors, fonts, logos, and layouts in minutes using our drag-and-drop editorâ€”no design skills needed. Add custom fields for industry-specific information like vehicle numbers for transporters or patient IDs for clinics. Set your preferred template as default and never worry about formatting again. Preview exactly how your invoice will look before sending. Export to PDF, print directly, or share via WhatsApp/Email with one click. New templates are added monthly based on user requestsâ€”we've already released templates for Event Management, Photography, Consulting, Legal Services, and Educational Institutions. Coming soon: Multi-language templates in Hindi, Tamil, Telugu, and more regional languages. One fashion boutique owner told us: 'Clients now compliment our invoicesâ€”something I never imagined possible!' Professional presentation builds trust and gets you paid faster.",
    icon: "ðŸ“„",
    image: "/Wbill-Templates.png",
  },
  {
    id: "analytics",
    href: "/features/analytics",
    title: "Intelligent Business Insights, Not Just Data Storage",
    description:
      "Stop drowning in spreadsheets. Our AI-powered analytics dashboard transforms your raw invoicing data into actionable business intelligence. Instantly see which products are flying off shelves, which customers drive revenue, and where your cash is stuckâ€”all without hiring a data analyst.",
    details:
      "Visual charts automatically track month-over-month revenue growth, identify your top 10 customers by value, highlight slow-moving inventory, and flag overdue payments before they become problems. See real-time metrics like Days Sales Outstanding (DSO), inventory turnover ratios, and profit margins per product category. The system uses predictive analytics to forecast next month's revenue based on current trends and seasonal patterns. Get automated alerts when a customer's payment pattern changes or when stock levels hit reorder points. Perfect for business owners who want to make data-driven decisions without needing an MBA in finance. Most users discover hidden revenue opportunities within their first week of using the dashboardâ€”whether it's upselling to high-value customers, discontinuing unprofitable products, or optimizing pricing strategies based on demand patterns.",
    icon: "ðŸ“Š",
    image: "/wbill-dashboard.png",
  },
];

// Advanced features data
const advancedFeatures = [
  {
    id: "bulk",
    href: "/features/bulk-import",
    title: "Lightning-Fast Bulk Import",
    description:
      "Migrating from another system? Upload your entire customer database and product catalog in seconds. Supports Excel, CSV, and Google Sheets with intelligent field mapping that learns from your data structure.",
    detailedInfo:
      "Our smart importer automatically detects column headers and maps them to the correct fieldsâ€”no manual configuration needed. Import 10,000 products with variants, pricing tiers, and HSN codes in under 2 minutes. The system validates data in real-time, flagging duplicates and formatting errors before they cause issues. Supports batch updates too: need to increase prices by 10% across 500 items? Upload a CSV and it's done. Includes rollback protectionâ€”if something looks wrong, undo the entire import with one click. Perfect for businesses switching from Tally, Excel, or legacy systems without IT expertise.",
    icon: "ðŸ“‚",
    image: "/wbill-bulkupload2.png",
  },
  {
    id: "customers",
    href: "/features/customer-management",
    title: "Unlimited Customer Management",
    description:
      "Add unlimited customers even on the Free planâ€”no artificial caps on your growth. Store complete contact details, billing addresses, payment terms, and transaction history. Organize customers with custom tags and categories for targeted campaigns.",
    detailedInfo:
      "Unlike competitors who charge per contact, we believe customer data should be unlimited from day one. Store names, phone numbers, emails, GSTIN, billing/shipping addresses, credit limits, payment terms (Net 30, COD, etc.), and custom notes. Tag customers as 'VIP', 'Wholesale', 'Retail', or create your own categories. View complete transaction history: total sales, pending payments, average order value, and purchase frequency. Search and filter customers instantly even with 10,000+ records. Migrating from another system? Our bulk import tool handles CSV/Excel files with automatic field mappingâ€”upload 5,000 customers with full details in under 60 seconds. The system validates GSTINs in real-time using government APIs and flags duplicates before import. Export customer lists anytime for backup or external analysis. Set credit limits and get alerts when customers exceed them. Track communication history: when you last contacted them, quotes sent, pending follow-ups. Segment customers for targeted WhatsApp campaigns: send festive offers to 'VIP' customers or stock clearance alerts to 'Retail' only. One distributor managing 8,000+ customer records told us: 'Finally, a system that doesn't charge me extra for growing my business.' Customer data syncs across devices in real-timeâ€”add a customer on mobile, invoice them instantly from desktop.",
    icon: "ðŸ‘¥",
    image: "/wbill-customers.jpeg",
  },
  {
    id: "multi-company",
    href: "/features/multi-company",
    title: "Multi-Company Management",
    description:
      "Run multiple businesses from a single accountâ€”each with its own customers, inventory, and financial reports. Switch between companies in one click without logging out. Perfect for entrepreneurs managing multiple brands, franchises, or separate business entities.",
    detailedInfo:
      "Manage up to 10 companies under one loginâ€”no need to juggle multiple accounts or pay for separate subscriptions. Each company operates completely independently with its own customer database, product catalog, invoice numbering, GST settings, and financial reports. Data never mixes: invoices created for Company A won't appear in Company B's records. Switch between companies instantly from the dashboardâ€”select 'Electronics Store' in the morning, 'Consulting Firm' in the afternoon. Perfect for: Franchise owners managing multiple locations, Entrepreneurs running parallel ventures (e.g., retail + services), Holding companies overseeing subsidiary businesses, Accountants/CAs managing client books, Business owners with different GSTINs for different states. Each company has its own branding: upload separate logos, letterheads, and invoice templates per business. Set different pricing tiers, payment terms, and tax settings for each entity. Generate consolidated reports across all companies or individual P&L statements per business. User access control: assign employees to specific companies onlyâ€”your warehouse manager sees Retail inventory, not Consulting data. Import customers and products separately for each company using bulk upload. One user managing 6 retail outlets told us: 'I can finally see which store is profitable and which needs attentionâ€”all from one screen.' Switch seamlessly, stay organized, grow fearlessly.",
    icon: "ðŸ¢",
    image: "/wbill-multicompany.jpeg",
  },
  {
    id: "variants-pricing",
    href: "/features/variants-pricing",
    title: "Smart Variants & Dynamic Pricing",
    description:
      "Sell products in multiple sizes, colors, or configurations? Create one master product with unlimited variantsâ€”each with its own SKU, stock level, and pricing. Combine this with multi-tier pricing to charge different rates to Retailers, Wholesalers, and VIP customers automatically.",
    detailedInfo:
      "Product Variants: Define custom attributes beyond Size/Colorâ€”Flavor, Grade, Voltage, Model, Finish, Material. Sell shirts in 5 sizes Ã— 8 colors = 40 variants managed as one product. Each variant gets its own SKU, barcode, stock quantity, and pricing. Bulk-edit variants: increase prices for all 'XL' sizes across 50 designs in one action. Import variants from Excel using our template system. Track inventory at variant level: see that 'Blue Medium' is low stock while 'Blue Large' is overstocked. Variant-level images help customers identify exactly what they're ordering. Perfect for Apparel (Size/Color), Footwear (Size/Style), Electronics (Model/Capacity), Furniture (Material/Finish), FMCG (Pack Size/Flavor). One footwear retailer manages 2,400 SKUs (200 designs Ã— 12 sizes) effortlessly.\n\nDynamic Pricing Tiers: Create unlimited price lists with custom names: VIP, Regular, Wholesale, Distributor, Export, Retail. Assign customers to tiers once; every invoice automatically uses their pricingâ€”no manual calculation. Set tier-specific discounts by percentage or fixed amount per product/variant. Supports time-based pricing: run Diwali discounts without changing base prices. Quantity-based pricing: automatically give 15% off when order exceeds â‚¹50,000. Override pricing on individual invoices for special negotiations. Track pricing effectiveness with built-in analytics showing margins per tier. Import pricing across 1000+ products via Excel in minutes. The system alerts you when margins drop below thresholds to prevent under-pricing. One textile distributor increased margins by 3.2% by optimizing tier structures. Variants + Pricing = Ultimate flexibility for complex catalogs.",
    icon: "ðŸ’Ž",
    image: "/wbill-variantspricing.jpeg",
  },
  {
    id: "gst",
    href: "/features/gst-compliance",
    title: "100% GST Compliance Guarantee",
    description:
      "Stay fully compliant with Indian tax regulations. Auto-calculate CGST, SGST, IGST based on buyer location. Generate GSTR-1, GSTR-3B reconciliation reports instantly. Supports reverse charge, e-invoicing, and E-way bills.",
    detailedInfo:
      "The system automatically determines tax type: CGST+SGST for intra-state, IGST for inter-state transactions. Supports all GST rates: 0%, 5%, 12%, 18%, 28%, and cess items. Validates GSTIN in real-time using government APIs. Generates JSON files ready for upload to GST portalâ€”no manual data entry. E-invoice generation with NIC integration for B2B transactions over â‚¹5 crores turnover. One-click E-way bill creation with automatic distance calculation and validity computation. Reverse charge mechanism for unregistered vendors handled automatically. Comprehensive reports: HSN-wise summary, tax liability statements, input credit ledgers. Monthly reconciliation tools match your data with GSTR-2A to catch discrepancies before filing. Tax rate changes? Update centrally and all future invoices reflect new rates. Trusted by 5,000+ businesses including CA firms who verify GST complianceâ€”zero penalties reported in 2+ years.",
    icon: "ðŸ‡®ðŸ‡³",
    image: "/wbill-gstcompliance.jpeg",
  },
];

export default function FeaturesPage() {
  const [modalContent, setModalContent] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-blue-100 via-purple-100 to-transparent relative overflow-hidden">
          {/* Background elements matching homepage */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] lg:w-[1000px] h-[400px] sm:h-[500px] lg:h-[600px] bg-blue-200/40 rounded-full blur-3xl animate-float" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-primary font-bold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
              Powerful Features, Simple Interface
            </h2>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-4 sm:mb-6 leading-tight px-4 sm:px-0">
              AI invoicing and GST billing features for Indian businesses.{" "}
              <br className="hidden sm:block" />
              <span className="text-primary">Built for MSMEs, freelancers, and growing teams.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-accent/80 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              From AI invoice automation to GST-compliant templates, analytics, and customer workflows - everything you need in one billing software stack.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link
                href="/pricing"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white text-base sm:text-lg font-bold rounded-xl shadow-lg hover:bg-blue-600 transition-all transform hover:-translate-y-1"
              >
                Start Free Trial
              </Link>
              <Link
                href="/how-it-works"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-text border-2 border-gray-200 text-base sm:text-lg font-bold rounded-xl hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </section>

        {/* Spotlight Features - Zig-zag layout */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="space-y-16 sm:space-y-24 lg:space-y-32">
              {spotlightFeatures.map((feature, index) => (
                <div
                  key={feature.id}
                  onClick={() => router.push(feature.href)}
                  className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-24 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  } cursor-pointer`}
                >
                  {/* Text Content */}
                  <div className="flex-1 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-3 sm:mb-4 px-4 sm:px-0">
                        {feature.title}
                      </h3>
                      <p className="text-base sm:text-lg text-accent/80 leading-relaxed px-4 sm:px-0">
                        {feature.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalContent(feature);
                        }}
                        className="text-primary font-bold text-base sm:text-lg hover:text-blue-700 transition-colors inline-flex items-center gap-2 group"
                      >
                        Learn how this saves you hours
                        <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
                      </button>
                      <Link
                        href={feature.href}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/10"
                      >
                        Open feature page
                      </Link>
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="flex-1 w-full px-4 sm:px-0">
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border border-gray-100 p-2 sm:p-3 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                      <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-gray-50 relative border border-gray-100">
                        <div className="relative w-full h-auto">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            width={1600}
                            height={1000}
                            className="w-full h-auto"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Advanced Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16 px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 sm:mb-4">
                Advanced features that give you the competitive edge
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-accent/70 max-w-2xl mx-auto">
                From multi-company management to GST complianceâ€”industry-specific tools that solve real business problems, not generic features.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
              {/* LEFT: Scrollable Feature List */}
              <div className="w-full lg:w-2/5 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-100">
                <div className="space-y-3 max-h-[600px] lg:max-h-[700px] overflow-y-auto pr-2">
                  {advancedFeatures.map((feature, index) => (
                    <div
                      key={feature.id}
                      onClick={() => setActiveTab(index)}
                      className={`group cursor-pointer rounded-xl p-4 transition-all duration-300 border text-left
                        ${
                          activeTab === index
                            ? "bg-primary/5 border-primary/30 shadow-sm"
                            : "bg-transparent border-gray-100 hover:bg-gray-50 hover:border-primary/20"
                        }
                      `}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-all shrink-0
                            ${
                              activeTab === index
                                ? "bg-primary text-white shadow-md"
                                : "bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary"
                            }
                          `}
                        >
                          {feature.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4
                            className={`text-base font-bold transition-colors mb-1
                              ${
                                activeTab === index
                                  ? "text-primary"
                                  : "text-gray-700 group-hover:text-secondary"
                              }
                            `}
                          >
                            {feature.title}
                          </h4>

                          <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                            {feature.description}
                          </p>

                          {/* Expandable detailed description */}
                          <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out
                              ${
                                activeTab === index
                                  ? "max-h-96 opacity-100"
                                  : "max-h-0 opacity-0"
                              }
                            `}
                          >
                            <div className="mt-1 flex flex-wrap items-center gap-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setModalContent(advancedFeatures[index]);
                                }}
                                className="text-primary text-xs font-semibold hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                              >
                                Read full details
                                <span className="text-xs">-&gt;</span>
                              </button>
                              <Link
                                href={feature.href}
                                onClick={(e) => e.stopPropagation()}
                                className="rounded-full border border-primary/25 bg-primary/5 px-2.5 py-1 text-[11px] font-semibold text-primary hover:bg-primary/10"
                              >
                                Open page
                              </Link>
                            </div>
                          </div>
                        </div>

                        {activeTab === index && (
                          <div className="w-1 h-10 bg-primary rounded-full shrink-0" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: Full-Height Image Display */}
              <div className="w-full lg:w-3/5 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-100">
                <div
                  onClick={() => router.push(advancedFeatures[activeTab].href)}
                  className="relative cursor-pointer bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl overflow-hidden"
                >
                  <div className="relative w-full aspect-[3/2]">
                    {advancedFeatures.map((feature, index) => (
                      <div
                        key={feature.id}
                        className={`absolute inset-0 transition-all duration-700 ease-out
                          ${
                            activeTab === index
                              ? "opacity-100 scale-100 z-10"
                              : "opacity-0 scale-95 z-0 pointer-events-none"
                          }
                        `}
                      >
                        <div className="relative w-full h-full p-3 sm:p-4">
                          <div className="relative w-full h-full bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 60vw"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Caption */}
                  <div className="bg-white/95 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-100">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm sm:text-base font-bold text-secondary truncate">
                          {advancedFeatures[activeTab].title}
                        </h5>
                        <p className="text-xs text-gray-500 truncate">
                          Live feature preview
                        </p>
                      </div>
                      <div className="shrink-0 flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setModalContent(advancedFeatures[activeTab]);
                          }}
                          className="px-3 sm:px-4 py-2 bg-primary text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
                        >
                          Learn More
                        </button>
                        <Link
                          href={advancedFeatures[activeTab].href}
                          onClick={(e) => e.stopPropagation()}
                          className="px-3 sm:px-4 py-2 bg-white text-primary border border-primary/20 text-xs sm:text-sm font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                        >
                          Open Page
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Features Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-12 lg:mb-14">
              <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-semibold mb-4">
                Coming Soon
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary mb-4">
                The roadmap we're building next
              </h2>
              <p className="text-base sm:text-lg text-accent/70 max-w-2xl mx-auto px-4 sm:px-0">
                We ship fast, but we communicate even faster. Here's what we're actively working on for the next versions of WhisprBill.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
              {/* WhatsApp Integration */}
              <div className="rounded-xl sm:rounded-2xl border border-gray-100 bg-gradient-to-br from-green-50/60 to-white p-6 lg:p-7 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-green-500 flex items-center justify-center text-white text-2xl">
                    ðŸ’¬
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-secondary">
                      WhatsApp-native invoicing
                    </h3>
                    <p className="text-xs text-green-700 font-semibold uppercase tracking-wide">
                      In active development
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-accent/80 leading-relaxed mb-3">
                  Create and share invoices directly from WhatsApp by chatting with WhisprBotâ€”no need to open the app every time.
                </p>
                <p className="text-xs sm:text-sm text-accent/70 leading-relaxed">
                  Multiple businesses have specifically asked for this workflow: 
                  type "Invoice Raj Traders for yesterday's order" in WhatsApp, let the bot prepare the invoice using your existing catalog and tax rules, and get a ready-to-share PDF in the same chatâ€”plus an option to send it to your customer instantly.
                </p>
              </div>

              {/* Voice-first invoicing */}
              <div className="rounded-xl sm:rounded-2xl border border-gray-100 bg-gradient-to-br from-blue-50/60 to-white p-6 lg:p-7 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500 flex items-center justify-center text-white text-2xl">
                    ðŸŽ™ï¸
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-secondary">
                      Voice-first invoice creation
                    </h3>
                    <p className="text-xs text-blue-700 font-semibold uppercase tracking-wide">
                      On our near-term roadmap
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-accent/80 leading-relaxed mb-3">
                  Speak your invoice instead of typing it. Say it once, let WhisprBill handle the structure, math, and compliance.
                </p>
                <p className="text-xs sm:text-sm text-accent/70 leading-relaxed">
                  Imagine: "Create an invoice for Mehta Medicals for 12 strips of Crocin at â‚¹45 each with 12% GST, due in 7 days."  
                  The system will convert your voice into a structured request, run the same deterministic validations and GST rules used today, and present a ready-to-review invoice before you send it.
                </p>
              </div>

              {/* Future of Privacy */}
              <div className="rounded-xl sm:rounded-2xl border border-gray-100 bg-gradient-to-br from-slate-50/80 to-white p-6 lg:p-7 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-white text-2xl">
                    ðŸ›¡ï¸
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-secondary">
                      Nextâ€‘gen private AI engine
                    </h3>
                    <p className="text-xs text-slate-700 font-semibold uppercase tracking-wide">
                      Exploring & prototyping
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-accent/80 leading-relaxed mb-3">
                  Today we use techniques like PII masking so sensitive details never reach the AI layer. Over time, we want to push privacy even further.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-accent/70 leading-relaxed">
                  <li>
                    <span className="font-semibold text-secondary">Own-model direction.</span> 
                    Our long-term goal is to move towards models trained from scratch on infrastructure we control, so your data never leaves our environment even at the AI layer.
                  </li>
                  <li>
                    <span className="font-semibold text-secondary">Stronger isolation.</span> 
                    Combined with the current deterministic backend, this would give us end-to-end control over how every token of data is processed.
                  </li>
                  <li>
                    <span className="font-semibold text-secondary">Local-first possibilities.</span> 
                    We're also exploring whether parts of this intelligence can eventually run on your own device for an extra layer of privacyâ€”no promises yet, but it's a direction we're actively evaluating.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 text-center">
              <p className="text-xs text-accent/60 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                Roadmaps can change as we learn from customers. These features represent our current direction, not fixed launch datesâ€”we'll always prioritise stability, compliance, and privacy over rushing a release.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-4 sm:mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-base sm:text-lg text-accent/80 mb-6 sm:mb-8">
              Join 5,000+ businesses already transforming their invoicing workflow
            </p>
            <Link
              href="/pricing"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white text-base sm:text-lg font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg transform hover:-translate-y-1"
            >
              Start Free Trial - No Credit Card Required
            </Link>
          </div>
        </section>
      </main>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 sm:px-8 py-4 sm:py-5 z-10">
              <button
                onClick={() => setModalContent(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 text-xl hover:bg-gray-100 rounded-lg transition-colors"
              >
                âœ•
              </button>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl sm:text-3xl text-primary shrink-0">
                  {modalContent.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-secondary pr-8">
                  {modalContent.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto max-h-[calc(90vh-180px)] px-6 sm:px-8 py-6">
              <div className="prose prose-sm sm:prose-base max-w-none">
                <p className="text-sm sm:text-base text-accent/90 leading-relaxed mb-6">
                  {modalContent.description}
                </p>

                {(modalContent.details || modalContent.detailedInfo) && (
                  <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 sm:p-5 mb-6">
                    <h4 className="text-sm font-bold text-secondary mb-3 flex items-center gap-2">
                      <span className="text-primary">ðŸ’¡</span>
                      How it works in practice:
                    </h4>
                    <p className="text-xs sm:text-sm text-accent/80 leading-relaxed whitespace-pre-line">
                      {modalContent.details || modalContent.detailedInfo}
                    </p>
                  </div>
                )}

                {/* Benefits callout */}
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6">
                  <h4 className="text-sm font-bold text-secondary mb-3 flex items-center gap-2">
                    <span>âœ“</span>
                    Key Benefits:
                  </h4>
                  <ul className="text-xs sm:text-sm text-accent/80 space-y-2">
                    {modalContent.id === "bulk" && (
                      <>
                        <li>â€¢ Save 40+ hours during system migration</li>
                        <li>â€¢ Zero data entry errors with auto-validation</li>
                        <li>â€¢ Start invoicing on day one, not week four</li>
                      </>
                    )}
                    {modalContent.id === "customers" && (
                      <>
                        <li>â€¢ No limits on growthâ€”unlimited customers forever</li>
                        <li>â€¢ Migrate 5,000+ customers in under 60 seconds</li>
                        <li>â€¢ Real-time GSTIN validation prevents errors</li>
                      </>
                    )}
                    {modalContent.id === "multi-company" && (
                      <>
                        <li>â€¢ Manage up to 10 businessesâ€”one login, zero confusion</li>
                        <li>â€¢ No extra subscriptionsâ€”save â‚¹10,000+ annually</li>
                        <li>â€¢ Switch companies in one click, data never mixes</li>
                      </>
                    )}
                    {modalContent.id === "variants-pricing" && (
                      <>
                        <li>â€¢ Manage 1000+ SKUs as easily as 10 products</li>
                        <li>â€¢ Eliminate pricing errorsâ€”save 3-5% margins</li>
                        <li>â€¢ Automate customer-specific pricing instantly</li>
                      </>
                    )}
                    {modalContent.id === "gst" && (
                      <>
                        <li>â€¢ Zero GST penalties with automated compliance</li>
                        <li>â€¢ File returns in 10 minutes instead of 3 days</li>
                        <li>â€¢ E-invoice & E-way bill generation in one click</li>
                      </>
                    )}
                    {!modalContent.id && modalContent.icon === "ðŸ“„" && (
                      <>
                        <li>â€¢ Professional presentation builds client trust</li>
                        <li>â€¢ New templates added monthly based on requests</li>
                        <li>â€¢ Get paid faster with polished, branded invoices</li>
                      </>
                    )}
                    {!modalContent.id && modalContent.icon === "ðŸ’¬" && (
                      <>
                        <li>â€¢ Save 15-20 hours per week on invoicing tasks</li>
                        <li>â€¢ Reduce errors by 95% with AI automation</li>
                        <li>â€¢ Get paid faster with professional invoices</li>
                      </>
                    )}
                    {!modalContent.id && modalContent.icon === "ðŸ“Š" && (
                      <>
                        <li>â€¢ Discover hidden revenue opportunities instantly</li>
                        <li>â€¢ Make data-driven decisions without analysts</li>
                        <li>â€¢ Prevent payment delays with automated alerts</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 sm:px-8 py-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setModalContent(null)}
                  className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors text-sm sm:text-base"
                >
                  Close
                </button>
                <Link
                  href={modalContent?.href ?? "/waitlist"}
                  className="flex-1 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors text-center shadow-lg shadow-blue-200 text-sm sm:text-base"
                >
                  {modalContent?.href ? "Open Full Feature Page" : "Join the Waitlist"}
                </Link>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setModalContent(null)}
          />
        </div>
      )}

      <Footer />
    </>
  );
}

