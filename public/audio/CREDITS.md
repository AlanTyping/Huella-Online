# Créditos de audio

Pistas usadas por el organizador para el sonido ambiente de la sección
**Enfoque**. Todas son de **uso comercial permitido**. Ninguna requiere pago.

Origen: [Wikimedia Commons](https://commons.wikimedia.org). Se descargaron las
versiones MP3 (soporte universal en todos los navegadores) que Wikimedia genera
automáticamente a partir del archivo original.

| Archivo local         | Obra original                     | Autor  | Licencia        | Duración |
| --------------------- | --------------------------------- | ------ | --------------- | -------- |
| `lluvia-ventana.mp3`  | Rain against the window.ogg       | cori   | Dominio público | 1:22     |
| `lluvia-terraza.mp3`  | Rain on a veranda and t.ogg       | ezwa   | Dominio público | 0:30     |
| `tormenta.mp3`        | Rain and thunder (1).ogg          | ezwa   | Dominio público | 1:00     |
| `olas.mp3`            | Oceanwavescrushing.ogg            | Luftrum| CC BY 3.0       | 2:00     |
| `ruido-marron.mp3`    | Brown noise 15-00 69kbps.mp3      | JPxG   | CC0             | 15:00    |

## Obligaciones de cada licencia

- **Dominio público** y **CC0**: uso libre, comercial incluido, **sin
  atribución**. No hay obligaciones.
- **CC BY 3.0** (`olas.mp3`, autor Luftrum): permite uso comercial, pero **exige
  dar crédito**. Por eso la atribución aparece también en la interfaz, debajo del
  selector de sonido, además de esta tabla.

## Enlaces de origen

- https://commons.wikimedia.org/wiki/File:Rain_against_the_window.ogg
- https://commons.wikimedia.org/wiki/File:Rain_on_a_veranda_and_t.ogg
- https://commons.wikimedia.org/wiki/File:Rain_and_thunder_(1).ogg
- https://commons.wikimedia.org/wiki/File:Oceanwavescrushing.ogg
- https://commons.wikimedia.org/wiki/File:Brown_noise_15-00_69kbps.mp3

## Notas técnicas

- Se reproduce con Web Audio (`decodeAudioData`) para que el loop no tenga
  costura y el volumen haga fundidos suaves.
- Las pistas **no se descargan hasta que se presiona play** (carga diferida).
- Peso total: ~16 MB. `ruido-marron.mp3` es el más pesado (10 MB) porque son 15
  minutos de audio; si pesa demasiado para móvil, conviene reemplazarlo.

## Cómo reemplazar o sumar pistas

1. Descargá el archivo (MP3 preferentemente) desde una fuente con licencia clara
   para uso comercial: Wikimedia Commons (dominio público / CC0 / CC BY),
   Pixabay Audio (libre, sin atribución) o Freesound filtrando por CC0.
   **Evitá licencias Non-Commercial (NC)**, porque el sitio es comercial.
2. Guardalo en `public/audio/`.
3. Agregalo a la lista en `lib/organizacion/audio.ts` (`AMBIENT_SOUNDS`).
4. Anotá acá: obra, autor, licencia y duración. Si la licencia exige crédito,
   agregalo también en la interfaz.
