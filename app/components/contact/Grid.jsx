import Link from "next/link";
import React from "react";

const Grid = () => {
  const data = [
    {
      img: "/svgs/callback.svg",
      title: "Call back",
      href: "tel:+919560986669",
    },
    {
      img: "/svgs/wp.svg",
      title: "WhatsApp Chat",
      href: `https://wa.me/919560986669?text=I'd%20like%20to%20chat%20with%20you`,
    },
    {
      img: "/svgs/download.svg",
      title: "Download brochure",
      href: "",
    },
  ];
  return (
    <div className="py-10">
      <div className="main_width">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
          {data?.map(({ img, title, href }) => (
            <Link href={href} key={title} target="_blank">
              <div className="lg:px-10 lg:py-14 p-8 bg-[#F8F8F8] rounded-[11px] flex items-center  justify-center   border-l-2  border-r-2  border-[#979797] border-dashed ">
                <div className="flex flex-col items-center ">
                  <img src={img} alt={title} className="lg:w-auto   w-[70px]" />
                  <div className="pt-4">
                    <h4 className="text-[#3D3D3D] font-bold lg:text-[18px] md:text-[12px] uppercase">
                      {title}
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;
