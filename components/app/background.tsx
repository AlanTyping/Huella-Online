"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";
import {
  applyBackground,
  normalizeHex,
  BACKGROUND_STORAGE_KEY,
  type BackgroundValue,
} from "@/lib/organizacion/background";

type BackgroundContextValue = {
  /** Hex elegido por el usuario, o `null` si usa el fondo del tema. */
  background: BackgroundValue;
  setBackground: (value: BackgroundValue) => void;
};

const BackgroundContext = createContext<BackgroundContextValue | null>(null);

/**
 * Igual que el tema: la preferencia vive en localStorage (sistema externo), así
 * que la leemos con `useSyncExternalStore` en vez de espejarla en un estado con
 * efectos. Eso evita renders en cascada y mismatches de hidratación.
 */
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function readStoredBackground(): BackgroundValue {
  try {
    return normalizeHex(
      window.localStorage.getItem(BACKGROUND_STORAGE_KEY) ?? "",
    );
  } catch {
    return null;
  }
}

export function BackgroundProvider({ children }: { children: React.ReactNode }) {
  const background = useSyncExternalStore(
    subscribe,
    readStoredBackground,
    () => null,
  );

  // Refleja el fondo en el documento (sistema externo, no estado de React).
  useEffect(() => {
    applyBackground(background);
  }, [background]);

  // Al salir del organizador el documento vuelve a su fondo normal.
  useEffect(() => {
    return () => applyBackground(null);
  }, []);

  const setBackground = useCallback((value: BackgroundValue) => {
    try {
      if (value) {
        window.localStorage.setItem(BACKGROUND_STORAGE_KEY, value);
      } else {
        window.localStorage.removeItem(BACKGROUND_STORAGE_KEY);
      }
    } catch {
      /* almacenamiento no disponible */
    }
    emit();
  }, []);

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const ctx = useContext(BackgroundContext);
  if (!ctx) {
    throw new Error("useBackground debe usarse dentro de <BackgroundProvider>");
  }
  return ctx;
}
