"use client";

import type { BaseRecord, Collection, OrganizacionStore } from "./store";

/**
 * Respaldo de los datos. Todo vive en IndexedDB del navegador, así que exportar
 * e importar es lo que protege al usuario de perderlo todo al limpiar el
 * navegador (o al cambiar de dispositivo).
 */

const COLLECTIONS: Collection[] = [
  "tasks",
  "notes",
  "habits",
  "events",
  "focusSessions",
];

export const BACKUP_VERSION = 1;

export type Backup = {
  app: "huella-organizacion";
  version: number;
  exportedAt: string;
  data: Record<string, BaseRecord[]>;
};

export async function buildBackup(store: OrganizacionStore): Promise<Backup> {
  const data: Record<string, BaseRecord[]> = {};
  for (const collection of COLLECTIONS) {
    data[collection] = await store.list(collection);
  }
  return {
    app: "huella-organizacion",
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    data,
  };
}

export function downloadBackup(backup: Backup): void {
  const blob = new Blob([JSON.stringify(backup, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 10);
  link.href = url;
  link.download = `organizador-${stamp}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export function parseBackup(text: string): Backup {
  const parsed = JSON.parse(text) as Partial<Backup>;
  if (parsed?.app !== "huella-organizacion" || !parsed.data) {
    throw new Error("El archivo no es un respaldo del organizador.");
  }
  return {
    app: "huella-organizacion",
    version: parsed.version ?? BACKUP_VERSION,
    exportedAt: parsed.exportedAt ?? "",
    data: parsed.data as Record<string, BaseRecord[]>,
  };
}

export async function restoreBackup(
  store: OrganizacionStore,
  backup: Backup,
): Promise<number> {
  let restored = 0;
  for (const collection of COLLECTIONS) {
    const records = backup.data[collection];
    if (!Array.isArray(records)) continue;
    for (const record of records) {
      if (!record || typeof record.id !== "string") continue;
      await store.restore(collection, record);
      restored += 1;
    }
  }
  return restored;
}

export async function countRecords(store: OrganizacionStore): Promise<number> {
  let total = 0;
  for (const collection of COLLECTIONS) {
    total += (await store.list(collection)).length;
  }
  return total;
}
