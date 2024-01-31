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
// ======================================================================================================>
//  <============================================ HAMBURGER CLICK =======================================>
// ======================================================================================================>
const hamburger = document.querySelector('.box-bar');
const closeBar = document.querySelector('.close-bar');
const nav = document.querySelector('.nav');
const home = document.querySelector('.nav__home');
const destination = document.querySelector('.nav__destination');
const crew = document.querySelector('.nav__crew');
const technology = document.querySelector('.nav__technology');
const mediaQuery = window.matchMedia('(max-width: 800)');

hamburger.addEventListener('click', () => {
  closeBar.style.display = 'block';
  hamburger.style.display = 'none';
  nav.style.display = 'flex';

  // Adding a delay to trigger the transition effect
  setTimeout(() => {
    nav.style.transition = 'transform 1s ease';
    nav.style.transform = 'translateX(-110%)';
    closeBar.style.transition = 'opacity 1s ease';
    closeBar.style.opacity = 1;
  }, 0);
});

closeBar.addEventListener('click', () => {
  nav.style.transition = 'transform 1s ease';
  nav.style.transform = 'translateX(110%)';
  closeBar.style.transition = 'opacity 1s ease';
  closeBar.style.opacity = 0;

  // Adding a delay to ensure the transition completes before hiding elements
  setTimeout(() => {
    nav.style.display = 'none';
    closeBar.style.display = 'none';
    hamburger.style.display = 'block';
  }, 1000); // 1000 milliseconds = 1 second, adjust as needed
});

// ======================================================================================================>
//  <===================================== RESPONSIVE FOR MOBILE ========================================>
// ======================================================================================================>
if (mediaQuery.matches) {
//  <=============================================== HOME CLICK =========================================
  home.addEventListener('click', () => {
    nav.style.transition = 'transform 1s ease';
    nav.style.transform = 'translateX(110%)';
    closeBar.style.transition = 'opacity 1s ease';
    closeBar.style.opacity = 0;

    // Adding a delay to ensure the transition completes before hiding elements
    setTimeout(() => {
      nav.style.display = 'none';
      closeBar.style.display = 'none';
      hamburger.style.display = 'block';
    }, 1000); // 1000 milliseconds = 1 second, adjust as needed
  });
  //  <========================================= DESTINATION CLICK ========================================>
  destination.addEventListener('click', () => {
    nav.style.transition = 'transform 1s ease';
    nav.style.transform = 'translateX(110%)';
    closeBar.style.transition = 'opacity 1s ease';
    closeBar.style.opacity = 0;

    // Adding a delay to ensure the transition completes before hiding elements
    setTimeout(() => {
      nav.style.display = 'none';
      closeBar.style.display = 'none';
      hamburger.style.display = 'block';
    }, 1000); // 1000 milliseconds = 1 second, adjust as needed
  });
  //  <============================================= CREW CLICK ===========================================>
  crew.addEventListener('click', () => {
    nav.style.transition = 'transform 1s ease';
    nav.style.transform = 'translateX(110%)';
    closeBar.style.transition = 'opacity 1s ease';
    closeBar.style.opacity = 0;

    // Adding a delay to ensure the transition completes before hiding elements
    setTimeout(() => {
      nav.style.display = 'none';
      closeBar.style.display = 'none';
      hamburger.style.display = 'block';
    }, 1000); // 1000 milliseconds = 1 second, adjust as needed
  });
  //  <========================================== TECHNOLOGY CLICK ========================================>
  technology.addEventListener('click', () => {
    nav.style.transition = 'transform 1s ease';
    nav.style.transform = 'translateX(110%)';
    closeBar.style.transition = 'opacity 1s ease';
    closeBar.style.opacity = 0;

    // Adding a delay to ensure the transition completes before hiding elements
    setTimeout(() => {
      nav.style.display = 'none';
      closeBar.style.display = 'none';
      hamburger.style.display = 'block';
    }, 1000); // 1000 milliseconds = 1 second, adjust as needed
  });
}
