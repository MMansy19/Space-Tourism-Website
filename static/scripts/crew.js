/* eslint-disable max-len */
/* eslint-disable linebreak-style */
// =====================================================================================================>
//  <====================================== CREW  CLICK & CHANGING CREWS ===============================>
// =====================================================================================================>
const name = document.querySelector('.crew__description--name');
const job = document.querySelector('.crew__description--job');
const details = document.querySelector('.crew__description--details');
const image = document.querySelector('.crew__image');
const circles = document.querySelectorAll('.circle');

const changeCrew = (index) => {
  if (index === 0) {
    name.innerText = 'Douglas Hurley';
    job.innerText = 'Commander';
    details.innerText = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.';
    image.src = '../static/assets/crew/image-douglas-hurley-2.png';
  } else if (index === 1) {
    name.innerText = 'Mark Shuttleworth';
    job.innerText = 'Mission Specialist';
    details.innerText = 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.';
    image.src = '../static/assets/crew/image-mark-shuttleworth.webp';
  } else if (index === 2) {
    name.innerText = 'Victor Glover';
    job.innerText = 'Pilot';
    details.innerText = "Commander Glover, a U.S. Navy pilot of the F/A-18, was part of the SpaceX Crew Dragon's first operational flight to the International Space Station. He served as a station systems flight engineer during Expedition 64.";
    image.src = '../static/assets/crew/image-victor-glover.webp';
  } else if (index === 3) {
    name.innerText = 'Mahmoud Mansy';
    job.innerText = 'Flight Engineer';
    details.innerText = 'Mahmoud Mansy is an Egyptian engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded young-man to fly to the ISS, and the first Egyptian in space.';
    image.src = '../static/assets/crew/mansy2-removebg.png';
  } else if (index === 4) {
    name.innerText = 'James Turner';
    job.innerText = '';
    details.innerText = 'Dr. James Turner, a trailblazing male physician in our space tourism crew, specializes in aerospace medicine, safeguarding crew health on interstellar journeys with his pioneering expertise and commitment.';
    image.src = '../static/assets/crew/doctor.png';
  }
};

circles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    circles.forEach((anotherCircle) => {
      if (anotherCircle !== circle) {
        anotherCircle.classList.remove('circle--clicked');
      }
    });
    circle.classList.add('circle--clicked');
    changeCrew(index);
  });
});
