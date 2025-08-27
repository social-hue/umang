"use client";
import React, { useState } from "react";
import Form from "../components/models/form";

const Button = ({ design, content, type }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)} className={`${design}`}>
        <span className="relative z-10 tt tracking-wide">{content}</span>
      </button>
      <Form open={open} setOpen={setOpen} colabType={type} />
    </div>
  );
};

export default Button;
