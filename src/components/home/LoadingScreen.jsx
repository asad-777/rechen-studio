'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [isSlidingUp, setIsSlidingUp] = useState(false);
  const [isExited, setIsExited] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }

    // Start progress bar animation after a tiny delay to ensure CSS transition triggers
    const progressTimer = setTimeout(() => {
      setIsStarted(true);
    }, 50);

    // After 1.65s, trigger slide up animation
    const slideTimer = setTimeout(() => {
      setIsSlidingUp(true);
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
      if (onCompleteRef.current) {
        onCompleteRef.current();
      }
    }, 1650);

    // Complete exit after slide animation ends (850ms duration -> 2500ms total)
    const exitTimer = setTimeout(() => {
      setIsExited(true);
      if (typeof window !== 'undefined') {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
    }, 2500);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(slideTimer);
      clearTimeout(exitTimer);
      if (typeof window !== 'undefined') {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
    };
  }, []);

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

      {/* Center Container: Loading Text + Bar */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-8 text-center w-full max-w-xs sm:max-w-sm">
        
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black tracking-widest text-black uppercase">
          Loading...
        </h1>
        
        {/* Loading Bar */}
        <div className="w-full h-1.5 sm:h-2 bg-black/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-black rounded-full transition-all duration-[1500ms] ease-out"
            style={{ width: isStarted ? '100%' : '0%' }}
          />
        </div>

      </div>
    </div>
  );
}

