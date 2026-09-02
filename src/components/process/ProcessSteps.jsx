'use client';

import React from 'react';
import { 
  Compass, 
  PaintBrush, 
  Cpu, 
  RocketLaunch, 
  CheckCircle, 
  ArrowRight,
  PhoneCall,
  VideoCamera
} from '@phosphor-icons/react';
import Link from 'next/link';

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Revenue Audit",
      icon: Compass,
      timeline: "Days 1 - 2",
      description: "We audit your existing web presence, local competitors, Google search rankings, and target zip codes to identify high-margin job opportunities.",
      deliverables: ["Local Market Opportunity Report", "Lead Funnel Blueprint", "Clear Milestone Timeline"],
      badge: "Zero Fluff Kickoff"
    },
    {
      number: "02",
      title: "Bespoke Design & Branding",
      icon: PaintBrush,
      timeline: "Days 3 - 5",
      description: "We craft an ultra-clean, high-converting design showcasing your past projects, licenses, guarantees, customer reviews, and before/after job galleries.",
      deliverables: ["Interactive High-Fidelity Preview", "Mobile-First UX Optimization", "Trust & License Proof Badges"],
      badge: "Market-Leading Prestige"
    },
    {
      number: "03",
      title: "Fullstack Build & Lead Automations",
      icon: Cpu,
      timeline: "Days 6 - 9",
      description: "We code your custom Next.js application, connect instant SMS/email lead dispatch directly to your smartphone, and link your booking/CRM calendar.",
      deliverables: ["Sub-Second Edge Codebase", "Instant Phone Lead Notifications", "Online Scheduling Integration"],
      badge: "Engineered For Speed"
    },
    {
      number: "04",
      title: "Launch & Local SEO Indexing",
      icon: RocketLaunch,
      timeline: "Day 10+",
      description: "We handle domain transfer, configure Google Business Profile and schema markup, test Core Web Vitals, and launch your new revenue engine.",
      deliverables: ["Zero-Downtime Migration", "Google Map Pack SEO Schema", "Ongoing Uptime & Security"],
      badge: "Turnkey Launch"
    }
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-text-content tracking-tight leading-tight">
          How We Build Your <br className="hidden sm:inline" />
          <span className="text-primary-color">High-Converting Digital Engine</span>
        </h2>
        
        <p className="font-sans text-base sm:text-lg text-text-content/70 leading-relaxed">
          A predictable 4-step deployment pipeline. No months of waiting or endless meetings. We take care of everything so you can focus on running your business.
        </p>
      </div>

      {/* Step-by-step timeline list */}
      <div className="relative space-y-12">
        
        {/* Connecting vertical line on desktop */}
        <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-base-c -translate-x-1/2 pointer-events-none" />

        {steps.map((step, idx) => {
          const IconComponent = step.icon;
          const isEven = idx % 2 === 1;

          return (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Card Box */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="group p-8 rounded-3xl bg-base-b border border-base-c hover:border-primary-color/60 transition-all duration-300 shadow-xl space-y-6 relative overflow-hidden">
                  
                  {/* Decorative Number watermark */}
                  <div className="absolute top-4 right-6 font-heading text-7xl font-black text-base-c/30 select-none pointer-events-none">
                    {step.number}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-base-a border border-base-c flex items-center justify-center text-primary-color shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent weight="duotone" className="w-7 h-7" />
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-base-a border border-base-c text-special-text font-mono text-xs font-bold uppercase shadow-sm">
                      {step.timeline}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs text-primary-color font-bold uppercase tracking-wider block">
                      Step {step.number} • {step.badge}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-text-content group-hover:text-primary-color transition-colors">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-text-content/70 leading-relaxed pt-1">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-base-c/60 space-y-2.5">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-text-content/50 font-bold">Key Deliverables:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {step.deliverables.map((item, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-base-a border border-base-c flex items-center gap-2 text-text-content font-mono text-xs font-semibold">
                          <CheckCircle weight="fill" className="w-4 h-4 text-special-text shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Central Step Marker on Desktop */}
              <div className="hidden lg:flex w-14 h-14 rounded-full bg-base-b border-2 border-primary-color text-primary-color font-mono text-base font-bold items-center justify-center z-20 shadow-lg shrink-0">
                {step.number}
              </div>

              {/* Spacer on opposite side */}
              <div className="hidden lg:block w-1/2" />
            </div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary-color hover:bg-primary-color/90 text-black font-mono text-sm sm:text-base font-bold uppercase tracking-wider shadow-lg shadow-primary-color/20 hover:scale-105 transition-all duration-200 cursor-pointer"
        >
          <span className="flex items-center gap-1.5 text-black">
            <PhoneCall weight="fill" className="w-4 h-4" />
            <span className="opacity-50 font-mono text-xs">/</span>
            <VideoCamera weight="fill" className="w-4 h-4" />
          </span>
          <span>Get In Touch</span>
        </Link>
      </div>
    </section>
  );
}
