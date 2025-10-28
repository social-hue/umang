"use client";
import React, { useState, useRef, useEffect } from "react";
import toast  from "react-hot-toast";

// import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

export default function LegalFormSection() {
  return (
    <section className="bg-gradient-to-br from-zinc-100 to-zinc-200 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Heading Section */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 leading-tight">
            Book Your <span className="text-teal-700">Consultation</span> Today
          </h2>
          <p className="text-zinc-600 text-lg max-w-md mx-auto md:mx-0">
            Get expert financial guidance and stress-free tax or investment
            planning with Umang Living’s trusted professionals.
          </p>
        </div>
        {/* Right Form Section */}
        <div className="bg-white shadow-lg rounded-md p-6 sm:p-8">
          {/* <h3 className="text-2xl text-center font-bold text-zinc-800 mb-4">
            Schedule Your Consultation
          </h3> */}
          <LegalForm />
        </div>
      </div>
    </section>
  );
}

// function AppointmentForm() {
//   // const [selectedDate, setSelectedDate] = useState("");
//   // const [isOpen, setIsOpen] = useState(false);
//   // const [currentMonth, setCurrentMonth] = useState(new Date());
//   // const pickerRef = useRef(null);

//   // const months = [
//   //   "January",
//   //   "February",
//   //   "March",
//   //   "April",
//   //   "May",
//   //   "June",
//   //   "July",
//   //   "August",
//   //   "September",
//   //   "October",
//   //   "November",
//   //   "December",
//   // ];

//   // useEffect(() => {
//   //   const handleClickOutside = (event) => {
//   //     if (pickerRef.current && !pickerRef.current.contains(event.target)) {
//   //       setIsOpen(false);
//   //     }
//   //   };
//   //   document.addEventListener("mousedown", handleClickOutside);
//   //   return () => document.removeEventListener("mousedown", handleClickOutside);
//   // }, []);

//   // const getDaysInMonth = (date) => {
//   //   const year = date.getFullYear();
//   //   const month = date.getMonth();
//   //   const firstDay = new Date(year, month, 1).getDay();
//   //   const daysInMonth = new Date(year, month + 1, 0).getDate();
//   //   return { firstDay, daysInMonth };
//   // };

//   // const handleDateClick = (day) => {
//   //   const year = currentMonth.getFullYear();
//   //   const month = currentMonth.getMonth();
//   //   const date = new Date(year, month, day);
//   //   const formatted = `${String(month + 1).padStart(2, "0")}/${String(day).padStart(
//   //     2,
//   //     "0"
//   //   )}/${year}`;
//   //   setSelectedDate(formatted);
//   //   setIsOpen(false);
//   // };

//   // const changeMonth = (direction) => {
//   //   setCurrentMonth((prev) => {
//   //     const newDate = new Date(prev);
//   //     newDate.setMonth(prev.getMonth() + direction);
//   //     return newDate;
//   //   });
//   // };

//   // const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);
//   // const blanks = Array(firstDay).fill(null);
//   // const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

//   // const today = new Date();
//   // const isToday = (day) =>
//   //   day === today.getDate() &&
//   //   currentMonth.getMonth() === today.getMonth() &&
//   //   currentMonth.getFullYear() === today.getFullYear();

//   // const isSelected = (day) => {
//   //   if (!selectedDate) return false;
//   //   const [m, d, y] = selectedDate.split("/");
//   //   return (
//   //     parseInt(d) === day &&
//   //     parseInt(m) - 1 === currentMonth.getMonth() &&
//   //     parseInt(y) === currentMonth.getFullYear()
//   //   );
//   // };

//   return (
//     <form className="space-y-5">
//       {/* Name */}
//       <div>
//         <label className="block text-sm font-medium text-zinc-700 mb-1">
//           Full Name
//         </label>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           className="w-full border border-zinc-300 rounded-md px-3 py-2 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-teal-700"
//         />
//       </div>

