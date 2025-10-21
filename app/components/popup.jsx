"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function PromoCard() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds on every page load/reload
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    // No localStorage - popup will show again on next page load/reload
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50 p-2 sm:p-4">
      <div className="relative">
        {/* Close button - positioned outside the card */}
        <button aria-label="Close"
          onClick={handleClose}
          className="cursor-pointer absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Main card */}
        <div className="bg-white rounded-lg
        shadow-2xl 
                        w-[300px] h-[440px] 
                        sm:w-[320px] lg:h-[450px] 
                        lg:w-[400px]  
                        overflow-hidden flex flex-col">
          
          {/* Image container - takes up most of the space */}
          <div className="h-[370px] sm:flex-1 relative overflow-hidden">
            <Image
              src="/popup.jpg"
              alt="Promo"
              fill
              className="object-fit w-full h-full"
              priority
            />
          </div>

          {/* Button container */}
          <div className="h-[68px] lg:h-[72px] flex items-center justify-center p-3">
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
          </div>
        </div>
      </div>
    </div>
  );
}