// src/components/SwiperClient.jsx
import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../assets/css/home.css";

export default function SwiperClient() {
  useEffect(() => {
  const swiperInstance = new Swiper("#discover-swiper", {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true, 
    },
  });

  swiperInstance.autoplay.stop();

  setTimeout(() => {
    swiperInstance.autoplay.start();
  }, 1500);
}, []);

  return (
    <div id="discover-swiper" className="swiper w-full h-full relative">
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
      {/* <div className="hidden md:block swiper-button-prev custom-nav"></div>
      <div className="hidden md:block swiper-button-next custom-nav"></div> */}

      {/* Pagination bullets */}
      <div className=" swiper-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-10" />
    </div>
  );
}
