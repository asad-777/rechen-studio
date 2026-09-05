'use client';

import React, { useState } from 'react';
import { Star, Quotes, ArrowLeft, ArrowRight, Buildings, Hexagon, Triangle, Circle, Square, Diamond, Drop } from '@phosphor-icons/react';

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const testimonials = [
    {
      quote: "Araa Soft didn't just rebuild our frontend—they completely re-architected our mental model of state management. By migrating us to a distributed Edge-native micro-frontend topology, our TTI (Time to Interactive) dropped to sub-10ms. Our Series C lead investor literally wept during the product demo.",
      author: "Jasper 'Jaz' Hawthorne",
      role: "VP of Zero-Trust Architecture",
      company: "QuantumScale AI (Y-Combinator W26)",
      stars: 5,
      avatarBg: "bg-primary-a text-text-white"
    },
    {
      quote: "To call them an agency is an insult. They are a black-ops technical strike team. They parallelized our WebGL rendering pipeline while simultaneously refactoring a decade of legacy PHP into purely functional, type-safe Rust-backed WASM endpoints. We achieved a 12,000% lift in ARR within a single quarter.",
      author: "Ariadne Sterling-Rothschild",
      role: "Global Head of Synergy & Digital Transcendence",
      company: "L'Aura Hyper-Lux Paris",
      stars: 5,
      avatarBg: "bg-base-3a text-text-black"
    },
    {
      quote: "Our bespoke decentralized LLM orchestration protocol was drowning in cold-start latency. Araa Soft parachuted in, containerized our entire monolith into a serverless Kubernetes mesh, and implemented an optimistic-UI caching layer that practically predicts the user's intent before they click. Absolute chads.",
      author: "Xavier 'X' Muskrat",
      role: "Chief Decentralization Officer",
      company: "NeuralDoge Web3 Solutions",
      stars: 5,
      avatarBg: "bg-base-2a border border-base-3a text-text-black"
    },
    {
      quote: "They bypass standard agile sprints and operate in a state of pure quantum flow. The engineers shipped a fully PCI/HIPAA/SOC2-compliant FinTech healthcare neo-bank in a weekend hackathon. The code was so clean, it passed our automated security audits with zero false positives. God-tier talent.",
      author: "Dr. Thaddeus von Neumann",
      role: "Founding Partner & Lead APEX Architect",
      company: "AlphaCentauri Venture Capital",
      stars: 5,
      avatarBg: "bg-text-black text-text-white"
    }
  ];

  const handleNext = () => setActiveTab((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActiveTab((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const logoRow1 = [
    { name: 'Spotify', domain: 'spotify.com' },
    { name: 'Stripe', domain: 'stripe.com' },
    { name: 'Airbnb', domain: 'airbnb.com' },
    { name: 'Shopify', domain: 'shopify.com' },
    { name: 'Netflix', domain: 'netflix.com' },
    { name: 'Uber', domain: 'uber.com' },
    { name: 'Square', domain: 'squareup.com' },
  ];
  
  const logoRow2 = [
    { name: 'Slack', domain: 'slack.com' },
    { name: 'Figma', domain: 'figma.com' },
    { name: 'Twilio', domain: 'twilio.com' },
    { name: 'Vercel', domain: 'vercel.com' },
    { name: 'GitHub', domain: 'github.com' },
    { name: 'Notion', domain: 'notion.so' },
    { name: 'Discord', domain: 'discord.com' },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 transition-colors duration-300">
      
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-black tracking-tight">
          What Industry Leaders Say
        </h2>
      </div>

      {/* Main Feature Testimonial Carousel Box */}
      {/* <div className="relative rounded-3xl bg-base-2a/80 p-8 md:p-10 border border-base-3a shadow-sm overflow-hidden mb-12">
        <div className="absolute -right-10 -bottom-10 opacity-15 text-base-3a pointer-events-none">
          <Quotes weight="fill" className="w-64 h-64" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-9 space-y-5">
            <div className="flex items-center gap-1 text-primary-a">
              {[...Array(testimonials[activeTab].stars)].map((_, i) => (
                <Star key={i} weight="fill" className="w-4 h-4" />
              ))}
            </div>

            <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl text-text-black font-semibold leading-relaxed sm:leading-tight">
              &quot;{testimonials[activeTab].quote}&quot;
            </blockquote>

            <div className="pt-2 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl ${testimonials[activeTab].avatarBg} flex items-center justify-center font-mono text-xl font-bold uppercase shadow-sm`}>
                {testimonials[activeTab].author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-text-black leading-tight">
                  {testimonials[activeTab].author}
                </h4>
                <p className="font-mono text-xs text-primary-a uppercase tracking-wider font-bold">
                  {testimonials[activeTab].role}
                </p>
                <p className="font-sans text-xs text-text-black/70 flex items-center gap-1 mt-0.5 font-medium">
                  <Buildings weight="duotone" className="w-3.5 h-3.5 text-primary-a" />
                  <span>{testimonials[activeTab].company}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Carousel controls 
          <div className="lg:col-span-3 flex lg:flex-col items-center justify-end gap-4 border-t lg:border-t-0 lg:border-l border-base-3a pt-6 lg:pt-0 lg:pl-8">
            <span className="font-mono text-[10px] text-text-black/70 uppercase tracking-widest block text-center lg:text-left w-full font-bold">
              Review {activeTab + 1} of {testimonials.length}
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-xl bg-base-1a hover:bg-base-3a/40 border border-base-3a text-text-black flex items-center justify-center transition-all hover:scale-105 shadow-sm"
              >
                <ArrowLeft weight="bold" className="w-4 h-4 text-text-black" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-xl bg-primary-a hover:bg-primary-a/90 text-text-white flex items-center justify-center transition-all hover:scale-105 shadow-md"
              >
                <ArrowRight weight="bold" className="w-4 h-4 text-text-white" />
              </button>
            </div>
          </div>
        </div>
      </div> 
      */}

      {/* Moving Carousels of Logos */}
      <div className="pt-10 border-t border-base-3a text-center space-y-8 overflow-hidden">
        <p className="font-mono text-xs text-text-black/70 uppercase tracking-widest font-bold">
          Trusted by Engineering & Growth Teams At
        </p>
        
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-marquee-reverse {
            animation: marquee-reverse 35s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-marquee:hover, .animate-marquee-reverse:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="flex flex-col gap-8">
          {/* Row 1 - Moves Left */}
          <div className="relative w-full overflow-hidden flex group mask-image-fade">
            <div className="animate-marquee items-center gap-12 md:gap-20 pl-12 md:pl-20">
              {[...logoRow1, ...logoRow1].map((client, idx) => (
                <div key={`r1-${idx}`} className="flex items-center justify-center gap-3 w-max grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://icon.horse/icon/${client.domain}`}
                    alt={`${client.name} logo`}
                    className="w-8 h-8 object-contain rounded-sm"
                  />
                  <span className="font-heading font-bold text-xl text-text-black tracking-tight">{client.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moves Right */}
          <div className="relative w-full overflow-hidden flex group mask-image-fade">
            <div className="animate-marquee-reverse items-center gap-12 md:gap-20 pl-12 md:pl-20">
              {[...logoRow2, ...logoRow2].map((client, idx) => (
                <div key={`r2-${idx}`} className="flex items-center justify-center gap-3 w-max grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://icon.horse/icon/${client.domain}`}
                    alt={`${client.name} logo`}
                    className="w-8 h-8 object-contain rounded-sm"
                  />
                  <span className="font-heading font-bold text-xl text-text-black tracking-tight">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
