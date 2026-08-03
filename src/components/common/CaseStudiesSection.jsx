'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkle, Globe, Code, ChartBar, Desktop } from '@phosphor-icons/react';

export default function CaseStudiesSection({ maxItems = 6, showHeader = true }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Websites & Web-Apps', 'SEO & Strategy'];

  const projects = [
    {
      id: 1,
      title: "NovaPulse Analytics Platform",
      client: "NovaFin Labs",
      category: "Websites & Web-Apps",
      metric: "+410% Realtime Data Speed",
      description: "Designed and engineered an enterprise high-frequency reactive fintech trading dashboard with real-time WebSocket telemetry and modular chart interfaces.",
      imageColor: "from-violet-600 via-indigo-900 to-slate-950",
      icon: Code,
      tags: ["Next.js 15", "WebSockets", "TailwindCSS", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Vesper AI Luxury Retail Experience",
      client: "Vesper Co.",
      category: "Websites & Web-Apps",
      metric: "4.8x Conversion Lift",
      description: "Engineered an award-winning glassmorphic luxury ecommerce fashion destination powered by personalized AI outfit recommendations and seamless checkout.",
      imageColor: "from-pink-600 via-rose-900 to-slate-950",
      icon: Globe,
      tags: ["E-Commerce", "Custom Animations", "Headless CMS"]
    },
    {
      id: 3,
      title: "Apex Cloud Infrastructure Hub",
      client: "Apex Hosting",
      category: "SEO & Strategy",
      metric: "#1 Organic Google Ranking",
      description: "Executed comprehensive technical SEO restructuring, dynamic structural schema architecture, and programmatic SEO content scaling for enterprise cloud providers.",
      imageColor: "from-emerald-600 via-teal-900 to-slate-950",
      icon: ChartBar,
      tags: ["Technical SEO", "Core Web Vitals", "Programmatic Architecture"]
    },
    {
      id: 4,
      title: "Orbit Medical Telehealth Suite",
      client: "Orbit Health Care",
      category: "Websites & Web-Apps",
      metric: "99.99% HIPAA Uptime",
      description: "Architected a secure, encrypted real-time patient diagnosis web app connecting global medical board specialists with asynchronous AI symptom screening.",
      imageColor: "from-cyan-600 via-blue-900 to-slate-950",
      icon: Desktop,
      tags: ["React 19", "End-to-End Encryption", "HIPAA Compliant"]
    },
    {
      id: 5,
      title: "Solitude Architectural Gallery",
      client: "Solitude Studios",
      category: "Websites & Web-Apps",
      metric: "FWA of the Day Winner",
      description: "An interactive digital showroom featuring real-time WebGL building previews and fluid typography transitions for a premier Parisian architectural agency.",
      imageColor: "from-amber-600 via-orange-900 to-slate-950",
      icon: Globe,
      tags: ["3D Experience", "Custom Typography", "Performance Opt"]
    },
    {
      id: 6,
      title: "HyperScale DevOps Command Center",
      client: "HyperScale Inc.",
      category: "Websites & Web-Apps",
      metric: "-65% DevOps Incident Time",
      description: "A centralized infrastructure deployment web application providing container orchestration visualizers and automated continuous integration workflows.",
      imageColor: "from-purple-600 via-indigo-900 to-slate-950",
      icon: Code,
      tags: ["Fullstack WebApp", "Microservices", "Dark UI"]
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects.slice(0, maxItems) 
    : projects.filter(p => p.category === activeFilter).slice(0, maxItems);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {showHeader && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest font-semibold text-pink-400 flex items-center gap-2">
              <Sparkle weight="fill" className="w-4 h-4 text-pink-400" />
              <span>Studio Case Studies & Past Impact</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Selected Digital Accomplishments
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
              Explore how we have engineered transformational web applications and high-conversion platforms for globally recognized industry leaders.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-md shadow-pink-600/30'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Grid of case study cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          const Icon = project.icon;
          return (
            <div
              key={project.id}
              className="group relative rounded-3xl bg-slate-900/40 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Visual Banner Preview Placeholder with Rich Gradient & Graphics */}
              <div className={`h-60 w-full bg-gradient-to-br ${project.imageColor} relative p-6 flex flex-col justify-between overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Top badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[11px] uppercase tracking-wider font-semibold border border-white/10">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight weight="bold" className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Graphic Tag / Metric */}
                <div className="relative z-10 space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white text-slate-950 font-mono text-xs font-bold shadow-lg">
                    <span>{project.metric}</span>
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-slate-300 font-medium">
                    Client: {project.client}
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-7 flex flex-col justify-between flex-grow space-y-6">
                <div className="space-y-3">
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech stacks tags */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[10px] uppercase font-medium tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive full card link */}
              <Link href="/contact-us" className="absolute inset-0 z-20" aria-label={`View details for ${project.title}`}>
                <span className="sr-only">View Case Study {project.title}</span>
              </Link>
            </div>
          );
        })}
      </div>

      {maxItems < projects.length && showHeader && (
        <div className="mt-16 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-button text-lg font-bold uppercase tracking-wider shadow-xl transition-all duration-200"
          >
            <span>Explore All Case Studies</span>
            <ArrowUpRight weight="bold" className="w-5 h-5 text-pink-400" />
          </Link>
        </div>
      )}
    </section>
  );
}
