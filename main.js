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

// Circular favicon
const _faviconImg = new Image();
_faviconImg.src = 'images/undercar.webp';
_faviconImg.onload = function () {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 64;
  const ctx = c.getContext('2d');
  ctx.beginPath();
  ctx.arc(32, 32, 32, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(_faviconImg, 0, 0, 64, 64);
  let link = document.querySelector("link[rel='icon']");
  if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
  link.href = c.toDataURL('image/png');
};

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
