'use client';

import { useEffect, useRef, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { ArrowUpRight } from '@phosphor-icons/react';

const TargetCursor = ({
  targetSelector = '.cursor-target, input, textarea',
  hideDefaultCursor = true,
}) => {
  const dotRef = useRef(null);
  const dotAnimRef = useRef(null);
  const iconRef = useRef(null);
  const circleRef = useRef(null);
  const cornersRef = useRef(null);
  
  const [mounted, setMounted] = useState(false);
  
  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768 || 'ontouchstart' in window;
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || isMobile || typeof document === 'undefined') return;

    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
      
      const styleEl = document.createElement('style');
      styleEl.id = 'target-cursor-global-style';
      styleEl.innerHTML = `* { cursor: none !important; }`;
      document.head.appendChild(styleEl);
    }

    gsap.set([dotRef.current, circleRef.current], { x: window.innerWidth / 2, y: window.innerHeight / 2 });
    if (cornersRef.current) {
      gsap.set(cornersRef.current.children, { x: window.innerWidth / 2, y: window.innerHeight / 2 });
    }

    const xMoveDot = gsap.quickSetter(dotRef.current, "x", "px");
    const yMoveDot = gsap.quickSetter(dotRef.current, "y", "px");

    const xMoveCircle = gsap.quickTo(circleRef.current, "x", { duration: 0.6, ease: "back.out(1.7)" });
    const yMoveCircle = gsap.quickTo(circleRef.current, "y", { duration: 0.6, ease: "back.out(1.7)" });

    // Looping color animation for the dot
    gsap.to(dotAnimRef.current, {
      keyframes: [
        { backgroundColor: '#ffffff', duration: 1.5 },
        { backgroundColor: '#14C38E', duration: 1.5 }, // primary
        { backgroundColor: '#15803d', duration: 1.5 }, // secondary
        { backgroundColor: '#ffffff', duration: 1.5 }
      ],
      repeat: -1,
      ease: "linear"
    });

    let activeTarget = null;
    let isHovering = false;
    let currentType = null;

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      
      xMoveDot(x);
      yMoveDot(y);
      
      if (!isHovering) {
        xMoveCircle(x);
        yMoveCircle(y);
      } else if (activeTarget) {
        const rect = activeTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        if (currentType === 'link' || currentType === 'box') {
          const magneticX = centerX + (x - centerX) * 0.15;
          const magneticY = centerY + (y - centerY) * 0.15;
          xMoveCircle(magneticX);
          yMoveCircle(magneticY);
        }
      }
    };

    const getCursorType = (target) => {
      const tag = target.tagName.toUpperCase();
      if (tag === 'INPUT' || tag === 'TEXTAREA' || target.hasAttribute('aria-expanded')) return 'box';
      if (tag === 'A' || tag === 'BUTTON' || target.closest('a') || target.closest('button')) return 'link';
      return 'box'; 
    };

    const onMouseOver = (e) => {
      const target = e.target.closest(targetSelector);
      if (target && target !== activeTarget) {
        activeTarget = target;
        isHovering = true;
        currentType = getCursorType(target);
        
        const rect = target.getBoundingClientRect();
        
        if (currentType === 'link') {
          const targetWidth = rect.width + 16; 
          const targetHeight = rect.height + 16;
          
          gsap.to(circleRef.current, {
            width: targetWidth,
            height: targetHeight,
            scale: 1,
            borderRadius: '8px',
            borderWidth: 0,
            backgroundColor: 'white',
            opacity: 0.15,
            mixBlendMode: 'normal',
            duration: 0.4,
            ease: "back.out(1.5)",
            overwrite: 'auto'
          });
          
          gsap.to(dotAnimRef.current, { scale: 0, duration: 0.2, overwrite: 'auto' });
          gsap.to(iconRef.current, { scale: 1, opacity: 1, duration: 0.2, delay: 0.1, overwrite: 'auto' });
        }
        else if (currentType === 'box') {
          gsap.to(circleRef.current, { scale: 0, opacity: 0, duration: 0.2, overwrite: 'auto' });
          // inner dot stays visible for box
          
          const corners = Array.from(cornersRef.current.children);
          const bw = 2; // border width
          const cs = 12; // corner size
          
          const positions = [
            { x: rect.left - bw, y: rect.top - bw },
            { x: rect.right + bw - cs, y: rect.top - bw },
            { x: rect.right + bw - cs, y: rect.bottom + bw - cs },
            { x: rect.left - bw, y: rect.bottom + bw - cs }
          ];
          
          corners.forEach((corner, i) => {
            gsap.to(corner, {
              x: positions[i].x,
              y: positions[i].y,
              opacity: 1,
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
              overwrite: 'auto'
            });
          });
        }
      }
    };

    const onMouseOut = (e) => {
      if (activeTarget && (!e.relatedTarget || !activeTarget.contains(e.relatedTarget))) {
        
        activeTarget = null;
        isHovering = false;
        
        gsap.to(circleRef.current, {
          width: 48, 
          height: 48,
          scale: 1,
          borderRadius: '50%',
          borderWidth: 2,
          backgroundColor: 'transparent',
          opacity: 1,
          mixBlendMode: 'difference',
          duration: 0.4,
          ease: "back.out(1.5)",
          overwrite: 'auto'
        });
        
        gsap.to(dotAnimRef.current, { scale: 1, opacity: 1, duration: 0.2, overwrite: 'auto' });
        gsap.to(iconRef.current, { scale: 0, opacity: 0, duration: 0.1, overwrite: 'auto' });
        
        const corners = Array.from(cornersRef.current.children);
        corners.forEach(corner => {
          gsap.to(corner, { opacity: 0, scale: 0, duration: 0.2, overwrite: 'auto' });
        });
        
        currentType = null;
      }
    };

    const onMouseDown = () => {
      if (!isHovering) {
        gsap.to(circleRef.current, { scale: 0.8, duration: 0.2 });
      } else if (currentType === 'link') {
        gsap.to(circleRef.current, { scale: 0.95, duration: 0.2 });
      }
    };
    
    const onMouseUp = () => {
      gsap.to(circleRef.current, { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.4)" });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = 'auto';
      
      const styleEl = document.getElementById('target-cursor-global-style');
      if (styleEl) {
        styleEl.remove();
      }
    };
  }, [mounted, isMobile, hideDefaultCursor, targetSelector]);

  if (!mounted || isMobile || typeof document === 'undefined') return null;

  return createPortal(
    <>
      {/* Target Corners (Box type) */}
      <div ref={cornersRef} className="fixed top-0 left-0 w-0 h-0 pointer-events-none z-[2147483646]">
        <div className="absolute top-0 left-0 w-3 h-3 border-[2px] border-r-0 border-b-0 border-white mix-blend-difference opacity-0 scale-0" style={{ willChange: 'transform, opacity' }} />
        <div className="absolute top-0 left-0 w-3 h-3 border-[2px] border-l-0 border-b-0 border-white mix-blend-difference opacity-0 scale-0" style={{ willChange: 'transform, opacity' }} />
        <div className="absolute top-0 left-0 w-3 h-3 border-[2px] border-l-0 border-t-0 border-white mix-blend-difference opacity-0 scale-0" style={{ willChange: 'transform, opacity' }} />
        <div className="absolute top-0 left-0 w-3 h-3 border-[2px] border-r-0 border-t-0 border-white mix-blend-difference opacity-0 scale-0" style={{ willChange: 'transform, opacity' }} />
      </div>

      {/* Outer trailing circle (or square pill) */}
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 pointer-events-none z-[2147483647] -translate-x-1/2 -translate-y-1/2"
        style={{ 
          willChange: 'transform, width, height, border-radius', 
          borderColor: 'white',
          mixBlendMode: 'difference'
        }}
      />

      {/* Inner dot and Icon */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[2147483647] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{ willChange: 'transform' }}
      >
        <div 
          ref={dotAnimRef}
          className="absolute w-2 h-2 rounded-full bg-white mix-blend-difference"
        />
        <div 
          ref={iconRef}
          className="absolute text-white mix-blend-difference opacity-0 scale-0"
        >
          <ArrowUpRight weight="bold" className="w-5 h-5" />
        </div>
      </div>
    </>,
    document.body
  );
};

export default TargetCursor;
