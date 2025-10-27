"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function FAQFinance() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can you file returns for my parents remotely?",
      answer:
        "Yes—secure uploads, video consent, and e-verification make it fully remote.",
    },
    {
      question: "Do you advise on investments?",
      answer:
        "We coordinate with SEBI-registered advisors where required and disclose any fees/commissions.",
    },
    {
      question: "Can you handle NRI property sale tax?",
      answer:
        "Yes - capital gains computation, TDS management, and 15CA/CB with CA sign-off.",
    },
    {
      question: "Do you store my financial data?",
      answer:
        "Only what’s needed, with consent and limited-time access; download your dossier anytime.",
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
    <h2 className="text-3xl md:text-[36px] text-center font-bold text-zinc-800 mb-2">Frequently Asked Questions</h2>    
    <div className="flex flex-col md:flex-row items-center justify-center w-full mx-auto md:gap-14">
      {/* Left Image Section */}
      <div className="w-full md:w-[45%] flex justify-center md:justify-start">
        <div className="relative w-48 h-48 md:w-auto md:h-auto">
          <Image
            src="/two-people.png" // replace with your actual image path
            alt="FAQ illustration"
            width={400}
            height={700}
            className="object-cover drop-shadow-lg"
          />
        </div>
      </div>

      {/* Right FAQ Section */}
      <div className="w-full md:w-[55%]">
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-2 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center py-3 text-lg font-medium text-zinc-900 hover:text-teal-800 transition-colors"
              >
                <span
                  className={
                    openIndex === index
                      ? "text-teal-800 font-semibold"
                      : "text-zinc-900"
                  }
                >
                  {faq.question}
                </span>
                <span
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-teal-800" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 mt-2 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
