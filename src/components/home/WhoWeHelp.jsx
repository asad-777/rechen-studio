'use client';

import React, { useState } from 'react';
import { 
  Hammer, 
  Lightning, 
  Truck, 
  TreeEvergreen, 
  Buildings, 
  Check, 
  ArrowRight
} from '@phosphor-icons/react';
import Link from 'next/link';

export default function WhoWeHelp() {
  const [activeTab, setActiveTab] = useState(0);

  const niches = [
    {
      id: "construction",
      label: "Construction & Trades",
      icon: Hammer,
      badge: "High-Ticket Residential & Commercial",
      heading: "Dominate Local Search for Heavy Remodeling & Trade Jobs",
      description: "Homeowners shopping for a $15k roof or $30k kitchen remodel won't trust a broken Facebook page. We build high-converting portfolios that showcase your craft and close high-margin contracts.",
      services: [
        "Roofing & Siding",
        "Home Remodeling & Additions",
        "Interior & Exterior Painting",
        "Flooring & Tile Installation",
        "Drywall & Framing",
        "Professional Handyman Services"
      ],
      deliverables: [
        "Interactive Project Gallery & Before/After sliders",
        "Instant Instant Quote & Square Footage Calculator",
        "Google Local Service Ads (LSA) & Map Pack Optimization"
      ]
    },
    {
      id: "electrician",
      label: "Electrical & HVAC",
      icon: Lightning,
      badge: "24/7 Emergency & Dispatch",
      heading: "Capture High-Urgency Emergency Calls in Seconds",
      description: "When an AC goes out in mid-summer or pipes burst, homeowners call the first contractor whose mobile site loads immediately with a 1-tap call button. We engineer zero-latency dispatch funnels.",
      services: [
        "HVAC & Climate Control",
        "Plumbing & Drain Services",
        "Appliance Repair & Diagnostics",
        "Lighting & Panel Upgrades",
        "Emergency Electrical Repairs",
        "Commercial Mechanical Systems"
      ],
      deliverables: [
        "Sub-second 1-tap 'Emergency Call' mobile triggers",
        "Direct ServiceTitan / Housecall Pro integration",
        "Automated SMS dispatch notifications to technician phones"
      ]
    },
    {
      id: "transportation",
      label: "Transportation & Towing",
      icon: Truck,
      badge: "Rapid Response & Logistics",
      heading: "Turn Desperate Stranded Drivers into Immediate Bookings",
      description: "From luxury airport limousine reservations to urgent highway towing, your web engine needs to convey absolute punctuality, safety ratings, and automated booking dispatch.",
      services: [
        "24/7 Towing & Roadside Recovery",
        "Residential & Long-Distance Moving",
        "Heavy Junk Removal & Cleanouts",
        "Luxury Chauffeur & Limo Service",
        "Commercial Freight & Hauling"
      ],
      deliverables: [
        "Live GPS & Radius-based Pricing calculator",
        "Automated Fleet reservation calendar",
        "Instant credit card authorization & deposits"
      ]
    },
    {
      id: "landscaping",
      label: "Landscaping & Outdoor",
      icon: TreeEvergreen,
      badge: "Recurring Maintenance & Curb Appeal",
      heading: "Lock In High-Ticket Hardscaping & Weekly Retainers",
      description: "Turn one-time lawn cuts into high-ticket paver patio installations, irrigation overhauls, and lucrative annual commercial landscaping contracts.",
      services: [
        "Hardscaping & Paver Patios",
        "Lawn Care & Turf Management",
        "Irrigation & Sprinkler Systems",
        "Tree Removal & Pruning",
        "Landscape Design & Lighting",
        "Seasonal Cleanups & Aeration"
      ],
      deliverables: [
        "Seasonal maintenance recurring sign-up funnels",
        "Visual 3D landscape design showcase",
        "Automated weather-triggered service notices"
      ]
    },
    {
      id: "unorthodox",
      label: "Specialized & Professional",
      icon: Buildings,
      badge: "High-Trust Advisory",
      heading: "Establish Institutional Authority & Continuous Inbound Leads",
      description: "Clients investing in real estate inspection, property transactions, or credit repair demand rock-solid authority, testimonials, and compliance-grade security.",
      services: [
        "Certified Home & Commercial Inspection",
        "Boutique Real Estate Agencies",
        "Credit Repair & Score Restoration",
        "Property Appraisal Services",
        "Title & Escrow Advisory"
      ],
      deliverables: [
        "Direct Inspection Report & Client Portal integrations",
        "Compliance-approved Lead capture funnels",
        "Automated Cal.com / Calendly calendar syncing"
      ]
    }
  ];

  const currentNiche = niches[activeTab];
  const ActiveIcon = currentNiche.icon;

  return (
    <section id="niches" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-text-content leading-tight">
          Bespoke Digital Engines For <br className="hidden sm:inline" />
          <span className="text-primary-color">Contractors & Local Service Leaders</span>
        </h2>
        
        <p className="font-sans text-base sm:text-lg text-text-content/70 leading-relaxed">
          We don&apos;t use generic multi-purpose templates. Every system is engineered specifically for your trade&apos;s lead capture mechanics and customer sales cycle.
        </p>
      </div>

      {/* Niche Selection Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {niches.map((niche, idx) => {
          const Icon = niche.icon;
          const isActive = activeTab === idx;
          return (
            <button
              key={niche.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-2xl font-mono text-sm font-semibold flex items-center gap-2.5 transition-all duration-300 border cursor-pointer ${
                isActive
                  ? 'bg-primary-color text-base-a border-primary-color shadow-lg shadow-primary-color/20 scale-105'
                  : 'bg-base-b text-text-content/80 border-base-c hover:border-text-content/40 hover:text-text-content'
              }`}
            >
              <Icon weight={isActive ? "fill" : "duotone"} className="w-5 h-5 shrink-0" />
              <span>{niche.label}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Niche Deep Dive Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-base-b border border-base-c shadow-2xl relative overflow-hidden transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Context & Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-base-a border border-base-c flex items-center justify-center text-primary-color">
                <ActiveIcon weight="duotone" className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary-color bg-base-a px-3.5 py-1.5 rounded-full border border-base-c">
                {currentNiche.badge}
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text-content leading-snug">
              {currentNiche.heading}
            </h3>

            <p className="font-sans text-base text-text-content/80 leading-relaxed">
              {currentNiche.description}
            </p>

            {/* Included Trade Services */}
            <div className="pt-4 space-y-3">
              <span className="font-mono text-xs uppercase font-bold text-text-content/50 tracking-wider block">
                Target Specializations Covered:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentNiche.services.map((srv, sIdx) => (
                  <span 
                    key={sIdx}
                    className="font-mono text-xs px-3 py-1.5 rounded-xl bg-base-a border border-base-c text-text-content/90 font-medium"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key High-Conversion Features */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-base-a border border-base-c space-y-6">
            <div className="space-y-2">
              <h4 className="font-heading text-lg font-bold text-text-content">
                Engineered For Maximum Lead Conversion
              </h4>
            </div>

            <ul className="space-y-4 font-sans text-sm text-text-content/80">
              {currentNiche.deliverables.map((del, dIdx) => (
                <li key={dIdx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary-color/20 border border-secondary-color/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check weight="bold" className="w-3 h-3 text-special-text" />
                  </div>
                  <span>{del}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-base-c">
              <Link href="/contact-us">
                <button className="w-full py-3 px-6 bg-primary-color text-black font-mono text-sm sm:text-base font-bold uppercase tracking-wider rounded-full flex items-center justify-center gap-2 hover:bg-primary-color/90 hover:scale-[1.02] transition-all shadow-lg cursor-pointer">
                  <span>Build For My {currentNiche.label.split('&')[0].trim()} Company</span>
                  <ArrowRight weight="bold" className="w-4 h-4 text-black" />
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
