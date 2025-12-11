"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function NumberCounter({ target = 75, duration = 2000, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // START AT TARGET VALUE to prevent layout shift
  const targetValue = Math.round(Number(target) || 0);
  const [displayValue, setDisplayValue] = useState(targetValue);
  const [opacity, setOpacity] = useState(0);
  
  const startedRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const to = targetValue;

    // Only start once when it becomes visible
    if (!isInView || startedRef.current) return;
    startedRef.current = true;

    // Immediately fade in (no layout shift since we start at target)
    setOpacity(1);

    // Reset to 0 and begin animation
    const from = 0;
    setDisplayValue(from);

    if (to === from) {
      return;
    }

    const totalSteps = Math.abs(to - from);
    const minFrameMs = 16; // approx 60fps frame
    const maxFrames = Math.max(1, Math.floor(duration / minFrameMs));

    // If we have more steps than available frames, increment by >1 each tick
    let increment = 1;
    if (totalSteps > maxFrames) {
      increment = Math.ceil(totalSteps / maxFrames);
    }

    // Effective number of ticks we'll perform
    const effectiveSteps = Math.ceil(totalSteps / increment);
    const stepDuration = Math.max(minFrameMs, Math.floor(duration / effectiveSteps));

    let current = from;
    const direction = to > from ? 1 : -1;

    timerRef.current = setInterval(() => {
      current += direction * increment;

      // Prevent overshoot
      if ((direction === 1 && current >= to) || (direction === -1 && current <= to)) {
        current = to;
        setDisplayValue(current);
        clearInterval(timerRef.current);
        timerRef.current = null;
        return;
      }

      setDisplayValue(current);
    }, stepDuration);

    // Cleanup if component unmounts during animation
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isInView, targetValue, duration]);

  // Safety cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <span 
      ref={ref} 
      className={`${className} font-bold`}
      style={{
        opacity,
        transition: 'opacity 0.3s ease-in',
        fontVariantNumeric: 'tabular-nums', // Prevent digit width changes
        display: 'inline-block',
        minWidth: '1ch' // Ensure space is always reserved
      }}
    >
      {displayValue.toLocaleString()}
    </span>
  );
}