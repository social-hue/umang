import React from "react";

const Contents = ({
  img,
  head1,
  head1Content,
  head2,
  head2Content,
  head3,
  head3Content,
  head5,
  head6,
}) => {
  return (
    <div className="lg:pb-10 md:pb-8 py-6">
      <div className="main_width">
        <div className="grid xl:grid-cols-[35%_1fr] lg:grid-cols-[35%_1fr] lg:gap-8 gap-4">
          <div className=" lg:block md:hidden lg:rounded-[30px] h-full w-full rounded-[20px] overflow-hidden ">
            <img
              src={img}
              className="w-full h-full object-cover "
              alt="senior living homes"
            />
          </div>

          <div className="">
            <div>
              <h3 className="md:text-[45px] text-[35px] lg:leading-[60px] red font-light tracking-[-1.34px]">
                <span className="green">{head1.firstOne}</span>{" "}
                {head1.secondOne}
              </h3>
              <div
                className="text-[#535353] lg:text-[24px] text-[18px] lg:leading-[40px] pt-4"
                dangerouslySetInnerHTML={{ __html: head1Content }}
              />
            </div>

            {head2 ? (
              <div className="mt-6">
                <h3 className="md:text-[45px] text-[35px] lg:leading-[60px] red font-light tracking-[-1.34px]">
                  <span className="green">{head2.firstOne}</span>{" "}
                  {head2.secondOne}
                </h3>
                <div
                  className="text-[#535353] lg:text-[24px] text-[18px] lg:leading-[40px] pt-4"
                  dangerouslySetInnerHTML={{ __html: head2Content }}
                />
              </div>
            ) : (
              ""
            )}

            {head3 ? (
              <div className="mt-8">
                <h3 className="md:text-[45px] text-[35px] lg:leading-[60px] red font-light tracking-[-1.34px]">
                  <span className="green">{head3.firstOne}</span>{" "}
                  {head3.secondOne}
                </h3>
                <div
                  className="text-[#535353] lg:text-[24px] text-[18px] lg:leading-[40px] pt-4"
                  dangerouslySetInnerHTML={{ __html: head3Content }}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="">
          {head5 ? (
            <h4 className=" lg:text-[35px] md:text-[30px] text-[25px] font-semibold lg:leading-[55px] red font-light tracking-[-1.34px]">
              <span className="green">{head5}</span>
            </h4>
          ) : (
            ""
          )}
          {head6 ? (
            <h4 className="lg:text-[42px]  font-semibold md:text-[32px]  text-[25px] lg:leading-[55px] red font-light tracking-[-1.34px]">
              <span className="">{head6}</span>
            </h4>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Contents;
