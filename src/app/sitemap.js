export default function sitemap() {
  const baseUrl = 'https://rechenstudio.vercel.app';

  const routes = [
    '',
    '/about',
    '/case-studies',
    '/contact-us',
    '/process',
    '/services',
    '/services/seo',
    '/services/social-media',
    '/services/websites-and-web-apps',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
