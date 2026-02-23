import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://whisprbill.com'; // Replace with your actual domain
  
  const routes = [
    '',
    '/features',
    '/features/ai-invoicing',
    '/features/templates',
    '/features/analytics',
    '/features/bulk-import',
    '/features/customer-management',
    '/features/multi-company',
    '/features/variants-pricing',
    '/features/gst-compliance',
    '/pricing',
    '/how-it-works',
    '/security',
    '/testimonials',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.includes('/features/') ? 0.8 : 0.9,
  }));
}
