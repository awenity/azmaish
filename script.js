document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });
  revealElements.forEach(el => observer.observe(el));

  // Modal / Expanded Product Elements
  const modal = document.getElementById('productModal');
  const modalClose = document.querySelector('.modal-close');
  const modalImg = document.getElementById('modalImg');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const modalSpecsList = document.getElementById('modalSpecsList');
  const modalOrderBtn = document.getElementById('modalOrderBtn');

  let activeProduct = '';

  // Function to Open Modal
  const openProduct = (card) => {
    const name = card.dataset.name;
    const price = card.dataset.price;
    const img = card.dataset.img;
    const tag = card.dataset.tag;
    const desc = card.dataset.desc;
    const specs = JSON.parse(card.dataset.specs || '{}');

    activeProduct = name;

    modalImg.src = img;
    modalImg.onerror = () => {
      modalImg.src = `https://placehold.co/900x900/F5F5F7/111111?text=${encodeURIComponent(name)}`;
    };
    modalTag.innerHTML = tag;
    modalTitle.textContent = name;
    modalPrice.textContent = price;
    modalDesc.textContent = desc;

    // Render Specifications
    modalSpecsList.innerHTML = '';
    Object.entries(specs).forEach(([key, val]) => {
      const row = document.createElement('div');
      row.className = 'spec-item';
      row.innerHTML = `<dt>${key}</dt><dd>${val}</dd>`;
      modalSpecsList.appendChild(row);
    });

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  // Function to Close Modal
  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  // Bind clicks to each product card
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.addEventListener('click', () => openProduct(card));
  });

  // Close handlers
  modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Direct DM CTA from Modal
  modalOrderBtn.addEventListener('click', () => {
    const igUrl = 'https://instagram.com/azmaish_store';
    window.open(igUrl, '_blank');
  });
});