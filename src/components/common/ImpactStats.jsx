'use client';

import React from 'react';
import { Stack, Trophy, ShieldCheck, Sparkle } from '@phosphor-icons/react';

export default function ImpactStats() {
  const stats = [
    {
      icon: Stack,
      value: "All-in-1",
      label: "Web, Social & GBP Under One Roof",
      description: "Complete custom web development, active social media management, and Google Business Profile optimization fully handled under one roof."
    },
    {
      icon: Trophy,
      value: "10x boost",
      label: "Average Conversion Boost",
      description: "High-performance lead funnels engineered to generate up to 10x more phone calls, inquiries, and booked jobs."
    },
    {
      icon: ShieldCheck,
      value: "100% ownership",
      label: "Code & Asset Ownership",
      description: "Zero vendor lock-in or recurring hostage fees. You own all code, domains, content, and creative assets outright."
    },
    {
      icon: Sparkle,
      value: "#1 on search",
      label: "Rank #1 on Google & AI Search",
      description: "Dominant local SEO and Generative Engine Optimization so you rank #1 on Google and appear at the top of AI search results."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-base-b/50 border-b border-base-c">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-content tracking-tight">
            Engineered For Immediate Commercial Impact
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-content/70">
            We don&apos;t build vanity websites. We build high-converting digital infrastructure that generates high-ticket local jobs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-base-b border border-base-c hover:border-primary-color/60 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-12 h-fit min-h-12 rounded-2xl bg-base-a border border-base-c flex items-center justify-center text-primary-color group-hover:scale-110 transition-all duration-300">
                    <Icon weight="duotone" className="w-6 h-6 text-primary-color" />
                  </div>
                  <div className="font-heading text-4xl lg:text-5xl font-bold tracking-tight text-primary-color">
                    {stat.value}
                  </div>
                </div>

                <div className="space-y-1.5 pt-4 border-t border-base-c/60">
                  <h3 className="font-mono text-base font-bold text-text-content uppercase tracking-wide">
                    {stat.label}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-text-content/70 leading-relaxed font-normal">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
