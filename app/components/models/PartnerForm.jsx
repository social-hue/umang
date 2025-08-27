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

export const formFiled = {
  1: {
    title: "Financer / Investor",
    fields: [
      { name: "companyName", label: "Company Name", type: "text" },
      { name: "contactPerson", label: "Contact Person", type: "text" },
      { name: "contactNumber", label: "Contact Number", type: "tel" },
      { name: "email", label: "Email Id", type: "email" },
      { name: "designation", label: "Designation", type: "text" },
      { name: "message", label: "Message Box", type: "textarea" },
    ],
  },
  2: {
    title: "Real Estate / Developer",
    fields: [
      { name: "companyName", label: "Company Name", type: "text" },
      { name: "contactPerson", label: "Contact Person", type: "text" },
      { name: "contactNumber", label: "Contact Number", type: "tel" },
      { name: "email", label: "Email Id", type: "email" },
      { name: "designation", label: "Designation", type: "text" },
      { name: "message", label: "Message Box", type: "textarea" },
    ],
  },
  3: {
    title: "Land-Owner",
    fields: [
      { name: "contactPerson", label: "Contact Person", type: "text" },
      { name: "contactNumber", label: "Contact Number", type: "tel" },
      { name: "email", label: "Email Id", type: "email" },
      { name: "message", label: "Message Box", type: "textarea" },
    ],
  },
  4: {
    title: "Senior Citizen /Clubs",
    fields: [
      { name: "ClubName", label: "Club Name", type: "text" },
      { name: "contactPerson", label: "Contact Person", type: "text" },
      { name: "contactNumber", label: "Contact Number", type: "tel" },
      { name: "email", label: "Email Id", type: "email" },
      { name: "designation", label: "Designation", type: "text" },
      { name: "message", label: "Message Box", type: "textarea" },
    ],
  },
};
export default function PartnerForm({ open, setOpen, colabType, id }) {
  const [loading, setLoading] = useState(false);
  const Close = () => {
    setOpen(false);
  };

  const inputFields = formFiled[id];
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.target);
      const formObj = Object.fromEntries(formData.entries());
      const payload = {
        form_id: id,
        form_type: colabType,
        company_name: formObj.companyName ? formObj.companyName : "",
        club_name: formObj.ClubName ? formObj.ClubName : "",
        contact_person: formObj.contactPerson ? formObj.contactPerson : "",
        contact_number: formObj.contactNumber ? formObj.contactNumber : "",
        email: formObj.email ? formObj.email : "",
        designation: "Project Manager",
        message: formObj.message ? formObj.message : "",
      };

      const response = await fetch(process.env.NEXT_PUBLIC_API_URL_MULTI_FORM, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const res = await response.json();
      if (res.success === true) {
        setLoading(false);
        toast.success("Thank you for reaching out. We will be in touch soon.");
        Close();
        return;
      } else if (res.success === false) {
        setLoading(false);
        toast.error(res.message);
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      {/* Backdrop */}
      <DialogBackdrop className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Centered, scrollable container */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto">
        <DialogPanel className="w-full lg:w-1/2 max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl ring-1 ring-black/10">
          <div className="flex items-center gap-2 bg_green px-6 py-6">
            <EnvelopeIcon className="h-6 w-6 text-white" />
            <DialogTitle className="text-lg font-semibold text-white">
              Collaborate&nbsp;
              {colabType && (
                <span className="font-normal text-gray-300">– {colabType}</span>
              )}
            </DialogTitle>
          </div>
          <div className="text-black">
            <form
              onSubmit={handleSubmitForm}
              className="grid grid-cols-1 gap-4 px-6 py-6 sm:grid-cols-2"
            >
              {inputFields?.fields?.map((field) => (
                <div
                  key={field.name}
                  className={`sm:col-span-${
                    field.type === "textarea" ? "2" : "1"
                  }`}
                >
                  <label
                    htmlFor={field.name}
                    className="block font-medium text-gray-900"
                  >
                    {field.label}
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      required
                      rows="4"
                      placeholder={`Enter ${field.label}`}
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-3 text-gray-900 shadow-sm placeholder-gray-400 outline-none focus:border-[#069183] focus-within:ring-2 cursor-pointer focus-within:ring-teal-500"
                    ></textarea>
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      maxLength={field.type === "tel" ? 10 : undefined}
                      pattern={field.type === "tel" ? "[0-9]{10}" : undefined}
                      inputMode={field.type === "tel" ? "numeric" : undefined}
                      required
                      placeholder={`Enter ${field.label}`}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (
                          ["contactPerson", "name", "ClubName"].includes(
                            field.name
                          ) &&
                          !/^[A-Za-z\s]*$/.test(value)
                        ) {
                          return; // Ignore invalid input
                        }
                      }}
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-3 text-gray-900 shadow-sm placeholder-gray-400 outline-none focus:border-[#069183] focus-within:ring-2 cursor-pointer focus-within:ring-teal-500"
                    />
                  )}
                </div>
              ))}

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
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#B41F56] px-6 py-3 text-sm font-semibold text-white transition active:scale-95 hover:bg-[#069183] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading && (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                  )}
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
