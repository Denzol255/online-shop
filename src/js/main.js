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

if (document.querySelector('.slider-news__body')) {
  new Swiper('.slider-news__body', {
    // Optional parameters
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 34,
    watchOverflow: true,
    speed: 800,
    // loop: true,
    // loopAdditionalSlides: 5,
    preloadImages: false,
    parallax: true,

    // Navigation arrows
    navigation: {
      nextEl: '.slider-news .slider-news__arrow_next',
      prevEl: '.slider-news .slider-news__arrow_prev',
    },

    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 34,
      },
      730: {
        slidesPerView: 2,
        spaceBetween: 34,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 30,
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

// Header scroll and changing header height
changeHeader();
