'use client';

import React from 'react';
import { Trophy, Medal, Star, Crown, Sparkle, Certificate } from '@phosphor-icons/react';

const ClutchBadge = ({ top1, top2, bottom1, bottom2 }) => (
  <div className="relative w-36 h-40 flex flex-col items-center justify-center text-center p-2 group-hover:scale-105 transition-transform duration-300">
    {/* Hexagon Outlines */}
    <div className="absolute inset-0 bg-white [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] border border-transparent shadow-[0_0_0_3px_rgba(156,163,175,0.4)]" />
    <div className="absolute inset-0.75 bg-white [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] border border-gray-300 shadow-[0_0_0_1px_rgba(156,163,175,0.2)_inset]" />
    
    <div className="relative z-10 flex flex-col items-center justify-between h-full py-3.5 w-full">
      <div className="flex flex-col items-center px-2">
        <span className="text-[7px] uppercase tracking-wider font-bold text-gray-500 leading-tight">{top1}</span>
        <span className="text-[8px] uppercase tracking-wider font-bold text-gray-800 leading-tight mt-0.5">{top2}</span>
      </div>
      
      <div className="bg-[#1a2f3f] text-white w-[112%] py-1.5 font-serif font-bold text-xl -mx-4 shadow-sm flex items-center justify-center tracking-wide">
        Clutch
      </div>
      
      <div className="flex flex-col items-center px-2">
        <span className="text-[8px] uppercase tracking-wider font-bold text-gray-700 leading-tight">{bottom1}</span>
        <span className="text-[7px] uppercase tracking-wider text-gray-500 mt-0.5">{bottom2}</span>
      </div>
    </div>
  </div>
);

const ManifestBadge = () => (
  <div className="relative w-28 h-40 bg-[#a61c3c] [clip-path:polygon(0_0,100%_0,100%_80%,50%_100%,0_80%)] flex flex-col items-center p-1 group-hover:scale-105 transition-transform duration-300">
    <div className="w-full h-full bg-white [clip-path:polygon(0_0,100%_0,100%_79%,50%_98%,0_79%)] flex flex-col items-center pt-5 pb-2 px-2 text-center shadow-inner">
      <span className="text-[7px] uppercase font-bold text-gray-500">Most Reviewed</span>
      <span className="text-[10px] uppercase font-bold text-[#a61c3c] leading-tight mt-1">App Development<br/>Company</span>
      
      <div className="flex items-center justify-center gap-0.5 mt-2 text-[#a61c3c]">
        <Star weight="fill" className="w-3 h-3" />
        <Star weight="fill" className="w-4 h-4" />
        <Star weight="fill" className="w-3 h-3" />
      </div>
      
      <div className="mt-auto pt-2 mb-4 border-t border-gray-200 w-full flex justify-center">
         <span className="text-[7px] uppercase font-bold text-gray-600">United Kingdom</span>
      </div>
    </div>
  </div>
);

const Iso9001Badge = () => (
  <div className="relative w-32 h-32 rounded-full border-4 border-[#23589b] flex flex-col items-center justify-center bg-white p-1 group-hover:scale-105 transition-transform duration-300">
    <div className="w-full h-full rounded-full border border-[#23589b] flex flex-col items-center justify-center p-1 text-center">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]">
        <path id="curve" d="M 20 50 A 30 30 0 1 1 80 50 A 30 30 0 1 1 20 50" fill="transparent" />
        <text className="text-[10px] font-bold uppercase tracking-widest fill-[#23589b]">
          <textPath href="#curve" startOffset="50%" textAnchor="middle">Certified Company</textPath>
        </text>
      </svg>
      
      <div className="relative z-10 w-16 h-16 bg-[#23589b] text-white rounded-full flex flex-col items-center justify-center shadow-inner">
         <span className="text-xl font-serif font-bold leading-none mt-1">ISO</span>
         <span className="text-[8px] font-bold">9001:2015</span>
      </div>
    </div>
  </div>
);

