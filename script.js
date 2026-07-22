const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));



/* V66 smooth testimonial controller */
(function(){
  const slides = Array.from(document.querySelectorAll('.testimonial-card'));
  const prev = document.querySelector('.testimonial-shell .prev');
  const next = document.querySelector('.testimonial-shell .next');
  let currentSlide = Math.max(0, slides.findIndex(slide => slide.classList.contains('active')));
  let timer = null;
  let locked = false;

  function showSlide(index){
    if(!slides.length || locked) return;
    locked = true;
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    setTimeout(() => { locked = false; }, 650);
  }

  function desktopAuto(){
    if(timer) clearInterval(timer);
    if(slides.length > 1 && window.matchMedia('(min-width: 701px)').matches){
      timer = setInterval(() => showSlide(currentSlide + 1), 12000);
    }
  }

  if(prev){
    prev.onclick = function(event){
      event.preventDefault();
      event.stopPropagation();
      showSlide(currentSlide - 1);
      desktopAuto();
      return false;
    };
  }

  if(next){
    next.onclick = function(event){
      event.preventDefault();
      event.stopPropagation();
      showSlide(currentSlide + 1);
      desktopAuto();
      return false;
    };
  }

  slides.forEach(slide => slide.classList.remove('active'));
  if(slides[currentSlide]) slides[currentSlide].classList.add('active');
  desktopAuto();
  window.addEventListener('resize', desktopAuto);
})();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();


