"use client";

import { useEffect, useState } from "react";
import type { BaseRecord, Collection } from "@/lib/organizacion/store";
import { useStore } from "./store-provider";

export type UseCollectionResult<T> = {
  records: T[];
  loading: boolean;
  error: string | null;
};

/**
 * Suscripción a una colección del motor activo (local o nube). Devuelve la
 * colección completa, ordenada y siempre al día.
 */
export function useCollection<T extends BaseRecord>(
  collection: Collection,
): UseCollectionResult<T> {
  const store = useStore();
  const key = `${store.mode}:${collection}`;

  const [data, setData] = useState<{
    key: string;
    records: T[];
    error: string | null;
  } | null>(null);

  useEffect(() => {
    return store.subscribe(
      collection,
      (records) => setData({ key, records: records as T[], error: null }),
      (error) => setData({ key, records: [], error: error.message }),
    );
  }, [store, collection, key]);

  // Mientras no llegue la primera emisión (o cambie el motor) seguimos cargando.
  if (!data || data.key !== key) {
    return { records: [], loading: true, error: null };
  }

  return { records: data.records, loading: false, error: data.error };
}
