'use client';

import React from 'react';
import Link from 'next/link';
import { CalendarCheck, ArrowRight, ShieldCheck } from '@phosphor-icons/react';

export default function ContactCta() {
  return (
    <section id="contact-cta" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-base-b text-text-content border border-base-c p-8 sm:p-12 lg:p-16 shadow-2xl">
        
        {/* Background glow */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-color/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-color/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Heading, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary-color bg-base-a px-3.5 py-1.5 rounded-full border border-base-c">
                Ready For High-Ticket Growth?
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-content tracking-tight leading-tight">
                Turn Your Website Into Your <br className="hidden sm:inline" />
                <span className="text-primary-color">#1 Sales Rep</span>
              </h2>

              <p className="font-sans text-sm sm:text-base md:text-lg text-text-content/80 leading-relaxed max-w-xl">
                Stop letting competitors take the high-ticket jobs in your area. Get a bespoke, high-converting digital engine engineered in 7 to 14 days.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
              <Link
                href="/contact-us"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wider bg-primary-color hover:bg-primary-color/90 text-black shadow-lg shadow-primary-color/20 flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <CalendarCheck weight="fill" className="w-5 h-5 text-black" />
                <span>Book A 15-Min Discovery Call</span>
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wider bg-base-a hover:bg-base-c/50 border border-base-c text-text-content flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
              >
                <span>Explore All Services</span>
                <ArrowRight weight="bold" className="w-4 h-4 text-primary-color" />
              </Link>
            </div>

            {/* Trust highlights */}
            <div className="pt-6 border-t border-base-c/60 flex flex-wrap items-center gap-4 sm:gap-8 text-xs font-mono text-text-content/60 uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <ShieldCheck weight="fill" className="w-4 h-4 text-special-text" />
                <span>100% Code Ownership</span>
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck weight="fill" className="w-4 h-4 text-special-text" />
                <span>7-14 Day Delivery</span>
              </span>
            </div>

          </div>

          {/* Right Column: Clean Frameless Floating SVG Vector Graphic */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="w-full max-w-sm lg:max-w-md flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/svgs/undraw_contact-us_s4jn.svg"
                alt="Contact Us Vector Illustration"
                className="w-full h-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
