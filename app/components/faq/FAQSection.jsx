"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 focus:outline-none"
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-gray-600 pr-6 whitespace-pre-line">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Left FAQ Component with its own state management
const LeftFAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const leftFaqs = [
    {
      question: "What is Umang Living?",
      answer: "Umang Living is a thoughtfully designed senior living community in India that offers comfort, care, and convenience for a fulfilling lifestyle. Our goal is to create a safe, supportive, and vibrant environment where seniors can enjoy independence while having access to healthcare, recreation, and community bonding opportunities."
    },
    {
      question: "Who can become a member?",
      answer: "Membership is open for senior citizens aged 55 and above, as well as their families. Anyone seeking a secure, active, and engaging lifestyle in a senior-friendly township is welcome to apply. The community is designed to encourage like-minded individuals to live together while enjoying all modern comforts and services."
    },
    {
      question: "What facilities are available inside the township?",
      answer: `Umang Living offers retirement-friendly homes and modern amenities, including:
• Barrier-free, wheelchair-friendly infrastructure
• Healthcare support & partnerships with medical providers
• EV charging stations
• Concierge desk for daily assistance
• ATM & banking facilities
• Recreational and wellness spaces
• Community celebrations and cultural activities
• Round-the-clock security and emergency response systems`
    },
    {
      question: "Is medical assistance available on-site?",
      answer: "Yes. We have healthcare tie-ups and trained medical staff available on-site to provide immediate assistance whenever needed. The community also has access to emergency medical response, regular health checkups, and 24/7 support to ensure the well-being of residents."
    },
    {
      question: "Are the homes wheelchair-friendly?",
      answer: "Yes. All homes and township roads are designed to be barrier-free and wheelchair-friendly. Wide doors, ramps, anti-slip flooring, and thoughtful layouts ensure that seniors, including those with mobility challenges, can move around comfortably and safely."
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 flex-1"   style={{
        boxShadow: "0 -1px 6px rgba(0,0,0,0.1), 0 1px 8px rgba(0,0,0,0.1)"
      }}>
      {leftFaqs.map((faq, index) => (
        <AccordionItem
          key={`left-${index}`}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

// Right FAQ Component with its own state management
const RightFAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const rightFaqs = [
    {
      question: "Can family and friends visit?",
      answer: "Absolutely. We encourage family visits and provide comfortable guest facilities so loved ones can spend quality time with residents. The community also organizes events and celebrations where family members are welcome to participate and bond with residents."
    },
    {
      question: "What kind of community activities are organized?",
      answer: "Umang Living organizes a wide range of activities to keep residents active and engaged, including yoga and wellness sessions, cultural programs, recreational sports, book clubs, social gatherings, volunteering opportunities, and festive celebrations. These activities are designed to foster a strong sense of community and belonging."
    },
    {
      question: "Is transportation available?",
      answer: "Yes. We provide a dedicated wheelchair-friendly shuttle service for residents. In addition, there is a designated pick-up and drop-off zone for services like Ola and Uber, making commuting safe and convenient for residents and their families."
    },
    {
      question: "How do I become a member?",
      answer: `Becoming a member is simple. You can apply online through our official websites:
🌐 www.umanglivingcommunity.com | www.umangliving.com
Alternatively, you can connect with our membership team:
📞 +91-95609 86669 | 0120-510 9189
📩 Email: info@umangliving.com

Our team will guide you through the registration and onboarding process.`
    },
    {
      question: "How can I contact Umang Living?",
      answer: `You can reach us easily through:
• Website: www.umanglivingcommunity.com | www.umangliving.com
• Phone: +91-95609 86669 | 0120-510 9189
• Email: info@umangliving.com

Our team is always ready to answer your queries and assist you with membership or community-related information.`
    }
  ];

  return (
    <div className="bg-white rounded-lg p-4 md:p-6 lg:pb-6 flex-1"  style={{
        boxShadow: "0 -1px 6px rgba(0,0,0,0.1), 0 1px 8px rgba(0,0,0,0.1)"
      }}>
      {rightFaqs.map((faq, index) => (
        <AccordionItem
          key={`right-${index}`}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

// Main FAQ Section Component
const FAQSection = () => {
  return (
    <div className=" lg:p-18 md:p-16 p-10 bg-zinc-150">
      <h2 className="text-3xl md:text-4xl lg:4xl font-bold text-zinc-800 mb-6 text-center">
        Got Questions ? We have answers
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-start justify-center">
        <LeftFAQComponent />
        <RightFAQComponent />
      </div>
    </div>
  );
};

export default FAQSection;