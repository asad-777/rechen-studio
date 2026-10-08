'use client';

import { useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';

const TargetCursor = ({
  targetSelector = '.cursor-target',
  hideDefaultCursor = true,
  cursorColor = '#14C38E',
}) => {
  const dotRef = useRef(null);
  const dotAnimRef = useRef(null);
  const circleRef = useRef(null);
  
  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768 || 'ontouchstart' in window;
  }, []);

  useEffect(() => {
    if (isMobile || typeof document === 'undefined') return;

    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    // Set initial positions off-screen or center to avoid visual jump
    gsap.set([dotRef.current, circleRef.current], { x: window.innerWidth / 2, y: window.innerHeight / 2 });

    // quickSetter for instant high-performance following
    const xMoveDot = gsap.quickSetter(dotRef.current, "x", "px");
    const yMoveDot = gsap.quickSetter(dotRef.current, "y", "px");

    // Rolling ball animation base setup (continuous slight pulse removed, now rotation based on movement)

    // Circle follows with a delay and elastic/back bounce
    const xMoveCircle = gsap.quickTo(circleRef.current, "x", { duration: 0.6, ease: "back.out(1.7)" });
    const yMoveCircle = gsap.quickTo(circleRef.current, "y", { duration: 0.6, ease: "back.out(1.7)" });

    let activeTarget = null;
    let isHovering = false;
    let lastX = window.innerWidth / 2;
    let currentRotation = 0;

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      
      // Dot always moves instantly
      xMoveDot(x);
      yMoveDot(y);
      
      if (!isHovering) {
        // Normal trailing
        xMoveCircle(x);
        yMoveCircle(y);
      } else if (activeTarget) {
        // When hovering a target, apply a slight magnetic pull towards the mouse, 
        // but anchored mostly to the center of the button.
        const rect = activeTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const magneticX = centerX + (x - centerX) * 0.15;
        const magneticY = centerY + (y - centerY) * 0.15;
        
        xMoveCircle(magneticX);
        yMoveCircle(magneticY);
      }
    };

    const onMouseOver = (e) => {
      const target = e.target.closest(targetSelector);
      if (target && target !== activeTarget) {
        activeTarget = target;
        isHovering = true;
        
        const rect = target.getBoundingClientRect();
        // Scale circle up slightly larger than the button
        const targetWidth = rect.width + 16; 
        const targetHeight = rect.height + 16;
        
        gsap.to(circleRef.current, {
          width: targetWidth,
          height: targetHeight,
          borderRadius: '24px', // slight pill shape if it's a button
          duration: 0.4,
          ease: "back.out(1.5)",
          backgroundColor: 'silver',
          opacity: 0.15,
          borderWidth: 0
        });
        
        // Hide the dot while hovering
        gsap.to(dotRef.current, {
          scale: 0,
          duration: 0.2
        });
      }
    };

    const onMouseOut = (e) => {
      if (activeTarget && (!e.relatedTarget || !activeTarget.contains(e.relatedTarget))) {
        activeTarget = null;
        isHovering = false;
        
        // Revert to normal circle (slightly bigger)
        gsap.to(circleRef.current, {
          width: 48, 
          height: 48,
          borderRadius: '50%',
          duration: 0.4,
          ease: "back.out(1.5)",
          backgroundColor: 'transparent',
          opacity: 1,
          borderWidth: 2
        });
        
        // Show the dot again
        gsap.to(dotRef.current, {
          scale: 1,
          duration: 0.2
        });
      }
    };

    const onMouseDown = () => {
      if (!isHovering) {
        gsap.to(circleRef.current, { scale: 0.8, duration: 0.2 });
      } else {
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
    };
  }, [isMobile, hideDefaultCursor, targetSelector, cursorColor]);

  if (isMobile || typeof document === 'undefined') return null;

  return createPortal(
    <>
      {/* Outer trailing circle with difference blend mode */}
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 pointer-events-none z-[2147483647] -translate-x-1/2 -translate-y-1/2"
        style={{ 
          willChange: 'transform, width, height, border-radius', 
          borderColor: 'white',
          mixBlendMode: 'difference'
        }}
      />
      {/* Inner fast dot wrapper with difference blend mode */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[2147483647] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white"
        style={{ 
          willChange: 'transform',
          mixBlendMode: 'difference'
        }}
      >
        <div 
          ref={dotAnimRef}
          className="w-full h-full rounded-full"
        />
      </div>
    </>,
    document.body
  );
};

export default TargetCursor;
