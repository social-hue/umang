"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Grid() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-6 w-full flex flex-col md:flex-row items-center md:gap-3 mt-8 rounded-2xl max-w-5xl mx-auto">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-6"
      >
        <h2 className="text-2xl md:text-5xl font-bold text-zinc-800 leading-snug text-center md:text-left">
          Send your query, <br />{" "}
          <span className="text-[#079184]">Our team</span> will get back to you soon{" "}
          <ArrowRight className="inline-block w-6 h-6 md:w-8 md:h-8 text-[#079184]" />
        </h2>
      </motion.div>

      {/* Right Side - Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full md:w-[45%] text-zinc-800 p-8 shadow-xl md:ml-6 md:mt-0"
      >
        <h2 className="text-2xl font-semibold text-center mb-4 md:mb-6">Contact Us</h2>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-md font-medium mb-1"
            >
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
              autoComplete="on"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-md font-medium mb-1"
            >
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
              autoComplete="on"
            />
          </div>
          {/* Message */}
          <div>
            <label className="block text-md font-medium mb-1">Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:outline-none focus:border-green-600 p-2 resize-none"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#079184] to-[#075c54] text-white font-medium py-3 hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* Status messages */}
        {status === "success" && <p className="text-green-600 mt-4">✅ Message sent successfully!</p>}
        {status === "error" && <p className="text-red-600 mt-4">❌ Failed to send message. Please try again.</p>}
      </motion.div>
    </section>
  );
}
