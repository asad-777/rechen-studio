'use client';

import React, { useState, useEffect, useCallback } from 'react';
import LoadingScreen from './LoadingScreen';
import { hasCompletedInitialIntro, markInitialIntroCompleted } from '../../lib/navState';

export default function HomeClientWrapper({ children }) {
  const [shouldShowIntro] = useState(() => !hasCompletedInitialIntro());
  const [loadingCompleted, setLoadingCompleted] = useState(() => hasCompletedInitialIntro());
  const [animationFinished, setAnimationFinished] = useState(() => hasCompletedInitialIntro());

  useEffect(() => {
    if (shouldShowIntro && typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
    return () => {
      markInitialIntroCompleted();
    };
  }, [shouldShowIntro]);

  const handleComplete = useCallback(() => {
    markInitialIntroCompleted();
    setLoadingCompleted(true);
    setTimeout(() => {
      setAnimationFinished(true);
    }, 950);
  }, []);

  // If internal link transition, render directly with no loading screen or scale animation
  if (!shouldShowIntro) {
    return <div className="w-full flex flex-col">{children}</div>;
  }

  return (
    <>
      <LoadingScreen onComplete={handleComplete} />

      <div
        className={`w-full flex flex-col origin-top transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          animationFinished
            ? ''
            : !loadingCompleted
            ? 'scale-[0.96] translate-y-8 opacity-80 rounded-2xl overflow-hidden'
            : 'scale-100 translate-y-0 opacity-100 rounded-none'
        }`}
        style={{
          willChange: animationFinished ? 'auto' : 'transform, opacity',
        }}
      >
        {children}
      </div>
    </>
  );
}

