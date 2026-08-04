'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  List, 
  X, 
  CalendarCheck, 
  EnvelopeSimple, 
  Sparkle, 
  ArrowRight,
  CaretDown
} from '@phosphor-icons/react';
import ThemeSwitch from '../ui/ThemeSwitch';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About Us', href: '/about' },
    { name: 'Process', href: '/process' },
  ];

  const serviceSubLinks = [
    { name: 'Websites & Web-Apps', href: '/services/websites-and-web-apps' },
    { name: 'SEO & Growth', href: '/services/seo' },
    { name: 'Social Media', href: '/services/social-media' },
  ];

  const isActive = (path) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-base-1a/90 border-b border-base-3a text-text-black transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.png"
            alt="Rechen Studio Logo"
            width={44}
            height={44}
            className="w-11 h-11 object-contain group-hover:scale-105 transition-transform duration-300"
            priority
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

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-base-2a/60 p-1.5 rounded-full border border-base-3a shadow-inner">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-full font-mono text-xs font-medium uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                  isActive(link.href)
                    ? 'bg-primary-a text-text-white shadow-sm'
                    : 'text-text-black/80 hover:text-text-black hover:bg-base-3a/40'
                }`}
              >
                {link.name}
                {link.hasDropdown && <CaretDown weight="bold" className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />}
              </Link>

              {/* Dropdown for Services */}
              {link.hasDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 py-2 bg-base-2a border border-base-3a rounded-2xl shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                  {serviceSubLinks.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="flex items-center justify-between px-4 py-2 text-xs font-mono uppercase text-text-black/80 hover:text-text-black hover:bg-base-3a/50 transition-colors"
                    >
                      <span>{sub.name}</span>
                      <ArrowRight className="w-3 h-3 text-primary-a opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Action Buttons (CTAs) & Theme Switch */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeSwitch />

          <Link
            href="/contact-us"
            className="group px-4 py-2.5 rounded-full font-button text-base font-semibold text-text-black border border-base-3a hover:bg-base-2a transition-all duration-200 flex items-center gap-2"
          >
            <EnvelopeSimple weight="duotone" className="w-4 h-4 text-primary-a group-hover:scale-110 transition-transform" />
            <span>Get in Touch</span>
          </Link>

          <Link
            href="/contact-us"
            className="group px-5 py-2.5 rounded-full bg-primary-a hover:bg-primary-a/90 text-text-white font-button text-base font-semibold transition-transform active:scale-95 flex items-center gap-2 shadow-sm"
          >
            <CalendarCheck weight="fill" className="w-4 h-4 text-text-white" />
            <span>Book a meeting</span>
          </Link>
        </div>

        {/* Mobile menu controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeSwitch />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-base-2a border border-base-3a text-text-black hover:bg-base-3a/40 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X weight="bold" className="w-6 h-6 text-primary-a" />
            ) : (
              <List weight="bold" className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-base-1a/95 backdrop-blur-2xl border-b border-base-3a px-4 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-mono text-sm uppercase font-medium flex items-center justify-between ${
                    isActive(link.href)
                      ? 'bg-primary-a/20 text-text-black border border-primary-a/30 font-bold'
                      : 'text-text-black/80 hover:bg-base-2a'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight weight="bold" className="w-4 h-4 text-text-black/60" />
                </Link>

                {link.hasDropdown && (
                  <div className="pl-4 mt-1 space-y-1 border-l border-base-3a ml-4">
                    {serviceSubLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-xs font-mono uppercase text-text-black/70 hover:text-text-black"
                      >
                        • {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="pt-4 border-t border-base-3a grid grid-cols-1 gap-2.5">
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl font-button text-lg font-semibold text-center bg-base-2a text-text-black border border-base-3a flex items-center justify-center gap-2"
            >
              <EnvelopeSimple weight="duotone" className="w-5 h-5 text-primary-a" />
              <span>Get in Touch</span>
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl font-button text-lg font-semibold text-center bg-primary-a text-text-white shadow-md flex items-center justify-center gap-2"
            >
              <CalendarCheck weight="fill" className="w-5 h-5 text-text-white" />
              <span>Book a meeting</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
