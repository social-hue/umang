import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="main_width relative">
        <div className="absolute right-0-bottom-20">
          <img
            src="/svgs/child.svg"
            alt="childs"
            className="lg:w-[90%] w-[50%] mx-auto lg:mx-1"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-10 gap-2">
          <div className="">
            <img
              src="/abt-us.jpg"
              alt="abt_us"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="lg:pt-10">
            <h3 className="lg:text-[65px] md:text-[45px] text-[35px] lg:leading-[60px] red font-light tracking-[-1.34px]">
              <span className="green"> About</span> Us
            </h3>
            <p className="text-[#535353] lg:text-[26px] text-[18px] lg:leading-[40px] pt-4">
              Umang Living is India’s first multi-city senior independent-living
              community, thoughtfully designed with love and respect. We believe
              that at 55, life doesn’t slow down -- it blossoms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
