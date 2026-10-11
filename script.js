document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll triggers
  const revealElements = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));

  // Dynamic Instagram Inquiry redirect
  const inquiryButtons = document.querySelectorAll('.inquire-btn');
  inquiryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productName = e.target.getAttribute('data-name');
      const instagramUrl = 'https://instagram.com/azmaish_store';

      e.target.style.transform = 'scale(0.95)';
      setTimeout(() => {
        e.target.style.transform = '';
      }, 150);

      window.open(instagramUrl, '_blank');
    });
  });
});