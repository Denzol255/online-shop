// Header scroll and changing header height
const changeHeader = () => {
  const headerElem = document.querySelector('.header');

  const callback = (entries) => {
    entries[0].isIntersecting
      ? headerElem.classList.remove('_scroll')
      : headerElem.classList.add('_scroll');
  };

  const headerObserver = new IntersectionObserver(callback);

  headerObserver.observe(headerElem);
};

export default changeHeader;
