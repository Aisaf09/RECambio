/* ================================================================
   RECambio — app.js
   Features: Loader, Navbar, Scroll reveal, Products, Reviews,
             Filtering, Forms, File preview, Mobile menu
================================================================ */

'use strict';

/* ================================================================
   DATA — Mock product catalog (replace with API or JSON file)
================================================================ */
const PRODUCTS = [
  {
    id: 1, category: 'movil',
    name: 'iPhone 15 Pro',
    desc: '256GB · Titanio Natural · Batería 91% · Caja original',
    price: 749, oldPrice: 1199,
    condition: 'A+', emoji: '📱',
    wallapop: 'https://es.wallapop.com',
    whatsapp: 'iPhone+15+Pro+749€',
  },
  {
    id: 2, category: 'movil',
    name: 'Samsung Galaxy S24 Ultra',
    desc: '512GB · Negro Titanio · S Pen incluido · 5G',
    price: 699, oldPrice: 1299,
    condition: 'A', emoji: '📱',
    wallapop: 'https://es.wallapop.com',
    whatsapp: 'Samsung+Galaxy+S24+Ultra+699€',
  },
  {
    id: 3, category: 'movil',
    name: 'Google Pixel 8 Pro',
    desc: '128GB · Porcelana · IA integrada · Unlocked',
    price: 499, oldPrice: 899,
    condition: 'A+', emoji: '📱',
    wallapop: 'https://es.wallapop.com',
    whatsapp: 'Google+Pixel+8+Pro+499€',
  },
  {
    id: 4, category: 'consola',
    name: 'PlayStation 5',
    desc: 'Edición estándar · 1 mando · HDMI incluido · Sin rayones',
    price: 399, oldPrice: 549,
    condition: 'A', emoji: '🎮',
    wallapop: 'https://es.wallapop.com',
    whatsapp: 'PlayStation+5+399€',
  },
  {
    id: 5, category: 'consola',
    name: 'Xbox Series X',
    desc: '1TB · Game Pass Ultimate 1 mes · 2 mandos',
    price: 369, oldPrice: 499,
    condition: 'A+', emoji: '🎮',
    wallapop: 'https://es.wallapop.com',
    whatsapp: 'Xbox+Series+X+369€',
  },
  {
    id: 6, category: 'consola',
    name: 'Nintendo Switch OLED',
    desc: 'Blanca · Dock + cables + 2 Joy-Con · 64GB',
    price: 249, oldPrice: 349,
    condition: 'A', emoji: '🕹️',
    wallapop: 'https://es.wallapop.com',
    whatsapp: 'Nintendo+Switch+OLED+249€',
  },
  {
    id: 7, category: 'portatil',
    name: 'MacBook Air M2',
    desc: '8GB RAM · 256GB SSD · Medianoche · Batería 88%',
    price: 849, oldPrice: 1299,
    condition: 'A', emoji: '💻',
    wallapop: 'https://es.wallapop.com',
    whatsapp: 'MacBook+Air+M2+849€',
  },
  {
    id: 8, category: 'portatil',
    name: 'iPad Pro 12.9" M2',
    desc: 'Wi-Fi + 5G · 256GB · Space Gray · Apple Pencil incluido',
    price: 699, oldPrice: 1199,
    condition: 'A+', emoji: '📲',
    wallapop: 'https://es.wallapop.com',
    whatsapp: 'iPad+Pro+12.9+M2+699€',
  },
  {
    id: 9, category: 'accesorio',
    name: 'AirPods Pro 2ª Gen',
    desc: 'Cancelación activa · Case con MagSafe · Como nuevos',
    price: 179, oldPrice: 279,
    condition: 'A+', emoji: '🎧',
    wallapop: 'https://es.wallapop.com',
    whatsapp: 'AirPods+Pro+2+179€',
  },
  {
    id: 10, category: 'movil',
    name: 'iPhone 14',
    desc: '128GB · Azul · Batería 87% · Funda incluida',
    price: 549, oldPrice: 899,
    condition: 'A', emoji: '📱',
    wallapop: 'https://es.wallapop.com',
    whatsapp: 'iPhone+14+549€',
  },
  {
    id: 11, category: 'consola',
    name: 'PS5 Slim Digital',
    desc: '1TB · Sin disco óptico · 1 mando DualSense',
    price: 329, oldPrice: 449,
    condition: 'A+', emoji: '🎮',
    wallapop: 'https://es.wallapop.com',
    whatsapp: 'PS5+Slim+Digital+329€',
  },
  {
    id: 12, category: 'accesorio',
    name: 'Mando Xbox Series + Pila',
    desc: 'Color negro · Bluetooth · Compatible PC y móvil',
    price: 49, oldPrice: 79,
    condition: 'A', emoji: '🕹️',
    wallapop: 'https://es.wallapop.com',
    whatsapp: 'Mando+Xbox+49€',
  },
];

