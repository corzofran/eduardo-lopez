# Landing personal: Daniel Eduardo López Díaz

Landing page en HTML, CSS y JavaScript puro, sin dependencias ni paso de compilación.
Abre `index.html` en el navegador y funciona.

## Estructura

```
landing-eduardo/
├── index.html
└── src/
    ├── assets/
    │   ├── icons/          favicon
    │   └── images/         coloca aquí tu foto u otras imágenes
    ├── styles/
    │   ├── main.css        punto de entrada (@import en orden)
    │   ├── base/           tokens, reset, tipografía, utilidades, animaciones
    │   ├── layout/         contenedor, header, footer, columnas
    │   ├── components/     botón, chip, tuner, proyecto, datos
    │   └── sections/       hero, herramientas, contacto
    └── scripts/
        ├── main.js         arranque de la app
        ├── core/           tema inicial, helpers de DOM, storage
        └── features/       selector de tema, menú móvil
```

## Convenciones

- **Tokens primero:** colores, tipografía y espacios viven en `styles/base/tokens.css`. Para cambiar la identidad visual, edita solo ese archivo.
- **BEM** para nombrar clases (`bloque__elemento--modificador`).
- **Un archivo, una responsabilidad**, tanto en CSS como en JS.
- **Módulos con IIFE y un único espacio de nombres** (`window.Portfolio`), para que funcione abriendo el archivo directamente.
- **Accesibilidad:** enlace para saltar al contenido, foco visible, `prefers-reduced-motion` respetado, contraste revisado en cada acento.
- **Mejora progresiva:** todo el contenido está en el HTML; el JS solo agrega el selector de tema y el menú móvil.

## Personalizar

- Textos y proyectos: `index.html`.
- Acentos de color: `styles/base/tokens.css` (bloques `[data-accent]`) y `styles/components/tuner.css` (muestras).
- Foto de perfil: guárdala en `src/assets/images/` y agrégala donde la necesites.
