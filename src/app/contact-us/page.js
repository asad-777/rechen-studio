import React from "react";
import SocialLinks from "../../components/contact/SocialLinks";
import BookMeetingForm from "../../components/contact/BookMeetingForm";
import Consultation from "../../components/contact/Consultation";
import Newsletter from "../../components/common/Newsletter";
import Faq from "../../components/common/Faq";

export const metadata = {
  title: "Contact Us | Schedule an Engineering Scoping Meeting with Rechen Studio",
  description: "Connect with Rechen Studio principals to scope your custom website, fullstack web app, or SEO growth platform."
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Contact Intro & Booking Form Layout */}
      <section className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 font-bold bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full">
            Start Your Architecture Journey
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Get In Touch & Book Scoping
          </h1>
          <p className="font-sans text-base text-slate-300">
            Choose your communication channel below, explore consultative service deliverables, or lock in an immediate 30-minute kickoff video consultation with our principal architects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Social Links component */}
          <div className="lg:col-span-5">
            <SocialLinks />
          </div>

          {/* Right Column: Book a meeting Form */}
          <div className="lg:col-span-7">
            <BookMeetingForm />
          </div>
        </div>
      </section>

      {/* Consultation Selector Component (leading to Social Media, Websites, SEO, WebApps) */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80 pt-8">
        <Consultation />
      </div>

      {/* Newsletter Section */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-4">
        <Newsletter />
      </div>

      {/* FAQ Section */}
      <Faq title="Scoping & Onboarding FAQ" subtitle="Common questions regarding project initiation, NDA procedures, and communication channels." />
    </div>
  );
}
