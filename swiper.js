var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // Default for larger screens
  spaceBetween: 30,  // Space between slides
  loop: true,  // Enable looping
  centeredSlides: true,  // Enable centered slides
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
   800:{
     slidesPerView: 2.5
   }

  }
});