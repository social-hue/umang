"use client";
import { facilities } from "@/app/StaticData/Living";
import { motion } from "framer-motion";
import React from "react";

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Living() {
  return (
    <section className="bg-[url(/green_bg.png)] bg-cover py-10">
      <div className="main_width">
        <h5 className="lg:text-[65px] md:text-[45px] text-[35px] lg:leading-[60px]  font-light text-white ">
          What does Umang Living Offer
        </h5>

        <p className="lg:text-[22px] md:text-[18px]  font-light pt-4 text-white ">
          Umang Living offers a comprehensive ecosystem designed to meet the
          evolving needs of seniors. From senior living townships across 75+
          cities to curated travel, lifestyle experiences, and healthcare
          support, every service is crafted to enable dignified, joyful living.
          Whether you’re looking for short- or long-term stays, wellness
          solutions, or trusted legal advice, Umang Living is your all-in-one
          partner for a secure, enriching senior lifestyle.
        </p>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="grid lg:flex flex-wrap 2
          xl:flex-nowrap justify-center items-start   2xl:grid-cols-6 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mt-10 gap-4"
        >
          {facilities.map(({ icon, title, tagline }, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="box p-8 flex flex-col items-center h-full bg-white rounded-lg"
            >
              {/* icon */}
              <div className="h-[90px] ">
                <img
                  src={icon}
                  alt={title}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              {/* title  */}
              <div className="text-[#3D3D3D] text-center pt-4 text-[22px] heading_font font-bold">
                {title}
              </div>

              {/* tagline */}
              <div className="text-[#4A4A4A] font-medium text-center">
                {tagline}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
