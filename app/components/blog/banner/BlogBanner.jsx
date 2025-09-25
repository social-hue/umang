"use client";

import React from "react";
import Header from "../../Header";
import { IoMdTime } from "react-icons/io";
import { motion } from "framer-motion";
import { CgLoadbarSound } from "react-icons/cg";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

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
      className={`2xl:h-[800px] xl:h-[700px] h-[600px] ] bg-cover  bg-center relative`}
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0.17%,rgba(255,255,255,0.18)_73.21%)] h-full">
        {/* <div className="absolute inset-x-0 white_grid py-10">
          <Header />
        </div> */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="h-full main_width pt-20 flex items-center"
        >
          <div>
            <div className="lg:gap-8 gap-4">
              <motion.div
                variants={barVariants}
                className="w-full h-full origin-top bg_red"
              />

              {/* text block */}
              <div>
                <motion.h1
                  variants={itemVariants}
                  className="text-[#1D1C1C]  2xl:text-[70px] xl:text-[50px] lg:text-[40px] md:text-[35px] text-[30px]  2xl:leading-[60px]"
                  dangerouslySetInnerHTML={{ __html: data.title }}
                ></motion.h1>

                <motion.h2
                  variants={itemVariants}
                  className=" gradient_text lg:text-[25px] md:text-[20px]   pt-4"
                  dangerouslySetInnerHTML={{ __html: data.subTitle }}
                ></motion.h2>
                <motion.div
                  variants={itemVariants}
                  className=" text-[#1D1C1C] lg:text-[16px] md:text-[14px] md:flex-nowrap flex-wrap  pt-4 flex items-center  space-x-6"
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
                    {/* <div className="">
                      <hr className=" w-[30px]" />
                    </div>
                    <div className="flex items-center ">
                      <CgLoadbarSound className="text-[22px]" />
                      <span>{data.view}</span>
                    </div>
                    <div className="">
                      <hr className=" w-[30px]" />
                    </div>
                    <div className="flex items-center  space-x-2">
                      <CiFacebook className="text-[22px] " />
                      <FaXTwitter className="text-[20px] " />
                      <span>{data.share}</span>
                    </div> */}
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
