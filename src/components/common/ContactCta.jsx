'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { trackEvent } from '../../lib/analytics';

export default function ContactCta() {
  return (
    <section id="contact-cta" className="relative w-full min-h-[80vh] lg:min-h-[85vh] overflow-hidden z-10 my-16">
      
      {/* Soft Ambient Radial Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-full max-w-2xl h-96 bg-base-1a/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="w-full min-h-[80vh] lg:min-h-[85vh] grid grid-cols-1 lg:grid-cols-2 items-stretch">

        {/* Side 1: Full-Size Image Container */}
        <div className="relative w-full h-[450px] sm:h-[550px] lg:h-full min-h-[450px] lg:min-h-[80vh] overflow-hidden">
          <Image
            src="/home-cto/pic3.jpg"
            alt="Why wait when others are converting? Get a digital presence now and start capturing more clients."
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Subtle gradient overlay to smoothly transition edges */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-base-1a/80 lg:to-base-1a pointer-events-none" />
        </div>

        {/* Side 2: Clean, Spacious Full-Scale CTA Content */}
        <div className="flex flex-col justify-center items-start text-left p-8 sm:p-14 lg:p-20 xl:p-24 space-y-8 z-10">
          
          <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-text-content tracking-tight leading-[1.08]">
            Ready to get <br />
            <span className="text-primary-color">started?</span>
          </h2>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-text-content/80 leading-relaxed max-w-xl">
            Tell us about your business goals and service area. We will map out a custom web and local SEO engine to turn searchers into booked clients.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
            <Link
              href="/contact-us"
              onClick={() => trackEvent('contact_cta_click', { cta_label: 'Book a discovery call' })}
              className="px-9 py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wider bg-primary-color hover:bg-primary-color/90 text-black shadow-xl shadow-primary-color/20 text-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Book a discovery call
            </Link>

            <Link
              href="/services"
              onClick={() => trackEvent('contact_cta_click', { cta_label: 'Explore services' })}
              className="px-9 py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wider bg-base-b hover:bg-base-c border border-base-c hover:border-text-content/40 text-text-content hover:text-primary-color text-center transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
            >
              Explore services
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}
