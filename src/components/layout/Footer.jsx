'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Newsletter from '../common/Newsletter';
import { 
  ArrowUp, 
  LinkedinLogo, 
  TwitterLogo, 
  GithubLogo, 
  InstagramLogo 
} from '@phosphor-icons/react';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const sitemapLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Who We Help', href: '/#niches' },
    { name: 'How It Works', href: '/#process' },
    { name: 'About Studio', href: '/about' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const otherLinks = [
    { name: 'Terms of Service', href: '/about#terms' },
    { name: 'Privacy Policy', href: '/about#privacy' },
    { name: 'Newsletter', href: '#newsletter' },
    { name: 'FAQ', href: '/#faq' },
  ];

  const socials = [
    { icon: LinkedinLogo, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: TwitterLogo, label: 'Twitter / X', href: 'https://twitter.com' },
    { icon: GithubLogo, label: 'GitHub', href: 'https://github.com' },
    { icon: InstagramLogo, label: 'Instagram', href: 'https://instagram.com' },
  ];

  return (
    <footer id="footer" className="relative min-h-screen w-full bg-base-a text-text-content border-t border-base-c flex flex-col justify-between pt-28 sm:pt-36 md:pt-40 pb-8 sm:pb-12 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary-color/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between space-y-12 sm:space-y-16 relative z-10">
        
        {/* Top: Newsletter Subscription Bar */}
        <section id="newsletter" aria-label="Studio Newsletter" className="w-full">
          <Newsletter />
        </section>

        {/* Middle: Clean Brand & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-4 pb-12 border-b border-base-c/60 flex-1 items-start">
          
          {/* Col 1: Logo, Tagline & Socials */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="flex items-center gap-3.5 group w-fit">
              <Image
                src="/bglogo.png"
                alt="Araa Soft Logo"
                width={48}
                height={48}
                className="w-11 h-11 invert object-contain group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold tracking-tight text-text-content">
                  Araa Soft
                </span>
                <span className="font-mono text-xs tracking-widest uppercase text-primary-color font-semibold">
                  Engineering & Growth
                </span>
              </div>
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-2xl bg-base-b border border-base-c text-text-content/70 hover:text-primary-color hover:border-primary-color/60 hover:scale-110 transition-all shadow-sm"
                  >
                    <Icon weight="fill" className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Sitemap Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-text-content font-bold border-l-2 border-primary-color pl-3">
              Sitemap
            </h4>
            <ul className="space-y-3 font-mono text-xs sm:text-sm">
              {sitemapLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-content/70 hover:text-primary-color hover:translate-x-1.5 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Others Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-text-content font-bold border-l-2 border-primary-color pl-3">
              Others
            </h4>
            <ul className="space-y-3 font-mono text-xs sm:text-sm">
              {otherLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-content/70 hover:text-primary-color hover:translate-x-1.5 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Back to Top */}
          <div className="lg:col-span-2 flex lg:justify-end">
            <button
              onClick={scrollToTop}
              type="button"
              className="py-3 px-5 rounded-2xl bg-base-b border border-base-c hover:border-primary-color text-text-content/80 hover:text-text-content font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-sm cursor-pointer hover:-translate-y-0.5 w-full lg:w-auto"
            >
              <span>Back to top</span>
              <ArrowUp weight="bold" className="w-4 h-4 text-primary-color" />
            </button>
          </div>

        </div>

        {/* Bottom: Copyrights & Legal Links */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-content/60">
          <p>© {new Date().getFullYear()} Araa Soft. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about#privacy" className="hover:text-primary-color transition-colors">
              Privacy Policy
            </Link>
            <span className="text-base-c">•</span>
            <Link href="/about#terms" className="hover:text-primary-color transition-colors">
              Terms of Service
            </Link>
            <span className="text-base-c">•</span>
            <Link href="/contact-us" className="hover:text-primary-color transition-colors">
              Contact
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
