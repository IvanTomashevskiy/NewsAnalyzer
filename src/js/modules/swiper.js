var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Default parameters
    slidesPerView: 8,
    spaceBetween: 8,
    slidesOffsetBefore: -20,
    centeredSlides: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesOffsetBefore: 0,
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 8,
            slidesOffsetBefore: 0,
        },
        // when window width is >= 1440px
        1440: {
            slidesPerView: 4,
            spaceBetween: 8,
            slidesOffsetBefore: -20,
        },
        // when window width is >= 1981px
        1981: {
            slidesPerView: 8,
            spaceBetween: 8,
            slidesOffsetBefore: -20,
        }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
})

export { mySwiper };