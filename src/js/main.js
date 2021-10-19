import AOS from 'aos';
import Swiper, { Navigation } from 'swiper';
import '../index.html';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import '../scss/style.scss';
import { webpChecker } from './modules/functions';
import clickListner from './modules/clickListner';
import sendForm from './modules/sendForm';
import spollers from './modules/spollers';
import changeHeader from './modules/header-scroll';

// AOS init
AOS.init();

// Swiper slider
Swiper.use([Navigation]);

if (document.querySelector('.main-slider__body')) {
  new Swiper('.main-slider__body', {
    // Optional parameters
    observer: true,
    observeParents: true,
    slidesPerView: 1.1,
    spaceBetween: 22,
    grabCursor: true,
    watchOverflow: true,
    speed: 800,
    loop: true,
    preloadImages: false,

    // Navigation arrows
    navigation: {
      nextEl: '.main-slider .main-slider__button_next',
      prevEl: '.main-slider .main-slider__button_prev',
    },

    breakpoints: {
      992: {
        slidesPerView: 1,
        spaceBetween: 34,
      },
    },
  });
}

// Checking the browser for webp support
webpChecker();

// Clicks
clickListner();

// Sending email form
sendForm();

// Spollers
spollers();

// Header scroll effect and changing header height
changeHeader();
