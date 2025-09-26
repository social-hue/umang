"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { navItems } from "../lib/nav-items";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile drawer
  const [dropdownOpen, setDropdownOpen] = useState(false); // About submenu
  const dropdownRef = useRef(null);

  // prevent body scroll when drawer is open
  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  // close dropdown and drawer on route change
  useEffect(() => {
    setDropdownOpen(false);
    setOpen(false);
  }, [pathname]);

  // click outside to close desktop dropdown
  useEffect(() => {
    function handleDocClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
  }, []);

  return (
    <header className="w-full px-3 sm:w-[92%] my-3 mx-auto transition-all duration-700 ease-in max-w-[1300px]">
      <div className="flex items-center justify-between gap-3 min-w-0">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Umang Living"
            width={300}
            height={80}
            priority
            className="w-[100px] sm:w-[130px] md:w-[150px] lg:w-[190px] xl:w-[220px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:text-[22px] xl:text-[18px] lg:text-[16px] min-w-0">
          {navItems.map(({ label, href }) => {
              return (
                <li key={href} className="relative" ref={dropdownRef}>
                  <div className="flex items-center gap-2">
                    <Link
                      href={href}
                      className={`transition-all duration-300 hover:scale-[1.04] whitespace-nowrap ${
                        pathname === href
                          ? "text-[#E7216A] font-semibold"
                          : "text-[#0B0B0B]"
                      }`}
                    >
                      {label}
                    </Link>
                    {/* <button
                      aria-expanded={dropdownOpen}
                      aria-label="Toggle About submenu"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdownOpen((s) => !s);
                      }}
                      className="pt-1 rounded-md text-gray-600 hover:text-gray-800"
                    >
                      <FaChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button> */}
                  </div>

                  {/* Desktop Dropdown */}
                  {/* {dropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50">
                      <li>
                        <Link
                          href="/projects"
                          onClick={() => setDropdownOpen(false)}
                          className={`block px-4 py-2 hover:bg-gray-100 ${
                            pathname === "/projects"
                              ? "text-[#E7216A]"
                              : "text-[#0B0B0B]"
                          }`}
                        >
                          Projects
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog"
                          onClick={() => setDropdownOpen(false)}
                          className={`block px-4 py-2 hover:bg-gray-100 ${
                            pathname === "/blog"
                              ? "text-[#E7216A]"
                              : "text-[#0B0B0B]"
                          }`}
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/lifeAt"
                          onClick={() => setDropdownOpen(false)}
                          className={`block px-4 py-2 hover:bg-gray-100 ${
                            pathname === "/lifeAt"
                              ? "text-[#E7216A]"
                              : "text-[#0B0B0B]"
                          }`}
                        >
                          Life
                        </Link>
                      </li>
                    </ul>
                  )} */}
                </li>
              );

            // hide individual links that are part of the About submenu (keeps desktop nav tidy)
            // if (["/projects", "/blog", "/lifeAt"].includes(href)) return null;

            return (
              <li
                key={href}
                className={`transition-all duration-300 hover:scale-[1.04] whitespace-nowrap ${
                  pathname === href
                    ? "text-[#E7216A] font-semibold"
                    : "text-[#0B0B0B]"
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
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden`}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-full bg-[#069183] z-50 shadow-xl transform transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center bg-white justify-between px-6 py-4 border-b">
          <Image
            src="/logo.png"
            alt="Umang logo"
            width={190}
            height={50}
            className="w-[140px] object-contain"
          />
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-md bg-green-100 text-green-700"
            aria-label="Close menu"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Drawer Nav - directly list all navItems */}
        <nav className="mt-6 px-6 space-y-4" role="navigation" aria-label="Mobile Navigation">
          {navItems.map(({ label, href }) => (
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
          ))}
        </nav>

        {/* CTA button */}
        <div className="p-6 w-full flex">
          <a
            className="w-full sm:w-auto"
            href="https://docs.google.com/forms/d/e/1FAIpQLScQlwi7hkmU9fp7aGSOLfUXPIvQmADduVyPQvVC5PKhcbFyDQ/viewform?usp=header"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-yellow-600 hover:bg-green-900 text-white px-6 py-3 rounded-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto">
              Join Today
            </button>
          </a>
        </div>
      </aside>
    </header>
  );
}
