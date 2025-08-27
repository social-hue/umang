"use client";
import {
  PlayCircleIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

export default function TestimonialCard({
  thumbnail,
  quote,
  author,
  location,
  nameColor,
}) {
  return (
    <div className="grid lg:grid-cols-[40%_1fr] gap-10 items-center">
      {/* video thumb */}
      <div className="relative shrink-0 w-full  rounded-lg overflow-hidden">
        <img
          src={thumbnail}
          alt={author}
          className="object-cover w-full h-full"
        />
        <PlayCircleIcon className="absolute inset-0 m-auto h-16 w-16 text-white/90 drop-shadow-lg" />
      </div>

      <div className="mt-6 md:mt-0 flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lg:w-[90px] w-[40px]"
          viewBox="0 0 99 87"
          fill="none"
        >
          <path
            d="M0 42.3C0 24.9 5.8 12.6 17.4 5.4C22.8 2.00001 28.7 0.200009 35.1 0V28.2C29.3 28.2 25.2 30.5 22.8 35.1C22 37.1 21.4 39.5 21 42.3H42.3V84.3L0 86.1V42.3ZM56.1 42.3C56.1 25.1 62 12.8 73.8 5.4C78.8 2.20001 84.7 0.400007 91.5 0V28.2C85.3 28.2 81.2 30.5 79.2 35.1C78 37.1 77.4 39.5 77.4 42.3H98.4V84.3L56.1 86.1V42.3Z"
            fill="#069183"
            fillOpacity="0.2"
          />
        </svg>
        <div className="pt-6">
          <p className="lg:text-[30px] md:text-[20px] text-[18px]  leading-relaxed text-[#535353]">
            {quote}
          </p>
          <p
            className={`font-semibold text-[${nameColor}] mt-4 lg:text-[25px] md:text-[20px] text-[18px]`}
          >
            {author}
          </p>
          <p className="text-sm text-[#535353] lg:text-[18px] md:text-[16px] text-[15px]">
            {location}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className=""></div>
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:w-[90px] w-[40px]"
              viewBox="0 0 99 87"
              fill="none"
            >
              <path
                d="M98.4004 43.8001C98.4004 61.2001 92.6004 73.5001 81.0004 80.7001C75.6004 84.1001 69.7004 85.9001 63.3004 86.1001L63.3004 57.9001C69.1004 57.9001 73.2004 55.6001 75.6004 51.0001C76.4004 49.0001 77.0004 46.6001 77.4004 43.8001L56.1004 43.8001L56.1004 1.80008L98.4004 9.15527e-05L98.4004 43.8001ZM42.3004 43.8001C42.3004 61.0001 36.4004 73.3001 24.6004 80.7001C19.6004 83.9001 13.7004 85.7001 6.90038 86.1001L6.90039 57.9001C13.1004 57.9001 17.2004 55.6001 19.2004 51.0001C20.4004 49.0001 21.0004 46.6001 21.0004 43.8001L0.000385168 43.8001L0.000388839 1.80007L42.3004 8.66483e-05L42.3004 43.8001Z"
                fill="#B41F56"
                fillOpacity="0.18"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
