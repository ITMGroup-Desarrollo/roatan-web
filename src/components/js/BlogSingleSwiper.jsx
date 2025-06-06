// src/components/BlogSingleSwiper.jsx
import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


function Slide({ post, lang }) {
  return (
    <div className="swiper-slide">
      <a
        href={`/${lang}/blog/${post.slug}`}
        className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col overflow-hidden"
      >
        <img
          src={post.image.url}
          alt={post.image.alt ?? post.title}
          className="w-full object-cover"
        />
        <div className="p-4 flex flex-col justify-between flex-grow">
          <h4 className="text-md font-bold mb-2">{post.title}</h4>
          <p className="text-sm text-gray-700 mb-4">{post.excerpt}</p>
          <span className="text-red-600 text-sm font-semibold mb-8">
            {lang === "es" ? "Leer más" : "Read more"} &raquo;
          </span>
        </div>
      </a>
    </div>
  );
}

export default function BlogSingleSwiper({ recentPosts, lang }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        modules: [Pagination, Autoplay],
        loop: true,
        slidesPerView: 1,
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    }
  }, []);

  return (
    <div ref={swiperRef} className="swiper w-full pb-10 z-30 ">
      <div className="swiper-wrapper">
        {recentPosts.map((post) => (
          <Slide key={post.slug} post={post} lang={lang} />
        ))}
      </div>
      <div className="swiper-pagination mt-4 text-center" />
    </div>
  );
}
