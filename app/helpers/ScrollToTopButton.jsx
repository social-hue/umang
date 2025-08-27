"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ScrollToTopButton() {
  useEffect(() => {
    const btn = document.getElementById("toTop");
    const onScroll = () =>
      btn?.classList.toggle("opacity-0", window.scrollY < 200);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.button
      id="toTop"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className=" cursor-pointer right-6 z-10 h-18 w-18 rounded-full
                 bg-white text-teal-600 shadow-lg ring-4 ring-gray-800/60
                 flex items-center justify-center transition-opacity duration-300
                 opacity-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        animate={{
          y: [0, -5, 0], // bounce up-down
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
        >
          <path
            d="M40.6046 38.4793L27.0837 24.9583L13.5627 38.4793L8.1543 35.7751L27.0837 16.8457L46.013 35.7751L40.6046 38.4793Z"
            fill="#069183"
          />
        </svg>
      </motion.div>
    </motion.button>
  );
}
