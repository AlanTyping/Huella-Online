"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useAuth } from "@/lib/firebase/auth";
import {
  getLocalStore,
  type OrganizacionStore,
  type StoreMode,
} from "@/lib/organizacion/store";

const StoreContext = createContext<OrganizacionStore | null>(null);

/**
 * Elige el motor de guardado. Sin cuenta usa el local (gratis) y de forma
 * sincrónica, para que la app arranque al instante. El motor en la nube se
 * importa de forma dinámica sólo si hay sesión, así el SDK de Firebase no viaja
 * en el bundle inicial.
 */
export function StoreProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [cloud, setCloud] = useState<{
    uid: string;
    store: OrganizacionStore;
  } | null>(null);

  useEffect(() => {
    if (!user) return;

    let cancelled = false;
    import("@/lib/organizacion/store/cloud")
      .then(({ createCloudStore }) => {
        if (cancelled) return;
        setCloud({ uid: user.uid, store: createCloudStore(user.uid) });
      })
      .catch(() => {
        /* si falla, seguimos en local */
      });

    return () => {
      cancelled = true;
    };
  }, [user]);

  const store = useMemo<OrganizacionStore>(
    () => (user && cloud?.uid === user.uid ? cloud.store : getLocalStore()),
    [user, cloud],
  );

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export function useStore(): OrganizacionStore {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore debe usarse dentro de <StoreProvider>");
  return ctx;
}

export function useStoreMode(): StoreMode {
  return useStore().mode;
}
