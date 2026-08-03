import React from "react";
import CaseStudiesSection from "../../components/common/CaseStudiesSection";
import ContactCta from "../../components/common/ContactCta";
import Faq from "../../components/common/Faq";

export const metadata = {
  title: "Case Studies & Digital Products | Rechen Studio",
  description: "Explore our verified track record of award-winning custom websites, fintech web apps, luxury commerce platforms, and technical SEO growth."
};

export default function CaseStudiesPage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Page Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-b border-slate-800/80 space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest font-semibold text-pink-400 bg-pink-500/10 border border-pink-500/20 px-3.5 py-1.5 rounded-full">
          Verified Commercial Velocity
        </span>
        <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
          Studio Archive & Case Studies
        </h1>
        <p className="font-sans text-base text-slate-300 max-w-2xl mx-auto">
          From AI-driven high fashion retail experiences to low-latency fintech data telemetry, analyze the structural architecture and commercial metrics behind our client engagements.
        </p>
      </section>

      {/* Complete Showcase of Case Studies */}
      <CaseStudiesSection maxItems={12} showHeader={false} />

      {/* Contact Call to Action */}
      <ContactCta />

      {/* FAQ connected from Case Studies in Wireframe */}
      <Faq title="Case Studies & Technical Deliverables FAQ" subtitle="Questions on ownership, intellectual property rights, and technical stack handoff." />
    </div>
  );
}
