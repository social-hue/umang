import React from "react";

const MediaGrid = ({ bgColor, title, subtitle, images }) => {
  return (
    <div className="main_width">
      <div className="bg-[url('/media.jpg')] bg-right bg-bottom mb-10 rounded-[30px] bg-[#f8f8f8]">
        <div
          className={`${bgColor} relative lg:p-12 md:p-10 p-6 rounded-[30px] text-white overflow-hidden`}
        >
          <h4 className="font-bold lg:text-[40px] md:text-[35px] text-[30px] leading-[30px]">
            {title}
          </h4>
          <p className="capitalize pt-2">{subtitle}</p>

          <img
            src="/clean_rangoli.png"
            alt="rangoli pattern"
            className="absolute -right-20 -top-18"
          />
        </div>

        <div className="md:px-8 p-6 py-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {images?.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`media ${idx + 1}`}
                className="w-full h-full object-cover "
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaGrid;
