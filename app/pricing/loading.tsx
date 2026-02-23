// app/pricing/loading.tsx
export default function PricingLoading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        {/* Animated spinner */}
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        {/* Loading text */}
        <p className="text-accent/70 text-sm font-medium">Loading pricing...</p>
      </div>
    </div>
  );
}
