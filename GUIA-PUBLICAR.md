# Guía: publicar "Ella va llegando" gratis

Tres servicios gratuitos, sin tarjeta de crédito:

- **GitHub** — guarda el código del sitio (como un Google Drive para código).
- **Netlify** — toma ese código y lo publica en internet, con una dirección propia (`algo.netlify.app`).
- **Panel `/admin`** — donde vas a escribir y subir fotos de ahora en adelante. Una vez configurado, no necesitas volver a tocar código.

Configuración inicial: ~25-30 minutos, una sola vez. Después, publicar un escrito nuevo toma 2 minutos.

---

## Paso 1 — Crear cuenta en GitHub

1. Ve a [github.com](https://github.com) → **Sign up**.
2. Usa tu correo, elige usuario y contraseña, verifica el correo.

## Paso 2 — Subir el sitio a un repositorio

1. Ya adentro, clic en **+** (arriba a la derecha) → **New repository**.
2. Nombre: `ella-va-llegando`. Déjalo **Public**. No marques ninguna casilla de "Add README" (ya tenemos uno). Clic **Create repository**.
3. En la página del repo vacío, clic en el enlace **uploading an existing file**.
4. Descomprime el archivo `.zip` que te entregué en tu computadora. Abre la carpeta `ella-va-llegando` y **arrastra todo su contenido** (todos los archivos y subcarpetas: `content`, `admin`, `css`, `_includes`, `index.njk`, `package.json`, etc.) a la zona de carga de GitHub.
5. Espera a que termine de subir → escribe un mensaje como "Primera versión" → **Commit changes**.

No necesitas instalar nada en tu computadora para este paso.

## Paso 3 — Crear cuenta en Netlify y publicar

1. Ve a [netlify.com](https://netlify.com) → **Sign up** → elige **Sign up with GitHub** (así quedan conectados automáticamente).
2. En el panel de Netlify: **Add new site** → **Import an existing project** → **Deploy with GitHub**.
3. Autoriza el acceso y selecciona el repositorio `ella-va-llegando`.
4. Netlify va a detectar solo el comando de construcción y la carpeta de salida (vienen ya configurados en `netlify.toml`). Solo clic en **Deploy site**.
5. Espera 1-2 minutos. Cuando termine, Netlify te da una dirección tipo `nombre-al-azar.netlify.app` — ese ya es tu sitio, en vivo.

**Opcional:** en *Site settings → Change site name*, puedes cambiar `nombre-al-azar` por algo como `ella-va-llegando` (si está disponible), gratis, sin necesidad de comprar un dominio.

## Paso 4 — Activar el panel de edición (`/admin`)

Esto conecta el panel visual con tu repositorio de GitHub para que puedas escribir sin tocar código.

1. En el panel de Netlify de tu sitio: **Site configuration → Identity** → **Enable Identity**.
2. Baja a **Registration** → cámbialo a **Invite only** (para que solo tú puedas entrar a escribir).
3. Baja a **Services → Git Gateway** → **Enable Git Gateway**.
4. Ve a la pestaña **Identity** (arriba) → **Invite users** → escribe tu correo → **Send**.
5. Revisa tu correo, entra al enlace de invitación y crea tu contraseña.

## Paso 5 — Escribir tu primer escrito desde el panel

1. Entra a `https://tu-sitio.netlify.app/admin/` e inicia sesión con el correo y la contraseña que creaste.
2. Verás dos secciones: **Escritos** y **Páginas**.
3. Clic en **Escritos → New Escritos**. Llena título, fecha, categoría, extracto, arrastra una foto si quieres, y escribe el cuerpo.
4. Clic en **Publish** (arriba a la derecha). En 30-60 segundos el escrito ya está en vivo en tu sitio.

Los 6 escritos que ya tenías del diseño original quedaron migrados — 5 de ellos todavía tienen un texto de relleno (`[Texto completo del escrito.]`) porque en el diseño original tampoco estaban escritos. Ábrelos en el panel y reemplaza ese texto por el real cuando lo tengas. Ya puedes agregarles foto a los 6 desde ahí mismo.

Para editar el texto de la página "Sobre", usa **Páginas → Sobre**.

---

## Cosas que ya vienen resueltas

- **Los formularios de correo** (en "Cartas" y en el pie de página) funcionan solos apenas publicas en Netlify — no necesitas ningún servicio externo. Las direcciones que la gente deje aparecen en tu panel de Netlify, en *Forms* (gratis hasta 100 al mes).
- **Cada cambio queda guardado con historial** — como Google Docs. Si algo se ve mal, siempre puedes volver a una versión anterior desde GitHub.
- **Nada de esto tiene costo** mientras el sitio sea de tráfico normal de un blog personal (los límites gratis de Netlify son generosos: 100 GB de tráfico al mes, más que suficiente para empezar).

## Si más adelante quieres un dominio propio

Por ejemplo `ellavallegando.com` en vez de `algo.netlify.app`. Eso sí tiene un costo (aprox. 10-15 USD al año, se compra en un registrador como Namecheap) y se conecta a Netlify en un par de pasos desde *Domain settings*. No es necesario para empezar.

## Si te trabas en algún paso

Vuelve a esta conversación y dime en qué paso estás y qué ves en pantalla — puedo ayudarte a resolverlo desde aquí.
