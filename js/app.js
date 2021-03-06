////////////////////////////////////////////////////////////////////////////////////////

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

var swiper = new Swiper('.rev__slider', {

    slidesPerView: 1,
    slidesPerGroup: 1,

    loop: true,
    spaceBetween: 20,

    simulateTouch: true,
    speed: 700,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {



        768: {
            slidesPerView: 2,

            spaceBetween: 30,
            slidesPerGroup: 1,
        },

        1025: {
            slidesPerView: 3,

            spaceBetween: 100,
            slidesPerGroup: 1,
        },




    }
});

burger = document.querySelector('.header__burger');
menu = document.querySelector('.header__nav');

dark = document.querySelector('.bg-mob');

burger.onclick = function () {
    burger.classList.toggle('active');
    dark.classList.toggle('active');
    menu.classList.toggle('active');
}

