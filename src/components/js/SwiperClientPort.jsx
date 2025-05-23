// src/components/SwiperClient.jsx
import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../assets/css/home.css";

export default function SwiperClient() {
  useEffect(() => {
    new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <div className="swiper w-full h-full relative">
      <div className="swiper-wrapper h-full w-full">
        <div className="swiper-slide h-full w-full">
          <img
            src="/img/home/recursos/roatan.webp"
            alt="swiperfoto1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="swiper-slide h-full w-full">
          <img
            src="/img/home/recursos/shutter.webp"
            alt="swiperfoto2"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="swiper-slide h-full w-full">
          <img
            src="/img/home/recursos/tikibar.webp"
            alt="swiperfoto3"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="hidden md:block swiper-button-prev custom-nav"></div>
      <div className="hidden md:block swiper-button-next custom-nav"></div>

      {/* Pagination bullets */}
      <div className=" swiper-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-10 " />
    </div>
  );
}
