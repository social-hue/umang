"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import FAQLegal from "../faq/FAQLegal";
import { ArrowRight } from "lucide-react";
import LegalFormSection from "../Form/LegalFormSection";

export default function LegalServices() {
  const services = [
    {
      title: "Intellectual Property Laws",
      description:
        "Protect and commercialize your ideas with our end-to-end IP solutions. From registration to enforcement, we secure your innovation globally.",
    },
    {
      title: "Gaming Laws",
      description:
        "We guide fantasy, esports, and real-money gaming platforms through licensing and compliance. Our legal support ensures fair play and regulatory integrity.",
    },
    {
      title: "Corporate & Commercial Laws",
      description:
        "From incorporation to exits, we support your business journey with strategic legal advice. Our focus—clarity, compliance, and commercial agility.",
    },
    {
      title: "Litigation & Dispute Resolution",
      description:
        "We represent clients before all major courts and tribunals with strategic precision. Our litigation team ensures clarity, speed, and effective resolution.",
    },
    {
      title: "Banking & Financial Laws",
      description:
        "Advising banks, NBFCs, and fintechs on regulation, enforcement, and restructuring. We turn complex financial compliance into seamless execution.",
    },
    {
      title: "Information Technology & Data Privacy",
      description:
        "Stay compliant with India’s evolving IT and data protection landscape. We secure your digital operations through robust policies and risk frameworks.",
    },
    {
      title: "White Collar Crimes",
      description:
        "We defend corporates and promoters in high-stakes financial investigations. Our team ensures strategic handling of fraud, PMLA, and regulatory actions.",
    },
    {
      title: "International Arbitration & ADR",
      description:
        "Resolve cross-border disputes with confidence. We manage arbitrations globally, from strategy and venue selection to enforcement and settlement.",
    },
    {
      title: "Real Estate Laws",
      description:
        "Your trusted partner in property due diligence, documentation, and RERA advisory. We safeguard investments for individuals and developers alike.",
    },
    {
      title: "Blockchain & Digital Assets",
      description:
        "We empower Web3 ventures and crypto innovators with legal clarity. Our advisory bridges technology, regulation, and token-based innovation.",
    },
    {
      title: "Policy & Government Advisory",
      description:
        "Collaborating with industry and regulators, we shape policy impact and compliance. From white papers to ESG frameworks, we guide institutional influence.",
    },
    {
      title: "Venture Capital & Private Equity Advisory",
      description:
        "We structure deals that drive growth and investor confidence. From term sheets to exits, our legal support fuels sustainable capital journeys.",
    },
  ];


  return (
    <section className="text-zinc-800 py-10">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-6">
          Legal & Documentation Services for Seniors and Families
        </h1>
        <p className="text-zinc-800  text-lg leading-relaxed max-w-3xl mx-auto">
          At Umang Living, legal care is simple, respectful, and transparent.
          From will & estate planning to property disputes and NRI documentation,
          our curated legal network helps seniors and families resolve issues
          quickly—with fixed-fee quotes, clear timelines, and regular updates
          through our concierge team.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((srv, idx) => (
          <motion.div
            key={idx}
            className={`p-4 rounded-sm border border-zinc-700 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between shadow-md`}
          >
            <h3 className="text-xl font-semibold mb-3 text-zinc-800">
              {srv.title}
            </h3>
            <p className="text-zinc-800 mb-2 leading-relaxed">{srv.description}</p>
            <motion.a
              href="tel:18002028704"
              className=" text-red-700 font-medium"
            >
              Enquire Now <span><ArrowRight className="text-red-700 w-4 h-4 inline-block"/></span>
            </motion.a>
          </motion.div>
        ))}
      </div>
        {/* <div className="py-12">
            <Timelinee />
        </div> */}
      {/* Disclaimer */}
      {/* <div className="bg-zinc-800 p-6 rounded-2xl border-l-4 border-teal-800 text-zinc-100 mb-12">
        <p className="text-md italic">
          Important: <span className="text-white font-medium">Umang Living</span> provides concierge access and coordination with independent legal professionals. We are not a law firm and do not offer legal representation directly.
        </p>
      </div> */}
      <div className="mt-16 mb-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-800">
        Ready to file or plan?
      </h2>
      <p className="text-zinc-800 text-lg flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <span className="flex items-center gap-2 text-2xl md:text-xl text-orange-800 font-bold">
          Call <FaPhoneAlt className="text-orange-800 text-lg w-5 h-5" />
        </span>
        <span className="hidden md:inline text-zinc-600">|</span>
        <span className="flex items-center gap-2 text-2xl md:text-xl text-teal-700 font-bold">
          WhatsApp <FaWhatsapp className="text-teal-700 text-lg w-6 h-6" />
        </span>
        <span className="hidden md:inline text-zinc-600">|</span>
        <span className="text-zinc-800 font-medium text-[22px] md:text-xl">
          Book a free 30-min review today.
        </span>
      </p>
    </div>
    <LegalFormSection />
       <div className="mt-10 md:mt-14 max-w-5xl mx-4 md:mx-auto">
      <FAQLegal />
      </div>
    </section>
  );
}