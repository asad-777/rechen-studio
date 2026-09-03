'use client';

import React, { useState } from 'react';
import { PaperPlaneRight, CheckCircle, WarningCircle } from '@phosphor-icons/react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setStatus('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/xnpawlgd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(
          data.errors ? data.errors.map(err => err.message).join(', ') : 'Oops! There was a problem submitting your form'
        );
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Oops! There was a problem submitting your form');
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-base-b/70 p-5 sm:p-6 border border-base-c/80 shadow-md">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 relative z-10">
        
        {/* Left info */}
        <div className="text-left space-y-1 w-full lg:w-auto">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-text-content">
            Subscribe to our Studio Newsletter
          </h3>
          <p className="font-sans text-xs sm:text-sm text-text-content/70">
            SEO mechanics, conversion funnels, and modern tech updates delivered monthly.
          </p>
        </div>

        {/* Right input form */}
        <div className="w-full lg:w-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 w-full lg:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              disabled={status === 'submitting' || status === 'success'}
              placeholder="Enter your email..."
              className="px-4 py-2.5 rounded-xl bg-base-a text-text-content placeholder-text-content/40 font-mono text-xs sm:text-sm border border-base-c focus:outline-none focus:border-primary-color transition-all w-full sm:w-64"
            />

            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className="px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider bg-primary-color hover:bg-primary-color/90 text-black shadow-sm transition-all flex items-center justify-center gap-1.5 disabled:opacity-75 cursor-pointer shrink-0"
            >
              {status === 'submitting' ? (
                <span>Joining...</span>
              ) : status === 'success' ? (
                <>
                  <CheckCircle weight="fill" className="w-4 h-4 text-black" />
                  <span>Subscribed</span>
                </>
              ) : (
                <>
                  <span>Join</span>
                  <PaperPlaneRight weight="bold" className="w-3.5 h-3.5 text-black" />
                </>
              )}
            </button>
          </form>

          {/* Inline Feedback */}
          {status === 'success' && (
            <div className="mt-2 text-special-text font-mono text-xs flex items-center gap-1.5">
              <CheckCircle weight="fill" className="w-3.5 h-3.5 text-special-text" />
              <span>Subscribed! Check your inbox for confirmation.</span>
            </div>
          )}
          {status === 'error' && (
            <div className="mt-2 text-red-400 font-mono text-xs flex items-center gap-1.5">
              <WarningCircle weight="fill" className="w-3.5 h-3.5 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
