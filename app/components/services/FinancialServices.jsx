"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import AppointmentSection from "../Form/AppointmentSection";
import { ArrowRight } from "lucide-react";
import FAQFinance from "../faq/FAQFinance";
import ITRSection from "../Finance/Finance";

// import Grid from "../contact/Grid";

const services = [
  {
    title: "Auditing and Assurance",
    desc: "We provide Auditing & Assurance Services to Companies, Firms, and Trusts including Statutory, Tax, GST, Internal, and Forensic Audits with certifications such as Form 15CB and Peer Reviews.",
  },
  {
    title: "Income Tax Advisory",
    desc: "Proactive tax consultancy covering Corporate, NRI, Transfer Pricing, M&A, Expat, and Trust taxation with strategic planning and compliance support.",
  },
  {
    title: "Company Formation in India",
    desc: "Complete support for incorporation of Pvt. Ltd., LLP, OPC, Section 8 and other business entities with legal and structural consultancy.",
  },
  {
    title: "Goods & Service Tax (GST)",
    desc: "Comprehensive GST services including Registration, Audits, E-Invoicing, Compliance, and Filing—monthly, quarterly, or annual.",
  },
  {
    title: "Book Keeping",
    desc: "Accounting outsourcing for Tally, Zoho Books, and QuickBooks ensuring high compliance while you focus on core operations.",
  },
  {
    title: "Transfer Pricing",
    desc: "Strategic advice on international transactions, Arm’s Length Pricing, documentation, and certification under Indian TP rules.",
  },
  {
    title: "Virtual CFO Services",
    desc: "Flexible and cost-effective Virtual CFO plans for startups & SMEs—financial modeling, deal structuring, and planning guidance.",
  },
  {
    title: "Fraud Detection & Forensic Audits",
    desc: "Detailed investigations for fund siphoning, vendor fraud, and system breaches with evidence collection & legal support.",
  },
  {
    title: "Corporate Financing Services",
    desc: "Bank & investor tie-ups for funding, CMA data, project reports, and proposal charts to reduce interest costs.",
  },
  {
    title: "Foreign Company Set-ups in India",
    desc: "End-to-end India entry services—JV setup, compliance, taxation, and liaison with government bodies.",
  },
];

const faqs = [
    {
      "q": "Can you file returns for my parents remotely?",
      "a": "Yes - secure uploads, video consent, and e-verification make it fully remote."
    },
    {
      "q": "Do you advise on investments?",
      "a": "We coordinate with SEBI - registered advisors where required and disclose any fees or commissions."
    },
    {
      "q": "Can you handle NRI property sale tax?",
      "a": "Yes - capital gains computation, TDS management, and 15CA/CB with CA sign-off."
    },
    {
      "q": "Do you store my financial data?",
      "a": "Only what’s needed, with consent and limited-time access; you can download your dossier anytime."
    }
  ]
  
export default function FinancialServices() {
  const [hovered, setHovered] = useState(null);
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((srv, idx) => (
          <motion.div
            key={idx}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className={`p-4 rounded-sm border border-zinc-700 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between shadow-md`}
          >
            <h3 className="text-xl font-semibold mb-3 text-zinc-800">
              {srv.title}
            </h3>
            <p className="text-zinc-800 mb-2 leading-relaxed">{srv.desc}</p>
            <motion.a
              href="tel:18002028704"
              className=" text-red-700 font-medium"
            >
              Enquire Now <span><ArrowRight className="text-red-700 w-4 h-4 inline-block"/></span>
            </motion.a>
          </motion.div>
        ))}
      </div>
    
      {/* Call to Action */}
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
      
      <div className="bg-zinc-800 p-6 rounded-2xl border-l-4 border-teal-800 text-white mb-6">
        <p className="text-lg italic">
          Important: <span className="text-zinc-100 font-medium">Umang Living</span> provides concierge access and coordination with independent legal professionals. We are not a law firm and do not offer legal representation directly.
        </p>
      </div>
    </section>
  );
}

// function FAQ({ q, a }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div
//       className="border border-zinc-800 rounded-sm p-3 cursor-pointer hover:border-zinc-700 transition-all"
//       onClick={() => setOpen(!open)}
//     >
//       <div className="flex justify-between items-center">
//         <h4 className="text-zinc-800 font-medium text-lg">{q}</h4>
//         <span className="text-zinc-800 font-bold text-xl">{open ? "−" : "+"}</span>
//       </div>
//       {open && <p className="text-zinc-800 mt-3">{a}</p>}
//     </div>
//   );
// }