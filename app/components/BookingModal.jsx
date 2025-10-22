"use client";
// import { useState } from "react";
import { X } from "lucide-react";

export default function BookingModal({ open, onClose }) {
    if (!open) return null;
    return (
        <div className="bg-black/10 fixed inset-0 flex justify-center items-center z-[999]">
            <div className="bg-white border-none w-[90%] max-w-lg p-6 relative rounded-sm text-zinc-800">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-700"
                >
                    <X size={20} />
                </button>

                {/* Heading */}
                <h3 className="text-2xl font-semibold text-zinc-800 mb-4 text-center">
                    Book Your Trip !
                </h3>

                {/* Form */}
                <form className="space-y-4">
                    {/* Row 1: Name + Contact */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="flex-1 border border-zinc-300 rounded-sm px-3 py-2 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-600"
                        />
                        <input
                            type="text"
                            placeholder="Contact"
                            className="flex-1 border border-zinc-300 rounded-sm px-3 py-2 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-600"
                        />
                    </div>

                    {/* Row 2: Date + Family Members */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            placeholder="Preferred Date"
                            className="flex-1 border border-zinc-300 rounded-sm px-3 py-2 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-600"
                        />
                        <input
                            type="text"
                            placeholder="Number of Travellers"
                            className="flex-1 border border-zinc-300 rounded-sm px-3 py-2 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-600"
                        />
                    </div>

                    {/* Message */}
                    <textarea
                        rows="3"
                        placeholder="Message"
                        className="w-full border border-zinc-300 rounded-sm px-3 py-2 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-600 resize-none"
                    ></textarea>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border border-zinc-400 text-zinc-700 rounded-sm hover:bg-zinc-100 transition"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-orange-700 text-white px-4 py-2 rounded-sm shadow hover:bg-orange-800 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

