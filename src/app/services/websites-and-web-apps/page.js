import React from "react";
import Link from "next/link";
import ContactCta from "../../../components/common/ContactCta";
import CaseStudiesSection from "../../../components/common/CaseStudiesSection";
import Faq from "../../../components/common/Faq";

export const metadata = {
  title: "Custom Websites & Fullstack Web-Apps | Rechen Studio Services",
  description: "From stunning glassmorphic marketing destinations to mission-critical Next.js SaaS platforms, we engineer high-performance web experiences tailored for ambitious brands."
};

export default function WebsitesAndWebAppsPage() {
  return (
    <div className="space-y-16 pb-20 transition-colors duration-300">
      
      {/* Service Domain Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-base-3a">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs">
            <Link href="/services" className="text-text-black/70 hover:text-primary-a uppercase tracking-wider font-bold transition-colors">
              Services
            </Link>
            <span className="text-text-black/40">/</span>
            <span className="uppercase tracking-widest text-text-black font-bold bg-base-2a border border-base-3a px-3 py-1 rounded-full shadow-sm">
              Websites & Web-Apps
            </span>
          </div>
          
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-text-black leading-tight">
            Aesthetic Mastery & <span className="text-primary-a underline decoration-primary-a/40 decoration-2 underline-offset-4">Production SaaS Power</span>
          </h1>

          <p className="font-sans text-lg text-text-black/80 leading-relaxed max-w-3xl">
            Why compromise between design transcendence and backend engineering? Our integrated engineering division builds award-winning marketing platforms, interactive showrooms, and mission-critical fullstack web applications powered by Next.js 15, responsive micro-animations, and edge database architectures.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="px-8 py-4 rounded-2xl bg-primary-a hover:bg-primary-a/90 text-text-white font-button text-lg font-bold uppercase tracking-wider shadow-md transition-all duration-200 hover:scale-105"
            >
              Scope Website or Web-App
            </Link>
            <Link
              href="/case-studies"
              className="px-7 py-4 rounded-2xl bg-base-1a hover:bg-base-3a/40 border border-base-3a text-text-black font-button text-lg font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
            >
              Explore Digital Case Studies
            </Link>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
          {[
            { title: "Fluid UI & Micro-Animations", desc: "Bespoke design systems featuring smooth hover mechanics, custom typography hierarchy, and zero cookie-cutter visual themes." },
            { title: "Realtime Edge & SaaS DBs", desc: "Low-latency telemetry syncing, live collaboration interfaces, and robust role-based authentication using Supabase, PostgreSQL, and Redis." },
            { title: "100/100 Core Web Vitals", desc: "Obsessive performance tuning, sub-second SSR/ISR server rendering on Vercel, and airtight enterprise SOC-2 security standards." }
          ].map((item, idx) => (
            <div key={idx} className="p-7 rounded-3xl bg-base-2a/60 border border-base-3a space-y-3 hover:border-primary-a transition-colors shadow-sm">
              <h3 className="font-heading text-xl font-bold text-text-black">{item.title}</h3>
              <p className="font-sans text-xs text-text-black/80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Relevant Case studies preview */}
      <CaseStudiesSection maxItems={4} showHeader={true} />

      {/* Contact Call to Action */}
      <ContactCta />

      {/* FAQ component */}
      <Faq title="Websites & Web-Apps FAQ" subtitle="Answers regarding custom architecture, CMS integrations, database ownership, and SLA uptime guarantees." />
    </div>
  );
}
