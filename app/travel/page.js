import Banner from "../components/Banner";
import Community from "../components/Community";
import Contents from "../components/content/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PropertySlider from "../components/PropertySlider";
import DynamicSwiper from "../components/slider/DynamicSwiper";
import Aboutus from "../components/travel/Aboutus";
import MembershipForm from "../components/travel/MemberForm";
import { data } from "../StaticData/Property";

import { retreatSlides, travel } from "../StaticData/travel";

export default function Travel() {
  return (
    <>
      <div className="py-8 ">
        <Header />
      </div>
      <Banner title={"Travel"} />
      <div className=" relative overflow-hidden ">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" className="w-[70%]" loading="lazy" decoding="async" />
        </div>
        <Aboutus />
        <div>
          <Contents {...travel} />
        </div>
        <div className="md:py-20 py-10 bg-[#F8F8F8]">
          <DynamicSwiper
            slidesData={retreatSlides}
            customPagination={true}
            classname={`w-full h-[480px] xl:h-[500px] 2xl:h-[650px] overflow-hidden relative rounded-[20px] shadow-md`}
            titledesign={`absolute bottom-4  bg-white  w-[90%] left-[5%] py-6 rounded-tr-[20px] rounded-bl-[20px] text-center lg:text-[24px] md:text-[20px] text-[18px] font-semibold`}
            config={{
              slidesPerView: 5,
              loop: true,
              autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
            }}
            defaultBreakpoints={{
              320: { slidesPerView: 1 },
              530: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
              1320: { slidesPerView: 5 },
            }}
          />
        </div>

        <div className="main_width lg:py-10 py-6">
          <div>
            <h3 className="md:text-[45px] text-[35px] lg:leading-[60px] red font-light tracking-[-1.34px]">
              <span className="green">Why Travel</span> with Umang?
            </h3>
            <ul className="text-[#535353] lg:text-[24px] text-[18px] lg:leading-[40px]  list-disc  pl-6">
              <li className="">
                Age-inclusive experiences designed just for seniors
              </li>
              <li className="">
                No rush, no noise — only comfort, connection, and discovery
              </li>
              <li className="">
                A chance to explore while being part of a caring community
              </li>
              <li className="">
                Rediscover joy, friendships, and purpose — one journey at a time
              </li>
            </ul>
          </div>
          <h4 className=" lg:text-[35px]  mt-6 md:text-[30px] text-[25px] font-semibold lg:leading-[55px] red font-light tracking-[-1.34px]">
            <span className="green">
              Wherever you want to go, we’ll take you there — safely, joyfully,
              and in great company
            </span>
          </h4>

          <h4 className="lg:text-[42px]  font-semibold md:text-[32px]  text-[25px] lg:leading-[55px] red font-light tracking-[-1.34px]">
            <span className="">
              Let’s make your next journey unforgettable.
            </span>
          </h4>
        </div>
        <div className=" ">
          <MembershipForm />
        </div>
        <div className="py-10">
          <PropertySlider listings={data} />
        </div>
        <Community />
      </div>
      <Footer />
    </>
  );
}
