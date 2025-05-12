// Scroll Reveal Animations
ScrollReveal().reveal('.reveal', {
  distance: '50px',
  duration: 800,
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 200
});

// Simple contact alert
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! We will contact you shortly.');
});
