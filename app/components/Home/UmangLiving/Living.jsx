"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { facilities } from "@/app/StaticData/Living";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FacilitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  // Dynamically adjust visible cards based on screen width
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) setCardsPerPage(1);
      else if (window.innerWidth < 1024) setCardsPerPage(2);
      else if (window.innerWidth < 1280) setCardsPerPage(3);
      else setCardsPerPage(4);
    };
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const total = facilities.length;

  const next = () => {
    setCurrentIndex((prev) =>
      prev + cardsPerPage >= total ? 0 : prev + cardsPerPage
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - cardsPerPage < 0 ? total - cardsPerPage : prev - cardsPerPage
    );
  };

  const visible = facilities.slice(currentIndex, currentIndex + cardsPerPage);

  const displayedCards =
    visible.length < cardsPerPage
      ? [...visible, ...facilities.slice(0, cardsPerPage - visible.length)]
      : visible;

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-4 md:px-8 relative w-full flex flex-col items-center py-6 md:py-12 bg-white overflow-hidden">
      <div className="max-w-4xl text-center mb-8 md:mb-6">
        <h2 className="text-3xl md:text-[36px] font-bold text-zinc-800 mb-4">
          What does <span className="text-teal-700">Umang</span> Offer?
        </h2>
        <p className="text-zinc-700 text-md leading-relaxed max-w-3xl mx-auto">
          Umang Living offers India&apos;s largest comprehensive ecosystem for modern senior living,
          with townships in 75+ cities, lifestyle experiences, healthcare, and curated travel,
          we are your partner for a secure and enriching lifestyle.
        </p>
      </div>
      <div className="flex justify-between items-center w-[90%] max-w-7xl mb-3">
        <h2 className="text-3xl font-bold text-zinc-800">
          Our Facilities
        </h2>
        <div className="flex gap-3">
          <button
            aria-label="prev"
            onClick={prev}
            className="p-2 rounded-full border cursor-pointer border-zinc-500 hover:bg-zinc-300 transition"
          >
            <FaChevronLeft className="text-zinc-500" />
          </button>
          <button
            aria-label="next"
            onClick={next}
            className="p-2 rounded-full border cursor-pointer border-zinc-500 hover:bg-zinc-300 transition"
          >
            <FaChevronRight className="text-zinc-500" />
          </button>
        </div>
      </div>

      <div className="relative w-[90%] max-w-7xl flex justify-center">
        <div
          className={`grid gap-6 w-full`}
          style={{
            gridTemplateColumns: `repeat(${cardsPerPage}, minmax(0, 1fr))`,
            transition: "all 0.3s ease",
          }}
        >
          {displayedCards.map((item, index) => (
            <motion.div
              key={`${currentIndex}-${index}-${item.id}`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col bg-white border border-zinc-200 rounded-sm shadow-sm hover:shadow-md cursor-pointer transition-shadow overflow-hidden"
            >
              <Link
                href={item.link}
              >
                <div className="relative w-full h-46">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-4 flex-grow">
                  <h3
                    className={` text-md font-semibold mb-1 ${item.accent}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-md">
                    {item.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-8">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScQlwi7hkmU9fp7aGSOLfUXPIvQmADduVyPQvVC5PKhcbFyDQ/viewform?usp=header"
          target="_main"
          className="w-full md:w-auto"
        >
          <button className="w-full md:w-auto px-8 py-3 bg-red-800 text-white rounded-sm font-semibold hover:bg-red-700 transition">
            Get Free Membership
          </button>
        </a>

        <a href="tel:18002028704" className="w-full md:w-auto">
          <button className="w-full md:w-auto px-8 py-3 bg-teal-700 text-white rounded-sm font-semibold hover:bg-teal-600 transition">
            Contact us
          </button>
        </a>
      </div>
    </motion.section>
  );
}