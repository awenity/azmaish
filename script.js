// Azmaish Collection Archive
const productsData = [
  {
    id: 1,
    placeholderLabel: "Product 1",
    name: "Inferno Club Chair",
    category: "Lounge Armchair",
    price: 48000,
    priceDisplay: "PKR 48,000",
    tag: "Series 01",
    desc: "Sculptural curved armchair wrapped in fiery crimson upholstery. Ergonomically shaped to hold posture.",
    specs: { "Dimensions": "84 x 78 x 72 cm", "Material": "High-Density Foam & Velvet", "Lead Time": "In Stock", "Edition": "12 Units Only" }
  },
  {
    id: 2,
    placeholderLabel: "Product 2",
    name: "Molten Low Table",
    category: "Cast Aluminum Slab",
    price: 34500,
    priceDisplay: "PKR 34,500",
    tag: "Artisanal",
    desc: "Brutalist industrial sand-cast aluminum base preserving molten metallic ripples with smoked glass.",
    specs: { "Dimensions": "110 x 60 x 38 cm", "Material": "Cast Aluminum & 12mm Glass", "Weight": "31 kg", "Finish": "Raw Hand Pour" }
  },
  {
    id: 3,
    placeholderLabel: "Product 3",
    name: "Ignition Mood Totem",
    category: "Ambient Lighting",
    price: 18200,
    priceDisplay: "PKR 18,200",
    tag: "Lighting",
    desc: "Fluid neon contour light providing dramatic amber illumination in curated corners.",
    specs: { "Dimensions": "145 x 24 x 24 cm", "Light Temp": "2400K Warm Glow", "Power": "12V Adapter Included", "Craft": "Heat-Bent Acrylic" }
  },
  {
    id: 4,
    placeholderLabel: "Product 4",
    name: "Rebel Solid Pedestal",
    category: "Timber Stool",
    price: 22000,
    priceDisplay: "PKR 22,000",
    tag: "Solid Wood",
    desc: "Solid harvested Sheesham timber block turned on artisanal lathes with high-gloss lacquer seal.",
    specs: { "Dimensions": "35 x 35 x 48 cm", "Material": "Single-Log Sheesham", "Weight": "16 kg", "Versatility": "Stool or Pedestal" }
  },
  {
    id: 5,
    placeholderLabel: "Product 5",
    name: "Volt Modular Form",
    category: "Low Seating",
    price: 115000,
    priceDisplay: "PKR 115,000",
    tag: "Modular",
    desc: "Low-profile sectional built with high-density foam and tactile woven upholstery with hidden clips.",
    specs: { "Dimensions": "180 x 95 x 65 cm", "Upholstery": "Heavy Raw Canvas", "Structure": "Hardwood Frame", "Warranty": "5 Years" }
  },
  {
    id: 6,
    placeholderLabel: "Product 6",
    name: "Distortion Fluid Mirror",
    category: "Wall Object",
    price: 16500,
    priceDisplay: "PKR 16,500",
    tag: "Wall Object",
    desc: "Liquid asymmetry crafted in steel frame contours, functioning as a conversation piece.",
    specs: { "Dimensions": "90 x 55 x 4 cm", "Frame": "Stainless Steel", "Mounting": "Multi-Orientation Cleats", "Weight": "9.5 kg" }
  },
  {
    id: 7,
    placeholderLabel: "Product 7",
    name: "Chaos Cantilever Unit",
    category: "Steel Bookshelf",
    price: 41000,
    priceDisplay: "PKR 41,000",
    tag: "Industrial",
    desc: "Defying horizontal balance through laser-cut steel tension plates designed for monographs.",
    specs: { "Dimensions": "120 x 30 x 140 cm", "Finish": "Matte Charcoal Powder-Coat", "Capacity": "60 kg Tested", "Assembly": "Flat-Pack" }
  },
  {
    id: 8,
    placeholderLabel: "Product 8",
    name: "Aura Travertine Monolith",
    category: "Stone Table",
    price: 29000,
    priceDisplay: "PKR 29,000",
    tag: "Natural Stone",
    desc: "Cut from raw Iranian beige travertine with natural cavities preserved and sealed with anti-stain film.",
    specs: { "Dimensions": "32 x 32 x 45 cm", "Material": "Solid Travertine", "Weight": "27 kg", "Care": "Microfibre wipe" }
  },
  {
    id: 9,
    placeholderLabel: "Product 9",
    name: "Eclipse Ceramic Vessel",
    category: "Hand-Thrown Urn",
    price: 12500,
    priceDisplay: "PKR 12,500",
    tag: "Ceramic",
    desc: "Sculptural vessel thrown by Multani master potters, fired with volcanic textured glaze.",
    specs: { "Dimensions": "38 x 38 x 52 cm", "Clay": "Stoneware", "Finish": "Textured Crater Glaze", "Usage": "Interior Decor" }
  },
  {
    id: 10,
    placeholderLabel: "Product 10",
    name: "Vortex Raw Steel Dining Chair",
    category: "Welded Seating",
    price: 26000,
    priceDisplay: "PKR 26,000",
    tag: "Welded Steel",
    desc: "Minimalist skeleton frame constructed from cold-rolled steel rods with raw exposed brass seams.",
    specs: { "Dimensions": "52 x 48 x 82 cm", "Gauge": "16mm Solid Rods", "Cushion": "Saddle Leather Pad", "Weight": "11 kg" }
  }
];

