import React from "react";
import ServicesOverview from "../../components/common/ServicesOverview";
import ImpactStats from "../../components/common/ImpactStats";
import ContactCta from "../../components/common/ContactCta";
import Faq from "../../components/common/Faq";

export const metadata = {
  title: "Studio Services & Offerings | Websites & Web-Apps, SEO, Social Media",
  description: "Explore Rechen Studio's holistic digital consultancy offerings: bespoke websites and production-ready fullstack web applications, technical SEO, and viral branding."
};

export default function ServicesHubPage() {
  return (
    <div className="space-y-12 pb-16">
      
      {/* Services Hub Hero Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-b border-slate-800/80 space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3.5 py-1.5 rounded-full">
          Holistic Digital Consultancy
        </span>
        <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
          Capabilities Engineered to <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-pink-500 bg-clip-text text-transparent">Scale Ambitious Brands</span>
        </h1>
        <p className="font-sans text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Our core technical pillars cover the complete lifecycle of premier digital products. From unified custom websites and web applications to programmatic SEO and viral branding, our engineering teams provide uncompromising execution.
        </p>
      </section>

      {/* Core Services Overview component linking to Websites & Web-Apps, SEO, Social Media */}
      <ServicesOverview />

      {/* Impact Stats */}
      <ImpactStats />

      {/* Contact Call to Action */}
      <ContactCta />

      {/* FAQ connected from Services in Wireframe */}
      <Faq title="Services & Engagement FAQ" subtitle="Answers regarding standalone service scoping vs. full-lifecycle digital transformations." />
    </div>
  );
}
