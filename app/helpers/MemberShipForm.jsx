"use client";
import React from "react";
import { cities } from "../StaticData/Cities";

const MemberShipForm = ({ form, setForm }) => {
  const handleChange = (key) => (e) => {
    setForm({
      ...form,
      [key]: e.target.value,
      ...(key === "membershipType" && { subOption: "" }),
    });
  };

  const buyOptions = ["1BHK", "2BHK", "3BHK"];
  const rentOptions = ["0–3 months", "3–6 months", "≥ 1 year"];
  const OthersOption = ["Legal Consultation", "Wellness", "Travel"];

  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 w-full">
      {/* City */}
      <div className="flex-1 bg-white px-4 rounded-[11px] border-2 focus-within:ring-2 cursor-pointer focus-within:ring-teal-500">
        <label className="sr-only" htmlFor="city">
          City
        </label>
        <select
          id="city"
          required
          value={form.city}
          onChange={handleChange("city")}
          className="w-full bg-white cursor-pointer rounded-[11px] font-semibold green outline-none px-4 py-3"
        >
          <option value="">City</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Membership Type */}
      <div className="flex-1 bg-white px-4 rounded-[11px] border-2 focus-within:ring-2 cursor-pointer focus-within:ring-teal-500">
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

      {/* SubOption */}
      <div className="flex-1 bg-white px-4 rounded-[11px] border-2 focus-within:ring-2 cursor-pointer focus-within:ring-teal-500">
        <label className="sr-only" htmlFor="subOption">
          Option
        </label>
        <select
          id="subOption"
          required
          value={form.subOption}
          onChange={handleChange("subOption")}
          disabled={!form.membershipType}
          className="w-full bg-white rounded-[11px] cursor-pointer font-semibold green outline-none px-4 py-3"
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
    </div>
  );
};

export default MemberShipForm;
