/**
 * Piezas del tema del organizador que necesitan viajar entre el servidor y el
 * cliente. Este módulo NO lleva "use client" a propósito: así el layout (un
 * Server Component) puede importar el script de arranque sin cruzar el límite
 * de componente cliente.
 */

export type ThemeChoice = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "organizacion:theme";

/**
 * Script bloqueante que aplica el tema antes del primer paint para evitar el
 * "flash" de tema incorrecto al cargar.
 */
export const themeInitScript = `(function(){try{var k=${JSON.stringify(
  THEME_STORAGE_KEY,
)};var v=localStorage.getItem(k);var r=(v==="light"||v==="dark")?v:((window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)?"dark":"light");document.documentElement.dataset.cu=r;}catch(e){document.documentElement.dataset.cu="light";}})();`;
