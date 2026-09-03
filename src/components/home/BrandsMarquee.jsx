'use client';

import React from 'react';
import { Sparkle, Cpu, Cloud, ShieldCheck } from '@phosphor-icons/react';

export default function BrandsMarquee() {
  // Row 1: Famous AI & Generative Intelligence Tools
  const aiTools = [
    { name: 'OpenAI', domain: 'openai.com', tag: 'LLM Engine' },
    { name: 'ChatGPT', domain: 'chatgpt.com', tag: 'AI Search' },
    { name: 'Claude', domain: 'anthropic.com', tag: 'Reasoning AI' },
    { name: 'Perplexity AI', domain: 'perplexity.ai', tag: 'Answer Engine' },
    { name: 'Google Gemini', domain: 'google.com', tag: 'Multimodal AI' },
    { name: 'Midjourney', domain: 'midjourney.com', tag: 'Generative Media' },
    { name: 'Cursor AI', domain: 'cursor.com', tag: 'AI Engineering' },
    { name: 'ElevenLabs', domain: 'elevenlabs.io', tag: 'Voice AI' },
    { name: 'Make', domain: 'make.com', tag: 'AI Automation' },
    { name: 'v0', domain: 'v0.dev', tag: 'Generative UI' },
  ];
  
  // Row 2: World-Class Cloud, Web & Payment Infrastructure
  const techStack = [
    { name: 'Next.js', domain: 'nextjs.org', tag: 'React Framework' },
    { name: 'Vercel', domain: 'vercel.com', tag: 'Edge Network' },
    { name: 'Stripe', domain: 'stripe.com', tag: 'Payment Rails' },
    { name: 'AWS Cloud', domain: 'aws.amazon.com', tag: 'Cloud Compute' },
    { name: 'Google Cloud', domain: 'cloud.google.com', tag: 'Global DNS' },
    { name: 'Cloudflare', domain: 'cloudflare.com', tag: 'DDoS Defense' },
    { name: 'GitHub', domain: 'github.com', tag: 'CI/CD Pipeline' },
    { name: 'Supabase', domain: 'supabase.com', tag: 'Edge Database' },
    { name: 'Tailwind CSS', domain: 'tailwindcss.com', tag: 'Modern Styling' },
    { name: 'Resend', domain: 'resend.com', tag: 'Lead Dispatch' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-base-b/40 border-y border-base-c overflow-hidden relative z-10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-primary-color/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 sm:space-y-14 relative z-10">
        
        {/* Prominent Impact Header */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-base-b border border-primary-color/40 text-primary-color font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
            <Sparkle weight="fill" className="w-4 h-4 text-primary-color animate-pulse" />
            <span>Powered By Modern AI & Enterprise Cloud Infrastructure</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-content leading-tight">
            Integrated With <span className="text-primary-color">World-Class AI</span> & Tech Platforms
          </h2>
          
          <p className="font-sans text-sm sm:text-base md:text-lg text-text-content/70 leading-relaxed max-w-2xl mx-auto">
            We supercharge your social presence with cutting-edge AI integrations, top ranking websites, Fully optimized google buisness profile, and client acquisition funnels.
          </p>
        </div>

        <style>{`
          @keyframes marquee-fast {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-reverse-fast {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee-big {
            animation: marquee-fast 40s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-marquee-reverse-big {
            animation: marquee-reverse-fast 40s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-marquee-big:hover, .animate-marquee-reverse-big:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        {/* Big Dual Marquee Streams */}
        <div className="flex flex-col gap-6 sm:gap-8 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] py-2">
          
          {/* Row 1 - AI Tools Stream (Left) */}
          <div className="relative w-full overflow-hidden flex group">
            <div className="animate-marquee-big items-center gap-4 sm:gap-6 pl-4 sm:pl-6">
              {[...aiTools, ...aiTools, ...aiTools].map((tool, idx) => (
                <div 
                  key={`ai-${idx}`} 
                  className="flex items-center gap-3.5 sm:gap-4 px-5 sm:px-7 py-3.5 sm:py-4.5 rounded-2xl bg-base-b/90 border border-base-c hover:border-primary-color/70 hover:bg-base-b transition-all duration-300 group/item cursor-pointer shrink-0 shadow-md hover:shadow-primary-color/10 hover:-translate-y-1"
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-base-a border border-base-c flex items-center justify-center p-1.5 shrink-0 group-hover/item:border-primary-color/50 transition-colors">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://icon.horse/icon/${tool.domain}`}
                      alt={`${tool.name} logo`}
                      className="w-full h-full object-contain rounded-md filter grayscale group-hover/item:grayscale-0 group-hover/item:scale-110 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-left space-y-0.5">
                    <span className="font-heading font-bold text-base sm:text-xl text-text-content group-hover/item:text-primary-color tracking-tight transition-colors duration-300 block">
                      {tool.name}
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs text-text-content/50 uppercase tracking-wider block">
                      {tool.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Cloud & Web Stack Stream (Right) */}
          <div className="relative w-full overflow-hidden flex group">
            <div className="animate-marquee-reverse-big items-center gap-4 sm:gap-6 pl-4 sm:pl-6">
              {[...techStack, ...techStack, ...techStack].map((tool, idx) => (
                <div 
                  key={`tech-${idx}`} 
                  className="flex items-center gap-3.5 sm:gap-4 px-5 sm:px-7 py-3.5 sm:py-4.5 rounded-2xl bg-base-b/90 border border-base-c hover:border-primary-color/70 hover:bg-base-b transition-all duration-300 group/item cursor-pointer shrink-0 shadow-md hover:shadow-primary-color/10 hover:-translate-y-1"
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-base-a border border-base-c flex items-center justify-center p-1.5 shrink-0 group-hover/item:border-primary-color/50 transition-colors">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://icon.horse/icon/${tool.domain}`}
                      alt={`${tool.name} logo`}
                      className="w-full h-full object-contain rounded-md filter grayscale group-hover/item:grayscale-0 group-hover/item:scale-110 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-left space-y-0.5">
                    <span className="font-heading font-bold text-base sm:text-xl text-text-content group-hover/item:text-primary-color tracking-tight transition-colors duration-300 block">
                      {tool.name}
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs text-text-content/50 uppercase tracking-wider block">
                      {tool.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
