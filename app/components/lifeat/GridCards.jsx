import React from "react";

const GridCards = ({ order1 = "", order2 = "", dis, cont1, img }) => {
  return (
    <div className="main_width">
    <div className="grid md:grid-cols-2 items-center gap-6 py-2">
      {/* Image Section */}
      <div className={`${order1} flex justify-center`}>
        <img
          src={img}
          alt={cont1}
          className="w-full max-w-[500px] object-cover"
          loading="lazy"
        />
      </div>
      {/* Text Section */}
      <div className={`${order2} flex flex-col justify-center`}>
        <h3 className="text-[#B41F56] text-2xl md:text-[26px] font-semibold mb-3 leading-snug">
          {cont1}
        </h3>
        <p className="text-[#535353] text-lg leading-relaxed max-w-[520px]">
          {dis}
        </p>
      </div>
    </div>
    </div>
  );
};

export default GridCards;