let cart = [];
const WHATSAPP_NUMBER = "923001311047";
let scrollPos = 0;

document.addEventListener('DOMContentLoaded', () => {

  // 1. APPLE FULLSCREEN DRAWER (MATCH SCREENSHOT 2)
  const appleMenuBtn = document.getElementById('appleMenuBtn');
  const appleDrawer = document.getElementById('appleDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  function openAppleDrawer() {
    appleDrawer.classList.add('is-active');
    appleMenuBtn.classList.add('is-open');
    appleMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('drawer-open');
  }

  function closeAppleDrawer() {
    appleDrawer.classList.remove('is-active');
    appleMenuBtn.classList.remove('is-open');
    appleMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('drawer-open');
  }

  appleMenuBtn.addEventListener('click', () => {
    if (appleDrawer.classList.contains('is-active')) closeAppleDrawer();
    else openAppleDrawer();
  });

  drawerCloseBtn.addEventListener('click', closeAppleDrawer);

  document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', closeAppleDrawer);
  });

  // 2. SEARCH DRAWER TOGGLE
  const searchToggleBtn = document.getElementById('searchToggleBtn');
  const searchTray = document.getElementById('searchTray');
  const searchInput = document.getElementById('productSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  searchToggleBtn.addEventListener('click', () => {
    searchTray.hidden = !searchTray.hidden;
    if (!searchTray.hidden) {
      setTimeout(() => searchInput.focus(), 50);
    }
  });

  searchInput.addEventListener('input', () => {
    clearSearchBtn.style.display = searchInput.value.length > 0 ? 'block' : 'none';
    renderProducts();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    renderProducts();
    searchInput.focus();
  });

  // 3. HERO SLIDER AUTO ROTATION
  const heroCards = document.querySelectorAll('.hero-banner-card');
  const heroDots = document.querySelectorAll('.hero-dot');
  let currentCardIndex = 0;
  let heroTimer;

  function setHeroCard(index) {
    currentCardIndex = (index + heroCards.length) % heroCards.length;
    heroCards.forEach((c, i) => c.classList.toggle('active', i === currentCardIndex));
    heroDots.forEach((d, i) => d.classList.toggle('active', i === currentCardIndex));
  }

  heroDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      clearInterval(heroTimer);
      setHeroCard(idx);
      startHeroAuto();
    });
  });

  function startHeroAuto() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => {
      setHeroCard(currentCardIndex + 1);
    }, 4500);
  }
  startHeroAuto();

  // 4. RENDER PRODUCTS (MOBILE 2 PER ROW)
  const productsGrid = document.getElementById('productsGrid');
  const resultsCount = document.getElementById('resultsCount');
  const noResultsBox = document.getElementById('noResultsBox');

  function renderProducts() {
    const query = searchInput.value.trim().toLowerCase();
    const items = productsData.filter(item => {
      return !query || 
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.placeholderLabel.toLowerCase().includes(query) ||
        item.tag.toLowerCase().includes(query);
    });

    resultsCount.textContent = `${items.length} Pieces`;

    if (items.length === 0) {
      productsGrid.innerHTML = '';
      noResultsBox.style.display = 'block';
      return;
    }

    noResultsBox.style.display = 'none';
    productsGrid.innerHTML = items.map(item => `
      <article class="product-item" data-id="${item.id}">
        <div class="product-placeholder-wrap" onclick="openProduct(${item.id})">
          <span class="tag-badge">${item.tag}</span>
          <span class="placeholder-badge">${item.placeholderLabel}</span>
          <span class="expand-badge">Specs ↗</span>
        </div>
        <div class="product-info-box">
          <h3 class="product-name" title="${item.name}">${item.name}</h3>
          <p class="product-category">${item.category}</p>
          <span class="product-price">${item.priceDisplay}</span>
          
          <div class="product-actions-row">
            <button class="btn-card-cart" onclick="addToCart(${item.id})" aria-label="Add to cart">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </button>
            <button class="btn-card-buy" onclick="buyNowWhatsApp(${item.id})">
              Buy Now
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  renderProducts();

  document.getElementById('resetSearchBtn').addEventListener('click', () => {
    searchInput.value = '';
    renderProducts();
  });

  // 5. CART SYSTEM
  const cartBadge = document.getElementById('cartBadge');
  const cartDrawer = document.getElementById('cartDrawer');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartTrigger = document.getElementById('cartTrigger');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartCountTitle = document.getElementById('cartCountTitle');
  const checkoutWhatsAppBtn = document.getElementById('checkoutWhatsAppBtn');

  window.addToCart = (id) => {
    const item = productsData.find(p => p.id === id);
    if (!item) return;
    cart.push(item);
    updateCartUI();
    cartDrawer.classList.add('active');
  };

  window.removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCartUI();
  };

  function updateCartUI() {
    cartBadge.textContent = cart.length;
    cartCountTitle.textContent = cart.length;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `<p style="color:#777; text-align:center; margin-top:2.5rem;">Your bag is empty.</p>`;
      cartSubtotal.textContent = "PKR 0";
      return;
    }

    let total = 0;
    cartItemsContainer.innerHTML = cart.map((item, idx) => {
      total += item.price;
      return `
        <div class="cart-item-row">
          <div class="cart-placeholder-thumb">${item.placeholderLabel}</div>
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <span>${item.priceDisplay}</span>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${idx})">&times;</button>
        </div>
      `;
    }).join('');

    cartSubtotal.textContent = `PKR ${total.toLocaleString()}`;
  }

  cartTrigger.addEventListener('click', () => {
    cartDrawer.classList.add('active');
  });

  closeCartBtn.addEventListener('click', () => {
    cartDrawer.classList.remove('active');
  });

  cartDrawer.addEventListener('click', (e) => {
    if (e.target === cartDrawer) {
      cartDrawer.classList.remove('active');
    }
  });

  window.buyNowWhatsApp = (id) => {
    const item = productsData.find(p => p.id === id);
    if (!item) return;
    const msg = `Hi Azmaish Studio! I want to order "${item.name}" (${item.priceDisplay}) [${item.placeholderLabel}]. Please provide payment details and dispatch confirmation.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  checkoutWhatsAppBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert("Your bag is empty.");
      return;
    }
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    let itemsList = cart.map((item, i) => `${i + 1}. ${item.name} (${item.priceDisplay}) - ${item.placeholderLabel}`).join('\n');
    const msg = `Hello Azmaish! I want to confirm order for the following items:\n\n${itemsList}\n\n*Total Amount:* PKR ${total.toLocaleString()}\n\nPlease share payment transfer proof instructions.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  });

  // 6. PRODUCT MODAL SPECIFICATIONS (MOBILE VIEW SHIFT FIX)
  const modal = document.getElementById('productModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalPlaceholderText = document.getElementById('modalPlaceholderText');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const modalSpecsList = document.getElementById('modalSpecsList');
  const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
  const modalBuyNowBtn = document.getElementById('modalBuyNowBtn');

  let activeModalProductId = null;

  window.openProduct = (id) => {
    const item = productsData.find(p => p.id === id);
    if (!item) return;

    activeModalProductId = id;
    modalPlaceholderText.textContent = item.placeholderLabel;
    modalTag.textContent = `${item.tag} • ${item.category}`;
    modalTitle.textContent = item.name;
    modalPrice.textContent = item.priceDisplay;
    modalDesc.textContent = item.desc;

    modalSpecsList.innerHTML = Object.entries(item.specs).map(([k, v]) => `
      <div class="spec-item">
        <dt>${k}</dt>
        <dd>${v}</dd>
      </div>
    `).join('');

    // Safe scrolling capture bina screen shrink kiye
    scrollPos = window.pageYOffset;
    modal.classList.add('active');
    document.body.classList.add('modal-open');
    document.body.style.top = `-${scrollPos}px`;
  };

  function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    document.body.style.top = '';
    window.scrollTo(0, scrollPos);
  }

  modalCloseBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  modalAddToCartBtn.addEventListener('click', () => {
    if (activeModalProductId) {
      addToCart(activeModalProductId);
      closeModal();
    }
  });

  modalBuyNowBtn.addEventListener('click', () => {
    if (activeModalProductId) {
      buyNowWhatsApp(activeModalProductId);
    }
  });

  // Global ESC Key Handler
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      cartDrawer.classList.remove('active');
      closeAppleDrawer();
    }
  });
});