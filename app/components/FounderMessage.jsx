"use client";
import { motion } from "framer-motion";

export default function AboutFounder() {
  return (
    <section className="main_width bg-white py-6 2xl:py-12 overflow-hidden">
      <div className="container mx-auto flex flex-col xl:flex-row md:flex-row items-center md:items-start gap-10">
        {/* Right Side - Content */}
        <motion.div
          className="mt-4 w-full flex flex-col justify-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-3xl md:text-[40px] font-bold text-zinc-800 mb-4 text-left">
            About Umang Living
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-3">
            At Umang Living, we are committed to redefining aging by
            creating spaces where the 55+ generation can live with
            dignity, joy, and a sense of belonging. Specializing in
            managing, selling, and operating senior residences, we
            offer a comprehensive approach to senior living. Our
            services go beyond infrastructure, focusing on emotional
            engagement, wellness, and community-building.
            With a team of experts in elderly care, wellness, and
            community management, we ensure that every resident
            experiences comfort, care, and social enrichment. Through
            our partnerships with builders and developers, we bring
            world-class senior living communities to life, fostering an
            environment where seniors thrive and feel valued.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
