import React from "react";
import { NumberCounter } from "../helpers/NumberCounter";
import Button from "../helpers/Button";

const Community = () => {
  return (
    <div className="lg:py-8 md:py-8 py-8 bg-[url(/Community.png)] bg-cover lg:h-[340px] flex items-center">
      <div className="main_width">
        <div>
          <h4 className="lg:text-[50px] md:text-[30px] text-[24px] lg:leading-[40px]  font-semibold text-white">
            Be a part of our growing family, {""}
            <span className="yellow">
              <NumberCounter target={101249} duration={2500} />+
            </span>{" "}
            Members already !
          </h4>
        </div> 
        <div className="p-4"> 
          <div className="lg:text-[20px] md:text-[16px] text-[16px] text-white"> 
            <ul> 
              <li><span>&#10004;</span> A safe and welcoming environment</li>
              <li><span>&#10004;</span> Professional healthcare and wellness support</li>
              <li><span>&#10004;</span> Transparent communication and personalized care plans</li>
              <li><span>&#10004;</span> Activities that foster social connections</li>
            </ul> 
          </div>
          <div className="mt-4 ml-2">
           <a href="https://docs.google.com/forms/d/e/1FAIpQLScQlwi7hkmU9fp7aGSOLfUXPIvQmADduVyPQvVC5PKhcbFyDQ/viewform?usp=header" target="_main">
          <button className= "gap-2 bg-white px-4 py-3 uppercase text-[#222] rounded-md font-semibold cursor-pointer text-[15px] transition-colors duration-500 ease-in-out hover:text-white hover:bg-black">
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
