import { testimonials } from "../StaticData/testimonials";
import BaseSwiper from "./slider/BaseSwiper";
import TestimonialCard from "./slider/TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className="my-10">
      <h4 className="green lg:text-[65px] md:text-[45px] text-[35px] lg:leading-[60px]  font-light">
        Testimonials
      </h4>

      <p className="text-[#535353] lg:text-[22px] md:text-[18px]">
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

      <div className="mt-10">
        <BaseSwiper
          slides={testimonials}
          Card={TestimonialCard}
          slidesPerView={4}
          breakpointCols={{ 320: 1, 640: 1, 768: 1, 1024: 1 }}
        />
      </div>
    </section>
  );
}
