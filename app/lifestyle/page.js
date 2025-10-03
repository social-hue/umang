import Banner from "../components/Banner";
import Community from "../components/Community";
import Contents from "../components/content/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Aboutus from "../components/lifestyle/Aboutus";
import MembershipForm from "../components/lifestyle/MemberForm";
import PropertySlider from "../components/PropertySlider";
import DynamicSwiper from "../components/slider/DynamicSwiper";

import { lifeStyle, lifestyleSlides } from "../StaticData/lifestyle";
import { data } from "../StaticData/Property";

export default function Lifestyle() {
  return (
    <>
      <div className="py-8 ">
        <Header />
      </div>
      <Banner title={"Lifestyle"} />
      <div className=" relative overflow-hidden ">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" className="w-[70%]" loading="lazy" decoding="async" />
        </div>
        <Aboutus />
        <div>
          <Contents {...lifeStyle} />
        </div>

        <div className="md:py-20 py-10 bg-[#F8F8F8]">
          <DynamicSwiper
            slidesData={lifestyleSlides}
            customPagination={true}
            classname={`w-full h-[280px] md:h-[250px] xl:h-[300px] overflow-hidden relative rounded-[20px] shadow-md`}
            titledesign={`absolute bottom-4  bg-white  w-[90%] left-[5%] lg:py-6 py-4 rounded-tr-[20px] rounded-bl-[20px] text-center lg:text-[24px] md:text-[20px] text-[18px] font-semibold`}
            config={{
              slidesPerView: 3,
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
            }}
          />
        </div>

        <div className="main_width py-10">
          <div>
            <h3 className="md:text-[45px] text-[35px] lg:leading-[60px] pp red font-light tracking-[-1.34px]">
              <span className="green">We’re Here to</span> Make It Happen
            </h3>
            <p className="text-[#535353] lg:text-[24px] md:text-[18px] lg:leading-[40px]">
              Want to host a birthday party? Organize a movie night with
              friends? Go shopping or visit your favorite café across town? Just
              let us know. The Umang Living team is here to help you plan,
              arrange, and enjoy the little and big moments that make life
              joyful. From setting up hobby classes to booking travel,
              scheduling health checkups, or decorating your home for a festival
              — we’re just a call away to make things easier, smoother, and more
              delightful.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="md:text-[45px] text-[35px] lg:leading-[60px] red font-light tracking-[-1.34px]">
              <span className="green">Live Life, </span> Your Way
            </h3>
            <p className="text-[#535353] lg:text-[24px] md:text-[18px] lg:leading-[40px]">
              Whether you’re someone who enjoys quiet mornings, active
              afternoons, or social evenings —{" "}
              <span className="font-semibold">
                {" "}
                Umang Living adapts to your lifestyle, not the other way around.
                Because aging doesn’t mean changing who you are — it means
                finally having the time to enjoy it.
              </span>
            </p>
          </div>
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
