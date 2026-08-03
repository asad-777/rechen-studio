'use client';

import React from 'react';
import Link from 'next/link';
import { CalendarCheck, RocketLaunch, Sparkle, ChatCircleDots } from '@phosphor-icons/react';

export default function ContactCta() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-950 via-indigo-950 to-slate-950 border border-violet-500/30 p-10 md:p-16 shadow-2xl">
        
        {/* Background glow and decor */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Text */}
          <div className="space-y-6 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-violet-300 font-mono text-xs uppercase tracking-wider font-semibold">
              <RocketLaunch weight="fill" className="w-4 h-4 text-pink-400" />
              <span>Ready to Scale Your Digital Impact?</span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Let's Build Something <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">Extraordinary Together</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you need a full-scale web application, an award-winning brand platform, or deep technical SEO restructuring, our team is ready to deliver.
            </p>
          </div>

          {/* Right Action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto justify-center">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-button text-lg font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 via-pink-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-xl shadow-pink-600/30 flex items-center justify-center gap-2.5 transition-all duration-200 hover:scale-105"
            >
              <CalendarCheck weight="fill" className="w-5 h-5 text-white" />
              <span>Book an Intro Meeting</span>
            </Link>

            <Link
              href="/contact-us"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl font-button text-lg font-bold uppercase tracking-wider bg-slate-900/80 hover:bg-slate-900 border border-slate-700 text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all duration-200"
            >
              <ChatCircleDots weight="duotone" className="w-5 h-5 text-indigo-400" />
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>

        <div className="relative z-10 mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 text-xs font-mono text-slate-300 uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <Sparkle weight="fill" className="w-4 h-4 text-emerald-400" />
            <span>Fixed-Price Scoping Available</span>
          </span>
          <span className="flex items-center gap-2">
            <Sparkle weight="fill" className="w-4 h-4 text-emerald-400" />
            <span>24-Hour Scoping Response Time</span>
          </span>
          <span className="flex items-center gap-2">
            <Sparkle weight="fill" className="w-4 h-4 text-emerald-400" />
            <span>Zero Obligation Preliminary Audit</span>
          </span>
        </div>
      </div>
    </section>
  );
}
