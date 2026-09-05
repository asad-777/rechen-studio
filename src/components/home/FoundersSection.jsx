'use client';

import React from 'react';
import Image from 'next/image';

export default function FoundersSection() {
  const founders = [
    {
      name: "Aris James ",
      role: "Co-Founder & Technical Lead",
      image: "/founders/founder1.png", // Replace with your image path (e.g., /founders/founder1.jpg)
    },
    {
      name: "Mathew James",
      role: "Co-Founder & Head of Sales",
      image: "/founders/founder3.png", // Replace with your image path (e.g., /founders/founder2.jpg)
    },
  ];

  return (
    <section id="founders" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-text-content leading-tight">
          Meet the Minds Behind <br className="hidden sm:inline" />
          <span className="text-primary-color">Araa Soft</span>
        </h2>
      </div>

      {/* Founders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 max-w-3xl mx-auto">
        {founders.map((founder, idx) => (
          <div
            key={idx}
            className="group flex flex-col items-center text-center space-y-5"
          >
            {/* Framed Circular Portrait Container */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 border-2 border-primary-color/40 group-hover:border-primary-color bg-base-b shadow-lg transition-all duration-300 flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-base-a border border-base-c/80 flex items-center justify-center">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 640px) 192px, 224px"
                  className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Founder Name & Tagline */}
            <div className="space-y-1.5">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text-content tracking-tight group-hover:text-primary-color transition-colors">
                {founder.name}
              </h3>
              <p className="font-mono text-xs sm:text-sm font-semibold text-primary-color uppercase tracking-wider">
                {founder.role}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
