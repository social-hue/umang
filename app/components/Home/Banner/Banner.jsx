"use client";
import NewsTicker from "../../breaking/NewsTicker";
import { Swiper, SwiperSlide } from "swiper/react";       
import { EffectFade, Autoplay } from "swiper/modules";     
import "swiper/css";
import "swiper/css/effect-fade";

export default function Banner() {
  const slides = [
    {
      image: "/banner/blog-banner.webp",
      title: "Ek Duniya Alag Si",
      subtitle: "Because every age deserves new beginnings",
      description: "A Unique Senior Independent Living Community for the 55+ Generation",
      href: "https://docs.google.com/forms/d/e/1FAIpQLScQlwi7hkmU9fp7aGSOLfUXPIvQmADduVyPQvVC5PKhcbFyDQ/viewform?usp=header",
      button: "Get Free Membership"
    },
    {
      image: "/banner/travel-banner-2.webp",
      title: "Plan Your Next Getaway",
      subtitle: "Seamless tours, unforgettable memories",
      description: "We design travel experiences that blend comfort, culture, and discovery",
      href: "/services/travel",
      button: "Explore Now"
    },
  ];
  
  return (
    <section className="w-full 2xl:h-[760px] lg:h-[560px] md:h-[460px] h-[380px] relative overflow-hidden">
      <div className="relative w-full 2xl:h-[680px] lg:h-[480px] md:h-[380px] h-[300px] overflow-hidden">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16 lg:px-24 text-white">
                  <div className="max-w-xl">
                    <h1
                      className="text-3xl md:text-6xl font-bold mb-2 md:mb-4 drop-shadow-lg transition-all duration-700 ease-in-out"
                      key={slide.title}
                    >
                      {slide.title}
                    </h1>
                    <h2
                      className="text-lg md:text-xl xl:text-2xl opacity-95 mb-2 xl:mb-3 transition-all duration-700 ease-in-out"
                      key={slide.subtitle}
                    >
                      {slide.subtitle}
                    </h2>
                    <p
                      className="hidden md:block text-base md:text-lg xl:text-[20px] opacity-95 mb-2 xl:mb-3 transition-all duration-700 ease-in-out"
                      key={slide.description}
                    >
                      {slide.description}
                    </p>
                    <a
                      href={slide.href} target="_main"
                      className="inline-block  bg-gradient-to-r from-orange-600 to-red-700 px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm sm:text-base font-semibold shadow-md hover:opacity-95 transition-all"
                    >
                      {slide.button}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* News Ticker */}
      <div className="py-4 px-4 flex items-center justify-center">
        <NewsTicker />
      </div>
    </section>
  );
}





