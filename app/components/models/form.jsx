"use client";
import MemberShipForm from "@/app/helpers/MemberShipForm";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Form({ open, setOpen, colabType }) {
  const [data, setdata] = useState({
    uname: "",
    mobile: "",
    email: "",
    message: "",
    gender: "",
    occupation: "",
    age: "",
    education: "",
    Ftype: colabType,
  });

  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);

  const [membershipForm, setMembershipForm] = useState({
    city: "",
    membershipType: "",
    subOption: "",
  });

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      name: data.uname,
      email: data.email,
      phone: data.mobile,
      message: data.message,
      gender: data.gender,
      occupation: data.occupation,
      type: colabType,
      age: data.age,
      education: data.education,
      isMember: check ? 1 : 0,
      city: membershipForm.city,
      membership_type: membershipForm.membershipType,
      membership_type_details: membershipForm.subOption,
    };
    try {
      if (
        !data.uname ||
        !data.mobile ||
        !data.email ||
        !data.message ||
        !data.age ||
        !data.education ||
        !data.occupation ||
        !data.gender
      ) {
        return toast.error("Fields must not be empty");
      }
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const response = await res.json();

      if (response.success === true) {
        setLoading(false);
        toast.success(
          "Thank you for showing interest. We’ll get back to you soon!"
        );
        setOpen(false);
        setCheck(false);
        setdata({
          uname: "",
          mobile: "",
          email: "",
          message: "",
          gender: "",
          occupation: "",
          age: "",
          education: "",
        });
        setMembershipForm({ city: "", membershipType: "", subOption: "" });
      } else {
        setLoading(false);
        toast.error(response.message);
      }
      // console.log(response);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // close model and unchcek check input
  const Close = () => {
    setCheck(false);
    setOpen(false);
    setdata({
      uname: "",
      mobile: "",
      email: "",
      message: "",
      gender: "",
      occupation: "",
      age: "",
      education: "",
    });
    setMembershipForm({ city: "", membershipType: "", subOption: "" });
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      {/* Backdrop */}
      <DialogBackdrop className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Centered, scrollable container */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto">
        <DialogPanel className="w-full lg:w-1/2 max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl ring-1 ring-black/10">
          {/* Header strip */}
          <div className="flex items-center gap-2 bg_green px-6 py-6">
            <EnvelopeIcon className="h-6 w-6 text-white" />
            <DialogTitle className="text-lg font-semibold text-white">
              Membership&nbsp;
              {colabType && (
                <span className="font-normal text-gray-300">– {colabType}</span>
              )}
            </DialogTitle>
          </div>

          <form
            onSubmit={handleForm}
            className="grid grid-cols-1 gap-4 px-6 py-6 sm:grid-cols-2"
          >
            {/* Name */}
            <div className="sm:col-span-1">
              <label htmlFor="name" className="block font-medium text-gray-900">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={data.uname}
                onChange={(e) => {
                  const value = e.target.value;
                  const regex = /^[A-Za-z\s]*$/;
                  if (regex.test(value)) {
                    setdata({ ...data, uname: value });
                  }
                }}
                required
                placeholder="Your name"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-3 text-gray-900 shadow-sm placeholder-gray-400 outline-none focus:border-[#069183] focus-within:ring-2 cursor-pointer focus-within:ring-teal-500"
              />
            </div>

            {/* Mobile */}
            <div className="sm:col-span-1">
              <label
                htmlFor="MobileNumber"
                className="block font-medium text-gray-900"
              >
                Mobile
              </label>
              <input
                id="MobileNumber"
                name="MobileNumber"
                type="text"
                required
                maxLength={10}
                pattern="[0-9]{10}"
                inputMode="numeric"
                value={data.mobile}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "");
                  setdata({ ...data, mobile: val });
                }}
                placeholder="e.g. 988777...."
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-3 text-gray-900 shadow-sm placeholder-gray-400 outline-none focus:border-[#069183] focus-within:ring-2 cursor-pointer focus-within:ring-teal-500"
              />
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block font-medium text-gray-900"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={data.email}
                onChange={(e) => setdata({ ...data, email: e.target.value })}
                placeholder="you@example.com"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-3 text-gray-900 shadow-sm placeholder-gray-400 outline-none focus:border-[#069183] focus-within:ring-2 cursor-pointer focus-within:ring-teal-500"
              />
            </div>
            {/* Gender */}
            <div className="">
              <label
                htmlFor="gender"
                className="block font-medium text-gray-900 mb-2"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none focus:border-[#069183] focus:ring-1 focus:ring-[#069183]"
                value={data.gender}
                onChange={(e) => setdata({ ...data, gender: e.target.value })}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Occupation */}
            <div className="">
              <label
                htmlFor="occupation"
                className="block font-medium text-gray-900 mb-2"
              >
                Occupation
              </label>
              <select
                name="occupation"
                id="occupation"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none focus:border-[#069183] focus:ring-1 focus:ring-[#069183]"
                value={data.occupation}
                onChange={(e) =>
                  setdata({ ...data, occupation: e.target.value })
                }
              >
                <option value="">Select Occupation</option>
                <option value="working">Working</option>
                <option value="retired">Retired</option>
                <option value="bussiness">Business</option>
              </select>
            </div>

            {/* Age */}
            <div className="">
              <label
                htmlFor="age"
                className="block font-medium text-gray-900 mb-2"
              >
                Age
              </label>
              <select
                name="age"
                id="age"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none focus:border-[#069183] focus:ring-1 focus:ring-[#069183]"
                value={data.age}
                onChange={(e) => setdata({ ...data, age: e.target.value })}
              >
                <option value="">Select Age Range</option>
                <option value="40-45">40-45</option>
                <option value="55-65">55-65</option>
                <option value="65+">65 and above</option>
              </select>
            </div>

            {/* Education */}
            <div className="">
              <label
                htmlFor="education"
                className="block font-medium text-gray-900 mb-2"
              >
                Education
              </label>
              <select
                name="education"
                id="education"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none focus:border-[#069183] focus:ring-1 focus:ring-[#069183]"
                value={data.education}
                onChange={(e) =>
                  setdata({ ...data, education: e.target.value })
                }
              >
                <option value="">Select Education</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
              </select>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block font-medium text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={2}
                value={data.message}
                onChange={(e) => setdata({ ...data, message: e.target.value })}
                required
                placeholder="Tell us a bit about your collaboration idea…"
                className="mt-1 w-full resize-none outline-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus-within:ring-2 cursor-pointer focus-within:ring-teal-500"
              />
            </div>

            {/* Checkbox */}
            <div className="sm:col-span-2 flex items-center gap-2">
              <input
                type="checkbox"
                checked={check}
                onChange={(e) => setCheck(e.target.checked)}
                className={`h-[20px] w-[20px] rounded-full transition-transform duration-300 ease-in-out
              ${check ? "scale-125" : "scale-100"}
               accent-[#069183]`}
              />

              <p className="text-[17px] text-[#535353] lg:text-[18px]">
                Join Umang Living today
              </p>
            </div>

            {/* Membership sub‑form */}
            {check ? (
              <div className="w-full sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block font-medium text-gray-900"
                >
                  Membership
                </label>
                <MemberShipForm
                  form={membershipForm}
                  setForm={setMembershipForm}
                />
              </div>
            ) : (
              ""
            )}

            {/* Actions */}
            <div className="col-span-full mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={Close}
                className="inline-flex cursor-pointer items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-300 hover:bg-gray-50"
              >
                Close
              </button>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex cursor-pointer justify-center rounded-md bg-[#B41F56] px-6 py-3 text-sm font-semibold text-white transition active:scale-95 hover:bg-[#069183]"
              >
                {loading ? "Please wait..." : "Submit"}
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
