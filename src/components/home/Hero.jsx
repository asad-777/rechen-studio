'use client';

import React from 'react';
import Link from 'next/link';
import { PhoneCall, VideoCamera } from '@phosphor-icons/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black text-white transition-colors duration-300">
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
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 w-full min-h-screen py-48 lg:px-16 px-6 sm:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 max-screen mx-auto">
        
        {/* Left Content */}
        <div className="flex flex-col space-y-6 lg:space-y-8 max-w-2xl">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
            Araa<span className="text-primary-color ml-3">Soft</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-sans leading-relaxed">
            We engineer high-converting digital platforms, automated lead capture, and Google local SEO dominance for contractors and trade leaders.
          </p>

          {/* Mobile Only Single CTA Button (Hidden on Desktop) */}
          <div className="pt-2 md:hidden">
            <Link href="/contact-us">
              <button className="w-full sm:w-auto px-6 py-3 bg-primary-color hover:bg-primary-color/90 text-black font-mono text-sm font-bold uppercase tracking-wider rounded-full shadow-lg shadow-primary-color/20 flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95 cursor-pointer">
                <span className="flex items-center gap-1.5">
                  <PhoneCall weight="fill" className="w-4 h-4 text-black" />
                  <span className="text-black/50 font-mono text-xs">/</span>
                  <VideoCamera weight="fill" className="w-4 h-4 text-black" />
                </span>
                <span>Get In Touch</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Stats (Clean Minimal Typography matching design) */}
        <div className="flex items-center gap-8 sm:gap-12 lg:gap-14 pt-4 lg:pt-0 shrink-0">
          <div className="flex flex-col items-center justify-center text-center space-y-2.5">
            <span className="font-mono text-sm sm:text-base text-white/90 border-b border-white/30 pb-1.5 tracking-wide inline-block text-center">
              Niches
            </span>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-white text-center">
              10+
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-center space-y-2.5">
            <span className="font-mono text-sm sm:text-base text-white/90 border-b border-white/30 pb-1.5 tracking-wide inline-block text-center">
              Businesses Helped
            </span>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-white text-center">
              10+
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-center space-y-2.5">
            <span className="font-mono text-sm sm:text-base text-white/90 border-b border-white/30 pb-1.5 tracking-wide inline-block text-center">
              Satisfied Clients
            </span>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-white text-center">
              10+
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
