"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

// LegalFormSection renders the layout and uses LegalForm for the actual form
export default function LegalFormSection() {
  return (
    <section className="py-10 md:py-16 bg-[url(/banner/booking-banner-3.jpg)] bg-cover px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        {/* Left Heading Section */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 leading-tight">
            Book Your <span className="text-teal-700">Consultation</span> Today
          </h2>
          <p className="text-zinc-800 text-lg max-w-md mx-auto md:mx-0">
            Get expert legal guidance and clear, practical advice from our experienced team.
          </p>
        </div>
        {/* Right Form Section */}
        <div className="bg-white shadow-lg rounded-md p-6">
          <LegalForm />
        </div>
      </div>
    </section>
  );
}

function LegalForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
  });
  const [loading, setLoading] = useState(false);
  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const validate = () => {
    const { fullName, email, phone } = form;

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      toast.error("Please fill all required fields.");
      return false;
    }

    if (!/^[A-Za-z\s]{3,50}$/.test(fullName.trim())) {
      toast.error("Full name must contain only letters (3–50 chars).");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    const cleanPhone = phone.replace(/[^\d+]/g, "");
    if (cleanPhone.length < 10 || cleanPhone.length > 14) {
      toast.error("Please enter a valid phone number.");
      return false;
    }

    if (form.honeypot) {
      return false; // bot detected
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      // Ensure reCAPTCHA is ready
      if (!window.grecaptcha || !SITE_KEY) {
        throw new Error("reCAPTCHA not loaded properly.");
      }

      const token = await window.grecaptcha.execute(SITE_KEY, { action: "submit" });

      const payload = {
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
        honeypot: form.honeypot,
        recaptchaToken: token,
      };

      const res = await fetch("/api/legal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success("Thank you! We'll be in touch soon.", {
          duration: 3000,
          position: "top-center",
        });
        setForm({ fullName: "", email: "", phone: "", message: "", honeypot: "" });
      } else {
        toast.error(data.message || "Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error("Appointment submission error:", err);
      toast.error("Network or reCAPTCHA error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="honeypot"
        value={form.honeypot}
        onChange={handleChange}
        className="hidden"
        autoComplete="off"
      />

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">Full Name</label>
        <input
          name="fullName"
          type="text"
          placeholder="Enter your name"
          value={form.fullName}
          onChange={handleChange}
          disabled={loading}
          required
          className="w-full border text-md text-zinc-700 border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:border-zinc-600"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">Email Address</label>
        <input
          name="email"
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={handleChange}
          disabled={loading}
          required
          className="w-full border text-md text-zinc-700 border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:border-zinc-600"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">Phone Number</label>
        <input
          name="phone"
          type="tel"
          placeholder="+91 9876543210"
          value={form.phone}
          onChange={handleChange}
          disabled={loading}
          required
          className="w-full border text-md text-zinc-700 border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:border-zinc-600"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">Message</label>
        <textarea
          name="message"
          rows="3"
          placeholder="Your message..."
          value={form.message}
          onChange={handleChange}
          disabled={loading}
          className="w-full border text-md text-zinc-700 border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:border-zinc-600 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full text-white py-2.5 rounded-md font-medium transition-colors mt-2 flex items-center justify-center ${
          loading ? "bg-zinc-600 cursor-not-allowed" : "bg-zinc-800 hover:bg-zinc-600"
        }`}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
            Sending...
          </>
        ) : (
          "Book Appointment"
        )} 
      </button>
    </form>
  );
}

