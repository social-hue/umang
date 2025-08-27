"use client";
// import { PlayCircleIcon } from "@heroicons/react/24/solid";

export default function VideoCard({ thumbnail, name, tagline, headColor }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md group cursor-pointer  ">
      <div className="relative">
        <img
          src={thumbnail}
          alt={name}
          className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105 transition"
          loading="lazy"
        />
        {/* <PlayCircleIcon className="absolute inset-0 m-auto h-14 w-14 text-white/90 drop-shadow-lg group-hover:scale-110 transition" /> */}
      </div>
      <div className="absolute  bottom-4 left-4 right-4">
        <div className="p-4 bg-white 2xl:rounded-tr-[110px] xl:rounded-tr-[70px] rounded-tr-[60px]  py-4 rounded-bl-[19px]">
          <h4
            className={`font-bold font-semibold 2xl:text-[22px] xl:text-[20px] text-[18px] text-[${headColor}]`}
          >
            {name}
          </h4>
          <p className="pr-4 2xl:text-[20px] xl:text-[18px] text-[#151515] mt-1 line-clamp-2">
            {tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
