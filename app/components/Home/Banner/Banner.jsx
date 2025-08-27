"use client";

import React from "react";
import Header from "../../Header";
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "@/app/helpers/Button";
import CityDropdown from "@/app/helpers/CityDropdown";

const sectionVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }, // 150 ms delay between kids
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 }, // slide-up + fade
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const barVariants = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Banner() {
  return (
    <section className="lg:h-screen md:h-[650px] h-[500px] lg:bg-[url(/banner.png)] bg-[url(/mobile_banner.jpg)] bg-cover bg-right relative">
      <div
        className="
    bg-[linear-gradient(125deg,#FFF_20.89%,rgba(255,255,255,0.11)_68.42%)]
    lg:bg-[linear-gradient(71deg,rgba(255,255,255,0.60)_32.94%,rgba(249,249,249,0.00)_58.59%)]
    h-full
  "
      >
        <div className="absolute inset-x-0 white_grid py-10">
          <Header />
        </div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="h-full main_width pt-20 flex items-center"
        >
          <div>
            <div className="grid lg:grid-cols-[10px_1fr] md:grid-cols-[8px_1fr] grid-cols-[6px_1fr] lg:gap-8 gap-4  md:mt-1 mt-20 items-start">
              <motion.div
                variants={barVariants}
                className="w-full h-full origin-top bg_red"
              />

              {/* text block */}
              <div>
                <motion.h1
                  variants={itemVariants}
                  className="light_green 2xl:text-[110px] xl:text-[90px] lg:text-[80px] md:text-[60px] text-[40px] 2xl:leading-[90px] xl:leading-[80px] lg:leading-[70px] md:leading-[60px] leading-[50px]  2xl:tracking-[-3.45] tracking-[-2.45]"
                >
                  Because every age <br className="lg:block hidden" />
                  <span className="red"> deserves new beginnings</span>
                </motion.h1>

                <motion.h2
                  variants={itemVariants}
                  className="heading_font text-[#000] xl:text-[50px] lg:txt-[40px] md:text-[30px] text-[20px] xl:leading-[60px]  pt-4 2xl:pt-10"
                >
                  A Unique Senior Independent Living Community for the{" "}
                  <br className="lg:block hidden" />
                  <span className="red">55+ Generation</span> |{" "}
                  <span className="green">Coming Soon in 75+ Cities</span>{" "}
                  Across India
                </motion.h2>
              </div>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center flex-nowrap  gap-4"
            >
              <div>
                {/* <span className="flex items-center gap-2 bg-white rounded-[10px] px-4 py-3 uppercase text-[#313030] heading_font lg:text-[25px] text-[20px]">
                  <span>City</span>
                  <FaAngleDown />
                </span> */}
                {/* <CityDropdown /> */}
              </div>

              <div>
                <Button
                  design={`group relative border-2 cursor-pointer inline-flex items-center justify-center overflow-hidden 
  rounded-[10px] bg-black px-8 md:py-2 py-3  uppercase heading_font text-white 
  md:text-[18px] text-[12px] lg:text-[25px] font-semibold transition-all duration-500  transition-all
  hover:bg-white hover:text-black duration-700 hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)]
  active:scale-95 transform`}
                  content={" join the community"}
                  type={" Join the community"}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
