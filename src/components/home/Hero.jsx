'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { HexagonPattern } from '../ui/hexagon-pattern';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // Optional: Set initial position to center if desired
    if (heroRef.current && !isHovered) {
      const { width, height } = heroRef.current.getBoundingClientRect();
      setMousePos({ x: width / 2, y: height / 2 });
    }
  }, [isHovered]);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const { left, top } = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  // Calculate slight parallax offsets based on mouse position
  const parallaxX = isHovered && heroRef.current ? (mousePos.x - heroRef.current.offsetWidth / 2) * -0.02 : 0;
  const parallaxY = isHovered && heroRef.current ? (mousePos.y - heroRef.current.offsetHeight / 2) * -0.02 : 0;

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[85vh] flex items-center py-20 overflow-hidden bg-background text-foreground transition-colors duration-300"
    >
      {/* Background Pattern Container with Parallax */}
      <div 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0) scale(1.05)`,
        }}
      >
        {/* Base faint pattern */}
        <HexagonPattern
          className="absolute inset-0 fill-primary-a/5 stroke-primary-a/20 dark:fill-primary-a/5 dark:stroke-primary-a/20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
          radius={45}
          gap={8}
        />
        
        {/* Dynamic bright spotlight pattern following cursor */}
        <HexagonPattern
          className="absolute inset-0 fill-primary-a/20 stroke-primary-a/50 dark:fill-primary-a/30 dark:stroke-primary-a/60 transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            maskImage: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, white, transparent)`,
            WebkitMaskImage: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, white, transparent)`,
          }}
          radius={45}
          gap={8}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex flex-col space-y-8 lg:space-y-10">
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-medium tracking-tight leading-[1.05]">
            Rechen<br/>Studio
          </h1>
          
          <p className="font-sans text-xl md:text-2xl text-foreground/80 max-w-xl font-light leading-relaxed">
            We engineer high-performance websites and data-driven SEO strategies to scale your business.
          </p>

          {/* Stats / Value Props */}
          <div className="flex flex-row flex-wrap items-center gap-8 md:gap-12 pt-4">
            <div className="flex flex-col w-24 md:w-28">
              <h3 className="font-sans text-lg md:text-xl font-medium pb-2 border-b border-foreground/30 mb-4">Projects</h3>
              <div className="font-mono text-2xl md:text-3xl text-foreground">5+</div>
            </div>
            <div className="flex flex-col w-24 md:w-28">
              <h3 className="font-sans text-lg md:text-xl font-medium pb-2 border-b border-foreground/30 mb-4">Clients</h3>
              <div className="font-mono text-2xl md:text-3xl text-foreground">3+</div>
            </div>
            <div className="flex flex-col w-32 md:w-40">
              <h3 className="font-sans text-lg md:text-xl font-medium pb-2 border-b border-foreground/30 mb-4">Case Studies</h3>
              <div className="font-mono text-2xl md:text-3xl text-foreground">25+</div>
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
