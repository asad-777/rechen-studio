'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { List, X, ArrowUpRight, PhoneCall, VideoCamera } from '@phosphor-icons/react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Who We Help', href: '/#niches' },
    { name: 'Process', href: '/#process' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-base-a/90 backdrop-blur-xl border-b border-base-c shadow-lg py-3.5'
            : 'bg-base-a/60 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border-b border-base-c/40 lg:border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <Image
              src="/bglogo.png"
              alt="Araa Soft Logo"
              width={160}
              height={50}
              className="w-auto h-9 md:h-10 object-contain brightness-0 invert group-hover:opacity-90 transition-opacity"
              priority
            />
            <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-text-content">
              Araa Soft
            </span>
          </Link>

          {/* Simple Desktop Nav Links (No dropdowns) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-mono text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-primary-color'
                      : 'text-text-content/80 hover:text-primary-color'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center shrink-0">
            <div className='border-2 border-primary-a group rounded-full p-1 hover:scale-105 transition-all duration-300  cursor-pointer'>
            <Link href="/contact-us">
              <button className="px-4 py-1.5 font-mono text-xs sm:text-sm  bg-primary-a text-black rounded-full backdrop-blur-2xl  font-bold uppercase tracking-wider flex items-center gap-2 ">
                <span className="flex items-center gap-1.5 text-black">
                  <PhoneCall weight="fill" className="w-4 h-4 text-black" />
                  <span className="opacity-50 font-mono text-xs text-black">/</span>
                  <VideoCamera weight="fill" className="w-4 h-4 text-black" />
                </span>
                <span>Get In Touch</span>
              </button>
            </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl bg-base-b border border-base-c text-text-content hover:text-primary-color hover:border-primary-color/50 transition-colors cursor-pointer"
              aria-label="Open navigation menu"
            >
              <List weight="bold" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Clean Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-[100] bg-base-a flex flex-col p-6 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'opacity-100 translate-x-0 pointer-events-auto visible'
            : 'opacity-0 translate-x-full pointer-events-none invisible'
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between pb-5 border-b border-base-c shrink-0">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
            <Image
              src="/bglogo.png"
              alt="Araa Soft Logo"
              width={140}
              height={45}
              className="w-auto h-9 object-contain brightness-0 invert"
              priority
            />
            <span className="font-heading text-xl font-bold tracking-tight text-text-content">
              Araa Soft
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-xl bg-base-b border border-base-c text-text-content hover:bg-base-c transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X weight="bold" className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col space-y-2 py-8 flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-heading text-xl font-bold text-text-content hover:text-primary-color transition-colors flex items-center justify-between py-3.5 border-b border-base-c/40"
            >
              <span>{link.name}</span>
              <ArrowUpRight weight="bold" className="w-4 h-4 text-primary-color" />
            </Link>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div className="pt-4 border-t border-base-c shrink-0">
          <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
            <button className="w-full py-3.5 bg-primary-color hover:bg-primary-color/90 text-black font-mono text-sm font-bold uppercase tracking-wider rounded-full shadow-lg flex items-center justify-center gap-2.5 cursor-pointer transition-transform hover:scale-[1.02]">
              <span className="flex items-center gap-1.5 text-black">
                <PhoneCall weight="fill" className="w-4 h-4" />
                <span className="opacity-50 font-mono text-xs">/</span>
                <VideoCamera weight="fill" className="w-4 h-4" />
              </span>
              <span>Get In Touch</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
