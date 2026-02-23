import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://whisprbill.com'), // Replace with your actual domain
  title: {
    default: "WhisprBill - AI-Powered Invoicing & Billing Software",
    template: "%s | WhisprBill"
  },
  description: "Create professional invoices in seconds with AI. WhisprBill combines conversational AI with powerful invoicing and inventory management. Reduce billing time by 80%.",
  keywords: ["AI invoicing software", "invoice generator", "billing software", "conversational invoice creation", "automated invoicing", "small business billing", "invoice management", "inventory management"],
  authors: [{ name: "WhisprBill Team" }],
  creator: "WhisprBill",
  publisher: "WhisprBill",
  
  // Open Graph for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://whisprbill.com",
    title: "WhisprBill - AI-Powered Invoicing Software",
    description: "Create invoices conversationally with AI. Save time, reduce errors, and get paid faster.",
    siteName: "WhisprBill",
    images: [
      {
        url: "/og-image.png", // Create this 1200x630px image
        width: 1200,
        height: 630,
        alt: "WhisprBill AI Invoicing Dashboard",
      },
    ],
  },
  
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "WhisprBill - AI-Powered Invoicing Software",
    description: "Create invoices conversationally with AI. Save time and get paid faster.",
    creator: "@whisprbill", // Add your Twitter handle
    images: ["/twitter-image.png"], // Create this 1200x630px image
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
              "name": "WhisprBill",
              "url": "https://whisprbill.com",
              "logo": "https://whisprbill.com/logo.png",
              "description": "AI-powered invoicing and billing software that helps businesses create invoices conversationally",
              "sameAs": [
                // Add your social profiles
                "https://twitter.com/whisprbill",
                "https://linkedin.com/company/whisprbill",
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "email": "support@whisprbill.com"
              }
            })
          }}
        />
        
        {/* WebApplication Schema for SaaS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "WhisprBill",
              "description": "AI-powered invoicing software that allows users to create professional invoices conversationally, reducing billing time by up to 80%",
              "url": "https://whisprbill.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web browser",
              "browserRequirements": "Requires JavaScript. Requires HTML5.",
              "offers": {
                "@type": "AggregateOffer",
                "lowPrice": "0", // Free tier if you have one
                "highPrice": "99", // Adjust based on your pricing
                "priceCurrency": "USD",
                "offerCount": "3" // Number of pricing tiers
              },
              "featureList": [
                "AI-powered conversational invoice creation",
                "Manual invoice builder",
                "Inventory management",
                "Automated billing",
                "Invoice templates",
                "Real-time collaboration"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
