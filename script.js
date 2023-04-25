var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        next: '.swiper-button-next',
        prev: '.swiper-button-prev',
    },
    breakpoints: {
        991: {
            slidesPerView: 3
        }
    }
});
