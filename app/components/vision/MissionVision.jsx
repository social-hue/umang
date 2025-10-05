"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="relative py-4 md:py-10 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Decorative Element */}
      {/* <div className="absolute top-0 right-0 w-64 h-64 bg-[#079184]/10 blur-3xl rounded-full -z-10"></div> */}

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left - Image */}
        {/* <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/mission.jpg"
            alt="Our Mission & Vision"
            width={500}
            height={400}
            className="rounded-3xl shadow-2xl object-cover w-full h-auto"
          />
        </motion.div> */}

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-zinc-800"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Our <span className="text-[#079184]">Mission & Vision</span>
          </h2>
          <div className="space-y-6 leading-relaxed text-gray-700">
            <p className="text-xl">
              <span className="font-semibold text-[#e60076]">Mission:</span>{" "}
              Set the gold standard for senior living in India - where every elder lives with dignity, safety and joy.
            </p>
            <p className="text-xl">
              <span className="font-semibold text-[#e60076]">Vision:</span>{" "}
              Build purpose-designed communities that integrate healthcare, culture, and everyday convenience; enable family peace of mind (including NRIs), and deliver measurable outcomes in safety, wellness, and social connection.
            </p>
          </div>
          {/* 
          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-[#079184] to-[#075c54] text-white font-medium px-8 py-3 rounded-full shadow-md hover:shadow-lg transition"
            >
              Learn More
            </motion.button>
          </div> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/citizen.jpg"
            alt="Our Mission & Vision"
            width={500}
            height={400}
            className="rounded-lg shadow-xl object-cover w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
