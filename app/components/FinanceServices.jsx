"use client";
import React, { useState } from "react";

export default function ServicesSection() {
  const data = {
    "Legal Assistance & Advisory": [
      "UMANG Living shall provide every senior citizen a free first legal consultation, either online or in person, to discuss and understand their legal issues.",
      "Assistance shall be provided in understanding the rights, benefits, and procedures available under the Maintenance and Welfare of Parents and Senior Act 2007, including claiming maintenance and protection from neglect.",
      "Legal experts will assist in drafting and registering Wills, Powers of Attorney, and other personal legal documents.",
      "Legal support shall be provided in resolving property disputes, ownership issues, and safeguarding assets against fraud or encroachment.",
      "UMANG Living shall offer legal advice and coordination with authorities in cases involving financial fraud, cheating, or coercion affecting senior citizens’ assets or pensions.",
      "Legal guidance shall be given on inheritance, succession planning, gift deeds, and property transfers in accordance with applicable personal and civil laws.",
      "UMANG Living shall help senior citizens reclaim property wrongfully occupied by relatives, tenants, or outsiders.",
      "Legal support shall be provided to senior citizens in consumer-related disputes, including issues with healthcare services, insurance, housing, and retirement investments.",
      "UMANG Living shall assist in preparing applications, documents, and representation before Maintenance Tribunals for claiming maintenance or protection.",
      "Legal help shall be provided for resolving issues related to pension delays, gratuity payments, or provident fund disputes.",
      "Assistance shall be offered to senior citizens in preparing Advance Medical Directives or Living Wills for future healthcare decisions.",
      "UMANG Living shall organize periodic workshops on senior citizens’ legal rights, government schemes, and preventive legal practices for legal awareness.",
      "All legal consultations, records, and personal information shall be kept strictly confidential and protected under applicable data protection laws.",
    ],
    "Elder Rights Protection": [
      "Legal support shall be provided to senior citizens facing any kind of abuse, neglect, harassment, or exploitation from family members, caretakers, or others.",
      "UMANG Living shall assist senior citizens in filing police complaints, FIRs, and coordinating with authorities for their safety and justice.",
      "Mediation and family counselling services shall be offered to resolve domestic or inheritance disputes peacefully.",
      "Regular workshops shall be organized to educate senior citizens about their legal rights, entitlements, and available welfare schemes.",
      "UMANG Living shall support senior citizens, particularly elderly women, facing domestic violence, harassment, or intimidation within their households.",
      "Legal help shall be provided to senior citizens facing issues of medical negligence, overcharging, or denial of healthcare services.",
      "Help shall be provided in applying for and obtaining government welfare benefits, subsidies, and legal aid services available to senior citizens.",
      "UMANG Living shall organize guidance sessions and provide legal assistance to protect senior citizens from cybercrimes, online scams, and data misuse.",
      "Legal guidance shall be provided to senior citizens for drafting and registering agreements with caregivers, attendants, or service providers to ensure legal clarity and accountability.",
    ],
    "Documentation & Legal Paperwork": [
      "UMANG Living shall assist senior citizens in drafting, reviewing, and notarizing Wills, rent agreements, sale deeds, gift deeds, and other property-related legal documents.",
      "Assistance shall be provided in preparing and executing healthcare paperwork, medical consent forms, and legal guardianship or caregiving documents.",
      "Help shall be provided in preparing, filing, and completing registration and mutation processes for property ownership changes or inheritance transfers.",
      "UMANG Living shall assist in preparing affidavits, declarations, indemnity bonds, and self-attested statements for administrative and legal purposes.",
      "Support shall be provided in updating Wills, property deeds, nominee details, and other legal records after significant life events such as marriage, or relocation.",
      "UMANG Living shall facilitate document verification and attestation services from authorized officers or notaries to ensure authenticity and legal validity.",
      "Legal assistance shall be offered to draft and register Powers of Attorney granting trusted representatives the authority to manage financial or legal matters.",
    ],
    "Support & Access": [
      "UMANG Living shall provide online consultations and arrange home visits by legal professionals for senior citizens who are immobile, bedridden, or unable to travel.",
      "Every senior citizen’s case shall be handled with full confidentiality and assigned a dedicated relationship manager for personalized legal support and follow-up.",
      "UMANG Living shall provide priority legal assistance and faster coordination for cases involving urgent threats to safety, property, or health.",
      "Support shall be provided in connecting senior citizens with government legal aid authorities, senior citizen helplines, and welfare departments.",
      "UMANG Living shall offer translation and interpretation support for senior citizens to help them understand legal documents and proceedings in their preferred language.",
      "UMANG Living can collaborate with State’s Legal Services Authorities, local police, and welfare departments to provide comprehensive support and on-ground legal help to senior citizens.",
    ],
    "Optional Add-Ons": [
      "UMANG Living shall organize legal sessions and workshops to educate senior citizens about property laws, retirement benefits, digital safety, and protection from fraud.",
      "Professional family counselling and mediation shall be offered to help resolve family disagreements regarding property, care responsibilities, or inheritance.",
      "Optional legal insurance coverage to be made available for residents seeking ongoing legal advice and representation at a fixed annual fee.",
      "UMANG Living shall offer optional assistance through partner legal experts in creating and managing family trusts, charitable endowments, or estate planning instruments.",
    ],
  };

  const tabs = Object.keys(data);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
    <h2 className="text-zinc-800 text-3xl font-bold mb-3">Our Services</h2>
    <section className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      {/* Left Tabs */}
      <aside className="md:w-1/4 border-r border-gray-200 bg-gray-50">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full text-left px-5 py-4 text-sm md:text-base transition-all ${
              activeTab === tab
                ? "bg-white border-l-4 border-blue-500 text-gray-900 font-semibold"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </aside>

      {/* Right Content */}
      <div className="flex-1 p-6 md:p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {activeTab}
        </h2>
        <ul className="space-y-3 text-gray-700 leading-relaxed list-decimal pl-5">
          {data[activeTab].map((item, idx) => (
            <li key={idx} className="text-sm md:text-base">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
    </div>
  );
}
