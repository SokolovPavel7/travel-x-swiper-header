// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Initialize Swiper:
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true, // замкнутый круг прокрутки
    parallax: true, // эффект
    speed: 1000, //скорость прокрутки

    //управление с клавиатуры
    keyboard: {
        enabled: true,
    },

    // Показывает, какой слайд активен (точки или цифры)
    pagination: {
        el: '.slider-controls__count', //селектор из нашей разметки
        type: 'fraction' //добавление нумерации слайдеров
    },

    // Управление стрелками
    navigation: {
        nextEl: '#sliderNext', //id из нашей разметки
        prevEl: '#sliderPrev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
