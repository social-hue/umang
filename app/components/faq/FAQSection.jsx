"use client";
import { useState, useRef } from "react";

const faqs = [
  {
    question: "What is Umang Living?",
    answer:
      "Umang Living is a thoughtfully designed senior living community in India that offers comfort, care, and convenience for a fulfilling lifestyle. Our goal is to create a safe, supportive, and vibrant environment where seniors can enjoy independence while having access to healthcare, recreation, and community bonding opportunities.",
  },
  {
    question: "Who can become a member?",
    answer:
      "Membership is open for senior citizens aged 55 and above, as well as their families. Anyone seeking a secure, active, and engaging lifestyle in a senior-friendly township is welcome to apply. The community is designed to encourage like-minded individuals to live together while enjoying all modern comforts and services.",
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
    • Round-the-clock security and emergency response systems`,
  },
  {
    question: "Is medical assistance available on-site?",
    answer:
      "Yes. We have healthcare tie-ups and trained medical staff available on-site to provide immediate assistance whenever needed. The community also has access to emergency medical response, regular health checkups, and 24/7 support to ensure the well-being of residents.",
  },
  {
    question: "Are the homes wheelchair-friendly?",
    answer:
      "Yes. All homes and township roads are designed to be barrier-free and wheelchair-friendly. Wide doors, ramps, anti-slip flooring, and thoughtful layouts ensure that seniors, including those with mobility challenges, can move around comfortably and safely.",
  },
  {
    question: "Can family and friends visit?",
    answer:
      "Absolutely. We encourage family visits and provide comfortable guest facilities so loved ones can spend quality time with residents. The community also organizes events and celebrations where family members are welcome to participate and bond with residents.",
  },
  {
    question: "What kind of community activities are organized?",
    answer:
      "Umang Living organizes a wide range of activities to keep residents active and engaged, including yoga and wellness sessions, cultural programs, recreational sports, book clubs, social gatherings, volunteering opportunities, and festive celebrations. These activities are designed to foster a strong sense of community and belonging.",
  },
  {
    question: "Is transportation available?",
    answer:
      "Yes. We provide a dedicated wheelchair-friendly shuttle service for residents. In addition, there is a designated pick-up and drop-off zone for services like Ola and Uber, making commuting safe and convenient for residents and their families.",
  },
  {
    question: "How do I become a member?",
    answer: `Becoming a member is simple. You can apply online through our official websites:
    🌐 www.umanglivingcommunity.com | www.umangliving.com
    Alternatively, you can connect with our membership team:
    📞 +91-95609 86669 | 0120-510 9189
    📩 Email: info@umangliving.com
    Our team will guide you through the registration and onboarding process.`,
  },
  {
    question: "How can I contact Umang Living?",
    answer: `You can reach us easily through:
    • Website: www.umanglivingcommunity.com | www.umangliving.com
    • Phone: +91-95609 86669 | 0120-510 9189
    • Email: info@umangliving.com
    Our team is always ready to answer your queries and assist you with membership or community-related information.`,
  },
];

export default function FAQSection() {
  const [openFAQs, setOpenFAQs] = useState(new Set());
  const [showAllMobile, setShowAllMobile] = useState(false);
  const faqSectionRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenFAQs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const leftColumnFAQs = faqs.slice(0, 5);
  const rightColumnFAQs = faqs.slice(5);

  const handleToggleMobile = () => {
    if (showAllMobile) {
      // scroll back to top of FAQs when collapsing
      faqSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    setShowAllMobile((prev) => !prev);
  };

  return (
    <div className="bg-[#f8f8f8a7] py-8 md:py-14 lg:py-16 xl:py-16" ref={faqSectionRef}>
      <section className="w-[80%] mx-auto">
        {/* Headings */}
        <h2 className="text-zinc-800 font-bold text-[36px] text-center lg:text-[40px] 2xl:text-[42px] mb-6 whitespace-nowrap">
          Frequently Asked <span className="text-zinc-600">Questions</span>
        </h2>
        {/* <h3 className="text-zinc-800 font-sans font-semibold sm:text-[40px] md:text-[48px] lg:text-[50px] xl:text-[50px] leading-[1.1] tracking-[-0.045em] ml-[6%] md:ml-[6%] lg:ml-[6%] xl:ml-[6%] mb-8 md:mb-12 lg:mb-12 xl:mb-12 drop-shadow-md max-md:text-[32px]">
          Some of the most common questions asked about Umang's Living
        </h3> */}

        {/* FAQ Grid */}
        <div className="flex gap-1 md:gap-6 lg:gap-6 xl:gap-6 max-md:flex-col">
          {/* Desktop/Laptop View */}
          <div className="hidden md:flex flex-col flex-1">
            {leftColumnFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                openFAQs={openFAQs}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </div>
          <div className="hidden md:flex flex-col flex-1">
            {rightColumnFAQs.map((faq, index) => {
              const actualIndex = index + 5;
              return (
                <FAQItem
                  key={actualIndex}
                  faq={faq}
                  index={actualIndex}
                  openFAQs={openFAQs}
                  toggleFAQ={toggleFAQ}
                />
              );
            })}
          </div>

          {/* Mobile View */}
          <div className="flex flex-col md:hidden">
            {(showAllMobile ? faqs : faqs.slice(0, 5)).map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                openFAQs={openFAQs}
                toggleFAQ={toggleFAQ}
              />
            ))}
            <button
              className="mx-auto mt-4 px-6 py-2 bg-[#112240] text-white rounded-md shadow-md hover:bg-[#1c3459] transition"
              onClick={handleToggleMobile}
            >
              {showAllMobile ? "View Less" : "View More"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Reusable FAQ Item Component */
function FAQItem({ faq, index, openFAQs, toggleFAQ }) {
  return (
    <div className="mb-2">
      <button
        className={`w-full text-left p-3 text-[16px] md:text-[18px] lg:text-[20px]  text-[#ccd6f6] bg-[#112240] border border-[hsla(0,0%,51.4%,0.16)] rounded-md shadow-[0_10px_30px_-15px_rgba(0,0,0,1)] transition hover:shadow-[0_10px_60px_-15px_rgba(0,0,0,1)] relative after:content-['+'] after:font-bold after:absolute after:right-3 ${
          openFAQs.has(index)
            ? "after:content-['-']"
            : "after:content-['+']"
        }`}
        onClick={() => toggleFAQ(index)}
      >
        {faq.question}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 bg-[#0b1629] border border-[hsla(0,0%,51.4%,0.16)] rounded-md ${
          openFAQs.has(index)
            ? "max-h-[1000px] visible mt-3 p-3"
            : "max-h-0 invisible"
        }`}
      >
        <p className="text-[#c2c2c2] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.4] font-light drop-shadow-sm whitespace-pre-line">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}
