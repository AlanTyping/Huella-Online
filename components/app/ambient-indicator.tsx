"use client";

import { Music, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconButton } from "./ui";
import { useAmbient } from "./use-ambient";

/**
 * Indicador del sonido ambiente cuando algo está sonando. Aparece en la barra
 * lateral para que nunca haya audio "fantasma": siempre se ve qué suena y se
 * puede cortar desde cualquier sección.
 */
export function AmbientIndicator({ compact }: { compact?: boolean }) {
  const { sound, phase, stop } = useAmbient();

  if (!sound || phase === "stopped") return null;

  if (compact) {
    return (
      <IconButton
        onClick={stop}
        aria-label={`Detener ${sound.label}`}
        title={`Sonando: ${sound.label}. Clic para detener.`}
        className="relative text-cu-orange"
      >
        <Music className="h-[17px] w-[17px]" />
        <span className="absolute right-1 bottom-1 h-1.5 w-1.5 animate-pulse rounded-full bg-cu-orange" />
      </IconButton>
    );
  }

  return (
    <div className="flex items-center gap-2 rounded-2xl border border-cu-border bg-cu-surface px-3 py-2">
      <Music
        className={cn(
          "h-4 w-4 shrink-0",
          phase === "playing" ? "text-cu-orange" : "text-cu-text-3",
          phase === "playing" && "animate-pulse",
        )}
      />
      <span className="min-w-0 flex-1 truncate text-[12px] text-cu-text">
        {phase === "loading" ? "Cargando…" : sound.label}
      </span>
      <IconButton
        onClick={stop}
        aria-label="Detener sonido ambiente"
        className="h-7 w-7"
      >
        <Square className="h-3.5 w-3.5" />
      </IconButton>
    </div>
  );
}
