'use client';

import React from 'react';
import { Certificate } from '@phosphor-icons/react';

export default function AffiliationCarousel() {
  const affiliations = [
    { 
      name: "Vercel Enterprise Agency", 
      tag: "Certified Partner",
      description: "Deploying mission-critical, scalable infrastructure with ultra-low latency edge networking.",
      metric: "99.999% SLA"
    },
    { 
      name: "Figma Community Champion", 
      tag: "Design Systems",
      description: "Pioneering component-driven architecture and tokenized design systems at scale.",
      metric: "Tier 1 Contributor"
    },
    { 
      name: "AWS Cloud Frontend Partner", 
      tag: "Edge Architecture",
      description: "Architecting serverless ecosystems with dynamic global distribution and auto-scaling.",
      metric: "Advanced Tier"
    },
    { 
      name: "Awwwards Nominee Studio", 
      tag: "Digital Excellence",
      description: "Crafting immersive, WebGL-powered digital experiences recognized globally.",
      metric: "Site of the Day"
    },
    { 
      name: "Stripe Verified Integrator", 
      tag: "Global Commerce",
      description: "Engineering secure, multi-currency payment flows for enterprise SaaS platforms.",
      metric: "$100M+ Volume"
    },
    { 
      name: "Supabase Expert Architecture", 
      tag: "Realtime Systems",
      description: "Building resilient, real-time Postgres databases with advanced RLS policies.",
      metric: "Official Partner"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-base-a border-b border-base-c overflow-hidden relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
        <div className="flex items-center gap-3 text-text-content font-mono text-base sm:text-lg uppercase tracking-widest font-bold">
          <Certificate weight="fill" className="w-5 h-5 text-primary-color" />
          <h2>Recognized Technical Affiliations & Accreditations</h2>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {affiliations.map((item, idx) => (
          <div
            key={idx}
            className="group p-8 rounded-3xl bg-base-b/80 hover:bg-base-b border border-base-c hover:border-primary-color/60 transition-all duration-300 flex flex-col justify-between min-h-55 shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="font-mono text-[11px] uppercase tracking-wider text-text-content/70 font-semibold">
                {item.tag}
              </span>
              <span className="text-xs font-mono font-bold text-primary-color bg-base-a border border-base-c px-2.5 py-1 rounded-md">
                {item.metric}
              </span>
            </div>
            
            <div className="space-y-3 mt-auto">
              <h4 className="font-heading text-xl font-bold text-text-content group-hover:text-primary-color leading-tight transition-colors">
                {item.name}
              </h4>
              <p className="text-sm font-sans text-text-content/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
