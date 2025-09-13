"use client";
import { facilities } from "@/app/StaticData/Living";
import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const descriptionVariants = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.9 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  show: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: "backOut" },
  },
};

export default function Living() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/green_bg.png')] bg-cover bg-center" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-20 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-teal-200 to-emerald-300 rounded-full opacity-20 animate-pulse delay-500" />

      <div className="main_width relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={titleVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6"
          >
            What does Umang Living Offer
          </motion.h2>

          <motion.p
            variants={descriptionVariants}
            className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-5xl mx-auto font-light"
          >
            Umang Living offers a comprehensive ecosystem designed to meet the
            evolving needs of seniors. From senior living townships across 75+
            cities to curated travel, lifestyle experiences, and healthcare
            support, every service is crafted to enable dignified, joyful living.
            Whether you're looking for short- or long-term stays, wellness
            solutions, or trusted legal advice, Umang Living is your all-in-one
            partner for a secure, enriching senior lifestyle.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {facilities.map(({ icon, title, tagline, accent }, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  {/* Icon Container */}
                  <motion.div
                    variants={iconVariants}
                    className="relative mb-6 group-hover:scale-110 transition-transform duration-500"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center group-hover:from-emerald-200 group-hover:to-teal-200 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                      <img
                        src={icon}
                        alt={title}
                        className="w-10 h-10 object-contain filter group-hover:brightness-110 transition-all duration-500"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Floating Icon Effect */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                    {title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-gray-600 leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300">
                    {tagline}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100" />
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-emerald-300 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-teal-300 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 text-emerald-600 font-semibold text-lg">
            <span>Discover More</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-emerald-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
