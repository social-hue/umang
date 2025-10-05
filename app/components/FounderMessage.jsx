"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutFounder() {
  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left Side - Image with animation */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/new_one.webp"
              alt="Founder"
              width={692}
              height={775}
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Right Side - Content with animation */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="mt-4 text-5xl font-semibold text-teal-700 mb-4">
            About the <span className="text-pink-600">Founder</span>
          </h1>
          <p className="text-gray-700 text-xl leading-relaxed mb-2">
            With over 25 years of leadership in the hospitality industry,
            Mr. Sanjayy Bharadwajj knows how to make people feel truly at home.
            With a rare mix of strategic smarts and a deep love for crafting
            meaningful experiences, Mr. Bharadwajj has spent his career decoding
            what makes places come alive and people smile.
          </p>
          <p className="text-gray-700 text-xl leading-relaxed mb-2">
            From market research to lifestyle design, he’s worn many hats, always
            guided by a keen understanding of human behaviour and an eye for
            comfort, joy & connection. Now, he’s pouring all that wisdom into a
            new venture close to his heart: Umang Living – India’s first
            multi-city independent senior living community.
          </p>
          <p className="text-gray-700 text-xl leading-relaxed mb-2">
            Thoughtfully created to offer vibrant, dignified, and holistic living
            for the elderly, Umang is not about slowing down, it’s about living
            fully, joyfully and on your own terms.
          </p>
          <p className="text-gray-700 text-xl leading-relaxed mb-6">
            With Umang Living, Mr. Bharadwajj hopes to do more than build
            beautiful residences – he wants to build a community where every day
            brings companionship, purpose, and a strong cup of chai.
          </p>
          <h3 className="text-xl font-bold text-gray-900">Mr. Sanjayy Bharadwajj</h3>
          <p className="text-gray-600 text-lg">Founder, CEO</p>
        </motion.div>
      </div>
    </section>
  );
}
