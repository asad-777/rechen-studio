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
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 md:p-12 border border-slate-800/80 shadow-2xl backdrop-blur-xl">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 font-mono text-xs font-semibold uppercase tracking-wider">
          <Sparkle weight="fill" className="w-3.5 h-3.5 text-violet-400" />
          <span>Stay Ahead of the Curve</span>
        </div>

        <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Subscribe to our <span className="bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">Studio Newsletter</span>
        </h3>

        <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
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
              className="w-full px-5 py-3.5 rounded-2xl bg-slate-900/90 text-white placeholder-slate-500 font-mono text-sm border border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className="px-6 py-3.5 rounded-2xl font-button text-lg font-bold uppercase tracking-wide bg-gradient-to-r from-violet-600 via-indigo-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-75"
          >
            {status === 'submitting' ? (
              <span>Joining...</span>
            ) : status === 'success' ? (
              <>
                <CheckCircle weight="fill" className="w-5 h-5 text-emerald-400" />
                <span>Subscribed</span>
              </>
            ) : (
              <>
                <span>Subscribe</span>
                <PaperPlaneRight weight="bold" className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Feedback states */}
        {status === 'success' && (
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs inline-flex items-center gap-2 animate-in fade-in zoom-in duration-300">
            <CheckCircle weight="fill" className="w-4 h-4" />
            <span>Welcome aboard! Check your inbox for your confirmation link.</span>
          </div>
        )}

        {status === 'error' && (
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 font-mono text-xs inline-flex items-center gap-2 animate-in fade-in zoom-in duration-300">
            <WarningCircle weight="fill" className="w-4 h-4" />
            <span>{errorMessage}</span>
          </div>
        )}

        <p className="text-[11px] font-mono text-slate-500 uppercase tracking-widest pt-2">
          Zero spam. Unsubscribe anytime with one click.
        </p>
      </div>
    </div>
  );
}