const Iso27001Badge = () => (
  <div className="relative w-32 h-32 rounded-full border-2 border-[#5482ab] flex flex-col items-center justify-center bg-white p-1 group-hover:scale-105 transition-transform duration-300 shadow-sm">
    <div className="w-full h-full rounded-full border-2 border-[#5482ab] flex flex-col items-center justify-center p-1 text-center relative overflow-hidden">
      
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <path id="curve2" d="M 15 50 A 35 35 0 1 1 85 50 A 35 35 0 1 1 15 50" fill="transparent" />
        <text className="text-[8px] font-bold fill-[#5482ab]">
          <textPath href="#curve2" startOffset="50%" textAnchor="middle">Information Security Management System</textPath>
        </text>
      </svg>
      
      <div className="relative z-10 flex flex-col items-center justify-center mt-3">
         <span className="text-2xl font-sans font-bold leading-none text-gray-300 mb-1 opacity-50">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#5482ab]">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
         </span>
         <span className="text-3xl font-serif font-bold leading-none text-[#5482ab] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-md">ISO</span>
         <span className="text-sm font-bold text-[#5482ab] -mt-1">27001</span>
         <span className="text-[7px] uppercase font-bold text-[#5482ab] mt-0.5">Certified</span>
      </div>
    </div>
  </div>
);

export default function Awards() {

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 transition-colors duration-300">
      
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-text-black tracking-tight">
          Industry Certified Excellence
        </h2>
      </div>

      {/* Awards Grid matching the template layout */}
      <div className="w-full bg-white/50 rounded-3xl p-4 sm:p-8 border border-base-3a overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-l border-t border-dashed border-black/30">
          
          {/* Row 1 */}
          <div className="border-r border-b border-dashed border-black/30 p-6 flex justify-center items-center h-56 group bg-white/40 hover:bg-white transition-colors">
            <ClutchBadge top1="Top" top2="Staff Augmentation Company" bottom1="Dubai" bottom2="2025" />
          </div>
          <div className="border-r border-b border-dashed border-black/30 p-6 flex justify-center items-center h-56 group bg-white/40 hover:bg-white transition-colors">
            <ClutchBadge top1="Top" top2="Web Developers" bottom1="Real Estate" bottom2="Dubai" />
          </div>
          <div className="border-r border-b border-dashed border-black/30 p-6 flex justify-center items-center h-56 group bg-white/40 hover:bg-white transition-colors">
            <ClutchBadge top1="Top" top2="Web Developers" bottom1="Retail" bottom2="Dubai" />
          </div>
          <div className="border-r border-b border-dashed border-black/30 p-6 flex justify-center items-center h-56 group bg-white/40 hover:bg-white transition-colors">
            <ClutchBadge top1="Top" top2="AR/VR Development Company" bottom1="Dubai" bottom2="2025" />
          </div>
          <div className="border-r border-b border-dashed border-black/30 p-6 flex justify-center items-center h-56 group bg-white/40 hover:bg-white transition-colors">
            <ClutchBadge top1="Top" top2="Software Developers" bottom1="Real Estate" bottom2="Saudi Arabia" />
          </div>

          {/* Row 2 */}
          <div className="border-r border-b border-dashed border-black/30 p-6 flex justify-center items-center h-56 group bg-white/40 hover:bg-white transition-colors">
            <ManifestBadge />
          </div>
          <div className="border-r border-b border-dashed border-black/30 p-6 flex justify-center items-center h-56 group bg-white/40 hover:bg-white transition-colors">
            <ClutchBadge top1="Top" top2="Software Developers" bottom1="Gaming" bottom2="United Kingdom" />
          </div>
          <div className="border-r border-b border-dashed border-black/30 p-6 flex justify-center items-center h-56 group bg-white/40 hover:bg-white transition-colors">
            <Iso9001Badge />
          </div>
          <div className="border-r border-b border-dashed border-black/30 p-6 flex justify-center items-center h-56 group bg-white/40 hover:bg-white transition-colors">
            <Iso27001Badge />
          </div>
          <div className="border-r border-b border-dashed border-black/30 p-6 flex justify-center items-center h-56 group bg-white/40 hover:bg-white transition-colors">
            {/* Empty cell to complete the grid visually as in the template */}
          </div>

        </div>
      </div>

    </section>
  );
}
