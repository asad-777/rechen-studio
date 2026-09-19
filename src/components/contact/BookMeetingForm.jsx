'use client';

import React, { useState, useEffect } from 'react';
import { 
  CalendarCheck, 
  Clock, 
  User, 
  EnvelopeSimple, 
  TextAa,
  MapPin,
  CheckCircle, 
  WarningCircle
} from '@phosphor-icons/react';
import IntlTelInput from '@intl-tel-input/react/with-utils';
import 'intl-tel-input/styles';

export default function BookMeetingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactDetail: '',
    subject: '',
    location: '',
    description: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch('https://freeipapi.com/api/json')
      .then(res => res.json())
      .then(data => {
        if (data.regionName && data.countryName) {
          setFormData(prev => ({
            ...prev,
            location: `${data.regionName}, ${data.countryName}`
          }));
        }
      })
      .catch(err => console.error('Failed to auto-detect location:', err));
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatus('error');
      setErrorMessage('Please complete your Name and Email fields to book discovery.');
      return;
    }
    setStatus('loading');
    
    try {
      const payload = JSON.stringify(formData);
      const reqHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };

      const [response1, response2] = await Promise.all([
        fetch('https://formspree.io/f/moevjaae', { method: 'POST', headers: reqHeaders, body: payload }),
        fetch('https://formspree.io/f/mwlpvedo', { method: 'POST', headers: reqHeaders, body: payload })
      ]);
      
      if (response1.ok && response2.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          contactDetail: '',
          subject: '',
          location: '',
          description: ''
        });
      } else {
        const failedResponse = !response1.ok ? response1 : response2;
        const data = await failedResponse.json();
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
            {/* Contact Detail */}
            <div className="space-y-2">
              <label htmlFor="contactDetail" className="block font-mono text-xs font-bold text-text-black uppercase tracking-wider">
                Contact Detail
              </label>
              <div className="relative">
                <style>{`
                  /* Override intl-tel-input default text color and border for the form */
                  .iti { 
                    width: 100%; 
                    --iti-hover-color: rgba(255, 255, 255, 0.08);
                    --iti-border-color: rgba(255, 255, 255, 0.1);
                    --iti-country-selector-bg: #1a1a1a;
                    --iti-icon-color: #f1f1f1;
                  }
                  .iti__country-list {
                    background-color: var(--iti-country-selector-bg) !important;
                    color: #f1f1f1 !important;
                    border: 1px solid var(--iti-border-color) !important;
                    border-radius: 0.75rem;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
                  }
                  .iti__country {
                    padding: 10px 12px !important;
                    transition: background-color 0.2s;
                  }
                  .iti__country.iti__highlight, .iti__country:hover {
                    background-color: var(--iti-hover-color) !important;
                  }
                  .iti__country-list input[type="text"], .iti__search-input {
                    background-color: rgba(255, 255, 255, 0.05) !important;
                    color: #f1f1f1 !important;
                    border: 1px solid var(--iti-border-color) !important;
                    border-radius: 0.5rem;
                    padding: 8px 12px !important;
                    margin: 8px !important;
                    width: calc(100% - 16px) !important;
                    box-sizing: border-box;
                  }
                `}</style>
                <IntlTelInput
                  initOptions={{
                    initialCountry: "us",
                    separateDialCode: true
                  }}
                  onChangeNumber={(number) => setFormData(prev => ({ ...prev, contactDetail: number }))}
                  inputProps={{
                    id: "contactDetail",
                    name: "contactDetail",
                    placeholder: "Phone number",
                    className: "w-full py-3 pr-4 rounded-xl bg-base-1a border border-base-3a focus:border-primary-a focus:ring-2 focus:ring-primary-a text-text-black placeholder-text-black/50 font-sans text-sm focus:outline-none transition-colors"
                  }}
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label htmlFor="location" className="block font-mono text-xs font-bold text-text-black uppercase tracking-wider">
                Location
              </label>
              <div className="relative">
                <MapPin weight="regular" className="absolute left-3.5 top-3.5 w-5 h-5 text-text-black/60" />
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="e.g., City, State, or Zip"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-base-1a border border-base-3a focus:border-primary-a focus:ring-2 focus:ring-primary-a text-text-black placeholder-text-black/50 font-sans text-sm focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label htmlFor="subject" className="block font-mono text-xs font-bold text-text-black uppercase tracking-wider">
              Subject
            </label>
            <div className="relative">
              <TextAa weight="regular" className="absolute left-3.5 top-3.5 w-5 h-5 text-text-black/60" />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this regarding?"
                value={formData.subject}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-base-1a border border-base-3a focus:border-primary-a focus:ring-2 focus:ring-primary-a text-text-black placeholder-text-black/50 font-sans text-sm focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label htmlFor="description" className="block font-mono text-xs font-bold text-text-black uppercase tracking-wider">
              Description
            </label>
            <div className="relative">
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="How can we help you? Describe your project or inquiry..."
                value={formData.description}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-base-1a border border-base-3a focus:border-primary-a focus:ring-2 focus:ring-primary-a text-text-black placeholder-text-black/50 font-sans text-sm focus:outline-none transition-colors resize-none"
              />
            </div>
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 font-sans text-xs">
              <WarningCircle weight="fill" className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3.5 px-6 rounded-full bg-primary-color hover:bg-primary-color/90 text-black font-mono text-sm sm:text-base font-bold uppercase tracking-wider shadow-lg shadow-primary-color/20 transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
          >
            {status === 'loading' ? (
              <span className="animate-pulse">Configuring Calendar Invite...</span>
            ) : (
              <>
                <CalendarCheck weight="fill" className="w-5 h-5 text-black" />
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
