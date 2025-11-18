"use client";
import { useState } from "react";
import Link from "next/link";
import { navItems } from "../lib/nav-items";
import { FaLocationDot, FaYoutube, FaXTwitter } from "react-icons/fa6";
import ScrollToTopButton from "../helpers/ScrollToTopButton";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const supportLinks = [
  { lable: "Privacy Policy", link: "/termsandcondition/privacypolicy" },
  { lable: "Terms and Conditions", link: "/termsandcondition/termscondition" },
];

const Footer = () => {
  // ✅ Filter Nav
  const filteredNavItems = navItems.filter((item) =>
    ["Home", "About us", "Partners", "Contact"].includes(item.label)
  );

  // ✅ Newsletter State
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email);

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxGdH72qw7Zb84VIhHVPTR_oxY9JDhovnY0fz68v-FYZncxMYmIf0M5xMOsyJF7IN9M/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Network response was not ok");

      await res.text();
      setMessage("✅ Subscribed successfully!");
      setEmail("");
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("❌ Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative">
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-600 to-transparent"></div>

      {/* Scroll to top button */}
      <div className="absolute w-full -top-4 sm:-top-6">
        <div className="flex items-center justify-center">
          <ScrollToTopButton />
        </div>
      </div>

      <div className="overflow-hidden w-full h-full relative">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-700/20 via-transparent to-transparent pointer-events-none"></div>

        <div className="pt-8 relative z-10">
          <div className="mx-auto main_width px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

            {/* Left Logo + Description */}
            <div className="lg:pr-4">
              <div className="flex items-start mb-5">
                <img
                  src="/compressed_logo.webp"
                  alt="Umang Living"
                  className="rounded-md max-w-[200px] w-full h-auto"
                  loading="lazy"
                  decoding="async"
                  width={240}
                  height={120}
                />
              </div>
              <p className="text-zinc-900 leading-relaxed text-[15px] sm:text-[16px] max-w-xs -">
                Umang Living is India's first multi-city senior independent-living
                community, thoughtfully designed with love and respect.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h6 className="text-zinc-900 text-[16px] sm:text-[17px]  mb-5 tracking-wider uppercase border-b border-zinc-700/50 pb-3">
                Quick Links
              </h6>
              <ul className="space-y-3">
                {filteredNavItems.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-zinc-900 hover:text-zinc-900 transition-colors duration-300 text-[15px] sm:text-[16px]  inline-block hover:tranzinc-x-1 transform"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h6 className="text-zinc-900 text-[16px] sm:text-[17px]  mb-5 tracking-wider uppercase border-b border-zinc-700/50 pb-3">
                Support
              </h6>
              <ul className="space-y-3">
                {supportLinks.map((txt, idx) => (
                  <li key={idx}>
                    <Link
                      href={txt.link}
                      className="text-zinc-900 hover:text-zinc-900 transition-colors duration-300 text-[15px] sm:text-[16px]  inline-block hover:tranzinc-x-1 transform"
                    >
                      {txt.lable}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h6 className="text-zinc-900 text-[16px] sm:text-[17px]  mb-5 tracking-wider uppercase border-b border-zinc-700/50 pb-3">
                Stay Connected
              </h6>

              {/* Newsletter Form */}
              <form
                onSubmit={handleSubmit}
                className="mb-5"
              >
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    autoComplete="true"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border border-zinc-600/50 rounded-lg text-zinc-900 px-4 py-3 text-[14px] sm:text-[15px] placeholder-zinc-500 focus:outline-none focus:border-zinc-300 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-3 bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-600 hover:to-zinc-500 text-white -medium px-5 py-3 rounded-lg text-[14px] sm:text-[15px] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-tranzinc-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-zinc-100 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>

              {message && (
                <p className="text-zinc-900 text-[13px] sm:text-[14px] mb-4 px-3 py-2">{message}</p>
              )}

              {/* Social Media Icons */}
              <div className="flex justify-center md:justify-start gap-3 flex-wrap">
                <a
                  aria-label="Facebook"
                  href="https://www.facebook.com/people/Umang-Living-Senior-Citizens-Community/61579702657707/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-zinc-800/50 text-zinc-900 hover:text-zinc-900 hover:bg-zinc-300/50 hover:border-zinc-600 transition-all duration-300 backdrop-blur-sm transform hover:-tranzinc-y-0.5"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/company/umang-living/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-zinc-800/50 text-zinc-900 hover:text-zinc-900 hover:bg-zinc-300/50 hover:border-zinc-600 transition-all duration-300 backdrop-blur-sm transform hover:-tranzinc-y-0.5"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a
                  aria-label="Instagram"
                  href="https://www.instagram.com/umangliving/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-zinc-800/50 text-zinc-900 hover:text-zinc-900 hover:bg-zinc-300/50 hover:border-zinc-600 transition-all duration-300 backdrop-blur-sm transform hover:-tranzinc-y-0.5"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a
                  aria-label="YouTube"
                  href="https://www.youtube.com/@UmangLiving"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-zinc-800/50 text-zinc-900 hover:text-zinc-900 hover:bg-zinc-300/50 hover:border-zinc-600 transition-all duration-300 backdrop-blur-sm transform hover:-tranzinc-y-0.5"
                >
                  <FaYoutube className="w-4 h-4" />
                </a>
                <a
                  aria-label="Twitter"
                  href="https://x.com/MarketingU82252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-zinc-800/50 text-zinc-900 hover:text-zinc-900 hover:bg-zinc-300/50 hover:border-zinc-600 transition-all duration-300 backdrop-blur-sm transform hover:-tranzinc-y-0.5"
                >
                  <FaXTwitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-zinc-700/50">
            <div className="main_width px-4 sm:px-6 lg:px-8 py-5">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6 text-zinc-900">
                <p className="text-[13px] sm:text-[14px] md:text-[15px] text-center lg:text-left">
                  <span className="text-zinc-900 tracking-wide">
                    © 2025 UMANG LIVING SCL Pvt Ltd.
                  </span>
                </p>
                <p className="hidden md:flex items-center gap-2 text-[13px] sm:text-[14px] md:text-[15px] text-center lg:text-right">
                  <FaLocationDot className="flex-shrink-0 text-zinc-400" />
                  <span className="leading-relaxed">
                    2319, Gold Wing, Wave one Tower, Sector-18, Noida, UP-201301
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;