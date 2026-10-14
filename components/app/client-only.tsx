"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * true sólo después de hidratar en el cliente.
 *
 * Se usa para no renderizar contenido que depende de la hora o de la fecha
 * durante el SSR: la página `/organizacion` es estática y, si el saludo o la
 * fecha se generan en el build, al día siguiente el HTML queda viejo y React
 * marca un error de hidratación.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

export function ClientOnly({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const mounted = useMounted();
  return <>{mounted ? children : fallback}</>;
}
