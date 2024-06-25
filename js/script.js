window.addEventListener('DOMContentLoaded', () => {

    const videoBackgrounds = new VideoBackgrounds('[data-vbg]');

    const swiperMain = new Swiper(".main-swiper", {
        slidesPerView: "auto",
        spaceBetween: 110,
        loop: true,
        navigation: {
            nextEl: ".main_slider_arrow.swiper-button-next",
            prevEl: ".main_slider_arrow.swiper-button-prev",
        }
    });

    const swiperChair = new Swiper(".chair-swiper", {
        slidesPerView: 4,
        spaceBetween: 110,
        loop: true,
        navigation: {
            nextEl: ".chair_slider_arrow.swiper-button-next",
            prevEl: ".chair_slider_arrow.swiper-button-prev",
        }
    });
    
})

