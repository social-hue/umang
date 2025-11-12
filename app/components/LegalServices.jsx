"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const services = [
    {
      "title": "Legal consultation on property, family & welfare",
      "desc": "Get quick, practical advice from senior-friendly lawyers. We review your issue and guide next steps to protect rights and resolve matters peacefully."
    },
    {
      "title": "Awareness workshop (online, 30 mins)",
      "desc": "Understand senior rights, safety, and fraud prevention in simple language. Interactive sessions with checklists your family can use immediately."
    },
    {
      "title": "Drafting of Will",
      "desc": "Ensure your wishes are clear, valid, and dispute-proof. We draft a legally sound Will and guide you on witnesses, registration, and safekeeping."
    },
    {
      "title": "Power of Attorney / Special POA",
      "desc": "Authorize a trusted person to act for you—safely and correctly. We prepare POA/SPA, explain scope and safeguards, and assist with attestation/registration."
    },
    {
      "title": "Maintenance Petition",
      "desc": "If children/relatives neglect support, we file for lawful maintenance. End-to-end drafting, filing, and representation to secure timely relief."
    },
    {
      "title": "Property transfer / gift / partition / registration",
      "desc": "Hassle-free documentation for family transfers and partitions. We prepare deeds, verify papers, and coordinate stamp duty and registration."
    },
    {
      "title": "Title verification & due diligence",
      "desc": "Avoid costly disputes before you buy/sell. We check ownership, encumbrances, approvals, and give a clear legal opinion report."
    },
    {
      "title": "Legal notice (property, rent, maintenance)",
      "desc": "Send a strong, professional notice that compels action. Drafting and dispatch with the right citations to trigger quick resolution."
    },
    {
      "title": "Representation before Tribunal/Civil Court (per appearance)",
      "desc": "Experienced advocates present your case with care and clarity. Transparent per-appearance fees and updates after every hearing."
    },
    {
      "title": "Probate of Will / Letter of Administration",
      "desc": "Formal court validation for smooth inheritance and transfer. We manage filings, affidavits, citations, and property mutations thereafter."
    },
    {
      "title": "Pension & gratuity claim assistance",
      "desc": "Get what you’re entitled to—without running pillar to post. We compile documents, file claims, and follow up till disbursal."
    },
    {
      "title": "Government schemes & benefits assistance",
      "desc": "Identify eligible schemes and complete applications correctly. From documentation to submissions, we make access to benefits simple."
    },
    {
      "title": "Health insurance & medical claim legal assistance",
      "desc": "Denied or delayed claim? We prepare a strong case and escalate. From insurer correspondence to ombudsman/legal action, we stand by you."
    },
    {
      "title": "Police complaint drafting & follow-up (fraud, abuse, neglect)",
      "desc": "Sensitive, prompt support to protect seniors. We draft precise complaints, file them properly, and follow up for official action."
    },
    {
      "title": "Property dispute resolution & mediation (up to 60 mins)",
      "desc": "Resolve conflicts faster, without lengthy litigation. Neutral facilitation to reach fair settlements and record binding terms."
    }
  ]

export default function LegalServiceSection() {
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
      <div className="flex justify-between items-center w-[100%] mb-3">
        <h2 className="text-3xl font-bold text-zinc-800">
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

      <div className="relative w-[100%] flex justify-center">
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
              className="group relative flex flex-col justify-between bg-white border border-slate-200 rounded-md p-4 shadow-sm transition-all duration-300"
            >
              <div>
                <h3 className="text-md font-semibold text-slate-800 mb-2 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-md">
                  {item.desc}
                </p>
              </div>
              <div className="mt-2">
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