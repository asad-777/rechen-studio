'use client';

import React from 'react';
import { Stack, Trophy, Robot, Sparkle } from '@phosphor-icons/react';

export default function ImpactStats() {
  const stats = [
    {
      icon: Stack,
      svg: "/svgs/undraw_device-sync_d9ei.svg",
      value: "All-in-1",
      label: "Web, Social & GBP Under One Roof",
      description: "Complete custom web development, active social media and Google Business Profile optimization fully handled under one roof."
    },
    {
      icon: Trophy,
      svg: "/svgs/undraw_stepping-up_i0i7.svg",
      value: "10x boost",
      label: "Average Conversion Boost",
      description: "Lead funnels engineered to generate up to 10x more phone calls, inquiries, and booked jobs."
    },
    {
      icon: Robot,
      svg: "/svgs/undraw_artificial-intelligence_43qa.svg",
      value: "AI-Powered",
      label: "Tailored AI Automation Suite",
      description: "AI solutions from 24/7 chatbots and automated newsletters to full AI receptionists and smart onboarding."
    },
    {
      icon: Sparkle,
      svg: "/svgs/undraw_ai-answers_uxgx.svg",
      value: "#1 on search",
      label: "Rank #1 on Google & AI Search",
      description: "Dominant local SEO, Generative Ai Engine Optimization, Backlinks so you rank #1 on Google and appear at the top of AI search results."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-base-b/50 border-b border-base-c">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-content tracking-tight">
            Engineered For Immediate Commercial Impact
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-content/70">
            We don&apos;t build vanity websites. We build high-converting digital infrastructure that generates high-ticket local jobs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative p-7 rounded-3xl bg-base-b border border-base-c hover:border-primary-color/60 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4 ">
                  {/* Top Icon & Metric Value */}
                  <div className="flex items-center w-full justify-start gap-3">
                    <div className="font-heading text-2xl lg:text-3xl w-full font-bold tracking-tight text-primary-color text-center">
                      {stat.value}
                    </div>
                  </div>

                  {/* Clean Seamless Frameless SVG Illustration */}
                  <div className="h-28 w-full flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={stat.svg}
                      alt={stat.label}
                      className="max-h-full max-w-full object-contain filter drop-shadow-xs group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-base-c/60">
                  <h3 className="font-mono text-sm font-bold text-text-content uppercase tracking-wide">
                    {stat.label}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-text-content/70 leading-relaxed font-normal">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
