import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whisprbill.com"),
  title: {
    default: "WhisprBill - AI Invoicing and GST Billing Software for India",
    template: "%s | WhisprBill",
  },
  description:
    "WhisprBill is an AI invoicing and GST billing platform for Indian businesses. Create invoices faster, manage billing workflows, and run compliant operations from one dashboard.",
  keywords: [
    "AI invoicing software India",
    "GST billing platform",
    "invoice management software",
    "automated billing system",
    "small business billing solution",
    "MSME invoicing software",
    "online billing software India",
    "invoice automation tool",
    "business invoicing dashboard",
    "GST-compliant invoicing",
    "billing and invoicing software",
    "WhisprBill",
  ],
  authors: [{ name: "WhisprBill Team" }],
  creator: "WhisprBill",
  publisher: "WhisprBill",

  // Open Graph for social sharing
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://whisprbill.com",
    title: "WhisprBill - AI Invoicing and GST Billing Software for India",
    description:
      "Create GST-ready invoices with AI, reduce billing effort, and manage business invoicing workflows in one platform.",
    siteName: "WhisprBill",
    images: [
      {
        url: "/og-image.png", // Create this 1200x630px image
        width: 1200,
        height: 630,
        alt: "WhisprBill AI Invoicing",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "WhisprBill - AI GST Billing Software for Indian Businesses",
    description:
      "Faster invoicing with AI, GST-ready billing, and workflow automation for MSMEs and growing teams.",
    creator: "@whisprbill", // Add your Twitter handle
    images: ["/og-image.png"], // Create this 1200x630px image
  },

  // Verification tags (add when you have them)
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Mobile optimization
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  // robots control
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://whisprbill.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WhisprBill",
              url: "https://whisprbill.com",
              logo: "https://whisprbill.com/logo.png",
              description:
                "AI-powered invoicing and billing software that helps businesses create invoices conversationally",
              sameAs: [
                // Add your social profiles
                "https://twitter.com/whisprbill",
                "https://linkedin.com/company/whisprbill",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "support@whisprbill.com",
              },
            }),
          }}
        />

        {/* WebApplication Schema for SaaS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "WhisprBill",
              description:
                "AI-powered invoicing software that allows users to create professional invoices conversationally, reducing billing time by up to 80%",
              url: "https://whisprbill.com",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web browser",
              browserRequirements: "Requires JavaScript. Requires HTML5.",
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "0", // Free tier if you have one
                highPrice: "99", // Adjust based on your pricing
                priceCurrency: "USD",
                offerCount: "3", // Number of pricing tiers
              },
              featureList: [
                "AI-powered conversational invoice creation",
                "Manual invoice builder",
                "Inventory management",
                "Automated billing",
                "Invoice templates",
                "Real-time collaboration",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GFRYEZJ2S8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GFRYEZJ2S8');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
