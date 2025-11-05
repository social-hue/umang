"use client";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import AppointmentSection from "../Form/AppointmentSection";
import FAQFinance from "../faq/FAQFinance";
import ITRSection from "../Finance/Finance";
import ServicesSection from "../FinanceServices";
  
export default function FinancialServices() {
  return (
    <section className="main_width text-white py-10">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-800">
          Tax, Accounting & Financial Services for Seniors and NRIs
        </h1>
        <p className="text-zinc-800 text-lg leading-relaxed max-w-3xl mx-auto">
        Money decisions should be clear & transparent - Umang Living brings ITR filing, chartered services, and retirement/investment planning together so that our seniors and families can protect their money, optimize taxes, and plan confidently - without the stress of getting into cumbersome paperwork.
        </p>
      </div>
      {/* Services Grid */}
      <ServicesSection />
      <div className="py-6 md:py-12">
        <ITRSection />
      </div>
      <div className="py-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-800">
        Ready to file or plan ?
      </h2>
      <p className="text-zinc-800 text-lg flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
      <a
          href="tel:18002028704"
          className="flex items-center gap-2 text-orange-800 font-semibold hover:scale-105 transition-transform"
        >
          <FaPhoneAlt className="text-orange-800 text-xl" />
          <span>Call Us</span>
        </a>
        <span className="hidden md:inline text-zinc-600">|</span>
        <a
          href="https://wa.me/919560986669"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-teal-700 font-semibold hover:scale-105 transition-transform"
        >
          <FaWhatsapp className="text-teal-700 text-2xl" />
          <span>Chat on WhatsApp</span>
        </a>
        <span className="hidden md:inline text-zinc-600">|</span>
        <span className="text-zinc-800 font-medium">
          Book a free 30-min review today.
        </span>
      </p>
    </div>
    <div className="py-10">
        <AppointmentSection />
    </div>
      {/* FAQs */}
      <div className="mt-8 md:mt-10 mb-8 max-w-5xl mx-4 md:mx-auto">
      <FAQFinance />
      </div>
    </section>
  );
}