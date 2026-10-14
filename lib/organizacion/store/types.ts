import type { BaseRecord } from "../types";

export type { BaseRecord };

/** Colecciones disponibles en el organizador. */
export type Collection =
  | "tasks"
  | "notes"
  | "habits"
  | "events"
  | "focusSessions";

export type StoreMode = "local" | "cloud";

export type Unsubscribe = () => void;

/**
 * Contrato único que consume toda la UI. Hay dos implementaciones:
 *  - `createLocalStore()` → IndexedDB, gratis, sin cuenta, offline.
 *  - `createCloudStore(uid)` → Firestore, requiere cuenta + plan pago.
 *
 * La UI nunca sabe cuál está activo: sólo pide datos y escucha cambios.
 */
export interface OrganizacionStore {
  readonly mode: StoreMode;

  /** Se llama ahora y en cada cambio, con la colección completa y ordenada. */
  subscribe(
    collection: Collection,
    onChange: (records: BaseRecord[]) => void,
    onError?: (error: Error) => void,
  ): Unsubscribe;

  /** Colección completa (para exportar/backup). */
  list(collection: Collection): Promise<BaseRecord[]>;

  /** Crea un registro y devuelve su id. */
  create(collection: Collection, data: Record<string, unknown>): Promise<string>;

  update(
    collection: Collection,
    id: string,
    patch: Record<string, unknown>,
  ): Promise<void>;

  remove(collection: Collection, id: string): Promise<void>;

  /** Reinserta un registro con su id original (para "deshacer" un borrado). */
  restore(collection: Collection, record: BaseRecord): Promise<void>;
}

/** Campo por el que se ordenan las colecciones (descendente). */
export const ORDER_FIELD = "createdAt" as const;
