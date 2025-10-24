"use client";

import { ArrowRight } from "lucide-react";

// import React, { useState, useRef, useEffect } from "react";
// import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

export default function ITRSection() {
  return (
    <section className="bg-gradient-to-br from-zinc-100 to-zinc-200 py-14 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Heading Section */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 leading-tight">
            <span className="text-red-700">FREE</span> ITR Filing for Members
          </h2>
          <p className="text-zinc-600 text-lg max-w-md mx-auto md:mx-0">
            Enter your Membership ID, Our team will reach out to you !
            Become Our Member Today <ArrowRight className="inline-block w-5 h-5"/>  
          </p>
        </div>

        {/* Right Form Section */}
        <div className="bg-white shadow-lg rounded-md p-6 sm:p-8">
          {/* <h3 className="text-2xl text-center font-bold text-zinc-800 mb-4">
            // Schedule Your Consultation
          </h3> */}
          {/* <AppointmentForm /> */}
        </div>
      </div>
    </section>
  );
}
