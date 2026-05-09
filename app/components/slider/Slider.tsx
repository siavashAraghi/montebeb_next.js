"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { DefaultSliderTypes } from "./types";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const RESPONSIVE_DEFAULTS = { slidesPerView: 1 };

const Slider: React.FC<DefaultSliderTypes> = ({
  breakpoints = {
    640: RESPONSIVE_DEFAULTS,
    768: RESPONSIVE_DEFAULTS,
    900: RESPONSIVE_DEFAULTS,
    1024: RESPONSIVE_DEFAULTS,
  },
  spaceBetween = 30,
  isNavigation = true,
  isPagination = true,
  autoplayTimeout = 2500,
  isLoop = true,
  children,
}) => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={spaceBetween}
        navigation= {isNavigation}
        pagination={isPagination ? { clickable: true } : false}
        autoplay={{ delay: autoplayTimeout }}
        loop={isLoop}
        breakpoints={{
          640: { slidesPerView: breakpoints[640].slidesPerView },
          768: { slidesPerView: breakpoints[768].slidesPerView },
          900: { slidesPerView: breakpoints[900].slidesPerView },
          1024: { slidesPerView: breakpoints[1024].slidesPerView },
        }}
      >
        {children?.map((item) => <SwiperSlide key={item.key}>{item}</SwiperSlide>)}
      </Swiper>
    </div>
  );
};

export default Slider;
