"use client";

import { newId } from "./id";
import type {
  BaseRecord,
  Collection,
  OrganizacionStore,
  Unsubscribe,
} from "./types";

/**
 * Motor local (gratis, sin cuenta): los datos viven en IndexedDB del
 * dispositivo. No hay red, no hay registro, no hay límites.
 *
 * Mantenemos una caché en memoria por colección para poder emitir cambios
 * sincrónicamente y para que la UI responda al instante.
 */

const DB_NAME = "huella-organizacion";
const DB_VERSION = 1;

const COLLECTIONS: Collection[] = [
  "tasks",
  "notes",
  "habits",
  "events",
  "focusSessions",
];

let dbPromise: Promise<IDBDatabase> | null = null;

function openDb(): Promise<IDBDatabase> {
  if (typeof indexedDB === "undefined") {
    return Promise.reject(new Error("Este navegador no soporta IndexedDB."));
  }
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      for (const name of COLLECTIONS) {
        if (!db.objectStoreNames.contains(name)) {
          db.createObjectStore(name, { keyPath: "id" });
        }
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () =>
      reject(request.error ?? new Error("No pudimos abrir la base local."));
  });

  return dbPromise;
}

function withStore<T>(
  collection: Collection,
  mode: IDBTransactionMode,
  run: (store: IDBObjectStore) => IDBRequest<T>,
): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const transaction = db.transaction(collection, mode);
        const request = run(transaction.objectStore(collection));
        request.onsuccess = () => resolve(request.result);
        request.onerror = () =>
          reject(request.error ?? new Error("Error de IndexedDB."));
      }),
  );
}

function byCreatedDesc(a: BaseRecord, b: BaseRecord) {
  return b.createdAt - a.createdAt;
}

type Listener = {
  collection: Collection;
  onChange: (records: BaseRecord[]) => void;
  onError?: (error: Error) => void;
};

function createLocalStore(): OrganizacionStore {
  const listeners = new Set<Listener>();
  const cache = new Map<Collection, BaseRecord[]>();
  const loading = new Map<Collection, Promise<BaseRecord[]>>();

  // Sincronización entre pestañas: IndexedDB no dispara eventos, así que nos
  // avisamos por BroadcastChannel cuando una pestaña escribe.
  const channel =
    typeof BroadcastChannel !== "undefined"
      ? new BroadcastChannel("huella-organizacion")
      : null;

  function broadcast(collection: Collection) {
    channel?.postMessage({ collection });
  }

  async function load(collection: Collection): Promise<BaseRecord[]> {
    const inFlight = loading.get(collection);
    if (inFlight) return inFlight;

    const promise = withStore<BaseRecord[]>(collection, "readonly", (store) =>
      store.getAll(),
    )
      .then((records) => {
        const sorted = [...records].sort(byCreatedDesc);
        cache.set(collection, sorted);
        return sorted;
      })
      .finally(() => loading.delete(collection));

    loading.set(collection, promise);
    return promise;
  }

  function emit(collection: Collection) {
    const records = cache.get(collection);
    if (!records) return;
    for (const listener of listeners) {
      if (listener.collection === collection) {
        listener.onChange([...records].sort(byCreatedDesc));
      }
    }
  }

  /** Recarga desde IndexedDB (ignorando la caché) y avisa a los suscriptores. */
  async function refresh(collection: Collection) {
    loading.delete(collection);
    await load(collection);
    emit(collection);
  }

  channel?.addEventListener("message", (event: MessageEvent) => {
    const collection = (event.data as { collection?: Collection })?.collection;
    if (!collection) return;
    refresh(collection).catch(() => {
      /* si falla, la próxima escritura local vuelve a sincronizar */
    });
  });

  return {
    mode: "local",

    list(collection) {
      return load(collection);
    },

    subscribe(collection, onChange, onError): Unsubscribe {
      const listener: Listener = { collection, onChange, onError };
      listeners.add(listener);

      load(collection)
        .then((records) => onChange([...records].sort(byCreatedDesc)))
        .catch((error: Error) => onError?.(error));

      return () => {
        listeners.delete(listener);
      };
    },

    async create(collection, data) {
      const now = Date.now();
      const record: BaseRecord = { ...data, id: newId(), createdAt: now, updatedAt: now };
      await withStore(collection, "readwrite", (store) => store.put(record));

      const records = cache.get(collection) ?? (await load(collection));
      cache.set(collection, [record, ...records]);
      emit(collection);
      broadcast(collection);
      return record.id;
    },

    async update(collection, id, patch) {
      const records = cache.get(collection) ?? (await load(collection));
      const existing = records.find((record) => record.id === id);
      if (!existing) return;

      const next = { ...existing, ...patch, id, updatedAt: Date.now() };
      await withStore(collection, "readwrite", (store) => store.put(next));
      cache.set(
        collection,
        records.map((record) => (record.id === id ? next : record)),
      );
      emit(collection);
      broadcast(collection);
    },

    async remove(collection, id) {
      await withStore(collection, "readwrite", (store) => store.delete(id));
      const records = cache.get(collection) ?? [];
      cache.set(
        collection,
        records.filter((record) => record.id !== id),
      );
      emit(collection);
      broadcast(collection);
    },

    async restore(collection, record) {
      await withStore(collection, "readwrite", (store) => store.put(record));
      const records = cache.get(collection) ?? (await load(collection));
      const exists = records.some((item) => item.id === record.id);
      cache.set(
        collection,
        exists
          ? records.map((item) => (item.id === record.id ? record : item))
          : [record, ...records],
      );
      emit(collection);
      broadcast(collection);
    },
  };
}

let sharedStore: OrganizacionStore | null = null;

/** Instancia compartida: una sola conexión y caché para toda la app. */
export function getLocalStore(): OrganizacionStore {
  if (!sharedStore) sharedStore = createLocalStore();
  return sharedStore;
}
