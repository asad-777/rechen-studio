'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  List, 
  X, 
  CaretDown
} from '@phosphor-icons/react';
import { AnimatedThemeToggler } from '../ui/animated-theme-toggler';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  const navLinks = [
    { name: 'WHAT WE DO', href: '/services', hasDropdown: true },
    { name: 'WHO WE HELP', href: '/case-studies', hasDropdown: true },
    { name: 'HOW WE DELIVER', href: '/process', hasDropdown: true },
  ];

  const serviceSubLinks = [
    { name: 'Placeholder 1', href: '#' },
    { name: 'Placeholder 2', href: '#' },
    { name: 'Placeholder 3', href: '#' },
  ];

  return (
    <header 
      className="sticky top-0 z-50 w-full bg-[#E6D8C3] dark:bg-black text-black dark:text-white transition-all duration-300"
      style={{
        '--background': '#F5F5F0',
        '--foreground': '#000000',
        '--primary-foreground': '#FFFFFF',
      }}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 h-20 lg:h-24 flex items-center justify-between gap-4">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-6 lg:gap-10 shrink-0">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/bglogo.png"
              alt="Rechen Studio Logo"
              width={200}
              height={80}
              className="w-auto h-12 md:h-14 lg:h-16 object-contain group-hover:opacity-90 transition-opacity duration-300 dark:invert"
              priority
            />
              <span className="font-heading text-2xl font-bold tracking-tight text-black dark:text-white">
                Rechen Studio
              </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center justify-center gap-12 2xl:gap-16 flex-1 h-full">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative h-full flex items-center"
              onMouseEnter={() => link.hasDropdown ? setActiveDropdown(link.name) : setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="font-mono text-base 2xl:text-lg font-medium transition-all duration-200 flex items-center gap-2 text-black/90 dark:text-white/90 hover:text-black dark:hover:text-white"
              >
                {link.name}
                {link.hasDropdown && <CaretDown weight="bold" className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
              </Link>
            </div>
          ))}
        </nav>

        {/* Right: Action Buttons & Theme Switch */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <AnimatedThemeToggler />
          
          <Link href="/contact-us">
            <button className="btn text-lg px-6 py-4 shadow-none bg-white text-black hover:bg-primary-a hover:text-white hover:border-primary-a hover:text-xl border border-black dark:border-white text-black dark:text-white rounded-full transition-all duration-300  hover:scale-[1.02]">
              Let&apos;s Talk Business
            </button>
          </Link>
        </div>

        {/* Mobile menu controls */}
        <div className="flex items-center gap-4 lg:hidden shrink-0">
          <div className="sm:hidden">
            <AnimatedThemeToggler />
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-transparent  text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X weight="bold" className="w-8 h-8" />
            ) : (
              <List weight="bold" className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mega Dropdown */}
      <div 
        className={`absolute top-full left-0 w-full bg-base-2a/60 dark:bg-[#1A1A1A]/20 border-t backdrop-blur-2xl border-black/10 dark:border-white/10 shadow-2xl transition-all duration-300 overflow-hidden ${activeDropdown ? 'opacity-100 h-[40vh] pointer-events-auto' : 'opacity-0 h-0 pointer-events-none'}`}
      >
        <div className="w-full max-w-7xl mx-auto p-10 h-full">
          <div className="grid grid-cols-4 gap-6 h-full pb-6">
            {[1, 2, 3, 4].map(i => (
               <Link href="#" key={i} className="rounded-2xl bg-linear-to-br from-primary-a/50 to-base-2a dark:from-white/10 dark:to-transparent p-6 hover:scale-[1.02] transition-transform flex flex-col justify-end border border-black/5 dark:border-white/5">
                  <span className="font-mono font-bold text-lg text-black dark:text-white">{activeDropdown} Link {i}</span>
               </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#E6D8C3] dark:bg-black border-t border-black/10 dark:border-white/10 px-4 pt-4 pb-8 space-y-6 shadow-xl absolute w-full">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 font-mono text-lg font-medium text-black dark:text-white flex items-center justify-between border-b border-black/10 dark:border-white/10"
                >
                  <span>{link.name}</span>
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex flex-col gap-4 px-4 pt-4">
            <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
              <button className="btn bg-transparent py-6 shadow-none text-black dark:text-white border hover:bg-transparent dark:border-white border-black w-full rounded-full text-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                Let&apos;s Talk Business
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
