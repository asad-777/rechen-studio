'use client';

import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import { checkAndConsumeInitialLoad } from '../../lib/navState';

export default function HomeClientWrapper({ children }) {
  const [shouldShowIntro, setShouldShowIntro] = useState(false);
  const [isClientChecked, setIsClientChecked] = useState(false);
  const [loadingCompleted, setLoadingCompleted] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    // Clear any previous sessionStorage key that might have persisted from earlier testing
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.removeItem('araa_intro_shown');
      } catch (e) {
        // ignore
      }

      const isFirst = checkAndConsumeInitialLoad();
      if (isFirst) {
        setShouldShowIntro(true);
        window.scrollTo(0, 0);
      } else {
        // Internal navigation within the app (clicking internal links)
        setShouldShowIntro(false);
        setLoadingCompleted(true);
        setAnimationFinished(true);
      }
      setIsClientChecked(true);
    }
  }, []);

  const handleComplete = () => {
    setLoadingCompleted(true);
    setTimeout(() => {
      setAnimationFinished(true);
    }, 950);
  };

  // If internal link transition, render directly with no loading screen or scale animation
  if (isClientChecked && !shouldShowIntro) {
    return <div className="w-full flex flex-col">{children}</div>;
  }

  return (
    <>
      {shouldShowIntro && <LoadingScreen onComplete={handleComplete} />}

      <div
        className={`w-full flex flex-col origin-top transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          animationFinished || !shouldShowIntro
            ? ''
            : !loadingCompleted
            ? 'scale-[0.96] translate-y-8 opacity-80 rounded-2xl overflow-hidden'
            : 'scale-100 translate-y-0 opacity-100 rounded-none'
        }`}
        style={{
          willChange: animationFinished || !shouldShowIntro ? 'auto' : 'transform, opacity',
        }}
      >
        {children}
      </div>
    </>
  );
}
