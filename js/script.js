window.addEventListener('DOMContentLoaded', () => {

    const videoBackgrounds = new VideoBackgrounds('[data-vbg]');

    const swiperMain = new Swiper(".main-swiper", {
        slidesPerView: "auto",
        spaceBetween: 110,
        loop: true,
        navigation: {
            nextEl: ".main_slider_arrow.swiper-button-next",
            prevEl: ".main_slider_arrow.swiper-button-prev",
        },
        breakpoints: {
            320: {
              spaceBetween: 10,
              slidesPerView: 1
            },
            500: {
                spaceBetween: 20,
                slidesPerView: "auto"
            },
            640: {
              spaceBetween: 20,
              slidesPerView: "auto"
            },
            768: {
              spaceBetween: 40,
              slidesPerView: "auto"
            },
            1024: {
              spaceBetween: 70,
              slidesPerView: "auto"
            },
          },
    });

    const swiperChair = new Swiper(".chair-swiper", {
        slidesPerView: 3,
        spaceBetween: 110,
        loop: true,
        navigation: {
            nextEl: ".chair_slider_arrow.swiper-button-next",
            prevEl: ".chair_slider_arrow.swiper-button-prev",
        },
        breakpoints: {
            320: {
              spaceBetween: 10,
              slidesPerView: 1
            },
            500: {
                spaceBetween: 20,
                slidesPerView: 2
            },
            640: {
              spaceBetween: 20,
              slidesPerView: 2
            },
            768: {
              spaceBetween: 40,
              slidesPerView: 3
            },
            1024: {
              spaceBetween: 70,
              slidesPerView: 3
            },
          },
    });

    const swiperSofa = new Swiper(".sofa-swiper", {
        slidesPerView: 2,
        spaceBetween: 110,
        loop: true,
        navigation: {
            nextEl: ".sofa_slider_arrow.swiper-button-next",
            prevEl: ".sofa_slider_arrow.swiper-button-prev",
        },
        breakpoints: {
            320: {
              spaceBetween: 10,
              slidesPerView: 1
            },
            500: {
                spaceBetween: 20,
                slidesPerView: 2
            },
            640: {
              spaceBetween: 20,
              slidesPerView: 2
            },
            768: {
              spaceBetween: 40,
              slidesPerView: 2
            },
            1024: {
              spaceBetween: 70,
              slidesPerView: 2
            },
          },
    });


    const modal = document.querySelector(".modal"),
        modalOverlay = document.querySelector(".modal__overlay"),
        modalOpenBtn = document.querySelectorAll(".form_open"),
        modalClose = document.querySelector(".modal__close")
        
    modalOpenBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            modal.style = 'display: flex;';
            modalOverlay.style = 'opacity: 1; visibility: visible;';
        })
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

    const menuBtn = document.querySelector(".header_bars .fa-bars"),
        menuList = document.querySelector(".header_list");

    menuBtn.addEventListener('click', () => {
        menuList.classList.toggle('active')
    })
})

