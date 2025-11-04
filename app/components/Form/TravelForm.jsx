// app/components/TourForm.jsx
"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TourForm() {
  const [form, setForm] = useState({
    fullName: "",
    contact: "",
    email: "",
    travellers: "",
    preferredDate: "",
    duration: "",
    description: "",
    destination: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const validate = () => {
    const {
      fullName,
      contact,
      email,
      travellers,
      preferredDate,
      duration,
      description,
      destination,
    } = form;

    // 🧩 Full Name validation
    if (!fullName.trim()) return "Full Name is required.";
    if (fullName.trim().length < 2 || fullName.trim().length > 50)
      return "Full Name must be 2–50 characters long.";
    if (!/^[A-Za-z\s]+$/.test(fullName.trim()))
      return "Full Name can only contain letters and spaces.";

    // 🧩 Contact validation
    if (!contact.trim()) return "Contact number is required.";
    if (!/^\d{10,14}$/.test(contact.trim()))
      return "Please enter a valid contact number.";

    // 🧩 Email validation
    if (!email.trim()) return "Email is required.";
    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email.trim())
    )
      return "Please enter a valid email address.";

    // 🧩 Travellers validation (numeric)
    if (!travellers) return "Please enter number of travellers.";
    if (isNaN(travellers) || travellers <= 0)
      return "Travellers must be a positive number.";

    // 🧩 Preferred Date validation
    if (!preferredDate.trim()) return "Preferred date is required.";
    if (isNaN(Date.parse(preferredDate)))
      return "Please select a valid preferred date.";

    // 🧩 Duration validation (numeric)
    if (!duration) return "Please enter duration of the tour.";
    if (isNaN(duration) || duration <= 0)
      return "Duration must be a positive number.";

    // 🧩 Description validation
    if (description.trim().length > 500)
      return "Message cannot exceed 500 characters.";

    // 🧩 Destination validation
    if (!destination.trim()) return "Please select a destination.";

    return null; // ✅ No errors
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
        email: form.email.trim(),
        travellers: form.travellers.trim(),
        preferredDate: form.preferredDate.trim(),
        duration: form.duration.trim(),
        description: form.description.trim(),
        destination: form.destination.trim(),
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
        toast.error(
          data?.error ||
          "You’ve already submitted once. Please try again later."
        );
      } else {
        toast.success("Thank you! We'll be in touch soon.", {
          duration: 3000,
          position: "top-center",
        });
        setForm({
          fullName: "",
          contact: "",
          email: "",
          travellers: "",
          preferredDate: "",
          duration: "",
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
    <form onSubmit={handleSubmit} className="space-y-4 text-md">
      {/* 🛡️ Hidden Honeypot Field (Spam Trap) */}
      <input
        type="text"
        name="honeypot"
        value={form.honeypot || ""}
        onChange={handleChange}
        style={{ display: "none" }}
        tabIndex="-1"
        autoComplete="off"
      />

      {/* Row 1 — Full Name + Contact */}
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
          placeholder="Contact Number"
          value={form.contact}
          onChange={handleChange}
          required
          pattern="[0-9]*"
          inputMode="numeric"
          className="flex-1 border border-zinc-400 rounded-sm px-3 py-2 text-zinc-700 focus:outline-none focus:border-zinc-600"
        />
      </div>

      {/* Row 2 — Email + Number of Travellers */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="flex-1 border border-zinc-400 rounded-sm px-3 py-2 text-zinc-700 focus:outline-none focus:border-zinc-600"
        />
        <input
          name="travellers"
          type="number"
          placeholder="No. of Travellers"
          value={form.travellers}
          onChange={handleChange}
          required
          min="1"
          max="99"
          className="flex-1 border border-zinc-400 rounded-sm px-3 py-2 text-zinc-700 focus:outline-none focus:border-zinc-600"
        />
      </div>

      {/* Row 3 — Preferred Date + Duration */}
      <div className="flex flex-col sm:flex-row gap-3">
        <DatePicker
          selected={form.preferredDate ? new Date(form.preferredDate) : null}
          onChange={(date) =>
            setForm((prev) => ({
              ...prev,
              preferredDate: date ? date.toISOString().split("T")[0] : "",
            }))
          }
          placeholderText="Preferred Date"
          dateFormat="yyyy-MM-dd"
          className="flex-1 w-full border border-zinc-400 rounded-sm px-3 py-2 text-zinc-700 focus:outline-none focus:border-zinc-600"
        />

        <input
          name="duration"
          type="number"
          placeholder="Duration (in days)"
          value={form.duration}
          onChange={handleChange}
          required
          min="1"
          max="60"
          className="flex-1 border border-zinc-400 rounded-sm px-3 py-2 text-zinc-700 focus:outline-none focus:border-zinc-600"
        />
      </div>

      {/* Row 4 — Message / Description */}
      <textarea
        name="description"
        rows="2"
        placeholder="Describe your tour or special requirements"
        value={form.description}
        onChange={handleChange}
        required
        className="w-full border border-zinc-400 rounded-sm px-3 py-2 text-zinc-700 focus:outline-none focus:border-zinc-600 resize-none"
      ></textarea>

      {/* Row 5 — Destination + Submit */}
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
  );
}
