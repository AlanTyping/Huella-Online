/**
 * Sonido ambiente del organizador.
 *
 * Usa pistas reales (ver `public/audio/CREDITS.md`) en lugar de síntesis: suenan
 * mucho mejor y todas tienen licencia para uso comercial. Se reproducen con Web
 * Audio para lograr loop sin costura, fundidos suaves y carga diferida (los
 * archivos no se descargan hasta que se presiona play).
 */

import { readPref, writePref } from "./prefs";

export type AmbientSoundId =
  | "lluvia-ventana"
  | "lluvia-terraza"
  | "tormenta"
  | "olas"
  | "ruido-marron";

export type AmbientSound = {
  id: AmbientSoundId;
  label: string;
  description: string;
  file: string;
  durationLabel: string;
  /** Sólo cuando la licencia exige atribución. */
  credit?: string;
};

export const AMBIENT_SOUNDS: AmbientSound[] = [
  {
    id: "lluvia-ventana",
    label: "Lluvia en la ventana",
    description: "Lluvia constante, cercana y pareja.",
    file: "/audio/lluvia-ventana.mp3",
    durationLabel: "1:22",
  },
  {
    id: "lluvia-terraza",
    label: "Lluvia en la terraza",
    description: "Gotas sobre superficie, más suave.",
    file: "/audio/lluvia-terraza.mp3",
    durationLabel: "0:30",
  },
  {
    id: "tormenta",
    label: "Tormenta",
    description: "Lluvia con truenos de fondo.",
    file: "/audio/tormenta.mp3",
    durationLabel: "1:00",
  },
  {
    id: "olas",
    label: "Olas del mar",
    description: "Mar de fondo, vaivén lento.",
    file: "/audio/olas.mp3",
    durationLabel: "2:00",
    credit: "Olas del mar — Luftrum (CC BY 3.0)",
  },
  {
    id: "ruido-marron",
    label: "Ruido marrón",
    description: "Grave y uniforme. El más neutro para concentrarse.",
    file: "/audio/ruido-marron.mp3",
    durationLabel: "15:00",
  },
];

const VOLUME_KEY = "organizacion:ambientVolume";
const FADE_SECONDS = 0.6;

type Voice = {
  source: AudioBufferSourceNode;
  gain: GainNode;
};

class AmbientEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private buffers = new Map<AmbientSoundId, AudioBuffer>();
  private voice: Voice | null = null;
  private listeners = new Set<() => void>();
  private request = 0;
  private volume: number;

  /** Cadena estable para `useSyncExternalStore`. */
  private snapshot = "stopped";

  constructor() {
    this.volume = readPref<number>(VOLUME_KEY, 0.5);
  }

  subscribe = (onChange: () => void): (() => void) => {
    this.listeners.add(onChange);
    return () => {
      this.listeners.delete(onChange);
    };
  };

  getSnapshot = (): string => this.snapshot;

  getVolume = (): number => this.volume;

  private emit() {
    for (const listener of this.listeners) listener();
  }

  private setSnapshot(next: string) {
    if (this.snapshot === next) return;
    this.snapshot = next;
    this.emit();
  }

  /** id del sonido sonando, o null. */
  currentSound(): AmbientSoundId | null {
    const [, id] = this.snapshot.split(":");
    return id ? (id as AmbientSoundId) : null;
  }

  private ensureContext(): AudioContext {
    if (this.ctx) return this.ctx;
    const Ctor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const ctx = new Ctor();
    const master = ctx.createGain();
    master.gain.value = this.volume;
    master.connect(ctx.destination);
    this.ctx = ctx;
    this.master = master;
    return ctx;
  }

  private async loadBuffer(
    ctx: AudioContext,
    sound: AmbientSound,
  ): Promise<AudioBuffer> {
    const cached = this.buffers.get(sound.id);
    if (cached) return cached;

    const response = await fetch(sound.file);
    if (!response.ok) throw new Error("No pudimos descargar el sonido.");
    const data = await response.arrayBuffer();
    const buffer = await ctx.decodeAudioData(data);
    this.buffers.set(sound.id, buffer);
    return buffer;
  }

  private fadeOutVoice(voice: Voice, seconds: number) {
    const ctx = this.ctx;
    if (!ctx) return;
    const now = ctx.currentTime;
    voice.gain.gain.cancelScheduledValues(now);
    voice.gain.gain.setValueAtTime(voice.gain.gain.value, now);
    voice.gain.gain.linearRampToValueAtTime(0.0001, now + seconds);
    try {
      voice.source.stop(now + seconds + 0.05);
    } catch {
      /* ya estaba detenido */
    }
  }

  async play(id: AmbientSoundId): Promise<void> {
    const sound = AMBIENT_SOUNDS.find((item) => item.id === id);
    if (!sound) return;

    const ctx = this.ensureContext();
    if (ctx.state === "suspended") await ctx.resume();

    const token = ++this.request;
    this.setSnapshot(`loading:${id}`);

    try {
      const buffer = await this.loadBuffer(ctx, sound);
      // Si mientras cargaba se pidió otro sonido (o se detuvo), abandonamos.
      if (token !== this.request) return;

      if (this.voice) {
        this.fadeOutVoice(this.voice, FADE_SECONDS);
        this.voice = null;
      }

      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;

      const gain = ctx.createGain();
      const now = ctx.currentTime;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(1, now + FADE_SECONDS);

      source.connect(gain);
      gain.connect(this.master as GainNode);
      source.start(now);

      this.voice = { source, gain };
      this.setSnapshot(`playing:${id}`);
    } catch {
      if (token === this.request) this.setSnapshot(`error:${id}`);
    }
  }

  stop(): void {
    this.request += 1;
    if (this.voice) {
      this.fadeOutVoice(this.voice, 0.35);
      this.voice = null;
    }
    this.setSnapshot("stopped");
  }

  setVolume(value: number): void {
    this.volume = Math.max(0, Math.min(1, value));
    writePref(VOLUME_KEY, this.volume);
    if (this.master) {
      const now = this.ctx?.currentTime ?? 0;
      this.master.gain.cancelScheduledValues(now);
      this.master.gain.setValueAtTime(this.master.gain.value, now);
      this.master.gain.linearRampToValueAtTime(this.volume, now + 0.1);
    }
    this.emit();
  }
}

export const ambientEngine = new AmbientEngine();

/** Campanita breve para avisar el final de una sesión de enfoque. */
export function playChime(): void {
  try {
    const ctx = new AudioContext();
    const now = ctx.currentTime;
    [880, 1174.66].forEach((frequency, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = frequency;
      const start = now + index * 0.18;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.18, start + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.9);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 1);
    });
    setTimeout(() => void ctx.close(), 1600);
  } catch {
    /* sin audio disponible */
  }
}
