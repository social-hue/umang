"use client";

import React, { useState } from "react";
import PartnerForm from "../models/PartnerForm";

const Button = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="inline-block bg-teal-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-800 transition"
      >
        <span className="relative z-10 text-lg tracking-wide">Join Us Today</span>
      </button>
      {/* <Form open={open} setOpen={setOpen} colabType={type} /> */}
      <PartnerForm open={open} setOpen={setOpen} />
    </div>
  );
};

export default Button;
