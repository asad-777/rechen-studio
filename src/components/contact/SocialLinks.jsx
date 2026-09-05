'use client';

import React from 'react';
import { 
  LinkedinLogo, 
  TwitterLogo, 
  GithubLogo, 
  InstagramLogo, 
  EnvelopeSimple, 
  DiscordLogo, 
  ArrowUpRight
} from '@phosphor-icons/react';

export default function SocialLinks() {
  const socials = [
    {
      platform: "LinkedIn",
      handle: "@araa-soft",
      description: "Connect with our engineering principals, discover career opportunities, and read deep technical breakdowns.",
      icon: LinkedinLogo,
      href: "https://linkedin.com",
      color: "text-primary-a border-base-3a bg-base-1a"
    },
    {
      platform: "Twitter / X",
      handle: "@araa_dev",
      description: "Daily UI/UX inspiration, micro-animation snippets, Next.js architecture tips, and real-time studio updates.",
      icon: TwitterLogo,
      href: "https://twitter.com",
      color: "text-text-black border-base-3a bg-base-1a"
    },
    {
      platform: "GitHub",
      handle: "github.com/araa-soft",
      description: "Explore our open-source design systems, Tailwind animation libraries, and starter React configurations.",
      icon: GithubLogo,
      href: "https://github.com",
      color: "text-primary-a border-base-3a bg-base-1a"
    },
    {
      platform: "Instagram & Dribbble",
      handle: "@araa.soft",
      description: "Curated visual gallery of high-fidelity mockups, glassmorphic prototypes, and Behind-the-Scenes studio culture.",
      icon: InstagramLogo,
      href: "https://instagram.com",
      color: "text-text-black border-base-3a bg-base-1a"
    }
  ];

  return (
    <div className="space-y-6 transition-colors duration-300">
      <div className="space-y-2">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text-black tracking-tight">
          Our Official Social Channels
        </h3>
        <p className="font-sans text-sm text-text-black/80">
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
              className="group p-6 rounded-3xl bg-base-2a/70 hover:bg-base-2a border border-base-3a hover:border-primary-a transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${social.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <Icon weight="fill" className="w-6 h-6" />
                </div>
                <div className="w-9 h-9 rounded-full bg-base-1a border border-base-3a flex items-center justify-center text-text-black/70 group-hover:text-text-white group-hover:bg-primary-a group-hover:border-primary-a transition-all duration-200 shadow-sm">
                  <ArrowUpRight weight="bold" className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <h4 className="font-heading text-lg font-bold text-text-black group-hover:text-primary-a transition-colors">
                    {social.platform}
                  </h4>
                  <span className="font-mono text-[11px] text-text-black/80 font-bold bg-base-1a px-2 py-0.5 rounded-md border border-base-3a">
                    {social.handle}
                  </span>
                </div>
                <p className="font-sans text-xs text-text-black/80 leading-relaxed">
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
