"use client";
import React from "react";
import { motion } from "framer-motion";
import AppointmentSection from "../Form/AppointmentSection";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import FAQLegal from "../faq/FAQLegal";
import Timelinee from "../timelinee";

export default function LegalServices() {
  const services = [
    {
      title: "Will & Estate Planning",
      desc: "Will drafting, codicils, registration guidance, executorship setup.",
    },
    {
      title: "Property Matters",
      desc: "Title search, due diligence, mutation, partition, property disputes (civil), tenancy & recovery.",
    },
    {
      title: "Civil Advisory",
      desc: "Notices, agreements, contracts (sale/lease/service), consumer grievances.",
    },
    {
      title: "Criminal Advisory (Triage)",
      desc: "FIR guidance, anticipatory/regular bail strategy, representation via network lawyers.",
    },
    {
      title: "NRI Legal Assistance",
      desc: "PoA drafting, embassy/legalisation, appearance via counsel, inheritance/succession for overseas families.",
    },
    {
      title: "IP Disputes",
      desc: "Trademark/copyright filings and infringement responses.",
    },
    {
      title: "Documentation & Attestations",
      desc: "Affidavits, indemnities, stamp duty guidance, e-sign, notarisation, apostille.",
    },
  ];

  const faqs = [
    {
      q: "Can you help if my children live abroad?",
      a: "Yes. We coordinate PoA, video KYC, and embassy/apostille so NRIs can act without travel.",
    },
    {
      q: "Do you offer fixed prices?",
      a: "For most documentation and standard matters we provide a fixed-fee. Litigation is quoted with clear caps.",
    },
    {
      q: "Are my documents secure?",
      a: "Yes. We use consent-based sharing, audit trails, and limited-time access links.",
    },
    {
      q: "Do you appear in court?",
      a: "Representation is through our networked advocates; Umang manages scheduling and updates.",
    },
  ];

  const steps = [
    "Triage (free 15-min) – understand your matter & documents.",
    "Scope & Quote – fixed-fee/capped retainer with inclusions & timeline.",
    "KYC & Consent – secure doc upload/pickup; PoA if required.",
    "Execution – filings, hearings, registrations; milestone updates via concierge.",
    "Closure Kit – final orders, copies, next-step guidance.",
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
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-zinc-700 hover:border-zinc-700 transition-all hover:shadow-[0_0_20px_-5px_rgba(13,148,136,0.5)]"
          >
            <h3 className="text-zinc-800 text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-zinc-800 text-md leading-relaxed">
              {service.desc}
            </p>
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
        <span className="flex items-center gap-2 text-orange-800 font-bold">
          Call <FaPhoneAlt className="text-orange-800 text-lg w-5 h-5" />
        </span>
        <span className="hidden md:inline text-zinc-600">|</span>
        <span className="flex items-center gap-2 text-teal-700 font-bold">
          WhatsApp <FaWhatsapp className="text-teal-700 text-lg w-6 h-6" />
        </span>
        <span className="hidden md:inline text-zinc-600">|</span>
        <span className="text-zinc-800 font-medium">
          Book a free 30-min review today.
        </span>
      </p>
    </div>
      {/* How It Works */}
      {/* <div className="text-center mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-teal-600 mb-8">
          How It Works
        </h2>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 mb-5 text-left"
            >
              <div className="bg-teal-700 text-zinc-100 w-8 h-8 flex items-center justify-center rounded-full font-semibold shrink-0">
                {index + 1}
              </div>
              <p className="text-zinc-300 leading-relaxed">{step}</p>
            </motion.div>
          ))}
        </div>
      </div> */}
    <AppointmentSection />
      {/* FAQs */}
      {/* <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-6 text-center">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-2xl border border-zinc-700 shadow-lg hover:shadow-lg transition-all"
            >
              <h3 className="text-zinc-800 font-semibold mb-2">{faq.q}</h3>
              <p className="text-zinc-700 text-md leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div> */}
       <div className="mt-14 max-w-5xl mx-auto">
      <FAQLegal />
      </div>
      {/* <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-teal-600 mb-8">
          FAQs
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700 hover:border-teal-700 transition-all"
            >
              <h3 className="text-teal-500 font-semibold mb-2">{faq.q}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
