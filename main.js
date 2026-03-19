// Language toggle
function setLang(lang) {
  document.body.classList.toggle('en', lang === 'en');
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });
}

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

// Nav active state on scroll
const sections = document.querySelectorAll('section[id], footer');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--accent)' : '';
  });
});