/* ================================================================
   DATA — Mock reviews
================================================================ */
const REVIEWS = [
  {
    name: 'Laura M.',
    stars: 5,
    text: 'Compré un iPhone 15 Pro y llegó en perfectas condiciones. La batería como nueva. Envío rapidísimo y el trato fue excelente.',
    date: 'hace 2 días',
    color: '#3b82f6',
  },
  {
    name: 'Carlos R.',
    stars: 5,
    text: 'La PS5 que compré parecía recién sacada de la caja. Garantía real y responden al WhatsApp al momento. Totalmente recomendable.',
    date: 'hace 1 semana',
    color: '#8b5cf6',
  },
  {
    name: 'Ana P.',
    stars: 5,
    text: 'Vendí mi Galaxy S22 y el proceso fue súper sencillo. Me dieron un precio justo y pagaron en el día. Sin rodeos.',
    date: 'hace 2 semanas',
    color: '#ec4899',
  },
  {
    name: 'Miguel T.',
    stars: 5,
    text: 'MacBook Air M2 en estado impecable a mitad de precio. He comprado 3 veces ya y siempre igual de bien.',
    date: 'hace 3 semanas',
    color: '#14b8a6',
  },
  {
    name: 'Sara G.',
    stars: 4,
    text: 'Muy buena experiencia. El Nintendo Switch llegó antes de lo esperado. Le doy 4 estrellas porque el embalaje podría mejorar.',
    date: 'hace 1 mes',
    color: '#f59e0b',
  },
  {
    name: 'Javier L.',
    stars: 5,
    text: 'RECambio es mi proveedor de referencia para tecnología. Precios imbatibles y garantía real que funciona.',
    date: 'hace 1 mes',
    color: '#22c55e',
  },
];

/* ================================================================
   LOADER
================================================================ */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 1500);
});

/* ================================================================
   NAVBAR — scroll effect & active links
================================================================ */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const backTop = document.getElementById('backTop');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function onScroll() {
    // Scroll styling
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    // Back to top
    if (window.scrollY > 400) {
      backTop.classList.add('visible');
    } else {
      backTop.classList.remove('visible');
    }
    // Active nav link
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // Back to top click
  if (backTop) {
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
})();

/* ================================================================
   MOBILE MENU
================================================================ */
(function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

/* ================================================================
   SCROLL REVEAL
================================================================ */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

/* ================================================================
   RENDER PRODUCTS
================================================================ */
(function initProducts() {
  const grid = document.getElementById('productGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  let activeFilter = 'all';

  function renderProducts(filter) {
    const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
    grid.innerHTML = filtered.map(p => productCard(p)).join('');
    // Re-observe new cards
    grid.querySelectorAll('.product-card').forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `opacity 0.4s ${i * 0.06}s ease, transform 0.4s ${i * 0.06}s ease`;
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 10);
    });
  }

  function productCard(p) {
    const waMsg = encodeURIComponent(`Hola! Estoy interesado/a en el ${p.name} (${p.price}€). ¿Sigue disponible?`);
    const waLink = `https://wa.me/640123470?text=${waMsg}`;
    return `
      <div class="product-card">
        <div class="product-img">
          ${p.emoji}
          <span class="product-condition">${p.condition}</span>
        </div>
        <div class="product-body">
          <div class="product-cat">${catLabel(p.category)}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-price">
            ${p.price} €
            ${p.oldPrice ? `<del>${p.oldPrice} €</del>` : ''}
          </div>
          <div class="product-actions">
            <a href="${p.wallapop}" target="_blank" rel="noopener" class="btn btn-outline">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              Wallapop
            </a>
            <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.532 5.855L.057 23.882a.5.5 0 0 0 .613.597l6.218-1.63A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.369l-.36-.214-3.726.977.995-3.638-.235-.374A9.818 9.818 0 1 1 12 21.818z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    `;
  }

  function catLabel(cat) {
    return { movil: 'Móvil', consola: 'Consola', portatil: 'Portátil', accesorio: 'Accesorio' }[cat] || cat;
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderProducts(activeFilter);
    });
  });

  renderProducts('all');
})();

