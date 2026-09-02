'use client';

import React from 'react';
import Link from 'next/link';
import { CalendarCheck, RocketLaunch, ChatCircleDots, ArrowRight, ShieldCheck } from '@phosphor-icons/react';

export default function ContactCta() {
  return (
    <section id="contact-cta" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-base-b text-text-content border border-base-c p-10 md:p-16 lg:p-20 shadow-2xl">
        
        {/* Background glow and decor */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-color/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-color/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center gap-8">

          {/* Center Text */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-content tracking-tight leading-tight">
              Turn Your Website Into Your <br className="hidden sm:inline" />
              <span className="text-primary-color">#1 Sales Rep</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-text-content/80 leading-relaxed max-w-2xl mx-auto">
              Stop letting competitors take the high-ticket jobs in your area. Get a bespoke, high-converting digital engine engineered in 7 to 14 days.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center pt-2">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full font-mono text-sm sm:text-base font-bold uppercase tracking-wider bg-primary-color hover:bg-primary-color/90 text-black shadow-lg shadow-primary-color/20 flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105 cursor-pointer"
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
        </div>

        <div className="relative z-10 mt-16 pt-8 border-t border-base-c/60 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-mono text-text-content/60 uppercase tracking-widest font-semibold">
          <span className="flex items-center gap-2">
            <ShieldCheck weight="fill" className="w-4 h-4 text-special-text" />
            <span>100% Code & Asset Ownership</span>
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck weight="fill" className="w-4 h-4 text-special-text" />
            <span>7 - 14 Day Delivery SLA</span>
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck weight="fill" className="w-4 h-4 text-special-text" />
            <span>Zero-Risk Discovery Call</span>
          </span>
        </div>
      </div>
    </section>
  );
}
