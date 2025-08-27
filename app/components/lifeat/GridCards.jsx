import React from "react";

const GridCards = ({ order1, order2, dis, cont1, head, img }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 items-center lg:gap-10 md:gap-6 gap-4  mb-10">
        <div className={`${order1}`}>
          <img src={img} alt={cont1} />
        </div>
        <div className={`${order2}`}>
          <h4 className="green 2xl:text-[120px] xl:text-[80px] text-[60px] font-semibold">
            {head}
          </h4>
          <p className="text-[#B41F56] xl:text-[45px] lg:text-[35px] md:text-[30px] text-[25px] font-semibold">
            {cont1}
          </p>
          <p className="text-[#535353] lg:text-[24px] md:text-[20px] text-[18px] lg:leading-[32px]">
            {dis}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
