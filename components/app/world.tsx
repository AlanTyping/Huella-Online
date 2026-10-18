"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";
import {
  applyScene,
  normalizeScene,
  DEFAULT_SCENE,
  SCENE_STORAGE_KEY,
  type SceneId,
} from "@/lib/organizacion/world";

type WorldContextValue = {
  /** Escena de fondo activa. */
  scene: SceneId;
  setScene: (scene: SceneId) => void;
};

const WorldContext = createContext<WorldContextValue | null>(null);

/**
 * Mismo patrón que el tema y el color de fondo: la escena vive en localStorage
 * (sistema externo) y se lee con `useSyncExternalStore` para evitar renders en
 * cascada y mismatches de hidratación.
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

function readStoredScene(): SceneId {
  try {
    return normalizeScene(window.localStorage.getItem(SCENE_STORAGE_KEY));
  } catch {
    return DEFAULT_SCENE;
  }
}

export function WorldProvider({ children }: { children: React.ReactNode }) {
  const scene = useSyncExternalStore(subscribe, readStoredScene, () => {
    // En el servidor asumimos la escena por defecto (el script de arranque
    // corrige antes del primer paint si el usuario eligió otra).
    return DEFAULT_SCENE;
  });

  useEffect(() => {
    applyScene(scene);
  }, [scene]);

  // Al salir del organizador el documento vuelve a su estado normal.
  useEffect(() => {
    return () => {
      delete document.documentElement.dataset.cuScene;
    };
  }, []);

  const setScene = useCallback((next: SceneId) => {
    try {
      window.localStorage.setItem(SCENE_STORAGE_KEY, next);
    } catch {
      /* almacenamiento no disponible */
    }
    emit();
  }, []);

  return (
    <WorldContext.Provider value={{ scene, setScene }}>
      {children}
    </WorldContext.Provider>
  );
}

export function useWorld() {
  const ctx = useContext(WorldContext);
  if (!ctx) throw new Error("useWorld debe usarse dentro de <WorldProvider>");
  return ctx;
}
