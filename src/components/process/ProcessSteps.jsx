'use client';

import React from 'react';
import { 
  Compass, 
  Cpu, 
  MagicWand, 
  RocketLaunch, 
  CheckCircle, 
  ArrowRight,
  Sparkle
} from '@phosphor-icons/react';
import Link from 'next/link';

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Architectural Scoping",
      icon: Compass,
      timeline: "Week 1",
      description: "We immerse ourselves in your commercial metrics, technical stack constraints, and competitive landscape to establish clear user user stories and database schematics.",
      deliverables: ["Technical Scoping Roadmap", "Database & API Specifications", "Fixed Milestone SLA Timeline"],
      accent: "from-violet-500 to-indigo-600",
      badge: "Zero Ambiguity Kickoff"
    },
    {
      number: "02",
      title: "Interactive UI/UX Prototypes",
      icon: MagicWand,
      timeline: "Weeks 2 - 3",
      description: "Our design architects craft high-fidelity, interactive Figma design systems complete with glassmorphic tokens, custom typography hierarchy, and micro-animation previews.",
      deliverables: ["Interactive Design Prototype", "Complete Token & Style Guide", "Responsive Breakpoint Testing"],
      accent: "from-pink-500 to-rose-600",
      badge: "Aesthetic Excellence"
    },
    {
      number: "03",
      title: "Reactive Fullstack Engineering",
      icon: Cpu,
      timeline: "Weeks 4 - 8+",
      description: "We develop cleanly typed, high-performance modular applications using Next.js App Router, real-time backend connections, and zero cookie-cutter bloatware.",
      deliverables: ["Next.js Production Codebase", "Sub-Second Edge Rendering", "Automated Regression Test Suite"],
      accent: "from-cyan-500 to-blue-600",
      badge: "High-Speed Sprints"
    },
    {
      number: "04",
      title: "Global Deployment & SEO Velocity",
      icon: RocketLaunch,
      timeline: "Continuous SLA",
      description: "Launch day is just the beginning. We perform zero-downtime migrations, deploy programmatic schema indexing, and monitor Core Web Vitals across cloud edge networks.",
      deliverables: ["Zero-Downtime Deployment", "Technical SEO Indexing", "Ongoing SLA & Uptime Monitoring"],
      accent: "from-amber-500 to-orange-600",
      badge: "Commercial Velocity"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest font-semibold text-indigo-400 flex items-center justify-center gap-2">
          <Sparkle weight="fill" className="w-4 h-4 text-indigo-400" />
          <span>Our Engineering Methodology</span>
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
          How We Take Ideas To Enterprise Reality
        </h2>
        <p className="font-sans text-sm sm:text-base text-slate-400">
          A predictable, battle-tested engineering pipeline designed to eliminate scoping fatigue, ensure rapid iterative deployment, and guarantee aesthetic prestige.
        </p>
      </div>

      {/* Step-by-step timeline list */}
      <div className="relative space-y-12">
        
        {/* Connecting vertical line on desktop */}
        <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-gradient-to-b from-violet-600 via-indigo-600 to-amber-500 -translate-x-1/2 opacity-30 pointer-events-none" />

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
              {/* Box info */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="group p-8 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 shadow-xl space-y-6 relative overflow-hidden">
                  
                  {/* Decorative Number watermark */}
                  <div className="absolute top-4 right-6 font-heading text-7xl font-black text-white/5 select-none pointer-events-none">
                    {step.number}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.accent} flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent weight="fill" className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-indigo-400 font-mono text-xs font-semibold uppercase">
                      {step.timeline}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-[11px] text-pink-400 font-bold uppercase tracking-wider block">
                      Step {step.number} • {step.badge}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-slate-300 leading-relaxed pt-1">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-bold">Key Deliverables:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {step.deliverables.map((item, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-slate-300 font-mono text-xs">
                          <CheckCircle weight="fill" className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Central Step Marker on Desktop */}
              <div className="hidden lg:flex w-14 h-14 rounded-full bg-slate-950 border-2 border-violet-500 text-white font-mono text-base font-extrabold items-center justify-center z-20 shadow-xl shrink-0">
                {step.number}
              </div>

              {/* Spacer on opposite side */}
              <div className="hidden lg:block w-1/2" />
            </div>
          );
        })}
      </div>

      <div className="mt-20 text-center">
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-button text-lg font-bold uppercase tracking-wider shadow-2xl hover:scale-105 transition-all duration-200"
        >
          <span>Start Step 01 Today</span>
          <ArrowRight weight="bold" className="w-5 h-5 text-white" />
        </Link>
      </div>
    </section>
  );
}
