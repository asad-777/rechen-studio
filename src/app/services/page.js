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
    <div className="space-y-12 pb-16 transition-colors duration-300">
      
      {/* Services Hub Hero Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-b border-base-3a space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest font-bold text-text-black bg-base-2a border border-base-3a px-3.5 py-1.5 rounded-full shadow-sm inline-block">
          Holistic Digital Consultancy
        </span>
        <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-text-black leading-tight">
          Capabilities Engineered to <span className="text-primary-a underline decoration-primary-a/40 decoration-2 underline-offset-4">Scale Ambitious Brands</span>
        </h1>
        <p className="font-sans text-base sm:text-lg text-text-black/80 max-w-3xl mx-auto leading-relaxed">
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
