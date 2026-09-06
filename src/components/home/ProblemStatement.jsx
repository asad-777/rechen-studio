'use client';

import React, { useRef, useState, useEffect } from 'react';

function FlowingProblemItem({ item, index }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const updateProgress = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight * 0.88;
      const end = windowHeight * 0.40;
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
  const bodyWords = item.description.split(' ');

  return (
    <div 
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 py-12 sm:py-20 relative z-10 items-center"
    >
      {/* Text Column Container */}
      <div className={`space-y-4 ${isRight ? 'md:order-2 md:pl-8 lg:pl-14' : 'md:order-1 md:pr-8 lg:pr-14'}`}>
        {/* Headline with Highlight Keywords */}
        <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          {item.headlineSegments.map((segment, sIdx) => {
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
                      textShadow: active && progress > 0.5 ? '0 0 24px rgba(20, 195, 142, 0.45)' : 'none'
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
                    textShadow: active && progress > 0.6 ? '0 0 24px rgba(255, 255, 255, 0.25)' : 'none'
                  }}
                >
                  {word}
                </span>
              );
            });
          })}
        </h3>

        {/* Flowing Body Text */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-text-content leading-relaxed pt-2">
          {bodyWords.map((word, idx) => {
            const wordThreshold = (idx / bodyWords.length) * 0.8;
            const active = progress >= wordThreshold;
            const opacity = Math.min(Math.max((progress - wordThreshold) * 5 + 0.25, 0.25), 1);

            return (
              <span
                key={idx}
                className="inline-block mr-[0.3em] transition-all duration-200 font-normal"
                style={{
                  color: active ? 'rgba(238, 238, 238, 0.95)' : 'rgba(238, 238, 238, 0.25)',
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
      <div className={`hidden md:flex items-center justify-center ${isRight ? 'md:order-1 md:pr-8 lg:pr-14' : 'md:order-2 md:pl-8 lg:pl-14'}`}>
        <div 
          className="w-full max-w-xs lg:max-w-sm h-52 lg:h-64 flex items-center justify-center transition-all duration-500 overflow-hidden"
          style={{
            opacity: 0.25 + 0.75 * progress,
            transform: `scale(${0.92 + 0.08 * progress})`
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.svg}
            alt="Problem Illustration"
            className="max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default function ProblemStatement() {
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

  const problems = [
    {
      svg: "/svgs/undraw_fast-changing-world_3ee6.svg",
      headlineSegments: [
        { text: "Zero Web Presence", highlight: true },
        { text: " or ", highlight: false },
        { text: "Dead Socials.", highlight: true }
      ],
      description: "Relying strictly on an abandoned Facebook page or word-of-mouth. When high-ticket homeowners search for you on Google, your competitors take the call simply because they look legitimate."
    },
    {
      svg: "/svgs/undraw_throw-away_aaho.svg",
      headlineSegments: [
        { text: "Broken Lovable & Wordpress", highlight: true },
        { text: "Pages.", highlight: false }
      ],
      description: "Buggy single-page websites that load in 5+ seconds, break on mobile devices, and have broken contact forms where submitted quote requests vanish into thin air."
    },
    {
      svg: "/svgs/undraw_fall_zh0m.svg",
      headlineSegments: [
        { text: "Losing ", highlight: false },
        { text: "$1000+ High-Ticket Jobs.", highlight: true }
      ],
      description: "When commercial clients or homeowners want roofing, remodeling, or electrical work, an amateur digital presence instantly destroys trust before you even quote."
    }
  ];

  return (
    <section id="problem" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-4">
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-text-content leading-tight">
          Why Most Contractors Are <br className="hidden sm:inline" />
          <span className="text-primary-color">Leaking High-Ticket Jobs</span>
        </h2>
        
        <p className="font-sans text-base sm:text-lg text-text-content/70 leading-relaxed">
          Having a broken DIY website or an inactive Facebook page isn&apos;t just an aesthetic issue — it costs your business tens of thousands in lost revenue every month.
        </p>
      </div>

      {/* Dotted Curved Pathway & Staggered Items Container */}
      <div ref={containerRef} className="relative">
        
        {/* Central Dotted Curved SVG Path (Runs down the center corridor between left and right items) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-28 lg:w-36 pointer-events-none z-0">
          <svg 
            className="w-full h-full"
            viewBox="0 0 100 900" 
            fill="none" 
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="dot-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Reveal Mask for Dotted Path */}
              <mask 
                id="dotted-reveal-mask" 
                maskUnits="userSpaceOnUse" 
                maskContentUnits="userSpaceOnUse"
                x="-50" 
                y="-50" 
                width="200" 
                height="1000"
              >
                <path 
                  d="M 50 10 C 20 220, 80 360, 50 520 C 20 680, 80 780, 50 900"
                  stroke="#ffffff" 
                  strokeWidth="40"
                  strokeLinecap="round"
                  fill="none" 
                  pathLength="1000"
                  strokeDasharray="1000"
                  strokeDashoffset={Math.max(1000 - pathProgress * 1150, 0)}
                  style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
                />
              </mask>
            </defs>

            {/* Dim Dotted Base Track */}
            <path 
              d="M 50 10 C 20 220, 80 360, 50 520 C 20 680, 80 780, 50 900"
              stroke="rgba(255, 255, 255, 0.15)" 
              strokeWidth="2.5" 
              strokeDasharray="4 12"
              strokeLinecap="round"
              fill="none" 
            />

            {/* Glowing Illuminated Dotted Path Revealed on Scroll */}
            <path 
              d="M 50 10 C 20 220, 80 360, 50 520 C 20 680, 80 780, 50 900"
              stroke="#14C38E" 
              strokeWidth="3.5" 
              strokeDasharray="4 12"
              strokeLinecap="round"
              fill="none" 
              mask="url(#dotted-reveal-mask)"
              filter="url(#dot-glow)"
            />
          </svg>
        </div>

        {/* Staggered Content Rows */}
        <div className="space-y-6 sm:space-y-12">
          {problems.map((problem, idx) => (
            <FlowingProblemItem 
              key={idx} 
              item={problem} 
              index={idx} 
            />
          ))}
        </div>

      </div>

    </section>
  );
}
