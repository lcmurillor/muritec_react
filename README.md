# Muritec · Web en React

Sitio de servicios tecnológicos de Muritec, Tilarán, Costa Rica. Migración del contenido Flutter a una web React 19 + Vite 7, sin PWA, backend ni dependencias adicionales.

## Desarrollo

Requiere Node.js 22.12 o posterior y npm.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`dist/` es la web estática lista para subir al alojamiento. `npm run lint` revisa el código.

Si npm apunta a una instalación rota en Windows, corrige la instalación/PATH de Node.js. Con las dependencias ya instaladas también puedes ejecutar `node node_modules/vite/bin/vite.js --configLoader native` y `node node_modules/vite/bin/vite.js build --configLoader native`.

## Estructura

```text
src/
  App.jsx                   Composición de la página
  main.jsx                  Entrada de React
  migration.js              Compatibilidad con enlaces y worker de Flutter
  components/               Cabecera, pie, iconos y galería accesible
  sections/                 Inicio, servicios, nosotros, experiencia y contacto
  data/site.js              Servicios, proyectos, contactos y redes
  styles/global.css         Tokens de diseño, componentes y puntos de adaptación
  assets/                   Archivos originales conservados
public/
  images/                   Fotografías WebP en dos tamaños
  favicon.svg               Icono del sitio
  experince/, experience/, contactus/  Compatibilidad de enlaces anteriores
  flutter_service_worker.js Retirada del worker antiguo, no una PWA
```

## Editar contenido

- Contactos, redes, descripciones, servicios y galerías: `src/data/site.js`.
- Textos de portada y presentación: `src/sections/Hero.jsx` y `About.jsx`.
- Colores, tamaños y espaciado: variables y capas en `src/styles/global.css`.
- Añade fotografías en `public/images` con sufijos `-small.webp` y `-large.webp`; agrega sus nombres sin sufijo a `projects`.
- El contacto usa enlaces reales de WhatsApp, `mailto:` y `tel:`. No hay formulario ni envío simulado. La versión fuente de Flutter ya había sustituido su antiguo formulario por estos enlaces.

## Decisiones de la migración

- Una sola página con enlaces a secciones: menos navegación, sin librería de rutas.
- Se conservan los cuatro servicios del proyecto React, la misión, visión, valores y las cinco galerías del proyecto Flutter completo.
- Fotos originales optimizadas a WebP; carga diferida fuera de la portada y tamaños reservados para evitar saltos.
- La galería se carga bajo demanda; utiliza `dialog` nativo, navegación por teclado, Escape y devolución del foco.
- HTML semántico, menú móvil, foco visible, enlace para saltar al contenido y respeto a movimiento reducido.
- Fuentes del sistema: sin descargas de Google Fonts ni peticiones de terceros al cargar la página.
- Metadatos en español e icono propio. No se inventan métricas, testimonios ni clientes.

## Publicar y sustituir Flutter

1. Haz una copia de la publicación Flutter actual.
2. Ejecuta `npm run build` y publica **el contenido de `dist/`** en la raíz de tu dominio. No se ha publicado automáticamente desde este trabajo.
3. Sustituye el `index.html` y retira de la publicación anterior el manifiesto PWA, `flutter.js`, `flutter_bootstrap.js`, `main.dart.js` y `canvaskit/`. No es necesario borrar `.well-known` ni carpetas de otros servicios.
4. Publica el nuevo `flutter_service_worker.js` exactamente en la URL anterior y configura ese archivo con `Cache-Control: no-cache`. Solo sirve para que navegadores con la versión antigua desregistren su worker; no intercepta peticiones ni guarda contenido offline. Consérvalo durante la transición.
5. El sitio React también desregistra únicamente workers Flutter dentro de su propio ámbito. Los datos de otras aplicaciones no se borran. Una visita que ya estaba abierta bajo el worker anterior puede necesitar recarga después de que el navegador aplique su actualización.
6. Los directorios `experince`, `experience` y `contactus` redirigen a las secciones correspondientes. El servidor debe servir `index.html` como documento predeterminado y redirigir directorios sin barra a su variante con barra; es el comportamiento normal de alojamientos estáticos. Los enlaces Flutter con `#/` también se adaptan.
7. Para publicar en una subcarpeta, configura `base: '/nombre/'` en `vite.config.js` antes de compilar. Los recursos usan `BASE_URL`.

No hay registro nuevo de service worker, manifiesto instalable, caché offline ni avisos de instalación. El archivo con nombre Flutter es exclusivamente para retirar la PWA anterior.

### Alojamiento IIS existente

La publicación Flutter contiene un web.config con una regla de proxy para /cloud. Conserva ese archivo y esa regla en el servidor; la nueva web no los reemplaza. Verifica que IIS sirva .webp como image/webp y .svg como image/svg+xml. Configura Cache-Control: no-cache para index.html y flutter_service_worker.js durante la migración.
