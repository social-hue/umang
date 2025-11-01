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

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const validate = () => {
    const { fullName, contact, preferredDate, travellers, description, destination } = form;

    // 🧩 Full Name validation
    if (!fullName.trim()) return "Full Name is required.";
    if (fullName.trim().length < 2 || fullName.trim().length > 50)
      return "Full Name must be 2–50 characters long.";
    if (!/^[A-Za-z\s]+$/.test(fullName.trim()))
      return "Full Name can only contain letters and spaces.";

    // 🧩 Contact validation
    if (!contact.trim()) return "Contact number is required.";
    if (!/^\d{10,14}$/.test(contact.trim()))
      return "Contact number must contain 10–14 digits.";

    // 🧩 Destination validation
    if (!destination.trim()) return "Please select a destination.";

    // 🧩 Travellers validation
    // if (!travellers || !/^\d+$/.test(travellers) || Number(travellers) < 1)
    //   return "Please enter a valid number of travellers.";

    // 🧩 Description validation
    // if (!description.trim()) return "Description is required.";
    // if (description.trim().length > 300)
    //   return "Description too long (max 300 characters).";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }

    setLoading(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      // 🧩 Execute reCAPTCHA v2 Invisible dynamically
      const token = await grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "tour_form" }
      );

      const payload = {
        fullName: form.fullName.trim(),
        contact: form.contact.trim(),
        preferredDate,
        travellers: form.travellers.trim(),
        description: form.description.trim(),
        destination,
        recaptchaToken: token,
      };

      const res = await fetch("/api/tour", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        toast.error(data?.error || `Server error (${res.status})`);
      } else {
        toast.success("Thank you! We'll be in touch soon.", {
          duration: 3000,
          position: "top-center",
        });
        setForm({
          fullName: "",
          contact: "",
          preferredDate: "",
          travellers: "",
          description: "",
          destination: "",
        });
      }
    } catch (err) {
      if (err.name === "AbortError") {
        toast.error("Request timed out. Please try again.");
      } else {
        console.error("Fetch error:", err);
        toast.error("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 text-md">
        {/* Row 1 */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
            className="flex-1 border border-zinc-400 rounded-sm px-3 py-2 text-zinc-700 focus:outline-none focus:border-zinc-600"
          />
          <input
            name="contact"
            type="tel"
            placeholder="Contact"
            value={form.contact}
            onChange={handleChange}
            required
            className="flex-1 border border-zinc-400 rounded-sm px-3 py-2 text-zinc-700 focus:outline-none focus:border-zinc-600"
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
            className="flex-1 border border-zinc-400 rounded-sm px-3 py-2 text-zinc-700 focus:outline-none focus:border-zinc-600"
          />

          <select
            name="travellers"
            value={form.travellers}
            onChange={handleChange}
            required
            className="flex-1 border border-zinc-400 rounded-sm px-2 py-2 text-zinc-700 bg-white cursor-pointer focus:outline-none focus:border-zinc-600"
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

        {/* Description */}
        <textarea
          name="description"
          rows="3"
          placeholder="Describe Your Tour"
          value={form.description}
          onChange={handleChange}
          className="w-full border border-zinc-400 rounded-sm px-3 py-2 text-zinc-700 focus:outline-none focus:border-zinc-600 resize-none"
        ></textarea>

        {/* Destination + Submit */}
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            name="destination"
            value={form.destination}
            onChange={handleChange}
            required
            className="flex-1 border border-zinc-400 rounded-sm px-2 py-2 bg-white text-zinc-700 cursor-pointer focus:outline-none focus:border-zinc-600"
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
