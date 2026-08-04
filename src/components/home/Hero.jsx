'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkle, ArrowRight, CalendarCheck, Code, Globe, ShieldCheck, Lightning } from '@phosphor-icons/react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden bg-base-1a transition-colors duration-300">
      
      {/* Decorative Background Lighting & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[900px] h-[400px] bg-base-3a/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C2A68C20_1px,transparent_1px),linear-gradient(to_bottom,#C2A68C20_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-2a border border-base-3a text-text-black font-mono text-xs uppercase tracking-widest font-semibold shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
            <Sparkle weight="fill" className="w-4 h-4 text-primary-a animate-spin" style={{ animationDuration: '8s' }} />
            <span>Award-Winning Fullstack & Digital Studio</span>
          </div>

          {/* Main Typography Headline */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-black leading-[1.05] animate-in fade-in slide-in-from-bottom-4 duration-700">
            Architecting <span className="text-primary-a">Digital Dominance</span> For The Bold
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-text-black/80 max-w-2xl leading-relaxed font-normal animate-in fade-in slide-in-from-bottom-6 duration-700">
            Rechen Studio engineers bespoke web applications, immersive interactive frontends, and aggressive technical SEO infrastructures that turn complex concepts into commercial velocity.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md pt-2 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-button text-lg font-bold uppercase tracking-wider bg-primary-a hover:bg-primary-a/90 text-text-white shadow-lg flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105"
            >
              <CalendarCheck weight="fill" className="w-5 h-5 text-text-white" />
              <span>Book a Scoping Meeting</span>
            </Link>

            <Link
              href="/case-studies"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl font-button text-lg font-bold uppercase tracking-wider bg-base-2a hover:bg-base-3a/40 border border-base-3a text-text-black flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
            >
              <span>View Case Studies</span>
              <ArrowRight weight="bold" className="w-4 h-4 text-primary-a" />
            </Link>
          </div>

          {/* Value Highlights Pill Tray */}
          <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl border-t border-base-3a mt-8">
            {[
              { icon: Code, text: "Next.js & React 19" },
              { icon: Lightning, text: "Sub-Second Rendering" },
              { icon: Globe, text: "Programmatic SEO" },
              { icon: ShieldCheck, text: "99.99% Reliability" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center justify-center gap-2 p-3 rounded-xl bg-base-2a/70 border border-base-3a text-text-black font-mono text-xs font-semibold shadow-sm">
                  <Icon weight="duotone" className="w-4 h-4 text-primary-a shrink-0" />
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
