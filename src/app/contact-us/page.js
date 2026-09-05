import React from "react";
import SocialLinks from "../../components/contact/SocialLinks";
import BookMeetingForm from "../../components/contact/BookMeetingForm";
import Consultation from "../../components/contact/Consultation";
import Newsletter from "../../components/common/Newsletter";
import Faq from "../../components/common/Faq";

export const metadata = {
  title: "Contact Us | Get In Touch with Araa Soft",
  description: "Connect with Araa Soft leads to scope your custom website, lead booking engine, or local SEO growth strategy."
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Contact Intro & Booking Form Layout */}
      <section className="pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-text-content leading-tight">
            Get In Touch <br />
            <span className="text-primary-color">Discovery & Strategy Call</span>
          </h1>
          <p className="font-sans text-base text-text-content/70 max-w-2xl mx-auto leading-relaxed">
            Tell us about your trade, current bottlenecks, and target service area. We will analyze your local competitors and formulate an actionable blueprint in under 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Social / Direct Info */}
          <div className="lg:col-span-5">
            <SocialLinks />
          </div>

          {/* Right Column: Book a meeting Form */}
          <div className="lg:col-span-7">
            <BookMeetingForm />
          </div>
        </div>
      </section>

      {/* Consultation Selector Component */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-base-c pt-12">
        <Consultation />
      </div>

      {/* FAQ Section */}
      <Faq 
        title="Scoping & Onboarding FAQ" 
        subtitle="Common questions regarding kickoff timelines, pricing models, and lead setup." 
      />
    </div>
  );
}
