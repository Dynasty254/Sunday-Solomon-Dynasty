// Hero Image Carousel
let current = 0;
const images = document.querySelectorAll('.carousel-image');

function showNextImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}
setInterval(showNextImage, 5000); // Change every 5 seconds

// Mobile Nav Toggle
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('active');
});
