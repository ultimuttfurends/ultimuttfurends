const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    const booking = document.querySelector('#booking');
    booking?.scrollIntoView({ behavior: 'smooth' });
  });
});

const slides = [...document.querySelectorAll('.testimonial-card')];
let currentSlide = 0;
function showSlide(next){
  if(!slides.length) return;
  slides[currentSlide].classList.remove('active');
  currentSlide = (next + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}
document.querySelector('.next')?.addEventListener('click', () => showSlide(currentSlide + 1));
document.querySelector('.prev')?.addEventListener('click', () => showSlide(currentSlide - 1));
if(slides.length > 1){ setInterval(() => showSlide(currentSlide + 1), 6500); }

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
