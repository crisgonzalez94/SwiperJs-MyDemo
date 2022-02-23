var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    //Asi elegimos el principal
    initialSlide: 1,
    freeMode: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });