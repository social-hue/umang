"use client";
import Button from "@/app/helpers/Button";
import { cities } from "@/app/StaticData/Cities";
import { useState } from "react";

const MembershipForm = () => {
  const [month, setMonth] = useState("July 2025");

  return (
    <section className="">
      <div className="bg-[#F3F3F3] main_width p-10 rounded-[20px]">
        <h3 className="md:text-[45px] text-[35px] lg:leading-[60px] red font-light tracking-[-1.34px]">
          <span className="green">For </span> Members
        </h3>

        <form className=" gap-4">
          <div className="my-8 flex md:flex-row flex-col transition-all ease-in duration-700  gap-4">
            <input
              type="Membership No"
              className="bg-white text-[#313030]  outline-none placeholder-[#313030] px-4 lg:w-1/4 w-full py-4 bg-white px-4 py-2 rounded-[11px] focus-within:ring-2 cursor-pointer focus-within:ring-teal-500"
              placeholder="Enter Membership No"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:items-end py-8">
            <div className="flex-1 bg-white px-4 py-2 rounded-[11px] focus-within:ring-2 cursor-pointer focus-within:ring-teal-500">
              <select
                id=""
                required
                className="w-full bg-white rounded-[11px] cursor-pointer font-semibold text-[#313030] outline-none px-4 py-3"
              >
                <option value="">From</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1 bg-white px-4 py-2  rounded-[11px] cursor-pointer focus-within:ring-2 cursor-pointer focus-within:ring-teal-500">
              <select
                id=""
                required
                className="w-full bg-white rounded-[11px] cursor-pointer font-semibold text-[#313030] outline-none px-4 py-3"
              >
                <option value="">To</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex 2xl:w-[215px] xl:w-[200px] lg:w-[180px]  items-center gap-4 bg-white px-4   py-2 rounded-[11px] cursor-pointer focus-within:ring-2 cursor-pointer focus-within:ring-teal-500">
              <div className=" w-full">
                <input
                  type="date"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-full bg-white rounded-[11px] cursor-pointer font-semibold text-[#313030] outline-none px-4 py-3"
                />
              </div>
              {/* <div className="">
                <img
                  src="/svgs/calender.svg"
                  alt="calander"
                  className="w-[80%]"
                />
              </div> */}
            </div>

            <button
              type="submit"
              className="bg_green xl:w-[260px] lg:w-[160px] cursor-pointer text-white font-semibold px-10 py-3 rounded-md whitespace-nowrap hover:bg-teal-700 transition lg:self-stretch"
            >
              SUBMIT
            </button>
          </div>
          <div className="flex items-center gap-4 justify-between">
            <span className="bg-[#C8C2C2] w-full h-[1px] "></span>
            <span className="text-[#C8C2C2] text-[25px] ">OR</span>
            <span className="bg-[#C8C2C2] w-full h-[1px] "></span>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <Button
              design={
                " gap-2 bg-[#b41f56] rounded-[10px] px-10 py-3 uppercase text-[#fff] uppercase font-semibold  cursor-pointer  text-[20px]"
              }
              content={"Become a member"}
              type={"Become a member"}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default MembershipForm;
