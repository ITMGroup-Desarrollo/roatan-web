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
        dynamicBullets: true,
        dynamicMainBullets: 2,
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

  const images = [
    "/img/home/swiperDiscover/1.webp",
    "/img/home/swiperDiscover/2.webp",
    "/img/home/swiperDiscover/3.webp",
    "/img/home/swiperDiscover/4.webp",
    "/img/home/swiperDiscover/5.webp",
    "/img/home/swiperDiscover/6.webp",
    "/img/home/swiperDiscover/7.webp",
    "/img/home/swiperDiscover/8.webp",
    "/img/home/swiperDiscover/9.webp",
    "/img/home/swiperDiscover/10.webp",
    "/img/home/swiperDiscover/11.webp",
    "/img/home/swiperDiscover/12.webp",
    "/img/home/swiperDiscover/13.webp",
    "/img/home/swiperDiscover/14.webp",
    "/img/home/swiperDiscover/15.webp",
  ];

  return (
    <div id="discover-swiper" className="swiper w-full h-full relative">
      <div className="swiper-wrapper h-full w-full">
        {images.map((src, i) => (
          <div key={i} className="swiper-slide h-full w-full">
            <img
              src={src}
              alt={`swiperfoto${i + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation (uncomment if needed) */}
      {/* <div className="hidden md:block swiper-button-prev custom-nav"></div>
      <div className="hidden md:block swiper-button-next custom-nav"></div> */}

      {/* Pagination bullets */}
      <div className="swiper-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-10" />
    </div>
  );
}
