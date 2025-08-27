"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BaseSwiper({
  slides,
  Card,
  slidesPerView,
  space = 24,
  breakpointCols,
  pagination = true,
}) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={slidesPerView}
      spaceBetween={space}
      //   navigation
      pagination={pagination ? { clickable: true } : false}
      breakpoints={Object.fromEntries(
        Object.entries(breakpointCols).map(([w, v]) => [
          w,
          { slidesPerView: v },
        ])
      )}
      className="!overflow-visible"
    >
      {slides.map((item, idx) => (
        <SwiperSlide key={idx}>
          <Card {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
