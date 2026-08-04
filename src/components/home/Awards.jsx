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
      badgeColor: "text-primary-a bg-base-1a border-base-3a"
    },
    {
      year: "2025",
      title: "Awwwards Site of the Month",
      project: "Vesper AI Luxury Retail",
      category: "E-Commerce Innovation & Micro-Animations",
      icon: Crown,
      badgeColor: "text-text-black bg-base-3a/40 border-base-3a"
    },
    {
      year: "2024",
      title: "Vercel Ecosystem Excellence",
      project: "NovaPulse Fintech Telemetry",
      category: "Extreme Performance & Edge Compute",
      icon: Certificate,
      badgeColor: "text-primary-a bg-base-1a border-base-3a"
    },
    {
      year: "2024",
      title: "CSS Design Awards (Best UI/UX)",
      project: "Rechen Design Systems Library",
      category: "Modular Scalable Components",
      icon: Medal,
      badgeColor: "text-text-black bg-base-3a/40 border-base-3a"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 transition-colors duration-300">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-base-3a pb-8">
        <div className="space-y-3 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest font-semibold text-primary-a flex items-center gap-2">
            <Trophy weight="fill" className="w-4 h-4 text-primary-a" />
            <span>Studio Honors & Recognition</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-text-black tracking-tight">
            Celebrated For Craft & Quality
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-black/80">
            Our commitment to aesthetic mastery and robust technical execution is continually recognized by international digital design and engineering juries.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-base-2a px-5 py-3 rounded-2xl border border-base-3a shrink-0 shadow-sm">
          <Star weight="fill" className="w-5 h-5 text-primary-a animate-pulse" />
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold text-text-black">24+ Global Trophies</span>
            <span className="font-mono text-[10px] uppercase text-text-black/70">Since 2021 inception</span>
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
              className="group p-6 sm:p-8 rounded-3xl bg-base-2a/70 hover:bg-base-2a border border-base-3a transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-5">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${award.badgeColor} shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon weight="duotone" className="w-7 h-7" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-text-black bg-base-1a px-2.5 py-0.5 rounded-full border border-base-3a">
                      {award.year}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-black group-hover:text-primary-a transition-colors">
                      {award.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-text-black/80">
                    Project: <span className="text-text-black font-bold">{award.project}</span>
                  </p>
                </div>
              </div>

              <div className="md:text-right flex flex-col justify-center border-t md:border-t-0 border-base-3a pt-4 md:pt-0">
                <span className="font-mono text-xs text-primary-a uppercase tracking-wider font-semibold">
                  {award.category}
                </span>
                <span className="font-sans text-[11px] text-text-black/60">
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
