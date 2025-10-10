"use client";

import React, { useState } from "react";
import PartnerForm from "../models/PartnerForm";

const Button = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="group relative border-2 inline-flex items-center justify-center overflow-hidden 
  rounded-[6px] bg-black px-6 py-3 cursor-pointer text-white 
  text-[18px]  font-semibold duration-500  transition-all
  hover:bg-white hover:text-black"
      >
        <span className="relative z-10 tracking-wide">Collaborate</span>
      </button>
      {/* <Form open={open} setOpen={setOpen} colabType={type} /> */}
      <PartnerForm open={open} setOpen={setOpen} />
    </div>
  );
};

export default Button;
