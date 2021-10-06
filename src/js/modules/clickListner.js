import { isMobile, _removeClasses } from './functions';

const clickListner = () => {
  document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target;
      if (
        target.matches('.header__burger') ||
        target.closest('.header__burger')
      ) {
        document.querySelector('.menu').classList.toggle('_active');
        document.querySelector('.header__burger').classList.toggle('_active');
        document.body.classList.toggle('_lock');
      }
      if (window.innerWidth > 768 && isMobile.any()) {
        if (target.matches('.menu__arrow')) {
          target.closest('.menu__item').classList.toggle('_hover');
        }
        if (
          !target.closest('.menu__item._hover') &&
          document.querySelectorAll('.menu__item._hover').length > 0
        ) {
          _removeClasses(
            document.querySelectorAll('.menu__item._hover'),
            '_hover'
          );
        }
      }
    });
  });
};

export default clickListner;
