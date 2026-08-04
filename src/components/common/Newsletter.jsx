'use client';

import React, { useState } from 'react';
import { PaperPlaneRight, CheckCircle, WarningCircle, Sparkle } from '@phosphor-icons/react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-base-1a p-8 md:p-12 border border-base-3a shadow-sm transition-colors duration-300">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-base-3a/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-base-3a/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-base-2a border border-base-3a text-text-black font-mono text-xs font-bold uppercase tracking-wider shadow-sm">
          <Sparkle weight="fill" className="w-3.5 h-3.5 text-primary-a" />
          <span>Stay Ahead of the Curve</span>
        </div>

        <h3 className="font-heading text-3xl sm:text-4xl font-bold text-text-black tracking-tight">
          Subscribe to our <span className="text-primary-a">Studio Newsletter</span>
        </h3>

        <p className="font-sans text-sm sm:text-base text-text-black/80 leading-relaxed">
          Get insider breakdowns of our latest digital products, SEO growth mechanics, custom web app architectures, and UI/UX design trends delivered monthly.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
          <div className="relative flex-grow">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              disabled={status === 'submitting' || status === 'success'}
              placeholder="Enter your professional email..."
              className="w-full px-5 py-3.5 rounded-2xl bg-base-2a text-text-black placeholder-text-black/50 font-mono text-sm border border-base-3a focus:outline-none focus:ring-2 focus:ring-primary-a focus:border-transparent transition-all disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className="px-6 py-3.5 rounded-2xl font-button text-lg font-bold uppercase tracking-wide bg-primary-a hover:bg-primary-a/90 text-text-white shadow-md transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-75"
          >
            {status === 'submitting' ? (
              <span>Joining...</span>
            ) : status === 'success' ? (
              <>
                <CheckCircle weight="fill" className="w-5 h-5 text-text-white" />
                <span>Subscribed</span>
              </>
            ) : (
              <>
                <span>Subscribe</span>
                <PaperPlaneRight weight="bold" className="w-4 h-4 text-text-white" />
              </>
            )}
          </button>
        </form>

        {/* Feedback states */}
        {status === 'success' && (
          <div className="p-3 rounded-xl bg-primary-a/20 border border-primary-a text-text-black font-mono text-xs inline-flex items-center gap-2 animate-in fade-in zoom-in duration-300">
            <CheckCircle weight="fill" className="w-4 h-4 text-primary-a" />
            <span>Welcome aboard! Check your inbox for your confirmation link.</span>
          </div>
        )}

        {status === 'error' && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 font-mono text-xs inline-flex items-center gap-2 animate-in fade-in zoom-in duration-300">
            <WarningCircle weight="fill" className="w-4 h-4" />
            <span>{errorMessage}</span>
          </div>
        )}

        <p className="text-[11px] font-mono text-text-black/60 uppercase tracking-widest pt-2 font-semibold">
          Zero spam. Unsubscribe anytime with one click.
        </p>
      </div>
    </div>
  );
}
