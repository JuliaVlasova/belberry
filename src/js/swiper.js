"use strict";

const swiper = new Swiper(".p-slider .swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

const swiperDoctors = new Swiper(".p-doctors-accordion .swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
  breakpoints: {
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
