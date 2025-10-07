import React from "react";

const Map = () => {
  return (
    <>
      <div className="py-12 main_width grid 2xl:grid-cols-[45%_1fr] lg:grid-cols-[55%_1fr] gap-8 md:gap-4">
        <div className="flex flex-col justify-center h-full">
          <h1 className="lg:text-[42px] md:text-[40px] text-[30px] lg:leading-[40px] font-semibold ">
            <span className="green">Discover 75 Cities </span>
            <span className="gradient_text">Across the Map</span>{" "}
          </h1>
          <p className="text-[#535353] xl:text-[26px] lg:text-[24px] md:text-[20px] text-[19px] pt-4 ">
            Umang Living is proud to introduce its upcoming senior living
            communities across 75 cities in India, designed exclusively for the
            55+ generation.
          </p>{" "}
          <br />
          <p className="green xl:text-[26px] lg:text-[24px] md:text-[20px] text-[19px]">
            These thoughtfully planned townships offer a blend of comfort,
            companionship, and care - empowering seniors to live independently
            while enjoying a vibrant, supportive environment. With studio, 1, 2
            and 3 BHK options, shared amenities, wellness programs, and
            pan-India mobility, Umang communities are a celebration of aging
            with dignity, joy, and freedom—where every city feels like home.
          </p>
        </div>
        <div className="">
          <img src="/map.png" alt="map" loading="lazy" decoding="async" />
        </div>
      </div>
      {/* <div className="main_width mt-4 xl:hidden block">
        <div className="">
          <p className=" green xl:text-[26px] lg:text-[24px] md:text-[20px] text-[19px]">
            So, we are creating a community where comfort meets freedom.
            Solitude meets companionship. Wellness meets joy. Whether you are
            embarking on an exciting new beginning, a peaceful retirement, or
            simply seeking a more fulfilling and connected way to live, Umang
            Living is where you belong.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Map;
