'use client';

import React, { useState } from 'react';
import { CaretDown, Question, Sparkle, ChatCircleText } from '@phosphor-icons/react';
import Link from 'next/link';

export default function Faq({ title = "Frequently Asked Questions", subtitle = "Got questions about working with Rechen Studio? We have answers." }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does Rechen Studio approach custom web design and application architecture?",
      answer: "We blend human-centered design with rigorous engineering standards. Before writing a single line of code, we analyze your business metrics, target audience, and architectural constraints. Our applications use robust frameworks like Next.js, reactive micro-animations, and modular component architectures to guarantee scalability."
    },
    {
      question: "What is the typical timeline and investment for a complete digital project?",
      answer: "A standard corporate website or branding refresh generally requires 4 to 6 weeks. For custom full-stack web applications or SaaS platforms, timelines range between 8 and 14 weeks depending on database complexity and API integrations. We provide transparent, fixed-price or dedicated milestone scoping during our initial consultation."
    },
    {
      question: "Do you offer post-launch technical support, maintenance, and SEO growth services?",
      answer: "Yes, absolutely. We consider launch day just day one of our collaboration. We provide tailored Service Level Agreements (SLAs), continuous uptime monitoring, core web vitals speed optimization, and ongoing SEO content execution to ensure continuous organic growth."
    },
    {
      question: "Can Rechen Studio integrate with our existing engineering or internal marketing teams?",
      answer: "Yes! We frequently function as an embedded specialized sprint team working in tandem with in-house product leads, CTOs, and designers. We operate within your existing Slack, GitHub, Jira, and Figma environments with transparent weekly sprints."
    },
    {
      question: "How do we get started and what takes place during the introductory booking meeting?",
      answer: "Getting started is seamless. Once you schedule a consultation through our website, our principal architects will evaluate your briefs, discuss core user outcomes, and formulate an immediate preliminary scoping timeline and high-level architectural proposal—at zero obligation."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      
      {/* Header section */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 font-mono text-xs uppercase tracking-wider font-semibold">
          <Question weight="bold" className="w-4 h-4 text-violet-400" />
          <span>Knowledge & Clarity</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
          {title}
        </h2>
        <p className="font-sans text-sm sm:text-base text-slate-400">
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
                  ? 'bg-slate-900/80 border-violet-500/50 shadow-xl shadow-violet-900/10'
                  : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                aria-expanded={isOpen}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-violet-500/30"
              >
                <span className={`font-mono text-sm sm:text-base font-semibold transition-colors duration-200 ${
                  isOpen ? 'text-violet-300' : 'text-slate-200 hover:text-white'
                }`}>
                  {idx + 1}. {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? 'bg-violet-600 rotate-180 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  <CaretDown weight="bold" className="w-4 h-4" />
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${
                  isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                }`}
              >
                <div className="pt-2 border-t border-slate-800/80 text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Support Prompt */}
      <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-violet-950/20 to-slate-900/90 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
        <div className="flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
            <ChatCircleText weight="fill" className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold text-white">Still have questions?</h4>
            <p className="font-sans text-xs sm:text-sm text-slate-400">Our engineering leads are always open to discuss custom architecture requirements.</p>
          </div>
        </div>
        <Link
          href="/contact-us"
          className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-button text-base font-bold uppercase tracking-wider transition-all duration-200 shrink-0 shadow-lg shadow-violet-600/30"
        >
          Ask our experts
        </Link>
      </div>
    </section>
  );
}
