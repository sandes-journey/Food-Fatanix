// script.js

const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + track.children.length) % track.children.length;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % track.children.length;
  updateCarousel();
});

function updateCarousel() {
  const trackWidth = track.children[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * trackWidth}px)`;
}
