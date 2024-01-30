/* eslint-disable max-len */
/* eslint-disable linebreak-style */
// =====================================================================================================>
//  <=========================================  TECHNOLOGY   CLICK   ===================================>
// =====================================================================================================>
const image = document.querySelector('.technology__image');
const technologyName = document.querySelector('.description__body--name');
const details = document.querySelector('.description__body--details');
const numbers = document.querySelectorAll('.number');

const changeTechnology = (numberClicked) => {
  if (numberClicked.innerText === '1') {
    technologyName.innerText = 'Launch vehicle';
    details.innerText = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    image.src = '../static/assets/technology/image-launch-vehicle-portrait.jpg';
  } else if (numberClicked.innerText === '2') {
    technologyName.innerText = 'Spaceport';
    details.innerText = 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.';
    image.src = '../static/assets/technology/image-spaceport-portrait.jpg';
  } else if (numberClicked.innerText === '3') {
    technologyName.innerText = 'Space capsule';
    details.innerText = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    image.src = '../static/assets/technology/image-space-capsule-portrait.jpg';
  }
};
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    numbers.forEach((anotherNumber) => {
      if (anotherNumber !== number) {
        anotherNumber.classList.remove('number-clicked');
      }
    });
    number.classList.add('number-clicked');
    changeTechnology(number);
  });
});
