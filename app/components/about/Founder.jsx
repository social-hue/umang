"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Founder() {
  return (
    <section className="bg-white main_width md:py-4 overflow-hidden">
      <div className="container mx-auto flex flex-col xl:flex-row md:flex-row
        items-center md:items-start gap-8">
        {/* Left Side - Responsive YouTube Embed */}
        <motion.div
          className="w-full md:w-1/3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mt-3 relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/author1.png"
              alt="Loading..."
              width={440}
              height={160}
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="md:w-full flex flex-col justify-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-3xl md:text-[40px] font-bold text-zinc-800 mb-4 text-left">
            Our Founder
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-3">
            With over 25 years in hospitality leadership, <span className="font-semibold">Mr. Sanjayy Bharadwajj</span> understands how to make people feel at home. Combining strategic insight with a passion for creating meaningful experiences, he has dedicated his career to understanding what makes spaces come alive and people smile. From market research to lifestyle design, his work reflects a deep grasp of human behavior and a focus on comfort, joy, and connection.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Now, he channels this experience into Umang Living - India’s first multi-city independent senior living community, designed to offer vibrant, dignified, and fulfilling lives for the elderly. With Umang, Mr. Bharadwajj aims not just to build homes, but a warm community filled with companionship, purpose, and countless cups of chai.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
