/**
 * Paisaje de fondo del organizador.
 *
 * El "mundo" es un SVG pixel fijo detrás de todo (ver `world-backdrop.tsx`).
 * Acá viven las escenas disponibles, su persistencia y el script de arranque:
 * la escena se aplica como `data-cu-scene` en <html> y la paleta se resuelve en
 * CSS, así que cambiar de escena no cuesta ni un render.
 *
 * Este módulo NO lleva "use client": el layout (Server Component) importa el
 * script de arranque sin cruzar el límite de componente cliente.
 */

export const SCENE_STORAGE_KEY = "organizacion:scene";

export type SceneId = "colina" | "atardecer" | "noche" | "liso";

export const DEFAULT_SCENE: SceneId = "colina";

/** Escenas elegibles en Ajustes. `preview` es un fondo CSS para la muestra. */
export const SCENES: { id: SceneId; label: string; preview: string }[] = [
  {
    id: "colina",
    label: "Colina",
    preview: "linear-gradient(180deg, #7ec8f5 0 45%, #57bd74 45% 100%)",
  },
  {
    id: "atardecer",
    label: "Atardecer",
    preview: "linear-gradient(180deg, #ff9e6d 0 45%, #7d4a3a 45% 100%)",
  },
  {
    id: "noche",
    label: "Noche",
    preview: "linear-gradient(180deg, #0a1633 0 45%, #1d5c3a 45% 100%)",
  },
  {
    id: "liso",
    label: "Liso",
    preview: "linear-gradient(180deg, #ffffff 0 50%, #ececef 50% 100%)",
  },
];

export function normalizeScene(value: string | null | undefined): SceneId {
  return value === "colina" ||
    value === "atardecer" ||
    value === "noche" ||
    value === "liso"
    ? value
    : DEFAULT_SCENE;
}

/** Refleja la escena en el documento (atributo `data-cu-scene` en <html>). */
export function applyScene(scene: SceneId): void {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.cuScene = scene;
}

/**
 * Script bloqueante que fija la escena guardada antes del primer paint, para
 * que no se vea el paisaje por defecto si el usuario eligió otro (o "Liso").
 */
export const sceneInitScript = `(function(){try{var k=${JSON.stringify(
  SCENE_STORAGE_KEY,
)};var v=localStorage.getItem(k);var s=(v==="colina"||v==="atardecer"||v==="noche"||v==="liso")?v:"colina";document.documentElement.dataset.cuScene=s;}catch(e){document.documentElement.dataset.cuScene="colina";}})();`;
