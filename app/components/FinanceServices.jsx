"use client";
import React, { useState } from "react";

export default function ServicesSection() {
  const data = {
    "Retirement Planning": [
      "Help to plan your money for retirement so you have enough for your later years",
      "Guidance on government pension schemes and monthly income plans",
      "Plan Systematic Withdrawal Plan to secure your future expenses"
    ],
    "Safe Investments": [
      "Advice on fixed deposits (FDs), bonds, and government savings schemes",
      "Support with choosing low-risk options like Senior Citizen Savings Scheme (SCSS), Post Office Monthly Income Scheme (POMIS), and National Savings Certificates (NSC)",
    ],
    "Tax Planning": [
      "Help with tax-saving investments and filing Income Tax Returns.",
      "Tax Planning to reduce your tax liability on Sale of Property etc..",
      "Guidance on tax benefits under Section 80C and other relevant sections",
      "Income Tax Assessments and Replies of the various Notices including Special Financials Transactions.",
      "Guidance on the tax effect of various provisions for Gifting of money and property ",
    ],
    "Insurance Planning": [
      "Advice on health, life, and property insurance for seniors",
      "Help with choosing the right insurance plans for your needs",
    ],
    "Pension and Income Management": [
      "Support with managing your pension and other retirement income",
      "Guidance on annuity plans and regular income schemes",
    ],
    "Budgeting and Financial Care": [
      "Personalized budgeting to help manage daily expenses",
      "Ongoing financial care and advice for seniors",
    ],
    "Fees Structure": [
      "•	Flat-fee financial planning (no hidden charges or commissions)",
    ],
    "Fraud Protection": [
      "Tips and support to protect against financial scams and fraud",
      "Guidance on safe banking and investment practices",
    ],
    "Government Schemes": [
      "Information and help with government savings and welfare schemes for seniors",
    ],
    "Miscellaneous Financial Services": [
      "Link your PAN and Aadhar",
      "Change Address and other details in PAN and Aadhar",
      "Surrender Duplicate PAN",
      "Payment of TDS on Purchase of Property",
      "Facilitate on withdrew of provident fund"
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
            className={`w-full text-left px-5 py-4 text-md md:text-base transition-all ${
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
