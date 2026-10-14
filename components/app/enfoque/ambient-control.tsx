"use client";

import { Pause, Play, Volume2 } from "lucide-react";
import { AMBIENT_SOUNDS } from "@/lib/organizacion/audio";
import { cn } from "@/lib/utils";
import { Spinner } from "../ui";
import { useAmbient } from "../use-ambient";

/**
 * Selector de sonido ambiente, dentro de la sección Enfoque. El motor no se
 * detiene al cambiar de sección: si hay algo sonando, sigue sonando y se puede
 * cortar desde el indicador de la barra lateral.
 */
export function AmbientControl() {
  const { soundId, sound, phase, volume, play, stop, setVolume } = useAmbient();

  return (
    <div className="rounded-cu border border-cu-border bg-cu-surface p-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[13px] font-semibold tracking-wide text-cu-text-2 uppercase">
          Sonido ambiente
        </h2>
        {soundId ? (
          <button
            type="button"
            onClick={stop}
            className="rounded-full px-2 py-1 text-[12px] text-cu-text-2 transition hover:bg-cu-surface-2 hover:text-cu-text"
          >
            Detener
          </button>
        ) : null}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {AMBIENT_SOUNDS.map((option) => {
          const active = soundId === option.id;
          const loading = active && phase === "loading";
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => (active ? stop() : play(option.id))}
              aria-pressed={active}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] transition",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-orange focus-visible:ring-offset-2 focus-visible:ring-offset-cu-bg",
                active
                  ? "border-cu-orange bg-cu-orange-soft text-cu-text"
                  : "border-cu-border bg-cu-bg text-cu-text-2 hover:text-cu-text",
              )}
            >
              {loading ? (
                <Spinner className="h-3.5 w-3.5" />
              ) : active ? (
                <Pause className="h-3.5 w-3.5" />
              ) : (
                <Play className="h-3.5 w-3.5" />
              )}
              {option.label}
            </button>
          );
        })}
      </div>

      {sound ? (
        <p className="mt-2 text-[12px] text-cu-text-2">
          {sound.description}
          <span className="text-cu-text-3"> · {sound.durationLabel}</span>
        </p>
      ) : null}

      {phase === "error" ? (
        <p className="mt-2 text-[12px] text-cu-red">
          No pudimos reproducir el sonido. Probá con otro.
        </p>
      ) : null}

      <div className="mt-4 flex items-center gap-3">
        <Volume2 className="h-4 w-4 shrink-0 text-cu-text-3" />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(event) => setVolume(Number(event.target.value))}
          aria-label="Volumen del sonido ambiente"
          className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-cu-surface-2 accent-cu-orange"
        />
        <span className="w-9 shrink-0 text-right text-[12px] tabular-nums text-cu-text-3">
          {Math.round(volume * 100)}%
        </span>
      </div>

      <p className="mt-3 text-[11px] leading-snug text-cu-text-3">
        Pistas con licencia libre para uso comercial.
        {sound?.credit ? ` ${sound.credit}.` : ""}{" "}
        <span className="whitespace-nowrap">Ver public/audio/CREDITS.md</span>
      </p>
    </div>
  );
}
