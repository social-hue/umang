"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const rows = [
  {
    images: ["/glimps/1.jpg", "/glimps/2.jpg", "/glimps/3.jpg"],
    cols: "grid-cols-[42%_22%_1fr]",
  },
  {
    images: ["/glimps/4.jpg", "/GlimpseNew/Glimpse3.jpg"],
    cols: "grid-cols-[75%_1fr]",
  },
  {
    images: ["/glimps/6.jpg", "/GlimpseNew/Glimpse1.jpg", "/glimps/8.jpg"],
    cols: "grid-cols-[25%_35%_1fr]",
  },
];

const rowVariants = {
  hidden: {},
  show: {
    transition: {
      // children will play one after another
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Glimpse() {
  return (
    <section className="py-10">
      <div className="main_width pt-8">
        <h2 className="green lg:text-[65px] md:text-[45px] text-[35px] lg:leading-[60px] red font-light">
          <span className="">A Glimpse</span>
          <span className="gradient_text"> into Umang Homes</span>
        </h2>

        <div className="lg:my-10 mt-4 lg:rounded-[50px] rounded-[25px]  overflow-hidden">
          {rows.map(({ images, cols }, rowIdx) => (
            <motion.div
              key={rowIdx}
              variants={rowVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }} // triggers when 25 % visible
              className={`grid ${cols} lg:gap-6 gap-2 ${
                rowIdx === 0 ? "" : "lg:mt-6 mt-2"
              }`}
            >
              {images.map((src, i) => (
                <motion.div
                  key={src}
                  variants={itemVariants}
                  className="relative w-full h-full"
                >
                  <img
                    src={src}
                    alt={`Umang Homes snapshot ${rowIdx + 1}-${i + 1}`}
                    className="object-cover h-full w-full"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
