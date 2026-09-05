'use client';

import React, { useState } from 'react';
import { CaretDown, ChatCircleText } from '@phosphor-icons/react';
import Link from 'next/link';

export default function Faq({ 
  title = "Frequently Asked Questions", 
  subtitle = "Clear answers for contractors, trades, and service business owners." 
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Why should I choose custom Next.js engineering over Lovable, Wix, or WordPress?",
      answer: "Platforms like Wix and WordPress or generic Lovable AI templates are bloated, load slowly on mobile phones (5-8 seconds), and constantly break when plugins conflict. We engineer custom Next.js web applications that load in under 1 second, rank significantly higher on Google Local Search, and never crash."
    },
    {
      question: "How do new customer quote requests and phone calls reach me?",
      answer: "Directly to your phone! Every quote form and booking trigger connects instantly to your SMS number, WhatsApp, and email with full customer details (name, phone, address, project type). You can also sync directly with ServiceTitan, Housecall Pro, Jobber, or Google Calendar."
    },
    {
      question: "How long does a complete website build and deployment take?",
      answer: "Most contractor builds launch in just 7 to 14 business days. Because we operate with dedicated sprint teams and zero bureaucratic fluff, we handle design, copywriting, lead capture integration, and domain setup rapidly without taking up your valuable time."
    },
    {
      question: "What if I already own a domain name and an existing website?",
      answer: "We handle 100% of the technical heavy lifting. We safely migrate your existing domain, set up proper 301 redirects so you don't lose any existing SEO rankings, and deploy your new platform with zero downtime for your business."
    },
    {
      question: "Do I own my code, website, and digital assets 100%?",
      answer: "Yes, completely. Unlike predatory marketing agencies that lock your website behind monthly hostage fees, you retain 100% full intellectual property and code ownership of your digital assets upon completion."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      
      {/* Header section */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-text-content leading-tight">
          {title}
        </h2>
        <p className="font-sans text-base sm:text-lg text-text-content/70">
          {subtitle}
        </p>
      </div>

      {/* Accordion container */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-base-b border-primary-color shadow-lg'
                  : 'bg-base-b/60 border-base-c hover:border-text-content/40'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                aria-expanded={isOpen}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer"
              >
                <span className={`font-mono text-base sm:text-lg font-bold transition-colors duration-200 ${
                  isOpen ? 'text-primary-color' : 'text-text-content hover:text-primary-color'
                }`}>
                  0{idx + 1}. {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-base-c transition-transform duration-300 ${
                  isOpen ? 'bg-primary-color rotate-180 text-base-a border-primary-color' : 'bg-base-a text-text-content'
                }`}>
                  <CaretDown weight="bold" className="w-4 h-4" />
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${
                  isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                }`}
              >
                <div className="pt-4 border-t border-base-c text-text-content/80 font-sans text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Support Prompt with Integrated Themed FAQ Vector Illustration */}
      <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-base-b border border-base-c flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
        <div className="flex items-center gap-5 text-left z-10">
          <div className="w-14 h-14 rounded-2xl bg-base-a border border-base-c flex items-center justify-center text-primary-color shrink-0 shadow-sm">
            <ChatCircleText weight="duotone" className="w-7 h-7 text-primary-color" />
          </div>
          <div className="space-y-1 max-w-md">
            <h4 className="font-heading text-lg sm:text-xl font-bold text-text-content">Have a specific question about your trade?</h4>
            <p className="font-sans text-xs sm:text-sm text-text-content/70">Talk directly with our lead architects. No pushy sales reps.</p>
          </div>
        </div>

        <div className="flex items-center gap-6 z-10 w-full md:w-auto justify-between md:justify-end">
          <div className="hidden sm:block w-28 h-20 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/svgs/undraw_faq_pgxi.svg"
              alt="FAQ Support Graphic"
              className="w-full h-full object-contain filter drop-shadow-xs opacity-90"
              loading="lazy"
            />
          </div>

          <Link
            href="/contact-us"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-primary-color hover:bg-primary-color/90 text-black font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shrink-0 shadow-md hover:scale-105 cursor-pointer text-center"
          >
            Book A 15-Min Call
          </Link>
        </div>
      </div>
    </section>
  );
}
