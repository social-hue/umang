"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

// Note: make sure the reCAPTCHA script is loaded in your layout:
// <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} strategy="afterInteractive" />

export default function AppointmentSection() {
  return (
    <section className="bg-gradient-to-br from-zinc-100 to-zinc-200 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 leading-tight">
            Book Your <span className="text-teal-700">Consultation</span> Today
          </h2>
          <p className="text-zinc-600 text-lg max-w-md mx-auto md:mx-0">
            Get expert financial guidance and stress-free tax or investment planning with Umang Living’s trusted professionals.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-md p-6 sm:p-8">
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}

function AppointmentForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);

  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.fullName || !form.email || !form.phone) {
      toast.error("Please fill all required fields.");
      return false;
    }
    // Basic email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      toast.error("Please enter a valid email.");
      return false;
    }
    // Basic phone digits check
    const phoneDigits = form.phone.replace(/[^\d]/g, "");
    if (phoneDigits.length < 7) {
      toast.error("Please enter a valid phone number.");
      return false;
    }
    // honeypot should be empty
    if (form.honeypot) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      // Get reCAPTCHA token (v2 invisible)
      const token = await new Promise((resolve, reject) => {
        if (!window.grecaptcha) return reject(new Error("reCAPTCHA not loaded"));
        window.grecaptcha.ready(() => {
          // execute returns a promise that resolves with the token
          window.grecaptcha
            .execute(SITE_KEY, { action: "submit" })
            .then((t) => resolve(t))
            .catch((err) => reject(err));
        });
      });

      // optional: log token in dev only (remove in production)
      // console.log("reCAPTCHA token:", token);

      const payload = { ...form, recaptchaToken: token };

      const res = await fetch("/api/finance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success("Thank you! We'll be in touch soon", { duration: 3000, position: "top-center" });
        setForm({ fullName: "", email: "", phone: "", message: "", honeypot: "" });
      } else {
        toast.error("You already submitted once, Please try again later." || data.message);
      }
    } catch (err) {
      console.error("Appointment submission error:", err);
      toast.error("Network or reCAPTCHA error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot */}
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
            className="w-full border text-md text-zinc-700 border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:border-zinc-600"
            disabled={loading}
            required
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
            className="w-full border text-md text-zinc-700 border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:border-zinc-600"
            disabled={loading}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Phone Number</label>
          <input
            name="phone"
            type="tel"
            placeholder="(123) 456-7890"
            value={form.phone}
            onChange={handleChange}
            className="w-full border text-md text-zinc-700 border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:border-zinc-600"
            disabled={loading}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Message</label>
          <input
            name="message"
            type="text"
            placeholder="Your Message..."
            value={form.message}
            onChange={handleChange}
            className="w-full border text-md text-zinc-700 border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:border-zinc-600"
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white py-2.5 rounded-md font-medium transition-colors mt-2 flex items-center justify-center ${
            loading ? "bg-zinc-600 cursor-not-allowed" : "bg-zinc-800 hover:bg-zinc-600 cursor-pointer"
          }`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
    </div>
  );
}
