import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../assets/css/home.css";
export default function SwiperClient({ slug, images = [] }) {
  const swiperId = `discover-swiper-${slug}`;

  useEffect(() => {
    const el = document.getElementById(swiperId);
    if (!el) return;

    let swiperInstance = null;

    const initSwiper = () => {
      if (!el || swiperInstance) return;

      const tryInit = () => {
        if (el.offsetHeight > 0 && el.offsetWidth > 0) {
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
        } else {
          setTimeout(tryInit, 100);
        }
      };

      tryInit();
    };

    const parent = el.closest(".secondview");
    const observer = new MutationObserver(() => {
      if (parent && !parent.classList.contains("invisible")) {
        initSwiper();
      }
    });

    if (parent) {
      observer.observe(parent, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

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
        {images.length > 0 ? (
          images.map((img, idx) => (
            <div key={idx} className="swiper-slide h-full w-full">
              <img
                src={img.url}
                alt={img.alt || `slide-${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))
        ) : (
          <>
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
          </>
        )}
      </div>
      <div className="swiper-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-10" />
    </div>
  );
}
