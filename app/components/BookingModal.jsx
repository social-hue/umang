"use client";
import { useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

export default function BookingModal({ tourname, open, onClose }) {
  const [form, setForm] = useState({
    fullName: "",
    contact: "",
    preferredDate: "",
    travellers: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🧩 Extract form values
    const { fullName, contact, preferredDate, travellers, message } = form;

    // ==============================
    // 🧠 Client-side Validation
    // ==============================

    // 1️⃣ Empty field check
    if (!fullName.trim() || !contact.trim() || !preferredDate.trim() || !travellers.trim() || !message.trim()) {
      toast.error("All fields are required, including your message.");
      return;
    }

    // 2️⃣ Name validation — alphabets and spaces only
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(fullName.trim())) {
      toast.error("Name can only contain alphabets and spaces.");
      return;
    }

    // 3️⃣ Contact validation — numbers only, 10–14 digits
    const contactRegex = /^[0-9]{10,14}$/;
    if (!contactRegex.test(contact.trim())) {
      toast.error("Please enter a valid contact number");
      return;
    }

    // 4️⃣ Optional: simple date check
    if (!preferredDate.trim()) return "Preferred date is required.";
    if (isNaN(Date.parse(preferredDate)))
      return "Please select a valid preferred date.";

    // Passed validation ✅
    setLoading(true);

    try {
      // 🧩 Execute reCAPTCHA v2 Invisible
      const token = await grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "booking_form" }
      );

      const bookingData = {
        fullName: fullName.trim(),
        contact: contact.trim(),
        preferredDate: preferredDate.trim(),
        travellers,
        message: message.trim(),
        tourName: tourname,
        recaptchaToken: token,
      };

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 20000); // 15s timeout

      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
        signal: controller.signal,
      });

      clearTimeout(timeout);
      const result = await res.json();

      if (res.ok) {
        toast.success("Thank you! We'll get back to you shortly.");
        setForm({
          fullName: "",
          contact: "",
          preferredDate: "",
          travellers: "",
          message: "",
        });
        onClose();
      } else {
        toast.error("Your already submitted once, Please try again later." || "Failed to submit booking.");
      }
    } catch (err) {
      if (err.name === "AbortError") {
        toast.error("Request timed out. Try again.");
      } else {
        console.error("Error submitting booking:", err);
        toast.error("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black/50 fixed inset-0 flex justify-center items-center z-[500]">
      <div className="bg-white border-none w-[90%] max-w-lg p-6 relative rounded-sm text-zinc-800 shadow-xl animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 cursor-pointer text-zinc-500 hover:text-zinc-700 transition"
        >
          <X size={20} />
        </button>

        <h3 className="text-2xl font-semibold text-zinc-800 mb-4 text-center">
          Book Your Trip
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              required
              className="flex-1 border border-zinc-300 rounded-sm px-3 py-2 focus:outline-none focus:border-zinc-600"
            />
            <input
              name="contact"
              value={form.contact}
              onChange={handleChange}
              type="tel"
              placeholder="Contact"
              required
              className="flex-1 border border-zinc-300 rounded-sm px-3 py-2 focus:outline-none focus:border-zinc-600"
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              name="preferredDate"
              value={form.preferredDate}
              onChange={handleChange}
              type="date"
              placeholder="Preferred Date"
              required
              className="flex-1 border border-zinc-300 rounded-sm px-3 py-2 focus:outline-none focus:border-zinc-600"
            />
            <select
              name="travellers"
              value={form.travellers}
              onChange={handleChange}
              required
              className="flex-1 border border-zinc-300 rounded-sm px-2 py-2 bg-white cursor-pointer"
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

          {/* Message */}
          <textarea
            name="message"
            rows="3"
            value={form.message}
            required
            onChange={handleChange}
            placeholder="Message"
            className="w-full border border-zinc-300 rounded-sm px-3 py-2 focus:outline-none focus:border-zinc-600 resize-none"
          ></textarea>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-zinc-400 text-zinc-700 rounded-sm hover:bg-zinc-100 transition"
            >
              Close
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 bg-orange-700 text-white px-4 py-2 rounded-sm shadow hover:bg-orange-800 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
