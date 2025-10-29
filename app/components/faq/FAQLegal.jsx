"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function FAQLegal() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can you help if my children live abroad?",
      answer:
        "Yes. We coordinate PoA, video KYC, and embassy/apostille so NRIs can act without travel.",
    },
    {
      question: "Do you offer fixed prices?",
      answer:
        "For most documentation and standard matters we provide a fixed-fee. Litigation is quoted with clear caps.",
    },
    {
      question: "Are my documents secure?",
      answer:
        "Yes. We use consent-based sharing, audit trails, and limited-time access links.",
    },
    {
      question: "Do you appear in court?",
      answer:
        "Representation is through our networked advocates; Umang manages scheduling and updates.",
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h2 className="text-3xl md:text-[38px] text-center font-bold text-zinc-900 mb-2">Frequently Asked Questions</h2>
    
    <div className="flex flex-col md:flex-row items-center justify-center w-full mx-auto md:gap-14">
      {/* Left Image Section */}
      <div className="w-full md:w-[50%] flex justify-center md:justify-start">
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
      <div className="w-full md:w-[50%]">
        {/* <h2 className="text-3xl font-bold text-zinc-900 mb-6">FAQs</h2> */}
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
