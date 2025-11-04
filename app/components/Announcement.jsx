"use client";
import React from "react";
import { Megaphone } from "lucide-react";

export default function Announcement() {
  return (
    <div className="relative mx-auto max-w-5xl bg-gradient-to-br from-slate-50 via-white to-slate-200 border border-slate-200 rounded-2xl p-4 md:mb-10 
    shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)] transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.01] backdrop-blur-md">
      
      {/* Speaker Icon */}
      <div className="absolute -top-5 -left-5 bg-gradient-to-br from-orange-400 to-orange-600 text-white p-4 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
        <Megaphone size={18} />
      </div>

      {/* Message */}
      <p className="text-zinc-700 text-center leading-relaxed text-lg"> 
      Discover exclusive travel experiences designed for your comfort and joy — Book today for the best deals !
      </p>
    </div>
  );
}
