var swiper = new Swiper(".homeSwiper", {
    direction: 'horizontal',
    loop: false,
    autoplay: {
        delay: 6000,
    },
    disableOnInteraction: false,
    effect: "cube",
    slidesPerView: 1, 
    cubeEffect: {
        shadow: false,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.2,
    },
    pagination: {
        el: '.homeSwiper',
        clickable: true,
    },
});