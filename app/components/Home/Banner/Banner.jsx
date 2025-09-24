"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import NewsTicker from "../../breaking/NewsTicker";

// Carousel data
const carouselData = [
  {
    id: 1,
    image: "/something4.jpg",
    headline: "Ek Duniya Alag Si...",
    subheadline: "Because every age deserves new beginnings",
    description: "A Unique Senior Independent Living Community for the 55+ Generation"
  },
  {
    id: 4,
    image: "/something7.jpg",
    headline: "Wellness & Healthcare",
    subheadline: "Your health is our priority",
    description: "Round-the-clock healthcare services and wellness programs designed for seniors"
  },
  {
    id: 5,
    image: "/something5.png",
    headline: "Active Lifestyle",
    subheadline: "Stay engaged, stay happy",
    description: "Fitness centers, recreational activities, and social events for an active lifestyle"
  },
  {
    id: 6,
    image: "/something6.jpg",
    headline: "Peace of Mind",
    subheadline: "Security and care you can trust",
    description: "24/7 security, emergency response, and comprehensive care services"
  }
];

// Variants for sliding animations - optimized for performance
const slideVariants = {
  enter: (direction) => ({ 
    x: direction > 0 ? "100%" : "-100%", 
    opacity: 0,
    scale: 1.05 // Slight scale for smoother transition
  }),
  center: { 
    zIndex: 1, 
    x: 0, 
    opacity: 1,
    scale: 1
  },
  exit: (direction) => ({ 
    zIndex: 0, 
    x: direction < 0 ? "100%" : "-100%", 
    opacity: 0,
    scale: 0.95
  })
};

// Optimized text animation with reduced complexity
const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  const imagePreloadRef = useRef(new Map());

  // Preload all images for instant display
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = carouselData.map((item, index) => {
        return new Promise((resolve, reject) => {
          if (imagePreloadRef.current.has(item.image)) {
            resolve(item.image);
            return;
          }

          const img = new window.Image();
          
          // Set loading priority
          if (index === 0) {
            img.fetchPriority = 'high';
          } else {
            img.fetchPriority = 'low';
          }
          
          img.onload = () => {
            imagePreloadRef.current.set(item.image, img);
            setImagesLoaded(prev => new Set([...prev, item.image]));
            resolve(item.image);
          };
          
          img.onerror = () => {
            console.warn(`Failed to preload image: ${item.image}`);
            reject(new Error(`Failed to load ${item.image}`));
          };
          
          // Start loading with optimized parameters
          img.src = item.image;
          img.decoding = 'async';
          img.loading = index === 0 ? 'eager' : 'lazy';
        });
      });

      // Load first image immediately, others in background
      try {
        await imagePromises[0]; // Wait for first image
        Promise.allSettled(imagePromises.slice(1)); // Load others without blocking
      } catch (error) {
        console.warn('Error preloading first image:', error);
      }
    };

    preloadImages();
  }, []);

  // Optimized auto-slide with transition state management
  useEffect(() => {
    startAutoSwipe();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startAutoSwipe = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      if (!isTransitioning) {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
      }
    }, 4000);
  }, [isTransitioning]);

  const goToSlide = useCallback((index) => {
    if (index === currentSlide || isTransitioning) return;
    
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    startAutoSwipe();
  }, [currentSlide, isTransitioning, startAutoSwipe]);

  // Handle transition state
  const handleAnimationStart = useCallback(() => {
    setIsTransitioning(true);
  }, []);

  const handleAnimationComplete = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  // Generate optimized blur data URL
  const generateBlurDataURL = (width = 10, height = 10) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    
    // Create a simple gradient blur placeholder
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#1a1a1a');
    gradient.addColorStop(1, '#2a2a2a');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    return canvas.toDataURL('image/jpeg', 0.1);
  };

  return (
    <section className="w-full 2xl:h-[760px] lg:h-[560px] md:h-[460px] h-[380px] relative overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full 2xl:h-[680px] lg:h-[480px] md:h-[380px] h-[300px] overflow-hidden">
        <AnimatePresence 
          initial={false} 
          custom={direction}
          onExitComplete={handleAnimationComplete}
        >
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            onAnimationStart={handleAnimationStart}
            onAnimationComplete={handleAnimationComplete}
            transition={{
              x: { 
                type: "tween", 
                duration: 0.5, 
                ease: [0.25, 0.1, 0.25, 1] // Custom cubic-bezier for smooth animation
              },
              opacity: { duration: 0.3 },
              scale: { duration: 0.5, ease: "easeOut" }
            }}
            className="absolute inset-0 w-full h-full"
            style={{ willChange: 'transform, opacity' }} // Optimize for animations
          >
            {/* Optimized Background Image */}
            <div className="absolute inset-0">
              <Image
                src={carouselData[currentSlide].image}
                alt={carouselData[currentSlide].headline}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                priority={currentSlide === 0}
                loading={currentSlide === 0 ? "eager" : "lazy"}
                quality={85} // Slightly reduced for faster loading
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh//Z"
                className="object-cover"
                style={{
                  transform: 'translate3d(0, 0, 0)', // Force hardware acceleration
                  backfaceVisibility: 'hidden' // Prevent flickering
                }}
                onLoad={() => {
                  // Additional optimization: mark image as loaded
                  if (typeof window !== 'undefined') {
                    const img = document.querySelector(`img[src="${carouselData[currentSlide].image}"]`);
                    if (img) {
                      img.style.opacity = '1';
                    }
                  }
                }}
              />
              
              {/* Overlay with CSS optimization */}
              <div 
                className="absolute inset-0 bg-black/40" 
                style={{ 
                  willChange: 'auto',
                  backfaceVisibility: 'hidden'
                }} 
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay - Optimized animations */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="main_width w-full">
            <motion.div
              key={`content-${currentSlide}`}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="grid lg:grid-cols-[10px_1fr] md:grid-cols-[8px_1fr] grid-cols-[6px_1fr] lg:gap-8 gap-4 items-start"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Red Bar */}
              <motion.div
                variants={itemVariants}
                className="w-full h-full origin-top bg_red"
                style={{ willChange: 'transform, opacity' }}
              />

              {/* Text Content */}
              <div className="text-white">
                <motion.h1
                  variants={itemVariants}
                  className="text-[#e8993e] 2xl:text-[110px] xl:text-[90px] lg:text-[80px] md:text-[60px] text-[40px] 2xl:leading-[0.82] xl:leading-[0.89] lg:leading-[0.875] md:leading-[1] leading-[1.25] 2xl:tracking-[-3.45px] tracking-[-2.45px]"
                  style={{ willChange: 'transform, opacity' }}
                >
                  {carouselData[currentSlide].headline}
                </motion.h1>

                <motion.h2
                  variants={itemVariants}
                  className="heading_font text-white xl:text-[50px] lg:text-[40px] md:text-[30px] text-[20px] xl:leading-[60px] pt-4 2xl:pt-10"
                  style={{ willChange: 'transform, opacity' }}
                >
                  {carouselData[currentSlide].subheadline}
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-white/90 xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px] xl:leading-[35px] pt-4 max-w-4xl"
                  style={{ willChange: 'transform, opacity' }}
                >
                  {carouselData[currentSlide].description}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Optimized Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                } ${isTransitioning ? 'pointer-events-none' : ''}`}
                style={{ 
                  willChange: 'transform, background-color',
                  transform: index === currentSlide ? 'scale(1.25)' : 'scale(1)'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* News Ticker */}
      <div className="py-4 px-4">
        <div className="flex item-center justify-center">
          <NewsTicker />
        </div>
      </div>
    </section>
  );
}