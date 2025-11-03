import React from "react";
import { NumberCounter } from "../helpers/NumberCounter";
// import Button from "../helpers/Button";

const Community = () => {
  return (
    <div className="relative lg:py-8 md:py-8 py-8 bg-[url(/blog/blogbanner2.jpg)] bg-cover h-[420px] md:h-[400px] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/45"></div>
      <div className="main_width z-10">
        <div>
          <p className="mb-2 lg:text-[40px] md:text-[30px] text-[24px] md:leading-[58px] font-semibold text-white">
            Be a part of our growing family, {""}
            <span className="yellow">
              <NumberCounter target={102598} duration={3000} />+
            </span>{" "}
            Members already !
          </p>
        </div> 
        <div className="py-2"> 
          <div className="lg:text-[18px] text-[16px] text-white"> 
            <ul className="space-y-1"> 
              <li><span className="text-white">&#10004;</span> A safe and welcoming environment</li>
              <li><span className="text-white">&#10004;</span> Professional healthcare and wellness support</li>
              <li><span className="text-white">&#10004;</span> Transparent communication & personalized care plans</li>
              <li><span className="text-white">&#10004;</span> Activities that foster social connections</li>
            </ul> 
          </div>
          <div className="mt-6 ml-2">
           <a href="https://docs.google.com/forms/d/e/1FAIpQLScQlwi7hkmU9fp7aGSOLfUXPIvQmADduVyPQvVC5PKhcbFyDQ/viewform?usp=header" target="_main">
          <button className= "gap-2 bg-white px-4 py-3 uppercase text-[#222] rounded-md font-semibold cursor-pointer text-[15px] transition-colors duration-500 ease-in-out hover:bg-slate-300">
            Join Us Today
            </button> 
          </a> 
            </div>
        </div> 
       </div>
      </div>
  );
};
export default Community;
