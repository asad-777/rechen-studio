import React from "react";
import Script from "next/script";
import Hero from "../components/home/Hero";
import BrandsMarquee from "../components/home/BrandsMarquee";
import AffiliationCarousel from "../components/home/AffiliationCarousel";
import ImpactStats from "../components/common/ImpactStats";
import ProblemStatement from "../components/home/ProblemStatement";
import WhoWeHelp from "../components/home/WhoWeHelp";
import ServicesOverview from "../components/common/ServicesOverview";
import ProcessSteps from "../components/process/ProcessSteps";
import FoundersSection from "../components/home/FoundersSection";
import Faq from "../components/common/Faq";
import ContactCta from "../components/common/ContactCta";
import HomeInteractionTracker from "../components/analytics/HomeInteractionTracker";

export default function Home() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <div className="w-full flex flex-col">
      <HomeInteractionTracker />
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics-home" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}
      <Hero />


      {/* <AffiliationCarousel /> */}
      <ImpactStats />
      <ProblemStatement />
      <BrandsMarquee />


      {/* <WhoWeHelp /> */}
      <ServicesOverview />

      <ProcessSteps />

      <FoundersSection />

      <Faq />

      <ContactCta />
    </div>
  );
}
