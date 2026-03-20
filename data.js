/* ================================================================
   NovaTech — data.js
   Datos compartidos: productos, reseñas y renderizadores de tarjetas
================================================================ */
'use strict';

/* ================================================================
   PRODUCTOS
   Para añadir un producto: copia uno de los objetos y modifica.
   wallapop: URL exacta del producto en Wallapop
   whatsapp: texto del mensaje (será URL-encoded)
================================================================ */
const PRODUCTS = [
  { id:1,  category:'movil',     name:'iPhone 15 Pro',              desc:'256GB · Titanio Natural · Batería 91% · Caja original',           price:749,  oldPrice:1199, condition:'A+', emoji:'📱', wallapop:'https://es.wallapop.com', whatsapp:'iPhone 15 Pro 749€' },
  { id:2,  category:'movil',     name:'Samsung Galaxy S24 Ultra',   desc:'512GB · Negro Titanio · S Pen incluido · 5G',                    price:699,  oldPrice:1299, condition:'A',  emoji:'📱', wallapop:'https://es.wallapop.com', whatsapp:'Samsung Galaxy S24 Ultra 699€' },
  { id:3,  category:'movil',     name:'Google Pixel 8 Pro',         desc:'128GB · Porcelana · IA integrada · Desbloqueado',                price:499,  oldPrice:899,  condition:'A+', emoji:'📱', wallapop:'https://es.wallapop.com', whatsapp:'Google Pixel 8 Pro 499€' },
  { id:4,  category:'consola',   name:'PlayStation 5',              desc:'Edición estándar · 1 mando · HDMI incluido · Sin rayones',       price:399,  oldPrice:549,  condition:'A',  emoji:'🎮', wallapop:'https://es.wallapop.com', whatsapp:'PlayStation 5 399€' },
  { id:5,  category:'consola',   name:'Xbox Series X',              desc:'1TB · Game Pass 1 mes · 2 mandos incluidos',                     price:369,  oldPrice:499,  condition:'A+', emoji:'🎮', wallapop:'https://es.wallapop.com', whatsapp:'Xbox Series X 369€' },
  { id:6,  category:'consola',   name:'Nintendo Switch OLED',       desc:'Blanca · Dock + cables + 2 Joy-Con · 64GB',                     price:249,  oldPrice:349,  condition:'A',  emoji:'🕹️', wallapop:'https://es.wallapop.com', whatsapp:'Nintendo Switch OLED 249€' },
  { id:7,  category:'portatil',  name:'MacBook Air M2',             desc:'8GB RAM · 256GB SSD · Medianoche · Batería 88%',                 price:849,  oldPrice:1299, condition:'A',  emoji:'💻', wallapop:'https://es.wallapop.com', whatsapp:'MacBook Air M2 849€' },
  { id:8,  category:'portatil',  name:'iPad Pro 12.9" M2',          desc:'Wi-Fi + 5G · 256GB · Space Gray · Apple Pencil incluido',       price:699,  oldPrice:1199, condition:'A+', emoji:'📲', wallapop:'https://es.wallapop.com', whatsapp:'iPad Pro 12.9 M2 699€' },
  { id:9,  category:'accesorio', name:'AirPods Pro 2ª Gen',         desc:'Cancelación activa · Case MagSafe · Como nuevos',               price:179,  oldPrice:279,  condition:'A+', emoji:'🎧', wallapop:'https://es.wallapop.com', whatsapp:'AirPods Pro 2 179€' },
  { id:10, category:'movil',     name:'iPhone 14',                  desc:'128GB · Azul · Batería 87% · Funda incluida',                   price:549,  oldPrice:899,  condition:'A',  emoji:'📱', wallapop:'https://es.wallapop.com', whatsapp:'iPhone 14 549€' },
  { id:11, category:'consola',   name:'PS5 Slim Digital',           desc:'1TB · Sin disco · 1 mando DualSense',                           price:329,  oldPrice:449,  condition:'A+', emoji:'🎮', wallapop:'https://es.wallapop.com', whatsapp:'PS5 Slim Digital 329€' },
  { id:12, category:'accesorio', name:'Mando Xbox Series',          desc:'Color negro · Bluetooth · Compatible PC y móvil',               price:49,   oldPrice:79,   condition:'A',  emoji:'🕹️', wallapop:'https://es.wallapop.com', whatsapp:'Mando Xbox 49€' },
  { id:13, category:'movil',     name:'Samsung Galaxy A54',         desc:'128GB · Negro · 5G · Batería 5000mAh',                          price:299,  oldPrice:479,  condition:'A+', emoji:'📱', wallapop:'https://es.wallapop.com', whatsapp:'Samsung Galaxy A54 299€' },
  { id:14, category:'portatil',  name:'Microsoft Surface Pro 9',    desc:'256GB · 8GB RAM · Intel Core i5 · Teclado incluido',            price:749,  oldPrice:1199, condition:'A',  emoji:'💻', wallapop:'https://es.wallapop.com', whatsapp:'Surface Pro 9 749€' },
  { id:15, category:'accesorio', name:'Apple Watch Series 8',       desc:'41mm · GPS · Correa negra · Batería 92%',                       price:229,  oldPrice:429,  condition:'A+', emoji:'⌚', wallapop:'https://es.wallapop.com', whatsapp:'Apple Watch Series 8 229€' },
  { id:16, category:'consola',   name:'Steam Deck OLED',            desc:'512GB · Pantalla OLED · Funda oficial incluida',                price:499,  oldPrice:679,  condition:'A',  emoji:'🎮', wallapop:'https://es.wallapop.com', whatsapp:'Steam Deck OLED 499€' },
];

