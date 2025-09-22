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
  const [dropdownOpen, setDropdownOpen] = useState(false); // About Us submenu
  const dropdownRef = useRef(null);

  // prevent body scroll when drawer is open
  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  // close dropdown when route changes (keeps UI tidy)
  useEffect(() => {
    setDropdownOpen(false);
    // also close mobile drawer when navigating
    setOpen(false);
  }, [pathname]);

  // click outside to close dropdown
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
    <header className="w-[92%] my-4 mx-auto transition-all duration-700 ease-in">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Umang_logo"
            width={300}
            height={80}
            className="xl:w-[220px] lg:w-[190px] md:w-[150px] w-[130px]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:text-[22px] xl:text-[18px] lg:text-[16px]">
          {navItems.map(({ label, href }) => {
            // Render About Us with separate Link + chevron button
            if (label === "About") {
              return (
                <li key={href} className="relative" ref={dropdownRef}>
                  <div className="flex items-center gap-2">
                    {/* About Us label: navigates to /about on click */}
                    <Link
                      href={href}
                      className={`transition-all duration-300 hover:scale-[1.04] ${pathname === href ? "text-[#E7216A] font-semibold" : "text-[#0B0B0B]"
                        }`}
                    >
                      {label}
                    </Link>

                    {/* Chevron: toggles submenu only */}
                    <button
                      aria-expanded={dropdownOpen}
                      aria-label="Toggle About submenu"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdownOpen((s) => !s);
                      }}
                      className="pt-1 rounded-md text-gray-600 hover:text-gray-800"
                    >
                      <FaChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50">
                      <li>
                        <Link
                          href="/projects"
                          onClick={() => setDropdownOpen(false)}
                          className={`block px-4 py-2 hover:bg-gray-100 ${pathname === "/projects" ? "text-[#E7216A]" : "text-[#0B0B0B]"
                            }`}
                        >
                          Projects
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog"
                          onClick={() => setDropdownOpen(false)}
                          className={`block px-4 py-2 hover:bg-gray-100 ${pathname === "/blog" ? "text-[#E7216A]" : "text-[#0B0B0B]"
                            }`}
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/lifeAt"
                          onClick={() => setDropdownOpen(false)}
                          className={`block px-4 py-2 hover:bg-gray-100 ${pathname === "/lifeAt" ? "text-[#E7216A]" : "text-[#0B0B0B]"
                            }`}
                        >
                          Life@
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              );
            }

            // Hide top-level duplicates (Projects/Blog/Life@) — keep them in submenu only
            if (["/projects", "/blog", "/lifeAt"].includes(href)) return null;

            // Regular nav items
            return (
              <li
                key={href}
                className={`transition-all duration-300 hover:scale-[1.04] ${pathname === href ? "text-[#E7216A] font-semibold" : "text-[#0B0B0B]"
                  }`}
              >
                <Link href={href}>{label}</Link>
              </li>
            );
          })}

          {/* Dialer Button */}
          <a
            href="tel:18002028704"
            className="relative z-10 px-3 py-1 inline-flex items-center gap-1.5 rounded-md 
             border-2 border-transparent bg-red-700 text-white text-xl font-semibold 
             transition-all duration-300 ease-in-out
             hover:bg-white hover:text-red-700 hover:border-red-700"
          >
            <FaPhoneAlt className="text-current w-5 h-5" />
            1800-202-8704
          </a>

        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7216A]"
          aria-label="Open menu"
        >
          <FaBars className="text-2xl text-[#0B0B0B]" />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
          } lg:hidden`}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 h-[340px] w-full bg-[#069183] z-50 shadow-xl transform transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center bg-white justify-between px-6 py-4 border-b">
          <Image src="/logo.png" alt="" width={190} height={50} />
          <button
            onClick={() => setOpen(false)}
            className="p-2 border bg-green-100 text-green-600"
            aria-label="Close menu"
          >
            <FaTimes className="text-xl text-green-700" />
          </button>
        </div>

        {/* Drawer Nav */}
        <nav className="mt-6 px-6 space-y-4">
          {navItems.map(({ label, href }) => {
            if (label === "About Us") {
              return (
                <div key={href} className="space-y-2">
                  <div className="flex items-center justify-between">
                    {/* About Us label (navigates and closes drawer) */}
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`text-lg border-b pb-2 border-dashed ${pathname === href ? "text-[#FCEF44]" : "text-[#fff]"
                        }`}
                    >
                      {label}
                    </Link>

                    {/* Chevron toggles submenu */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdownOpen((s) => !s);
                      }}
                      aria-label="Toggle About submenu"
                      className="p-1 text-white"
                    >
                      <FaChevronDown className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  {/* Mobile submenu */}
                  {dropdownOpen && (
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/projects"
                        onClick={() => {
                          setOpen(false);
                          setDropdownOpen(false);
                        }}
                        className={`block text-base border-b pb-1 border-dashed ${pathname === "/projects" ? "text-[#FCEF44]" : "text-[#fff] hover:text-[#E7216A]"
                          }`}
                      >
                        Projects
                      </Link>
                      <Link
                        href="/blog"
                        onClick={() => {
                          setOpen(false);
                          setDropdownOpen(false);
                        }}
                        className={`block text-base border-b pb-1 border-dashed ${pathname === "/blog" ? "text-[#FCEF44]" : "text-[#fff] hover:text-[#E7216A]"
                          }`}
                      >
                        Blog
                      </Link>
                      <Link
                        href="/lifeAt"
                        onClick={() => {
                          setOpen(false);
                          setDropdownOpen(false);
                        }}
                        className={`block text-base border-b pb-1 border-dashed ${pathname === "/lifeAt" ? "text-[#FCEF44]" : "text-[#fff] hover:text-[#E7216A]"
                          }`}
                      >
                        Life@
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            // hide duplicated top-level menu items (they live under About Us)
            if (["/projects", "/blog", "/lifeAt"].includes(href)) return null;

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block text-lg border-b pb-2 border-dashed ${pathname === href ? "text-[#FCEF44]" : "text-[#fff] hover:text-[#E7216A]"
                  }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        {/* <div className="p-6 w-full py-4 flex">
          <div className="bg-black w-full text-center text-white py-4 rounded-[10px] capitalize">
            <span>join the community</span>
          </div>
        </div> */}
      </aside>
    </header>
  );
}
