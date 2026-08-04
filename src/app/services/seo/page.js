import React from "react";
import Link from "next/link";
import ContactCta from "../../../components/common/ContactCta";
import CaseStudiesSection from "../../../components/common/CaseStudiesSection";
import Faq from "../../../components/common/Faq";

export const metadata = {
  title: "Technical SEO & Programmatic Growth | Rechen Studio Services",
  description: "Dominance in organic search rankings through deep structural JSON-LD schema architecture, programmatic landing pages, and Core Web Vitals optimization."
};

export default function SeoServicePage() {
  return (
    <div className="space-y-16 pb-20 transition-colors duration-300">
      
      {/* Service Domain Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-base-3a">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs">
            <Link href="/services" className="text-text-black/70 hover:text-primary-a uppercase tracking-wider font-bold transition-colors">
              Services
            </Link>
            <span className="text-text-black/40">/</span>
            <span className="uppercase tracking-widest text-text-black font-bold bg-base-2a border border-base-3a px-3 py-1 rounded-full shadow-sm">
              SEO & Growth
            </span>
          </div>
          
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-text-black leading-tight">
            Dominating Organic Authority via <span className="text-primary-a underline decoration-primary-a/40 decoration-2 underline-offset-4">Technical Precision</span>
          </h1>

          <p className="font-sans text-lg text-text-black/80 leading-relaxed max-w-2xl">
            Modern SEO is an engineering discipline, not just a content game. We restructure web architectures, deploy programmatic dynamic index routes, and eliminate crawl bottlenecks to capture sustainable high-intent customer acquisition.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="px-8 py-4 rounded-2xl bg-primary-a hover:bg-primary-a/90 text-text-white font-button text-lg font-bold uppercase tracking-wider shadow-md transition-all duration-200 hover:scale-105"
            >
              Request Technical SEO Audit
            </Link>
            <Link
              href="/case-studies"
              className="px-7 py-4 rounded-2xl bg-base-1a hover:bg-base-3a/40 border border-base-3a text-text-black font-button text-lg font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
            >
              Analyze SEO Impact Results
            </Link>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
          {[
            { title: "Programmatic SEO Scaling", desc: "Automated dynamic page creation utilizing structured backend databases to capture thousands of long-tail high-intent keyword variations." },
            { title: "JSON-LD & Schema Architecture", desc: "Advanced semantic markup guaranteeing rich SERP excerpts, automated Google Knowledge Graph integration, and AI engine readability." },
            { title: "Crawl Budget & Rendering Audit", desc: "Resolving javascript rendering delays, eliminating canonical duplicate loops, and establishing clean structural internal linkage grids." }
          ].map((item, idx) => (
            <div key={idx} className="p-7 rounded-3xl bg-base-2a/60 border border-base-3a space-y-3 hover:border-primary-a transition-colors shadow-sm">
              <h3 className="font-heading text-xl font-bold text-text-black">{item.title}</h3>
              <p className="font-sans text-xs text-text-black/80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Relevant Case studies preview */}
      <CaseStudiesSection maxItems={3} showHeader={true} />

      {/* Contact Call to Action */}
      <ContactCta />

      {/* FAQ component */}
      <Faq title="Technical SEO & Growth FAQ" subtitle="Answers regarding indexing speed, backlink defense, and algorithm resilience." />
    </div>
  );
}
