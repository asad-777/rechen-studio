import React from "react";
import Hero from "../components/home/Hero";
import BrandsMarquee from "../components/home/BrandsMarquee";
import AffiliationCarousel from "../components/home/AffiliationCarousel";
import ImpactStats from "../components/common/ImpactStats";
import ProblemStatement from "../components/home/ProblemStatement";
import WhoWeHelp from "../components/home/WhoWeHelp";
import ServicesOverview from "../components/common/ServicesOverview";
import ProcessSteps from "../components/process/ProcessSteps";
import Faq from "../components/common/Faq";
import ContactCta from "../components/common/ContactCta";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />


      {/* <AffiliationCarousel /> */}
      <ImpactStats />
      <ProblemStatement />
      <BrandsMarquee />


      <WhoWeHelp />
      <ServicesOverview />

      <ProcessSteps />

      <Faq />

      <ContactCta />
    </div>
  );
}
