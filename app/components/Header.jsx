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

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile drawer
  const [servicesOpen, setServicesOpen] = useState(false); // mobile first-level Services
  const [generalOpen, setGeneralOpen] = useState(false); // mobile nested Consultation
  const [healthOpen, setHealthOpen] = useState(false); // mobile nested Health & Wellness

  // prevent body scroll when drawer is open
  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  // close drawer on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setGeneralOpen(false);
    setHealthOpen(false);
  }, [pathname]);

  return (
    <header className="w-full px-3 sm:w-[92%] my-3 mx-auto transition-all duration-700 ease-in max-w-[1300px]">
      <div className="flex items-center justify-between gap-3 min-w-0">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Umang Living"
            width={125}
            height={45}
            priority
            className="md:w-[180px] md:h-[60px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:text-[22px] xl:text-[18px] lg:text-[16px] min-w-0">
          {navItems.map(({ label, href }) => {
            // Services dropdown (desktop)
            if (label === "Services") {
              return (
                <li key={href} className="relative group">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <h3
                      className={`transition-all duration-300 hover:scale-[1.04] whitespace-nowrap ${
                        pathname.startsWith("/services")
                          ? "text-[#E7216A] font-semibold"
                          : "text-[#0B0B0B]"
                      }`}
                    >
                      {label}
                    </h3>
                    <FaChevronDown className="mt-0.5 w-3 h-3 text-gray-600 group-hover:rotate-180 transition-transform duration-300" />
                  </div>

                  {/* top-level dropdown */}
                  <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-visible z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {/* simple items */}
                    {[
                      { name: "Township", link: "/services/townships" },
                      { name: "Stay", link: "/services/stay" },
                      { name: "Travel", link: "/services/travel" },
                    ].map((s) => (
                      <li key={s.link}>
                        <Link
                          href={s.link}
                          className={`block px-4 py-2 hover:bg-gray-100 transition ${
                            pathname === s.link ? "text-[#E7216A]" : "text-[#0B0B0B]"
                          }`}
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}

                    {/* Nested parent: Health & Wellness -> shows submenu on hover ONLY */}
                    <li className="relative group/health">
                      <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <span className={`${pathname.startsWith("/services/healing") ? "text-[#E7216A]" : "text-[#0B0B0B]"}`}>
                          Health &amp; Wellness
                        </span>
                        <FaChevronRight className="w-3 h-3 text-gray-600 group-hover/health:rotate-90 transition-transform duration-300" />
                      </div>

                      {/* nested submenu (appears to the right on HOVER only) */}
                      <ul className="absolute top-0 left-full ml-1 w-56 bg-white shadow-lg rounded-md overflow-hidden z-50 opacity-0 invisible group-hover/health:opacity-100 group-hover/health:visible transition-all duration-300">
                        <li>
                          <Link
                            href="/services/healing-services"
                            className={`block px-4 py-2 hover:bg-gray-100 transition ${
                              pathname === "/services/healing-services" ? "text-[#E7216A]" : "text-[#0B0B0B]"
                            }`}
                          >
                            Healing Services
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* Nested parent: Consultation -> shows submenu on hover ONLY */}
                    <li className="relative group/consultation">
                      <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <span className={`${pathname.startsWith("/services/general") || pathname.startsWith("/services/legal") ? "text-[#E7216A]" : "text-[#0B0B0B]"}`}>
                          Consultation
                        </span>
                        <FaChevronRight className="w-3 h-3 text-gray-600 group-hover/consultation:rotate-90 transition-transform duration-300" />
                      </div>

                      {/* nested submenu (appears to the right on HOVER only) */}
                      <ul className="absolute top-0 left-full ml-1 w-56 bg-white shadow-lg rounded-md overflow-hidden z-50 opacity-0 invisible group-hover/consultation:opacity-100 group-hover/consultation:visible transition-all duration-300">
                        <li>
                          <Link
                            href="/services/general-consultation"
                            className={`block px-4 py-2 hover:bg-gray-100 transition ${
                              pathname === "/services/general-consultation" ? "text-[#E7216A]" : "text-[#0B0B0B]"
                            }`}
                          >
                            General Consultation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/legal-consultation"
                            className={`block px-4 py-2 hover:bg-gray-100 transition ${
                              pathname === "/services/legal-consultation" ? "text-[#E7216A]" : "text-[#0B0B0B]"
                            }`}
                          >
                            Legal Consultation
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              );
            }

            // Normal nav items
            return (
              <li
                key={href}
                className={`transition-all duration-300 hover:scale-[1.04] whitespace-nowrap ${
                  pathname === href ? "text-[#E7216A] font-semibold" : "text-[#0B0B0B]"
                }`}
              >
                <Link href={href}>{label}</Link>
              </li>
            );
          })}

          {/* Dialer (desktop) */}
          <a
            href="tel:18002028704"
            className="relative z-10 inline-flex items-center gap-2 rounded-md border-2 border-transparent bg-red-700 text-white text-base font-semibold px-3 py-1 transition-all duration-300 ease-in-out hover:bg-white hover:text-red-700 hover:border-red-700 truncate max-w-[220px]"
            aria-label="Call us at 1800-202-8704"
          >
            <FaPhoneAlt className="text-current w-5 h-5 flex-shrink-0" />
            <span className="truncate">1800-202-8704</span>
          </a>
        </ul>

        {/* Mobile controls (phone + hamburger) */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Dialer (mobile) */}
          <a
            href="tel:18002028704"
            className="flex px-2 py-1 items-center gap-2 rounded-md border-2 border-transparent bg-red-700 text-white text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out hover:bg-white hover:text-red-700 hover:border-red-700 truncate max-w-[140px]"
            aria-label="Call us at 1800-202-8704"
          >
            <FaPhoneAlt className="text-current w-4 h-4 flex-shrink-0" />
            <span className="truncate">1800-202-8704</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7216A]"
            aria-label="Open menu"
          >
            <FaBars className="text-xl sm:text-2xl text-[#0B0B0B]" />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible" } lg:hidden`}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-full bg-[#069183] z-50 shadow-xl transform transition-transform duration-300 lg:hidden overflow-y-auto ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center bg-white justify-between px-3 py-3">
          <Image
            src="/logo.png"
            alt="Umang_logo"
            width={125}
            height={45}
            className="object-contain"
          />
          <button onClick={() => setOpen(false)} className="p-2 rounded-md bg-green-100 text-green-700" aria-label="Close menu">
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Drawer Nav */}
        <nav className="mt-6 px-6 space-y-4" role="navigation" aria-label="Mobile Navigation">
          {navItems.map(({ label, href }) => {
            if (label === "Services") {
              return (
                <div key={href}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between text-lg border-b pb-2 border-dashed text-white hover:text-[#E7216A] transition"
                  >
                    <span>Services</span>
                    {servicesOpen ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
                  </button>

                  {servicesOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      <Link href="/services/townships" onClick={() => setOpen(false)} className={`block text-lg py-1 ${pathname === "/services/townships" ? "text-[#FCEF44]" : "text-white hover:text-[#E7216A]"}`}>Township</Link>
                      <Link href="/services/stay" onClick={() => setOpen(false)} className={`block text-lg py-1 ${pathname === "/services/stay" ? "text-[#FCEF44]" : "text-white hover:text-[#E7216A]"}`}>Stay</Link>
                      <Link href="/services/travel" onClick={() => setOpen(false)} className={`block text-lg py-1 ${pathname === "/services/travel" ? "text-[#FCEF44]" : "text-white hover:text-[#E7216A]"}`}>Travel</Link>
                      
                      {/* Mobile nested: Health & Wellness parent with chevron */}
                      <div>
                        <button
                          onClick={() => setHealthOpen(!healthOpen)}
                          className="w-full flex items-center justify-between text-lg py-1 text-white hover:text-[#E7216A] transition"
                        >
                          <span>Health &amp; Wellness</span>
                          {healthOpen ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
                        </button>

                        {healthOpen && (
                          <div className="pl-4 mt-2 space-y-2">
                            <Link href="/services/healing-services" onClick={() => setOpen(false)} className={`block text-lg py-1 ${pathname === "/services/healing-services" ? "text-[#FCEF44]" : "text-white hover:text-[#E7216A]"}`}>Healing Services</Link>
                          </div>
                        )}
                      </div>

                      {/* Mobile nested: Consultation parent with chevron */}
                      <div>
                        <button
                          onClick={() => setGeneralOpen(!generalOpen)}
                          className="w-full flex items-center justify-between text-lg py-1 text-white hover:text-[#E7216A] transition"
                        >
                          <span>Consultation</span>
                          {generalOpen ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
                        </button>

                        {generalOpen && (
                          <div className="pl-4 mt-2 space-y-2">
                            <Link href="/services/general-consultation" onClick={() => setOpen(false)} className={`block text-lg py-1 ${pathname === "/services/general-consultation" ? "text-[#FCEF44]" : "text-white hover:text-[#E7216A]"}`}>General Consultation</Link>
                            <Link href="/services/legal-consultation" onClick={() => setOpen(false)} className={`block text-lg py-1 ${pathname === "/services/legal-consultation" ? "text-[#FCEF44]" : "text-white hover:text-[#E7216A]"}`}>Legal Consultation</Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            // Normal nav items
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block text-lg border-b pb-2 border-dashed w-full ${
                  pathname === href ? "text-[#FCEF44]" : "text-white hover:text-[#E7216A]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA button */}
        <div className="p-6 w-full flex">
          <a className="w-full sm:w-auto" href="https://docs.google.com/forms/d/e/1FAIpQLScQlwi7hkmU9fp7aGSOLfUXPIvQmADduVyPQvVC5PKhcbFyDQ/viewform?usp=header" target="_blank" rel="noreferrer">
            <button className="bg-yellow-600 hover:bg-green-900 text-white px-6 py-3 rounded-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto">
              Join Today
            </button>
          </a>
        </div>
      </aside>
    </header>
  );
}