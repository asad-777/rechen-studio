'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Newsletter from '../common/Newsletter';
import { 
  ArrowUp, 
  Sparkle, 
  LinkedinLogo, 
  TwitterLogo, 
  GithubLogo, 
  InstagramLogo,
  EnvelopeSimple,
  Phone,
  MapPin,
  Heart
} from '@phosphor-icons/react';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Process', href: '/process' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const serviceLinks = [
    { name: 'Websites & Web-Apps', href: '/services/websites-and-web-apps' },
    { name: 'SEO & Growth Strategy', href: '/services/seo' },
    { name: 'Social Media Branding', href: '/services/social-media' },
  ];

  const quickLinks = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
  ];

  return (
    <footer className="relative bg-base-2a text-text-black border-t border-base-3a overflow-hidden pt-16 transition-colors duration-300">
      {/* Background illumination */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-150 h-75 bg-base-3a/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Newsletter Section embedded as requested in wireframe */}
        <section aria-label="Studio Newsletter">
          <Newsletter />
        </section>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6 xl:gap-8 pb-12 border-b border-base-3a">
          
          {/* Col 1-2: Logo & Bio */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <Image
                src="/bglogo.png"
                alt="Rechen Studio Logo"
                width={48}
                height={48}
                className="w-12 h-12 invert object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="font-heading text-3xl font-bold tracking-tight text-text-black">
                  Rechen
                </span>
                <span className="font-mono text-xs tracking-widest uppercase text-primary-a font-semibold">
                  Studio
                </span>
              </div>
            </Link>

            <p className="font-sans text-base text-text-black/80 leading-relaxed max-w-sm">
              We engineer dynamic digital experiences, award-winning custom platforms, and high-conversion web applications tailored for ambitious brands.
            </p>

            <div className="pt-2 space-y-3 font-mono text-sm text-text-black/80">
              <div className="flex items-center gap-3">
                <MapPin weight="duotone" className="w-5 h-5 text-primary-a" />
                <span>Global Worldwide</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeSimple weight="duotone" className="w-5 h-5 text-primary-a" />
                <span>Coming Soon</span>
              </div>
            </div>

            {/* Social handles */}
            <div className="flex items-center gap-4 pt-4">
              {[
                { icon: LinkedinLogo, label: 'LinkedIn', href: '#' },
                { icon: TwitterLogo, label: 'Twitter / X', href: '#' },
                { icon: GithubLogo, label: 'GitHub', href: '#' },
                { icon: InstagramLogo, label: 'Instagram', href: '#' },
              ].map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-xl bg-base-1a border border-base-3a text-text-black/70 hover:text-text-black hover:border-primary-a hover:bg-base-3a/30 transition-all duration-200 shadow-sm hover:shadow"
                  >
                    <IconComponent weight="fill" className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-5">
            <h4 className="font-mono text-sm uppercase tracking-widest text-text-black font-bold border-l-2 border-primary-a pl-3">
              Navigation
            </h4>
            <ul className="space-y-3 font-mono text-base">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-black/80 hover:text-text-black hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services Links */}
          <div className="space-y-5">
            <h4 className="font-mono text-sm uppercase tracking-widest text-text-black font-bold border-l-2 border-primary-a pl-3">
              Core Services
            </h4>
            <ul className="space-y-3 font-mono text-base">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-black/80 hover:text-text-black hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Quick Links */}
          <div className="space-y-5">
            <h4 className="font-mono text-sm uppercase tracking-widest text-text-black font-bold border-l-2 border-primary-a pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3 font-mono text-base">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-black/80 hover:text-text-black hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 6: CTA & Back to Top */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <Link
                href="/contact-us"
                className="w-full py-3.5 px-4 rounded-xl bg-primary hover:scale-[1.02]  border border-primary-a text-text-white font-button text-base font-semibold uppercase tracking-wider text-center block transition-all shadow-md hover:shadow-lg"
              >
                Book A Call
              </Link>
            </div>

            {/* Back to Top button */}
            <button
              onClick={scrollToTop}
              type="button"
              className="group w-full py-3.5 px-4 rounded-2xl bg-base-1a border border-base-3a hover:border-primary-a text-text-black/90 hover:text-text-black font-mono text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
            >
              <span>Back to top</span>
              <ArrowUp weight="bold" className="w-5 h-5 text-primary-a group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="pb-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-black/70">
          <p>© {new Date().getFullYear()} Rechen Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Built by Rechen Studio Team
            </span>
            <Link href="/contact-us" className="text-lg underline font-bold hover:text-text-black transition-colors">Privacy & Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
