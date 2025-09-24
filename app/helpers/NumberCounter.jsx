"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * NumberCounter
 * Props:
 * - target: number to count to (defaults to 75)
 * - duration: total animation duration in milliseconds (defaults to 2000)
 * - className: optional className for styling
 *
 * This implementation guarantees a smooth, linear, monotonic count
 * and avoids overshoot/bouncing.
 */
export function NumberCounter({ target = 75, duration = 2000, className = "" }) {
  const ref = useRef(null);
  // FIX: The "margin" prop has been removed to ensure the animation
  // triggers as soon as the element enters the viewport on all devices.
  const isInView = useInView(ref, { once: true });

  const [displayValue, setDisplayValue] = useState(0);
  const startedRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    // Ensure numeric integer target
    const to = Math.round(Number(target) || 0);

    // Only start once (or when it becomes visible)
    if (!isInView || startedRef.current) return;
    startedRef.current = true;

    const from = 0; // start from 0 (changeable if you want different start)
    if (to === from) {
      setDisplayValue(to);
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
  }, [isInView, target, duration]);

  // Safety cleanup on unmount (extra)
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <span ref={ref} className={`${className} font-bold`}>
      {displayValue}
    </span>
  );
}