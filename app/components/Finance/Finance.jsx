// components/ITRSection.jsx
"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function ITRSection() {
  const [membershipId, setMembershipId] = useState("");
  const [loading, setLoading] = useState(false);

  const allowedRegex = /^[A-Za-z0-9\-_]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = membershipId.trim();

    // Client-side validation
    if (!trimmed) {
      toast.error("Please enter your Membership ID.");
      return;
    }
    if (trimmed.length < 3 || trimmed.length > 64) {
      toast.error("Membership ID must be between 3 and 64 characters.");
      return;
    }
    if (!allowedRegex.test(trimmed)) {
      toast.error("Only letters, numbers, hyphen and underscore are allowed.");
      return;
    }

    setLoading(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000); // 15s timeout

    try {
      const res = await fetch("/api/itr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ membershipId: trimmed }),
        signal: controller.signal
      });
      clearTimeout(timeout);
      const data = await res.json();
      if (!res.ok) {
        toast.error(data?.message || "Submission failed. Please try again.");
      } else {
        toast.success(data?.message || "Submitted successfully.");
        setMembershipId("");
      }
    } catch (err) {
      if (err.name === "AbortError") {
        toast.error("Request timed out. Please try again.");
      } else {
        console.error(err);
        toast.error("Something went wrong. Try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-zinc-100 to-zinc-200 py-12 px-4 sm:px-6 md:py-14 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left Heading Section */}
        <div className="space-y-4 text-center md:text-left px-2 sm:px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-800 leading-tight">
            <span className="text-red-700">Free*</span> ITR Filing for Members
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Enter your Membership ID, We'll reach out to you! <br className="hidden sm:block" />Become <span className="font-bold">Our Member</span> Today{" "}
            <ArrowRight className="inline-block w-5 h-5 text-teal-700 ml-1 align-middle" />
          </p>
        </div>

        {/* Right Form Section */}
        <div className="p-4 sm:p-6 w-full">
          <form onSubmit={handleSubmit} className="relative flex items-center justify-between bg-[#f0f0f3] rounded-full p-2 shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] transition-all duration-300 hover:shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff]">
            <label htmlFor="membershipId" className="sr-only">Membership ID</label>
            <input
              id="membershipId"
              name="membershipId"
              value={membershipId}
              onChange={(e) => setMembershipId(e.target.value)}
              type="text"
              placeholder="Enter Membership ID"
              className="flex-1 min-w-0 bg-[#f0f0f3] rounded-full pl-4 sm:pl-6 pr-24 sm:pr-36 py-3 sm:py-4 text-zinc-800 placeholder-zinc-400 focus:outline-none transition-all duration-300 text-sm sm:text-base"
              inputMode="text"
              autoComplete="off"
              aria-invalid={false}
              disabled={loading}
            />

            <button
              type="submit"
              disabled={loading}
              className={`absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-teal-700 text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold flex items-center justify-center gap-2 shadow-[3px_3px_6px_#c5c5c5,-3px_-3px_6px_#ffffff] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.2)] hover:bg-teal-800 transition-all duration-300 whitespace-nowrap text-sm sm:text-base ${loading ? "opacity-70 cursor-wait" : ""}`}
            >
              {loading ? "Sending..." : "Send"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}