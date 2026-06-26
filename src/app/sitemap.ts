import type { MetadataRoute } from 'next';

const siteUrl = 'https://pianist-site-vincentmardons-projects.vercel.app/';

const routes = [
  { path: '/', priority: 1 },
  { path: '/presentation', priority: 0.9 },
  { path: '/pedagogie', priority: 0.9 },
  { path: '/tarifs', priority: 0.8 },
  { path: '/contact', priority: 0.8 },
  { path: '/mentions-legales', priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route.priority,
  }));
}
