"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DynamicSwiper = ({
  slidesData = [],
  config = {},
  customPagination = false,
  classname,
  titledesign,
  defaultBreakpoints,
}) => {
  const paginationRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const mergedConfig = {
    modules: [Navigation, Pagination, Autoplay],
    navigation: false,
    loop: true,
    spaceBetween: 20,
    breakpoints: config.breakpoints || defaultBreakpoints,
    ...config,
    pagination: customPagination
      ? {
          el: paginationRef.current,
          clickable: true,
        }
      : config.pagination ?? { clickable: true },
  };

  useEffect(() => {
    // Re-attach pagination after ref is available and Swiper is mounted
    if (customPagination && swiperInstance && paginationRef.current) {
      swiperInstance.params.pagination.el = paginationRef.current;
      swiperInstance.pagination.init();
      swiperInstance.pagination.render();
      swiperInstance.pagination.update();
    }
  }, [swiperInstance, customPagination]);

  return (
    <div className="slider-wrapper">
      <Swiper
        {...mergedConfig}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        {slidesData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={` ${classname}`}>
              <img
                src={item.image}
                alt={item.title}
                className="slide-img w-full h-full  object-cover"
              />
              <div
                className={`${titledesign} `}
                style={{ color: item.titlecolor }}
              >
                {item.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="md:flex hidden justify-center mt-4 gap-2 max-w-[400px] mx-auto">
        {customPagination && (
          <div className=" custom-swiper-pagination" ref={paginationRef}></div>
        )}
      </div>
    </div>
  );
};

export default DynamicSwiper;
