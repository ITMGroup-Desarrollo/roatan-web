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
      slidesPerView: 3,
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
    <div className="swiper w-full  h-full relative">
      <div className="swiper-wrapper h-full w-full">
        <div className="swiper-slide flex justify-center items-center p-4 content-center">
          <div className=" relative justify-self-center  bg-white rounded-3xl p-6 shadow-lg text-center w-72">
            <img
              src="/img/user1.webp"
              alt="User Avatar"
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
            />
            <div className="flex justify-center mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.188c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.05 9.402c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 00.95-.69l1.286-3.975z" />
                  </svg>
                ))}
            </div>
            <p className="text-gray-600 text-sm mb-2">
              “Sodales ut etiam sit amet nisi. Semper feugiat nibh sed pulvinar
              proin amet nulla morbi.”
            </p>
            <p className="font-semibold text-gray-800">Isabelle Layson</p>
             
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45 " />
          </div>
        </div>
        <div className="swiper-slide content-center flex justify-center items-center p-4">
          <div className=" relative justify-self-center bg-white rounded-3xl p-6 shadow-lg text-center w-72">
            <img
              src="/img/user1.webp"
              alt="User Avatar"
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
            />
            <div className="flex justify-center mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.188c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.05 9.402c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 00.95-.69l1.286-3.975z" />
                  </svg>
                ))}
            </div>
            <p className="text-gray-600 text-sm mb-2">
              “Sodales ut etiam sit amet nisi. Semper feugiat nibh sed pulvinar
              proin amet nulla morbi.”
            </p>
            <p className="font-semibold text-gray-800">Isabelle Layson</p>
             
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45 " />
          </div>
        </div>
        <div className="swiper-slide content-center flex justify-center items-center p-4">
          <div className=" relative justify-self-center bg-white rounded-3xl p-6 shadow-lg text-center w-72">
            <img
              src="/img/user1.webp"
              alt="User Avatar"
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
            />
            <div className="flex justify-center mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.188c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.05 9.402c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 00.95-.69l1.286-3.975z" />
                  </svg>
                ))}
            </div>
            <p className="text-gray-600 text-sm mb-2">
              “Sodales ut etiam sit amet nisi. Semper feugiat nibh sed pulvinar
              proin amet nulla morbi.”
            </p>
            <p className="font-semibold text-gray-800">Isabelle Layson</p>
             
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45 " />
          </div>
        </div>
      </div>
      <div className="hidden md:block swiper-button-prev custom-nav"></div>
      <div className="hidden md:block swiper-button-next custom-nav"></div>

      {/* Pagination bullets */}
      <div className=" swiper-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-10" />
    </div>
  );
}
