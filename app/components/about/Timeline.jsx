import React from "react";

const Timeline = () => {
  return (
    <div className="py-10">
      <div className="main_width">
        <h4 className="green  lg:text-[65px] md:text-[45px] text-[35px] lg:leading-[60px]">
          Project’s <span className="gradient_text"> Timeline</span>
        </h4>
        <div className="text-[#535353] lg:text-[18px] pt-6">
          <p className="lg:text-[22px] md:text-[18px]">
          In the joyous spirit of Navratras, <span className="font-semibold">Umang Living</span> opens its doors to a new way of life for seniors in India. With thoughtfully designed homes and enriching experiences, we are set to redefine senior living. Join us this festive season as we begin this joyful new chapter, where comfort, care, and community are at the heart of everything we do.
          </p>
        </div>
        {/* <div className="mt-10">
          <div className="grid xl:grid-cols-[21%_21%_36%_22%] lg:grid-cols-[25%_40%_40%_45] md:grid-cols-[25%_50%_25%] gap-4">
            <div className="overflow-hidden rounded-[26px]">
              <img
                src="/Timeline/t01.jpg"
                className="w-full object-cover md:h-full lg:h-[640px]"
                alt="timeline01"
              />
            </div>
            <div className="xl:block hidden overflow-hidden rounded-[26px] mt-20">
              <img
                src="/Timeline/t02.jpg"
                className="w-full object-cover lg:h-[640px]"
                alt="timeline01"
              />
            </div>
            <div className=" p-10 bg_green relative lg:h-[640px] overflow-hidden rounded-[26px]">
              <div className="absolute w-full -bottom-[200px] left-0">
                <img src="/rangoli.png" alt="" />
              </div>
              <div className="text-center pt-10">
                <h6 className="yellow font-light lg:text-[30px] md:text-[25px] text-[20px]">
                  Launched in Punjab{" "}
                </h6>
                <h5 className="font-bold text-white lg:text-[220px] md:text-[150px] text-[110px] leading-[110px] lg:leading-[220px] md:leading-[150px] heading_font">
                  2025
                </h5>
              </div>
            </div>
            <div className="overflow-hidden rounded-[26px]">
              <img
                src="/Timeline/t03.jpg"
                className="w-full object-cover md:h-full lg:h-[640px]"
                alt="timeline01"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Timeline;
