/**
 * Color de fondo personalizado del organizador.
 *
 * El usuario puede elegir un pastel de la lista o cualquier color propio. El
 * valor se guarda como un hex en localStorage y se aplica como variable CSS
 * `--cu-bg` en el <html>: las superficies y el color de texto se derivan por
 * luminancia (ver `:root[data-cu-bg]` en globals.css), así que el contenido
 * siempre queda legible, sea el fondo claro u oscuro.
 *
 * Este módulo NO lleva "use client": así el layout (Server Component) puede
 * importar el script de arranque sin cruzar el límite de componente cliente.
 */

export const BACKGROUND_STORAGE_KEY = "organizacion:background";

/** Hex `#rrggbb` o `null` para usar el fondo por defecto del tema. */
export type BackgroundValue = string | null;

/** Convierte `#abc`, `abc`, `#aabbcc`… a `#aabbcc` minúscula. `null` si no es válido. */
export function normalizeHex(input: string): string | null {
  const match = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(input.trim());
  if (!match) return null;
  let hex = match[1].toLowerCase();
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }
  return `#${hex}`;
}

/** Luminancia relativa WCAG. Devuelve true si el color pide texto oscuro. */
export function isLightColor(input: string): boolean {
  const hex = normalizeHex(input);
  if (!hex) return true;

  const channel = (value: number) => {
    const ratio = value / 255;
    return ratio <= 0.03928 ? ratio / 12.92 : ((ratio + 0.055) / 1.055) ** 2.4;
  };
  const at = (offset: number) =>
    channel(parseInt(hex.slice(offset, offset + 2), 16));

  const luminance =
    0.2126 * at(1) + 0.7152 * at(3) + 0.0722 * at(5);
  return luminance >= 0.5;
}

/**
 * Refleja (o limpia) el fondo personalizado en el documento. Es idempotente:
 * llamarla con el mismo valor no cambia nada y llamarla con `null` deja el
 * documento como si nunca se hubiera personalizado.
 */
export function applyBackground(value: BackgroundValue): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const hex = value ? normalizeHex(value) : null;

  if (!hex) {
    root.style.removeProperty("--cu-bg");
    root.style.removeProperty("color-scheme");
    delete root.dataset.cuBg;
    return;
  }

  const light = isLightColor(hex);
  root.style.setProperty("--cu-bg", hex);
  root.dataset.cuBg = light ? "light" : "dark";
  root.style.colorScheme = light ? "light" : "dark";
}

/** Paleta de pasteles sugerida en Ajustes. */
export const PASTEL_PRESETS: { label: string; value: string }[] = [
  { label: "Menta", value: "#e7f5ec" },
  { label: "Cielo", value: "#e8f1fb" },
  { label: "Lavanda", value: "#eee9fb" },
  { label: "Rosa", value: "#fbe9f1" },
  { label: "Durazno", value: "#fdeee1" },
  { label: "Arena", value: "#f7f1e6" },
  { label: "Niebla", value: "#f0f0f4" },
];

/**
 * Script bloqueante que aplica el fondo guardado antes del primer paint, para
 * que no haya un parpadeo del color por defecto al cargar.
 */
export const backgroundInitScript = `(function(){try{var k=${JSON.stringify(
  BACKGROUND_STORAGE_KEY,
)};var raw=localStorage.getItem(k);if(!raw)return;var m=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(raw.trim());if(!m)return;var h=m[1].toLowerCase();if(h.length===3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];function f(c){c/=255;return c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4);}var r=f(parseInt(h.slice(0,2),16)),g=f(parseInt(h.slice(2,4),16)),b=f(parseInt(h.slice(4,6),16));var dark=(0.2126*r+0.7152*g+0.0722*b)<0.5;var el=document.documentElement;el.style.setProperty("--cu-bg","#"+h);el.dataset.cuBg=dark?"dark":"light";el.style.colorScheme=dark?"dark":"light";}catch(e){}})();`;