/* ================================================================
   RESEÑAS
================================================================ */
const REVIEWS = [
  { name:'Laura M.',    stars:5, text:'Compré un iPhone 15 Pro y llegó en perfectas condiciones. La batería como nueva. Envío rapidísimo y el trato fue excelente. 100% recomendable.', date:'hace 2 días',    product:'iPhone 15 Pro',       color:'#3b82f6' },
  { name:'Carlos R.',   stars:5, text:'La PS5 que compré parecía recién sacada de la caja. Garantía real y responden al WhatsApp al momento. Ya he comprado 3 veces y siempre igual de bien.', date:'hace 5 días',    product:'PlayStation 5',       color:'#8b5cf6' },
  { name:'Ana P.',      stars:5, text:'Vendí mi Galaxy S22 y el proceso fue súper sencillo. Me dieron un precio justo y pagaron en el día. Sin rodeos, sin esperas.', date:'hace 1 semana',  product:'Samsung Galaxy S22',  color:'#ec4899' },
  { name:'Miguel T.',   stars:5, text:'MacBook Air M2 en estado impecable a mitad de precio. Descripción 100% fiel a la realidad. La batería marcaba 88% como decían.', date:'hace 2 semanas', product:'MacBook Air M2',       color:'#14b8a6' },
  { name:'Sara G.',     stars:4, text:'Muy buena experiencia en general. El Nintendo Switch llegó antes de lo esperado. Le doy 4 estrellas porque el embalaje podría ser más robusto, pero el producto perfecto.', date:'hace 3 semanas', product:'Nintendo Switch OLED', color:'#f59e0b' },
  { name:'Javier L.',   stars:5, text:'NovaTech es mi proveedor de referencia para tecnología. Precios imbatibles y garantía que funciona de verdad. Tuve un problema con un mando y lo solucionaron sin preguntas.', date:'hace 1 mes',    product:'Xbox Series X',       color:'#22c55e' },
  { name:'Marta F.',    stars:5, text:'Compré los AirPods Pro y parecen nuevos. El vendedor muy honesto describiendo el estado. Repetiré sin duda. Precio muy competitivo.', date:'hace 1 mes',    product:'AirPods Pro 2',       color:'#f97316' },
  { name:'Roberto A.',  stars:5, text:'Excelente trato y rapidez. El iPad Pro llegó en 24h y el embalaje era perfecto. La pantalla sin un solo arañazo. Muy satisfecho con la compra.', date:'hace 6 semanas', product:'iPad Pro 12.9" M2',   color:'#06b6d4' },
  { name:'Elena V.',    stars:4, text:'Buena compra, el iPhone 14 funciona perfectamente. Solo le pongo 4 estrellas porque tardó 3 días en llegar en vez de las 24-48h prometidas, pero el producto inmejorable.', date:'hace 2 meses',  product:'iPhone 14',           color:'#a855f7' },
];

/* ================================================================
   HELPER: renderizar tarjeta de producto
================================================================ */
function productCard(p) {
  const waMsg  = encodeURIComponent(`Hola! Me interesa el ${p.name} por ${p.price}€. ¿Sigue disponible?`);
  const waLink = `https://wa.me/34600000000?text=${waMsg}`;
  const catLabels = { movil:'Móvil', consola:'Consola', portatil:'Portátil', accesorio:'Accesorio' };

  return `
    <div class="product-card">
      <div class="product-img">
        ${p.emoji}
        <span class="product-condition">${p.condition}</span>
      </div>
      <div class="product-body">
        <div class="product-cat">${catLabels[p.category] || p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-price">
          ${p.price} €
          ${p.oldPrice ? `<del>${p.oldPrice} €</del>` : ''}
        </div>
        <div class="product-actions">
          <a href="${p.wallapop}" target="_blank" rel="noopener" class="btn btn-outline">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="13" height="13"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            Wallapop
          </a>
          <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.532 5.855L.057 23.882a.5.5 0 0 0 .613.597l6.218-1.63A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.369l-.36-.214-3.726.977.995-3.638-.235-.374A9.818 9.818 0 1 1 12 21.818z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;
}

/* ================================================================
   HELPER: lanzar reveal en elementos dinámicamente añadidos
================================================================ */
function initRevealEls(els) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.08 });
  els.forEach(el => io.observe(el));
}
