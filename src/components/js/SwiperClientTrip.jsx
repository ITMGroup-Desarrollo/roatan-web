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
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e4/2d/default-avatar-2020-48.jpg?w=100&h=100&s=1",
    text: "The Port of Roatan was a great port to get off the boat and hang out...",
    name: "Susan I",
    url: "https://www.tripadvisor.com.mx/ShowUserReviews-g292019-d25290415-r1015268803-Port_Of_Roatan-Roatan_Bay_Islands.html",
  },
  {
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/05/3a/00/privatemf.jpg?w=100&h=100&s=1",
    text: "This was a beautiful port and had a lot of great shopping, local culture and recreation...",
    name: "privatemf",
    url: "https://www.tripadvisor.com.mx/ShowUserReviews-g292019-d25290415-r953307467-Port_Of_Roatan-Roatan_Bay_Islands.html",
  },
  {
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/52/63/ec/caption.jpg?w=100&h=100&s=1",
    text: 'This is a very "disneyfied" port where you have all the tourist shops and restaurants...',
    name: "BrandonK850",
    url: "https://www.tripadvisor.com.mx/ShowUserReviews-g292019-d25290415-r996189449-Port_Of_Roatan-Roatan_Bay_Islands.html",
  }
];

function Slide({ img, name, text, url }) {
  return (
    <div className="swiper-slide md:mt-5 mb-16 h-full flex justify-center items-center  content-center">
      <a href={`${url}`} target="blank" className="slide-content cursor-pointer relative justify-self-center bg-white rounded-3xl p-6 shadow-lg text-center w-72 transition-transform duration-300">
        <img
          src={`${img}`}
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
        <p className="text-gray-600 text-lg mb-2">{text}</p>
        <p className="font-semibold font-lindsey text-gray-800">{name}</p>
        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45" />
      </a>
    </div>
  );
}

export default function SwiperClient() {
  useEffect(() => {
    new Swiper("#Trip-swiper", {
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
          slidesPerView: 1,
        },
        769: {
          slidesPerView: 1,
          centeredSlides: true,
        },
        1025: {
          slidesPerView: 1,
          centeredSlides: true,
        },
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }, []);

  return (
    <div id="Trip-swiper" className="swiper w-full h-full justify-center content-center">
      <div className="swiper-wrapper  items-center ">
        {slidesData.map((slide, index) => (
          <Slide
            key={index}
            img={slide.img}
            name={slide.name}
            text={slide.text}
            url={slide.url}
          />
        ))}
      </div>
      {/* 
      <div className="block swiper-button-prev custom-nav"></div>
      <div className="block swiper-button-next custom-nav"></div> */}
      <div className="swiper-pagination absolute right-0"></div>
      {/* <div className=" swiper-pagination relative  left-1/2 -translate-x-1/2 z-10 " /> */}
    </div>
  );
}
