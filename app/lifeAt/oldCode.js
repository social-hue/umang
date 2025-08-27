import Banner from "../components/Banner";
import Community from "../components/Community";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cards from "../components/lifeat/cards";
import Aboutus from "../components/project/about";
import ResidentStoriesSection from "../components/ResidentStoriesSection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Life() {
  return (
    <>
      <div className="py-8 ">
        <Header />
      </div>
      <Banner title={"Life at Umang "} />
      <div className=" relative overflow-hidden ">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" className="w-[70%] " />
        </div>
        <Aboutus />
        <div className="main_width pb-10">
          <img src="/lifeAt/lifeAt.png" />
        </div>
        <div>
          <Cards />
        </div>
        <div className="main_width py-10">
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <h5 className=" font-light  text-[40px]">
                <span className="green">Why</span>{" "}
                <span className="gradient_text"> Choose Us?</span>{" "}
              </h5>
              <div>
                <div className="grid sm:grid-cols-[100px_1fr] items-center gap-4">
                  <div className="p-4">
                    <img src="/svgs/brother.svg" alt="brother" />
                  </div>
                  <div>
                    <p className="text-[#3A3A3A] lg:text-[25px] md:text-[20px] text-[18px]">
                      Live with friends your own age:
                    </p>
                    <p className="text-[#535353] lg:text-[16px] text-[14px]">
                      companionship, shared stories, festivals together.
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-[100px_1fr] items-center gap-4">
                  <div className="p-4">
                    <img src="/svgs/gift.svg" alt="brother" />
                  </div>
                  <div>
                    <p className="text-[#3A3A3A] lg:text-[25px] md:text-[20px] text-[18px]">
                      A Gift That Lasts:
                    </p>
                    <p className="text-[#535353] lg:text-[16px] text-[14px]">
                      Thoughtful care for your parents - love that continues..
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-[100px_1fr] items-center gap-4">
                  <div className="p-4">
                    <img src="/svgs/travel.svg" alt="brother" />
                  </div>
                  <div>
                    <p className="text-[#3A3A3A] lg:text-[25px] md:text-[20px] text-[18px]">
                      Travel Freely Across Cities:
                    </p>
                    <p className="text-[#535353] lg:text-[16px] text-[14px]">
                      Own once. Live anywhere. Explore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="/whyUs.jpg" alt="whyUs" />
            </div>
          </div>
        </div>
        <div className="pb-10 lg:block hidden">
          <div className="main_width   bg-[#F9F9F9] rounded-[11px] overflow-hidden">
            <img
              src="/lifetai02.png"
              alt="happiness"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
        <div>
          <div className="main_width overflow-hidden py-10">
            <ResidentStoriesSection />
          </div>
        </div>
        <div className="main_width overflow-hidden py-10">
          <TestimonialsSection />
        </div>
        <Community />
      </div>
      <Footer />
    </>
  );
}