/* ================================================================
   RENDER REVIEWS
================================================================ */
(function initReviews() {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;

  function initials(name) { return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2); }
  function stars(n) { return '★'.repeat(n) + '☆'.repeat(5 - n); }

  grid.innerHTML = REVIEWS.map(r => `
    <div class="review-card reveal">
      <div class="review-stars">${stars(r.stars)}</div>
      <div class="review-text">"${r.text}"</div>
      <div class="review-author">
        <div class="review-avatar" style="background:${r.color}">${initials(r.name)}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-date">${r.date}</div>
        </div>
      </div>
    </div>
  `).join('');

  // Trigger reveal for dynamically added cards
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.review-card').forEach(c => io.observe(c));
})();

/* ================================================================
   SELL FORM
================================================================ */
(function initSellForm() {
  const form = document.getElementById('sellForm');
  const success = document.getElementById('sellSuccess');
  const fileInput = document.getElementById('sellImages');
  const preview = document.getElementById('filePreview');
  const fileDrop = document.getElementById('fileDrop');
  if (!form) return;

  // File preview
  function showPreviews(files) {
    preview.innerHTML = '';
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = e => {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.className = 'file-thumb';
        img.alt = file.name;
        preview.appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', () => showPreviews(fileInput.files));
  }

  // Drag & drop on fileDrop
  if (fileDrop && fileInput) {
    fileDrop.addEventListener('dragover', e => { e.preventDefault(); fileDrop.style.borderColor = 'var(--blue)'; });
    fileDrop.addEventListener('dragleave', () => { fileDrop.style.borderColor = ''; });
    fileDrop.addEventListener('drop', e => {
      e.preventDefault();
      fileDrop.style.borderColor = '';
      const dt = e.dataTransfer;
      showPreviews(dt.files);
    });
    fileDrop.addEventListener('click', (e) => {
      if (e.target.tagName !== 'LABEL') fileInput.click();
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    // Simulate async submission (replace with real fetch)
    setTimeout(() => {
      form.reset();
      if (preview) preview.innerHTML = '';
      btn.textContent = 'Enviar para tasación';
      btn.disabled = false;
      if (success) {
        success.style.display = 'block';
        setTimeout(() => { success.style.display = 'none'; }, 5000);
      }
    }, 1200);
  });
})();

/* ================================================================
   CONTACT FORM
================================================================ */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('contactSuccess');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    // Simulate async submission (replace with EmailJS, Formspree, etc.)
    setTimeout(() => {
      form.reset();
      btn.textContent = 'Enviar mensaje';
      btn.disabled = false;
      if (success) {
        success.style.display = 'block';
        setTimeout(() => { success.style.display = 'none'; }, 5000);
      }
    }, 1000);
  });
})();

/* ================================================================
   SMOOTH SCROLL for all anchor links
================================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ================================================================
   PARALLAX — subtle hero blob movement on mouse
================================================================ */
(function initParallax() {
  const blobs = document.querySelectorAll('.blob-1, .blob-2');
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    blobs.forEach((b, i) => {
      const factor = i % 2 === 0 ? 1 : -1;
      b.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
  }, { passive: true });
})();

console.log('%cRECambio 🚀', 'color:#ff2d2d;font-family:monospace;font-size:20px;font-weight:bold');
console.log('%cPremium Tech Store — Built with ❤️', 'color:#9898aa;font-family:monospace;font-size:12px');