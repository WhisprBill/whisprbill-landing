// lib/faqCache.ts

import { PRODUCT_DATA } from "./productData";

export interface CachedFAQ {
  question: string;
  keywords: string[];
  answer: string;
}

export const FAQ_CACHE: CachedFAQ[] = [
  {
    question: "How much does WhisprBill cost?",
    keywords: ["price", "cost", "pricing", "how much", "expensive", "plans"],
    answer: `WhisprBill has plans for every business size:

🆓 **Free** — ₹0 forever | 5 AI invoices/month | Unlimited manual invoices, customers & inventory

📦 **Basic** — ₹99/month (or ₹999/year) | 25 AI invoices/month

🚀 **Pro** — ₹299/month (or ₹2,999/year) | 80 AI invoices/month + bulk tools & multi-business

💎 **Premium** — ₹699/month (or ₹6,999/year) | 200 AI invoices/month + priority support

All plans include unlimited manual invoicing. [Start Free](#) or [View Plans](#pricing)`,
  },
  {
    question: "Is there a free trial?",
    keywords: ["free trial", "trial", "test", "try before"],
    answer: `Yes! Our **Free plan is available forever** — no credit card required, no time limit.

You get ${PRODUCT_DATA.pricing.free.aiInvoices} AI invoices per month and unlimited manual invoices to fully experience the platform.

Ready to start? [Sign Up Free](#)`,
  },
  {
    question: "What's included in the free plan?",
    keywords: ["free plan", "free tier", "what free", "free features"],
    answer: `The Free plan includes:
✓ ${PRODUCT_DATA.pricing.free.aiInvoices} AI invoices/month
✓ Unlimited manual invoices
✓ Unlimited customers & inventory
✓ GST-compliant invoicing (auto CGST/SGST/IGST)
✓ Custom invoice numbering
✓ Dashboard & analytics
✓ 20+ professional invoice templates

Note: Features like multi-business, bulk upload/export, variants, and price lists are available on paid plans.

[Start Free](#)`,
  },
  {
    question: "What's the difference between AI and manual invoicing?",
    keywords: ["ai invoice", "manual invoice", "difference", "ai vs manual", "how ai invoice works"],
    answer: `**AI Invoicing**: Chat naturally ("Invoice Rahul for 5 units of Product A") and WhisprBill fills everything in for you. Fast, conversational, smart.

**Manual Invoicing**: Fill in the invoice form yourself — always free and unlimited on every plan, including Free.

Ran out of AI invoices for the month? No problem — switch to manual (free) or buy an affordable AI add-on pack to top up. ⚡`,
  },
  {
    question: "What happens when I run out of AI invoices?",
    keywords: ["run out", "ai limit", "out of invoices", "quota", "add on", "top up", "recharge"],
    answer: `No worries! You have two options:

1. **Buy an AI invoice add-on pack** — affordable top-up packs to get more AI invoices for the month
2. **Switch to manual invoicing** — always free and unlimited on every plan

You'll never be stuck. [View Add-On Packs](#pricing)`,
  },
  {
    question: "Does it support GST invoicing?",
    keywords: ["gst", "tax", "cgst", "sgst", "igst", "compliant", "gst compliance", "hsn"],
    answer: `Yes! All plans (including Free) are 100% GST compliant.

✓ Auto CGST/SGST for intra-state transactions
✓ Auto IGST for inter-state transactions
✓ HSN code support for accurate classification
✓ Tax Invoice, Bill of Supply, Quotation & Purchase Order formats

All tax calculations are done by our deterministic backend — rule-based, not AI — so they're always accurate. 🇮🇳

Coming soon: GSTR-1 reports, E-invoicing, E-way bills`,
  },
  {
    question: "Can I use voice commands?",
    keywords: ["voice", "speak", "talk", "voice command", "speech", "audio"],
    answer: `Voice invoicing is not available right now. Currently you can create invoices by:

- 💬 **AI chat** — type your request naturally ("Invoice Priya for 10 units of X")
- 📝 **Manual form** — fill in invoice details yourself

Both are fast, GST-compliant, and available on all plans.`,
  },
  {
    question: "How many invoices can I create?",
    keywords: ["how many invoice", "invoice limit", "number of invoice", "invoice quota"],
    answer: `**Manual invoices**: Unlimited on every plan — always free, no caps.

**AI invoices per month**:
- Free: 5
- Basic: 25
- Pro: 80
- Premium: 200

Need more AI invoices? Top up with affordable add-on packs anytime. [View Plans](#pricing)`,
  },
  {
    question: "Can I import my existing customer data?",
    keywords: ["import", "csv", "excel", "bulk upload", "migrate", "transfer", "export data"],
    answer: `Yes! Bulk CSV/Excel import for customers and inventory is available on **paid plans** (Basic and above).

Upload thousands of records in seconds — we auto-map fields for seamless migration. 📂

You can also export your data anytime — no lock-in. [View Plans](#pricing)`,
  },
  {
    question: "Does it work on mobile?",
    keywords: ["mobile", "phone", "android", "ios", "iphone", "app", "responsive"],
    answer: `Yes! WhisprBill works great on mobile browsers (iOS & Android) — fully responsive.

Access your invoices, create new ones, and manage your business from anywhere via your mobile browser. 📱`,
  },
  {
    question: "How much time will I save?",
    keywords: ["time save", "faster", "efficiency", "quick", "speed"],
    answer: `With AI invoicing, create a complete GST invoice in under 30 seconds vs 5–10 minutes manually. That's 90%+ faster. ⚡

No accounting knowledge needed — just tell WhisprBill what you want in plain language and it handles the rest.

[Try It Free](#)`,
  },
  {
    question: "Is my data secure?",
    keywords: ["secure", "security", "safe", "privacy", "encryption", "data protection"],
    answer: `Absolutely. Here's how we protect your data:

🔒 **Privacy-First AI**: Your customer names, amounts, and sensitive data NEVER go to the AI. We use PII masking — the AI only understands your intent.

🧮 **Deterministic Backend**: All GST calculations use rule-based logic on our secure backend, not AI.

🇮🇳 **India-Based Servers**: Your data stays in India.

🔐 **Encrypted**: In transit and at rest.

🚫 **No AI Training**: We never use your invoices or customer data to train any AI model.

Your data is 100% yours. We never sell or share it. [Learn More](#security)`,
  },
  {
    question: "Where is my data stored?",
    keywords: ["where data", "server location", "data center", "india server", "data residency", "data storage"],
    answer: `All your data is stored on secure servers located in **India**.

✓ Compliant with Indian data protection laws
✓ Faster access for Indian businesses
✓ Your data never leaves India 🇮🇳`,
  },
  {
    question: "Who can access my invoice data?",
    keywords: ["who access", "data access", "privacy", "confidential", "see my data", "who sees"],
    answer: `**Only you** can access your data.

🔐 Login from multiple devices simultaneously (office, laptop, mobile)
🚫 WhisprBill employees cannot view your invoices or customer data
🤖 The AI never sees your actual customer names, amounts, or sensitive details (PII masking)

Your data is completely private. [Privacy Policy](#privacy)`,
  },
  {
    question: "Can I delete all my data?",
    keywords: ["delete data", "remove data", "erase data", "data deletion", "right to be forgotten", "account deletion"],
    answer: `Yes! You have full control:

✓ Delete individual invoices or customers anytime
✓ Export all data before deletion (CSV/PDF)
✓ Request complete account deletion

No lock-in — your data, your call. [Account Settings](#)`,
  },
  {
    question: "What documents do I need to get started?",
    keywords: ["documents", "requirements", "need to start", "setup", "getting started", "onboarding"],
    answer: `Very little! To get started:

1. **Business GSTIN** — for GST-compliant invoicing
2. **Company logo** — optional, for branded invoices
3. **Existing data** — optional CSV/Excel for bulk import (paid plans)

Setup takes under 10 minutes. [Start Now](#)`,
  },
  {
    question: "Can multiple team members use the same account?",
    keywords: ["team", "multiple user", "collaboration", "team member", "multi user", "shared access"],
    answer: `Currently you can **login from multiple devices simultaneously** using the same account (laptop, desktop, mobile).

Dedicated multi-user access with role-based permissions is on our roadmap for future plan updates.

**Multi-business support** is available now on paid plans — manage multiple businesses from one account. 🏢`,
  },
  {
    question: "Do you have an API?",
    keywords: ["api", "integration", "webhook", "developer", "rest api"],
    answer: `API access isn't available yet — it's on our roadmap.

Currently you can use CSV/Excel import and export for data integration. 🔌

Want to be notified when API access launches? [Contact Us](mailto:support@whisprbill.com)`,
  },
  {
    question: "Can I manage multiple businesses?",
    keywords: ["multiple business", "multi company", "different company", "separate business", "franchise"],
    answer: `Yes! **Multi-business support** is available on paid plans (Basic and above).

✓ Each business has its own customers, inventory, and invoices
✓ Switch between businesses in one click
✓ Separate branding per business
✓ Data never mixes between businesses

Perfect for franchise owners, multi-brand entrepreneurs, or accountants managing multiple clients. 🏢 [View Plans](#pricing)`,
  },
  {
    question: "What invoice types do you support?",
    keywords: ["invoice type", "bill type", "document type", "tax invoice", "quotation", "purchase order"],
    answer: `Currently available (all GST-compliant):
✓ **Tax Invoice**
✓ **Bill of Supply** (for unregistered businesses or exempt goods)
✓ **Quotation**
✓ **Purchase Order**

Coming soon:
- Credit/Debit Notes
- Delivery Challan
- Proforma Invoice

20+ professional templates available across all invoice types. [Start Creating Invoices](#)`,
  },
  {
    question: "How many templates do you have?",
    keywords: ["templates", "invoice design", "how many templates", "invoice template", "professional template"],
    answer: `We currently have **20+ professional invoice templates** — 5 per invoice type (Tax Invoice, Bill of Supply, Quotation, Purchase Order).

We're actively adding more templates regularly. All templates are GST-ready with your logo and branding. [Try Free](#)`,
  },
  {
    question: "Why choose WhisprBill over other invoicing software?",
    keywords: ["why choose", "better than", "vs zoho", "vs tally", "vs quickbooks", "competitor", "comparison"],
    answer: `WhisprBill is built differently:

🤖 **AI-First**: Create invoices by chatting — no complex forms
🇮🇳 **India-Focused**: Built-in GST compliance, deterministic tax calculation
⚡ **Instant**: 30 seconds per invoice vs 5–10 minutes
🆓 **Unlimited Manual Invoicing**: Even on the Free plan — forever
💰 **Affordable**: Paid plans start at just ₹99/month

Traditional tools charge per contact or have strict caps. We don't. [Try Free](#)`,
  },
  {
    question: "Do you sell my data to third parties?",
    keywords: ["sell data", "third party", "share data", "data sharing", "privacy policy"],
    answer: `**Absolutely not.** We never sell, rent, or share your data with anyone.

✓ 100% confidential
✓ Never used for marketing or advertising
✓ Never shared with external companies
✓ Never used to train AI models

Your privacy is non-negotiable. 🔒 [Privacy Policy](#privacy)`,
  },
  {
    question: "How does the AI work without seeing my data?",
    keywords: ["how ai work", "ai privacy", "pii masking", "data protection", "ai security"],
    answer: `Here's the key: **the AI handles intent, not data.**

🎭 **PII Masking**: Customer names, amounts, and sensitive info are masked before any AI processing

🤖 **Intent-Only AI**: The AI understands "create invoice for customer X for 10 units of Y" — not your actual names or prices

🧮 **Deterministic Backend**: All GST calculations, tax rates, and totals run on our secure backend using rule-based logic — not AI

Think of the AI as a smart translator — it makes WhisprBill easy to use, not a privacy risk. [Learn More](#security)`,
  },
  {
    question: "Can I create invoices in different languages?",
    keywords: ["language", "hindi", "regional language", "translation", "multi language"],
    answer: `Currently WhisprBill is in English.

Multi-language support for invoice templates (Hindi, Tamil, Telugu, and more) is on our roadmap.

Want updates? [Contact Us](mailto:support@whisprbill.com)`,
  },
  {
    question: "Do you have batch tracking for pharma products?",
    keywords: ["batch tracking", "pharma", "expiry", "fmcg", "batch number", "lot number"],
    answer: `Batch & expiry tracking for pharma/FMCG is **coming soon**!

Currently available: Product variants (size, color, material), multi-tier price lists, and unlimited inventory on paid plans.

Want to be notified when batch tracking launches? [Contact Us](mailto:support@whisprbill.com)`,
  },
  {
    question: "Can I use WhatsApp to create invoices?",
    keywords: ["whatsapp", "whatsapp integration", "chat on whatsapp", "whatsapp bot", "send invoice whatsapp"],
    answer: `WhatsApp invoice delivery is **coming soon**!

Currently you can create invoices via our web-based AI chat (desktop & mobile browser) and share them via PDF. 💬

Want updates on WhatsApp integration? [Contact Us](mailto:support@whisprbill.com)`,
  },
  {
    question: "Is there a yearly plan discount?",
    keywords: ["yearly", "annual", "discount", "save money", "annual plan", "year plan"],
    answer: `Yes! Yearly plans save you ~15–20% compared to monthly:

- **Basic**: ₹999/year (vs ₹99 × 12 = ₹1,188)
- **Pro**: ₹2,999/year (vs ₹299 × 12 = ₹3,588)
- **Premium**: ₹6,999/year (vs ₹699 × 12 = ₹8,388)

Same features, better value. [View Plans](#pricing)`,
  },
];

// Fuzzy matching function
export function findCachedAnswer(userQuestion: string): string | null {
  const lowerQuestion = userQuestion.toLowerCase();

  for (const faq of FAQ_CACHE) {
    const hasMatch = faq.keywords.some((keyword) =>
      lowerQuestion.includes(keyword.toLowerCase())
    );

    if (hasMatch) {
      return faq.answer;
    }
  }

  return null;
}