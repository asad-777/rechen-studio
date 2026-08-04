'use client';

import React, { useState } from 'react';
import { 
  CalendarCheck, 
  Clock, 
  User, 
  EnvelopeSimple, 
  Buildings, 
  ChatCircleText, 
  CheckCircle, 
  WarningCircle,
  Sparkle
} from '@phosphor-icons/react';

export default function BookMeetingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Websites & Web-Apps',
    budget: '$15k - $50k',
    notes: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <div id="book-scoping-form" className="rounded-3xl bg-base-2a/80 p-8 sm:p-10 border border-base-3a shadow-md relative overflow-hidden transition-colors duration-300">
      {/* Decorative top bar */}
      <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-primary-a shadow-sm" />
      
      <div className="space-y-2 mb-8">
        <span className="font-mono text-xs uppercase tracking-widest font-semibold text-primary-a flex items-center gap-2">
          <Clock weight="fill" className="w-4 h-4 text-primary-a" />
          <span>Direct Video Scoping Call (30 mins)</span>
        </span>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text-black tracking-tight">
          Lock In Technical Discovery
        </h3>
        <p className="font-sans text-xs sm:text-sm text-text-black/80">
          We respect your time. Speak directly with a principal engineer—no junior account managers or sales presentations.
        </p>
      </div>

      {status === 'success' ? (
        <div className="p-8 rounded-2xl bg-base-1a border border-base-3a text-center space-y-4 animate-in fade-in shadow-sm">
          <CheckCircle weight="duotone" className="w-16 h-16 text-primary-a mx-auto animate-bounce" />
          <h4 className="font-heading text-2xl font-bold text-text-black">Scoping Confirmed!</h4>
          <p className="font-sans text-sm text-text-black/80 max-w-md mx-auto">
            Thank you, {formData.name}. An calendar invite and Zoom room link have been generated and emailed to <span className="font-mono text-text-black font-bold underline">{formData.email}</span>.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-4 px-6 py-2.5 rounded-xl bg-primary-a hover:bg-primary-a/90 text-text-white font-button text-xs uppercase tracking-wider font-bold transition-all shadow-sm"
          >
            Book Another Session
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block font-mono text-xs font-bold text-text-black uppercase tracking-wider">
                Your Full Name <span className="text-primary-a">*</span>
              </label>
              <div className="relative">
                <User weight="regular" className="absolute left-3.5 top-3.5 w-5 h-5 text-text-black/60" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g., Ada Lovelace"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-base-1a border border-base-3a focus:border-primary-a focus:ring-2 focus:ring-primary-a text-text-black placeholder-text-black/50 font-sans text-sm focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block font-mono text-xs font-bold text-text-black uppercase tracking-wider">
                Work Email <span className="text-primary-a">*</span>
              </label>
              <div className="relative">
                <EnvelopeSimple weight="regular" className="absolute left-3.5 top-3.5 w-5 h-5 text-text-black/60" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-base-1a border border-base-3a focus:border-primary-a focus:ring-2 focus:ring-primary-a text-text-black placeholder-text-black/50 font-sans text-sm focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Company / Brand */}
            <div className="space-y-2">
              <label htmlFor="company" className="block font-mono text-xs font-bold text-text-black uppercase tracking-wider">
                Company / Brand
              </label>
              <div className="relative">
                <Buildings weight="regular" className="absolute left-3.5 top-3.5 w-5 h-5 text-text-black/60" />
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="e.g., NovaFin Tech"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-base-1a border border-base-3a focus:border-primary-a focus:ring-2 focus:ring-primary-a text-text-black placeholder-text-black/50 font-sans text-sm focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Service of Interest */}
            <div className="space-y-2">
              <label htmlFor="service" className="block font-mono text-xs font-bold text-text-black uppercase tracking-wider">
                Primary Architecture Target
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-base-1a border border-base-3a focus:border-primary-a focus:ring-2 focus:ring-primary-a text-text-black font-sans text-sm focus:outline-none transition-colors"
              >
                <option value="Websites & Web-Apps">Websites & Web-Apps</option>
                <option value="Technical SEO & Growth">Technical SEO & Growth</option>
                <option value="Social Media Strategy">Social Media & Branding</option>
                <option value="Complete Digital Transformation">Complete Transformation</option>
              </select>
            </div>
          </div>

          {/* Budget tier */}
          <div className="space-y-2">
            <label htmlFor="budget" className="block font-mono text-xs font-bold text-text-black uppercase tracking-wider">
              Estimated Scoping Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-base-1a border border-base-3a focus:border-primary-a focus:ring-2 focus:ring-primary-a text-text-black font-sans text-sm focus:outline-none transition-colors"
            >
              <option value="$10k - $25k">$10,000 - $25,000</option>
              <option value="$25k - $50k">$25,000 - $50,000</option>
              <option value="$50k - $100k+">$50,000 - $100,000+</option>
              <option value="Retainer / Ongoing">Dedicated Monthly Retainer</option>
            </select>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <label htmlFor="notes" className="block font-mono text-xs font-bold text-text-black uppercase tracking-wider">
              Project Context / Tech Stack Specifications
            </label>
            <div className="relative">
              <textarea
                id="notes"
                name="notes"
                rows={4}
                placeholder="Describe your goals, desired timelines, existing stack, or any specific challenges..."
                value={formData.notes}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-base-1a border border-base-3a focus:border-primary-a focus:ring-2 focus:ring-primary-a text-text-black placeholder-text-black/50 font-sans text-sm focus:outline-none transition-colors resize-none"
              />
            </div>
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 font-sans text-xs">
              <WarningCircle weight="fill" className="w-4 h-4 shrink-0" />
              <span>Please complete your Name and Email fields to book discovery.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 rounded-2xl bg-primary-a hover:bg-primary-a/90 text-text-white font-button text-lg font-bold uppercase tracking-wider shadow-md transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2.5"
          >
            {status === 'loading' ? (
              <span className="animate-pulse">Configuring Calendar Invite...</span>
            ) : (
              <>
                <CalendarCheck weight="fill" className="w-5 h-5 text-text-white" />
                <span>Schedule Discovery Call</span>
              </>
            )}
          </button>

          <p className="text-center font-mono text-[11px] text-text-black/70 font-semibold">
            🔒 Zero spam guarantee. Protected by studio NDA upon scheduling.
          </p>
        </form>
      )}
    </div>
  );
}
