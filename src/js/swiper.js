"use strict";

const swiper = new Swiper(".p-slider .swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 1000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '<i></i>' + '<b></b>'  + '</span>';
    },
  },
});

const swiperDoctors = new Swiper(".p-doctors-accordion .swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
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
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const swiperTestimonials = new Swiper(".p-testimonials__slider .swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
  breakpoints: {
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const swiperPress = new Swiper(".p-press .swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
  breakpoints: {
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});