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
    new Swiper(".swiper", {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 2,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }, []);

  const images = [
    "/img/home/swiperPort/1.webp",
    "/img/home/swiperPort/2.webp",
    "/img/home/swiperPort/4.webp",
    "/img/home/swiperPort/5.webp",
    "/img/home/swiperPort/6.webp",
    "/img/home/swiperPort/8.webp",
    "/img/home/swiperPort/9.webp",
  ];

  return (
    <div className="swiper w-full h-full relative">
      <div className="swiper-wrapper h-full w-full">
        {images.map((src, index) => (
          <div key={index} className="swiper-slide h-full w-full">
            <img
              src={src}
              alt={`swiperfoto${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* <div className="hidden md:block swiper-button-prev custom-nav"></div>
      <div className="hidden md:block swiper-button-next custom-nav"></div> */}

      <div className="swiper-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-10" />
    </div>
  );
}
