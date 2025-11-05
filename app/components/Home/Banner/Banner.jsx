"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import NewsTicker from "../../breaking/NewsTicker";

const carouselData = [
  {
    id: 1,
    image: "/banner/home-banner-4.webp",
    headline: "Ek Duniya Alag Si...",
    subheadline: "Because every age deserves new beginnings",
    description:
      "A Unique Senior Independent Living Community for the 55+ Generation",
  },
  {
    id: 2,
    image: "/banner/summer-adventure.webp",
    headline: "Plan Your Tour",
    subheadline: "Our Travel Services are live now",
    description: "Discover journeys crafted around your comfort, interests & dreams.",
  },
];

// ✅ Fast, smooth crossfade with no gaps
const slideVariants = {
  enter: { opacity: 0 },
  center: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
};

const textVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { y: 12, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(null);
  const intervalRef = useRef(null);
  const isTransitioningRef = useRef(false);

  // Auto-rotate slides with reduced interval
  const startAutoSwipe = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isTransitioningRef.current) {
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
      }
    }, 5000); // Reduced from 5000ms to 4000ms
  }, []);

  useEffect(() => {
    startAutoSwipe();
    return () => clearInterval(intervalRef.current);
  }, [startAutoSwipe]);

  // Preload next image
  useEffect(() => {
    const next = (currentSlide + 1) % carouselData.length;
    setNextSlide(next);
  }, [currentSlide]);

  const goToSlide = useCallback(
    (index) => {
      if (index === currentSlide || isTransitioningRef.current) return;
      isTransitioningRef.current = true;
      setCurrentSlide(index);
      startAutoSwipe();
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 400);
    },
    [currentSlide, startAutoSwipe]
  );

  return (
    <section className="w-full 2xl:h-[760px] lg:h-[560px] md:h-[460px] h-[380px] relative overflow-hidden">
      <div className="relative w-full 2xl:h-[680px] lg:h-[480px] md:h-[380px] h-[300px] overflow-hidden">
        {/* ✅ Preload next image invisibly */}
        {nextSlide !== null && nextSlide !== currentSlide && (
          <div className="absolute inset-0 pointer-events-none opacity-0">
            <Image
              src={carouselData[nextSlide].image}
              alt="preload"
              fill
              sizes="100vw"
              quality={100}
              priority
            />
          </div>
        )}

        {/* ✅ Smooth crossfade transition */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={carouselData[currentSlide].image}
              alt={carouselData[currentSlide].headline}
              fill
              sizes="100vw"
              quality={100}
              priority={currentSlide === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>

        {/* Content Layer */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="main_width w-full">
            <motion.div
              key={`content-${currentSlide}`}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="grid lg:grid-cols-[10px_1fr] md:grid-cols-[8px_1fr] grid-cols-[6px_1fr] lg:gap-8 gap-4 items-start"
            >
              <motion.div variants={itemVariants} className="w-full h-full origin-top bg_red" />
              <div className="text-white">
                <motion.h1
                  variants={itemVariants}
                  className="text-[#f4b01c] 2xl:text-[100px] xl:text-[70px] lg:text-[60px] md:text-[50px] text-[34px]"
                >
                  {carouselData[currentSlide].headline}
                </motion.h1>
                <motion.h2
                  variants={itemVariants}
                  className="text-white xl:text-[35px] md:text-[30px] mt-2 md:mt-0 text-[18px]"
                >
                  {carouselData[currentSlide].subheadline}
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="hidden md:block text-white xl:text-[24px] lg:text-[20px] md:text-[18px] mt-2 text-[16px] max-w-4xl"
                >
                  {carouselData[currentSlide].description}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="w-4 h-4 flex items-center justify-center rounded-full"
                aria-label={`Go to slide ${index + 1}`}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Ticker */}
      <div className="py-4 px-4 flex items-center justify-center">
        <NewsTicker />
      </div>
    </section>
  );
}





