import React, { useEffect } from "react";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Slide({ post, lang }) {
  return (
    <div className="swiper-slide ">
      <a
        href={`/${lang}/blog/${post.slug}`}
        className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col overflow-hidden"
      >
        <img
          src={post.image.url}
          alt={post.image.alt ?? post.title}
          className="w-full object-cover rounded-xl"
        />
        <div className="p-4 flex flex-col justify-between flex-grow rounded-b-xl">
          <h4 className="text-4xl font-bold mb-2">{post.title}</h4>
          <p className="text-2xl text-justify text-gray-700 mb-4">
            {post.excerpt}
          </p>
          <a
            href={`/${lang}/blog/${post.slug}`}
            class="text-[var(--primary-color)] md:text-2xl border-2 border-[var(--primary-color)] self-start p-2 rounded-lg w-fit uppercase text-base font hover:bg-white hover:border-white hover:text-[var(--darkblue-color)]"
          >
            {lang === "es" ? "Leer más" : "Read more"} &raquo;
          </a>
        </div>
      </a>
    </div>
  );
}

export default function BlogSingleSwiper({ recentPosts, lang }) {
  useEffect(() => {
    new Swiper("#blog-swiper", {
      modules: [Pagination, Autoplay],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: ".blog-swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }, []);

  return (
    <div className="relative w-full pb-12 px-2 z-10">
      <div id="blog-swiper" className="swiper">
        <div className="swiper-wrapper mb-4">
          {recentPosts.map((post) => (
            <Slide key={post.slug} post={post} lang={lang} />
          ))}
        </div>
      </div>
      <div className="swiper-pagination mt-4 blog-swiper-pagination text-center z-30" />
    </div>
  );
}
