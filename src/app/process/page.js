import React from "react";
import ProcessSteps from "../../components/process/ProcessSteps";
import ImpactStats from "../../components/common/ImpactStats";
import ContactCta from "../../components/common/ContactCta";
import Faq from "../../components/common/Faq";

export const metadata = {
  title: "Engineering & Design Process | Rechen Studio Methodology",
  description: "Discover Rechen Studio's rigorous 4-step digital product engineering methodology—from initial architectural discovery to zero-downtime global deployment."
};

export default function ProcessPage() {
  return (
    <div className="space-y-12 pb-16 transition-colors duration-300">
      
      {/* Process Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-b border-base-3a space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest font-bold text-text-black bg-base-2a border border-base-3a px-3.5 py-1.5 rounded-full shadow-sm inline-block">
          Battle-Tested Pipeline
        </span>
        <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-text-black">
          Our Architectural Workflow
        </h1>
        <p className="font-sans text-base text-text-black/80 max-w-2xl mx-auto leading-relaxed">
          We eliminate developer burnout, scope creeping, and bloated prototypes by adhering to a clear, iterative milestone methodology that prioritizes code quality and commercial speed.
        </p>
      </section>

      {/* Process Steps Component */}
      <ProcessSteps />

      {/* Impact / Stats Component from wireframe */}
      <ImpactStats />

      {/* Contact Call to Action */}
      <ContactCta />

      {/* FAQ connected to Process in wireframe */}
      <Faq title="Process & Sprints FAQ" subtitle="Everything regarding Agile weekly sprints, GitHub repository access, and Figma design handoff." />
    </div>
  );
}
