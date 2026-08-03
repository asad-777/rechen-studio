'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkle, ArrowRight, CalendarCheck, Code, Globe, ShieldCheck, Lightning } from '@phosphor-icons/react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950">
      
      {/* Decorative Background Lighting & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[900px] h-[400px] bg-gradient-to-tr from-violet-600/20 via-pink-600/15 to-indigo-600/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415510_1px,transparent_1px),linear-gradient(to_bottom,#33415510_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 font-mono text-xs uppercase tracking-widest font-semibold shadow-inner animate-in fade-in slide-in-from-bottom-2 duration-500">
            <Sparkle weight="fill" className="w-4 h-4 text-pink-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Award-Winning Fullstack & Digital Studio</span>
          </div>

          {/* Main Typography Headline */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05] animate-in fade-in slide-in-from-bottom-4 duration-700">
            Architecting <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-pink-500 bg-clip-text text-transparent">Digital Dominance</span> For The Bold
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal animate-in fade-in slide-in-from-bottom-6 duration-700">
            Rechen Studio engineers bespoke web applications, immersive interactive frontends, and aggressive technical SEO infrastructures that turn complex concepts into commercial velocity.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md pt-2 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-button text-lg font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 via-indigo-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105"
            >
              <CalendarCheck weight="fill" className="w-5 h-5" />
              <span>Book a Scoping Meeting</span>
            </Link>

            <Link
              href="/case-studies"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl font-button text-lg font-bold uppercase tracking-wider bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all duration-200"
            >
              <span>View Case Studies</span>
              <ArrowRight weight="bold" className="w-4 h-4 text-indigo-400" />
            </Link>
          </div>

          {/* Value Highlights Pill Tray */}
          <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl border-t border-slate-800/80 mt-8">
            {[
              { icon: Code, text: "Next.js & React 19" },
              { icon: Lightning, text: "Sub-Second Rendering" },
              { icon: Globe, text: "Programmatic SEO" },
              { icon: ShieldCheck, text: "99.99% Reliability" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/50 border border-slate-800/60 text-slate-300 font-mono text-xs font-semibold">
                  <Icon weight="duotone" className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
