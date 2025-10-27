// app/components/TourForm.jsx
"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

export default function TourForm() {
  const [form, setForm] = useState({
    fullName: "",
    contact: "",
    preferredDate: "",
    travellers: "",
    description: "",
    destination: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.fullName.trim()) return "Full Name is required.";
    if (!form.contact.trim()) return "Contact is required.";
    if (!form.destination.trim()) return "Please select a destination.";
    if (!form.travellers) return "Please select number of travellers.";
    // optional: add phone format check
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      toast.error(err);
      return;
    }

    setLoading(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch("/api/tour", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        toast.error(data?.message || `Server error (${res.status})`);
      } else {
        const data = await res.json();
        toast.success(data?.message || "Submitted successfully!");
        setForm({
          fullName: "",
          contact: "",
          preferredDate: "",
          travellers: "Number of Travellers",
          description: "",
          destination: "",
        });
      }
    } catch (err) {
      if (err.name === "AbortError") toast.error("Request timed out. Try again.");
      else {
        console.error("Fetch error:", err);
        toast.error("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* <Toaster position="top-right" /> */}
      <form onSubmit={handleSubmit} className="space-y-4 text-md">
        {/* Row 1 */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            className="flex-1 border border-zinc-300 rounded-sm px-3 py-2 text-zinc-800 placeholder-zinc-500 focus:outline-none focus:border-zinc-600"
          />
          <input
            name="contact"
            type="tel"
            placeholder="Contact"
            value={form.contact}
            onChange={handleChange}
            className="flex-1 border border-zinc-300 rounded-sm px-3 py-2 text-zinc-800 placeholder-zinc-500 focus:outline-none focus:border-zinc-600"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            name="preferredDate"
            type="text"
            placeholder="Preferred Date"
            value={form.preferredDate}
            onChange={handleChange}
            className="flex-1 border border-zinc-300 rounded-sm px-3 py-2 text-zinc-800 placeholder-zinc-500 focus:outline-none focus:border-zinc-600"
          />

          <select
            name="travellers"
            value={form.travellers}
            onChange={handleChange}
            className="flex-1 border border-zinc-300 rounded-sm px-2 py-2 text-zinc-700 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 bg-white cursor-pointer"
          >
            <option value="" disabled>
              Number of Travellers
            </option>
            <option value="0-5">0-5</option>
            <option value="5-10">5-10</option>
            <option value="10-15">10-15</option>
            <option value="more">More</option>
          </select>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col gap-3">
          <textarea
            name="description"
            rows="3"
            placeholder="Describe Your Tour"
            value={form.description}
            onChange={handleChange}
            className="w-full border border-zinc-300 rounded-sm px-3 py-2 text-zinc-800 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 resize-none"
          ></textarea>
        </div>

        {/* Row 4 */}
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            name="destination"
            value={form.destination}
            onChange={handleChange}
            className="flex-1 border border-zinc-300 rounded-sm px-2 py-2 text-zinc-700 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 bg-white cursor-pointer"
          >
            <option value="" disabled>
              Select Destination
            </option>
            <option value="Char Dham">Char Dham</option>
            <option value="Goa">Goa</option>
            <option value="Darjeeling">Darjeeling</option>
            <option value="Kerala">Kerala</option>
            <option value="Other">Other</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-orange-700 text-white px-8 py-2 rounded-sm shadow hover:bg-orange-800 transition whitespace-nowrap disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}
