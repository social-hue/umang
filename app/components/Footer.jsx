import Image from "next/image";
import Link from "next/link";
import { navItems } from "../lib/nav-items";
import { FaLocationDot } from "react-icons/fa6";
import ScrollToTopButton from "../helpers/ScrollToTopButton";

const supportLinks = [
  {
    lable: "Privacy Policy",
    link: "/termsandcondition/privacypolicy",
  },
  {
    lable: "Terms and Conditions",
    link: "/termsandcondition/termscondition",
  },
];

const Footer = () => (
  <footer className="bg-[url(/footer.jpg)] bg-cover text-white text-sm relative  ">
    <div className="absolute w-full  -top-10">
      <div className="flex items-center justify-center ">
        <ScrollToTopButton />
      </div>
    </div>
    <div className="overflow-hidden w-full h-full relative">
      <div className="pt-18 pb-4">
        <div className="mx-auto main_width px-4 py-12 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 relative z-[9]">
          {/* Left Logo + Description */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/white_logo.png"
                alt="Umang Living"
                className="rounded"
              />
            </div>
            <p className="text-[#ccc] leading-relaxed lg:text-[18px]  max-w-xs">
              Umang Living is India’s first multi-city senior independent-living
              community, thoughtfully designed with love and respect. We believe
              that at 55, life doesn’t slow down — it blossoms. <br />
              <br />
              Whether you are embarking on an exciting new beginning, a peaceful
              retirement, or simply seeking a more fulfilling and connected way
              to live, Umang Living is where you belong.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="yellow lg:text-[22px] md:text-[18px] font-semibold mb-4 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3 text-[#ccc] lg:text-[18px]">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
              <li></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="yellow lg:text-[22px] md:text-[18px] font-semibold mb-4 uppercase">
              Support Links
            </h4>
            <ul className="space-y-3 text-[#ccc] lg:text-[18px]">
              {supportLinks.map((txt, item) => (
                <li key={item}>
                  <Link
                    href={`${txt.link}`}
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
            <form className="flex items-center space-x-1 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#4F5A68] rounded-tl-[11px] rounded-bl-[11px] text-white px-6 py-3 w-full text-sm placeholder-[#888]  focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#00A79C] text-[#fff] font-semibold px-4 py-3 rounded-tr-[11px] rounded-br-[11px] text-sm hover:opacity-90"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-[#999] flex justify-between main_width py-4 text-center border-t border-dashed border-[#333] md:text-[17px]">
          <p>
            <span className="text-[#f04f67] font-bold">UMANG LIVING</span>{" "}
            COPYRIGHT. ALL RIGHTS RESERVED.
          </p>
          <p className="mt-1 lg:flex items-center gap-2 text-[18px] hidden">
            <FaLocationDot />
            2319, Gold Wing Wave one Tower Sector 18 Noida UP 201301
          </p>
        </div>
      </div>
      <div className="absolute -right-[70px] bottom-0  ">
        <img src="/svgs/man.svg" className="w-[95%]" alt="man" />
      </div>
    </div>
  </footer>
);

export default Footer;
