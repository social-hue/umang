import React from "react";
import { NumberCounter } from "../helpers/NumberCounter";
// import Button from "../helpers/Button";

const Community = () => {
  return (
    <div className="lg:py-10 md:py-18 py-10 bg-[url(/Community.png)] bg-cover lg:h-[350px] flex items-center">
      <div className="main_width ">
        <div>
          <h4 className="lg:text-[50px] md:text-[30px] text-[24px] lg:leading-[40px]  font-semibold text-white ">
            Be a part of our growing family, {""}
            <span className="yellow">
              <NumberCounter target={11249} duration={2500} />+
            </span>{" "}
            Members already !
          </h4>
        </div>
        <div className="p-6">
          <div className="lg:text-[20px] md:text-[16px] text-[14px]">
            <ul>
              <li><span>&#10004;</span> A safe and welcoming environment</li>
              <li><span>&#10004;</span> Professional healthcare and wellness support</li>
              <li><span>&#10004;</span> Transparent communication and personalized care plans</li>
              <li><span>&#10004;</span> Activities that foster social connections</li>
              <li><span>&#10004;</span> Support services that make life simpler and stress-free</li>
            </ul>
          </div>
        </div>
        {/* <div className="mt-4">
          <Button
            design={
              " gap-2 bg-white rounded-[0px] px-4 py-3 uppercase text-[#222] uppercase rounded-md font-semibold cursor-pointer text-[15px] transition-colors duration-500 ease-in-out hover:text-white hover:bg-black"
            }
            content={"Join us Today"}
            type={"Join us Today"}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Community;
