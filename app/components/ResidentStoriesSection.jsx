import BaseSwiper from "./slider/BaseSwiper";
import VideoCard from "./slider/VideoCard";
import { residentVideos } from "@/app/StaticData/residentVideos";

export default function ResidentStoriesSection() {
  return (
    <section className="">
      <h4 className="green lg:text-[65px] md:text-[45px] text-[35px] lg:leading-[60px]  font-medium">
        <span>Resident Stories -</span>{" "}
        <span className="gradient_text"> Video</span>
      </h4>

      <p className="text-[#535353] pt-4 lg:text-[22px] md:text-[18px] ">
        Umang Living is India’s first multi-city senior living community,
        thoughtfully designed with love and respect. We believe that at 55, life
        doesn’t slow down -- it blossoms. 
      </p>
      <p className="text-[#535353] lg:text-[22px] md:text-[18px]">
        So, we are creating a community where comfort meets freedom. Solitude
        meets companionship. Wellness meets joy. Whether you are embarking on an
        exciting new beginning, a peaceful retirement, or simply seeking a more
        fulfilling and connected way to live, Umang Living is where you belong.
      </p>

      <div className="mt-8">
        <BaseSwiper
          slides={residentVideos}
          Card={VideoCard}
          slidesPerView={4}
          breakpointCols={{ 320: 1.2, 640: 1.2, 768: 2.2, 1024: 4 }}
        />
      </div>
    </section>
  );
}
