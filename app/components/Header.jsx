"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "../lib/nav-items";
import { FaBars, FaTimes } from "react-icons/fa"; // ← react-icons here

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <header className="w-[92%] mx-auto  transition-all duration-700 ease-in">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Umang logo"
            width={300}
            height={80}
            className="xl:w-[300px] lg:w-[250px] md:w-[220px] w-[200px]"
            priority
          />
        </Link>

        <ul className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:text-[18px] xl:text-[14px] lg:text-[12px]">
          {navItems.map(({ label, href }) => (
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
          ))}
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

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-full bg-[#069183] z-50 shadow-xl transform transition-transform duration-300 lg:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center bg-white  justify-between px-6 py-4 border-b">
          <Image src="/logo.png" alt="" width={190} height={50} />
          <button
            onClick={() => setOpen(false)}
            className="p-2 border rounded-full bg-green-100 text-green-600"
            aria-label="Close menu"
          >
            <FaTimes className="text-xl text-green-700" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="mt-6 px-6 space-y-4 ">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block text-lg  border-b pb-2 border-dashed transition-colors ${
                pathname === href
                  ? "text-[#FCEF44]"
                  : "text-[#fff] hover:text-[#E7216A]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="p-6 w-full py-4 flex ">
          <div className="bg-black w-full text-center text-white  py-4 rounded-[10px] capitalize">
            <span className=" text-center text-white">join the community</span>
          </div>
        </div>
      </aside>
    </header>
  );
}
