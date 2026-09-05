'use client';

import { useEffect } from 'react';
import { trackEvent } from '../../lib/analytics';

/**
 * Tracks every user interaction (clicks, button presses, link navigations, 
 * accordion interactions, and scroll depth milestones) across the Home page.
 */
export default function HomeInteractionTracker() {
  useEffect(() => {
    // 1. Click Interaction Delegation Tracker
    const handleClick = (e) => {
      const target = e.target;
      if (!target) return;

      // Find nearest clickable container
      const interactiveEl = target.closest('button, a, [role="button"], input[type="submit"], input[type="button"]');
      if (!interactiveEl) return;

      // Extract section identifier from closest section
      const sectionEl = interactiveEl.closest('section, header, footer');
      const sectionId = sectionEl?.id || sectionEl?.getAttribute('aria-label') || 'home_general';

      const text = (interactiveEl.innerText || interactiveEl.textContent || interactiveEl.getAttribute('aria-label') || '').trim().slice(0, 80);
      const href = interactiveEl.getAttribute('href') || null;
      const tagName = interactiveEl.tagName.toLowerCase();
      const elementId = interactiveEl.id || null;

      trackEvent('home_interaction', {
        interaction_type: 'click',
        element_type: tagName,
        element_text: text,
        element_href: href,
        element_id: elementId,
        section: sectionId,
      });

      // If it's a primary CTA link or button
      if (href === '/contact-us' || text.toLowerCase().includes('get in touch') || text.toLowerCase().includes('book a') || text.toLowerCase().includes('call')) {
        trackEvent('cta_click', {
          cta_text: text,
          cta_destination: href,
          section: sectionId,
        });
      }
    };

    // 2. Scroll Depth Milestones (25%, 50%, 75%, 90%)
    const milestones = new Set();
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

      [25, 50, 75, 90, 100].forEach((threshold) => {
        if (scrollPercent >= threshold && !milestones.has(threshold)) {
          milestones.add(threshold);
          trackEvent('scroll_depth', {
            depth_percentage: threshold,
            page: 'home',
          });
        }
      });
    };

    window.addEventListener('click', handleClick, { capture: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('click', handleClick, { capture: true });
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, []);

  return null;
}
