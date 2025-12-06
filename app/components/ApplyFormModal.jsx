"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { X } from "lucide-react";

export default function ApplyFormModal({ jobTitle, onClose }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    contact: "",
    experience: "",
    email: "",
    honeypot: "",
  });

  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.fullName.trim())
      return toast.error("Full Name is required.");

    if (!/^[A-Za-z\s]{2,50}$/.test(form.fullName.trim()))
      return toast.error("Full Name must be 2–50 letters only.");

    if (!form.contact.trim())
      return toast.error("Contact Number is required.");

    if (!/^\d{10,14}$/.test(form.contact.trim()))
      return toast.error("Invalid Contact Number.");

    if (!form.email.trim())
      return toast.error("Email is required.");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      return toast.error("Invalid Email Address.");

    if (form.honeypot) return false; // bot detected

    if (!jobTitle) return toast.error("Job title missing.");

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const token = await window.grecaptcha.execute(SITE_KEY, {
        action: "apply_form",
      });

      const payload = {
        ...form,
        recaptchaToken: token,
        jobTitle,
      };

      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success("Application submitted successfully!");

        setForm({
          fullName: "",
          contact: "",
          experience: "",
          email: "",
          honeypot: "",
        });

        onClose(); // Close modal on success
      } else {
        toast.error(data.message || "Submission failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-[100] px-4">
      <div className="bg-white rounded-md shadow-2xl max-w-md w-full p-6 animate-fadeIn relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Honeypot (hidden) */}
          <input
            type="text"
            name="honeypot"
            value={form.honeypot}
            onChange={handleChange}
            className="hidden"
          />

          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 outline-none"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              placeholder="Enter contact number"
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 outline-none"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="text-sm font-medium text-gray-700">Experience</label>
            <input
              type="text"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              placeholder="Eg: 2 years in Sales"
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email ID</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold py-2.5 rounded-md shadow-md hover:scale-[1.01] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
          
        </form>
      </div>
    </div>
  );
}
