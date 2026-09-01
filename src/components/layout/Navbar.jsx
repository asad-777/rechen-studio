'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  List, 
  X, 
  CaretDown,
  ArrowUpRight
} from '@phosphor-icons/react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    // Trigger on mount in case we start scrolled
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = (name) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 500);
  };

  const navLinks = [
    { name: 'WHAT WE DO', href: '/services', hasDropdown: true },
    { name: 'WHO WE HELP', href: '/case-studies', hasDropdown: true },
    { name: 'HOW WE DELIVER', href: '/process', hasDropdown: true },
  ];

  const mobileDropdownData = {
    'WHAT WE DO': [
      { name: 'Websites & Web Apps', href: '/services/websites-and-web-apps' },
      { name: 'Social Media Strategy', href: '/services/social-media' },
      { name: 'Technical SEO', href: '/services/seo' },
      { name: 'All Services Overview', href: '/services' },
    ],
    'WHO WE HELP': [
      { name: 'Startups & Scale-ups', href: '/case-studies#startups' },
      { name: 'Enterprise & B2B', href: '/case-studies#enterprise' },
      { name: 'E-commerce & Retail', href: '/case-studies#ecommerce' },
      { name: 'All Case Studies', href: '/case-studies' },
    ],
    'HOW WE DELIVER': [
      { name: 'Our Process', href: '/process' },
      { name: 'About Rechen Studio', href: '/about' },
      { name: 'FAQ & Support', href: '/#faq' },
      { name: 'Contact Us', href: '/contact-us' },
    ]
  };

  const handleMobileNavClick = (name, hasDropdown, e) => {
    if (hasDropdown) {
      e.preventDefault();
      setMobileExpanded(mobileExpanded === name ? null : name);
    } else {
      setMobileMenuOpen(false);
    }
  };

  const isHeaderSolid = isScrolled || activeDropdown !== null;

  return (
    <header 
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 bg-base-a border-b border-base-c ${
        !isHeaderSolid 
          ? 'lg:bg-transparent lg:border-b-transparent'
          : ''
      }`}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 h-20 lg:h-20 flex items-center justify-between gap-4">
        
        {/* Left: Logo */}
        <div className={`flex items-center gap-6 lg:gap-10 shrink-0 transition-colors duration-300 ${!isHeaderSolid ? 'lg:mix-blend-difference lg:text-white' : 'text-text-content'}`}>
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/bglogo.png"
              alt="Rechen Studio Logo"
              width={200}
              height={80}
              className="w-auto h-12 md:h-14 lg:h-16 object-contain group-hover:opacity-90 transition-all duration-300 brightness-0 invert"
              priority
            />
              <span className="font-heading text-3xl font-bold tracking-tight">
                Rechen Studio
              </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className={`hidden xl:flex items-center justify-center gap-12 2xl:gap-16 flex-1 h-full transition-colors duration-300 ${!isHeaderSolid ? 'lg:mix-blend-difference lg:text-white' : 'text-text-content'}`}>
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative h-full flex items-center"
              onMouseEnter={() => link.hasDropdown ? handleMouseEnter(link.name) : handleMouseEnter(null)}
            >
              <Link
                href={link.href}
                className={`font-mono text-lg 2xl:text-xl font-medium transition-all duration-200 flex items-center gap-2 hover:opacity-70 ${activeDropdown === link.name ? 'opacity-70' : 'opacity-100'}`}
              >
                {link.name}
                {link.hasDropdown && <CaretDown weight="bold" className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
              </Link>
            </div>
          ))}
        </nav>

        {/* Right: Action Buttons */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link href="/contact-us">
            <button className="btn text-xl px-8 py-4 shadow-none bg-base-a text-primary-color font-bold border-2 border-primary-color hover:bg-primary-color hover:text-base-a rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
              Let&apos;s Talk Business
            </button>
          </Link>
        </div>

        {/* Mobile menu controls */}
        <div className="flex items-center gap-4 lg:hidden shrink-0">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2.5 rounded-xl bg-transparent text-text-content hover:bg-base-b transition-colors"
            aria-label="Open navigation menu"
          >
            <List weight="bold" className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Floating Mega Dropdown Container */}
      <div 
        className={`absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-base-a/95 backdrop-blur-2xl border border-base-c rounded-3xl shadow-2xl transition-all duration-300 ease-out origin-top text-text-content overflow-hidden mix-blend-normal ${
          activeDropdown 
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 scale-[0.98] pointer-events-none'
        }`}
        onMouseEnter={() => {
          if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        }}
      >
        <div className="w-full p-10 flex flex-col justify-center transition-all duration-300">
          
          {activeDropdown === 'WHAT WE DO' && (
            <div className="grid grid-cols-12 gap-10 items-center">
              <div className="col-span-5 flex flex-col justify-center gap-6 border-r border-base-c pr-10">
                <Link href="/services/websites-and-web-apps" className="group inline-flex items-center gap-2 text-2xl font-heading font-bold text-text-content hover:text-primary-color transition-colors w-max">
                  <span>Websites & Web Apps</span>
                  <ArrowUpRight weight="bold" className="w-5 h-5 shrink-0 text-primary-color" />
                </Link>
                <Link href="/services/social-media" className="group inline-flex items-center gap-2 text-2xl font-heading font-bold text-text-content hover:text-primary-color transition-colors w-max">
                  <span>Social Media Strategy</span>
                  <ArrowUpRight weight="bold" className="w-5 h-5 shrink-0 text-primary-color" />
                </Link>
                <Link href="/services/seo" className="group inline-flex items-center gap-2 text-2xl font-heading font-bold text-text-content hover:text-primary-color transition-colors w-max">
                  <span>Technical SEO</span>
                  <ArrowUpRight weight="bold" className="w-5 h-5 shrink-0 text-primary-color" />
                </Link>
                <Link href="/services" className="group inline-flex items-center gap-2 text-lg font-mono font-bold text-primary-color hover:text-text-content transition-colors mt-2 w-max">
                  <span>View All Services</span>
                  <ArrowUpRight weight="bold" className="w-4 h-4" />
                </Link>
              </div>
              <div className="col-span-7 grid grid-cols-2 gap-6 py-4">
                <Link href="/services" className="group relative block w-full h-[180px] rounded-2xl overflow-hidden shadow-md">
                  <img src="/services-1.jpg" alt="Web Apps" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                  <span className="absolute bottom-6 left-6 text-xl font-heading font-bold text-white drop-shadow-md">View Services</span>
                </Link>
                <Link href="/case-studies" className="group relative block w-full h-[180px] rounded-2xl overflow-hidden shadow-md">
                  <img src="/services-2.jpg" alt="Data Strategy" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                  <span className="absolute bottom-6 left-6 text-xl font-heading font-bold text-white drop-shadow-md">Case Studies</span>
                </Link>
              </div>
            </div>
          )}

          {activeDropdown === 'WHO WE HELP' && (
            <div className="flex flex-col gap-6 w-full">
              <div className="grid grid-cols-3 gap-8 py-4">
                <Link href="/case-studies#startups" className="group relative rounded-2xl overflow-hidden h-[200px] shadow-md">
                  <img src="/startups.jpg" alt="Startups" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:via-black/40 transition-colors" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end items-start">
                    <span className="inline-flex items-center gap-2 text-2xl font-heading font-bold text-white group-hover:text-primary-color transition-colors drop-shadow-md">
                      <span>Startups & Scale-ups</span>
                      <ArrowUpRight weight="bold" className="w-5 h-5 shrink-0 text-primary-color" />
                    </span>
                  </div>
                </Link>
                <Link href="/case-studies#enterprise" className="group relative rounded-2xl overflow-hidden h-[200px] shadow-md">
                  <img src="/enterprise.jpg" alt="Enterprise" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:via-black/40 transition-colors" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end items-start">
                    <span className="inline-flex items-center gap-2 text-2xl font-heading font-bold text-white group-hover:text-primary-color transition-colors drop-shadow-md">
                      <span>Enterprise & B2B</span>
                      <ArrowUpRight weight="bold" className="w-5 h-5 shrink-0 text-primary-color" />
                    </span>
                  </div>
                </Link>
                <Link href="/case-studies#ecommerce" className="group relative rounded-2xl overflow-hidden h-[200px] shadow-md">
                  <img src="/ecommerce.jpg" alt="E-commerce" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:via-black/40 transition-colors" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end items-start">
                    <span className="inline-flex items-center gap-2 text-2xl font-heading font-bold text-white group-hover:text-primary-color transition-colors drop-shadow-md">
                      <span>E-commerce & Retail</span>
                      <ArrowUpRight weight="bold" className="w-5 h-5 shrink-0 text-primary-color" />
                    </span>
                  </div>
                </Link>
              </div>
              <div className="flex justify-end px-2">
                <Link href="/case-studies" className="group inline-flex items-center gap-2 text-lg font-mono font-bold text-primary-color hover:text-text-content transition-colors w-max">
                  <span>View All Case Studies</span>
                  <ArrowUpRight weight="bold" className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {activeDropdown === 'HOW WE DELIVER' && (
            <div className="grid grid-cols-12 gap-10 items-center">
              <div className="col-span-5 flex flex-col justify-center gap-6 border-r border-base-c/50 pr-10">
                <Link href="/process" className="group inline-flex items-center gap-2 text-2xl font-heading font-bold text-text-content hover:text-primary-color transition-colors w-max">
                  <span>Our Process</span>
                  <ArrowUpRight weight="bold" className="w-5 h-5 shrink-0 text-primary-color" />
                </Link>
                <Link href="/about" className="group inline-flex items-center gap-2 text-2xl font-heading font-bold text-text-content hover:text-primary-color transition-colors w-max">
                  <span>About Us</span>
                  <ArrowUpRight weight="bold" className="w-5 h-5 shrink-0 text-primary-color" />
                </Link>
                <Link href="/contact-us" className="group inline-flex items-center gap-2 text-2xl font-heading font-bold text-text-content hover:text-primary-color transition-colors w-max">
                  <span>Contact</span>
                  <ArrowUpRight weight="bold" className="w-5 h-5 shrink-0 text-primary-color" />
                </Link>
              </div>
              <div className="col-span-7 py-4">
                <Link href="/#faq" className="group relative block w-full h-[200px] rounded-2xl overflow-hidden shadow-md">
                  <img src="/faq.jpg" alt="FAQ" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:via-black/40 transition-colors" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end items-start">
                    <span className="inline-flex items-center gap-2 text-2xl font-heading font-bold text-white group-hover:text-primary-color transition-colors drop-shadow-md">
                      <span>Frequently Asked Questions</span>
                      <ArrowUpRight weight="bold" className="w-5 h-5 shrink-0 text-primary-color" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-[70] bg-black flex flex-col pt-6 px-6 pb-12 overflow-y-auto transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
            <Image
              src="/bglogo.png"
              alt="Rechen Studio Logo"
              width={160}
              height={60}
              className="w-auto h-12 object-contain brightness-0 invert"
              priority
            />
            <span className="font-heading text-2xl font-bold tracking-tight text-text-content">
              Rechen Studio
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 rounded-xl bg-base-b text-text-content hover:bg-base-c transition-colors"
          >
            <X weight="bold" className="w-8 h-8" />
          </button>
        </div>

        {/* Mobile Navigation Links (Compact List) */}
        <nav className="flex flex-col justify-center items-center text-center gap-8 pb-10 flex-1 mt-8">
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="font-heading text-3xl font-bold text-text-content hover:text-primary-color transition-colors">
            Services
          </Link>
          <Link href="/case-studies" onClick={() => setMobileMenuOpen(false)} className="font-heading text-3xl font-bold text-text-content hover:text-primary-color transition-colors">
            Case Studies
          </Link>
          <Link href="/process" onClick={() => setMobileMenuOpen(false)} className="font-heading text-3xl font-bold text-text-content hover:text-primary-color transition-colors">
            Our Process
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="font-heading text-3xl font-bold text-text-content hover:text-primary-color transition-colors">
            About Us
          </Link>
          <Link href="/#faq" onClick={() => setMobileMenuOpen(false)} className="font-heading text-3xl font-bold text-text-content hover:text-primary-color transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Mobile CTA */}
        <div className="mt-auto pt-6 border-t border-base-c">
          <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
            <button className="btn py-5 bg-primary-color text-base-a font-bold border-none w-full rounded-full text-xl transition-all duration-300 hover:bg-primary-color/90 hover:-translate-y-1">
              Let&apos;s Talk Business
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
