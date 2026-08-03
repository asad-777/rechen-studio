'use client';

import React from 'react';
import { 
  LinkedinLogo, 
  TwitterLogo, 
  GithubLogo, 
  InstagramLogo, 
  EnvelopeSimple, 
  DiscordLogo, 
  ArrowUpRight,
  Sparkle
} from '@phosphor-icons/react';

export default function SocialLinks() {
  const socials = [
    {
      platform: "LinkedIn",
      handle: "@rechen-studio",
      description: "Connect with our engineering principals, discover career opportunities, and read deep technical breakdowns.",
      icon: LinkedinLogo,
      href: "https://linkedin.com",
      accent: "from-blue-600 to-indigo-700",
      color: "text-blue-400 border-blue-500/20 bg-blue-500/10"
    },
    {
      platform: "Twitter / X",
      handle: "@rechen_dev",
      description: "Daily UI/UX inspiration, micro-animation snippets, Next.js architecture tips, and real-time studio updates.",
      icon: TwitterLogo,
      href: "https://twitter.com",
      accent: "from-slate-700 to-slate-900",
      color: "text-slate-300 border-slate-500/20 bg-slate-500/10"
    },
    {
      platform: "GitHub",
      handle: "github.com/rechen-studio",
      description: "Explore our open-source design systems, Tailwind animation libraries, and starter React configurations.",
      icon: GithubLogo,
      href: "https://github.com",
      accent: "from-violet-700 to-slate-950",
      color: "text-violet-400 border-violet-500/20 bg-violet-500/10"
    },
    {
      platform: "Instagram & Dribbble",
      handle: "@rechen.studio",
      description: "Curated visual gallery of high-fidelity mockups, glassmorphic prototypes, and Behind-the-Scenes studio culture.",
      icon: InstagramLogo,
      href: "https://instagram.com",
      accent: "from-pink-600 via-rose-600 to-amber-600",
      color: "text-pink-400 border-pink-500/20 bg-pink-500/10"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <span className="font-mono text-xs uppercase tracking-widest font-semibold text-pink-400 flex items-center gap-2">
          <Sparkle weight="fill" className="w-4 h-4 text-pink-400" />
          <span>Connect Across Ecosystems</span>
        </span>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Our Official Social Channels
        </h3>
        <p className="font-sans text-sm text-slate-400">
          Follow our ongoing research, UI discoveries, and development progress across our active communities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socials.map((social, idx) => {
          const Icon = social.icon;
          return (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-3xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${social.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon weight="fill" className="w-6 h-6" />
                </div>
                <div className="w-9 h-9 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-violet-600 group-hover:border-violet-500 transition-all duration-200">
                  <ArrowUpRight weight="bold" className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <h4 className="font-heading text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {social.platform}
                  </h4>
                  <span className="font-mono text-[11px] text-slate-400 font-semibold bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800">
                    {social.handle}
                  </span>
                </div>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  {social.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
