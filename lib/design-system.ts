// /lib/design-system.ts
// Centralized design system matching your homepage

export const typography = {
  // Page Titles (H1)
  h1: "text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-text tracking-tight leading-tight",
  
  // Section Headings (H2)
  h2: "text-3xl lg:text-4xl font-bold text-secondary",
  
  // Subsection Headings (H3)
  h3: "text-2xl sm:text-3xl font-bold text-secondary",
  
  // Card Titles (H4)
  h4: "text-xl font-bold text-secondary",
  
  // Body Text - Large
  bodyLarge: "text-base sm:text-lg md:text-xl text-accent/80 leading-relaxed",
  
  // Body Text - Normal
  body: "text-base text-accent/80 leading-relaxed",
  
  // Body Text - Small
  bodySmall: "text-sm text-accent/70 leading-relaxed",
  
  // Caption/Label
  caption: "text-xs sm:text-sm text-accent/60",
} as const;

export const spacing = {
  // Section padding
  section: "py-8 sm:py-12 lg:py-16 xl:py-20",
  sectionLarge: "py-12 sm:py-16 lg:py-20 xl:py-24",
  
  // Container
  container: "max-w-7xl mx-auto px-4 sm:px-6",
  containerWide: "max-w-[90rem] mx-auto px-4 sm:px-6",
  
  // Margins between sections
  marginBottom: "mb-8 sm:mb-12 lg:mb-16",
} as const;

export const buttons = {
  // Primary CTA button (matches Hero)
  primary: "px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white text-base sm:text-lg font-bold rounded-xl shadow-lg hover:bg-blue-600 transition-all transform hover:-translate-y-1",
  
  // Secondary button (matches Hero)
  secondary: "px-6 sm:px-8 py-3 sm:py-4 bg-white text-text border-2 border-gray-200 text-base sm:text-lg font-bold rounded-xl hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5",
  
  // Small button
  small: "px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors",
  
  // Link button
  link: "inline-flex items-center gap-2 text-primary font-semibold hover:text-blue-700 transition-colors",
} as const;

export const gradients = {
  // Hero background (matches your homepage exactly)
  hero: "from-blue-100 via-purple-100 to-transparent",
  
  // Section backgrounds
  sectionLight: "from-blue-50 to-purple-50",
  sectionPurple: "from-purple-50 via-pink-50 to-orange-50",
  sectionBlue: "from-blue-50 via-purple-50 to-pink-50",
  
  // Card backgrounds
  cardGradient: "from-blue-50 to-purple-50",
} as const;

export const cards = {
  // Standard card
  base: "bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100",
  
  // Hover card
  hover: "bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all",
  
  // Feature card
  feature: "bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all",
} as const;

export const backgrounds = {
  // Page backgrounds
  white: "bg-white",
  light: "bg-background",
  
  // Section backgrounds with gradients
  heroSection: "bg-gradient-to-br from-blue-100 via-purple-100 to-transparent",
  lightSection: "bg-gradient-to-br from-blue-50 to-purple-50",
  purpleSection: "bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50",
} as const;
