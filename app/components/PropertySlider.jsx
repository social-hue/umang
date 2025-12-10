"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

const PropertySlider = ({ listings = [] }) => {
  const x = useMotionValue(0);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const totalWidth = listings.length * 360; // approximate width per card

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          x: [0, -totalWidth],
          transition: {
            ease: "linear",
            duration: listings.length * 16, // controls speed
          },
        });
        x.set(0); // reset instantly
      }
    };
    animate();
  }, [controls, x, totalWidth, listings.length]);

  const handleDragStart = () => controls.stop();
  const handleDragEnd = () => controls.start({
    x: [x.get(), -totalWidth],
    transition: { ease: "linear", duration: listings.length * 4 },
  });

  return (
    <div className="relative w-full py-6 overflow-hidden mb-6 select-none">
      <motion.div
        ref={containerRef}
        className="flex cursor-grab active:cursor-grabbing"
        style={{ x }}
        animate={controls}
        drag="x"
        dragConstraints={{ left: -totalWidth, right: 0 }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {[...listings, ...listings].map((item, index) => (
          <div
            key={index}
            className="relative shrink-0 w-[260px] sm:w-[320px] md:w-[360px] h-[220px] rounded-xl overflow-hidden mx-2 bg-gray-100 shadow-md"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.city}
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {item.city}
              </h3>
              <p className="text-md md:text-base text-zinc-300 mt-1 tracking-wide">
                Coming Soon
              </p>
            </div>
          </div>
        ))}
      </motion.div>
      {/* Fade edges */}
      <div className="pointer-events-none absolute top-0 left-0 w-8 h-full bg-linear-to-r from-white via-white/60 to-transparent"></div>
      <div className="pointer-events-none absolute top-0 right-0 w-8 h-full bg-linear-to-l from-white via-white/60 to-transparent"></div>
    </div>
  );
};

export default PropertySlider;
