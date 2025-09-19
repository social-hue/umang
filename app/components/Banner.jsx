import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const Banner = ({ title }) => {
  return (
    <div className="bg-[url(/greenBg.jpg)] bg-right lg:h-[200px] flex items-center  py-10">
      <div className="main_width">
        <div className="grid lg:grid-cols-[15px_1fr] grid-cols-[10px_1fr] gap-4">
          <div className="lg:w-[10px] w-[8px] h-full bg-white "></div>
          <div className="">
            <div className="">
              <h2 className=" lg:text-[60px] text-white  md:text-[30px] text-[25px]  xl:leading-[80px] lg:leading-[60px] md:leading-[30px] lg:tracking-[-4px]">
                {title}
              </h2>
              <p className="flex pt-2 text-white items-center uppercase font-medium  lg:text-[15px] text-[14px]">
                Home{" "}
                <span className="text-sm">
                  <FaAngleRight />
                </span>{" "}
                <span className="yellow">{title}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
