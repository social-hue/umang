"use client";
import { facilities } from "@/app/StaticData/Living";
import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Cards = () => {
  return (
    <motion.div
      className="main_width grid grid-cols-1 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 py-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {facilities.map(({ icon, title, tagline }, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="p-2 flex flex-col items-center bg-white  border-l-2 border-r-2 border-[#CECECE] border-dashed"
        >
          {/* icon */}
          <img
            src={icon}
            alt={title}
            className="object-contain h-16 w-16"
            loading="lazy"
          />

          {/* title  */}
          <div className="text-[#3D3D3D] text-center pt-4 text-[18px] heading_font font-bold">
            {title}
          </div>

          {/* tagline */}
          <div className="text-[#4A4A4A] text-center mt-2">{tagline}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Cards;
