"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function MissionVision() {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // if video comes into view (even partially) and hasn't played yet
          if (entry.isIntersecting && !hasPlayed) {
            setVideoSrc(
              "https://www.youtube-nocookie.com/embed/ZdekV9sokZ8?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1"
            );
            setHasPlayed(true); // mark it as played once
          }
        });
      },
      { threshold: 0 } // trigger as soon as any part of the element is visible
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [hasPlayed]);

  return (
    <section className="main_width bg-white py-4 mb-6 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Right - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-zinc-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Our <span className="text-zinc-800">Mission & Vision</span>
          </h2>
          <div className="space-y-5 leading-relaxed text-zinc-800">
            <p className="text-lg">
              <span className="font-semibold text-[#e60076]">Mission :</span>{" "}
              Set the gold standard for senior living in India - where every
              elder lives with dignity, safety and joy.
            </p>
            <p className="text-lg">
              <span className="font-semibold text-[#e60076]">Vision :</span>{" "}
              Build purpose-designed communities that integrate healthcare,
              culture, and everyday convenience; enable family peace of mind
              (including NRIs), and deliver measurable outcomes in safety,
              wellness, and social connection.
            </p>
          </div>
        </motion.div>

        {/* Left - YouTube Video */}
        <motion.div
          ref={videoRef}
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative mt-4 aspect-video overflow-hidden rounded-lg shadow-lg">
            {videoSrc ? (
              <iframe
                src={videoSrc}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              ></iframe>
            ) : (
              <div className="absolute top-0 left-0 w-full h-full bg-black rounded-lg" />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
