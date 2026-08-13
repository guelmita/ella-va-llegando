# Ella va llegando

Sitio web del proyecto "Ella va llegando" — escritos, cartas y canciones.

Construido con [Eleventy](https://www.11ty.dev/) (genera HTML puro, sin costos de servidor) y editable a través de un panel visual en `/admin` (Decap CMS).

## Desarrollo local (opcional)

No es necesario para publicar el sitio ni para escribir artículos — eso se hace desde `/admin`. Esto es solo si en algún momento quieres ver los cambios en tu propia computadora antes de subirlos.

```
npm install
npm run start
```

Abre `http://localhost:8080`.

## Estructura

- `content/escritos/` — un archivo por escrito (así los agrega también el panel `/admin`).
- `content/pages/sobre.md` — el texto de la página "Sobre".
- `_includes/` — las plantillas de diseño (no hace falta tocarlas).
- `css/style.css` — colores y tipografía de la marca.
- `admin/` — el panel visual de edición.

Guía completa de publicación gratuita: ver `GUIA-PUBLICAR.md`.
