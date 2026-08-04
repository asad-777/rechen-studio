'use client';

import React from 'react';
import Link from 'next/link';
import { CalendarCheck, RocketLaunch, Sparkle, ChatCircleDots } from '@phosphor-icons/react';

export default function ContactCta() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 transition-colors duration-300">
      <div className="relative overflow-hidden rounded-3xl bg-base-2a border border-base-3a p-10 md:p-16 shadow-md">
        
        {/* Background glow and decor */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-base-3a/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-base-3a/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Text */}
          <div className="space-y-6 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-base-1a border border-base-3a text-text-black font-mono text-xs uppercase tracking-wider font-bold shadow-sm">
              <RocketLaunch weight="fill" className="w-4 h-4 text-primary-a" />
              <span>Ready to Scale Your Digital Impact?</span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-text-black tracking-tight leading-tight">
              Let's Build Something <span className="text-primary-a underline decoration-primary-a/40 decoration-2 underline-offset-4">Extraordinary Together</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-text-black/80 leading-relaxed">
              Whether you need a full-scale web application, an award-winning brand platform, or deep technical SEO restructuring, our team is ready to deliver.
            </p>
          </div>

          {/* Right Action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto justify-center">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-button text-lg font-bold uppercase tracking-wider bg-primary-a hover:bg-primary-a/90 text-text-white shadow-md flex items-center justify-center gap-2.5 transition-all duration-200 hover:scale-105"
            >
              <CalendarCheck weight="fill" className="w-5 h-5 text-text-white" />
              <span>Book an Intro Meeting</span>
            </Link>

            <Link
              href="/contact-us"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl font-button text-lg font-bold uppercase tracking-wider bg-base-1a hover:bg-base-3a/40 border border-base-3a text-text-black flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
            >
              <ChatCircleDots weight="duotone" className="w-5 h-5 text-primary-a" />
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>

        <div className="relative z-10 mt-12 pt-8 border-t border-base-3a flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 text-xs font-mono text-text-black/80 uppercase tracking-widest font-semibold">
          <span className="flex items-center gap-2">
            <Sparkle weight="fill" className="w-4 h-4 text-primary-a" />
            <span>Fixed-Price Scoping Available</span>
          </span>
          <span className="flex items-center gap-2">
            <Sparkle weight="fill" className="w-4 h-4 text-primary-a" />
            <span>24-Hour Scoping Response Time</span>
          </span>
          <span className="flex items-center gap-2">
            <Sparkle weight="fill" className="w-4 h-4 text-primary-a" />
            <span>Zero Obligation Preliminary Audit</span>
          </span>
        </div>
      </div>
    </section>
  );
}
