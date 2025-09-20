"use client"
import React from "react";
import { motion } from "framer-motion";

const MediaGrid = ({ bgColor, title, subtitle, images }) => {
  return (
    <div className="main_width">
      <div className="bg-[url('/media.jpg')] bg-bottom mb-10 rounded-[30px] bg-[#f8f8f8]">
        <div
          className={`${bgColor} relative lg:p-12 md:p-10 p-6 rounded-[30px] text-white overflow-hidden`}
        >
          <motion.h4
            className="font-bold lg:text-[40px] md:text-[35px] text-[30px] leading-[30px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {title}
          </motion.h4>
          <motion.p
            className="capitalize pt-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            {subtitle}
          </motion.p>

          <img
            src="/clean_rangoli.png"
            alt="rangoli pattern"
            className="absolute -right-20 -top-18"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="md:px-8 p-6 py-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {images?.map((src, idx) => (
              <motion.img
                key={idx}
                src={src}
                alt={`media ${idx + 1}`}
                className="w-full h-full object-cover "
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaGrid;
