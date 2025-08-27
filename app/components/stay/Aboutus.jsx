import React from "react";

const Aboutus = () => {
  return (
    <div className="pt-10">
      <div className="main_width  relative z-9">
        {/* <h2 className="green lg:text-[65px] md:text-[45px] text-[35px] lg:leading-[60px]  font-medium">
          <span>About</span> <span className="gradient_text">Umang Living</span>
        </h2> */}
        <div className="text-[#535353] lg:text-[22px] md:text-[18px] pt-4">
          <p>
            At Umang Living, we’re building a nationwide network of thoughtfully
            designed senior-friendly homes — tailored for individuals aged 55
            and above who seek comfort, flexibility, and community in their
            golden years.
          </p>
          <br />
          <p>
            Whether you’re looking for a short getaway, a long-term stay, or a
            temporary move to a new city,{" "}
            <span className="font-semibold"> we’ve got you covered.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
