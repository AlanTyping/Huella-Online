"use client";

import { useSyncExternalStore } from "react";
import {
  AMBIENT_SOUNDS,
  ambientEngine,
  type AmbientSoundId,
} from "@/lib/organizacion/audio";

export type AmbientPhase = "stopped" | "loading" | "playing" | "error";

/**
 * Estado del sonido ambiente. El motor vive fuera de React (es un singleton que
 * sobrevive a la navegación), así que lo leemos con `useSyncExternalStore`.
 */
export function useAmbient() {
  const state = useSyncExternalStore(
    ambientEngine.subscribe,
    ambientEngine.getSnapshot,
    () => "stopped",
  );
  const volume = useSyncExternalStore(
    ambientEngine.subscribe,
    ambientEngine.getVolume,
    () => 0.5,
  );

  const [phase, id] = state.split(":");

  return {
    phase: phase as AmbientPhase,
    soundId: (id || null) as AmbientSoundId | null,
    sound: AMBIENT_SOUNDS.find((item) => item.id === id) ?? null,
    volume,
    play: (next: AmbientSoundId) => void ambientEngine.play(next),
    stop: () => ambientEngine.stop(),
    setVolume: (value: number) => ambientEngine.setVolume(value),
  };
}
