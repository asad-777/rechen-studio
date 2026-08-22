'use client';

import React from 'react';
import Link from 'next/link';
import { CalendarCheck, RocketLaunch, Sparkle, ChatCircleDots } from '@phosphor-icons/react';

export default function ContactCta() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 transition-colors duration-300">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-base-2a text-text-black border border-base-3a p-10 md:p-16 lg:p-20 shadow-xl">
        
        {/* Background glow and decor */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-150 h-150 bg-primary-a/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 w-150 h-150 bg-primary-a/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center gap-10">
          
          {/* Center Text */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-black tracking-tight leading-tight">
              Let's Build Your Next <span className="text-primary-a">Big Thing.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-text-black/80 leading-relaxed max-w-2xl mx-auto">
              Whether you need a full-scale web application, an award-winning brand platform, or deep technical SEO restructuring, our team is ready to deliver.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto justify-center pt-4">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto px-10 py-4.5 rounded-2xl font-button text-lg font-bold uppercase tracking-wider bg-primary-a hover:bg-primary-a/90 text-text-white shadow-lg shadow-primary-a/20 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
            >
              <CalendarCheck weight="fill" className="w-6 h-6" />
              <span>Book an Intro Meeting</span>
            </Link>

            <Link
              href="/contact-us"
              className="w-full sm:w-auto px-8 py-4.5 rounded-2xl font-button text-lg font-bold uppercase tracking-wider bg-base-1a hover:bg-base-3a/40 border border-base-3a text-text-black flex items-center justify-center gap-3 transition-all duration-300 shadow-sm"
            >
              <ChatCircleDots weight="duotone" className="w-6 h-6 text-primary-a" />
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>

        <div className="relative z-10 mt-16 pt-8 border-t border-base-3a flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-mono text-text-black/60 uppercase tracking-widest font-semibold">
          <span className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-a"></span>
            <span>Fixed-Price Scoping Available</span>
          </span>
          <span className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-a"></span>
            <span>24-Hour Scoping Response Time</span>
          </span>
          <span className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-a"></span>
            <span>Zero Obligation Preliminary Audit</span>
          </span>
        </div>
      </div>
    </section>
  );
}
