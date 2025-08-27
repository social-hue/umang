import React from "react";

const Aboutus = () => {
  return (
    <div className="py-10">
      <div className="main_width  relative z-9">
        <h2 className="green lg:text-[65px] md:text-[45px] text-[35px] lg:leading-[60px]  font-medium">
          <span>About</span> <span className="gradient_text">Umang Living</span>
        </h2>
        <div className="text-[#535353] lg:text-[22px] md:text-[18px] pt-4">
          <p>
            Umang Living is India’s first multi-city senior living community,
            thoughtfully designed with love and respect. We believe that at 55,
            life doesn’t slow down -- it blossoms. 
          </p>
          <p>
            So, we are creating a community where comfort meets freedom.
            Solitude meets companionship. Wellness meets joy. Whether you are
            embarking on an exciting new beginning, a peaceful retirement, or
            simply seeking a more fulfilling and connected way to live, Umang
            Living is where you belong.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
