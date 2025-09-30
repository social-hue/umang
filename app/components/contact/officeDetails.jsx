import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";

const OfficeDetails = () => {
  const data = [
    {
      title: `<span style="color:#069183; font-weight:500">Head </span> <span class="gradient_text font-semibold">Office</span>`,
      details: [
        {
          email: "connect@umangliving.com",
          location: "2319, Gold Wing Wave one Tower Sector 18 Noida UP 201301",
          corporate: "0120 510 9189",
          call: "+91-95609 86669",
        },
      ],
    },
    // {
    //   title: `<span style="color:#069183">Regional </span> <span class="gradient_text">Office</span>`,
    //   details: [
    //     {
    //       email: "info@umangliving.com",
    //       location: "Cabin-7E, B-23, Sector-63, Noida. UP. 201301",
    //       corporate: "",
    //       call: "+91-9871825999",
    //     },
    //   ],
    // },
  ];

  return (
    <div className="py-8">
      <div className="main_width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-10">
          {data.map((office, index) => (
            <div
              className={` ${
                index !== data.length - 1
                  ? "md:border-r-2 border-[#9A9A9A] border-dashed"
                  : ""
              }`}
              key={index}
            >
              <h4
                className="lg:text-[65px] md:text-[45px] text-[35px] lg:leading-[60px] font-light mb-6"
                dangerouslySetInnerHTML={{ __html: office.title }}
              />
              {office.details.map((item, i) => (
                <div
                  key={i}
                  className="space-y-2 mt-4 text-gray-700 text-base "
                >
                  <div className="flex items-start text-[#1D1E1C] gap-3 lg:text-[22px] md:text-[18px]">
                    <MdEmail className="text-xl text-[#1D1E1C] mt-2" />
                    <span>{item.email}</span>
                  </div>
                  <div className="flex items-start text-[#1D1E1C] gap-3 lg:text-[22px] md:text-[18px]">
                    <FaLocationDot className="text-xl text-[#1D1E1C] mt-2" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-start text-[#1D1E1C] gap-3 lg:text-[22px] md:text-[18px]">
                    <MdWifiCalling3 className="text-xl text-[#1D1E1C] mt-2" />
                    <span>{item.call}</span>
                  </div>
                  {item.corporate ? (
                    <div className="flex items-start text-[#1D1E1C] gap-3 lg:text-[22px] md:text-[18px]">
                      <MdWifiCalling3 className="text-xl text-[#1D1E1C] mt-2" />
                      <span>{item.corporate}</span>
                    </div>
                  ) : (
                    " "
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficeDetails;
