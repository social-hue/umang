import React from "react";

export default function NewsTicker() {
  const newsItems = [
    "🚀 Coming Soon in 75+ Cities Across India",
    "📢 Mark your calendars ! Travel, Legal and Financial Services go live on November 1, 2025",
    "📆 India's largest senior living community is now coming to Jalandhar, Punjab !",
    "📈 More than 100000+ memberships",
    "🎉 Sign up for our newsletter to receive exclusive offers, event updates, and wellness tips tailored for seniors and their families",
    "🌻 Join our membership for free!",
    // "📆 Launching this New Year"
  ];

  return (
    <>
      <div className="w-full flex items-center gap-4 font-medium bg-white/90 backdrop-blur-sm px-4 py-2 shadow-sm border-1 border-zinc-400 overflow-hidden group">
        {/* Fixed heading */}
        <h3 className="text-lg font-semibold text-gray-800 whitespace-nowrap">
          What's new?
        </h3>

        {/* Sliding news container */}
        <div className="w-auto overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {newsItems.concat(newsItems).map((item, index) => (
              <span
                key={index}
                className="mx-4 text-gray-600 text-md text-semibold whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
          {/* Gradient fade on right */}
          <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-white/90 to-transparent pointer-events-none"></div>
        </div>
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
          animation: marquee 30s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}