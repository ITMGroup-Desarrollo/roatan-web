// src/components/SwiperClient.jsx
import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../assets/css/home.css";

const slidesData = [
  {
    img: "1.png",
    text: "Sodales ut etiam sit amet nisi. Semper feugiat nibh sed pulvinarproin amet nulla morbi.",
    name: "Isabelle Layson",
  },
  {
    img: "2.png",
    text: "Sodales ut etiam sit amet nisi. Semper feugiat nibh sed pulvinarproin amet nulla morbi.",
    name: "Isabelle Layson",
  },
  {
    img: "3.png",
    text: "Sodales ut etiam sit amet nisi. Semper feugiat nibh sed pulvinarproin amet nulla morbi.",
    name: "Isabelle Layson",
  },
  {
    img: "1.png",
    text: "Sodales ut etiam sit amet nisi. Semper feugiat nibh sed pulvinarproin amet nulla morbi.",
    name: "Isabelle Layson",
  },
  {
    img: "2.png",
    text: "Sodales ut etiam sit amet nisi. Semper feugiat nibh sed pulvinarproin amet nulla morbi.",
    name: "Isabelle Layson",
  },
  {
    img: "3.png",
    text: "Sodales ut etiam sit amet nisi. Semper feugiat nibh sed pulvinarproin amet nulla morbi.",
    name: "Isabelle Layson",
  },
];

function Slide({ img, name, text }) {
  return (
    <div className="swiper-slide h-full flex justify-center items-center  content-center">
      <div className="slide-content relative justify-self-center bg-white rounded-3xl p-6 shadow-lg text-center w-72 transition-transform duration-300">
        <img
          src={`/img/home/recursos/swiperTrip/${img}`}
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
        <p className="text-gray-600 text-sm mb-2">{text}</p>
        <p className="font-semibold font-lindsey text-gray-800">{name}</p>
        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45" />
      </div>
    </div>
  );
}

export default function SwiperClient() {
useEffect(() => {
  new Swiper(".Trip-swiper", {
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
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      769: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      1025: {
        slidesPerView: 3,
        centeredSlides: true,
      }
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}, []);


  return (
    <div className="Trip-swiper w-full h-full ">
      <div className="swiper-wrapper  items-center ">
        {slidesData.map((slide, index) => (
          <Slide
            key={index}
            img={slide.img}
            name={slide.name}
            text={slide.text}
          />
        ))}
      </div>
{/* 
      <div className="block swiper-button-prev custom-nav"></div>
      <div className="block swiper-button-next custom-nav"></div> */}

      <style>
        {`
          
        `}
      </style>
      <div className=" swiper-pagination  z-10 mb-4" />
    </div>
  );
}
