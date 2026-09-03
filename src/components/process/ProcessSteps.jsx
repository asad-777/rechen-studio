'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  PhoneCall, 
  VideoCamera, 
  CheckCircle 
} from '@phosphor-icons/react';

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
        
        {/* Step Badge & Timeline */}
        <div 
          className="flex items-center gap-2.5 transition-opacity duration-300"
          style={{
            opacity: 0.35 + 0.65 * Math.min(progress * 2, 1)
          }}
        >
          <span className="font-mono text-xs font-bold text-primary-color uppercase tracking-widest">
            Step {step.number}
          </span>
          <span className="text-text-content/30">•</span>
          <span className="font-mono text-[11px] font-semibold text-text-content/60 bg-base-b px-2.5 py-0.5 rounded-full border border-base-c/60">
            {step.timeline}
          </span>
        </div>

        {/* Headline with Orange Highlights */}
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
                      color: active ? 'var(--primary-color)' : 'rgba(249, 115, 22, 0.35)',
                      opacity: opacity,
                      textShadow: active && progress > 0.5 ? '0 0 20px rgba(249, 115, 22, 0.4)' : 'none'
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

        {/* Compact Deliverable Pills */}
        <div 
          className="pt-2 flex flex-wrap gap-1.5 transition-opacity duration-300"
          style={{ opacity: 0.3 + 0.7 * Math.min(progress * 1.5, 1) }}
        >
          {step.deliverables.map((item, dIdx) => (
            <span
              key={dIdx}
              className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-base-b/60 border border-base-c/60 text-text-content/75 flex items-center gap-1.5"
            >
              <CheckCircle weight="fill" className="w-3.5 h-3.5 text-special-text shrink-0" />
              <span>{item}</span>
            </span>
          ))}
        </div>

      </div>

      {/* Empty Opposite Column to ensure non-overlap with central flow line */}
      <div className={`hidden md:block ${isRight ? 'md:order-1' : 'md:order-2'}`} aria-hidden="true" />
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
      timeline: "Days 1 - 2",
      headlineSegments: [
        { text: "Discovery & ", highlight: false },
        { text: "Revenue Audit.", highlight: true }
      ],
      description: "We audit your existing web presence, local competitors, Google search rankings, and target service areas to identify high-margin job opportunities.",
      deliverables: ["Market Opportunity Report", "Lead Funnel Blueprint", "Milestone Roadmap"]
    },
    {
      number: "02",
      timeline: "Days 3 - 5",
      headlineSegments: [
        { text: "Bespoke Design", highlight: true },
        { text: " & High-Trust UX.", highlight: false }
      ],
      description: "We craft an ultra-clean, high-converting design showcasing your past projects, licenses, guarantees, customer reviews, and before/after job galleries.",
      deliverables: ["Interactive UX Preview", "Mobile-First Optimization", "Trust & License Proof"]
    },
    {
      number: "03",
      timeline: "Days 6 - 9",
      headlineSegments: [
        { text: "Fullstack Build & ", highlight: false },
        { text: "Lead Automations.", highlight: true }
      ],
      description: "We code your custom Next.js application, connect instant SMS/email lead dispatch directly to your smartphone, and link your booking/CRM calendar.",
      deliverables: ["Sub-Second Edge Codebase", "Instant Phone Lead Alerts", "Scheduling Integration"]
    },
    {
      number: "04",
      timeline: "Day 10+",
      headlineSegments: [
        { text: "Turnkey Launch & ", highlight: false },
        { text: "Local SEO Indexing.", highlight: true }
      ],
      description: "We handle domain transfer, configure Google Business Profile and schema markup, test Core Web Vitals, and launch your new revenue engine.",
      deliverables: ["Zero-Downtime Migration", "Google Map Pack Schema", "Continuous Security"]
    }
  ];

  return (
    <section id="process" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3.5">
        <div className="font-mono text-xs font-bold uppercase tracking-widest text-primary-color">
          // Deployment Process
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-text-content tracking-tight leading-tight">
          How We Build Your <br className="hidden sm:inline" />
          <span className="text-primary-color">High-Converting Digital Engine</span>
        </h2>
        
        <p className="font-sans text-xs sm:text-sm md:text-base text-text-content/70 leading-relaxed max-w-2xl mx-auto">
          A predictable 4-step deployment pipeline. No months of waiting or endless meetings. We engineer everything so you can focus on closing jobs.
        </p>
      </div>

      {/* Dotted Curved Pathway & Staggered Process Steps */}
      <div ref={containerRef} className="relative">
        
        {/* Central Delicate Dotted Curved Path */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-20 lg:w-28 pointer-events-none z-0">
          <svg 
            className="w-full h-full"
            viewBox="0 0 100 1000" 
            fill="none" 
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="process-dot-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              <mask id="process-dotted-reveal-mask">
                <path 
                  d="M 50 10 C 20 150, 80 250, 50 380 C 20 500, 80 620, 50 740 C 20 860, 80 940, 50 990"
                  stroke="white" 
                  strokeWidth="24"
                  fill="none"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset={Math.max(1 - pathProgress * 1.1, 0)}
                  className="transition-all duration-100 ease-out"
                />
              </mask>
            </defs>

            {/* Dim Dotted Base Track (Subtle & Light) */}
            <path 
              d="M 50 10 C 20 150, 80 250, 50 380 C 20 500, 80 620, 50 740 C 20 860, 80 940, 50 990"
              stroke="var(--primary-color)" 
              strokeOpacity="0.18"
              strokeWidth="3" 
              strokeLinecap="round"
              strokeDasharray="3 12"
              fill="none"
            />

            {/* Active Glowing Dotted Track (Reveals with Scroll) */}
            <g mask="url(#process-dotted-reveal-mask)">
              <path 
                d="M 50 10 C 20 150, 80 250, 50 380 C 20 500, 80 620, 50 740 C 20 860, 80 940, 50 990"
                stroke="var(--primary-color)" 
                strokeWidth="3.5" 
                strokeLinecap="round"
                strokeDasharray="3 12"
                fill="none"
                filter="url(#process-dot-glow)"
              />
            </g>
          </svg>
        </div>

        {/* Alternating Flowing Process Steps */}
        <div className="space-y-4 sm:space-y-6 relative z-10">
          {steps.map((step, idx) => (
            <FlowingProcessStep key={idx} step={step} index={idx} />
          ))}
        </div>
      </div>

      {/* Get in Touch CTA */}
      <div className="mt-14 sm:mt-18 text-center relative z-10">
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-primary-color hover:bg-primary-color/90 text-black font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary-color/20 hover:scale-105 transition-all duration-200 cursor-pointer"
        >
          <span className="flex items-center gap-1.5 text-black">
            <PhoneCall weight="fill" className="w-4 h-4" />
            <span className="opacity-50 font-mono text-xs">/</span>
            <VideoCamera weight="fill" className="w-4 h-4" />
          </span>
          <span>Start Your Sprint</span>
        </Link>
      </div>

    </section>
  );
}
