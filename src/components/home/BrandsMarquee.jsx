'use client';

import React from 'react';

export default function BrandsMarquee() {
  const logoRow1 = [
    { name: 'Spotify', domain: 'spotify.com' },
    { name: 'Stripe', domain: 'stripe.com' },
    { name: 'Airbnb', domain: 'airbnb.com' },
    { name: 'Shopify', domain: 'shopify.com' },
    { name: 'Netflix', domain: 'netflix.com' },
    { name: 'Uber', domain: 'uber.com' },
    { name: 'Square', domain: 'squareup.com' },
    { name: 'Google', domain: 'google.com' },
  ];
  
  const logoRow2 = [
    { name: 'Slack', domain: 'slack.com' },
    { name: 'Figma', domain: 'figma.com' },
    { name: 'Twilio', domain: 'twilio.com' },
    { name: 'Vercel', domain: 'vercel.com' },
    { name: 'GitHub', domain: 'github.com' },
    { name: 'Notion', domain: 'notion.so' },
    { name: 'Discord', domain: 'discord.com' },
    { name: 'AWS', domain: 'aws.amazon.com' },
  ];

  return (
    <section className="py-14 bg-base-b/30 border-b border-base-c overflow-hidden relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <p className="font-mono text-xs uppercase tracking-widest font-bold text-text-content/60">
          Trusted by Engineering, Construction & Growth Teams Globally
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
        
        <div className="flex flex-col gap-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* Row 1 - Moves Left */}
          <div className="relative w-full overflow-hidden flex group">
            <div className="animate-marquee items-center gap-12 md:gap-20 pl-12 md:pl-20">
              {[...logoRow1, ...logoRow1, ...logoRow1].map((client, idx) => (
                <div 
                  key={`r1-${idx}`} 
                  className="flex items-center gap-3 w-max opacity-40 hover:opacity-100 transition-all duration-300 group/brand cursor-pointer shrink-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://icon.horse/icon/${client.domain}`}
                    alt={`${client.name} logo`}
                    className="w-7 h-7 object-contain rounded-md filter grayscale group-hover/brand:grayscale-0 group-hover/brand:scale-110 transition-all duration-300"
                    loading="lazy"
                  />
                  <span className="font-heading font-bold text-lg sm:text-xl text-text-content/80 group-hover/brand:text-primary-color tracking-tight transition-colors duration-300">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moves Right */}
          <div className="relative w-full overflow-hidden flex group">
            <div className="animate-marquee-reverse items-center gap-12 md:gap-20 pl-12 md:pl-20">
              {[...logoRow2, ...logoRow2, ...logoRow2].map((client, idx) => (
                <div 
                  key={`r2-${idx}`} 
                  className="flex items-center gap-3 w-max opacity-40 hover:opacity-100 transition-all duration-300 group/brand cursor-pointer shrink-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://icon.horse/icon/${client.domain}`}
                    alt={`${client.name} logo`}
                    className="w-7 h-7 object-contain rounded-md filter grayscale group-hover/brand:grayscale-0 group-hover/brand:scale-110 transition-all duration-300"
                    loading="lazy"
                  />
                  <span className="font-heading font-bold text-lg sm:text-xl text-text-content/80 group-hover/brand:text-primary-color tracking-tight transition-colors duration-300">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
