"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const titleVariants = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const listItemVariants = {
  hidden: { x: -20, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Aboutus = () => {
  const services = [
    "Townships Senior Living Communities across 75+ cities",
    "Stay For short-term and long-term purposes", 
    "Travel Specialized travel arrangements for seniors",
    "Lifestyle Outings, events, and celebrations for seniors",
    "Legal Consultation For any land/property-related issue"
  ];

  return (
    <section className="relative h-[480px] overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lifestyle/02.jpg')"
        }}
      />
      
      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/20" />
      
      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="main_width w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid lg:grid-cols-2 gap-12 items-center h-full"
          >
            {/* Left Side - Background Image Area */}
            <div className="hidden lg:block relative">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/lifestyle/02.jpg')"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              {/* Tagline */}
              {/* <motion.p
                variants={itemVariants}
                className="text-gray-700 text-sm md:text-base font-medium leading-relaxed"
              >
                A Unique Senior Independent Living Community for the 55+ Generation | Coming Soon in 75+ Cities Across India
              </motion.p> */}

              {/* Main Heading */}
              <motion.h2
                variants={titleVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E7216A] leading-tight"
              >
                Welcome to Umang Living Community
              </motion.h2>

              {/* Services List */}
              <motion.div
                variants={containerVariants}
                className="space-y-3"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={listItemVariants}
                    className="flex items-start space-x-3 group"
                  >
                    <div className="w-2 h-2 bg-[#E7216A] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <p className="text-gray-800 text-sm md:text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                      {service}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                className="pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-[#E7216A] bg-white text-[#E7216A] font-semibold rounded-lg hover:bg-[#E7216A] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Join The Community Now
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Accent Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E7216A]" />
    </section>
  );
};

export default Aboutus;
