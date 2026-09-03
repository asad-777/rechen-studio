'use client';

import React, { useState } from 'react';
import { 
  Hammer, 
  Lightning, 
  Truck, 
  TreeEvergreen, 
  Buildings,
  ArrowUpRight
} from '@phosphor-icons/react';

export default function WhoWeHelp() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const niches = [
    {
      id: "construction",
      title: "Construction & Trades",
      icon: Hammer,
      focus: "High-Ticket Contracts",
      trades: [
        "Roofing & Siding",
        "Kitchen & Bath",
        "Exterior & Interior Painting",
        "Flooring & Tile",
        "Framing & Drywall",
        "General Contracting"
      ]
    },
    {
      id: "electrician",
      title: "Electrical, Plumbing & HVAC",
      icon: Lightning,
      focus: "24/7 Emergency Dispatch",
      trades: [
        "Emergency AC & Heat",
        "Drain Cleaning & Pipes",
        "Panel Upgrades & EV",
        "Water Heaters",
        "Commercial Systems"
      ]
    },
    {
      id: "landscaping",
      title: "Landscaping & Outdoor",
      icon: TreeEvergreen,
      focus: "Retainers & High-End Installs",
      trades: [
        "Hardscaping & Pavers",
        "Commercial Turf & Lawn",
        "Irrigation & Drainage",
        "Tree Care & Removal",
        "Outdoor Lighting"
      ]
    },
    {
      id: "transportation",
      title: "Transportation & Towing",
      icon: Truck,
      focus: "Rapid Response Logistics",
      trades: [
        "24/7 Roadside Towing",
        "Long-Distance Moving",
        "Junk Removal & Hauling",
        "Luxury Chauffeur & Limo",
        "Freight Dispatch"
      ]
    },
    {
      id: "unorthodox",
      title: "Specialized & Professional",
      icon: Buildings,
      focus: "High-Trust Advisory",
      trades: [
        "Property & Home Inspection",
        "Boutique Real Estate",
        "Appraisal Services",
        "Credit Restoration",
        "Title & Escrow"
      ]
    }
  ];

  return (
    <section id="niches" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Sleek Compact Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-base-c/40 gap-4">
        <div className="space-y-2">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-primary-color">
            // Target Industries & Specializations
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-content">
            Engineered Exclusively For <span className="text-primary-color">Local Service Leaders</span>
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-text-content/60 max-w-md md:text-right">
          Zero multi-purpose templates. Purpose-built digital architecture for your exact customer sales cycle.
        </p>
      </div>

      {/* Cardless Editorial Trade Directory Rows */}
      <div className="divide-y divide-base-c/30 border-b border-base-c/30">
        {niches.map((niche, idx) => {
          const Icon = niche.icon;
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={niche.id}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`py-4 sm:py-5 px-3 sm:px-5 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 rounded-xl relative group ${
                isHovered ? 'bg-base-b/60' : 'bg-transparent'
              }`}
            >
              {/* Left Side: Category Title + Icon */}
              <div className="flex items-center gap-3 sm:gap-4 md:w-5/12 shrink-0">
                <div 
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isHovered 
                      ? 'bg-primary-color/15 text-primary-color scale-110' 
                      : 'bg-base-b text-text-content/70'
                  }`}
                >
                  <Icon weight={isHovered ? "fill" : "duotone"} className="w-5 h-5" />
                </div>
                
                <div className="space-y-0.5">
                  <h3 className={`font-heading text-base sm:text-lg font-bold transition-colors ${
                    isHovered ? 'text-primary-color' : 'text-text-content'
                  }`}>
                    {niche.title}
                  </h3>
                  <span className="font-mono text-[11px] text-text-content/50 uppercase tracking-wider block">
                    {niche.focus}
                  </span>
                </div>
              </div>

              {/* Right Side: Flowing Trade Pills */}
              <div className="flex flex-wrap items-center gap-1.5 md:w-7/12 md:justify-end">
                {niche.trades.map((trade, tIdx) => (
                  <span
                    key={tIdx}
                    className={`font-mono text-[11px] sm:text-xs px-2.5 py-1 rounded-md transition-all duration-200 border ${
                      isHovered
                        ? 'bg-base-a text-text-content border-primary-color/30 shadow-xs'
                        : 'bg-base-b/40 text-text-content/75 border-base-c/40'
                    }`}
                  >
                    {trade}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
