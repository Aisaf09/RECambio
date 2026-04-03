# RECambio — Segunda vida para tu tecnología

Sitio web completo para tienda de tecnología reacondicionada. Diseño premium minimalista con estética dark + acentos rojo (acciones) y verde (eco).

## 📁 Estructura de archivos

```
techstore/
├── index.html     ← Estructura completa del sitio (6 secciones)
├── style.css      ← Estilos premium con variables CSS
├── app.js         ← Toda la lógica interactiva
└── README.md
```

## 🚀 Cómo ejecutar

### Opción 1 — Directamente en el navegador
Abre `index.html` en cualquier navegador moderno. No requiere servidor.

### Opción 2 — Con servidor local (recomendado)
```bash
# Con Python (viene preinstalado en Mac/Linux)
python3 -m http.server 3000

# Con Node.js
npx serve .

# Con VS Code
Instala "Live Server" extension → clic derecho en index.html → "Open with Live Server"
```

Luego abre: `http://localhost:3000`

## 🎨 Personalización

### Cambiar datos del negocio
En `data.js`, edita:
- `PRODUCTS` — tu catálogo de productos
- `REVIEWS` — reseñas de clientes
- Número de WhatsApp: busca `34600000000` y cambia por el tuyo

### Cambiar colores
En `style.css`, edita las variables CSS en `:root`:
```css
--blue: #ff2d2d;      /* Color de acento (rojo) */
--green: #22c55e;     /* Acento secundario (verde) */
--bg: #000000;        /* Fondo principal */
```

### Conectar formularios
Los formularios simulan envío. Para conectarlos:
- **Formspree**: `<form action="https://formspree.io/f/TUCODIGO">`
- **EmailJS**: Añade el SDK y usa `emailjs.send()`
- **WhatsApp directo**: cambia `href="https://wa.me/34TUNUMERO"`

### Links reales de Wallapop
En `app.js`, en cada producto:
```js
wallapop: 'https://es.wallapop.com/item/TU-PRODUCTO-ID'
```

## 📱 Páginas incluidas
- **#inicio** — Hero con CTA, estadísticas, mockup animado
- **#catalogo** — Grid filtrable de 12 productos + banner Wallapop
- **#nosotros** — Historia, valores, marcas
- **#resenas** — 6 reseñas de clientes con avatares
- **#tasacion** — Formulario de tasación con drag & drop de fotos
- **#contacto** — Formulario + WhatsApp + redes sociales

## ⚙️ Características técnicas
- HTML5 semántico, SEO-friendly
- CSS puro (sin frameworks), variables CSS, glassmorphism
- JS vanilla (sin dependencias)
- Intersection Observer para animaciones
- Fully responsive (mobile, tablet, desktop)
- Navbar sticky con blur
- Loader animado
- Filtro de catálogo por categoría
- Preview de imágenes en tasación
- Botón flotante de WhatsApp
- Parallax suave en hero
