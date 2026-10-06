# Imágenes del sitio de Lumos Fotografía

Contiene los `.webp` optimizados que usa el recorrido sección por sección
(`components/sections/fotografos/tour.tsx`) y el caso de estudio.

## Flujo de trabajo

1. Poné las capturas originales en **`assets/lumos/`** (raíz del repo, fuera de
   `public/`, para que no se desplieguen).
2. Corré el script:

   ```bash
   npm run optimize:images
   ```

   Opciones: `--width 1920 --quality 80 --force` (por defecto salta las que ya
   existen).

3. Los `.webp` salen en **`public/images/lumos/`** listos para usar.

## Archivos actuales

| Archivo | Sección |
| --- | --- |
| `coberturas-bodas.webp` | Coberturas · Bodas y Casamientos |
| `coberturas-xv.webp` | Coberturas · XV Años |
| `coberturas-cumpleanos.webp` | Coberturas · Cumpleaños y Festejos |
| `coberturas-bautismos.webp` | Coberturas · Bautismos & Primer Año |
| `coberturas-egresados.webp` | Coberturas · Egresados & Graduaciones |
| `servicios.webp` | Servicios & Planes |
| `sports.webp` | Lumos Sports (deportes) |
| `sobre-mi.webp` | Quién está detrás |
| `testimonios.webp` | Testimonios |
| `contacto.webp` | Contacto / Reserva |
| `galeria-bodas.webp` | Galería · Bodas |
| `galeria-xv.webp` | Galería · XV Años |
| `galeria-festejos.webp` | Galería · Festejos |

> La portada del recorrido usa `public/images/lumosfotografia.webp`.
