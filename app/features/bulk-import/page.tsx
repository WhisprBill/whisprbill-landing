import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Lightning-Fast Bulk Import - Migrate in Minutes | WhisprBill",
  description: "Upload 10,000 products with variants in 2 minutes. Smart CSV/Excel import with auto-validation, duplicate detection, and rollback protection. Switch from any system without data loss.",
  keywords: [
    "bulk product import software",
    "CSV import India",
    "migrate from Tally",
    "Excel product upload",
    "inventory migration tool",
    "mass data import"
  ],
  openGraph: {
    title: "Bulk Import - Migrate Your Entire Database in Minutes",
    description: "Upload thousands of products and customers instantly with smart field mapping and validation.",
    url: "https://whisprbill.com/features/bulk-import",
    images: [
      {
        url: "/og-bulk-import.png",
        width: 1200,
        height: 630,
        alt: "WhisprBill Bulk Import Interface",
      },
    ],
  },
  alternates: {
    canonical: "https://whisprbill.com/features/bulk-import",
  },
};

export default function BulkImportPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "WhisprBill Bulk Import Tool",
            "applicationCategory": "BusinessApplication",
            "description": "High-speed bulk import system for migrating products, customers, and inventory data from any source with intelligent validation",
            "operatingSystem": "Web browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            },
            "featureList": [
              "Import 10,000+ records in minutes",
              "Smart field auto-mapping",
              "Real-time validation",
              "Duplicate detection",
              "Rollback protection",
              "CSV/Excel/Google Sheets support"
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
                "name": "How many products can I import at once?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can import 10,000+ products with variants, pricing tiers, and HSN codes in under 2 minutes. The system handles large datasets efficiently with real-time validation and progress tracking."
                }
              },
              {
                "@type": "Question",
                "name": "What file formats are supported for bulk import?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "WhisprBill supports CSV, Excel (XLS/XLSX), and Google Sheets. The smart importer automatically detects column headers and maps them to the correct fields—no manual configuration needed."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if my import has errors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The system validates data in real-time and flags errors before import completes. You can fix errors and re-import, or use rollback protection to undo the entire import with one click if something looks wrong."
                }
              }
            ]
          })
        }}
      />

      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-emerald-500/10 rounded-full text-emerald-700 font-semibold text-sm mb-6">
                  📂 Smart Migration Tool
                </div>
                
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-secondary mb-6 leading-tight">
                  Lightning-Fast <span className="text-primary">Bulk Import</span>
                </h1>
                
                <p className="text-xl text-accent/80 mb-8 leading-relaxed">
                  Migrating from another system? Upload your entire customer database and product catalog in seconds. Supports Excel, CSV, and Google Sheets with intelligent field mapping that learns from your data structure.
                </p>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">⚡</span>
                    <p className="font-bold text-secondary text-lg">10,000 products in under 2 minutes</p>
                  </div>
                  <p className="text-sm text-accent/70">With variants, pricing tiers, HSN codes, and full validation</p>
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
                    See How It Works ↓
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Auto-mapping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Real-time validation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Duplicate detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-accent/70">Rollback protection</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-4 border border-gray-100">
                  <Image
                    src="/wbill-bulkupload2.png"
                    alt="WhisprBill Bulk Import Interface"
                    width={800}
                    height={600}
                    className="rounded-2xl"
                    priority
                  />
                </div>
                
                {/* Floating metrics */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="text-2xl font-bold text-emerald-600">10k</div>
                  <div className="text-xs text-accent/70">Records/2 minutes</div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="text-2xl font-bold text-primary">40 hrs</div>
                  <div className="text-xs text-accent/70">Saved on migration</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              From Old System to WhisprBill in 4 Simple Steps
            </h2>
            <p className="text-center text-accent/70 mb-12 max-w-2xl mx-auto">
              No IT team needed—our smart importer handles everything automatically
            </p>

            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Export Your Current Data",
                  description: "Download your product or customer data from any system:",
                  examples: [
                    "Tally: Export to Excel via standard reports",
                    "Excel/Google Sheets: Already in the right format",
                    "Other software: Export as CSV or Excel",
                    "Even messy spreadsheets work—we clean them automatically"
                  ],
                  icon: "📤"
                },
                {
                  step: "2",
                  title: "Upload & Smart Mapping",
                  description: "Drag & drop your file. Our AI does the heavy lifting:",
                  examples: [
                    "Auto-detects column headers (Product Name, Price, HSN, Stock, etc.)",
                    "Maps columns to correct fields without manual configuration",
                    "Handles different naming conventions (SKU vs Item Code)",
                    "Suggests corrections for unrecognized columns"
                  ],
                  icon: "🧠"
                },
                {
                  step: "3",
                  title: "Validation & Preview",
                  description: "System validates everything before final import:",
                  examples: [
                    "Flags duplicates: 'Laptop-HP-15' already exists—skip or update?",
                    "Validates HSN codes, GST rates, and pricing formats",
                    "Shows preview: '9,847 new products, 23 duplicates, 5 errors'",
                    "Let you fix errors in the preview or re-upload corrected file"
                  ],
                  icon: "✓"
                },
                {
                  step: "4",
                  title: "Import Complete + Rollback Option",
                  description: "Data imported with safety net:",
                  examples: [
                    "10,000 products imported in under 2 minutes",
                    "Undo entire import with one click if something looks wrong",
                    "Import history saved for audit trail",
                    "Start invoicing immediately—no downtime"
                  ],
                  icon: "🎉"
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-2xl shrink-0 shadow-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{item.icon}</span>
                      <h3 className="text-xl lg:text-2xl font-bold text-secondary">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-accent/80 mb-3">{item.description}</p>
                    <ul className="space-y-2">
                      {item.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-accent/70">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Can Import */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              What You Can Bulk Import
            </h2>
            <p className="text-center text-accent/70 mb-16 max-w-2xl mx-auto">
              Migrate your entire business data in one go
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: "📦",
                  title: "Products & Inventory",
                  description: "Import your complete product catalog with all details",
                  fields: [
                    "Product names, SKUs, barcodes",
                    "Pricing (base price + tier pricing)",
                    "Stock levels and reorder points",
                    "HSN codes and GST rates",
                    "Product variants (size, color, etc.)",
                    "Categories and custom attributes"
                  ]
                },
                {
                  icon: "👥",
                  title: "Customers",
                  description: "Migrate your entire customer database with full history",
                  fields: [
                    "Names, contacts, emails",
                    "GSTIN (validated during import)",
                    "Billing/shipping addresses",
                    "Payment terms and credit limits",
                    "Custom tags and categories",
                    "Notes and custom fields"
                  ]
                },
                {
                  icon: "🏢",
                  title: "Suppliers/Vendors",
                  description: "Import supplier database for purchase management",
                  fields: [
                    "Supplier names and contacts",
                    "Payment terms and lead times",
                    "Product mappings",
                    "Historical pricing data",
                    "GSTIN and tax details",
                    "Bank account information"
                  ]
                },
                {
                  icon: "💰",
                  title: "Pricing Updates",
                  description: "Bulk update prices across thousands of products",
                  fields: [
                    "Increase prices by % or fixed amount",
                    "Set seasonal pricing across categories",
                    "Update tier pricing (wholesale, retail, VIP)",
                    "Apply discounts in bulk",
                    "Schedule price change dates",
                    "Rollback if pricing looks wrong"
                  ]
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-accent/80 text-sm mb-4 leading-relaxed">{item.description}</p>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-xs font-semibold text-secondary mb-2">Supported fields:</p>
                    <ul className="space-y-1">
                      {item.fields.map((field, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-accent/70">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>{field}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Smart Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-4">
              Smart Import Features That Save Hours
            </h2>
            <p className="text-center text-accent/70 mb-16 max-w-2xl mx-auto">
              Intelligence built into every step of the import process
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🧠",
                  title: "Intelligent Field Mapping",
                  description: "AI automatically detects what each column contains—even with different naming conventions. 'Item Name' and 'Product' both map to the same field."
                },
                {
                  icon: "🔍",
                  title: "Duplicate Detection",
                  description: "System flags duplicates before import: 'Product ABC already exists. Skip, Update, or Create New?' You decide the strategy."
                },
                {
                  icon: "✓",
                  title: "Real-Time Validation",
                  description: "Validates HSN codes, GSTIN formats, phone numbers, pricing, and stock levels as file uploads. Errors flagged instantly with suggestions."
                },
                {
                  icon: "🧹",
                  title: "Data Cleaning",
                  description: "Automatically removes extra spaces, fixes case inconsistencies, handles Unicode characters, and standardizes formats without manual cleanup."
                },
                {
                  icon: "🔄",
                  title: "Rollback Protection",
                  description: "Don't like the imported data? Undo the entire import with one click. All changes reversed—no permanent damage to your database."
                },
                {
                  icon: "📊",
                  title: "Import Reports",
                  description: "Detailed summary after each import: '9,847 added, 23 updated, 5 skipped, 0 errors'. Export report for records and audit trails."
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                  <p className="text-accent/80 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Success Story */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Real Migration Story
            </h2>

            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🏭</div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    Manufacturing Company with 12,000 SKUs
                  </h3>
                  <p className="text-accent/70">Auto Parts Distributor • Delhi</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-red-600 mb-2">The Challenge:</p>
                  <p className="text-accent/80 leading-relaxed">
                    "We had 12,000 products in Tally with variants (OEM vs Aftermarket), tier pricing (Dealer, Retail, Export), and complex HSN code mappings. Our previous attempt at migrating to another software took 3 weeks of manual data entry and still had 200+ errors. We couldn't afford that downtime again."
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-blue-600 mb-2">The WhisprBill Migration:</p>
                  <p className="text-accent/80 leading-relaxed mb-3">
                    "We exported our Tally data to Excel on Monday morning. Uploaded to WhisprBill's bulk import tool. The system auto-mapped all fields correctly—'Item Code' to 'SKU', 'MRP' to 'Base Price', etc. Flagged 47 duplicates (same SKU with different names) and 5 HSN code errors."
                  </p>
                  <p className="text-accent/80 leading-relaxed">
                    "Fixed the errors in Excel, re-uploaded. Second attempt: all 12,000 products with variants and tier pricing imported in 3 minutes. We were generating invoices by Monday afternoon."
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-600 mb-2">The Impact:</p>
                  <ul className="space-y-2">
                    {[
                      "Migration time: 3 weeks → 4 hours (including error fixes)",
                      "Saved 40+ hours of manual data entry",
                      "Zero invoice downtime—switched over same day",
                      "All historical pricing preserved accurately",
                      "Rollback gave us confidence to try without fear"
                    ].map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-accent/80">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-lg">
                  <p className="text-accent/80 italic">
                    "The smart mapping saved us. It understood 'Item Code' meant 'SKU' without us configuring anything. And the rollback feature gave us confidence to try—we knew we could undo if anything went wrong."
                  </p>
                  <p className="text-sm text-accent/60 mt-2">— Vikram Singh, Operations Manager</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">
              Why Businesses Choose Our Bulk Import
            </h2>

            <div className="bg-teal-50/50 border border-teal-100 rounded-2xl p-6 lg:p-8 mb-8">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Speed Without Sacrificing Accuracy
              </h3>
              <p className="text-accent/80 mb-4 leading-relaxed">
                Our smart importer automatically detects column headers and maps them to the correct fields—no manual configuration needed. Import 10,000 products with variants, pricing tiers, and HSN codes in under 2 minutes. The system validates data in real-time, flagging duplicates and formatting errors before they cause issues.
              </p>
              <p className="text-accent/80 leading-relaxed">
                Supports batch updates too: need to increase prices by 10% across 500 items? Upload a CSV and it's done. Includes rollback protection—if something looks wrong, undo the entire import with one click. Perfect for businesses switching from Tally, Excel, or legacy systems without IT expertise.
              </p>
            </div>

            <div className="bg-green-50/50 border border-green-100 rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Built for Real-World Messy Data
              </h3>
              <p className="text-accent/80 leading-relaxed">
                We know your data isn't perfect. Extra spaces, mixed case, international characters, inconsistent formats—we handle it all automatically. The system cleans as it imports, so you don't spend days preparing files. One textile wholesaler migrated 8,000 products with 3 variants each (24,000 SKUs) in under 5 minutes. Zero errors, zero downtime, zero stress.
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
                  q: "How many products can I import at once?",
                  a: "You can import 10,000+ products with variants, pricing tiers, and HSN codes in under 2 minutes. The system handles large datasets efficiently with real-time validation and progress tracking."
                },
                {
                  q: "What file formats are supported for bulk import?",
                  a: "WhisprBill supports CSV, Excel (XLS/XLSX), and Google Sheets. The smart importer automatically detects column headers and maps them to the correct fields—no manual configuration needed."
                },
                {
                  q: "What happens if my import has errors?",
                  a: "The system validates data in real-time and flags errors before import completes. You can fix errors and re-import, or use rollback protection to undo the entire import with one click if something looks wrong."
                },
                {
                  q: "Can I update existing products in bulk?",
                  a: "Yes! Upload a file with SKUs and updated prices/stock levels. The system matches SKUs and updates existing records. Perfect for seasonal price changes or inventory adjustments across thousands of products."
                },
                {
                  q: "Does it work with data from Tally?",
                  a: "Absolutely! Export your data from Tally to Excel, then upload to WhisprBill. The smart mapper recognizes Tally's column names and maps them correctly. Thousands of businesses have successfully migrated from Tally."
                },
                {
                  q: "What if I don't know how to format my Excel file?",
                  a: "Download our template file with sample data showing the correct format. Or just upload your existing file—our AI will try to map columns automatically and suggest corrections for unrecognized fields."
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
                  title: "Customer Management",
                  description: "Import unlimited customers with GSTIN validation during bulk upload process",
                  link: "/features/customer-management",
                  icon: "👥"
                },
                {
                  title: "Variants & Pricing",
                  description: "Bulk import products with multiple variants and tier pricing all at once",
                  link: "/features/variants-pricing",
                  icon: "💎"
                },
                {
                  title: "Multi-Company Management",
                  description: "Import separate product catalogs for each company you manage",
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
              Migrate Your Business Data in Minutes
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join businesses that switched systems without losing a single day of productivity
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
              ✓ 10k products in 2 minutes  ✓ Smart auto-mapping  ✓ Rollback protection
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


