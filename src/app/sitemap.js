export default function sitemap() {
  const baseUrl = 'https://rechenstudio.vercel.app';

  const routes = [
    '',
    '/services',
    '/about',
    '/contact-us',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
