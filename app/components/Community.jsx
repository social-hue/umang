import React from "react";
import Button from "../helpers/Button";

const Community = () => {
  return (
    <div className="lg:py-10 py-20 bg-[url(/Community.png)] bg-cover lg:h-[450px] flex items-center">
      <div className="main_width ">
        <div className="">
          <h4 className="lg:text-[65px] md:text-[45px] text-[35px] lg:leading-[60px]  font-light text-white ">
            <span className="yellow">Why Join</span> the Community
          </h4>
        </div>
        <div className="pt-2 text-white">
          <p className="lg:text-[22px] md:text-[18px]">
            Why live alone when life can be fuller with friends, care, and joy?
            At Umang, every day offers companionship, safety, and purpose. No
            isolation, no worries — just meaningful connections, engaging
            activities, and trusted support. Rediscover happiness in a vibrant
            community designed for your second innings.
          </p>
        </div>
        <div className="mt-10">
          <Button
            design={
              " gap-2 bg-white rounded-[10px] px-10 py-3 uppercase text-[#222] uppercase font-semibold  cursor-pointer  text-[20px]"
            }
            content={"Join us Today"}
            type={"Join us Today"}
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
