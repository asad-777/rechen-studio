import React from "react";
import Hero from "../components/home/Hero";
import AffiliationCarousel from "../components/home/AffiliationCarousel";
import CaseStudiesSection from "../components/common/CaseStudiesSection";
import ImpactStats from "../components/common/ImpactStats";
import Awards from "../components/home/Awards";
import TestimonialsSection from "../components/common/TestimonialsSection";
import ServicesOverview from "../components/common/ServicesOverview";
import ContactCta from "../components/common/ContactCta";
import Faq from "../components/common/Faq";

export default function Home() {
  return (
    <div className="space-y-4">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Affiliation Carousel */}
      <AffiliationCarousel />

      {/* 3. Case Studies */}
      <CaseStudiesSection maxItems={3} showHeader={true} />

      {/* 4. Impact / Stats */}
      <ImpactStats />

      {/* 5. Awards */}
      <Awards />

      {/* 6. Insights / Testimonials */}
      <TestimonialsSection />

      {/* 7. Services Overview */}
      <ServicesOverview />

      {/* 8. Contact Us CTA */}
      <ContactCta />

      {/* 9. FAQ Section */}
      <Faq />
    </div>
  );
}
