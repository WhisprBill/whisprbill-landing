"use client";

import React, { useEffect } from "react";

const comparisonData = {
  categories: [
    {
      name: "Invoice Limits",
      features: [
        { name: "AI-Generated Invoices/month", free: "5", basic: "20", pro: "50", enterprise: "100" },
        { name: "Manual Invoices/month", free: "5", basic: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
        { name: "PDF Downloads", free: "10/month", basic: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
      ],
    },
    {
      name: "Content & Data",
      features: [
        { name: "Invoice Templates", free: "1", basic: "2", pro: "All", enterprise: "All + Custom" },
        { name: "Inventory Items", free: "50", basic: "500", pro: "Unlimited", enterprise: "Unlimited" },
        { name: "Customers", free: "25", basic: "200", pro: "Unlimited", enterprise: "Unlimited" },
        { name: "Companies/Branches", free: "1", basic: "1", pro: "2", enterprise: "5" },
      ],
    },
    {
      name: "Inventory Features",
      features: [
        { name: "Product Variants", free: false, basic: false, pro: true, enterprise: true },
        { name: "Batch Tracking", free: false, basic: false, pro: false, enterprise: true },
        { name: "Price Lists", free: false, basic: false, pro: true, enterprise: true },
        { name: "Stock Adjustments", free: false, basic: true, pro: true, enterprise: true },
        { name: "Low Stock Alerts", free: false, basic: true, pro: true, enterprise: true },
      ],
    },
    {
      name: "Analytics & Reporting",
      features: [
        { name: "Dashboard Analytics", free: false, basic: true, pro: true, enterprise: true },
        { name: "Advanced Reports", free: false, basic: true, pro: true, enterprise: true },
        { name: "Sales Trends", free: false, basic: "30 days", pro: "90 days", enterprise: "Unlimited" },
        { name: "Export Reports", free: false, basic: true, pro: true, enterprise: true },
      ],
    },
    {
      name: "Team & Collaboration",
      features: [
        { name: "Team Members", free: "1", basic: "1", pro: "5", enterprise: "Unlimited" },
        { name: "Role-Based Access", free: false, basic: false, pro: true, enterprise: true },
      ],
    },
    {
      name: "Advanced Features",
      features: [
        { name: "Voice Commands", free: false, basic: false, pro: true, enterprise: true },
        { name: "Multi-Currency", free: false, basic: false, pro: true, enterprise: true },
        { name: "API Access", free: false, basic: false, pro: true, enterprise: true },
        { name: "Custom Branding", free: false, basic: false, pro: true, enterprise: true },
        { name: "White-Labeling", free: false, basic: false, pro: false, enterprise: true },
        { name: "Delivery Challan", free: false, basic: false, pro: false, enterprise: true },
        { name: "Dedicated Support", free: false, basic: false, pro: "Priority", enterprise: "24/7 + Manager" },
      ],
    },
  ],
};

export default function ComparisonModal({ onClose }: { onClose: () => void }) {
  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const renderCell = (value: any) => {
    if (typeof value === "boolean") {
      return value ? (
        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      ) : (
        <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      );
    }
    return <span className="text-xs font-medium text-secondary">{value}</span>;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-secondary/90 backdrop-blur-sm p-2 md:p-4 animate-in fade-in duration-200">
      {/* MAXIMIZED MODAL - Now 98% of viewport */}
      <div className="bg-white rounded-2xl w-full h-full md:h-[98vh] md:max-w-[98vw] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col">
        
        {/* Compact Header */}
        <div className="bg-white border-b border-gray-100 px-4 md:px-6 py-3 flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-secondary">Compare All Plans</h3>
            <p className="text-xs text-accent/70">Detailed feature breakdown across all tiers</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center text-gray-400 hover:text-gray-600 shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Table Container - Takes all remaining space */}
        <div className="flex-1 overflow-y-auto px-4 md:px-6 py-2">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-white z-10 shadow-sm">
              <tr>
                <th className="text-left py-2 pr-3 font-bold text-secondary text-sm w-[35%] border-b-2 border-gray-200">Feature</th>
                <th className="text-center py-2 px-2 font-bold text-secondary text-sm border-b-2 border-gray-200">Free</th>
                <th className="text-center py-2 px-2 font-bold text-secondary text-sm border-b-2 border-gray-200">Basic</th>
                <th className="text-center py-2 px-2 font-bold text-white text-sm bg-primary border-b-2 border-primary">Pro</th>
                <th className="text-center py-2 px-2 font-bold text-secondary text-sm border-b-2 border-gray-200">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.categories.map((category, catIndex) => (
                <React.Fragment key={`category-${catIndex}`}>
                  {/* Category Header Row */}
                  <tr>
                    <td colSpan={5} className="pt-4 pb-1.5">
                      <h4 className="text-sm font-bold text-secondary uppercase tracking-wide border-b border-primary/30 pb-1">{category.name}</h4>
                    </td>
                  </tr>
                  {/* Feature Rows */}
                  {category.features.map((feature, featIndex) => (
                    <tr key={`feature-${catIndex}-${featIndex}`} className="border-b border-gray-50 hover:bg-gray-50/70 transition-colors">
                      <td className="py-2 pr-3 text-xs text-accent/80 font-medium">{feature.name}</td>
                      <td className="py-2 px-2 text-center">{renderCell(feature.free)}</td>
                      <td className="py-2 px-2 text-center">{renderCell(feature.basic)}</td>
                      <td className="py-2 px-2 text-center bg-primary/5">{renderCell(feature.pro)}</td>
                      <td className="py-2 px-2 text-center">{renderCell(feature.enterprise)}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Compact Footer */}
        <div className="bg-gray-50 border-t border-gray-100 px-4 md:px-6 py-2.5 flex justify-between items-center shrink-0">
          <p className="text-xs text-accent/60">Scroll to see all features</p>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
