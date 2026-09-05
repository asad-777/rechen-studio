/**
 * Utility helper to send custom event triggers to Google Analytics (gtag.js)
 * @param {string} eventName - Name of the event (e.g., 'cta_click', 'faq_expand')
 * @param {Record<string, any>} eventParams - Additional parameters (e.g., { label: 'Hero CTA', category: 'Engagement' })
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      page_location: window.location.href,
      page_path: window.location.pathname,
      timestamp: new Date().toISOString(),
      ...eventParams,
    });
  }
};
