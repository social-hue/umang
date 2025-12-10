"use client"
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Umang Living?",
      answer: "Umang Living is a thoughtfully designed largest senior living community in India that offers comfort, care, and convenience for a fulfilling lifestyle. Our goal is to create a safe, supportive, and vibrant environment where seniors can enjoy independence while having access to healthcare, recreation, and community bonding opportunities."
    },
    {
      question: "Who can become a member?",
      answer: "Membership is open for senior citizens aged 55 and above, as well as their families. Anyone seeking a secure, active, and engaging lifestyle in a senior-friendly township is welcome to apply. The community is designed to encourage like-minded individuals to live together while enjoying all modern comforts and services."
    },
    {
      question: "What facilities are available inside the township?",
      answer: "Umang Living offers retirement-friendly homes and modern amenities, including:\n• Wheelchair-friendly infrastructure\n• Anti-slip tiles and flooring\n• Pull out/sliding doors and windows\n• Healthcare support & partnerships with medical providers\n• Concierge desk for daily assistance\n• Recreational and wellness spaces\n• Community celebrations and cultural activities\n• Round-the-clock security and emergency response systems"
    },
    {
      question: "Is medical assistance available on-site?",
      answer: "Yes. We have healthcare tie-ups and trained medical staff available on-site to provide immediate assistance whenever needed. The community also has access to emergency medical response, regular health checkups, and 24/7 support to ensure the well-being of residents."
    },
    {
      question: "When will the projects be launched?",
      answer: "We are already launched in Punjab and are actively expanding our reach to other states. Our goal is to have a national presence, and we are working on a state-by-state launch plan. We will announce specific launch dates for each new state through our official channels."
    },
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
      answer: "Becoming a member is simple. You can apply online through our official websites:\n🌐 www.umanglivingcommunity.com | www.umangliving.com\nAlternatively, you can connect with our membership team:\n📞 +91-95609 86669 | 0120-510 9189\n📩 Email: info@umangliving.com\nOur team will guide you through the registration and onboarding process."
    },
    {
      question: "How can I contact Umang Living?",
      answer: "You can reach us easily through:\n• Website: www.umanglivingcommunity.com | www.umangliving.com\n• Phone: +91-95609 86669 | 0120-510 9189\n• Email: info@umangliving.com\nOur team is always ready to answer your queries and assist you with membership or community-related information."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-3xl md:text-[36px] font-bold text-zinc-800 mb-4">
            Frequently Asked <span className="text-teal-700">Questions</span>
          </p>
          <p className="text-md text-zinc-600 max-w-2xl mx-auto">
            Everything you need to know about Umang Living. Can't find the answer you're looking for? Feel free to reach out to our team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 sm:px-8 py-6 flex items-start justify-between gap-4 transition-colors duration-200"
              >
                <span className="text-lg text-zinc-800 pr-4 flex-1">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-teal-700 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 text-zinc-600 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}