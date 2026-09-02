'use client';

import React from 'react';
import { 
  XCircle, 
  CheckCircle, 
  TrendDown, 
  DeviceMobileCamera, 
  GlobeSimple,
  ArrowRight,
  PhoneCall,
  VideoCamera
} from '@phosphor-icons/react';
import Link from 'next/link';

export default function ProblemStatement() {
  const problems = [
    {
      icon: GlobeSimple,
      badge: "The Missing Presence Trap",
      title: "Zero Web Presence or Dead Socials",
      description: "Relying strictly on an abandoned Facebook page or word-of-mouth. When high-ticket homeowners search for you on Google, your competitors take the call simply because they look legitimate."
    },
    {
      icon: DeviceMobileCamera,
      badge: "The AI / DIY Template Trap",
      title: "Broken Lovable & Wix Single-Pagers",
      description: "Buggy single-page websites that load in 5+ seconds, break on mobile devices, and have broken contact forms where submitted quote requests vanish into thin air."
    },
    {
      icon: TrendDown,
      badge: "The Revenue Leak",
      title: "Losing $10,000+ High-Ticket Jobs",
      description: "When commercial clients or homeowners want roofing, remodeling, or electrical work, an amateur digital presence instantly destroys trust before you even quote."
    }
  ];

  return (
    <section id="problem" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-text-content leading-tight">
          Why Most Contractors Are <br className="hidden sm:inline" />
          <span className="text-primary-color">Leaking High-Ticket Jobs</span>
        </h2>
        
        <p className="font-sans text-base sm:text-lg text-text-content/70 leading-relaxed">
          Having a broken DIY website or an inactive Facebook page isn&apos;t just an aesthetic issue — it costs your business tens of thousands in lost revenue every month.
        </p>
      </div>

      {/* 3 Core Problem Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {problems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={idx}
              className="group relative p-8 rounded-3xl bg-base-b border border-base-c hover:border-primary-color/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-base-a border border-base-c flex items-center justify-center text-primary-color group-hover:scale-110 transition-transform">
                    <IconComponent weight="duotone" className="w-7 h-7" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-content/50 bg-base-a px-3 py-1 rounded-full border border-base-c">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary-color">
                    {item.badge}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-content">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-text-content/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-base-c/60 flex items-center gap-2 text-xs font-mono text-text-content/50">
                <XCircle weight="fill" className="w-4 h-4 text-red-500 shrink-0" />
                <span>Zero conversion & wasted leads</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Before vs After Comparison Grid */}
      <div className="p-8 sm:p-12 rounded-3xl bg-base-b border border-base-c relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-color/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text-content">
              Stop settling for broken systems. Start dominating your local market.
            </h3>
            <p className="font-sans text-sm text-text-content/70 leading-relaxed">
              We replace amateur templates with engineered digital engines that capture leads, book phone calls, and establish undisputed market authority.
            </p>
            <div className="pt-2">
              <Link href="/contact-us">
                <button className="px-6 py-3 bg-primary-color text-black font-mono text-sm sm:text-base font-bold uppercase tracking-wider rounded-full flex items-center gap-2.5 hover:bg-primary-color/90 hover:scale-105 transition-all shadow-lg cursor-pointer">
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

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* The Old Way */}
            <div className="p-6 rounded-2xl bg-base-a/80 border border-red-500/20 space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
                <XCircle weight="fill" className="w-5 h-5 text-red-500" />
                <span>The Amateur Way</span>
              </div>
              <ul className="space-y-3 font-sans text-xs text-text-content/70">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  <span>Slow 5+ second load times on mobile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  <span>Buggy Lovable/v0 code that breaks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  <span>Forms that don&apos;t notify your phone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  <span>Invisible on Google Local Maps</span>
                </li>
              </ul>
            </div>

            {/* The Rechen Studio Way */}
            <div className="p-6 rounded-2xl bg-base-a border border-primary-color/40 space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-special-text font-mono text-xs font-bold uppercase tracking-wider">
                <CheckCircle weight="fill" className="w-5 h-5 text-special-text" />
                <span>The Rechen Studio Way</span>
              </div>
              <ul className="space-y-3 font-sans text-xs text-text-content">
                <li className="flex items-start gap-2">
                  <span className="text-special-text mt-0.5">✓</span>
                  <span>Instant 0.8s load speed (Next.js Edge)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-special-text mt-0.5">✓</span>
                  <span>Bespoke, premium UI tailored to your trade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-special-text mt-0.5">✓</span>
                  <span>Instant SMS & Email lead alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-special-text mt-0.5">✓</span>
                  <span>Local SEO optimized to rank #1 locally</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
