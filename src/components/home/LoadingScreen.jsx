'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LoadingScreen({ onComplete }) {
  const [typedText, setTypedText] = useState('');
  const [isSlidingUp, setIsSlidingUp] = useState(false);
  const [isExited, setIsExited] = useState(false);
  const fullText = 'Araa Soft';

  useEffect(() => {
    // Scroll to top immediately on start
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }

    // Typing effect: type "Araa Soft" over ~1.3s
    let currentIndex = 0;
    const typingIntervalTime = 1300 / fullText.length; // ~144ms per letter

    const typeTimer = setInterval(() => {
      currentIndex += 1;
      setTypedText(fullText.slice(0, currentIndex));
      if (currentIndex >= fullText.length) {
        clearInterval(typeTimer);
      }
    }, typingIntervalTime);

    // After 1.5s - 1.6s, trigger slide up animation
    const slideTimer = setTimeout(() => {
      setIsSlidingUp(true);
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
      if (onComplete) {
        onComplete();
      }
    }, 1650);

    // Complete exit after slide animation ends (850ms duration)
    const exitTimer = setTimeout(() => {
      setIsExited(true);
      if (typeof window !== 'undefined') {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
    }, 2500);

    return () => {
      clearInterval(typeTimer);
      clearTimeout(slideTimer);
      clearTimeout(exitTimer);
      if (typeof window !== 'undefined') {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
    };
  }, [onComplete]);

  if (isExited) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-primary-color text-black shadow-2xl transition-all duration-[850ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isSlidingUp ? '-translate-y-full opacity-95 pointer-events-none rounded-b-[40px]' : 'translate-y-0 opacity-100'
      }`}
      style={{
        willChange: 'transform, border-radius',
      }}
    >
      {/* Background Subtle Gradient & Mesh Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.25),transparent_70%)] pointer-events-none" />

      {/* Center Container: Logo + Typed Name */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-5 px-6 text-center">
        {/* Animated Logo Container with Spring Scale */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center bg-black/10 backdrop-blur-md rounded-3xl border border-black/15 shadow-xl transition-transform duration-500 hover:scale-105">
          <Image
            src="/bglogo.png"
            alt="Araa Soft Logo"
            width={90}
            height={90}
            priority
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 object-contain brightness-0 transition-all duration-700 scale-100"
          />
          {/* Subtle pulsating ring */}
          <div className="absolute inset-0 rounded-3xl border border-black/20 animate-ping opacity-25" />
        </div>

        {/* Typed Name */}
        <div className="flex items-center justify-center min-h-[3rem]">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black flex items-center">
            <span>
              {typedText.slice(0, 4)}
              {typedText.length > 4 && (
                <span className="opacity-90 font-extrabold ml-2.5">
                  {typedText.slice(4)}
                </span>
              )}
            </span>
            
            {/* Blinking Cursor */}
            <span
              className={`inline-block w-1.5 sm:w-2 md:w-2.5 h-7 sm:h-9 md:h-12 bg-black ml-2 rounded-sm transition-opacity duration-150 ${
                isSlidingUp ? 'opacity-0' : 'animate-pulse'
              }`}
            />
          </h1>
        </div>

      
      </div>

    </div>
  );
}
