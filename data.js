/* ================================================================
   RECambio — data.js
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
  /* MÓVILES */
  { id:1,  category:'movil',  featured:true,  name:'iPhone 15 Pro',             desc:'256GB · Titanio Natural · Batería 91% · Caja original',          price:749,  oldPrice:1199, condition:'A+', image:'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=400&auto=format&fit=crop', wallapop:'https://es.wallapop.com' },
  { id:2,  category:'movil',  name:'Samsung Galaxy S24 Ultra', desc:'512GB · Negro Titanio · S Pen incluido · 5G',                   price:699,  oldPrice:1299, condition:'A',  image:'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400&auto=format&fit=crop', wallapop:'https://es.wallapop.com' },
  { id:2,  category:'movil',  name:'Samsung Galaxy S24 Ultra', desc:'512GB · Negro Titanio · S Pen incluido · 5G',                   price:699,  oldPrice:1299, condition:'A',  image:'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400&auto=format&fit=crop', wallapop:'https://es.wallapop.com' },

  /* CONSOLAS */
  { id:4,  category:'consola', featured:true, name:'PlayStation 5',             desc:'Edición estándar · 1 mando · HDMI incluido · Sin rayones',      price:399,  oldPrice:549,  condition:'A',  image:'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=400&auto=format&fit=crop', wallapop:'https://es.wallapop.com' },
  { id:5,  category:'consola', name:'Xbox Series X',                       desc:'1TB · Game Pass 1 mes · 2 mandos incluidos',                  price:369,  oldPrice:499,  condition:'A+', image:'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=400&auto=format&fit=crop', wallapop:'https://es.wallapop.com' },
  { id:6,  category:'consola', name:'Nintendo Switch OLED',            desc:'Blanca · Dock + cables + 2 Joy-Con · 64GB',                  price:249,  oldPrice:349,  condition:'A',  image:'https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?q=80&w=400&auto=format&fit=crop', wallapop:'https://es.wallapop.com' },

  /* RELOJES */
  { id:7,  category:'reloj',  featured:true,  name:'Apple Watch Series 8',      desc:'41mm · GPS · Correa negra · Batería 92%',                      price:229,  oldPrice:429,  condition:'A+', image:'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=400&auto=format&fit=crop', wallapop:'https://es.wallapop.com' },
  { id:8,  category:'reloj',  name:'Samsung Galaxy Watch6',          desc:'44mm · Conectividad 4G · Estado impecable · Correa incluida',   price:199,  oldPrice:369,  condition:'A',  image:'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=400&auto=format&fit=crop', wallapop:'https://es.wallapop.com' },

  /* DRONES */
  { id:9,  category:'drone',   name:'DJI Mini 3',                         desc:'Ligero · Estabilizado · Batería en excelente estado',            price:429,  oldPrice:599,  condition:'A',  image:'https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=400&auto=format&fit=crop', wallapop:'https://es.wallapop.com' },
  { id:10, category:'drone',   name:'DJI Air 2S',                        desc:'Cámara 1” · Modo cine suave · Accesorios incluidos',          price:769,  oldPrice:999,  condition:'A+', image:'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=400&auto=format&fit=crop', wallapop:'https://es.wallapop.com' },

  /* CÁMARAS */
  { id:11, category:'camara', featured:true,  name:'Sony Alpha A7 III',        desc:'Full Frame · Buen agarre · Óptimo para fotografía y vídeo',    price:1099, oldPrice:1399, condition:'A',  image:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&auto=format&fit=crop', wallapop:'https://es.wallapop.com' },
  { id:12, category:'camara',  name:'Canon EOS R50',                        desc:'Mirrorless · Sensor APS-C · Kit listo para empezar',            price:649,  oldPrice:799,  condition:'A+', image:'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=400&auto=format&fit=crop', wallapop:'https://es.wallapop.com' },

  /* OPCIONALES (escalables) */
  { id:13, category:'ipad',    name:'iPad Pro 12.9" M2',                  desc:'Wi-Fi + 5G · 256GB · Space Gray · Compatible con Pencil',      price:699,  oldPrice:1199, condition:'A+', image:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=400&auto=format&fit=crop', wallapop:'https://es.wallapop.com' },
  { id:15, category:'gafas',  name:'Gafas Ray-Ban Meta',                     desc:'Smart glasses · Como nuevas · Cargador y accesorios',             price:149,  oldPrice:249,  condition:'A+', image:'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&auto=format&fit=crop', wallapop:'https://es.wallapop.com' },
];

/* ================================================================
   RESEÑAS
================================================================ */
const REVIEWS = [
  { name:'Laura M.',   stars:5, text:'Compré un iPhone 15 Pro y llegó en perfectas condiciones. La batería como nueva. Envío rapidísimo y el trato fue excelente. 100% recomendable.', date:'hace 2 días',    product:'iPhone 15 Pro',       color:'#22c55e' },
  { name:'Carlos R.',   stars:5, text:'La PS5 que compré parecía recién sacada de la caja. Garantía real y responden al WhatsApp al momento. Ya he comprado 3 veces y siempre igual de bien.', date:'hace 5 días',    product:'PlayStation 5',       color:'#ff2d2d' },
  { name:'Ana P.',      stars:5, text:'Vendí mi Galaxy S24 Ultra y el proceso fue súper sencillo. Me dieron un precio justo y pagaron en el día. Sin rodeos, sin esperas.', date:'hace 1 semana',  product:'Samsung Galaxy S22',  color:'#22c55e' },
  { name:'Miguel T.',   stars:5, text:'iPad Pro en estado impecable y a mitad de precio. Descripción 100% fiel a la realidad. Experiencia muy sólida.', date:'hace 2 semanas', product:'iPad Pro 12.9" M2',   color:'#ff2d2d' },
  { name:'Sara G.',     stars:4, text:'Muy buena experiencia en general. La Nintendo Switch llegó antes de lo esperado. Me gustó el embalaje y el producto estaba como nuevo.', date:'hace 3 semanas', product:'Nintendo Switch OLED', color:'#22c55e' },
  { name:'Javier L.',   stars:5, text:'RECambio es mi proveedor de referencia para tecnología. Precios imbatibles y garantía que funciona de verdad. Tuve un problema con un mando y lo solucionaron sin preguntas.', date:'hace 1 mes',    product:'Xbox Series X',       color:'#22c55e' },
  { name:'Marta F.',    stars:5, text:'Compré unas gafas smart y parecen nuevas. El vendedor fue muy honesto describiendo el estado. Repetiré sin duda.', date:'hace 1 mes',    product:'Gafas Ray-Ban Meta', color:'#ff2d2d' },
  { name:'Roberto A.',  stars:5, text:'Excelente trato y rapidez. La cámara llegó en 24h y el embalaje era perfecto. Muy satisfecho con la compra.', date:'hace 6 semanas', product:'Sony Alpha A7 III',   color:'#22c55e' },
  { name:'Elena V.',    stars:4, text:'Buena compra: todo correcto y el dispositivo funcionaba perfecto. Solo le pongo 4 estrellas por el tiempo de entrega, pero repetiría.', date:'hace 2 meses',  product:'iPhone 14',           color:'#ff2d2d' },
];

/* ================================================================
   HELPER: renderizar tarjeta de producto
================================================================ */
function productCard(p) {
  const waMsg  = encodeURIComponent(`Hola! Me interesa el ${p.name} por ${p.price}€. ¿Sigue disponible?`);
  const waLink = `https://wa.me/640123470?text=${waMsg}`;
  const catLabels = {
    movil:'Móviles',
    consola:'Consolas',
    reloj:'Relojes',
    drone:'Drones',
    camara:'Cámaras',
    ipad:'iPads',
    videojuego:'Videojuegos',
    gafas:'Gafas',
  };

  return `
    <div class="product-card">
      <div class="product-img-container">
        <img src="${p.image}" alt="${p.name}" class="product-real-img" loading="lazy" />
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
