/* eslint-disable max-len */
/* eslint-disable linebreak-style */
// ======================================================================================================>
//  <================================== HEADER (NAVIGATION) HOVER & CLICK================================>
// ======================================================================================================>
const navigators = document.querySelectorAll('.nav__item');
// const underline = document.querySelector('.nav__item--horizontal_line');
navigators.forEach((navItem) => {
  // mouseover
  const underline = navItem.querySelector('.nav__item--horizontal_line');
  underline.style.width = `${navItem.offsetWidth}px`;
  navItem.addEventListener('mouseover', () => {
    underline.classList.add('nav__item--horizontal_line--mouseover');
  });
  navItem.addEventListener('mouseout', () => {
    underline.classList.remove('nav__item--horizontal_line--mouseover');
  });

  // mouseClick
  navItem.addEventListener('click', () => {
    navigators.forEach((anotherNavItem) => {
      if (anotherNavItem !== navItem) {
        underline.classList.remove('nav__item--horizontal_line--clicked');
      }
    });
    underline.style.width = `${navItem.offsetWidth}px`;
    underline.classList.add('nav__item--horizontal_line--clicked');
    underline.classList.remove('nav__item--horizontal_line--mouseover');
  });
});
