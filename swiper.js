  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,  // Total number of slides per view
    spaceBetween:30,  // Space between slides
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
  });

