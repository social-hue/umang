"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function NumberCounter({ target = 75, duration = 2000, className = "" }) {
  const ref = useRef(null);

  // Looser threshold + no margin (better mobile support)
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [displayValue, setDisplayValue] = useState(0);
  const startedRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const to = Math.round(Number(target) || 0);
    if ((!isInView && !startedRef.current) || startedRef.current) return;

    startedRef.current = true;

    const from = 0;
    if (to === from) {
      setDisplayValue(to);
      return;
    }

    const totalSteps = Math.abs(to - from);
    const minFrameMs = 16;
    const maxFrames = Math.max(1, Math.floor(duration / minFrameMs));

    let increment = 1;
    if (totalSteps > maxFrames) {
      increment = Math.ceil(totalSteps / maxFrames);
    }

    const effectiveSteps = Math.ceil(totalSteps / increment);
    const stepDuration = Math.max(minFrameMs, Math.floor(duration / effectiveSteps));

    let current = from;
    const direction = to > from ? 1 : -1;

    timerRef.current = setInterval(() => {
      current += direction * increment;

      if ((direction === 1 && current >= to) || (direction === -1 && current <= to)) {
        current = to;
        setDisplayValue(current);
        clearInterval(timerRef.current);
        timerRef.current = null;
        return;
      }

      setDisplayValue(current);
    }, stepDuration);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isInView, target, duration]);

  // 🔥 Fallback: ensure counter starts even if inView never triggers (mobile safe)
  useEffect(() => {
    const fallback = setTimeout(() => {
      if (!startedRef.current) {
        startedRef.current = true;
        setDisplayValue(Number(target));
      }
    }, 3000); // start after 3s if observer fails

    return () => clearTimeout(fallback);
  }, [target]);

  return (
    <span ref={ref} className={`${className} font-bold`}>
      {displayValue}
    </span>
  );
}
