'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  FileText, 
  Code, 
  Lock, 
  ArrowsClockwise, 
  Handshake, 
  CheckCircle,
  CaretDown,
  ArrowRight
} from '@phosphor-icons/react';
import ImpactStats from '../../components/common/ImpactStats';
import ContactCta from '../../components/common/ContactCta';
import Faq from '../../components/common/Faq';

export default function AboutPage() {
  const [openPolicy, setOpenPolicy] = useState(0);

  const policies = [
    {
      id: "ownership",
      title: "1. 100% Intellectual Property & Code Ownership",
      icon: Code,
      content: "Upon final milestone settlement, 100% of all intellectual property, bespoke Next.js source code, custom design assets, and database architecture transfer completely and unconditionally to you. Araa Soft retains zero proprietary hold or hostage claims over your digital assets. You own everything outright."
    },
    {
      id: "scope",
      title: "2. Scope of Work, Timelines & Sprint Milestones",
      icon: Handshake,
      content: "All projects operate under a clearly documented Statement of Work (SOW) specifying milestone deliverables, sprint schedules (typically 7 to 14 business days for contractor deployments), and client feedback windows. Any requested features outside the original scope are quoted transparently as separate sprint add-ons."
    },
    {
      id: "hosting",
      title: "3. Hosting, Deployment & Zero Vendor Lock-in",
      icon: ArrowsClockwise,
      content: "We deploy client web applications on top-tier global edge networks (Vercel, AWS, Cloudflare). We configure and transfer all DNS, domain records, and deployment pipelines directly to your company accounts. You have total freedom to host, migrate, or manage your platform independently at any time."
    },
    {
      id: "payment",
      title: "4. Payment Terms & Invoicing Schedule",
      icon: FileText,
      content: "Standard projects follow a transparent milestone structure (typically 50% deposit upon kickoff and 50% upon final client sign-off and deployment). Monthly retainer services for SEO or lead system management are billed on a 30-day rolling basis with no long-term restrictive contracts."
    },
    {
      id: "privacy",
      title: "5. Privacy, Confidentiality & Lead Data Security",
      icon: Lock,
      content: "Araa Soft treats all proprietary business metrics, customer lead inquiries, API keys, and client communications with strict enterprise-grade confidentiality. We do not sell, scrape, or share your customer data with any third parties."
    },
    {
      id: "revisions",
      title: "6. Revisions & Client Satisfaction Guarantee",
      icon: ShieldCheck,
      content: "Every sprint milestone includes dedicated interactive review cycles where our design and engineering leads refine layouts, copy, animations, and lead capture workflows until you are 100% satisfied with the outcome before global launch."
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* About Header Banner */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-base-c">
        <div className="max-w-3xl space-y-6">
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-text-content leading-tight">
            Engineering High-Performance <br />
            <span className="text-primary-color">Digital Engines for Trade Leaders</span>
          </h1>
          
          <p className="font-sans text-base sm:text-lg text-text-content/80 leading-relaxed">
            Araa Soft was founded to bridge the gap between heavy, dependable trade businesses and elite digital architecture. We replace broken DIY templates and empty promises with fast, revenue-generating web systems that actually close contracts.
          </p>
        </div>

        {/* Studio core principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
          {[
            { 
              title: "Zero Cookie-Cutter Bloat", 
              desc: "No slow WordPress templates or broken Lovable single-pagers. Every platform is hand-crafted with clean Next.js code for maximum speed and conversion." 
            },
            { 
              title: "Built For Immediate ROI", 
              desc: "We focus on what drives revenue for contractors: sub-second load speeds, Google Local SEO map rankings, and instant lead alerts to your phone." 
            },
            { 
              title: "100% Client Ownership", 
              desc: "No hostage fees, no lock-in contracts. When the job is done, you own every single line of code, design asset, and account outright." 
            },
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-base-b border border-base-c shadow-lg space-y-3 hover:border-primary-color/60 transition-all duration-300 hover:-translate-y-1">
              <span className="font-mono text-xs font-bold text-primary-color uppercase tracking-wider block">0{idx + 1}. Principle</span>
              <h3 className="font-heading text-xl font-bold text-text-content">{item.title}</h3>
              <p className="font-sans text-sm text-text-content/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <ImpactStats />

      {/* Terms of Service & Studio Policies Section */}
      <section id="terms" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
        
        {/* Terms Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-text-content leading-tight">
            Terms of Service & <br className="hidden sm:inline" />
            <span className="text-primary-color">Studio Policies</span>
          </h2>
          
          <p className="font-sans text-base text-text-content/70 leading-relaxed">
            We believe in total transparency, ethical engineering, and zero hidden clauses. Here is how we protect your business and guarantee project success.
          </p>
        </div>

        {/* Policy Accordions */}
        <div className="space-y-4">
          {policies.map((item, idx) => {
            const isOpen = openPolicy === idx;
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-base-b border-primary-color shadow-xl'
                    : 'bg-base-b/60 border-base-c hover:border-text-content/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenPolicy(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                      isOpen ? 'bg-primary-color text-base-a border-primary-color' : 'bg-base-a text-primary-color border-base-c'
                    }`}>
                      <IconComponent weight="duotone" className="w-5 h-5" />
                    </div>
                    <span className={`font-mono text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? 'text-primary-color' : 'text-text-content'
                    }`}>
                      {item.title}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-base-c transition-transform duration-300 ${
                    isOpen ? 'bg-primary-color rotate-180 text-base-a border-primary-color' : 'bg-base-a text-text-content'
                  }`}>
                    <CaretDown weight="bold" className="w-4 h-4" />
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${
                    isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <div className="pt-4 border-t border-base-c/60 text-text-content/80 font-sans text-sm sm:text-base leading-relaxed pl-14">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal Advisory Note */}
        <div className="mt-10 p-6 rounded-2xl bg-base-b border border-base-c flex items-center gap-4 text-xs font-mono text-text-content/60">
          <FileText weight="duotone" className="w-6 h-6 text-primary-color shrink-0" />
          <span>Last Updated: January 2026. All bespoke development engagements include a formal signed master services agreement (MSA).</span>
        </div>
      </section>

      {/* FAQ */}
      <Faq 
        title="About Working With Us" 
        subtitle="Frequently asked questions regarding our contracts, deliverables, and team dynamics." 
      />

      {/* Conversion CTA */}
      <ContactCta />

    </div>
  );
}
