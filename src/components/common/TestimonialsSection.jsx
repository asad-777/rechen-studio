'use client';

import React, { useState } from 'react';
import { Star, Quotes, ArrowLeft, ArrowRight, Sparkle, Buildings } from '@phosphor-icons/react';

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const testimonials = [
    {
      quote: "Rechen Studio transformed our antiquated financial dashboard into a reactive, lightning-fast Next.js platform. Our daily active trading volume doubled within three weeks of deploying the new frontend architecture.",
      author: "Marcus Vance",
      role: "VP of Product Engineering",
      company: "NovaFin Labs & Capital",
      stars: 5,
      avatarColor: "from-violet-500 to-indigo-600"
    },
    {
      quote: "Their comprehension of both luxury aesthetic nuances and technical SEO is unmatched. They delivered our bespoke AI shopping platform on time, zero defects, and achieved a 4.8x conversion spike immediately.",
      author: "Elena Rostova",
      role: "Founder & Creative Director",
      company: "Vesper Luxury Maison",
      stars: 5,
      avatarColor: "from-pink-500 to-rose-600"
    },
    {
      quote: "Working with Rechen Studio felt like unlocking a super-powered embedded sprint team. Their engineers plugged directly into our existing DevOps CI/CD architecture and helped us ship a HIPAA-compliant portal ahead of schedule.",
      author: "Dr. Alistair Sterling",
      role: "Chief Technology Officer",
      company: "Orbit Health Care Systems",
      stars: 5,
      avatarColor: "from-cyan-500 to-blue-600"
    }
  ];

  const handleNext = () => setActiveTab((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActiveTab((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest font-semibold text-violet-400 flex items-center justify-center gap-2">
          <Sparkle weight="fill" className="w-4 h-4 text-violet-400" />
          <span>Verified Client Testimonials</span>
        </span>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
          What Industry Leaders Say
        </h2>
        <p className="font-sans text-sm sm:text-base text-slate-400">
          Discover why high-growth enterprises and visionary startup founders trust Rechen Studio to architect their digital infrastructures.
        </p>
      </div>

      {/* Main Feature Testimonial Carousel Box */}
      <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 md:p-14 border border-slate-800/80 shadow-2xl overflow-hidden mb-12">
        <div className="absolute -right-10 -bottom-10 opacity-5 text-violet-500 pointer-events-none">
          <Quotes weight="fill" className="w-96 h-96" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-9 space-y-6">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(testimonials[activeTab].stars)].map((_, i) => (
                <Star key={i} weight="fill" className="w-5 h-5" />
              ))}
            </div>

            <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl text-slate-100 font-semibold leading-relaxed sm:leading-tight">
              "{testimonials[activeTab].quote}"
            </blockquote>

            <div className="pt-4 flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${testimonials[activeTab].avatarColor} flex items-center justify-center text-white font-mono text-xl font-bold uppercase shadow-lg`}>
                {testimonials[activeTab].author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-white">
                  {testimonials[activeTab].author}
                </h4>
                <p className="font-mono text-xs text-indigo-400 uppercase tracking-wider font-medium">
                  {testimonials[activeTab].role}
                </p>
                <p className="font-sans text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                  <Buildings weight="duotone" className="w-3.5 h-3.5 text-slate-500" />
                  <span>{testimonials[activeTab].company}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="lg:col-span-3 flex lg:flex-col items-center justify-end gap-4 border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-6 lg:pt-0 lg:pl-8">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block text-center lg:text-left w-full">
              Review {activeTab + 1} of {testimonials.length}
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white flex items-center justify-center transition-all hover:scale-105"
              >
                <ArrowLeft weight="bold" className="w-5 h-5 text-slate-300" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white flex items-center justify-center transition-all hover:scale-105 shadow-lg shadow-indigo-600/25"
              >
                <ArrowRight weight="bold" className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mini client logobar placeholder */}
      <div className="pt-8 border-t border-slate-800/80 text-center space-y-6">
        <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">
          Trusted by Engineering & Growth Teams At
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {['NOVA FIN', 'VESPER CO.', 'APEX CLOUD', 'ORBIT HEALTH', 'SOLITUDE ARCH', 'HYPERSCALE'].map((client, idx) => (
            <span key={idx} className="font-heading text-lg sm:text-xl font-black tracking-widest text-slate-300">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
