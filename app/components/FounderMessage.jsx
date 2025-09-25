import React from "react";

const FounderMessage = ({
  head,
  content,
  name,
  des,
  img,
  grid,
  order2,
  order1,
  size,
}) => {
  return (
    <div className="">
      <div className=" ">
        <div className={grid}>
          <div
            className={`md:p-10 p-4 bg-[url(/rangoli_founder.png)] h-full bg-cover rangoli ${order1}`}
          >
            <div className="">
              <h4 className=" lg:text-[65px] md:text-[45px] text-[35px] lg:leading-[60px] font-light  red">
                <span dangerouslySetInnerHTML={{ __html: head }}></span>
              </h4>
              <p
                className={size}
                dangerouslySetInnerHTML={{ __html: content }}
              ></p>
              <div className=" text-[#535353] mt-4 ">
                <h4 className="font-bold xl:text-[34px] lg:text-[20px] md:text-[18px] 2xl:leading-[35px]">
                  {name}
                </h4>
                <p className=" xl:text-[34px] lg:text-[20px] md:text-[18px] 2xl:leading-[40px]">
                  {des}
                </p>
              </div>
            </div>
          </div>
          <div
            className={`bg_green pl-4  rounded-tl-[11px] rounded-tr-[150px] ${order2}`}
          >
            <div className="bg_red w-full h-full pl-4 rounded-tl-[11px] rounded-tr-[150px] ">
              <div className="bg-[#FFF]  w-full h-full  border-[#FFF] rounded-tl-[11px] rounded-tr-[110px]   overflow-hidden">
                <img
                  src={img}
                  className="object-cover w-full h-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderMessage;
