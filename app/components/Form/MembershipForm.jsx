"use client";
import { cities } from "@/app/StaticData/Cities";
import React, { useState } from "react";
import toast from "react-hot-toast";

const MembershipForm = () => {
  const [form, setForm] = useState({
    city: "",
    membershipType: "",
    subOption: "",
  });

  const handleChange = (key) => (e) => {
    setForm({
      ...form,
      [key]: e.target.value,
      ...(key === "membershipType" && { subOption: "" }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.city && form.membershipType && form.subOption) {
      toast.success(
        "Thank you for showing interest. We’ll get back to you soon!"
      );
      console.log("Submitted:", form);
      setForm({
        city: "",
        membershipType: "",
        subOption: "",
      });
    }
  };

  const buyOptions = ["1BHK", "2BHK", "3BHK"];
  const rentOptions = ["0–3 months", "3–6 months", "≥ 1 year"];
  const OthersOption = ["Legal Consultation", "Wellness", "Travel"];

  return (
    <section className="py-8">
      <div className="bg-[#F3F3F3] main_width p-10 rounded-[20px]">
        <h3 className="md:text-[45px] text-[35px] lg:leading-[60px] red font-light tracking-[-1.34px]">
          <span className="green">Become a</span> Member
        </h3>

        <form onSubmit={handleSubmit} className=" gap-4">
          <div className="my-8 flex md:flex-row flex-col  gap-4">
            <input
              type="Membership No"
              className="bg-white green  outline-none placeholder-[#069183] lg:w-1/4 w-full py-4 px-4 rounded-[11px] focus-within:ring-2 cursor-pointer focus-within:ring-teal-500"
              placeholder="Enter Membership No"
            />
            <button className="bg_green cursor-pointer text-white font-semibold px-10 py-3 rounded-md whitespace-nowrap hover:bg-teal-700 transition lg:self-stretch">
              Become a Member
            </button>
          </div>

          <div className="flex items-center gap-4 justify-between">
            <span className="bg-[#C8C2C2] w-full h-[1px] "></span>
            <span className="text-[#C8C2C2] text-[25px] ">OR</span>
            <span className="bg-[#C8C2C2] w-full h-[1px] "></span>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:items-end py-8">
            <div className="flex-1 bg-white px-4 py-2 rounded-[11px] focus-within:ring-2 cursor-pointer focus-within:ring-teal-500">
              <label className="sr-only" htmlFor="city">
                City
              </label>
              <select
                id="city"
                required
                value={form.city}
                onChange={handleChange("city")}
                className="w-full bg-white cursor-pointer  rounded-[11px] font-semibold green outline-none px-4 py-3 "
              >
                <option value="">City</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1 bg-white px-4 py-2  rounded-[11px] focus-within:ring-2 cursor-pointer focus-within:ring-teal-500">
              <label className="sr-only" htmlFor="membershipType">
                Membership Type
              </label>
              <select
                id="membershipType"
                required
                value={form.membershipType}
                onChange={handleChange("membershipType")}
                className="w-full bg-white rounded-[11px] cursor-pointer font-semibold green outline-none px-4 py-3"
              >
                <option value="">Membership Type</option>
                <option value="Buy">Buy</option>
                <option value="Rent">Rent</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex-1 bg-white px-4   py-2 rounded-[11px] focus-within:ring-2 cursor-pointer focus-within:ring-teal-500">
              <label className="sr-only" htmlFor="subOption">
                Option
              </label>
              <select
                id="subOption"
                value={form.subOption}
                required
                onChange={handleChange("subOption")}
                disabled={!form.membershipType}
                className="w-full bg-white rounded-[11px] cursor-pointer font-semibold green outline-none px-4 py-3 "
              >
                <option value="">
                  {form.membershipType === "Buy"
                    ? "Select BHK"
                    : form.membershipType === "Rent"
                    ? "Select Rent Duration"
                    : form.membershipType === "other"
                    ? "Other"
                    : "Select Option"}
                </option>
                {(form.membershipType === "Buy"
                  ? buyOptions
                  : form.membershipType === "Rent"
                  ? rentOptions
                  : OthersOption
                ).map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="bg_green cursor-pointer text-white font-semibold px-10 py-3 rounded-md whitespace-nowrap hover:bg-teal-700 transition lg:self-stretch"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MembershipForm;
