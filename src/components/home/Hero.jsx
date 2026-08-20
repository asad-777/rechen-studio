'use client';

import React from 'react';
import Link from 'next/link';

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
            Rechen Studio
          </h1>
          
          <p className="text-2xl text-white/80 max-w-xl font-light leading-relaxed ">
            We engineer high-performance websites and data-driven SEO strategies to scale your business.
          </p>

        </div>

        {/* Right Content */}
        <div className="flex flex-col w-full max-w-lg gap-10 mt-12  lg:mt-0 justify-center">
          
          {/* Stats / Value Props */}
          <div className="flex flex-row items-center justify-start lg:justify-end  sm:px-12 lg:px-2 gap-6 md:gap-10">
            <div className="flex flex-col flex-2 min-w-0">
              <h3 className="text-xl md:text-3xl font-medium pb-2 border-b border-white/30 mb-4 whitespace-nowrap text-center">Projects</h3>
              <div className="font-mono text-3xl md:text-4xl text-white text-center">5+</div>
            </div>
            <div className="flex flex-col flex-2 min-w-0">
              <h3 className="text-xl md:text-3xl font-medium pb-2 border-b border-white/30 mb-4 whitespace-nowrap text-center">Clients</h3>
              <div className="font-mono text-3xl md:text-4xl text-white text-center">3+</div>
            </div>
            <div className="flex flex-col flex-3 min-w-0">
              <h3 className="text-xl md:text-3xl font-medium pb-2 border-b  border-white/30 mb-4 whitespace-nowrap text-center">Case Studies</h3>
              <div className="font-mono text-3xl md:text-4xl text-white text-center">25+</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex lg:hidden flex-row gap-6 justify-center ">
            <Link href="/contact-us">
              <button className="btn bg-primary-a border-none  w-48 min-w-48 rounded-full px-10 py-6 text-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                Book a Call
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="btn hover:bg-primary-a bg-transparent border  border-white hover:border-none w-48 min-w-48  rounded-full px-2 py-6 text-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                Schedule a Meeting
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
