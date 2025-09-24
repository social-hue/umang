"use client";

import React, { useState } from "react";
import PartnerForm from "../models/PartnerForm";

const Button = ({ type, idData }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="group relative border-2 inline-flex items-center justify-center overflow-hidden 
  rounded-[10px] bg-black px-6 py-3 cursor-pointer heading_font text-white 
  md:text-[20px]  font-semibold duration-500  transition-all
  hover:bg-white hover:text-black hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)]
  active:scale-95 transform"
      >
        <span className="relative z-10 tracking-wide">Collaborate</span>
      </button>
      {/* <Form open={open} setOpen={setOpen} colabType={type} /> */}
      <PartnerForm open={open} setOpen={setOpen} colabType={type} id={idData} />
    </div>
  );
};

export default Button;
