import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const GridCols = ({ order1, order2, dis, cont1, cont2, type, img, id }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 items-center lg:gap-10 md:gap-6 gap-4  mb-10">
        <motion.div
          className={`${order1} rounded-[30px] overflow-hidden`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img src={img} alt={cont1} loading="lazy" decoding="async" />
        </motion.div>
        <motion.div
          className={`${order2}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <div className="">
            <motion.h5
              className="font-semibold green  lg:text-[35px] md:text-[30px] text-[25px]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {cont1} {cont2 ? "/" : ""}
              <span className="gradient_text"> {cont2} </span>
            </motion.h5>
          </div>
          <p
            className="text-[#535353] pt-4 lg:text-[22px] md:text-[18px]"
            dangerouslySetInnerHTML={{ __html: dis }}
          ></p>
          <div className=" md:mt-10 mt-6">
            <Button type={type} idData={id} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GridCols;
