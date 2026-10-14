"use client";

import { useRef, useState } from "react";
import {
  buildBackup,
  downloadBackup,
  parseBackup,
  restoreBackup,
} from "@/lib/organizacion/backup";
import { useStore } from "./store-provider";

/**
 * Exportar/importar el respaldo. Como todo vive en IndexedDB del navegador,
 * esto es lo que evita que un usuario pierda años de datos al limpiar el
 * navegador o cambiar de dispositivo.
 */
export function useBackup() {
  const store = useStore();
  const fileRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function exportData() {
    setBusy(true);
    setStatus(null);
    try {
      const backup = await buildBackup(store);
      downloadBackup(backup);
      const total = Object.values(backup.data).reduce(
        (sum, list) => sum + list.length,
        0,
      );
      setStatus(`Copia lista: ${total} registros.`);
    } catch {
      setStatus("No pudimos exportar.");
    } finally {
      setBusy(false);
    }
  }

  async function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    setBusy(true);
    setStatus(null);
    try {
      const backup = parseBackup(await file.text());
      const restored = await restoreBackup(store, backup);
      setStatus(`Importados ${restored} registros.`);
    } catch (error) {
      setStatus(
        error instanceof Error ? error.message : "No pudimos importar.",
      );
    } finally {
      setBusy(false);
    }
  }

  return {
    busy,
    status,
    exportData,
    pickFile: () => fileRef.current?.click(),
    fileRef,
    handleFile,
  };
}
