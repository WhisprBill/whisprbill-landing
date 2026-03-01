import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://whisprbill.com';

  // Core pages with individual priority tuning
  const corePages = [
    { route: '',                              priority: 1.0, freq: 'daily'   },
    { route: '/features',                     priority: 0.9, freq: 'weekly'  },
    { route: '/pricing',                      priority: 0.9, freq: 'monthly' },
    { route: '/how-it-works',                 priority: 0.8, freq: 'monthly' },
    { route: '/testimonials',                 priority: 0.7, freq: 'monthly' },
    { route: '/security',                     priority: 0.6, freq: 'monthly' },
  ];

  // Feature sub-pages
  const featurePages = [
    '/features/ai-invoicing',       // Highest value - your main differentiator
    '/features/gst-compliance',     // High search volume in India
    '/features/templates',
    '/features/analytics',
    '/features/bulk-import',
    '/features/customer-management',
    '/features/multi-company',
    '/features/variants-pricing',
  ];

  return [
    // Core pages
    ...corePages.map(({ route, priority, freq }) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: freq as MetadataRoute.Sitemap[number]['changeFrequency'],
      priority,
    })),

    // Feature sub-pages
    ...featurePages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as MetadataRoute.Sitemap[number]['changeFrequency'],
      priority: 0.8,
    })),
  ];
}
