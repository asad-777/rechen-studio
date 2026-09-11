'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Code, 
  Lock, 
  ArrowsClockwise, 
  Handshake, 
  CaretDown 
} from '@phosphor-icons/react';

const policies = [
  {
    id: "ownership",
    title: "1. 100% Intellectual Property & Code Ownership",
    icon: Code,
    content: "Upon final milestone settlement, 100% of all intellectual property, bespoke Next.js source code, custom design assets, and database architecture transfer completely and unconditionally to you. Araa Soft retains zero proprietary hold or hostage claims over your digital assets. You own everything outright."
  },
  {
    id: "scope",
    title: "2. Scope of Work, Timelines & Sprint Milestones",
    icon: Handshake,
    content: "All projects operate under a clearly documented Statement of Work (SOW) specifying milestone deliverables, sprint schedules (typically 7 to 14 business days for contractor deployments), and client feedback windows. Any requested features outside the original scope are quoted transparently as separate sprint add-ons."
  },
  {
    id: "hosting",
    title: "3. Hosting, Deployment & Zero Vendor Lock-in",
    icon: ArrowsClockwise,
    content: "We deploy client web applications on top-tier global edge networks (Vercel, AWS, Cloudflare). We configure and transfer all DNS, domain records, and deployment pipelines directly to your company accounts. You have total freedom to host, migrate, or manage your platform independently at any time."
  },
  {
    id: "payment",
    title: "4. Payment Terms & Invoicing Schedule",
    icon: FileText,
    content: "Standard projects follow a transparent milestone structure (typically 50% deposit upon kickoff and 50% upon final client sign-off and deployment). Monthly retainer services for SEO or lead system management are billed on a 30-day rolling basis with no long-term restrictive contracts."
  },
  {
    id: "privacy",
    title: "5. Privacy, Confidentiality & Lead Data Security",
    icon: Lock,
    content: "Araa Soft treats all proprietary business metrics, customer lead inquiries, API keys, and client communications with strict enterprise-grade confidentiality. We do not sell, scrape, or share your customer data with any third parties."
  },
  {
    id: "revisions",
    title: "6. Revisions & Client Satisfaction Guarantee",
    icon: ShieldCheck,
    content: "Every sprint milestone includes dedicated interactive review cycles where our design and engineering leads refine layouts, copy, animations, and lead capture workflows until you are 100% satisfied with the outcome before global launch."
  }
];

export default function AboutPolicies() {
  const [openPolicy, setOpenPolicy] = useState(0);

  return (
    <div className="space-y-4">
      {policies.map((item, idx) => {
        const isOpen = openPolicy === idx;
        const IconComponent = item.icon;
        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'bg-base-b border-primary-color shadow-xl'
                : 'bg-base-b/60 border-base-c hover:border-text-content/40'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenPolicy(isOpen ? null : idx)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                  isOpen ? 'bg-primary-color text-base-a border-primary-color' : 'bg-base-a text-primary-color border-base-c'
                }`}>
                  <IconComponent weight="duotone" className="w-5 h-5" />
                </div>
                <span className={`font-mono text-base sm:text-lg font-bold transition-colors ${
                  isOpen ? 'text-primary-color' : 'text-text-content'
                }`}>
                  {item.title}
                </span>
              </div>

              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-base-c transition-transform duration-300 ${
                isOpen ? 'bg-primary-color rotate-180 text-base-a border-primary-color' : 'bg-base-a text-text-content'
              }`}>
                <CaretDown weight="bold" className="w-4 h-4" />
              </div>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${
                isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
              }`}
            >
              <div className="pt-4 border-t border-base-c/60 text-text-content/80 font-sans text-sm sm:text-base leading-relaxed pl-14">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
