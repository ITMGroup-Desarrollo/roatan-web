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
    new Swiper(".Trip-swiper", {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 3,
      slidesPerGroup: 1,
      centeredSlides: true,
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
    <div className="Trip-swiper w-screen h-full px-20 mt-24 xl:9x-32 relative">
      <div className="swiper-wrapper h-full w-full">
        <div className="swiper-slide flex justify-center items-center p-4 content-center">
          <div className="slide-content relative justify-self-center bg-white rounded-3xl p-6 shadow-lg text-center w-72 transition-transform duration-300">
            <img
              src="/img/home/recursos/swiperTrip/1.png"
              alt="User Avatar"
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
            />
            <div className="flex justify-center mb-2">
              <img
                src="/img/iconos/estrellas.png"
                alt="estrellas"
                className="w-32"
              />
            </div>
            <p className="text-gray-600 text-sm mb-2">
              “Sodales ut etiam sit amet nisi. Semper feugiat nibh sed pulvinar
              proin amet nulla morbi.”
            </p>
            <p className="font-semibold font-lindsey text-gray-800">
              Isabelle Layson
            </p>

            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45" />
          </div>
        </div>
        <div className="swiper-slide flex justify-center items-center p-4 content-center">
          <div className="slide-content relative justify-self-center bg-white rounded-3xl p-6 shadow-lg text-center w-72 transition-transform duration-300">
            <img
              src="/img/home/recursos/swiperTrip/2.png"
              alt="User Avatar"
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
            />
            <div className="flex justify-center mb-2">
              <img
                src="/img/iconos/estrellas.png"
                alt="estrellas"
                className="w-32"
              />
            </div>
            <p className="text-gray-600 text-sm mb-2">
              “Sodales ut etiam sit amet nisi. Semper feugiat nibh sed pulvinar
              proin amet nulla morbi.”
            </p>
            <p className="font-semibold font-lindsey text-gray-800">
              Isabelle Layson
            </p>

            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45" />
          </div>
        </div>
        <div className="swiper-slide flex justify-center items-center p-4 content-center">
          <div className="slide-content relative justify-self-center bg-white rounded-3xl p-6 shadow-lg text-center w-72 transition-transform duration-300">
            <img
              src="/img/home/recursos/swiperTrip/3.png"
              alt="User Avatar"
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
            />
            <div className="flex justify-center mb-2">
              <img
                src="/img/iconos/estrellas.png"
                alt="estrellas"
                className="w-32"
              />
            </div>
            <p className="text-gray-600 text-sm mb-2">
              “Sodales ut etiam sit amet nisi. Semper feugiat nibh sed pulvinar
              proin amet nulla morbi.”
            </p>
            <p className="font-semibold font-lindsey text-gray-800">
              Isabelle Layson
            </p>

            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45" />
          </div>
        </div>
        <div className="swiper-slide flex justify-center items-center p-4 content-center">
          <div className="slide-content relative justify-self-center bg-white rounded-3xl p-6 shadow-lg text-center w-72 transition-transform duration-300">
            <img
              src="/img/home/recursos/swiperTrip/1.png"
              alt="User Avatar"
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
            />
            <div className="flex justify-center mb-2">
              <img
                src="/img/iconos/estrellas.png"
                alt="estrellas"
                className="w-32"
              />
            </div>
            <p className="text-gray-600 text-sm mb-2">
              “Sodales ut etiam sit amet nisi. Semper feugiat nibh sed pulvinar
              proin amet nulla morbi.”
            </p>
            <p className="font-semibold font-lindsey text-gray-800">
              Isabelle Layson
            </p>

            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45" />
          </div>
        </div>
        <div className="swiper-slide flex justify-center items-center p-4 content-center">
          <div className="slide-content relative justify-self-center bg-white rounded-3xl p-6 shadow-lg text-center w-72 transition-transform duration-300">
            <img
              src="/img/home/recursos/swiperTrip/2.png"
              alt="User Avatar"
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
            />
            <div className="flex justify-center mb-2">
              <img
                src="/img/iconos/estrellas.png"
                alt="estrellas"
                className="w-32"
              />
            </div>
            <p className="text-gray-600 text-sm mb-2">
              “Sodales ut etiam sit amet nisi. Semper feugiat nibh sed pulvinar
              proin amet nulla morbi.”
            </p>
            <p className="font-semibold font-lindsey text-gray-800">
              Isabelle Layson
            </p>

            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45" />
          </div>
        </div>
        <div className="swiper-slide flex justify-center items-center p-4 content-center">
          <div className="slide-content relative justify-self-center bg-white rounded-3xl p-6 shadow-lg text-center w-72 transition-transform duration-300">
            <img
              src="/img/home/recursos/swiperTrip/3.png"
              alt="User Avatar"
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
            />
            <div className="flex justify-center mb-2">
              <img
                src="/img/iconos/estrellas.png"
                alt="estrellas"
                className="w-32"
              />
            </div>
            <p className="text-gray-600 text-sm mb-2">
              “Sodales ut etiam sit amet nisi. Semper feugiat nibh sed pulvinar
              proin amet nulla morbi.”
            </p>
            <p className="font-semibold font-lindsey text-gray-800">
              Isabelle Layson
            </p>

            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45" />
          </div>
        </div>
      </div>

      <div className="hidden md:block swiper-button-prev custom-nav"></div>
      <div className="hidden md:block swiper-button-next custom-nav"></div>

      <style>
        {`
          .swiper-slide {
            transition: transform 0.3s ease;
          }

          .swiper-slide-active .slide-content {
            transform: scale(1.20);
            margin-top: -6rem;
          }
        `}
      </style>
    </div>
  );
}
