import React from "react";
import ServicesOverview from "../../components/common/ServicesOverview";
import WhoWeHelp from "../../components/home/WhoWeHelp";
import ImpactStats from "../../components/common/ImpactStats";
import ContactCta from "../../components/common/ContactCta";
import Faq from "../../components/common/Faq";

export const metadata = {
  title: "Services & Capabilities | High-Converting Web Apps, Local SEO & Lead Systems",
  description: "Explore Rechen Studio's engineering capabilities: bespoke high-converting web apps, Google local SEO domination, and automated lead booking systems for contractors."
};

export default function ServicesHubPage() {
  return (
    <div className="space-y-12 pb-16">
      
      {/* Services Hub Hero Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-b border-base-c space-y-4">
        <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-text-content leading-tight">
          Capabilities Engineered to <br className="hidden sm:inline" />
          <span className="text-primary-color">Scale Trade & Service Businesses</span>
        </h1>
        <p className="font-sans text-base sm:text-lg text-text-content/70 max-w-3xl mx-auto leading-relaxed">
          From custom sub-second Next.js web applications to local Google Map Pack optimization and instant SMS lead alerts, we provide the complete digital revenue engine for your business.
        </p>
      </section>

      {/* Core Services Overview */}
      <ServicesOverview />

      {/* Who We Help - Industry Deep Dive */}
      <WhoWeHelp />

      {/* Impact Stats */}
      <ImpactStats />

      {/* Contact Call to Action */}
      <ContactCta />

      {/* FAQ */}
      <Faq 
        title="Services & Engagement FAQ" 
        subtitle="Common questions about custom builds, local SEO timelines, and lead integrations." 
      />
    </div>
  );
}
