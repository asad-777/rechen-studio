'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  List, 
  X, 
  CaretDown,
  ArrowUpRight,
  PhoneCall,
  VideoCamera,
  Code,
  ChartBar,
  ShareNetwork,
  Hammer,
  HouseLine,
  Lightning,
  Buildings,
  Compass,
  ShieldCheck,
  Question,
  UserFocus
} from '@phosphor-icons/react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const closeTimeoutRef = useRef(null);

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

  const handleMouseEnter = (name) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  };

  const isHomePage = pathname === '/';

  const navLinks = [
    ...(!isHomePage ? [{ name: 'HOME', href: '/', hasDropdown: false }] : []),
    { name: 'SERVICES', href: '/services', hasDropdown: true },
    { name: 'WHO WE HELP', href: '/#niches', hasDropdown: true },
    { name: 'WHO WE ARE', href: '/about', hasDropdown: true },
  ];

  const isHeaderSolid = isScrolled || activeDropdown !== null;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 border-b ${
          !isHeaderSolid 
            ? 'bg-base-a/80 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border-b-base-c lg:border-b-transparent'
            : 'bg-base-a/95 backdrop-blur-xl border-b-base-c shadow-xl'
        }`}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => {
          if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between gap-4">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/bglogo.png"
                alt="Rechen Studio Logo"
                width={180}
                height={60}
                className="w-auto h-10 md:h-12 object-contain group-hover:opacity-90 transition-all duration-300 brightness-0 invert"
                priority
              />
              <span className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-text-content">
                Rechen Studio
              </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center justify-center gap-8 2xl:gap-12 flex-1 h-full">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => link.hasDropdown ? handleMouseEnter(link.name) : setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`font-mono text-sm 2xl:text-base lg:text-lg font-semibold transition-colors flex items-center gap-1.5 py-2 ${
                    activeDropdown === link.name ? 'text-primary-color' : 'text-text-content/90 hover:text-primary-color'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <CaretDown 
                      weight="bold" 
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        activeDropdown === link.name ? 'rotate-180 text-primary-color' : 'text-text-content/50'
                      }`} 
                    />
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right: Action Buttons */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link href="/contact-us" className='group'>
              <button className="px-5 py-2.5 bg-base-1a/50 backdrop-blur-2xl  hover:bg-primary-color/90 hover:text-black text-primary-color border-2 border-primary-color font-mono text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer">
                <span className="flex items-center  gap-1.5 text-black">
                  <PhoneCall weight="fill" className="w-4 h-4 text-primary-color group-hover:text-black" />
                  <span className="opacity-50 font-mono text-xs text-primary-color group-hover:text-black">/</span>
                  <VideoCamera weight="fill" className="w-4 h-4 text-primary-color group-hover:text-black" />
                </span>
                <span>Get In Touch</span>
              </button>
            </Link>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex items-center gap-4 lg:hidden shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-base-b text-text-content hover:bg-base-c transition-colors cursor-pointer"
              aria-label="Open navigation menu"
            >
              <List weight="bold" className="w-7 h-7" />
            </button>
          </div>
        </div>

        {/* Mega Dropdown Panel */}
        <div 
          className={`hidden lg:block absolute top-full left-0 w-full bg-base-a/95 backdrop-blur-2xl border-t border-b border-base-c shadow-2xl transition-all duration-300 overflow-hidden ${
            activeDropdown 
              ? 'opacity-100 max-h-[500px] py-8 pointer-events-auto' 
              : 'opacity-0 max-h-0 py-0 pointer-events-none'
          }`}
          onMouseEnter={() => {
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            {/* Dropdown: SERVICES */}
            {activeDropdown === 'SERVICES' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link 
                    href="/services" 
                    onClick={() => setActiveDropdown(null)}
                    className="group p-6 rounded-2xl bg-base-b/80 hover:bg-base-b border border-base-c hover:border-primary-color/60 transition-all duration-300 hover:-translate-y-1 shadow-md space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-base-a border border-base-c flex items-center justify-center text-primary-color group-hover:scale-110 transition-transform">
                      <Code weight="bold" className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading text-lg font-bold text-text-content group-hover:text-primary-color transition-colors flex items-center justify-between">
                      <span>High-Converting Web Apps</span>
                      <ArrowUpRight weight="bold" className="w-4 h-4 text-primary-color opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="font-sans text-xs text-text-content/70 leading-relaxed">
                      Sub-second Next.js builds with instant SMS/email lead dispatch and custom project portfolios.
                    </p>
                  </Link>

                  <Link 
                    href="/services" 
                    onClick={() => setActiveDropdown(null)}
                    className="group p-6 rounded-2xl bg-base-b/80 hover:bg-base-b border border-base-c hover:border-primary-color/60 transition-all duration-300 hover:-translate-y-1 shadow-md space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-base-a border border-base-c flex items-center justify-center text-primary-color group-hover:scale-110 transition-transform">
                      <ChartBar weight="bold" className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading text-lg font-bold text-text-content group-hover:text-primary-color transition-colors flex items-center justify-between">
                      <span>Google Local SEO Domination</span>
                      <ArrowUpRight weight="bold" className="w-4 h-4 text-primary-color opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="font-sans text-xs text-text-content/70 leading-relaxed">
                      Rank #1 in your service territory on Google Map Pack and capture high-margin local inquiries.
                    </p>
                  </Link>

                  <Link 
                    href="/services" 
                    onClick={() => setActiveDropdown(null)}
                    className="group p-6 rounded-2xl bg-base-b/80 hover:bg-base-b border border-base-c hover:border-primary-color/60 transition-all duration-300 hover:-translate-y-1 shadow-md space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-base-a border border-base-c flex items-center justify-center text-primary-color group-hover:scale-110 transition-transform">
                      <ShareNetwork weight="bold" className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading text-lg font-bold text-text-content group-hover:text-primary-color transition-colors flex items-center justify-between">
                      <span>Brand Authority & Social Growth</span>
                      <ArrowUpRight weight="bold" className="w-4 h-4 text-primary-color opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="font-sans text-xs text-text-content/70 leading-relaxed">
                      High-trust branding assets, vehicle wraps, and automated Google review funnels.
                    </p>
                  </Link>
                </div>

                <div className="pt-2 border-t border-base-c/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-text-content/60">Bespoke technical execution for contractors & local trades.</span>
                  <Link 
                    href="/services" 
                    onClick={() => setActiveDropdown(null)}
                    className="text-primary-color font-bold hover:underline flex items-center gap-1.5"
                  >
                    <span>Explore All Service Capabilities</span>
                    <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* Dropdown: WHO WE HELP */}
            {activeDropdown === 'WHO WE HELP' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                  <Link 
                    href="/#niches" 
                    onClick={() => setActiveDropdown(null)}
                    className="group p-5 rounded-2xl bg-base-b/80 hover:bg-base-b border border-base-c hover:border-primary-color/60 transition-all duration-300 hover:-translate-y-1 shadow-md space-y-2.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-base-a border border-base-c flex items-center justify-center text-primary-color group-hover:scale-110 transition-transform">
                      <Hammer weight="bold" className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading text-base font-bold text-text-content group-hover:text-primary-color transition-colors">
                      Construction & Trades
                    </h4>
                    <p className="font-sans text-xs text-text-content/70 leading-relaxed">
                      General contractors, custom home builders, remodeling & framing specialists.
                    </p>
                  </Link>

                  <Link 
                    href="/#niches" 
                    onClick={() => setActiveDropdown(null)}
                    className="group p-5 rounded-2xl bg-base-b/80 hover:bg-base-b border border-base-c hover:border-primary-color/60 transition-all duration-300 hover:-translate-y-1 shadow-md space-y-2.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-base-a border border-base-c flex items-center justify-center text-primary-color group-hover:scale-110 transition-transform">
                      <HouseLine weight="bold" className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading text-base font-bold text-text-content group-hover:text-primary-color transition-colors">
                      Roofing & Siding
                    </h4>
                    <p className="font-sans text-xs text-text-content/70 leading-relaxed">
                      Storm restoration, residential roof replacements & commercial coating.
                    </p>
                  </Link>

                  <Link 
                    href="/#niches" 
                    onClick={() => setActiveDropdown(null)}
                    className="group p-5 rounded-2xl bg-base-b/80 hover:bg-base-b border border-base-c hover:border-primary-color/60 transition-all duration-300 hover:-translate-y-1 shadow-md space-y-2.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-base-a border border-base-c flex items-center justify-center text-primary-color group-hover:scale-110 transition-transform">
                      <Lightning weight="bold" className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading text-base font-bold text-text-content group-hover:text-primary-color transition-colors">
                      HVAC & Plumbing
                    </h4>
                    <p className="font-sans text-xs text-text-content/70 leading-relaxed">
                      Urgent service dispatch, scheduled maintenance plans & high-margin installs.
                    </p>
                  </Link>

                  <Link 
                    href="/#niches" 
                    onClick={() => setActiveDropdown(null)}
                    className="group p-5 rounded-2xl bg-base-b/80 hover:bg-base-b border border-base-c hover:border-primary-color/60 transition-all duration-300 hover:-translate-y-1 shadow-md space-y-2.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-base-a border border-base-c flex items-center justify-center text-primary-color group-hover:scale-110 transition-transform">
                      <Buildings weight="bold" className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading text-base font-bold text-text-content group-hover:text-primary-color transition-colors">
                      Commercial Contractors
                    </h4>
                    <p className="font-sans text-xs text-text-content/70 leading-relaxed">
                      Large-scale commercial maintenance, industrial subcontracting & enterprise tenders.
                    </p>
                  </Link>
                </div>

                <div className="pt-2 border-t border-base-c/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-text-content/60">Every system tailored specifically to your trade sales mechanics.</span>
                  <Link 
                    href="/#niches" 
                    onClick={() => setActiveDropdown(null)}
                    className="text-primary-color font-bold hover:underline flex items-center gap-1.5"
                  >
                    <span>View All Industry Blueprints</span>
                    <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* Dropdown: WHO WE ARE */}
            {activeDropdown === 'WHO WE ARE' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                  <Link 
                    href="/about" 
                    onClick={() => setActiveDropdown(null)}
                    className="group p-5 rounded-2xl bg-base-b/80 hover:bg-base-b border border-base-c hover:border-primary-color/60 transition-all duration-300 hover:-translate-y-1 shadow-md space-y-2.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-base-a border border-base-c flex items-center justify-center text-primary-color group-hover:scale-110 transition-transform">
                      <UserFocus weight="bold" className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading text-base font-bold text-text-content group-hover:text-primary-color transition-colors">
                      About Rechen Studio
                    </h4>
                    <p className="font-sans text-xs text-text-content/70 leading-relaxed">
                      Our story, zero-bloat philosophy & direct 100% client code ownership.
                    </p>
                  </Link>

                  <Link 
                    href="/#process" 
                    onClick={() => setActiveDropdown(null)}
                    className="group p-5 rounded-2xl bg-base-b/80 hover:bg-base-b border border-base-c hover:border-primary-color/60 transition-all duration-300 hover:-translate-y-1 shadow-md space-y-2.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-base-a border border-base-c flex items-center justify-center text-primary-color group-hover:scale-110 transition-transform">
                      <Compass weight="bold" className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading text-base font-bold text-text-content group-hover:text-primary-color transition-colors">
                      4-Step Process
                    </h4>
                    <p className="font-sans text-xs text-text-content/70 leading-relaxed">
                      Predictable 7-14 day deployment pipeline with zero downtime or fluff.
                    </p>
                  </Link>

                  <Link 
                    href="/about#terms" 
                    onClick={() => setActiveDropdown(null)}
                    className="group p-5 rounded-2xl bg-base-b/80 hover:bg-base-b border border-base-c hover:border-primary-color/60 transition-all duration-300 hover:-translate-y-1 shadow-md space-y-2.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-base-a border border-base-c flex items-center justify-center text-primary-color group-hover:scale-110 transition-transform">
                      <ShieldCheck weight="bold" className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading text-base font-bold text-text-content group-hover:text-primary-color transition-colors">
                      Terms & SLAs
                    </h4>
                    <p className="font-sans text-xs text-text-content/70 leading-relaxed">
                      Transparent client rights, uptime guarantees, security SLAs & policies.
                    </p>
                  </Link>

                  <Link 
                    href="/#faq" 
                    onClick={() => setActiveDropdown(null)}
                    className="group p-5 rounded-2xl bg-base-b/80 hover:bg-base-b border border-base-c hover:border-primary-color/60 transition-all duration-300 hover:-translate-y-1 shadow-md space-y-2.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-base-a border border-base-c flex items-center justify-center text-primary-color group-hover:scale-110 transition-transform">
                      <Question weight="bold" className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading text-base font-bold text-text-content group-hover:text-primary-color transition-colors">
                      Studio FAQ
                    </h4>
                    <p className="font-sans text-xs text-text-content/70 leading-relaxed">
                      Clear answers on pricing, integrations, timelines, and maintenance.
                    </p>
                  </Link>
                </div>

                <div className="pt-2 border-t border-base-c/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-text-content/60">Engineering standards built on accountability and performance.</span>
                  <Link 
                    href="/about" 
                    onClick={() => setActiveDropdown(null)}
                    className="text-primary-color font-bold hover:underline flex items-center gap-1.5"
                  >
                    <span>Read Our Full Studio Overview</span>
                    <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

          </div>
        </div>
      </header>

      {/* Mobile Full Screen Menu Drawer (Outside Header for proper viewport stacking context) */}
      <div 
        className={`lg:hidden fixed inset-0 z-[100] w-screen h-screen bg-black flex flex-col pt-6 px-6 pb-10 transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'opacity-100 translate-x-0 pointer-events-auto visible' 
            : 'opacity-0 translate-x-full pointer-events-none invisible'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-base-c shrink-0">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
            <Image
              src="/bglogo.png"
              alt="Rechen Studio Logo"
              width={140}
              height={50}
              className="w-auto h-10 object-contain brightness-0 invert"
              priority
            />
            <span className="font-heading text-xl font-bold tracking-tight text-white">
              Rechen Studio
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 rounded-xl bg-base-b text-white hover:bg-base-c transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X weight="bold" className="w-7 h-7" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col space-y-4 pb-8 flex-1 overflow-y-auto">
          {!isHomePage && (
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)} 
              className="font-heading text-2xl font-bold text-white hover:text-primary-color transition-colors flex items-center justify-between py-2.5 border-b border-base-c/50"
            >
              <span>Home</span>
              <ArrowUpRight weight="bold" className="w-5 h-5 text-primary-color" />
            </Link>
          )}

          <Link 
            href="/services" 
            onClick={() => setMobileMenuOpen(false)} 
            className="font-heading text-2xl font-bold text-white hover:text-primary-color transition-colors flex items-center justify-between py-2.5 border-b border-base-c/50"
          >
            <span>Services</span>
            <ArrowUpRight weight="bold" className="w-5 h-5 text-primary-color" />
          </Link>

          <Link 
            href="/#niches" 
            onClick={() => setMobileMenuOpen(false)} 
            className="font-heading text-2xl font-bold text-white hover:text-primary-color transition-colors flex items-center justify-between py-2.5 border-b border-base-c/50"
          >
            <span>Who We Help</span>
            <ArrowUpRight weight="bold" className="w-5 h-5 text-primary-color" />
          </Link>

          <Link 
            href="/about" 
            onClick={() => setMobileMenuOpen(false)} 
            className="font-heading text-2xl font-bold text-white hover:text-primary-color transition-colors flex items-center justify-between py-2.5 border-b border-base-c/50"
          >
            <span>Who We Are</span>
            <ArrowUpRight weight="bold" className="w-5 h-5 text-primary-color" />
          </Link>

          <Link 
            href="/#process" 
            onClick={() => setMobileMenuOpen(false)} 
            className="font-heading text-2xl font-bold text-white hover:text-primary-color transition-colors flex items-center justify-between py-2.5 border-b border-base-c/50"
          >
            <span>Our Process</span>
            <ArrowUpRight weight="bold" className="w-5 h-5 text-primary-color" />
          </Link>

          <Link 
            href="/#faq" 
            onClick={() => setMobileMenuOpen(false)} 
            className="font-heading text-2xl font-bold text-white hover:text-primary-color transition-colors flex items-center justify-between py-2.5 border-b border-base-c/50"
          >
            <span>FAQ</span>
            <ArrowUpRight weight="bold" className="w-5 h-5 text-primary-color" />
          </Link>
        </nav>

        {/* Mobile CTA */}
        <div className="mt-auto pt-6 border-t border-base-c shrink-0">
          <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
            <button className="w-full py-3.5 bg-primary-color hover:bg-primary-color/90 text-black font-mono text-sm font-bold uppercase tracking-wider rounded-full shadow-lg flex items-center justify-center gap-2.5 cursor-pointer">
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
