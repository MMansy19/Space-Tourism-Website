/* eslint-disable max-len */
/* eslint-disable linebreak-style */
// =====================================================================================================>
//  <=========================================  DESTINATION   CLICK &  ==================================>
// =====================================================================================================>
const image = document.querySelector('.destination__image');
const destinationName = document.querySelector('.destination__description--name');
const details = document.querySelector('.destination__description--details');
const time = document.querySelector('.travel__time');
const distance = document.querySelector('.travel__distance');
const navArray = document.querySelectorAll('.nav__item_');

const changeDestination = (item) => {
  if (item.innerText === 'MOON') {
    destinationName.innerText = 'Moon';
    time.innerText = '3 days';
    distance.innerText = '384,400 km';
    details.innerText = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
    image.src = '../static/assets/destination/image-moon.png';
  } else if (item.innerText === 'MARS') {
    destinationName.innerText = 'Mars';
    time.innerText = '9 months';
    distance.innerText = '225 mil. km';
    details.innerText = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';
    image.src = '../static/assets/destination/image-mars.png';
  } else if (item.innerText === 'EUROPA') {
    destinationName.innerText = 'europa';
    time.innerText = '3 years';
    distance.innerText = '628 mil. km';
    details.innerText = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';
    image.src = '../static/assets/destination/image-europa.png';
  } else if (item.innerText === 'TITAN') {
    destinationName.innerText = 'titan';
    time.innerText = '7 years';
    distance.innerText = '1.6 bil.km';
    details.innerText = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';
    image.src = '../static/assets/destination/image-titan.png';
  }
};
navArray.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navArray.forEach((anotherNavItem) => {
      if (anotherNavItem !== navItem) {
        const underline = anotherNavItem.querySelector('.nav__item--horizontal_line');
        underline.classList.remove('nav__item--horizontal_line--clicked');
      }
    });
    changeDestination(navItem);
  });
});
