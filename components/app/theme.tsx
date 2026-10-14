"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";
import {
  THEME_STORAGE_KEY,
  type ResolvedTheme,
  type ThemeChoice,
} from "@/lib/organizacion/theme";

export type { ResolvedTheme, ThemeChoice };

type ThemeContextValue = {
  /** Preferencia elegida por el usuario. */
  theme: ThemeChoice;
  /** Tema efectivo (nunca "system"). */
  resolved: ResolvedTheme;
  setTheme: (theme: ThemeChoice) => void;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * El tema vive en un sistema externo (localStorage + preferencia del SO), así
 * que lo leemos con `useSyncExternalStore` en lugar de espejarlo en un estado
 * con efectos: eso evita renders en cascada y mismatches de hidratación.
 */
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    mq.removeEventListener("change", onChange);
    window.removeEventListener("storage", onChange);
  };
}

function readStoredTheme(): ThemeChoice {
  try {
    const value = window.localStorage.getItem(THEME_STORAGE_KEY);
    return value === "light" || value === "dark" || value === "system"
      ? value
      : "system";
  } catch {
    return "system";
  }
}

function resolveTheme(choice: ThemeChoice): ResolvedTheme {
  if (choice !== "system") return choice;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    subscribe,
    readStoredTheme,
    () => "system" as ThemeChoice,
  );
  const resolved = useSyncExternalStore(
    subscribe,
    () => resolveTheme(readStoredTheme()),
    () => "light" as ResolvedTheme,
  );

  // Refleja el tema en el documento (sistema externo, no estado de React).
  useEffect(() => {
    document.documentElement.dataset.cu = resolved;
  }, [resolved]);

  // Al salir del organizador devolvemos el documento al tema del sitio.
  useEffect(() => {
    return () => {
      delete document.documentElement.dataset.cu;
    };
  }, []);

  const setTheme = useCallback((choice: ThemeChoice) => {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, choice);
    } catch {
      /* almacenamiento no disponible */
    }
    emit();
  }, []);

  const toggle = useCallback(() => {
    setTheme(resolved === "dark" ? "light" : "dark");
  }, [resolved, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, resolved, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme debe usarse dentro de <ThemeProvider>");
  return ctx;
}
