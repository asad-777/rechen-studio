import React from "react";
import Link from "next/link";
import ContactCta from "../../../components/common/ContactCta";
import CaseStudiesSection from "../../../components/common/CaseStudiesSection";
import Faq from "../../../components/common/Faq";

export const metadata = {
  title: "Social Media & Executive Branding Strategy | Rechen Studio Services",
  description: "Capturing developer, investor, and executive attention through high-impact technical narrative branding, motion graphics, and viral distribution campaigns."
};

export default function SocialMediaServicePage() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Service Domain Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2">
            <Link href="/services" className="font-mono text-xs text-slate-500 hover:text-white uppercase tracking-wider transition-colors">
              Services
            </Link>
            <span className="text-slate-600">/</span>
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-semibold bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              Social Media Strategy
            </span>
          </div>
          
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Commanding Attention via <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 bg-clip-text text-transparent">Viral Brand Resonance</span>
          </h1>

          <p className="font-sans text-lg text-slate-300 leading-relaxed max-w-2xl">
            Even the most extraordinary technical platforms fail without strategic distribution. We craft compelling visual narratives, motion UI snippets, and authority founder branding across LinkedIn, Twitter/X, and technical developer ecosystems.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 hover:opacity-90 text-white font-button text-lg font-bold uppercase tracking-wider shadow-lg shadow-amber-600/25 transition-all"
            >
              Consult On Brand Strategy
            </Link>
            <Link
              href="/case-studies"
              className="px-7 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white font-button text-lg font-bold uppercase tracking-wider transition-colors"
            >
              View Campaign Metrics
            </Link>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
          {[
            { title: "Motion UI & Snippet Production", desc: "Bespoke short-form animated video breakdowns showing off product mechanics, dark-mode toggles, and micro-animation craftsmanship." },
            { title: "Technical Founder Branding", desc: "Establishing C-suite executives and lead engineers as authentic industry thought leaders on LinkedIn and technical forums." },
            { title: "Developer Relations (DevRel)", desc: "Strategic open-source community engagement, documentation refinement, and hackathon brand alignment." }
          ].map((item, idx) => (
            <div key={idx} className="p-7 rounded-3xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <h3 className="font-heading text-xl font-bold text-white">{item.title}</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Relevant Case studies preview */}
      <CaseStudiesSection maxItems={3} showHeader={true} />

      {/* Contact Call to Action */}
      <ContactCta />

      {/* FAQ component */}
      <Faq title="Social Media & Branding FAQ" subtitle="Answers regarding asset deliverables, platform focus, and audience analytics." />
    </div>
  );
}
