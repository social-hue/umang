"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function PromoCard() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem("promoShown");

    if (!hasShown) {
      const timer = setTimeout(() => {
        setShow(true);
        sessionStorage.setItem("promoShown", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => setShow(false);

  if (!show) return null;

  return (
    <div className="z-[10000] fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm px-3 py-4 sm:px-6 sm:py-6">
      <div className="bg-none rounded-lg overflow-visible flex items-center justify-center">
        {/* Image container */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-full mb-2">
            {/* Close button — flex-aligned instead of absolute */}
            <button
              onClick={handleClose}
              aria-label="Close"
              className="cursor-pointer p-1.5 bg-white hover:bg-gray-200 rounded-full transition z-10"
            >
              <X className="w-7 h-7 md:w-6 md:h-6 text-zinc-800 stroke-2 hover:scale-110" />
            </button>
          </div>
          <Image
            src="/pop-up.png"
            alt="Promo"
            width={800}
            height={400}
            priority
            quality={100}
            className="w-auto h-[420px] max-w-full object-contain"
            style={{ height: "420px", width: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}


       {/* Button container */}
          {/* <div className="h-[68px] lg:h-[72px] flex items-center justify-center p-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScQlwi7hkmU9fp7aGSOLfUXPIvQmADduVyPQvVC5PKhcbFyDQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="w-full bg-[#129889] hover:bg-teal-900 text-white 
                               px-4 py-3 text-md
                               sm:px-6 sm:py-3 sm:text-base
                               rounded-lg font-semibold shadow-lg transition-all duration-300 hover:scale-101 hover:shadow-xl text-center">
                Join Free Membership
              </button>
            </a>
          </div> */}