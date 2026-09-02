'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Desktop, 
  Code, 
  ChartBar, 
  ShareNetwork, 
  ArrowRight, 
  CheckCircle
} from '@phosphor-icons/react';

export default function Consultation() {
  const [activeTab, setActiveTab] = useState('websites-web-apps');

  const services = [
    {
      id: 'websites-web-apps',
      name: 'Websites & Web-Apps',
      icon: Code,
      badge: 'Integrated Digital Products',
      description: 'From fluid luxury custom websites to high-concurrence SaaS platforms built with Next.js 15, we handle design systems and realtime databases under one specialized engineering architecture.',
      deliverables: [
        'Custom glassmorphic UI design systems & micro-animations',
        'Next.js App Router & Server Components for sub-second Core Web Vitals',
        'Headless CMS integrations (Sanity/Strapi) or Supabase realtime DB',
        'SOC-2 / HIPAA grade role-based authentication and security'
      ],
      link: '/services/websites-and-web-apps'
    },
    {
      id: 'seo',
      name: 'Technical SEO',
      icon: ChartBar,
      badge: 'Organic Acquisition',
      description: 'Dominant organic visibility achieved through structured semantic schema arrays, high-speed rendering, and programmatic landing page infrastructure.',
      deliverables: [
        'Automated programmatic SEO index scaling',
        'JSON-LD rich snippet schema integration',
        'Core Web Vitals crawl bottleneck remediation',
        'High-authority architectural link sculpting'
      ],
      link: '/services/seo'
    },
    {
      id: 'social',
      name: 'Social Branding',
      icon: ShareNetwork,
      badge: 'Audience Resonance',
      description: 'Viral motion UI breakdowns and founder narrative authority designed to capture developer, investor, and enterprise attention across LinkedIn and X.',
      deliverables: [
        'Custom motion UI & animated product video snippets',
        'Technical founder C-suite LinkedIn authority writing',
        'Developer relations (DevRel) & open-source alignments',
        'Omnichannel viral conversion funnel engineering'
      ],
      link: '/services/social-media'
    },
  ];

  const currentService = services.find(s => s.id === activeTab) || services[0];
  const Icon = currentService.icon;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto transition-colors duration-300">
      
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-text-black tracking-tight">
          Tailor Your Architecture Scoping
        </h2>
        <p className="font-sans text-sm sm:text-base text-text-black/80">
          Select a core practice area below to preview exact deliverables and schedule a targeted scoping discussion with our principal technical directors.
        </p>
      </div>

      {/* Domain Selection Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8 bg-base-2a p-2 rounded-3xl border border-base-3a shadow-sm">
        {services.map((tab) => {
          const TabIcon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-button text-sm sm:text-base font-bold transition-all duration-300 ${
                isActive
                  ? 'bg-primary-a text-text-white shadow-md'
                  : 'text-text-black hover:text-primary-a hover:bg-base-3a/30'
              }`}
            >
              <TabIcon weight={isActive ? "duotone" : "regular"} className={`w-5 h-5 ${isActive ? 'text-text-white scale-110' : 'text-text-black'} transition-transform`} />
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Service Deliverable Box */}
      <div className="rounded-3xl bg-base-2a/80 p-8 sm:p-12 border border-base-3a shadow-md relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-primary-a" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-primary-a font-bold block">
                {currentService.badge}
              </span>
              <h3 className="font-heading text-2xl sm:text-4xl font-bold text-text-black">
                {currentService.name}
              </h3>
            </div>
            
            <p className="font-sans text-base text-text-black/80 leading-relaxed">
              {currentService.description}
            </p>

            <div className="space-y-3 pt-2">
              <p className="font-mono text-xs uppercase tracking-wider text-text-black/70 font-bold">Included Architectural Deliverables:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-text-black font-sans font-medium">
                    <CheckCircle weight="fill" className="w-4 h-4 text-primary-a shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-stretch sm:items-center lg:items-end justify-center">
            <div className="w-full p-6 sm:p-8 rounded-2xl bg-base-1a border border-base-3a space-y-6 text-center lg:text-left shadow-sm">
              <div className="space-y-1">
                <p className="font-mono text-[11px] text-text-black/70 uppercase tracking-wider font-bold">Ready to talk specifications?</p>
                <h4 className="font-heading text-lg font-bold text-text-black">Scope Your {currentService.name}</h4>
              </div>

              <div className="space-y-3">
                <Link
                  href={currentService.link}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-base-2a hover:bg-base-3a/40 border border-base-3a text-text-black font-button text-sm font-bold uppercase tracking-wider transition-all shadow-sm"
                >
                  <span>Explore Technical Specs</span>
                  <ArrowRight weight="bold" className="w-4 h-4 text-primary-a" />
                </Link>

                <Link
                  href="#book-scoping"
                  onClick={(e) => {
                    const el = document.getElementById('book-scoping-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-primary-a hover:bg-primary-a/90 text-text-white font-button text-sm font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  <span>Book Immediate Scoping</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
