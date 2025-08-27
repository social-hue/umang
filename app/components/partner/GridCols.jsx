import React from "react";
import Button from "./Button";

const GridCols = ({ order1, order2, dis, cont1, cont2, type, img, id }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 items-center lg:gap-10 md:gap-6 gap-4  mb-10">
        <div className={`${order1} rounded-[30px] overflow-hidden`}>
          <img src={img} alt={cont1} />
        </div>
        <div className={`${order2}`}>
          <div className="">
            <h5 className="font-semibold green  lg:text-[35px] md:text-[30px] text-[25px]">
              {cont1} {cont2 ? "/" : ""}
              <span className="gradient_text"> {cont2} </span>
            </h5>
          </div>
          <p
            className="text-[#535353] pt-4 lg:text-[22px] md:text-[18px]"
            dangerouslySetInnerHTML={{ __html: dis }}
          ></p>
          <div className=" md:mt-10 mt-6">
            <Button type={type} idData={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCols;
