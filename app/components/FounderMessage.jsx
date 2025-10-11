"use client";
import { motion } from "framer-motion";

export default function AboutFounder() {
  return (
    <section className="main_width bg-white py-6 2xl:py-12 overflow-hidden">
      <div className="container mx-auto flex flex-col xl:flex-row md:flex-row
 items-center md:items-start gap-10">
        {/* Left Side - Responsive YouTube Embed */}
        {/* <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative mt-4 aspect-video overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.youtube-nocookie.com/embed/ZdekV9sokZ8?si=McBXemaac3RSxvbd"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            ></iframe>
          </div>
        </motion.div> */}

        {/* Right Side - Content */}
        <motion.div
          className="mt-4 w-full flex flex-col justify-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-zinc-800 mb-4 text-left">
            About <span className="text-teal-700">Umang Living</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-3">
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
          {/* <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            From market research to lifestyle design, he’s worn many hats, always guided
            by a keen understanding of human behaviour and an eye for comfort, joy, and
            connection. Now, he’s pouring all that wisdom into a new venture close to
            his heart: Umang Living, India’s first multi-city independent senior living
            community.
          </p> */}
        </motion.div>
      </div>
    </section>
  );
}
