"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaChevronRight,
  FaPhoneAlt,
} from "react-icons/fa";
import { navItems } from "../lib/nav-items";
import "./header.css"; // 👈 added stylesheet import

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [generalOpen, setGeneralOpen] = useState(false);
  const [healthOpen, setHealthOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setGeneralOpen(false);
    setHealthOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) setIsSticky(true);
      else setIsSticky(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full z-[1000] transition-all duration-100 ease-in-out ${
        isSticky
          ? "fixed top-0 left-0 right-0 bg-white shadow-md py-3"
          : "relative py-3 shadow-md"
      }`}
    >
      <div className="max-w-[1300px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/compressed_logo.webp"
            alt="Umang Living"
            width={200}
            height={50}
            priority
            className="w-[125px] md:w-[150px] lg:w-[170px] xl:w-[200px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[16px] 2xl:text-[18px]">
          {navItems.map(({ label, href }) => {
            if (label === "Services") {
              return (
                <li key={href} className="relative group">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <h3
                      className={`transition-all duration-300 hover:scale-[1.04] ${
                        pathname.startsWith("/services")
                          ? "text-[#E7216A] font-semibold"
                          : "text-[#0B0B0B]"
                      }`}
                    >
                      {label}
                    </h3>
                    <FaChevronDown className="w-3 h-3 text-gray-600 group-hover:rotate-180 transition-transform duration-300" />
                  </div>

                  {/* Dropdown */}
                  <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {[{ name: "Township", link: "/services/townships" },
                      { name: "Stay", link: "/services/stay" },
                      { name: "Travel", link: "/services/travel" },
                      { name:"Health & Wellness", link: "/services/health-services" }].map((s) => (
                      <li key={s.link}>
                        <Link
                          href={s.link}
                          className={`block px-4 py-2 hover:bg-gray-100 transition ${
                            pathname === s.link
                              ? "text-[#E7216A]"
                              : "text-[#0B0B0B]"
                          }`}
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}

                    {/* Health & Wellness */}
                    {/* <li className="relative group/health">
                      <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <span
                          className={`${
                            pathname.startsWith("/services/healing")
                              ? "text-[#E7216A]"
                              : "text-[#0B0B0B]"
                          }`}
                        >
                          Health &amp; Wellness
                        </span>
                        <FaChevronRight className="w-3 h-3 text-gray-600 group-hover/health:rotate-90 transition-transform duration-300" />
                      </div>
                      <ul className="absolute top-0 left-full ml-1 w-56 bg-white shadow-lg rounded-md z-50 opacity-0 invisible group-hover/health:opacity-100 group-hover/health:visible transition-all duration-300">
                        <li>
                          <Link
                            href="/services/healing-services"
                            className={`block px-4 py-2 hover:bg-gray-100 transition ${
                              pathname === "/services/healing-services"
                                ? "text-[#E7216A]"
                                : "text-[#0B0B0B]"
                            }`}
                          >
                            Healing Services
                          </Link>
                        </li>
                      </ul>
                    </li> */}

                    {/* Consultation */}
                    <li className="relative group/consultation">
                      <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <span
                          className={`${
                            pathname.startsWith("/services/financial") ||
                            pathname.startsWith("/services/legal")
                              ? "text-[#E7216A]"
                              : "text-[#0B0B0B]"
                          }`}
                        >
                          Consultation
                        </span>
                        <FaChevronRight className="w-3 h-3 text-gray-600 group-hover/consultation:rotate-90 transition-transform duration-300" />
                      </div>
                      <ul className="absolute top-0 left-full ml-1 w-56 bg-white shadow-lg rounded-md z-50 opacity-0 invisible group-hover/consultation:opacity-100 group-hover/consultation:visible transition-all duration-300">
                        <li>
                          {/* <Link
                            href="/services/general-consultation"
                            className={`block px-4 py-2 hover:bg-gray-100 transition ${
                              pathname === "/services/general-consultation"
                                ? "text-[#E7216A]"
                                : "text-[#0B0B0B]"
                            }`}
                          >
                            General Consultation
                          </Link> */}
                        </li>
                        <li>
                          <Link
                            href="/services/legal-consultation"
                            className={`block px-4 py-2 hover:bg-gray-100 transition ${
                              pathname === "/services/legal-consultation"
                                ? "text-[#E7216A]"
                                : "text-[#0B0B0B]"
                            }`}
                          >
                            Legal Consultation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/financial-consulting"
                            className={`block px-4 py-2 hover:bg-gray-100 transition ${
                              pathname === "/services/financial-consulting"
                                ? "text-[#E7216A]"
                                : "text-[#0B0B0B]"
                            }`}
                          >
                            Financial Consulting
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              );
            }

            return (
              <li
                key={href}
                className={`transition-all duration-300 hover:scale-[1.04] ${
                  pathname === href
                    ? "text-[#E7216A] font-semibold"
                    : "text-[#0B0B0B]"
                }`}
              >
                <Link href={href}>{label}</Link>
              </li>
            );
          })}

          {/* Desktop Dialer */}
          <a
            href="tel:18002028704"
            className="inline-flex items-center gap-2 bg-red-700 text-white px-4 py-2 rounded-md font-semibold border-2 border-transparent hover:bg-white hover:text-red-700 hover:border-red-700 transition"
          >
            <FaPhoneAlt className="w-5 h-5" />
            <span className="hidden-below-320">1800-202-8704</span>
          </a>
        </ul>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:18002028704"
            className="flex items-center gap-2 px-3 py-1 bg-red-700 text-white text-sm font-semibold rounded-md border-2 border-transparent hover:bg-white hover:text-red-700 hover:border-red-700 transition"
          >
            <FaPhoneAlt className="w-4 h-4" />
            <span className="hidden-below-370">1800-202-8704</span>
          </a>
          <button
            onClick={() => setOpen(true)}
            aria-label="hamburger"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7216A]"
          >
            <FaBars className="text-2xl text-[#0B0B0B]" />
          </button>
        </div>
      </div>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden`}
      />
      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-full bg-[#069183] z-50 shadow-xl transform transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between bg-white px-4 sm:px-6 py-3">
          <Image
            src="/compressed_logo.webp"
            alt="Umang_logo"
            width={125}
            height={45}
            className="object-contain"
          />
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-md bg-green-100 text-green-700"
            aria-label="Close menu"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        <nav className="mt-6 px-6 space-y-4">
          {/* Services & Other Nav Items (unchanged) */}
          {navItems.map(({ label, href }) => {
            if (label === "Services") {
              return (
                <div key={href}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between text-lg border-b pb-1 border-white/60 text-white hover:text-[#FCEF44]"
                  >
                    <span>Services</span>
                    {servicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>

                  {servicesOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      <Link
                        href="/services/townships"
                        onClick={() => setOpen(false)}
                        className={`block text-lg py-1 ${
                          pathname === "/services/townships"
                            ? "text-[#FCEF44]"
                            : "text-white hover:text-[#E7216A]"
                        }`}
                      >
                        Township
                      </Link>
                      <Link
                        href="/services/stay"
                        onClick={() => setOpen(false)}
                        className={`block text-lg py-1 ${
                          pathname === "/services/stay"
                            ? "text-[#FCEF44]"
                            : "text-white hover:text-[#E7216A]"
                        }`}
                      >
                        Stay
                      </Link>
                      <Link
                        href="/services/travel"
                        onClick={() => setOpen(false)}
                        className={`block text-lg py-1 ${
                          pathname === "/services/travel"
                            ? "text-[#FCEF44]"
                            : "text-white hover:text-[#E7216A]"
                        }`}
                      >
                        Travel
                      </Link>
                      <Link
                        href="/services/health-services"
                        onClick={() => setOpen(false)}
                        className={`block text-lg py-1 ${
                          pathname === "/services/health-services"
                            ? "text-[#FCEF44]"
                            : "text-white hover:text-[#E7216A]"
                        }`}
                      >
                        Health & Wellness
                      </Link>

                      {/* Health & Wellness */}
                      {/* <div>
                        <button
                          onClick={() => setHealthOpen(!healthOpen)}
                          className="w-full flex items-center justify-between text-lg py-1 text-white hover:text-[#E7216A]"
                        >
                          <span>Health &amp; Wellness</span>
                          {healthOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </button>

                        {healthOpen && (
                          <div className="pl-4 mt-2 space-y-2">
                            <Link
                              href="/services/healing-services"
                              onClick={() => setOpen(false)}
                              className={`block text-lg py-1 ${
                                pathname === "/services/healing-services"
                                  ? "text-[#FCEF44]"
                                  : "text-white hover:text-[#E7216A]"
                              }`}
                            >
                              Healing Services
                            </Link>
                          </div>
                        )}
                      </div> */}

                      {/* Consultation */}
                      <div>
                        <button
                          onClick={() => setGeneralOpen(!generalOpen)}
                          className="w-full flex items-center justify-between text-lg py-1 text-white hover:text-[#E7216A]"
                        >
                          <span>Consultation</span>
                          {generalOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </button>

                        {generalOpen && (
                          <div className="pl-4 mt-2 space-y-2">
                            {/* <Link
                              href="/services/general-consultation"
                              onClick={() => setOpen(false)}
                              className={`block text-lg py-1 ${
                                pathname === "/services/general-consultation"
                                  ? "text-[#FCEF44]"
                                  : "text-white hover:text-[#E7216A]"
                              }`}
                            >
                              General Consultation
                            </Link> */}
                            <Link
                              href="/services/legal-consultation"
                              onClick={() => setOpen(false)}
                              className={`block text-lg py-1 ${
                                pathname === "/services/legal-consultation"
                                  ? "text-[#FCEF44]"
                                  : "text-white hover:text-[#E7216A]"
                              }`}
                            >
                              Legal Consultation
                            </Link>
                            <Link
                              href="/services/financial-consulting"
                              onClick={() => setOpen(false)}
                              className={`block text-lg py-1 ${
                                pathname === "/services/financial-consulting"
                                  ? "text-[#FCEF44]"
                                  : "text-white hover:text-[#E7216A]"
                              }`}
                            >
                              Financial Consulting
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block text-lg border-b pb-2 border-white/60 ${
                  pathname === href
                    ? "text-[#FCEF44]"
                    : "text-white hover:text-[#E7216A]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="p-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScQlwi7hkmU9fp7aGSOLfUXPIvQmADduVyPQvVC5PKhcbFyDQ/viewform?usp=header"
            target="_blank"
            rel="noreferrer"
            className="block w-full"
          >
            <button className="w-full bg-yellow-600 hover:bg-green-900 text-white px-6 py-3 rounded-sm font-semibold shadow-lg transition hover:scale-105 hover:shadow-xl">
              Join Today
            </button>
          </a>
        </div>
      </aside>
    </header>
  );
}
