'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

function FlowingProcessStep({ step, index }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const updateProgress = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight * 0.88;
      const end = windowHeight * 0.42;
      const rawProgress = (start - rect.top) / (start - end);
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      
      setProgress(clamped);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const isRight = index % 2 === 1;
  const descWords = step.description.split(' ');

  return (
    <div 
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 py-10 sm:py-14 relative z-10 items-center"
    >
      {/* Content Column */}
      <div className={`space-y-3.5 ${isRight ? 'md:order-2 md:pl-8 lg:pl-12' : 'md:order-1 md:pr-8 lg:pr-12'}`}>
        
       

        {/* Headline with Highlights */}
        <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug">
          {step.headlineSegments.map((segment, sIdx) => {
            const words = segment.text.split(' ');
            return words.map((word, wIdx) => {
              const active = progress > 0.3;
              const opacity = Math.min(Math.max(progress * 1.5 + 0.25, 0.25), 1);
              
              if (segment.highlight) {
                return (
                  <span
                    key={`${sIdx}-${wIdx}`}
                    className="inline-block mr-[0.3em] transition-all duration-300 font-bold"
                    style={{
                      color: active ? 'var(--primary-color)' : 'rgba(20, 195, 142, 0.35)',
                      opacity: opacity,
                      textShadow: active && progress > 0.5 ? '0 0 20px rgba(20, 195, 142, 0.4)' : 'none'
                    }}
                  >
                    {word}
                  </span>
                );
              }

              return (
                <span
                  key={`${sIdx}-${wIdx}`}
                  className="inline-block mr-[0.3em] transition-all duration-300"
                  style={{
                    color: active ? '#ffffff' : 'rgba(238, 238, 238, 0.25)',
                    opacity: opacity,
                    textShadow: active && progress > 0.6 ? '0 0 20px rgba(255, 255, 255, 0.2)' : 'none'
                  }}
                >
                  {word}
                </span>
              );
            });
          })}
        </h3>

        {/* Flowing Description */}
        <p className="font-sans text-xs sm:text-sm md:text-base text-text-content leading-relaxed">
          {descWords.map((word, idx) => {
            const wordThreshold = (idx / descWords.length) * 0.8;
            const active = progress >= wordThreshold;
            const opacity = Math.min(Math.max((progress - wordThreshold) * 5 + 0.25, 0.25), 1);

            return (
              <span
                key={idx}
                className="inline-block mr-[0.3em] transition-all duration-200 font-normal"
                style={{
                  color: active ? 'rgba(238, 238, 238, 0.9)' : 'rgba(238, 238, 238, 0.25)',
                  opacity: opacity
                }}
              >
                {word}
              </span>
            );
          })}
        </p>

        
      </div>

      {/* Opposite Side Frameless Floating Illustration */}
      <div className={`hidden md:flex items-center justify-center ${isRight ? 'md:order-1 md:pr-8 lg:pr-12' : 'md:order-2 md:pl-8 lg:pl-12'}`}>
        <div 
          className="w-full max-w-xs lg:max-w-sm h-48 lg:h-56 flex items-center justify-center transition-all duration-500 overflow-hidden"
          style={{
            opacity: 0.25 + 0.75 * progress,
            transform: `scale(${0.92 + 0.08 * progress})`
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={step.svg}
            alt={`Step ${step.number} illustration`}
            className="max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default function ProcessSteps() {
  const containerRef = useRef(null);
  const [pathProgress, setPathProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight * 0.85;
      const totalScrollable = rect.height + windowHeight * 0.35;
      const current = start - rect.top;
      const progress = Math.min(Math.max(current / totalScrollable, 0), 1);
      
      setPathProgress(progress);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const steps = [
    {
      number: "01",
      timeline: "Day 1 - 2",
      svg: "/svgs/undraw_researching_49yy.svg",
      headlineSegments: [
        { text: "Discovery, Competitor Intel", highlight: false },
        { text: " & Revenue Audit.", highlight: true }
      ],
      description: "We analyze top-ranking competitors in your zip codes, audit existing website weaknesses, and blueprint a high-ticket conversion funnel.",
      deliverables: ["Competitor Search Audit", "Funnel Architecture Plan", "Asset Collection Sprint"]
    },
    {
      number: "02",
      timeline: "Day 3 - 6",
      svg: "/svgs/undraw_ideas-flow_lwpa.svg",
      headlineSegments: [
        { text: "Bespoke Design", highlight: true },
        { text: " & High-Trust UX Architecture.", highlight: false }
      ],
      description: "We craft custom interactive wireframes and interactive project galleries specifically tailored to showcase your trade craftsmanship and establish trust.",
      deliverables: ["Figma UI Prototypes", "Direct Phone Call Triggers", "Project Showcase Architecture"]
    },
    {
      number: "03",
      timeline: "Day 7 - 11",
      svg: "/svgs/undraw_focused-dev_gqoa.svg",
      headlineSegments: [
        { text: "Fullstack Next.js Build", highlight: true },
        { text: " & Lead Automations.", highlight: false }
      ],
      description: "We code sub-second load speeds on Next.js and hook up automated SMS/email lead routing so you never miss high-value customer inquiries.",
      deliverables: ["Sub-1s Mobile Codebase", "Instant SMS Lead Routing", "Service Area Landing Pages"]
    },
    {
      number: "04",
      timeline: "Day 12 - 14",
      svg: "/svgs/undraw_accomplishments_tb6k.svg",
      headlineSegments: [
        { text: "Turnkey Launch,", highlight: false },
        { text: " SEO Indexing & 100% Handover.", highlight: true }
      ],
      description: "We configure DNS records, submit XML sitemaps to Google Search Console, optimize your Google Business Profile, and hand over 100% asset ownership.",
      deliverables: ["Google Search Console Sync", "Local Map Pack Activation", "Full Code Ownership Transfer"]
    }
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-text-content leading-tight">
          How We Build Your <br className="hidden sm:inline" />
          <span className="text-primary-color">High-Converting Engine in 14 Days</span>
        </h2>
        
        <p className="font-sans text-base sm:text-lg text-text-content/70 leading-relaxed">
          A transparent, stress-free execution process engineered specifically for trade leaders who don&apos;t have time for endless meetings.
        </p>
      </div>

      {/* Central Dotted Curved Pathway & Staggered Process Steps */}
      <div ref={containerRef} className="relative">
        
        {/* Central Curved Dotted SVG Path */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-24 lg:w-32 pointer-events-none z-0">
          <svg 
            className="w-full h-full"
            viewBox="0 0 100 1100" 
            fill="none" 
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="process-dot-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Reveal Mask for Process Path */}
              <mask 
                id="process-reveal-mask"
                maskUnits="userSpaceOnUse"
                maskContentUnits="userSpaceOnUse"
                x="-50"
                y="-50"
                width="200"
                height="1200"
              >
                <path 
                  d="M 50 10 C 25 180, 75 320, 50 480 C 25 640, 75 780, 50 940 C 30 1020, 60 1070, 50 1100"
                  stroke="#ffffff" 
                  strokeWidth="35"
                  strokeLinecap="round"
                  fill="none" 
                  pathLength="1200"
                  strokeDasharray="1200"
                  strokeDashoffset={Math.max(1200 - pathProgress * 1350, 0)}
                  style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
                />
              </mask>
            </defs>

            {/* Dim Dotted Base Track */}
            <path 
              d="M 50 10 C 25 180, 75 320, 50 480 C 25 640, 75 780, 50 940 C 30 1020, 60 1070, 50 1100"
              stroke="rgba(255, 255, 255, 0.12)" 
              strokeWidth="2.5" 
              strokeDasharray="3 12"
              strokeLinecap="round"
              fill="none" 
            />

            {/* Glowing Illuminated Dotted Path Revealed on Scroll */}
            <path 
              d="M 50 10 C 25 180, 75 320, 50 480 C 25 640, 75 780, 50 940 C 30 1020, 60 1070, 50 1100"
              stroke="#14C38E" 
              strokeWidth="3" 
              strokeDasharray="3 12"
              strokeLinecap="round"
              fill="none" 
              mask="url(#process-reveal-mask)"
              filter="url(#process-dot-glow)"
            />
          </svg>
        </div>

        {/* Staggered Step Rows */}
        <div className="space-y-4 sm:space-y-8">
          {steps.map((step, idx) => (
            <FlowingProcessStep 
              key={idx} 
              step={step} 
              index={idx} 
            />
          ))}
        </div>

      </div>

      {/* Discovery Prompt */}
      <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-base-b border border-base-c flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 shadow-xl relative z-10">
        {/* Text */}
        <div className="space-y-1.5 text-center lg:text-left max-w-xl">
          <h4 className="font-heading text-lg sm:text-xl font-bold text-text-content">
            Prefer a quick walkthrough before committing?
          </h4>
          <p className="font-sans text-xs sm:text-sm text-text-content/70">
            We&apos;ll show you live client results and our exact sprint schedule in 15 minutes.
          </p>
        </div>

        {/* SVG Illustration (Between text and button) */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/svgs/undraw_visual-explanation_vd4l.svg" 
            alt="Walkthrough demonstration illustration" 
            className="max-h-full max-w-full object-contain filter drop-shadow-sm scale-140 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Action Button */}
        <Link
          href="/contact-us"
          className="px-6 py-3.5 rounded-full bg-primary-color hover:bg-primary-color/90 text-black font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shrink-0 shadow-md hover:scale-105 cursor-pointer"
        >
          Book 15-Min Walkthrough
        </Link>
      </div>

    </section>
  );
}
