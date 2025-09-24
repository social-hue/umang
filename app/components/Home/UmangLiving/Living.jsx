"use client";
import { facilities } from "@/app/StaticData/Living";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Living() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  const totalCount = facilities.length;

  // ✅ Responsive visible count
  useEffect(() => {
    const updateVisible = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      if (mobile) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else if (window.innerWidth < 1280) setVisibleCount(3);
      else setVisibleCount(4);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxStartIndex = Math.max(0, totalCount - visibleCount);
  const handlePrev = () => setStartIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setStartIndex((prev) => Math.min(maxStartIndex, prev + 1));

  return (
    <section className="w-full relative overflow-hidden py-6 2xl:py-12 md:py-10 lg:py-10 bg-white">
      <div className="main_width relative z-10">
        {/* Heading */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-10 px-4"
        >
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-zinc-900 mb-4 md:mb-6 lg:mb-6">
            What does Umang Offer ?
          </h2>
          <p className="text-lg md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
            Umang Living offers a comprehensive ecosystem for modern senior living.
            With townships in 75+ cities, lifestyle experiences, healthcare and curated travel,
            we are your partner for a secure and enriching lifestyle.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex items-center justify-center">
          {isMobile ? (
            // ✅ Mobile: simple list
            <div className="flex-1 max-w-6xl w-full px-4">
              {facilities.map((item, i) => (
                <motion.div
                  key={item.id}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="w-full mb-4"
                >
                  <div className="bg-white rounded-lg overflow-hidden transition-all duration-500 border border-gray-200 h-full flex flex-col group">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        priority={i < 2}
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {item.tagline}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <>
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                disabled={startIndex === 0 || totalCount <= visibleCount}
                className="hidden sm:flex p-3 rounded-full bg-white text-gray-700 shadow-lg hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 mr-3 sm:mr-6"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Track */}
              <div className="flex overflow-hidden flex-1 max-w-6xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out will-change-transform"
                  style={{
                    transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
                    width: `${(totalCount * 100) / visibleCount}%`,
                  }}
                >
                  {facilities.map((item, i) => (
                    <motion.div
                      key={item.id}
                      variants={fadeIn}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="flex-none px-2 sm:px-3"
                      style={{ width: `${100 / visibleCount}%` }}
                    >
                      <div className="bg-white rounded-lg overflow-hidden transition-all duration-500 border border-gray-200 h-full flex flex-col group">
                        <div className="relative h-32 md:h-40 overflow-hidden">
                          <Image
                            src={item.icon}
                            alt={item.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            priority={i < 2}
                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                            {item.tagline}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                disabled={startIndex >= maxStartIndex || totalCount <= visibleCount}
                className="hidden sm:flex p-3 rounded-full bg-white text-gray-700 shadow-lg hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 ml-3 sm:ml-6"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </>
          )}
        </div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <a
            className="w-full sm:w-auto"
            href="https://docs.google.com/forms/d/e/1FAIpQLScQlwi7hkmU9fp7aGSOLfUXPIvQmADduVyPQvVC5PKhcbFyDQ/viewform?usp=header"
            target="_blank"
          >
            <button className="bg_green hover:bg-green-900 text-white px-6 py-3 rounded-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto">
              Join Free Membership
            </button>
          </a>

          <a href="tel:18002028704" className="w-full sm:w-auto">
            <button className="bg-red-800 hover:bg-orange-800 text-white px-6 py-3 rounded-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto">
              Contact Us
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
