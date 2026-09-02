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
  InstagramLogo,
  EnvelopeSimple,
  Phone,
  MapPin,
  ShieldCheck
} from '@phosphor-icons/react';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Who We Help', href: '/#niches' },
    { name: 'How It Works', href: '/#process' },
    { name: 'About Studio', href: '/about' },
    { name: 'Terms of Service', href: '/about#terms' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const serviceLinks = [
    { name: 'High-Converting Web Apps', href: '/services' },
    { name: 'Google Local SEO Domination', href: '/services' },
    { name: 'Automated Lead Booking Systems', href: '/services' },
    { name: 'Trade Branding & Digital Portfolios', href: '/services' },
  ];

  const nicheLinks = [
    { name: 'Construction & Trades', href: '/#niches' },
    { name: 'Electrical & HVAC', href: '/#niches' },
    { name: 'Transportation & Towing', href: '/#niches' },
    { name: 'Landscaping & Outdoor', href: '/#niches' },
    { name: 'Specialized & Professional', href: '/#niches' },
  ];

  return (
    <footer className="relative bg-base-a text-text-content border-t border-base-c overflow-hidden pt-16">
      {/* Background illumination */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-color/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Newsletter */}
        <section aria-label="Studio Newsletter">
          <Newsletter />
        </section>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-base-c">
          
          {/* Col 1: Logo & Bio */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <Image
                src="/bglogo.png"
                alt="Rechen Studio Logo"
                width={48}
                height={48}
                className="w-10 h-10 invert object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold tracking-tight text-text-content">
                  Rechen Studio
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-primary-color font-semibold">
                  Engineering & Growth
                </span>
              </div>
            </Link>

            <p className="font-sans text-sm text-text-content/70 leading-relaxed max-w-sm">
              We engineer custom, high-converting digital platforms and local SEO engines for contractors, trade professionals, and service industry leaders.
            </p>

            <div className="pt-2 space-y-2.5 font-mono text-xs text-text-content/70">
              <div className="flex items-center gap-2.5">
                <MapPin weight="duotone" className="w-4 h-4 text-primary-color" />
                <span>Global Remote Engineering • Fast Dispatch</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck weight="duotone" className="w-4 h-4 text-special-text" />
                <span>100% Code Ownership • Zero Vendor Lock-in</span>
              </div>
            </div>

            {/* Social handles */}
            <div className="flex items-center gap-3 pt-2">
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
                    className="p-2.5 rounded-xl bg-base-b border border-base-c text-text-content/70 hover:text-primary-color hover:border-primary-color transition-all duration-200 shadow-sm"
                  >
                    <IconComponent weight="fill" className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-text-content font-bold border-l-2 border-primary-color pl-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-mono text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-content/70 hover:text-primary-color hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-text-content font-bold border-l-2 border-primary-color pl-3">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 font-mono text-xs">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-content/70 hover:text-primary-color hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Niches & CTA */}
          <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-text-content font-bold border-l-2 border-primary-color pl-3">
                Industries We Scale
              </h4>
              <ul className="space-y-2 font-mono text-xs">
                {nicheLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-content/70 hover:text-primary-color hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Back to Top button */}
            <button
              onClick={scrollToTop}
              type="button"
              className="group w-full py-3 px-4 rounded-xl bg-base-b border border-base-c hover:border-primary-color text-text-content/80 hover:text-text-content font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-sm cursor-pointer mt-4"
            >
              <span>Back to top</span>
              <ArrowUp weight="bold" className="w-4 h-4 text-primary-color group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="pb-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-content/60">
          <p>© {new Date().getFullYear()} Rechen Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about#terms" className="underline hover:text-primary-color transition-colors">
              Terms of Service & SLAs
            </Link>
            <Link href="/contact-us" className="underline hover:text-primary-color transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
