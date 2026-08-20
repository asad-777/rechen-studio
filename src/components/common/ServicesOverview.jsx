'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Desktop, 
  Code, 
  ChartBar, 
  ShareNetwork, 
  ArrowUpRight, 
  Sparkle,
  CheckCircle,
  Lightning
} from '@phosphor-icons/react';

export default function ServicesOverview() {
  const services = [
    {
      title: "Websites & Web-Apps",
      slug: "/services/websites-and-web-apps",
      icon: Code,
      tagline: "Flagship Digital Architecture",
      description: "From aesthetic luxury marketing destinations to production-grade Next.js SaaS web applications, we engineer transcendent frontends and reactive edge database backends.",
      highlights: ["Next.js 15 & React 19 Ecosystems", "Sub-Second Rendering & Custom UI", "Realtime WebSockets & Edge Security"],
      colSpan: "md:col-span-2 lg:col-span-1"
    },
    {
      title: "SEO & Growth",
      slug: "/services/seo",
      icon: ChartBar,
      tagline: "Dominate Search Authority",
      description: "Technical search engine optimization, programmatic content scaling, structural JSON-LD schemas, and Lighthouse performance tuning to drive organic acquisition.",
      highlights: ["Technical Core Web Vitals Auditing", "Programmatic SEO Architecture", "High-Authority Digital Visibility"],
      colSpan: "md:col-span-1"
    },
    {
      title: "Social Media Strategy",
      slug: "/services/social-media",
      icon: ShareNetwork,
      tagline: "Viral Digital Brand Resonance",
      description: "Comprehensive content curation, digital narrative branding, design assets, and strategic distribution campaigns designed to capture developer and executive attention.",
      highlights: ["High-Impact Video & Motion Assets", "Targeted Founder & Enterprise Branding", "Omnichannel Growth Mechanics"],
      colSpan: "md:col-span-1"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative transition-colors duration-300">
      
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div className="space-y-4 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest font-semibold text-primary-a flex items-center gap-2">
            <Sparkle weight="fill" className="w-4 h-4 text-primary-a" />
            <span>Studio Core Expertise</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-text-black tracking-tight">
            Services Engineered for Growth
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-black/80 leading-relaxed">
            We provide full-lifecycle digital consultancy—from initial interactive prototypes and custom backend architectures to aggressive organic distribution strategies.
          </p>
        </div>

        <Link
          href="/services"
          className="w-fit inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-base-2a hover:bg-base-3a/40 border border-base-3a text-text-black font-button text-base font-bold uppercase tracking-wider transition-all shadow-sm shrink-0"
        >
          <span>Explore All Studio Services</span>
          <ArrowUpRight weight="bold" className="w-4 h-4 text-primary-a" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <Link
              key={idx}
              href={service.slug}
              className={`group relative rounded-3xl bg-base-2a/70 hover:bg-base-2a p-10 sm:p-12 border border-base-3a hover:border-primary-a transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between overflow-hidden space-y-8 ${service.colSpan}`}
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-primary-a opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-base-1a border border-base-3a flex items-center justify-center text-text-black group-hover:scale-110 group-hover:border-primary-a transition-all duration-300 shadow-sm">
                    <Icon weight="duotone" className="w-7 h-7 text-primary-a" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-base-1a border border-base-3a flex items-center justify-center text-text-black/70 group-hover:text-text-white group-hover:bg-primary-a group-hover:border-primary-a transition-all duration-300">
                    <ArrowUpRight weight="bold" className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-sm uppercase tracking-widest text-primary-a font-bold block">
                    {service.tagline}
                  </span>
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold text-text-black group-hover:text-primary-a transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-base text-text-black/80 leading-relaxed pt-1">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bullet highlights */}
              <div className="pt-6 border-t border-base-3a space-y-3">
                <p className="font-mono text-[11px] uppercase tracking-wider text-text-black/70 font-bold">Key Capabilities:</p>
                <ul className="space-y-2">
                  {service.highlights.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-sans text-text-black">
                      <CheckCircle weight="fill" className="w-4 h-4 text-primary-a shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
