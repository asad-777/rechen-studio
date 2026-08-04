'use client';

import React from 'react';
import { ChartLineUp, Trophy, Users, ShieldCheck, Sparkle } from '@phosphor-icons/react';

export default function ImpactStats() {
  const stats = [
    {
      icon: ChartLineUp,
      value: "350%+",
      label: "Average Organic Growth",
      description: "Proven SEO & technical conversions boosted across client deployments."
    },
    {
      icon: Trophy,
      value: "$120M+",
      label: "Client Revenue Generated",
      description: "Direct transactional volume captured by high-converting custom platforms."
    },
    {
      icon: Users,
      value: "150+",
      label: "Completed Digital Products",
      description: "Websites, complex web applications, and enterprise design systems delivered."
    },
    {
      icon: ShieldCheck,
      value: "99.9%",
      label: "Platform Reliability & SLAs",
      description: "Zero downtime architecture with robust enterprise security & core vital scores."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-base-2a/60 border-y border-base-3a transition-colors duration-300">
      {/* Subtly illuminated background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C2A68C15_1px,transparent_1px),linear-gradient(to_bottom,#C2A68C15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest font-semibold text-primary-a flex items-center justify-center gap-1.5">
            <Sparkle weight="fill" className="w-4 h-4 text-primary-a" />
            <span>Studio Performance Metrics</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-black tracking-tight">
            Proven Impact at Enterprise Scale
          </h2>
          <p className="font-sans text-sm text-text-black/80">
            We don't just write code and design mockups; we craft measurable commercial velocity for high-growth enterprises and disruptive founders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-base-1a/80 border border-base-3a hover:border-primary-a transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-base-2a border border-base-3a flex items-center justify-center text-text-black group-hover:scale-110 group-hover:bg-primary-a group-hover:text-text-white transition-all duration-300">
                    <Icon weight="duotone" className="w-6 h-6 text-primary-a group-hover:text-text-white transition-colors" />
                  </div>
                  <div className="font-heading text-4xl lg:text-5xl font-bold tracking-tight text-primary-a">
                    {stat.value}
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-base-3a">
                  <h3 className="font-mono text-base font-bold text-text-black uppercase tracking-wide">
                    {stat.label}
                  </h3>
                  <p className="font-sans text-xs text-text-black/80 leading-relaxed font-normal">
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
