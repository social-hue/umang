"use client"
import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingCTA() {
  return (
    <div className="fixed top-1/2 right-0 z-50 -translate-y-1/2 flex flex-col gap-3">
      {/* Contact Button */}
      <Link href="tel:+18002028704">
        <button aria-label="Call" className="flex items-center gap-2 bg-[#069183] w-full text-white  font-semibold px-3 py-4 rounded-l-lg shadow-lg hover:bg-[#057366] transition">
          <FaPhoneAlt className="h-5 w-5"/>
        </button>
      </Link>

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/919560986669"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button aria-label="WhatsApp" className="flex items-center  w-full gap-2 bg-[#25D366] text-white font-semibold px-3 py-4 rounded-l-lg shadow-lg hover:bg-[#1DA851] transition">
          <FaWhatsapp className="h-6 w-6" />
        </button>
      </Link>
    </div>
  );
}
