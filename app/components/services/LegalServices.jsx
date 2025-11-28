"use client";
import React from "react";
// import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import FAQLegal from "../faq/FAQLegal";
import LegalFormSection from "../Form/LegalFormSection";
import LegalServiceSection from "../LegalServices";

export default function LegalServices() {
  return (
    <section className="main_width text-zinc-800 py-10">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
          Legal & Documentation Services for Seniors and Families
        </h1>
        <p className="text-zinc-800 text-md leading-relaxed max-w-3xl mx-auto">
          At Umang Living, legal consultation is simplified and transparent. From will & estate planning to property disputes and NRI documentation, our curated legal network helps seniors and families resolve issues quickly with fixed-fee quotes, clear timelines, and regular updates through our team.
        </p>
      </div>
      {/* Services Grid */}
      <LegalServiceSection />
      <div className="py-10">
        <LegalFormSection />
      </div>
      <div className="md:mt-6 mb-10 max-w-5xl mx-4 md:mx-auto">
        <FAQLegal />
      </div>
    </section>
  );
}