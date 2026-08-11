'use client';

import React from 'react';
import Link from 'next/link';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center  overflow-hidden bg-black text-white transition-colors duration-300">
      {/* Background Videos */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hidden md:block absolute top-0 left-0 w-full h-full object-cover opacity-60"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Mobile Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="block md:hidden absolute top-0 left-0 w-full h-full object-cover opacity-60"
        >
          <source src="/hero_mobile.mp4" type="video/mp4" />
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex flex-col space-y-8 lg:space-y-10">
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-medium tracking-tight leading-[1.05]">
            Rechen<br/>Studio
          </h1>
          
          <p className="font-sans text-xl md:text-2xl text-white/80 max-w-xl font-light leading-relaxed">
            We engineer high-performance websites and data-driven SEO strategies to scale your business.
          </p>

          {/* Stats / Value Props */}
          <div className="flex flex-row flex-wrap items-center gap-8 md:gap-12 pt-4">
            <div className="flex flex-col w-24 md:w-28">
              <h3 className="font-sans text-lg md:text-xl font-medium pb-2 border-b border-white/30 mb-4">Projects</h3>
              <div className="font-mono text-2xl md:text-3xl text-white">5+</div>
            </div>
            <div className="flex flex-col w-24 md:w-28">
              <h3 className="font-sans text-lg md:text-xl font-medium pb-2 border-b border-white/30 mb-4">Clients</h3>
              <div className="font-mono text-2xl md:text-3xl text-white">3+</div>
            </div>
            <div className="flex flex-col w-32 md:w-40">
              <h3 className="font-sans text-lg md:text-xl font-medium pb-2 border-b border-white/30 mb-4">Case Studies</h3>
              <div className="font-mono text-2xl md:text-3xl text-white">25+</div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col w-full max-w-md gap-8 mt-12 lg:mt-0 justify-center">
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 lg:justify-end">
            <Link href="/contact-us">
              <InteractiveHoverButton className="w-full sm:w-auto bg-primary-a text-white border-primary-a hover:bg-primary-a/90 px-8 py-3">
                Book a Call
              </InteractiveHoverButton>
            </Link>
            <Link href="/contact-us">
              <InteractiveHoverButton className="w-full sm:w-auto bg-transparent text-primary-a border-primary-a hover:bg-primary-a/10 px-8 py-3">
                Schedule a Meeting
              </InteractiveHoverButton>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
