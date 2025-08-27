import React from "react";

const TermsPrivicy = ({ title1, title2, dis }) => {
  return (
    <div>
      {/* <h2 className="green lg:text-[65px] md:text-[45px] text-[35px] lg:leading-[60px]  font-medium">
        <span>{title1}</span> <span className="gradient_text"> {title2}</span>
      </h2> */}
      <div
        className="text-[#535353] lg:text-[22px] md:text-[18px] pt-4"
        dangerouslySetInnerHTML={{ __html: dis }}
      ></div>
    </div>
  );
};

export default TermsPrivicy;
