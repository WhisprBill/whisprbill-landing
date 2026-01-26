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
    keywords: ["price", "cost", "pricing", "how much", "expensive"],
    answer: `We have 4 plans to fit every business:
    
🆓 **Free**: ${PRODUCT_DATA.pricing.free.price} - Perfect for testing (5 AI invoices/month)
💼 **Basic**: ${PRODUCT_DATA.pricing.basic.price}/month - For small businesses (20 AI invoices/month)
🚀 **Pro**: ${PRODUCT_DATA.pricing.pro.price}/month - Best for growing teams (50 AI invoices/month, unlimited features)
👑 **Enterprise**: Custom pricing - For large organizations with advanced needs

Want to see the full comparison? [View Pricing](#pricing)`,
  },
  {
    question: "Is there a free trial?",
    keywords: ["free trial", "trial", "test", "try before"],
    answer: `Yes! Our Free plan is available forever - no credit card required. You get 5 AI-generated invoices per month to test the platform. 

Ready to start? [Sign Up Free](#)`,
  },
  {
    question: "What's included in the free plan?",
    keywords: ["free plan", "free tier", "what free"],
    answer: `The Free plan includes:
✓ 5 AI invoices + 5 manual invoices/month
✓ ${PRODUCT_DATA.pricing.free.customers} customers
✓ ${PRODUCT_DATA.pricing.free.inventory} inventory items
✓ GST-compliant invoicing
✓ 1 invoice template

Perfect for freelancers and small projects! [Start Free](#)`,
  },
  {
    question: "Does it support GST invoicing?",
    keywords: ["gst", "tax", "cgst", "sgst", "igst", "compliant", "gst compliance"],
    answer: `Yes! All plans (including Free) are 100% GST compliant. We auto-calculate CGST, SGST, and IGST based on your location and customer location. 

Export GSTR-1 reports with one click. 🇮🇳`,
  },
  {
    question: "Can I use voice commands?",
    keywords: ["voice", "speak", "talk", "voice command", "speech"],
    answer: `Voice commands are available on the **Pro plan** (${PRODUCT_DATA.pricing.pro.price}/month) and above. 

Just say "Create invoice for ABC Ltd for ₹50,000" and it's done! 🎤 [Upgrade to Pro](#pricing)`,
  },
  {
    question: "How many invoices can I create?",
    keywords: ["how many invoice", "invoice limit", "number of invoice"],
    answer: `It depends on your plan:
- **Free**: 5 AI + 5 manual/month
- **Basic**: 20 AI + unlimited manual
- **Pro**: 50 AI + unlimited manual
- **Enterprise**: 100 AI + unlimited manual

Need more? [Compare Plans](#pricing)`,
  },
  {
    question: "Can I import my existing customer data?",
    keywords: ["import", "csv", "excel", "bulk upload", "migrate", "transfer"],
    answer: `Yes! Bulk CSV/Excel import is available on **Basic plan** and above. Upload thousands of customers and inventory items in seconds. 

We auto-map fields to make migration seamless. 📂 [Learn More](#features)`,
  },
  {
    question: "Does it work on mobile?",
    keywords: ["mobile", "phone", "android", "ios", "iphone", "app"],
    answer: `Yes! WhisprBill is fully responsive and works on mobile browsers (iOS & Android). A dedicated mobile app is coming soon. 📱

Access your invoices anytime, anywhere!`,
  },
  {
    question: "How much time will I save?",
    keywords: ["time save", "faster", "efficiency", "quick"],
    answer: `Our customers save an average of **3+ hours per day** on invoicing tasks. 

With AI chat, create invoices in 30 seconds vs 5-10 minutes manually. That's 90% faster! ⚡ [Try It Free](#)`,
  },
  {
    question: "Is my data secure?",
    keywords: ["secure", "security", "safe", "privacy", "encryption", "data protection"],
    answer: `Absolutely! Your data security is our top priority:

🔒 **Encryption**: AES-256 at rest, TLS 1.3 in transit
☁️ **Cloud Backup**: Daily automated backups with 99.9% uptime
🔐 **Access Control**: Role-based permissions (Pro+ plans)
🇮🇳 **India Data Residency**: All data stored on Indian servers
✅ **GST Compliance**: Follows GSTN security standards

We never share your data with third parties. Your invoices, customers, and financial data stay 100% private. [Learn More](#security)`,
  },
  {
    question: "Where is my data stored?",
    keywords: ["where data", "server location", "data center", "india server", "data residency", "data storage"],
    answer: `All your data is stored on secure cloud servers located in **India** (Mumbai region). 

This ensures:
✓ Faster access for Indian businesses
✓ Compliance with Indian data protection laws
✓ Lower latency for GST portal sync
✓ Your data never leaves India

Your business data stays local, safe, and accessible 24/7. 🇮🇳`,
  },
  {
    question: "Who can access my invoice data?",
    keywords: ["who access", "data access", "privacy", "confidential", "see my data", "who sees"],
    answer: `**Only you and your authorized team members** can access your data.

🔐 **Single User** (Free/Basic): Only you
👥 **Multi-User** (Pro/Enterprise): You + your invited team (role-based access)

WhisprBill employees **cannot** view your invoices or customer data. We use zero-knowledge architecture where data is encrypted with your credentials.

Government agencies can only access your GST returns (as required by law), not your raw invoice data. [Privacy Policy](#privacy)`,
  },
  {
    question: "What happens if WhisprBill shuts down?",
    keywords: ["shut down", "bankruptcy", "company close", "data export", "backup", "goes out of business"],
    answer: `You can **export all your data anytime** in CSV/Excel format - no lock-in!

📥 **Export Options:**
- Invoices (PDF + data)
- Customer list
- Inventory database
- GST reports

Even if we shut down (we won't! 😊), you get 90 days notice to export everything. Your data is yours, always. [Export Guide](#)`,
  },
  {
    question: "What documents do I need to get started?",
    keywords: ["documents", "requirements", "need to start", "setup", "getting started"],
    answer: `To get started, you'll need:
1. Business GSTIN (for GST invoicing)
2. Company logo (optional)
3. Existing data (optional - CSV/Excel for import)

Setup takes under 10 minutes! [Start Now](#)`,
  },
  {
    question: "Can multiple team members use the same account?",
    keywords: ["team", "multiple user", "collaboration", "team member"],
    answer: `Yes! Multi-user access is available on:
- **Pro**: Up to 5 team members
- **Enterprise**: Unlimited users with role-based permissions

Basic and Free plans are single-user only. [Compare Plans](#pricing)`,
  },
  {
    question: "Do you have an API?",
    keywords: ["api", "integration", "webhook", "developer"],
    answer: `Yes! API access is included in the **Pro plan** (${PRODUCT_DATA.pricing.pro.price}/month) and above. 

Integrate with your existing systems using our REST API + webhooks. 🔌 [View API Docs](#)`,
  },
  {
    question: "What's the difference between Basic and Pro?",
    keywords: ["basic vs pro", "difference basic pro", "compare basic pro"],
    answer: `Main differences:

**Basic (${PRODUCT_DATA.pricing.basic.price}/month)**: 
- 20 AI invoices/month
- 500 inventory items
- 1 user

**Pro (${PRODUCT_DATA.pricing.pro.price}/month)**:
- 50 AI invoices/month
- Unlimited inventory
- 5 team members
- Voice commands, API, multi-currency
- No watermark

[See Full Comparison](#pricing)`,
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
    ],
    answer: `WhisprBill stands out because:
🤖 **AI-First**: Create invoices by chatting (no forms)
🇮🇳 **India-Focused**: Built-in GST compliance
⚡ **Faster**: 30 seconds vs 5-10 minutes
📊 **Smart Analytics**: Auto-generated insights

Traditional tools require accounting knowledge. We don't. [Try Free](#)`,
  },
  {
    question: "Do you sell my data to third parties?",
    keywords: ["sell data", "third party", "share data", "data sharing", "privacy policy"],
    answer: `**Absolutely not!** We never sell, rent, or share your data with third parties. 

Your invoices, customer information, and business data are:
✓ 100% confidential
✓ Only accessible to you and your team
✓ Never used for marketing or advertising
✓ Never shared with external companies

Your privacy is non-negotiable. 🔒 [Privacy Policy](#privacy)`,
  },
  {
    question: "What happens if you get hacked?",
    keywords: ["hacked", "data breach", "security breach", "cyber attack", "hack"],
    answer: `We have multiple security layers to prevent breaches:

🛡️ **Prevention**: Firewall, intrusion detection, regular security audits
🔐 **Encryption**: Even if accessed, data is encrypted (unreadable without keys)
📢 **Response**: Immediate notification within 24 hours if breach occurs
💾 **Recovery**: Daily backups ensure data restoration

We follow industry-standard security practices and are regularly audited. Your data safety is our top priority. 🔒`,
  },
  {
    question: "Can I delete all my data?",
    keywords: ["delete data", "remove data", "erase data", "data deletion", "right to be forgotten"],
    answer: `Yes! You have full control over your data. You can:

✓ Delete individual invoices/customers anytime
✓ Export all data before deletion
✓ Request complete account deletion (within 30 days)

Once deleted, data is permanently removed from our servers within 30 days. Backup copies are also erased. [Account Settings](#)`,
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
