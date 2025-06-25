import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../assets/css/home.css";

export default function SwiperClient({ slug }) {
  const swiperId = `discover-swiper-${slug}`;

  useEffect(() => {
    const el = document.getElementById(swiperId);
    if (!el) return;

    let swiperInstance = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !swiperInstance) {
            swiperInstance = new Swiper(`#${swiperId}`, {
              modules: [Navigation, Pagination, Autoplay],
              loop: true,
              navigation: {
                nextEl: `#${swiperId} .swiper-button-next`,
                prevEl: `#${swiperId} .swiper-button-prev`,
              },
              pagination: {
                el: `#${swiperId} .swiper-pagination`,
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

            observer.disconnect(); // Ya no necesitamos observar
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (swiperInstance) {
        swiperInstance.destroy();
      }
    };
  }, [swiperId]);

  return (
    <div id={swiperId} className="swiper w-full h-full relative">
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
      <div className="swiper-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-10" />
    </div>
  );
}
