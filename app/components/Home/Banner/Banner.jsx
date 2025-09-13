"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Button from "@/app/helpers/Button";
import NewsTicker from "../../breaking/NewsTicker";

// Carousel data with headlines for each slide
const carouselData = [
  {
    id: 1,
    image: "/banner.png",
    headline: "Ek Duniya Alag Si...",
    subheadline: "Because every age deserves new beginnings",
    description: "A Unique Senior Independent Living Community for the 55+ Generation"
  },
  {
    id: 2,
    image: "/blog1.jpg", // Empty for now
    headline: "Where Comfort Meets Community",
    subheadline: "Thoughtfully designed spaces for joyful living",
    description: "Experience luxury senior living with modern amenities and warm companionship"
  },
  {
    id: 3,
    image: "/lifestyle/grid/03.jpg", // Empty for now
    headline: "Wellness & Wellness",
    subheadline: "Your health is our priority",
    description: "Round-the-clock healthcare services and wellness programs designed for seniors"
  },
  {
    id: 4,
    image: "/lifeAt/lifrat1.jpg", // Empty for now
    headline: "Culinary Delights",
    subheadline: "Nutritious meals that taste like home",
    description: "Wholesome, flavorful meals tailored to senior health and taste preferences"
  },
  {
    id: 5,
    image: "/lifeAt/lifrat6.jpg", // Empty for now
    headline: "Active Lifestyle",
    subheadline: "Stay engaged, stay happy",
    description: "Fitness centers, recreational activities, and social events for an active lifestyle"
  },
  {
    id: 6,
    image: "/lifeAt/lifrat8.jpg", // Empty for now
    headline: "Peace of Mind",
    subheadline: "Security and care you can trust",
    description: "24/7 security, emergency response, and comprehensive care services"
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const textVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set([0])); // Pre-load first image
  const intervalRef = useRef(null);

  // Lazy load images
  useEffect(() => {
    const preloadImage = (src, index) => {
      if (src && !loadedImages.has(index)) {
        const img = new Image();
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, index]));
        };
        img.src = src;
      }
    };

    // Preload current and next image
    const currentImage = carouselData[currentSlide].image;
    const nextIndex = (currentSlide + 1) % carouselData.length;
    const nextImage = carouselData[nextIndex].image;

    preloadImage(currentImage, currentSlide);
    preloadImage(nextImage, nextIndex);
  }, [currentSlide, loadedImages]);

  // Function to start the auto-swipe timer
  const startAutoSwipe = () => {
    // Clear existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Start new interval
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 4000);
  };

  // Auto-swipe every 4 seconds
  useEffect(() => {
    startAutoSwipe();
    
    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    
    // Reset the timer when user manually navigates
    startAutoSwipe();
  };

  return (
    <section className="w-full lg:h-[560px] md:h-[460px] h-[360px] relative overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full lg:h-[450px] md:h-[350px] h-[250px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image with lazy loading */}
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-500"
              style={{
                backgroundImage: carouselData[currentSlide].image 
                  ? `url(${carouselData[currentSlide].image})` 
                  : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                opacity: loadedImages.has(currentSlide) ? 1 : 0.7
              }}
            />
            
            {/* Loading indicator for non-loaded images */}
            {carouselData[currentSlide].image && !loadedImages.has(currentSlide) && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            
            {/* Light Black Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="main_width w-full">
            <motion.div
              key={`content-${currentSlide}`}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="grid lg:grid-cols-[10px_1fr] md:grid-cols-[8px_1fr] grid-cols-[6px_1fr] lg:gap-8 gap-4 items-start"
            >
              {/* Red Bar */}
              <motion.div
                variants={itemVariants}
                className="w-full h-full origin-top bg_red"
              />

              {/* Text Content */}
              <div className="text-white">
                <motion.h1
                  variants={itemVariants}
                  className="light_green 2xl:text-[110px] xl:text-[90px] lg:text-[80px] md:text-[60px] text-[40px] 2xl:leading-[0.82] xl:leading-[0.89] lg:leading-[0.875] md:leading-[1] leading-[1.25] 2xl:tracking-[-3.45px] tracking-[-2.45px]"
                >
                  {carouselData[currentSlide].headline}
                </motion.h1>

                <motion.h2
                  variants={itemVariants}
                  className="heading_font text-white xl:text-[50px] lg:text-[40px] md:text-[30px] text-[20px] xl:leading-[60px] pt-4 2xl:pt-10"
                >
                  {carouselData[currentSlide].subheadline}
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-white/90 xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px] xl:leading-[35px] pt-4 max-w-4xl"
                >
                  {carouselData[currentSlide].description}
                </motion.p>

                {/* <motion.div
                  variants={itemVariants}
                  className="mt-10"
                >
                  <Button
                    design={`group relative border-2 cursor-pointer inline-flex items-center justify-center overflow-hidden 
      rounded-[10px] bg-black px-8 md:py-2 py-3 uppercase heading_font text-white 
      md:text-[18px] text-[12px] lg:text-[25px] font-semibold transition-all duration-500
      hover:bg-white hover:text-black duration-700 hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)]
      active:scale-95 transform`}
                    content={" join the community"}
                    type={" Join the community"}
                  />
                </motion.div> */}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="py-4 relative">
        <div className="flex item-center justify-center"><NewsTicker /></div>
      </div>
    </section>
  );
}
