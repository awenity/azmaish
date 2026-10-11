// Clean Product Data Object (Eliminates JSON.parse errors entirely)
const productsData = [
  {
    id: 1,
    name: "Inferno Club Chair",
    price: "PKR 48,000",
    img: "prod1.jpg",
    tag: "Seating • Sculptural Velvet",
    desc: "Sculptural curved armchair wrapped in fiery crimson high-pile upholstery. Ergonomically shaped to hold posture while making a brutalist impression.",
    specs: {
      "Dimensions": "84 x 78 x 72 cm",
      "Material": "Molded Polyurethane & Italian Velvet",
      "Weight": "24 kg",
      "Production": "Limited run of 12 units"
    }
  },
  {
    id: 2,
    name: "Molten Low Table",
    price: "PKR 34,500",
    img: "prod2.jpg",
    tag: "Surface • Cast Aluminum",
    desc: "Cast industrial aluminum chassis with raw, unpolished pour textures, capped by a 12mm smoked temper glass slab.",
    specs: {
      "Dimensions": "110 x 60 x 38 cm",
      "Material": "Sand-Cast Aluminum, Smoked Toughened Glass",
      "Weight": "31 kg",
      "Production": "Individually Numbered"
    }
  },
  {
    id: 3,
    name: "Ignition Mood Totem",
    price: "PKR 18,200",
    img: "prod3.jpg",
    tag: "Lighting • Custom Acrylic",
    desc: "Warm ambient neon pillar delivering bold silhouettes in low light. The twisted fluid contour glows evenly via internal LEDs.",
    specs: {
      "Dimensions": "145 x 24 x 24 cm",
      "Material": "Heat-bent Acrylic, Anodized Steel",
      "Light Temp": "2400K Warm Sunset Amber",
      "Production": "Handcrafted"
    }
  },
  {
    id: 4,
    name: "Rebel Solid Pedestal",
    price: "PKR 22,000",
    img: "prod4.jpg",
    tag: "Stool • Lacquered Sheesham",
    desc: "Hand-turned organic timber block treated with high-gloss coats. Doubles as side table or gallery pedestal.",
    specs: {
      "Dimensions": "35 x 35 x 48 cm",
      "Material": "Solid Reclaimed Sheesham Wood",
      "Weight": "16 kg",
      "Finish": "Mirror Flame Finish"
    }
  },
  {
    id: 5,
    name: "Volt Modular Form",
    price: "PKR 115,000",
    img: "prod5.jpg",
    tag: "Lounge • High-Density Foam",
    desc: "Low-slung modular seating architecture built with heavy raw twill. Modular clips permit infinite lounge arrangements.",
    specs: {
      "Dimensions": "180 x 95 x 65 cm (2 Modules)",
      "Material": "Industrial Canvas, Triple-Layer HR Foam",
      "Weight": "42 kg",
      "Modular Options": "Configurable Units"
    }
  },
  {
    id: 6,
    name: "Distortion Fluid Mirror",
    price: "PKR 16,500",
    img: "prod6.jpg",
    tag: "Decor • Polished Metal",
    desc: "Wavy asymmetrical liquid steel wall installation that challenges conventional reflection spaces.",
    specs: {
      "Dimensions": "90 x 55 x 4 cm",
      "Material": "Stainless Steel Contour, Ultra-Clear Mirror",
      "Mounting": "French Cleat Included",
      "Weight": "9.5 kg"
    }
  },
  {
    id: 7,
    name: "Chaos Cantilever Unit",
    price: "PKR 41,000",
    img: "prod7.jpg",
    tag: "Storage • Matte Carbon Steel",
    desc: "Defying horizontal balance with laser-cut steel tension plates. Built to showcase design specimens.",
    specs: {
      "Dimensions": "120 x 30 x 140 cm",
      "Material": "Structural Carbon Steel, Powder-Coated",
      "Weight": "28 kg",
      "Load Capacity": "60 kg"
    }
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // Reveal scroll animations
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // Modal DOM elements
  const modal = document.getElementById('productModal');
  const modalClose = document.querySelector('.modal-close');
  const modalImg = document.getElementById('modalImg');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const modalSpecsList = document.getElementById('modalSpecsList');
  const modalOrderBtn = document.getElementById('modalOrderBtn');

  // Open Modal Handler
  const openProduct = (productId) => {
    const item = productsData.find(p => p.id === parseInt(productId, 10));
    if (!item) return;

    modalImg.src = item.img;
    modalImg.onerror = () => {
      modalImg.src = `https://placehold.co/900x900/F5F5F7/111111?text=${encodeURIComponent(item.name)}`;
    };

    modalTag.textContent = item.tag;
    modalTitle.textContent = item.name;
    modalPrice.textContent = item.price;
    modalDesc.textContent = item.desc;

    // Build specs safely
    modalSpecsList.innerHTML = '';
    Object.entries(item.specs).forEach(([k, v]) => {
      const row = document.createElement('div');
      row.className = 'spec-item';
      row.innerHTML = `<dt>${k}</dt><dd>${v}</dd>`;
      modalSpecsList.appendChild(row);
    });

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  // Close Modal Handler
  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  // Mobile-Optimized Click Listener (Event Delegation)
  document.querySelector('.product-stream').addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (!card) return;
    const id = card.getAttribute('data-id');
    openProduct(id);
  });

  // Modal Close Events
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Instagram DM Redirect
  modalOrderBtn.addEventListener('click', () => {
    window.open('https://instagram.com/azmaish_store', '_blank');
  });
});