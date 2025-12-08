import React from "react";

const TermsPrivicy = ({ title1, title2, dis }) => {
  return (
    <div>
      <div
        className="text-[#535353] lg:text-[18px] pt-4"
        dangerouslySetInnerHTML={{ __html: dis }}
      ></div>
    </div>
  );
};

export default TermsPrivicy;
