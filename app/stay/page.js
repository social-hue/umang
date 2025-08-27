import Banner from "../components/Banner";
import Community from "../components/Community";
import Contents from "../components/content/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PropertySlider from "../components/PropertySlider";
import Aboutus from "../components/stay/Aboutus";
import MembershipForm from "../components/stay/MemberForm";
import { data } from "../StaticData/Property";
import { contentData, stayGridData } from "../StaticData/stay";

export default function Stay() {
  return (
    <>
      <div className="py-8 ">
        <Header />
      </div>
      <Banner title={"Stay"} />
      <div className=" relative overflow-hidden ">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" className="w-[70%] " />
        </div>
        <Aboutus />
        <div>
          <Contents {...contentData} />
        </div>
        <div className="lg:py-10 py-4">
          <div className="main_width">
            <div>
              <h3 className="md:text-[45px] text-[35px] lg:leading-[60px] red font-light tracking-[-1.34px] pb-6">
                <span className="green">What Makes</span> Umang Homes Special?
              </h3>
            </div>
            <div className="">
              <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2  gap-6">
                {stayGridData.map((data, index) => (
                  <div
                    key={index}
                    className="rounded-[30px] h-full w-full overflow-hidden"
                  >
                    <div>
                      <img
                        src={data.img}
                        className="w-full h-full object-cover"
                        alt={data.title}
                      />
                    </div>
                    <div className="bg-[#F8F8F8] h-full lg:p-6 p-5 text-center ">
                      <h6 className="text-[#535353] xl:text-[33px] md:text-[28px] text-[20px] font-semibold lg:leading-[38px]">
                        {data.title}
                      </h6>
                      <p className="text-[#535353] xl:text-[24px] md:text-[20px] text-[16px] lg:leading-[30px]">
                        {data.dis}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* become a member section */}
        <div className="">
          <div className="main_width">
            <h4 className=" lg:text-[35px] md:text-[30px] text-[25px] font-semibold lg:leading-[55px] red font-light tracking-[-1.34px]">
              <span className="green">
                Because life after 55 is about freedom, not limitation.
              </span>
            </h4>
            <h4 className="lg:text-[42px]  font-semibold md:text-[32px]  text-[25px] lg:leading-[55px] red font-light tracking-[-1.34px]">
              <span className="">
                At Umang Living, we don’t just offer homes — we offer the
                freedom to live where and how you want.
              </span>
            </h4>
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
