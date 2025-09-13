import React from "react";

export default function NewsTicker() {
  const newsItems = [
    "🚀 Coming Soon in 75+ Cities Across India",
    "📈 More than 2000+ memberships",
    "🎉 10,000+ users milestone reached",
  ];

  return (
    <div className="w-[420px] flex items-center gap-4 font-medium z-50 bg-white/90 backdrop-blur-sm px-4 py-2 shadow-sm border border-black-600 overflow-hidden">
      {/* Fixed heading */}
      <h3 className="text-lg font-semibold text-gray-800 whitespace-nowrap">
        What's new?
      </h3>

      {/* Sliding news container */}
      <div className="w-[320px] overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {newsItems.concat(newsItems).map((item, index) => (
            <span
              key={index}
              className="mx-4 text-gray-600 text-semibold whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Gradient fade on right */}
        <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-white/90 to-transparent pointer-events-none"></div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