//       {/* Email */}
//       <div>
//         <label className="block text-sm font-medium text-zinc-700 mb-1">
//           Email Address
//         </label>
//         <input
//           type="email"
//           placeholder="your@email.com"
//           className="w-full border border-zinc-300 rounded-md px-3 py-2 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-teal-700"
//         />
//       </div>
//       {/* Date Picker */}
//       {/* <div className="relative" ref={pickerRef}>
//         <label className="block text-sm font-medium text-zinc-700 mb-1">
//           Preferred Date
//         </label>
//         <div className="relative">
//           <input
//             type="text"
//             value={selectedDate}
//             readOnly
//             placeholder="Select a date"
//             onClick={() => setIsOpen(!isOpen)}
//             className="w-full border border-zinc-300 rounded-md px-3 py-2 pr-10 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-teal-700 cursor-pointer"
//           />
//           <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
//         </div>

//         {isOpen && (
//           <div className="absolute z-50 mt-2 bg-white border border-zinc-300 rounded-lg shadow-lg w-64 p-3">
//             <div className="flex items-center justify-between mb-3">
//               <button
//                 onClick={() => changeMonth(-1)}
//                 type="button"
//                 className="p-1 hover:bg-zinc-100 rounded"
//               >
//                 <ChevronLeft className="w-4 h-4 text-zinc-600" />
//               </button>
//               <div className="text-sm font-medium text-zinc-800">
//                 {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
//               </div>
//               <button
//                 onClick={() => changeMonth(1)}
//                 type="button"
//                 className="p-1 hover:bg-zinc-100 rounded"
//               >
//                 <ChevronRight className="w-4 h-4 text-zinc-600" />
//               </button>
//             </div>

//             <div className="grid grid-cols-7 text-xs mb-1 text-zinc-500">
//               {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
//                 <div key={day} className="text-center py-1 font-medium">
//                   {day}
//                 </div>
//               ))}
//             </div>

//             <div className="grid grid-cols-7 gap-1">
//               {blanks.map((_, idx) => (
//                 <div key={`blank-${idx}`} className="aspect-square" />
//               ))}
//               {days.map((day) => (
//                 <button
//                   key={day}
//                   type="button"
//                   onClick={() => handleDateClick(day)}
//                   className={`aspect-square text-sm rounded-md flex items-center justify-center transition
//                     ${
//                       isSelected(day)
//                         ? "bg-teal-700 text-white"
//                         : isToday(day)
//                         ? "bg-zinc-100 text-zinc-800 font-semibold"
//                         : "hover:bg-zinc-50 text-zinc-700"
//                     }`}
//                 >
//                   {day}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div> */}
//       {/* Phone */}
//       <div>
//         <label className="block text-sm font-medium text-zinc-700 mb-1">
//           Phone Number
//         </label>
//         <input
//           type="tel"
//           placeholder="(123) 456-7890"
//           className="w-full border border-zinc-300 rounded-md px-3 py-2 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-teal-700"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-zinc-700 mb-1">
//           Message
//         </label>
//         <input
//           type="text"
//           placeholder="Your Message..."
//           className="w-full border border-zinc-300 rounded-md px-3 py-2 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-teal-700"
//         />
//       </div>
//       {/* Button */}
//       <button
//         type="submit"
//         className="w-full bg-zinc-800 text-white py-2.5 rounded-md font-medium hover:bg-teal-700 transition-colors mt-2"
//       >
//         Book Appointment
//       </button>
//     </form>
//   );
// }


function LegalForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/legal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Thank you! We'll be in touch soon", { duration: 3000, position: "top-center" });
        setForm({ fullName: "", email: "", phone: "", message: "" });
      } else {
        toast.error(data.message || "Failed to book appointment.");
      }
    } catch (err) {
      console.log("An error occurred during the fetch operation:", err);
      toast.error("Network error. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Full Name
          </label>
          <input
            name="fullName"
            type="text"
            placeholder="Enter your name"
            value={form.fullName}
            onChange={handleChange}
            className="w-full border text-md text-zinc-700 border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:border-zinc-600"
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            className="w-full border text-md text-zinc-700 border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:border-zinc-600"
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="(123) 456-7890"
            value={form.phone}
            onChange={handleChange}
            className="w-full border text-md text-zinc-700 border-zinc-300 rounded-md px-3 py-2 focus:outline-none focus:border-zinc-600"
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Message
          </label>
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
            loading
              ? "bg-zinc-600 cursor-not-allowed"
              : "bg-zinc-800 hover:bg-zinc-600 cursor-pointer"
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
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
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