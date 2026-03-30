import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Smart Variants & Dynamic Pricing - Multi-Tier Product Management | WhisprBill",
  description: "Manage products in multiple sizes, colors, configurations. Create unlimited pricing tiers for VIP, Wholesale, Retail customers. Bulk price updates across 1000+ SKUs instantly.",
  keywords: [
    "product variant management India",
    "multi-tier pricing software",
    "wholesale pricing system",
    "dynamic pricing software",
    "SKU management tool",
    "customer-specific pricing"
  ],
  openGraph: {
    title: "Smart Variants & Dynamic Pricing - Flexible Product Management",
    description: "Sell products in multiple variants with custom pricing tiers. VIP, Wholesale, Retail pricing automated per customer.",
    url: "https://whisprbill.com/features/variants-pricing",
    images: [
      {
        url: "/og-variants-pricing.png",
        width: 1200,
        height: 630,
        alt: "WhisprBill Variants and Pricing Management",
      },
    ],
  },
  alternates: {
    canonical: "https://whisprbill.com/features/variants-pricing",
  },
};

export default function VariantsPricingPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "WhisprBill Variants & Pricing Management",
            "applicationCategory": "BusinessApplication",
            "description": "Advanced product variant and multi-tier pricing system for complex catalogs with customer-specific pricing automation",
            "operatingSystem": "Web browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            },
            "featureList": [
              "Unlimited product variants",
              "Multi-tier pricing (VIP, Wholesale, Retail)",
              "Customer-specific pricing automation",
              "Bulk price updates",
              "Variant-level inventory tracking",
              "Dynamic pricing rules"
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
                "name": "How do product variants work in WhisprBill?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Create one master product with unlimited variants (size, color, model, etc.). Each variant gets its own SKU, barcode, stock quantity, and pricing. Manage shirts in 5 sizes × 8 colors = 40 variants as one product."
                }
              },
              {
                "@type": "Question",
                "name": "Can I charge different prices to different customers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Create unlimited pricing tiers (VIP, Regular, Wholesale, Distributor, Export, Retail). Assign customers to tiers once, and every invoice automatically uses their pricing—no manual calculation needed."
                }
              },
              {
                "@type": "Question",
                "name": "How fast can I update prices across multiple products?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bulk-edit variant prices: increase prices for all 'XL' sizes across 50 designs in one action. Update pricing across 1000+ products via Excel import in minutes."
                }
              }
            ]
          })
        }}
      />

      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-violet-500/10 rounded-full text-violet-700 font-semibold text-sm mb-6">
                  💎 Advanced Product Management
                </div>
                
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-secondary mb-6 leading-tight">
                  Smart Variants & <span className="text-primary">Dynamic Pricing</span>
                </h1>
                
                <p className="text-xl text-accent/80 mb-8 leading-relaxed">
                  Sell products in multiple sizes, colors, or configurations? Create one master product with unlimited variants—each with its own SKU, stock level, and pricing. Combine this with multi-tier pricing to charge different rates to Retailers, Wholesalers, and VIP customers automatically.
                </p>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary mb-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-2xl font-bold text-primary">5 sizes × 8 colors</p>
                      <p className="text-sm text-accent/70">= 40 variants, managed as 1 product</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">3 price tiers</p>
                      <p className="text-sm text-accent/70">Auto-applied per customer</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="https://app.whisprbill.com/login"
                    className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg text-center"
                  >
                    Start Free Forever
                  </Link>
                  <a
                    href="#how-it-works"
                    className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-colors border-2 border-primary text-center"
                  >
                    See Examples ↓
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Unlimited variants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Multi-tier pricing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Bulk price updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Auto-pricing</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-4 border border-gray-100">
                  <Image
                    src="/wbill-variantspricing.jpeg"
                    alt="WhisprBill Variants and Pricing Management"
                    width={800}
                    height={600}
                    className="rounded-2xl"
                    priority
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="text-2xl font-bold text-primary">2,400</div>
                  <div className="text-xs text-accent/70">SKUs from 200 products</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Variants Section */}
        <section id="how-it-works" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              Product Variants: Manage Complexity Simply
            </h2>
            <p className="text-center text-accent/70 mb-16 max-w-2xl mx-auto">
              One master product, infinite variations—SKUs managed effortlessly
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: "👕",
                  title: "Define Custom Attributes",
                  description: "Go beyond Size/Color—create attributes for any product type:",
                  examples: [
                    "Apparel: Size, Color, Fabric, Fit",
                    "Electronics: Model, Capacity, Voltage, Color",
                    "Furniture: Material, Finish, Dimensions",
                    "FMCG: Pack Size, Flavor, Variant"
                  ]
                },
                {
                  icon: "📊",
                  title: "Each Variant = Unique SKU",
                  description: "Every combination gets its own identity:",
                  examples: [
                    "Blue Medium T-Shirt: SKU-BM-001",
                    "Blue Large T-Shirt: SKU-BL-001",
                    "Own barcode, stock level, pricing",
                    "Track inventory at variant level"
                  ]
                },
                {
                  icon: "⚡",
                  title: "Bulk Variant Operations",
                  description: "Update multiple variants at once:",
                  examples: [
                    "Increase prices for all 'XL' sizes across 50 designs",
                    "Adjust stock for all 'Red' color variants",
                    "Apply 10% discount to 'Winter Collection'",
                    "Import variant data via Excel upload"
                  ]
                },
                {
                  icon: "🖼️",
                  title: "Variant-Level Images",
                  description: "Help customers identify exactly what they're ordering:",
                  examples: [
                    "Different image per color variant",
                    "Show actual product appearance",
                    "Reduce returns and confusion",
                    "Professional presentation"
                  ]
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                  <p className="text-accent/80 text-sm mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-accent/70">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Real Example */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                <span className="text-2xl">👔</span>
                Real Example: Fashion Boutique
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-accent/70 mb-2">Master Product:</p>
                  <p className="text-accent/80 font-medium mb-4">"Premium Cotton T-Shirt"</p>
                  
                  <p className="text-sm font-semibold text-accent/70 mb-2">Attributes:</p>
                  <ul className="space-y-1 text-sm text-accent/80">
                    <li>• Size: XS, S, M, L, XL (5 options)</li>
                    <li>• Color: White, Black, Navy, Grey, Red, Green, Blue, Yellow (8 options)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-accent/70 mb-2">Result:</p>
                  <p className="text-2xl font-bold text-primary mb-2">40 unique SKUs</p>
                  <p className="text-sm text-accent/70 mb-4">5 sizes × 8 colors = 40 variants managed as one product</p>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <p className="text-xs font-semibold text-secondary mb-2">Individual tracking:</p>
                    <ul className="space-y-1 text-xs text-accent/70">
                      <li>✓ Blue Medium: 45 in stock, ₹599</li>
                      <li>✓ Red Large: 12 in stock, ₹599</li>
                      <li>✓ White XL: Out of stock, ₹599</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              Dynamic Pricing: Automatic Customer-Specific Rates
            </h2>
            <p className="text-center text-accent/70 mb-16 max-w-2xl mx-auto">
              Set it once, let the system handle pricing forever
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: "🎯",
                  title: "Create Unlimited Price Tiers",
                  description: "Define pricing levels for different customer segments:",
                  examples: [
                    "VIP: 20% discount across catalog",
                    "Wholesale: Bulk pricing for 10+ units",
                    "Distributor: Special rates + extended credit",
                    "Export: USD pricing + tax exemptions",
                    "Retail: Standard MRP pricing"
                  ]
                },
                {
                  icon: "👥",
                  title: "Assign Customers to Tiers",
                  description: "Set customer pricing tier once, system remembers forever:",
                  examples: [
                    "Tag 'Sharma Enterprises' as Wholesale",
                    "All future invoices use Wholesale pricing",
                    "No manual calculation needed ever",
                    "AI invoicing applies correct tier automatically"
                  ]
                },
                {
                  icon: "💰",
                  title: "Flexible Pricing Rules",
                  description: "Multiple ways to set tier-specific pricing:",
                  examples: [
                    "Percentage discount: 15% off base price",
                    "Fixed amount: ₹50 off per unit",
                    "Quantity-based: 10% off for 10+ units",
                    "Time-based: Diwali discounts without changing base"
                  ]
                },
                {
                  icon: "⚙️",
                  title: "Override When Needed",
                  description: "Flexibility for special negotiations:",
                  examples: [
                    "Override tier pricing on individual invoices",
                    "Special one-time discounts for VIP orders",
                    "System tracks pricing effectiveness",
                    "Alerts when margins drop below thresholds"
                  ]
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                  <p className="text-accent/80 text-sm mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-accent/70">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Pricing Example */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                <span className="text-2xl">💎</span>
                How Multi-Tier Pricing Works in Practice
              </h3>
              
              <div className="bg-white rounded-xl p-6 mb-6">
                <p className="font-semibold text-secondary mb-3">Product: "Wireless Mouse Pro"</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-3 font-semibold text-secondary">Customer Tier</th>
                        <th className="text-right p-3 font-semibold text-secondary">Base Price</th>
                        <th className="text-right p-3 font-semibold text-secondary">Discount</th>
                        <th className="text-right p-3 font-semibold text-secondary">Final Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3 text-accent/80">Retail (Walk-in)</td>
                        <td className="text-right p-3 text-accent/80">₹1,200</td>
                        <td className="text-right p-3 text-accent/80">0%</td>
                        <td className="text-right p-3 font-bold text-secondary">₹1,200</td>
                      </tr>
                      <tr className="border-t bg-blue-50/30">
                        <td className="p-3 text-accent/80">VIP Customer</td>
                        <td className="text-right p-3 text-accent/80">₹1,200</td>
                        <td className="text-right p-3 text-green-600">15%</td>
                        <td className="text-right p-3 font-bold text-primary">₹1,020</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3 text-accent/80">Wholesale (10+ units)</td>
                        <td className="text-right p-3 text-accent/80">₹1,200</td>
                        <td className="text-right p-3 text-green-600">25%</td>
                        <td className="text-right p-3 font-bold text-primary">₹900</td>
                      </tr>
                      <tr className="border-t bg-blue-50/30">
                        <td className="p-3 text-accent/80">Distributor</td>
                        <td className="text-right p-3 text-accent/80">₹1,200</td>
                        <td className="text-right p-3 text-green-600">35%</td>
                        <td className="text-right p-3 font-bold text-primary">₹780</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                <p className="text-sm text-accent/80 leading-relaxed">
                  <span className="font-bold text-secondary">Magic moment:</span> When you invoice "Sharma Enterprises" (tagged as Wholesale), the system automatically applies ₹900 pricing. When you invoice a walk-in customer, it uses ₹1,200. Zero manual calculation, zero pricing errors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Combined Power */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              Variants + Pricing = Ultimate Flexibility
            </h2>
            <p className="text-center text-accent/70 mb-12 max-w-2xl mx-auto">
              When you combine both features, magic happens
            </p>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 lg:p-10 border border-primary/20">
              <h3 className="text-xl font-bold text-secondary mb-6">
                Real Success Story: Footwear Retailer
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-violet-600 mb-2">The Challenge:</p>
                  <p className="text-accent/80 leading-relaxed">
                    "We sell 200 shoe designs, each in 12 sizes (UK 4-15). That's 2,400 SKUs. We have different pricing for Retail customers, Wholesale buyers (10+ pairs), and our 5 franchise stores. Managing this in Excel was a nightmare—wrong prices, confused customers, lost margins."
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-blue-600 mb-2">The WhisprBill Solution:</p>
                  <p className="text-accent/80 leading-relaxed mb-3">
                    <span className="font-semibold">Variants:</span> Set up 200 master products, each with 12 size variants. Each variant has its own SKU, barcode, and stock level. When UK 9 is low, system alerts—not "Shoe Model X."
                  </p>
                  <p className="text-accent/80 leading-relaxed">
                    <span className="font-semibold">Pricing Tiers:</span> Created 3 tiers—Retail (MRP), Wholesale (20% off), Franchise (30% off + extended credit). Tagged customers once. Now invoicing is automatic: AI invoicing applies correct variant + correct tier pricing with zero effort.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-600 mb-2">The Results:</p>
                  <ul className="space-y-2">
                    {[
                      "Eliminated pricing errors completely (was 5-8 errors/day)",
                      "Increased margins by 3.2% by optimizing tier structures",
                      "Reduced invoicing time from 8 minutes to 30 seconds per order",
                      "Stock alerts at variant level prevented stockouts of popular sizes",
                      "Franchises can self-invoice knowing prices are always correct"
                    ].map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-accent/80">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-violet-100 border-l-4 border-violet-500 p-4 rounded-lg">
                  <p className="text-accent/80 italic">
                    "We manage 2,400 SKUs as easily as 10 products now. And pricing tiers saved us from hundreds of manual calculations every week. Our franchise owners love that they can trust the system completely."
                  </p>
                  <p className="text-sm text-accent/60 mt-2">— Priya Malhotra, Owner, Style Footwear</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              Perfect For These Industries
            </h2>
            <p className="text-center text-accent/70 mb-16 max-w-2xl mx-auto">
              Any business with complex catalogs and tiered pricing
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  industry: "Apparel & Fashion",
                  variants: "Size, Color, Fabric, Fit",
                  pricing: "Retail, Wholesale, Boutique, Export",
                  icon: "👕"
                },
                {
                  industry: "Footwear",
                  variants: "Size, Color, Style, Material",
                  pricing: "MRP, Dealer, Franchise, Bulk",
                  icon: "👟"
                },
                {
                  industry: "Electronics",
                  variants: "Model, Capacity, Color, Warranty",
                  pricing: "Consumer, Reseller, Corporate, Govt",
                  icon: "📱"
                },
                {
                  industry: "Furniture",
                  variants: "Material, Finish, Size, Design",
                  pricing: "Retail, Project, Designer, Export",
                  icon: "🪑"
                },
                {
                  industry: "FMCG & Food",
                  variants: "Pack Size, Flavor, Variant, Grade",
                  pricing: "MRP, Distributor, Retailer, Institutional",
                  icon: "🛒"
                },
                {
                  industry: "Auto Parts",
                  variants: "OEM/Aftermarket, Model, Year, Compatibility",
                  pricing: "Retail, Garage, Dealer, Fleet",
                  icon: "🚗"
                },
              ].map((use, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4">{use.icon}</div>
                  <h3 className="text-lg font-bold text-secondary mb-4">{use.industry}</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-accent/70 mb-1">Common Variants:</p>
                      <p className="text-sm text-accent/80">{use.variants}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-accent/70 mb-1">Pricing Tiers:</p>
                      <p className="text-sm text-accent/80">{use.pricing}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Why This Feature Transforms Complex Businesses
            </h2>

            <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-6 lg:p-8 mb-8">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Product Variants: Simplicity at Scale
              </h3>
              <p className="text-accent/80 mb-4 leading-relaxed">
                Define custom attributes beyond Size/Color—Flavor, Grade, Voltage, Model, Finish, Material. Sell shirts in 5 sizes × 8 colors = 40 variants managed as one product. Each variant gets its own SKU, barcode, stock quantity, and pricing. Bulk-edit variants: increase prices for all 'XL' sizes across 50 designs in one action.
              </p>
              <p className="text-accent/80 leading-relaxed">
                Import variants from Excel using our template system. Track inventory at variant level: see that 'Blue Medium' is low stock while 'Blue Large' is overstocked. Variant-level images help customers identify exactly what they're ordering. Perfect for Apparel (Size/Color), Footwear (Size/Style), Electronics (Model/Capacity), Furniture (Material/Finish), FMCG (Pack Size/Flavor). One footwear retailer manages 2,400 SKUs (200 designs × 12 sizes) effortlessly.
              </p>
            </div>

            <div className="bg-green-50/50 border border-green-100 rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Dynamic Pricing: Set Once, Automate Forever
              </h3>
              <p className="text-accent/80 mb-4 leading-relaxed">
                Create unlimited price lists with custom names: VIP, Regular, Wholesale, Distributor, Export, Retail. Assign customers to tiers once; every invoice automatically uses their pricing—no manual calculation. Set tier-specific discounts by percentage or fixed amount per product/variant.
              </p>
              <p className="text-accent/80 leading-relaxed">
                Supports time-based pricing: run Diwali discounts without changing base prices. Quantity-based pricing: automatically give 15% off when order exceeds ₹50,000. Override pricing on individual invoices for special negotiations. Track pricing effectiveness with built-in analytics showing margins per tier. Import pricing across 1000+ products via Excel in minutes. The system alerts you when margins drop below thresholds to prevent under-pricing. One textile distributor increased margins by 3.2% by optimizing tier structures. Variants + Pricing = Ultimate flexibility for complex catalogs.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "How do product variants work in WhisprBill?",
                  a: "Create one master product with unlimited variants (size, color, model, etc.). Each variant gets its own SKU, barcode, stock quantity, and pricing. Manage shirts in 5 sizes × 8 colors = 40 variants as one product with individual inventory tracking."
                },
                {
                  q: "Can I charge different prices to different customers?",
                  a: "Yes! Create unlimited pricing tiers (VIP, Regular, Wholesale, Distributor, Export, Retail). Assign customers to tiers once, and every invoice automatically uses their pricing—no manual calculation needed. AI invoicing applies correct tier automatically."
                },
                {
                  q: "How fast can I update prices across multiple products?",
                  a: "Bulk-edit variant prices: increase prices for all 'XL' sizes across 50 designs in one action. Update pricing across 1000+ products via Excel import in minutes. System tracks changes and allows rollback if needed."
                },
                {
                  q: "Can I set quantity-based pricing?",
                  a: "Yes! Set rules like '10% off for orders over 10 units' or '15% off for orders exceeding ₹50,000'. System automatically applies quantity discounts when invoice conditions are met—no manual calculation."
                },
                {
                  q: "How does inventory tracking work with variants?",
                  a: "Each variant has its own stock level. System tracks 'Blue Medium' separately from 'Blue Large'. Get reorder alerts at variant level, preventing stockouts of popular sizes while avoiding overstocking slow movers."
                },
                {
                  q: "Can I override tier pricing for special deals?",
                  a: "Absolutely! While tier pricing applies automatically, you can override it on individual invoices for special negotiations or one-time discounts. System tracks these exceptions for margin analysis."
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Works Seamlessly With Other Features
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Conversational Invoicing",
                  description: "AI automatically selects correct variant and applies customer tier pricing in one go",
                  link: "/features/ai-invoicing",
                  icon: "💬"
                },
                {
                  title: "Bulk Import",
                  description: "Import thousands of product variants with pricing tiers via Excel in minutes",
                  link: "/features/bulk-import",
                  icon: "📂"
                },
                {
                  title: "Business Analytics",
                  description: "Track which variants sell best and which pricing tiers drive highest margins",
                  link: "/features/analytics",
                  icon: "📊"
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
              Master Complex Catalogs With Confidence
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join businesses managing thousands of SKUs and multiple pricing tiers effortlessly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="https://app.whisprbill.com/login"
                className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start Free Forever - No Credit Card Required
              </Link>
              <Link
                href="/features"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                Explore All Features
              </Link>
            </div>
            <p className="text-sm opacity-75">
              ✓ Unlimited variants  ✓ Multi-tier pricing  ✓ Automatic pricing per customer
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


