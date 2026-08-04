'use client';

import React from 'react';
import { Sparkle, Certificate } from '@phosphor-icons/react';

export default function AffiliationCarousel() {
  const affiliations = [
    { name: "Vercel Enterprise Agency", tag: "Certified Partner" },
    { name: "Figma Community Champion", tag: "Design Systems" },
    { name: "AWS Cloud Frontend Partner", tag: "Edge Architecture" },
    { name: "Awwwards Nominee Studio", tag: "Digital Excellence" },
    { name: "Stripe Verified Integrator", tag: "Global Commerce" },
    { name: "Supabase Expert Architecture", tag: "Realtime Systems" },
  ];

  return (
    <section className="py-12 bg-base-1a border-y border-base-3a overflow-hidden relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-2 text-text-black font-mono text-xs uppercase tracking-widest font-semibold">
          <Certificate weight="fill" className="w-4 h-4 text-primary-a" />
          <span>Recognized Technical Affiliations & Accreditations</span>
        </div>
        <span className="text-[11px] font-mono text-text-black/70 hidden md:inline-block">
          Continuous Industry Standing & Verified Integration Partners
        </span>
      </div>

      {/* Responsive Marquee / Affiliation Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {affiliations.map((item, idx) => (
          <div
            key={idx}
            className="group p-5 rounded-2xl bg-base-2a/70 hover:bg-base-2a border border-base-3a hover:border-primary-a transition-all duration-300 flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md"
          >
            <div className="flex items-center justify-between text-text-black/70 group-hover:text-primary-a transition-colors">
              <Sparkle weight="fill" className="w-4 h-4" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-black bg-base-1a px-2 py-0.5 rounded-full border border-base-3a">
                {item.tag}
              </span>
            </div>
            
            <h4 className="font-heading text-sm font-bold text-text-black group-hover:text-primary-a leading-tight transition-colors">
              {item.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
