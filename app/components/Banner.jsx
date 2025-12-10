"use client";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const Banner = ({ title, bgImage = "/greenBg.jpg" }) => {
  return (
    <div
      className={`relative flex items-center justify-center text-center bg-cover bg-center min-h-[25vh] md:min-h-[35vh] lg:min-h-[40vh]`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full px-4 md:px-8">
        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-2 md:mb-3 drop-shadow-lg">
          {title}
        </h2>

        <p className="flex items-center justify-center gap-2 text-white uppercase sm:text-xl md:text-lg font-medium">
          Home
          <FaAngleRight className="text-white text-lg sm:text-lg" />
          <span className="text-yellow-300 text-lg">{title}</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
