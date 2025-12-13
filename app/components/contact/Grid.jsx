"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Grid() {
  const [formData, setFormData] = useState({ name: "", email: "", number: "", message: "", honeypot: "" });
  const [loading, setLoading] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");
  // Fetch CSRF token
  useEffect(() => {
    const fetchCsrf = async () => {
      try {
        const res = await fetch("/api/csrf");
        const data = await res.json();
        setCsrfToken(data.token);
      } catch (err) {
        console.error("CSRF fetch failed", err);
      }
    };
    fetchCsrf();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const cleanValue = value
      .replace(/<[^>]*>?/gm, "")      // remove HTML tags
      .replace(/\s{2,}/g, " ");       // collapse multiple spaces into one
    setFormData((prev) => ({ ...prev, [name]: cleanValue }));
  };
  
  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberPattern = /^[0-9]{10}$/;
    if (!emailPattern.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    if (!numberPattern.test(formData.number)) {
      toast.error("Please enter a valid phone number.");
      return false;
    }
    if (formData.honeypot) return false;
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      // Execute Invisible reCAPTCHA v2
      const token = await new Promise((resolve, reject) => {
        if (!window.grecaptcha) return reject("reCAPTCHA not loaded");
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: "submit" })
            .then(resolve)
            .catch(reject);
        });
      });

      // Send form + token to API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "CSRF-Token": csrfToken,
        },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");

      toast.success("Thank you! We'll be in touch soon", { duration: 3000, position: "top-center" });
      setFormData({ name: "", email: "", number: "", message: "", honeypot: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again.", { duration: 3000, position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#f9f9f9] py-8 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:gap-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 flex items-center justify-center p-4 md:p-6"
        >
          <h2 className="text-[28px] md:text-[40px] font-bold text-zinc-800 leading-snug text-center md:text-left">
            Send your query, <br />
            <span className="text-[#079184]">Our team</span> will get back to you soon{" "}
            <ArrowRight className="inline-block w-6 h-6 md:w-8 md:h-8 text-[#079184]" />
          </h2>
        </motion.div>

        {/* Right (Form) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-[40%] text-zinc-800 p-8 shadow-xl md:ml-6 md:mt-0 bg-white"
        >
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Honeypot */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              className="hidden"
              autoComplete="off"
            />

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-md font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-gray-400 focus:outline-none focus:border-green-600 p-2"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-md font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-400 focus:outline-none focus:border-green-600 p-2"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Number */}
            <div>
              <label htmlFor="number" className="block text-md font-medium mb-1">
                Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full border-b border-gray-400 focus:outline-none focus:border-green-600 p-2"
                placeholder="Enter your number"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-md font-medium mb-1">Address</label>
              <textarea
                rows="1"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-b border-gray-400 focus:outline-none focus:border-green-600 p-2 resize-none"
                placeholder="Enter your address"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-linear-to-r from-[#079184] to-[#075c54] text-white font-medium py-3 hover:opacity-90 transition disabled:opacity-50 rounded-md"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
