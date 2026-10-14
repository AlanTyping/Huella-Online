"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Undo2, X } from "lucide-react";
import type { BaseRecord, Collection } from "@/lib/organizacion/store";
import { useStore } from "./store-provider";

type Pending = { collection: Collection; record: BaseRecord; label: string };

type UndoContextValue = {
  /** Borra un registro y ofrece deshacerlo durante unos segundos. */
  deleteWithUndo: (
    collection: Collection,
    record: BaseRecord,
    label: string,
  ) => Promise<void>;
};

const UndoContext = createContext<UndoContextValue | null>(null);

const UNDO_WINDOW_MS = 7000;

function UndoToast({
  label,
  onUndo,
  onDismiss,
}: {
  label: string;
  onUndo: () => void;
  onDismiss: () => void;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4"
    >
      <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-cu-border bg-cu-text py-2 pr-2 pl-4 shadow-cu-soft">
        <span className="text-[13px] text-cu-bg">{label}</span>
        <button
          type="button"
          onClick={onUndo}
          className="inline-flex items-center gap-1.5 rounded-full bg-cu-orange px-3 py-1.5 text-[13px] font-medium text-white transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Undo2 className="h-3.5 w-3.5" />
          Deshacer
        </button>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Cerrar aviso"
          className="flex h-7 w-7 items-center justify-center rounded-full text-cu-bg/70 transition hover:text-cu-bg"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function UndoProvider({ children }: { children: React.ReactNode }) {
  const store = useStore();
  const [pending, setPending] = useState<Pending | null>(null);
  const timeout = useRef<number | null>(null);

  const clearTimer = () => {
    if (timeout.current !== null) {
      window.clearTimeout(timeout.current);
      timeout.current = null;
    }
  };

  const dismiss = useCallback(() => {
    clearTimer();
    setPending(null);
  }, []);

  const deleteWithUndo = useCallback(
    async (collection: Collection, record: BaseRecord, label: string) => {
      await store.remove(collection, record.id);
      clearTimer();
      setPending({ collection, record, label });
      timeout.current = window.setTimeout(() => {
        timeout.current = null;
        setPending(null);
      }, UNDO_WINDOW_MS);
    },
    [store],
  );

  const undo = useCallback(async () => {
    if (!pending) return;
    const item = pending;
    dismiss();
    await store.restore(item.collection, item.record);
  }, [pending, dismiss, store]);

  useEffect(() => clearTimer, []);

  return (
    <UndoContext.Provider value={{ deleteWithUndo }}>
      {children}
      {pending ? (
        <UndoToast
          label={pending.label}
          onUndo={() => void undo()}
          onDismiss={dismiss}
        />
      ) : null}
    </UndoContext.Provider>
  );
}

export function useUndo() {
  const ctx = useContext(UndoContext);
  if (!ctx) throw new Error("useUndo debe usarse dentro de <UndoProvider>");
  return ctx;
}
