import React from "react";
import ServicesOverview from "../../components/common/ServicesOverview";
import CaseStudiesSection from "../../components/common/CaseStudiesSection";
import TestimonialsSection from "../../components/common/TestimonialsSection";
import ImpactStats from "../../components/common/ImpactStats";
import Faq from "../../components/common/Faq";

export const metadata = {
  title: "About Us | Rechen Studio Engineering & Architecture",
  description: "Learn about Rechen Studio's engineering principles, award-winning digital craftsmen, and our mission to build transcendent web platforms."
};

export default function AboutPage() {
  return (
    <div className="space-y-8 pb-16 transition-colors duration-300">
      
      {/* About Header Banner */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-base-3a">
        <div className="max-w-3xl space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-text-black font-bold bg-base-2a border border-base-3a px-3.5 py-1.5 rounded-full shadow-sm inline-block">
            Our Mission & DNA
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-text-black leading-tight">
            We Are Pioneers of <span className="text-primary-a underline decoration-primary-a/40 decoration-2 underline-offset-4">Digital Craftsmanship</span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-text-black/80 leading-relaxed">
            Founded by veteran software engineers and brand architects, Rechen Studio operates at the intersection of aesthetic ambition and uncompromising technical rigor. We believe that exceptional digital products require harmonious design systems, lightning-fast edge computing, and zero bloated shortcuts.
          </p>
        </div>

        {/* Studio core principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
          {[
            { title: "Zero Cookie-Cutter Templates", desc: "Every project is architected from scratch using atomic design tokens and tailored Next.js server structures." },
            { title: "Performance is Branding", desc: "Sub-second loading speed and 100/100 Lighthouse scores are not optionals; they are fundamental commercial imperatives." },
            { title: "Embedded Partner Mentality", desc: "We operate as an agile extension of your internal C-suite, engineering, and growth leads with total Slack transparency." },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-base-2a/60 border border-base-3a shadow-sm space-y-2 hover:border-primary-a transition-colors">
              <h3 className="font-heading text-lg font-bold text-text-black">{item.title}</h3>
              <p className="font-sans text-xs text-text-black/80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Wireframe components for About: Services -> Case Studies -> Testimonials -> Stats -> FAQ */}
      <ServicesOverview />
      <CaseStudiesSection maxItems={3} showHeader={true} />
      <TestimonialsSection />
      <ImpactStats />
      <Faq title="About Working With Us - FAQ" subtitle="Everything you need to know about our team dynamic and studio SLAs." />
    </div>
  );
}
