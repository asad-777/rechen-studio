'use client';

import React from 'react';
import { Trophy, Medal, Star, Crown, Sparkle, Certificate } from '@phosphor-icons/react';

export default function Awards() {
  const awards = [
    {
      year: "2025",
      title: "FWA of the Day",
      project: "Solitude Architectural Gallery",
      category: "Experimental UI & 3D Typography",
      icon: Trophy,
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    {
      year: "2025",
      title: "Awwwards Site of the Month",
      project: "Vesper AI Luxury Retail",
      category: "E-Commerce Innovation & Micro-Animations",
      icon: Crown,
      badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/20"
    },
    {
      year: "2024",
      title: "Vercel Ecosystem Excellence",
      project: "NovaPulse Fintech Telemetry",
      category: "Extreme Performance & Edge Compute",
      icon: Certificate,
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      year: "2024",
      title: "CSS Design Awards (Best UI/UX)",
      project: "Rechen Design Systems Library",
      category: "Modular Scalable Components",
      icon: Medal,
      badgeColor: "text-pink-400 bg-pink-500/10 border-pink-500/20"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-800/80 pb-8">
        <div className="space-y-3 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest font-semibold text-amber-400 flex items-center gap-2">
            <Trophy weight="fill" className="w-4 h-4 text-amber-400" />
            <span>Studio Honors & Recognition</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Celebrated For Craft & Quality
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400">
            Our commitment to aesthetic mastery and robust technical execution is continually recognized by international digital design and engineering juries.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-900 px-5 py-3 rounded-2xl border border-slate-800 shrink-0">
          <Star weight="fill" className="w-5 h-5 text-amber-400 animate-pulse" />
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold text-white">24+ Global Trophies</span>
            <span className="font-mono text-[10px] uppercase text-slate-400">Since 2021 inception</span>
          </div>
        </div>
      </div>

      {/* Award Row List */}
      <div className="space-y-4">
        {awards.map((award, idx) => {
          const Icon = award.icon;
          return (
            <div
              key={idx}
              className="group p-6 sm:p-8 rounded-3xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:shadow-xl"
            >
              <div className="flex items-center gap-5">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${award.badgeColor} shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon weight="duotone" className="w-7 h-7" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-slate-400 bg-slate-950 px-2.5 py-0.5 rounded-full border border-slate-800">
                      {award.year}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {award.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-300">
                    Project: <span className="text-white font-medium">{award.project}</span>
                  </p>
                </div>
              </div>

              <div className="md:text-right flex flex-col justify-center border-t md:border-t-0 border-slate-800 pt-4 md:pt-0">
                <span className="font-mono text-xs text-indigo-400 uppercase tracking-wider font-semibold">
                  {award.category}
                </span>
                <span className="font-sans text-[11px] text-slate-500">
                  Verified International Recognition
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
