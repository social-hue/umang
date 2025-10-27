"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function FAQFinance() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 10 team members on the free plan and unlimited members on the premium plan.",
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "The maximum file upload size is 2GB. You can increase this limit with a premium subscription.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click on ‘Forgot Password’ at the login screen, and we’ll send you a password reset link via email.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel your subscription anytime from your account settings page.",
    },
    {
      question: "Do you provide additional support?",
      answer:
        "We provide 24/7 support through chat and email for all premium users.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
    <h2 className="text-3xl text-center font-bold text-zinc-900 mb-2">Frequently Asked Questions</h2>    
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
