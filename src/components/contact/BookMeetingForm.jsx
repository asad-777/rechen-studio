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
    <div id="book-scoping-form" className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 p-8 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent shadow-sm shadow-indigo-500" />
      
      <div className="space-y-2 mb-8">
        <span className="font-mono text-xs uppercase tracking-widest font-semibold text-indigo-400 flex items-center gap-2">
          <Clock weight="fill" className="w-4 h-4 text-indigo-400" />
          <span>Direct Video Scoping Call (30 mins)</span>
        </span>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Lock In Technical Discovery
        </h3>
        <p className="font-sans text-xs sm:text-sm text-slate-400">
          We respect your time. Speak directly with a principal engineer—no junior account managers or sales presentations.
        </p>
      </div>

      {status === 'success' ? (
        <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
          <CheckCircle weight="duotone" className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
          <h4 className="font-heading text-2xl font-bold text-white">Scoping Confirmed!</h4>
          <p className="font-sans text-sm text-slate-300 max-w-md mx-auto">
            Thank you, {formData.name}. An calendar invite and Zoom room link have been generated and emailed to <span className="font-mono text-white underline">{formData.email}</span>.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-button text-xs uppercase tracking-wider font-bold transition-all"
          >
            Book Another Session
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Your Full Name <span className="text-pink-500">*</span>
              </label>
              <div className="relative">
                <User weight="regular" className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g., Ada Lovelace"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 text-white placeholder-slate-600 font-sans text-sm focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Work Email <span className="text-pink-500">*</span>
              </label>
              <div className="relative">
                <EnvelopeSimple weight="regular" className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 text-white placeholder-slate-600 font-sans text-sm focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Company / Brand */}
            <div className="space-y-2">
              <label htmlFor="company" className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Company / Brand
              </label>
              <div className="relative">
                <Buildings weight="regular" className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="e.g., NovaFin Tech"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 text-white placeholder-slate-600 font-sans text-sm focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Service of Interest */}
            <div className="space-y-2">
              <label htmlFor="service" className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Primary Architecture Target
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 text-white font-sans text-sm focus:outline-none transition-colors"
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
            <label htmlFor="budget" className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Estimated Scoping Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 text-white font-sans text-sm focus:outline-none transition-colors"
            >
              <option value="$10k - $25k">$10,000 - $25,000</option>
              <option value="$25k - $50k">$25,000 - $50,000</option>
              <option value="$50k - $100k+">$50,000 - $100,000+</option>
              <option value="Retainer / Ongoing">Dedicated Monthly Retainer</option>
            </select>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <label htmlFor="notes" className="block font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">
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
                className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 text-white placeholder-slate-600 font-sans text-sm focus:outline-none transition-colors resize-none"
              />
            </div>
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-400 font-sans text-xs">
              <WarningCircle weight="fill" className="w-4 h-4 shrink-0" />
              <span>Please complete your Name and Email fields to book discovery.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-pink-600 hover:opacity-95 text-white font-button text-lg font-bold uppercase tracking-wider shadow-xl shadow-indigo-600/30 transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2.5"
          >
            {status === 'loading' ? (
              <span className="animate-pulse">Configuring Calendar Invite...</span>
            ) : (
              <>
                <CalendarCheck weight="fill" className="w-5 h-5 text-indigo-200" />
                <span>Schedule Discovery Call</span>
              </>
            )}
          </button>

          <p className="text-center font-mono text-[11px] text-slate-500">
            🔒 Zero spam guarantee. Protected by studio NDA upon scheduling.
          </p>
        </form>
      )}
    </div>
  );
}
