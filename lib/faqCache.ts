// lib/faqCache.ts

import { PRODUCT_DATA } from "./productData";

export interface CachedFAQ {
  question: string;
  keywords: string[]; // For fuzzy matching
  answer: string;
}

export const FAQ_CACHE: CachedFAQ[] = [
  {
    question: "How much does WhisprBill cost?",
    keywords: ["price", "cost", "pricing", "how much", "expensive", "plans"],
    answer: `Currently, we offer a **Free plan** that's available forever:

🆓 **Free Plan**: ${PRODUCT_DATA.pricing.free.price}
- ${PRODUCT_DATA.pricing.free.aiInvoices} AI invoices/month
- ${PRODUCT_DATA.pricing.free.manualInvoices} manual invoices
- ${PRODUCT_DATA.pricing.free.customers} customers
- ${PRODUCT_DATA.pricing.free.inventory} inventory items
- Multi-company support

💼 **Paid plans** with additional features (higher AI invoice limits, advanced capabilities) are coming soon! 

Want to be notified when we launch? [Join Waitlist](#) or [Start Free Now](#)`,
  },
  {
    question: "Is there a free trial?",
    keywords: ["free trial", "trial", "test", "try before"],
    answer: `Yes! Our **Free plan is available forever** - no credit card required, no time limit.

You get ${PRODUCT_DATA.pricing.free.aiInvoices} AI invoices per month and unlimited manual invoices to fully test the platform.

Ready to start? [Sign Up Free](#)`,
  },
  {
    question: "What's included in the free plan?",
    keywords: ["free plan", "free tier", "what free", "free features"],
    answer: `The Free plan includes:
✓ ${PRODUCT_DATA.pricing.free.aiInvoices} AI invoices per month
✓ ${PRODUCT_DATA.pricing.free.manualInvoices} manual invoices
✓ ${PRODUCT_DATA.pricing.free.customers} customers
✓ ${PRODUCT_DATA.pricing.free.inventory} inventory items
✓ GST-compliant invoicing (auto CGST/SGST/IGST)
✓ Multi-company support (manage multiple businesses)
✓ Product variants & multi-tier pricing
✓ Bulk CSV import
✓ Professional invoice templates

Perfect for small businesses and freelancers! [Start Free](#)`,
  },
  {
    question: "Does it support GST invoicing?",
    keywords: ["gst", "tax", "cgst", "sgst", "igst", "compliant", "gst compliance", "hsn"],
    answer: `Yes! All plans (including Free) are 100% GST compliant. 

✓ Auto-calculate CGST/SGST for intra-state transactions
✓ Auto-calculate IGST for inter-state transactions  
✓ HSN code support for proper classification
✓ Tax Invoice & Bill of Supply formats

Coming soon: GSTR-1 reports, E-invoicing, E-way bills 🇮🇳`,
  },
  {
    question: "Can I use voice commands?",
    keywords: ["voice", "speak", "talk", "voice command", "speech", "audio"],
    answer: `Voice commands are **coming soon**! We're actively developing this feature so you can create invoices by speaking.

Currently available: AI chat interface (type your request naturally) 💬

Want updates on voice features? [Join Waitlist](#)`,
  },
  {
    question: "How many invoices can I create?",
    keywords: ["how many invoice", "invoice limit", "number of invoice", "invoice quota"],
    answer: `On the **Free plan**:
- ${PRODUCT_DATA.pricing.free.aiInvoices} AI-generated invoices per month
- ${PRODUCT_DATA.pricing.free.manualInvoices} manual invoices (create as many as you want!)

Paid plans with higher AI invoice limits are coming soon. [Join Waitlist](#pricing)`,
  },
  {
    question: "Can I import my existing customer data?",
    keywords: ["import", "csv", "excel", "bulk upload", "migrate", "transfer", "export data"],
    answer: `Yes! Bulk CSV/Excel import is available on all plans (including Free). 

Upload thousands of customers and inventory items in seconds. We auto-map fields to make migration seamless. 📂

You can also export your data anytime - no lock-in! [Learn More](#features)`,
  },
  {
    question: "Does it work on mobile?",
    keywords: ["mobile", "phone", "android", "ios", "iphone", "app", "responsive"],
    answer: `Yes! WhisprBill works perfectly on mobile browsers (iOS & Android). The interface is fully responsive.

📱 Native mobile apps for iOS/Android are coming soon!

Access your invoices anytime, anywhere via your mobile browser.`,
  },
  {
    question: "How much time will I save?",
    keywords: ["time save", "faster", "efficiency", "quick", "speed"],
    answer: `Our customers save an average of **3+ hours per day** on invoicing tasks.

With AI chat, create invoices in 30 seconds vs 5-10 minutes manually. That's 90% faster! ⚡ 

Plus: No accounting knowledge needed. [Try It Free](#)`,
  },
  {
    question: "Is my data secure?",
    keywords: ["secure", "security", "safe", "privacy", "encryption", "data protection"],
    answer: `Absolutely! Your data security is our top priority:

🔒 **Privacy-First AI**: Your customer names, amounts, and sensitive data NEVER go to the AI. We use PII masking - the AI only sees intent, not your actual data.

🧮 **Deterministic Backend**: All GST calculations run on our secure backend using rule-based logic (not AI)

🇮🇳 **India-Based Servers**: Your data stays in India

✓ **Encrypted**: Data encrypted in transit and at rest

🚫 **No AI Training**: We never use your invoices to train AI models

Your business data is 100% yours. We never sell or share it. [Learn More](#security)`,
  },
  {
    question: "Where is my data stored?",
    keywords: ["where data", "server location", "data center", "india server", "data residency", "data storage"],
    answer: `All your data is stored on secure servers located in **India**.

This ensures:
✓ Compliance with Indian data protection laws
✓ Faster access for Indian businesses
✓ Your data never leaves India

Your business data stays local, safe, and accessible 24/7. 🇮🇳`,
  },
  {
    question: "Who can access my invoice data?",
    keywords: ["who access", "data access", "privacy", "confidential", "see my data", "who sees"],
    answer: `**Only you** can access your data (and anyone you share your login with).

🔐 You can login from multiple devices simultaneously (e.g., office computer + laptop + mobile)

🚫 WhisprBill employees **cannot** view your invoices or customer data

🤖 The AI **never sees** your actual customer names, amounts, or sensitive details (we use PII masking)

Your data is 100% private. [Privacy Policy](#privacy)`,
  },
  {
    question: "Can I delete all my data?",
    keywords: ["delete data", "remove data", "erase data", "data deletion", "right to be forgotten", "account deletion"],
    answer: `Yes! You have full control over your data. You can:

✓ Delete individual invoices/customers anytime
✓ Export all data before deletion (CSV/Excel/PDF)
✓ Request complete account deletion

You can export your data anytime - no lock-in! [Account Settings](#)`,
  },
  {
    question: "What documents do I need to get started?",
    keywords: ["documents", "requirements", "need to start", "setup", "getting started", "onboarding"],
    answer: `To get started, you'll need:

1. **Business GSTIN** (for GST invoicing)
2. **Company logo** (optional - for branded invoices)
3. **Existing data** (optional - CSV/Excel for bulk import)

Setup takes under 10 minutes! [Start Now](#)`,
  },
  {
    question: "Can multiple team members use the same account?",
    keywords: ["team", "multiple user", "collaboration", "team member", "multi user", "shared access"],
    answer: `Currently, you can **login from multiple devices** simultaneously (e.g., multiple computers, mobile, tablet) using the same account.

**Dedicated multi-user access** with role-based permissions is coming in future paid plans.

**Multi-company support** is available now - manage multiple businesses from one account! 🏢`,
  },
  {
    question: "Do you have an API?",
    keywords: ["api", "integration", "webhook", "developer", "rest api"],
    answer: `API access is not available yet, but it's on our roadmap for future paid plans.

Currently available: CSV/Excel import/export for data integration. 🔌

Want to be notified when API access launches? [Join Waitlist](#)`,
  },
  {
    question: "Can I manage multiple businesses?",
    keywords: ["multiple business", "multi company", "different company", "separate business", "franchise"],
    answer: `Yes! **Multi-company support** is available on all plans (including Free).

Manage multiple businesses from one account:
✓ Each company has its own customers, inventory, and invoices
✓ Switch between companies in one click
✓ Separate branding per company
✓ Data never mixes between companies

Perfect for franchise owners, multi-brand entrepreneurs, or accountants managing multiple clients! 🏢 [Learn More](#features)`,
  },
  {
    question: "What invoice types do you support?",
    keywords: ["invoice type", "bill type", "document type", "tax invoice", "quotation", "purchase order"],
    answer: `Currently available:
✓ **Tax Invoice** (GST-compliant)
✓ **Bill of Supply** (for unregistered businesses)
✓ **Quotation** (price estimates)
✓ **Purchase Order** (order documents)

Coming soon:
- Credit/Debit Notes
- Delivery Challan
- Proforma Invoice

[Start Creating Invoices](#)`,
  },
  {
    question: "Why choose WhisprBill over other invoicing software?",
    keywords: [
      "why choose",
      "better than",
      "vs zoho",
      "vs tally",
      "vs quickbooks",
      "competitor",
      "comparison",
    ],
    answer: `WhisprBill stands out because:

🤖 **AI-First**: Create invoices by chatting (no complex forms)
🇮🇳 **India-Focused**: Built-in GST compliance
⚡ **Faster**: 30 seconds vs 5-10 minutes
🆓 **Unlimited**: Even the Free plan has unlimited customers & inventory
🏢 **Multi-Company**: Manage multiple businesses from one account

Traditional tools charge per contact or have strict limits. We don't. [Try Free](#)`,
  },
  {
    question: "Do you sell my data to third parties?",
    keywords: ["sell data", "third party", "share data", "data sharing", "privacy policy"],
    answer: `**Absolutely not!** We never sell, rent, or share your data with third parties.

Your invoices, customer information, and business data are:
✓ 100% confidential
✓ Only accessible to you
✓ Never used for marketing or advertising
✓ Never shared with external companies
✓ Never used to train AI models

Your privacy is non-negotiable. 🔒 [Privacy Policy](#privacy)`,
  },
  {
    question: "How does the AI work without seeing my data?",
    keywords: ["how ai work", "ai privacy", "pii masking", "data protection", "ai security"],
    answer: `Great question! Here's how we keep your data private:

🎭 **PII Masking**: Customer names, amounts, and sensitive data are masked before AI processing

🤖 **Intent-Only AI**: The AI only understands your intent ("create invoice for customer X"), not your actual data

🧮 **Deterministic Backend**: All GST calculations and validations run on our secure backend using rule-based logic (not AI)

Think of AI as a smart translator between you and the system - it makes the interface friendly, not risky. [Learn More](#security)`,
  },
  {
    question: "Can I create invoices in different languages?",
    keywords: ["language", "hindi", "regional language", "translation", "multi language"],
    answer: `Currently, WhisprBill is available in English.

**Multi-language support** (Hindi, Tamil, Telugu, and more regional languages) is coming soon for invoice templates!

Want updates? [Join Waitlist](#)`,
  },
  {
    question: "Do you have batch tracking for pharma products?",
    keywords: ["batch tracking", "pharma", "expiry", "fmcg", "batch number", "lot number"],
    answer: `Batch tracking for pharma/FMCG products is **coming soon**!

Currently available: Product variants (size, color, material), multi-tier pricing, unlimited inventory.

Want to be notified when batch tracking launches? [Join Waitlist](#)`,
  },
  {
    question: "Can I use WhatsApp to create invoices?",
    keywords: ["whatsapp", "whatsapp integration", "chat on whatsapp", "whatsapp bot"],
    answer: `WhatsApp-native invoicing is **coming soon**! You'll be able to chat with WhisprBot on WhatsApp to create and share invoices directly.

Currently available: Web-based AI chat interface (desktop & mobile browser). 💬

Want updates on WhatsApp integration? [Join Waitlist](#)`,
  },
];

// Fuzzy matching function
export function findCachedAnswer(userQuestion: string): string | null {
  const lowerQuestion = userQuestion.toLowerCase();

  for (const faq of FAQ_CACHE) {
    // Check if any keyword matches
    const hasMatch = faq.keywords.some((keyword) =>
      lowerQuestion.includes(keyword.toLowerCase())
    );

    if (hasMatch) {
      return faq.answer;
    }
  }

  return null; // No cached answer found
}
