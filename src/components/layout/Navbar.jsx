'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 text-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
            <Sparkle weight="fill" className="w-5 h-5 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Rechen
            </span>
            <span className="font-mono text-[10px] tracking-widest uppercase text-indigo-400 font-semibold">
              Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 shadow-inner">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-full font-mono text-xs font-medium uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                  isActive(link.href)
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
                {link.hasDropdown && <CaretDown weight="bold" className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />}
              </Link>

              {/* Dropdown for Services */}
              {link.hasDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 py-2 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                  {serviceSubLinks.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="flex items-center justify-between px-4 py-2 text-xs font-mono uppercase text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                    >
                      <span>{sub.name}</span>
                      <ArrowRight className="w-3 h-3 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Action Buttons (CTAs) */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact-us"
            className="group px-4 py-2.5 rounded-full font-button text-base font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 hover:bg-slate-800/40 transition-all duration-200 flex items-center gap-2"
          >
            <EnvelopeSimple weight="duotone" className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
            <span>Get in Touch</span>
          </Link>

          <Link
            href="/contact-us"
            className="relative group overflow-hidden rounded-full p-px font-button text-base font-semibold transition-transform active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-pink-600 to-indigo-600 animate-gradient-xy"></span>
            <span className="relative block px-5 py-2.5 rounded-full bg-slate-950 text-white group-hover:bg-transparent transition-colors duration-300 flex items-center gap-2">
              <CalendarCheck weight="fill" className="w-4 h-4 text-pink-400 group-hover:text-white transition-colors" />
              <span>Book a meeting</span>
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X weight="bold" className="w-6 h-6 text-pink-500" />
            ) : (
              <List weight="bold" className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-mono text-sm uppercase font-medium flex items-center justify-between ${
                    isActive(link.href)
                      ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight weight="bold" className="w-4 h-4 text-slate-500" />
                </Link>

                {link.hasDropdown && (
                  <div className="pl-4 mt-1 space-y-1 border-l border-slate-800 ml-4">
                    {serviceSubLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-xs font-mono uppercase text-slate-400 hover:text-white"
                      >
                        • {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 gap-2.5">
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl font-button text-lg font-semibold text-center bg-slate-900 text-slate-200 border border-slate-700 flex items-center justify-center gap-2"
            >
              <EnvelopeSimple weight="duotone" className="w-5 h-5 text-indigo-400" />
              <span>Get in Touch</span>
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl font-button text-lg font-semibold text-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
            >
              <CalendarCheck weight="fill" className="w-5 h-5 text-white" />
              <span>Book a meeting</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
