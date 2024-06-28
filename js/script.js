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
        slidesPerView: 3,
        spaceBetween: 110,
        loop: true,
        navigation: {
            nextEl: ".chair_slider_arrow.swiper-button-next",
            prevEl: ".chair_slider_arrow.swiper-button-prev",
        }
    });

    const swiperSofa = new Swiper(".sofa-swiper", {
        slidesPerView: 2,
        spaceBetween: 110,
        loop: true,
        navigation: {
            nextEl: ".sofa_slider_arrow.swiper-button-next",
            prevEl: ".sofa_slider_arrow.swiper-button-prev",
        }
    });


    const modal = document.querySelector(".modal"),
        modalOverlay = document.querySelector(".modal__overlay"),
        modalOpenBtn = document.querySelector(".header_contacts_btn"),
        modalClose = document.querySelector(".modal__close")
        
    modalOpenBtn.addEventListener('click', (e) => {
        e.preventDefault()
        modal.style = 'display: flex;';
        modalOverlay.style = 'opacity: 1; visibility: visible;';
    })

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modal.style = 'display: none;';
            modalOverlay.style = 'opacity: 0; visibility: hidden;'; 
        }   
    })

    modalClose.addEventListener('click', () => {
        modal.style = 'display: none;';
        modalOverlay.style = 'opacity: 0; visibility: hidden;';
    })
})

