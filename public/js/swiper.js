var swiper = new Swiper(".assets", {
  slidesPerView: 1,
  spaceBetween: 16,
  // cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },
    breakpoints: {

    480: {
      slidesPerView: 2,
      
    },
    768: {
      slidesPerView: 3,
      
    },
    1024:{
      slidesPerView: 3.5,
    },

    1440: {
      slidesPerView: 5,
    },
    1516: {
      slidesPerView: 6,
    },
  },
  mousewheel: true,
  keyboard: true,
});

var swiper = new Swiper(".product", {
  slidesPerView: 1,
  slidesPerGroup:1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination-1",
    clickable: true,
  },
  breakpoints: {

    480: {
      slidesPerView: 2,
      slidesPerGroup:2,
      spaceBetween: 0,
      
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup:3,
      spaceBetween: 16,
      
    },
    1024:{
      slidesPerView: 4,
      slidesPerGroup:4,
      spaceBetween: 16,
    },

 
    1516: {
      slidesPerView: 5,
      slidesPerGroup:5,
      spaceBetween: 16,
      
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
});


var swiper = new Swiper(".newProduct", {
  slidesPerView: 1,
  slidesPerGroup:1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
  breakpoints: {

    480: {
      slidesPerView: 2,
      slidesPerGroup:2,
      spaceBetween: 0,
      
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup:3,
      spaceBetween: 16,
      
    },
    1024:{
      slidesPerView: 4,
      slidesPerGroup:4,
      spaceBetween: 16,
    },

 
    1516: {
      slidesPerView: 5,
      slidesPerGroup:5,
      spaceBetween: 16,
      
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-3",
    prevEl: ".swiper-button-prev-3",
  },
});

var swiper = new Swiper(".most", {
  slidesPerView: 1,
  slidesPerGroup:1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination-7",
    clickable: true,
  },
  breakpoints: {

    480: {
      slidesPerView: 2,
      slidesPerGroup:2,
      spaceBetween: 0,
      
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup:3,
      spaceBetween: 16,
      
    },
    1024:{
      slidesPerView: 4,
      slidesPerGroup:4,
      spaceBetween: 16,
    },

 
    1516: {
      slidesPerView: 5,
      slidesPerGroup:5,
      spaceBetween: 16,
      
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-4",
    prevEl: ".swiper-button-prev-4",
  },
});

// brand
var swiper = new Swiper(".partner", {
  slidesPerView: 2,
  spaceBetween: 60,
  grabCursor: true,
  autoplay: {
    delay: 2500,
  },
  loop:true,
  breakpoints: {

    480: {
      slidesPerView: 3,
      spaceBetween: 80,
      
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 80,
      
    },
    1024:{
      slidesPerView: 5,
      spaceBetween: 80,
    },

 
    1280: {
      slidesPerView: 9,
      spaceBetween: 80,
      
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-5",
    prevEl: ".swiper-button-prev-5",
  },
});


var swiper = new Swiper(".news", {
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination-8",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-9",
    prevEl: ".swiper-button-prev-9",
  },
});