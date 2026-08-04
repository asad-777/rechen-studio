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
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Process', href: '/process' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const serviceLinks = [
    { name: 'Websites & Web-Apps', href: '/services/websites-and-web-apps' },
    { name: 'SEO & Growth Strategy', href: '/services/seo' },
    { name: 'Social Media Branding', href: '/services/social-media' },
  ];

  return (
    <footer className="relative bg-base-2a text-text-black border-t border-base-3a overflow-hidden pt-16 transition-colors duration-300">
      {/* Background illumination */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-base-3a/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Newsletter Section embedded as requested in wireframe */}
        <section aria-label="Studio Newsletter">
          <Newsletter />
        </section>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-base-3a">
          
          {/* Col 1-2: Logo & Bio */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <Image
                src="/logo.png"
                alt="Rechen Studio Logo"
                width={44}
                height={44}
                className="w-11 h-11 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold tracking-tight text-text-black">
                  Rechen
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-primary-a font-semibold">
                  Studio
                </span>
              </div>
            </Link>

            <p className="font-sans text-sm text-text-black/80 leading-relaxed max-w-sm">
              We engineer dynamic digital experiences, award-winning custom platforms, and high-conversion web applications tailored for ambitious brands.
            </p>

            <div className="pt-2 space-y-2 font-mono text-xs text-text-black/80">
              <div className="flex items-center gap-2.5">
                <MapPin weight="duotone" className="w-4 h-4 text-primary-a" />
                <span>Berlin & Global Remote</span>
              </div>
              <div className="flex items-center gap-2.5">
                <EnvelopeSimple weight="duotone" className="w-4 h-4 text-primary-a" />
                <span>hello@rechen-studio.com</span>
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
                    className="p-2.5 rounded-xl bg-base-1a border border-base-3a text-text-black/70 hover:text-text-black hover:border-primary-a hover:bg-base-3a/30 transition-all duration-200"
                  >
                    <IconComponent weight="fill" className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-text-black font-bold border-l-2 border-primary-a pl-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-mono text-sm">
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
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-text-black font-bold border-l-2 border-primary-a pl-3">
              Core Services
            </h4>
            <ul className="space-y-2.5 font-mono text-sm">
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

          {/* Col 5: Back to Top & Office CTA */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-text-black font-bold border-l-2 border-primary-a pl-3">
                Quick Actions
              </h4>
              <p className="text-xs text-text-black/80 font-sans leading-relaxed">
                Ready to transform your vision into an exceptional web platform?
              </p>
              <Link
                href="/contact-us"
                className="w-full py-2.5 px-4 rounded-xl bg-primary-a hover:bg-primary-a/90 border border-primary-a text-text-white font-button text-sm font-semibold uppercase tracking-wider text-center block transition-all shadow-sm"
              >
                Start Your Project
              </Link>
            </div>

            {/* Back to Top button from Wireframe */}
            <button
              onClick={scrollToTop}
              type="button"
              className="group w-full py-3 px-4 rounded-2xl bg-base-1a border border-base-3a hover:border-primary-a text-text-black/90 hover:text-text-black font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
            >
              <span>Back to top</span>
              <ArrowUp weight="bold" className="w-4 h-4 text-primary-a group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="pb-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-black/70">
          <p>© {new Date().getFullYear()} Rechen Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Built with <Heart weight="fill" className="w-3.5 h-3.5 text-primary-a" /> by Rechen Engineering Team
            </span>
            <Link href="/contact-us" className="hover:text-text-black transition-colors">Privacy & Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
