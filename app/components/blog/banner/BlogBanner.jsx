"use client";

import React from "react";
import { IoMdTime } from "react-icons/io";
import { motion } from "framer-motion";

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

export default function BlogBanner({ data }) {
  return (
    <section
      className={`2xl:h-[520px] h-[420px] bg-cover bg-center relative`}
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0.17%,rgba(255,255,255,0.18)_73.21%)] h-full">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="h-full main_width flex items-center"
        >
          <div>
            <div className="gap-4">
              <motion.div
                variants={barVariants}
                className="w-full h-full origin-top bg_red"
              />

              {/* text block */}
              <div>
                <motion.h1
                  variants={itemVariants}
                  className="text-zinc-800 font-semibold 2xl:text-[70px] lg:text-[42px] md:text-[34px] text-[28px]"
                  dangerouslySetInnerHTML={{ __html: data.title }}
                ></motion.h1>

                <motion.h2
                  variants={itemVariants}
                  className=" gradient_text text-lg pt-4"
                  dangerouslySetInnerHTML={{ __html: data.subTitle }}
                ></motion.h2>
                <motion.div
                  variants={itemVariants}
                  className=" text-[#1D1C1C] md:text-[16px] md:flex-nowrap flex-wrap  pt-4 flex items-center  space-x-6"
                >
                  <div className="uppercase font-semibold green">
                    {data.author}
                  </div>
                  <div className="flex md:text-[14px] lg:text-[16px] text-[13px] md:flex-nowrap flex-wrap   items-center space-x-4">
                    <div className="items-center md:flex hidden">
                      <hr className=" w-[30px]" />
                    </div>
                    <div className="flex items-center ">
                      <IoMdTime className="text-[22px] " />
                      <span>{data.time}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
