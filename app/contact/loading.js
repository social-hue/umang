// app/loading.js
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/fav.png"
          alt="Loading..."
          width={80}
          height={80}
          className="object-contain"
          priority
        />
      </motion.div>
    </div>
  );
}
