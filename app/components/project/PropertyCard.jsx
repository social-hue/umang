import Image from "next/image";
import { MdOutlineBed, MdOutlineBathtub } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaCarSide, FaRulerCombined } from "react-icons/fa";

export default function PropertyCard({
  image,
  title,
  beds,
  baths,
  area,
  parking,
  location,
  city,
  price,
  period = "/month",
}) {
  return (
    <div className="relative w-[95%] md:w-full mx-auto h-[400px] group cursor-pointer transition-all duration-700 ease-in rounded-[20px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="(max-width:640px)100vw,25vw"
        className="object-cover group-hover:scale-[1.1] transition-all duration-500 ease-in"
      />

      {/* without animation  */}
      <div className="absolute h-[180px] w-full  bottom-0  bg-[linear-gradient(180deg,_rgba(255,255,255,0.30)_0%,_rgba(255,255,255,0.85)_34.38%,_rgba(255,255,255,0.83)_100%)] backdrop-blur-[2px] pointer-events-none">
        <div className=" h-full w-full relative">
          <div className="absolute bottom-2">
            {/* dynamic  */}
            {/* <div className="px-4 py-3">
              <h3 className="font-bold  text-[#2A2A2A] text-[20px] mb-1">
                {title}
              </h3>

              <ul className="flex 2xl:text-[14px] 2xl:flex-nowrap flex-wrap xl:text-[14px] items-center text-[11px] text-gray-600 gap-3 mb-2">
                <li className="flex items-center font-medium gap-1 ">
                  <MdOutlineBed className="text-[16px]" /> {beds} Beds
                </li>
                <li className="flex items-center gap-1 ">
                  <MdOutlineBathtub className="text-[14px]" /> {baths} Baths
                </li>
                <li className="flex items-center gap-1 ">
                  <FaRulerCombined className="text-[12px]" /> {area} m²
                </li>
                <li className="flex items-center gap-1 ">
                  <FaCarSide className="text-[13px]" /> {parking} Parking
                </li>
              </ul>

              <div className="flex 2xl:flex-nowrap flex-wrap items-center justify-between 2xl:text-[18px] w-full">
                <span className="flex items-center gap-1 text-[#006557] font-bold">
                  <HiOutlineLocationMarker className="" /> {location}
                </span>

                <span className="text-[#006557] font-bold">
                  ₹{price.toLocaleString()}
                  <span className="text-[14px] uppercase font-normal">
                    {period}
                  </span>
                </span>
              </div>
            </div> */}
            <div className="px-4 py-3">
              <h3 className="font-bold  text-[#2A2A2A] text-[20px] mb-1">
                Coming soon
              </h3>

              {/* <ul className="flex 2xl:text-[14px] 2xl:flex-nowrap flex-wrap xl:text-[14px] items-center text-[11px] text-gray-600 gap-3 mb-2">
                <li className="flex items-center font-medium gap-1 ">
                  <MdOutlineBed className="text-[16px]" /> {beds} Beds
                </li>
                <li className="flex items-center gap-1 ">
                  <MdOutlineBathtub className="text-[14px]" /> {baths} Baths
                </li>
                <li className="flex items-center gap-1 ">
                  <FaRulerCombined className="text-[12px]" /> {area} m²
                </li>
                <li className="flex items-center gap-1 ">
                  <FaCarSide className="text-[13px]" /> {parking} Parking
                </li>
              </ul> */}

              <div className="flex 2xl:flex-nowrap flex-wrap items-center justify-between 2xl:text-[18px] w-full">
                <span className="flex items-center gap-1 text-[#006557] font-bold">
                  <HiOutlineLocationMarker className="" /> {city}
                </span>

                {/* <span className="text-[#006557] font-bold">
                  ₹{price.toLocaleString()}
                  <span className="text-[14px] uppercase font-normal">
                    {period}
                  </span>
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* with animation  */}
      {/* <div className="absolute -bottom-4 h-[0px] group-hover:h-[150px] w-full bg-[linear-gradient(180deg,_rgba(255,255,255,0.30)_0%,_rgba(255,255,255,0.85)_34.38%,_rgba(255,255,255,0.83)_100%)] backdrop-blur-[2px] transition-all duration-500 ease-in transform group-hover:translate-y-[-10px] z-10 overflow-hidden">
        <div className="h-full w-full relative opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in pointer-events-auto">
          <div className="absolute bottom-2 w-full">
            <div className="px-4 py-3">
              <h3 className="font-bold text-[#2A2A2A] text-[20px] mb-1">
                {title}
              </h3>

              <ul className="flex items-center text-[11px] text-gray-600 gap-3 mb-2 flex-wrap">
                <li className="flex items-center font-medium gap-1 text-[16px]">
                  <MdOutlineBed className="text-[16px]" /> {beds} Beds
                </li>
                <li className="flex items-center gap-1 text-[16px]">
                  <MdOutlineBathtub className="text-[14px]" /> {baths} Baths
                </li>
                <li className="flex items-center gap-1 text-[16px]">
                  <FaRulerCombined className="text-[12px]" /> {area} m²
                </li>
                <li className="flex items-center gap-1 text-[16px]">
                  <FaCarSide className="text-[13px]" /> {parking} Parking
                </li>
              </ul>

              <div className="flex items-center justify-between text-[18px]">
                <span className="flex items-center gap-1 text-[#006557] font-bold">
                  <HiOutlineLocationMarker /> {location}
                </span>
                <span className="text-[#006557] font-bold">
                  ₹{price.toLocaleString()}
                  <span className="text-[14px] uppercase font-normal">
                    {period}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
