// HappyBein – Shared JS
// v1.1 — collapsible initiative descriptions

document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
  }
  document.querySelectorAll('#mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav) mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Scroll-triggered fade-up
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Collapsible initiative details
  document.querySelectorAll('.init-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.init-card');
      const details = card.querySelector('.init-details');
      const isOpen = details.classList.contains('open');
      details.classList.toggle('open', !isOpen);
      btn.textContent = isOpen ? 'Read more ↓' : 'Show less ↑';
    });
  });

});
