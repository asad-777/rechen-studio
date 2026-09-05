'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Code, 
  ChartBar, 
  ShareNetwork, 
  ArrowUpRight, 
  CheckCircle,
} from '@phosphor-icons/react';

export default function ServicesOverview() {
  const services = [
    {
      title: "High-Converting Web Apps",
      icon: Code,
      svg: "/svgs/undraw_system-interface_jffo.svg",
      tagline: "Speed, Prestige & Conversion",
      description: "Custom-engineered Next.js platforms that load under 1 second. Built with interactive project galleries, mobile-first design, and instant phone call triggers.",
      highlights: ["Sub-Second Mobile Load Times", "Custom Before/After Job Portfolios", "Instant SMS & Email Lead Routing"],
      colSpan: "md:col-span-2 lg:col-span-1"
    },
    {
      title: "Google Local SEO Domination",
      icon: ChartBar,
      svg: "/svgs/undraw_growth-analytics_vzjz.svg",
      tagline: "Rank #1 in Your Service Area",
      description: "Local SEO architecture, Google Business Profile optimization, zip-code service area pages, and schema data designed to capture high-margin inbound searches.",
      highlights: ["Google Map Pack Optimization", "Targeted City & Zip-Code Landing Pages", "Rich Review & Star Schema Markup"],
      colSpan: "md:col-span-1"
    },
    {
      title: "Brand Authority & Social Growth",
      icon: ShareNetwork,
      svg: "/svgs/undraw_social-media-post_tg7l.svg",
      tagline: "Establish Market Authority",
      description: "Professional brand assets, vehicle wrap/card mockups, social media profiles, and review generation systems that turn first-time viewers into loyal clients.",
      highlights: ["High-Impact Social Media Profiles", "Automated Google Review Funnels", "Complete Brand & Uniform Assets"],
      colSpan: "md:col-span-1"
    }
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div className="space-y-4 max-w-2xl">
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-text-content tracking-tight leading-tight">
            Digital Architecture That <br className="hidden sm:inline" />
            <span className="text-primary-color">Signs High-Ticket Contracts</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-text-content/70 leading-relaxed">
            Everything you need to eliminate lead waste, outrank local competitors, and scale your trade business profitably.
          </p>
        </div>

        <Link
          href="/services"
          className="w-fit inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-base-b hover:bg-base-c border border-base-c text-text-content font-mono text-sm font-bold uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer"
        >
          <span>View All Service Specs</span>
          <ArrowUpRight weight="bold" className="w-4 h-4 text-primary-color" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={idx}
              className={`group relative rounded-3xl bg-base-b p-8 sm:p-9 border border-base-c hover:border-primary-color/60 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between overflow-hidden space-y-6 ${service.colSpan}`}
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary-color opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="space-y-5">
                
                {/* Header Icon + Counter */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-base-a border border-base-c flex items-center justify-center text-primary-color group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <Icon weight="duotone" className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-content/40 bg-base-a px-3 py-1 rounded-full border border-base-c">
                    0{idx + 1}
                  </span>
                </div>

                {/* Frameless Vector SVG Illustration */}
                <div className="h-36 w-full flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.svg}
                    alt={`${service.title} illustration`}
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-1.5">
                  <span className="font-mono text-xs uppercase tracking-widest text-primary-color font-bold block">
                    {service.tagline}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-content group-hover:text-primary-color transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-text-content/70 leading-relaxed pt-1">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bullet highlights */}
              <div className="pt-4 border-t border-base-c/60 space-y-2.5">
                <p className="font-mono text-[11px] uppercase tracking-wider text-text-content/50 font-bold">Included Capabilities:</p>
                <ul className="space-y-2">
                  {service.highlights.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-sans text-text-content/90">
                      <CheckCircle weight="fill" className="w-3.5 h-3.5 text-special-text shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
