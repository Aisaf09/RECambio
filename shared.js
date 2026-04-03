/* ================================================================
   RECambio — shared.js
   Inyecta navbar y footer en todas las páginas,
   gestiona loader, scroll, mobile menu y back-to-top
================================================================ */
'use strict';

/* ---- Detectar página activa ---- */
const PAGE = (function() {
  const p = location.pathname.split('/').pop().replace('.html', '') || 'index';
  return p;
})();

/* ---- Navbar HTML ---- */
const NAV_HTML = `
<nav id="navbar">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo" aria-label="RECambio">
      <img src="logo-recambio-sin.png" alt="RECambio" class="nav-logo-img" loading="eager" />
    </a>
    <ul class="nav-links">
      <li><a href="index.html"     class="nav-link" data-page="index">Inicio</a></li>
      <li><a href="catalogo.html"  class="nav-link" data-page="catalogo">Catálogo</a></li>
      <li><a href="nosotros.html"  class="nav-link" data-page="nosotros">Nosotros</a></li>
      <li><a href="resenas.html"   class="nav-link" data-page="resenas">Reseñas</a></li>
      <li><a href="tasacion.html"  class="nav-link" data-page="tasacion">Vender</a></li>
      <li><a href="contacto.html"  class="nav-link" data-page="contacto">Contacto</a></li>
    </ul>
    <a href="https://wa.me/640123470" target="_blank" class="btn btn-sm btn-primary nav-wa">
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.532 5.855L.057 23.882a.5.5 0 0 0 .613.597l6.218-1.63A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.369l-.36-.214-3.726.977.995-3.638-.235-.374A9.818 9.818 0 1 1 12 21.818z"/></svg>
      WhatsApp
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <ul>
    <li><a href="index.html"    class="nav-link" data-page="index">Inicio</a></li>
    <li><a href="catalogo.html" class="nav-link" data-page="catalogo">Catálogo</a></li>
    <li><a href="nosotros.html" class="nav-link" data-page="nosotros">Nosotros</a></li>
    <li><a href="resenas.html"  class="nav-link" data-page="resenas">Reseñas</a></li>
    <li><a href="tasacion.html" class="nav-link" data-page="tasacion">Vender</a></li>
    <li><a href="contacto.html" class="nav-link" data-page="contacto">Contacto</a></li>
  </ul>
</div>`;

/* ---- Footer HTML ---- */
const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo" aria-label="RECambio">
          <img src="logo-recambio.png" alt="RECambio" class="nav-logo-img" />
        </a>
        <p>Tecnología reacondicionada con calidad premium. Garantía real y precios justos.</p>
      </div>
      <div class="footer-links">
        <strong>Páginas</strong>
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="catalogo.html">Catálogo</a></li>
          <li><a href="nosotros.html">Nosotros</a></li>
          <li><a href="resenas.html">Reseñas</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <strong>Servicios</strong>
        <ul>
          <li><a href="tasacion.html">Vender dispositivo</a></li>
          <li><a href="contacto.html">Contacto</a></li>
          <li><a href="https://es.wallapop.com" target="_blank">Wallapop</a></li>
        </ul>
      </div>
      <div class="footer-contact">
        <strong>Contacto directo</strong>
        <a href="https://wa.me/640123470" target="_blank" class="btn btn-primary">
          <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.532 5.855L.057 23.882a.5.5 0 0 0 .613.597l6.218-1.63A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.369l-.36-.214-3.726.977.995-3.638-.235-.374A9.818 9.818 0 1 1 12 21.818z"/></svg>
          WhatsApp directo
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 RECambio. Todos los derechos reservados.</span>
      <span>Zaragoza, España</span>
    </div>
  </div>
</footer>
<a href="https://wa.me/640123470" target="_blank" class="wa-float" aria-label="WhatsApp">
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.532 5.855L.057 23.882a.5.5 0 0 0 .613.597l6.218-1.63A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.369l-.36-.214-3.726.977.995-3.638-.235-.374A9.818 9.818 0 1 1 12 21.818z"/></svg>
</a>
<button class="back-top" id="backTop" aria-label="Volver arriba">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><polyline points="18 15 12 9 6 15"/></svg>
</button>`;

/* ---- Loader HTML ---- */
const LOADER_HTML = `
<div id="loader">
  <div class="loader-logo">
    <span class="loader-n">REC</span><span class="loader-rest">ambio</span>
  </div>
  <div class="loader-bar"><div class="loader-fill"></div></div>
</div>`;

/* ================================================================
   INJECT INTO DOM
================================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* Loader */
  document.body.insertAdjacentHTML('afterbegin', LOADER_HTML);

  /* Navbar */
  const navSlot = document.getElementById('nav-slot');
  if (navSlot) navSlot.outerHTML = NAV_HTML;

  /* Footer */
  const footerSlot = document.getElementById('footer-slot');
  if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;

  /* Mark active nav link */
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.dataset.page === PAGE) link.classList.add('active');
  });

  /* ---- Init shared behaviours ---- */
  initLoader();
  initNavbar();
  initMobileMenu();
  initReveal();
  initBackTop();
  initParallax();
});

/* ================================================================
   LOADER
================================================================ */
function initLoader() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const el = document.getElementById('loader');
      if (el) el.classList.add('hidden');
    }, 1200);
  });
}

/* ================================================================
   NAVBAR SCROLL
================================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ================================================================
   MOBILE MENU
================================================================ */
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    menu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ================================================================
   SCROLL REVEAL
================================================================ */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const io  = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

/* ================================================================
   BACK TO TOP
================================================================ */
function initBackTop() {
  const btn = document.getElementById('backTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ================================================================
   PARALLAX (blobs)
================================================================ */
function initParallax() {
  const blobs = document.querySelectorAll('.blob-1, .blob-2');
  if (!blobs.length) return;
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 28;
    const y = (e.clientY / window.innerHeight - 0.5) * 28;
    blobs.forEach((b, i) => {
      b.style.transform = `translate(${x * (i % 2 ? -1 : 1)}px, ${y * (i % 2 ? -1 : 1)}px)`;
    });
  }, { passive: true });
}