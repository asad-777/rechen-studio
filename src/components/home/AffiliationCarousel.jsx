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
    <section className="py-12 bg-slate-950 border-y border-slate-800/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-2 text-slate-400 font-mono text-xs uppercase tracking-widest font-semibold">
          <Certificate weight="fill" className="w-4 h-4 text-indigo-400" />
          <span>Recognized Technical Affiliations & Accreditations</span>
        </div>
        <span className="text-[11px] font-mono text-slate-500 hidden md:inline-block">
          Continuous Industry Standing & Verified Integration Partners
        </span>
      </div>

      {/* Responsive Marquee / Affiliation Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {affiliations.map((item, idx) => (
          <div
            key={idx}
            className="group p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between space-y-3 shadow-sm hover:shadow-lg hover:shadow-violet-500/5"
          >
            <div className="flex items-center justify-between text-slate-500 group-hover:text-indigo-400 transition-colors">
              <Sparkle weight="fill" className="w-4 h-4" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800">
                {item.tag}
              </span>
            </div>
            
            <h4 className="font-heading text-sm font-bold text-slate-200 group-hover:text-white leading-tight transition-colors">
              {item.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
