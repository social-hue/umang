"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "PAN & Aadhaar Linkage Services",
    desc: "Link your PAN and Aadhaar quickly to avoid penalties and return rejections. End-to-end support—from verification to successful confirmation.",
  },
  {
    title: "Income Tax Return (ITR) Filing",
    desc: "Accurate, on-time ITRs for seniors, NRIs, and families. We optimize deductions and ensure smooth refunds with zero paperwork stress.",
  },
  {
    title: "PAN Corrections",
    desc: "Fix name/DOB/address or update father’s name on PAN without hassle. We prepare documents and file corrections till approval.",
  },
  {
    title: "Aadhaar Corrections",
    desc: "Update mobile, address, or biometrics for seamless KYC and e-verification. Secure documentation and tracking until changes reflect.",
  },
  {
    title: "Tax Planning Consultancy",
    desc: "Pay only what’s fair—nothing extra. Year-round guidance on exemptions, investments, and senior-citizen benefits to reduce tax outgo.",
  },
  {
    title: "Investment Consultancy",
    desc: "Goal-based advice focused on safety, liquidity, and steady income. We design low-risk portfolios suitable for retirees and family needs.",
  },
  {
    title: "NRI Consultancy to Repatriate Funds to India",
    desc: "Bring money to India legally and efficiently. Guidance on NRE/NRO/FCNR routes, taxability, and documentation.",
  },
  {
    title: "Management of Foreign Remittances",
    desc: "Clean, compliant cross-border transfers. We handle FEMA/Form 15CA-CB, bank liaison, and proof for your auditors or tax filing.",
  },
  {
    title: "Audit for Your Business",
    desc: "Statutory, internal, or tax audits delivered on schedule. Clear reports that satisfy regulators and help you fix gaps early.",
  },
  {
    title: "Budgeting & Strategy",
    desc: "Create a simple, trackable money plan for your family or business. Cash-flow forecasts, savings targets, and quarterly reviews to stay on course.",
  },
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) setCardsPerPage(1);
      else if (window.innerWidth < 1024) setCardsPerPage(2);
      else setCardsPerPage(4);
    };
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const total = services.length;

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

  const visible = services.slice(currentIndex, currentIndex + cardsPerPage);

  const displayedCards =
    visible.length < cardsPerPage
      ? [...visible, ...services.slice(0, cardsPerPage - visible.length)]
      : visible;

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full flex flex-col items-center py-2 via-white overflow-hidden"
    >
      <div className="flex justify-between items-center w-[90%] max-w-7xl mb-5">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-800">
          Our Services
        </h2>
        <div className="flex gap-3">
          <button
            aria-label="prev"
            onClick={prev}
            className="p-2 rounded-full border border-slate-300 shadow-sm hover:bg-slate-200 transition"
          >
            <FaChevronLeft className="text-slate-600" />
          </button>
          <button
            aria-label="next"
            onClick={next}
            className="p-2 rounded-full border border-slate-300 shadow-sm hover:bg-slate-200 transition"
          >
            <FaChevronRight className="text-slate-600" />
          </button>
        </div>
      </div>

      <div className="relative w-[90%] max-w-7xl flex justify-center">
        <div
          className={`grid gap-4 w-full`}
          style={{
            gridTemplateColumns: `repeat(${cardsPerPage}, minmax(0, 1fr))`,
            transition: "all 0.3s ease",
          }}
        >
          {displayedCards.map((item, index) => (
            <motion.div
              key={`${currentIndex}-${index}-${item.title}`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between bg-white border border-slate-200 rounded-md p-6 shadow-md hover:shadow-sm transition-all duration-300"
            >
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href="#contact"
                  className="inline-block text-red-700 text-md font-medium transition"
                >
                  Enquire Now  <ArrowRight className="inline-block mb-1 w-4 h-4 text-red-700" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
