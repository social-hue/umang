"use client";

import { useState } from "react";
import { X, Mail } from "lucide-react";
import toast from "react-hot-toast";

const PartnerForm = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    company_name: "",
    contact_person: "",
    contact_number: "",
    email: "",
    designation: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/partner-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("We'll be in touch soon!", { duration: 3000 });
        setFormData({
          company_name: "",
          contact_person: "",
          contact_number: "",
          email: "",
          designation: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-[10000] px-2 sm:px-3">
      <div
        className="bg-white w-[95%] sm:w-[90%] md:w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden 
                   mx-auto max-h-[90vh] sm:max-h-none overflow-y-auto"
      >
        {/* Header */}
        <div className="bg-[#008080] flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 sticky top-0 z-10">
          <div className="flex items-center gap-2 text-white text-base sm:text-lg font-semibold">
            <Mail className="w-5 h-5" />
            <span>Collaborate</span>
          </div>
          <button onClick={() => setOpen(false)}>
            <X className="w-5 h-5 text-white hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="text-left p-4 sm:p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-md text-zinc-800 font-semibold mb-1">
                Company Name
              </label>
              <input
                name="company_name"
                type="text"
                placeholder="Enter Company Name"
                value={formData.company_name}
                onChange={handleChange}
                className="w-full border text-zinc-600 border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#008080] outline-none"
              />
            </div>

            <div>
              <label className="block text-md text-zinc-800 font-semibold mb-1">
                Contact Person
              </label>
              <input
                name="contact_person"
                type="text"
                placeholder="Enter Contact Person"
                value={formData.contact_person}
                onChange={handleChange}
                className="w-full border text-zinc-600 border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#008080] outline-none"
              />
            </div>

            <div>
              <label className="block text-md text-zinc-800 font-semibold mb-1">
                Contact Number
              </label>
              <input
                name="contact_number"
                type="tel"
                placeholder="Enter Contact Number"
                value={formData.contact_number}
                onChange={handleChange}
                className="w-full border text-zinc-600 border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#008080] outline-none"
              />
            </div>

            <div>
              <label className="block text-md text-zinc-800 font-semibold mb-1">
                Email Id
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter Email Id"
                value={formData.email}
                onChange={handleChange}
                className="w-full border text-zinc-600 border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#008080] outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-md text-zinc-800 font-semibold mb-1">
                Designation
              </label>
              <input
                name="designation"
                type="text"
                placeholder="Enter Designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full border text-zinc-600 border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#008080] outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-md text-zinc-800 font-semibold mb-1">
                Message Box
              </label>
              <textarea
                name="message"
                placeholder="Enter Message Box"
                rows="2"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 text-zinc-600 rounded-md px-3 py-2 resize-none focus:ring-2 focus:ring-[#008080] outline-none"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-5 py-2 border rounded-md text-zinc-800 hover:bg-gray-100 transition"
            >
              Close
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-[#d81b60] text-white rounded-md font-semibold hover:bg-[#b0164f] transition"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PartnerForm;
