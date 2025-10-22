"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function PromoCard() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show popup immediately on mount (every load/refresh)
    setShow(true);
  }, []);

  const handleClose = () => setShow(false);

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-3 py-4 sm:px-6 sm:py-6">
      <div className="relative">
        <div className="relative">
        {/* Popup card with image */}
        <div className="bg-none rounded-lg overflow-visible relative">
          <div className="relative flex items-center justify-center p-3 sm:p-4 md:p-6">
            <Image
              src="/pop-up.png"
              alt="Promo"
              width={800}
              height={400}
              priority
              quality={100}
              className="w-auto h-[420px] max-w-full object-contain"
              style={{ height: '420px', width: 'auto' }}
            />
          </div>   
          {/* Close button - positioned relative to the white card */}
          <button
            onClick={handleClose}
            aria-label="Close"
            className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition z-10"
          >
            <X className="w-5 h-5 text-zinc-700" />
          </button>
        </div>
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