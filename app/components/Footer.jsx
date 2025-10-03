"use client";
import { useState } from "react";
import Link from "next/link";
import { navItems } from "../lib/nav-items";
import { FaLocationDot, FaYoutube } from "react-icons/fa6";
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
    <footer className="bg-[url(/footer.jpg)] bg-cover text-white text-sm relative">
      <div className="absolute w-full -top-6">
        <div className="flex items-center justify-center">
          <ScrollToTopButton />
        </div>
      </div>

      <div className="overflow-hidden w-full h-full relative">
        <div className="pt-8">
          <div className="mx-auto main_width px-4 py-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 relative z-[9]">

            {/* Left Logo + Description */}
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/logo.png"
                  alt="Umang Living"
                  className="rounded w-[80%] h-[80px] lg:w-full"
                />
              </div>
              <p className="text-[#ccc] leading-relaxed text-[17px] lg:text-[18px] max-w-xs">
                Umang Living is India’s first multi-city senior independent-living
                community, thoughtfully designed with love and respect.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="yellow lg:text-[20px] md:text-[16px] font-semibold mb-4 uppercase">
                Quick Links
              </h4>
              <ul className="space-y-3 text-[#ccc] lg:text-[18px] text-[18px]">
                {filteredNavItems.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-white transition">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="yellow lg:text-[20px] md:text-[16px] font-semibold mb-4 uppercase">
                Support Links
              </h4>
              <ul className="space-y-3 text-[#ccc] text-[18px] lg:text-[18px]">
                {supportLinks.map((txt, idx) => (
                  <li key={idx}>
                    <Link
                      href={txt.link}
                      className="hover:text-white transition"
                    >
                      {txt.lable}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="yellow text-[18px] font-semibold mb-4 uppercase">
                Join a Newsletter
              </h4>

              {/* Newsletter Form */}
              <form
                onSubmit={handleSubmit}
                className="flex items-center space-x-1 mb-3 lg:mb-4 2xl:mb-2"
              >
                <input
                  id="email"
                  type="email"
                  autoComplete="true"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-[#4F5A68] rounded-tl-[11px] rounded-bl-[11px] text-white px-6 py-3 w-full text-sm placeholder-[#888] focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#057366] text-[#fff] font-semibold px-4 py-3 rounded-tr-[11px] rounded-br-[11px] text-sm hover:opacity-90 flex items-center justify-center min-w-[110px]"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "SUBSCRIBE"
                  )}
                </button>
              </form>

              {message && (
                <p className="text-[#ccc] text-md mb-3">{message}</p>
              )}

              {/* Social Media Icons */}
              <div className="flex 2xl:mt-4 justify-center sm:justify-start gap-3">
                <a
                  aria-label="Facebook"
                  href="https://www.facebook.com/people/Umang-Living-Senior-Citizens-Community/61579702657707/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#4F5A68] text-white hover:bg-[#00A79C] transition"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/company/umang-living/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#4F5A68] text-white hover:bg-[#00A79C] transition"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a
                  aria-label="Instagram"
                  href="https://www.instagram.com/umangliving/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#4F5A68] text-white hover:bg-[#00A79C] transition"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a
                  aria-label="YouTube"
                  href="https://www.youtube.com/@UmangLiving"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#4F5A68] text-white hover:bg-[#00A79C] transition"
                >
                  <FaYoutube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="text-[#999] flex justify-center lg:justify-between main_width py-4 text-center border-t border-dashed border-[#333] md:text-[17px] items-center">
            <p>
              <span className="text-[#f04f67] text-[16px] font-bold tracking-wide">
                &#169; 2025 UMANG LIVING SCL Pvt Ltd.
              </span>
            </p>
            {/* stays hidden on small; appears at lg and pushes layout to two columns */}
            <p className="hidden lg:flex mt-1 items-center gap-2 text-[18px]">
              <FaLocationDot />
              2319, Gold Wing, Wave one Tower, Sector-18, Noida, UP-201301
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
