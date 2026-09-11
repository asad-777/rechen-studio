import React from 'react';
import { FileText } from '@phosphor-icons/react/dist/ssr';
import ImpactStats from '../../components/common/ImpactStats';
import ContactCta from '../../components/common/ContactCta';
import Faq from '../../components/common/Faq';
import AboutPolicies from '../../components/about/AboutPolicies';

export const metadata = {
  title: "About Us",
  description: "Learn about Araa Soft's engineering standards, zero vendor lock-in guarantee, 100% intellectual property code ownership, and transparent sprint milestones.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Araa Soft | Custom Web Development, Local SEO & AI Automation / About Us",
    description: "Discover Araa Soft's engineering standards, zero vendor lock-in guarantee, 100% intellectual property code ownership, and transparent sprint-based deliverables.",
    url: "https://araasoft.com/about",
  },
  twitter: {
    title: "Araa Soft | Custom Web Development, Local SEO & AI Automation / About Us",
    description: "Learn about Araa Soft's engineering standards, zero vendor lock-in guarantee, and 100% code ownership.",
  },
};

export default function AboutPage() {
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
        <AboutPolicies />

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
