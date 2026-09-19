"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function StackedCard({ children, containerClassName = '', innerClassName = '', id }) {
  const targetRef = useRef(null);

  // Track the scroll progress of this specific section.
  // 'start start' means when the top of this section hits the top of the viewport.
  // 'end start' means when the bottom of this section hits the top of the viewport 
  // (which corresponds to 100vh of scroll distance since the section is 100vh tall).
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Calculate the scale and opacity. As the user scrolls past this stuck element, 
  // it physically scales down and fades out, simulating being pushed back into a deck.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section 
      id={id}
      ref={targetRef} 
      className={`sticky top-0 h-[100svh] w-full z-0 overflow-hidden bg-black ${containerClassName}`}
    >
      <motion.div 
        style={{ scale, opacity }} 
        className={`h-full w-full origin-top ${innerClassName}`}
      >
        {children}
      </motion.div>
    </section>
  );
}
