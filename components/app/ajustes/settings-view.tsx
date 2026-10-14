"use client";

import { useRef, useState } from "react";
import {
  Check,
  Monitor,
  Moon,
  Palette,
  RotateCcw,
  Sun,
  type LucideIcon,
} from "lucide-react";
import {
  isLightColor,
  normalizeHex,
  PASTEL_PRESETS,
} from "@/lib/organizacion/background";
import { cn } from "@/lib/utils";
import { useBackground } from "../background";
import { useTheme, type ThemeChoice } from "../theme";
import { Button, Card, Input, SectionTitle } from "../ui";

const THEME_OPTIONS: { value: ThemeChoice; label: string; icon: LucideIcon }[] = [
  { value: "light", label: "Claro", icon: Sun },
  { value: "dark", label: "Oscuro", icon: Moon },
  { value: "system", label: "Sistema", icon: Monitor },
];

function ThemeControl() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-wrap gap-2">
      {THEME_OPTIONS.map((option) => {
        const Icon = option.icon;
        const active = theme === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            aria-pressed={active}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[13px] font-medium transition",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-orange focus-visible:ring-offset-2 focus-visible:ring-offset-cu-bg",
              active
                ? "border-cu-orange bg-cu-orange-soft text-cu-text"
                : "border-cu-border bg-cu-bg text-cu-text-2 hover:text-cu-text",
            )}
          >
            <Icon className="h-4 w-4" />
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

function Swatch({
  label,
  value,
  active,
  onSelect,
}: {
  label: string;
  /** Hex del fondo, o `null` para el color por defecto del tema. */
  value: string | null;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className="group flex flex-col items-center gap-2 focus-visible:outline-none"
    >
      <span
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-2xl border transition",
          "group-focus-visible:ring-2 group-focus-visible:ring-cu-orange group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-cu-bg",
          active
            ? "border-cu-orange ring-2 ring-cu-orange"
            : "border-cu-border group-hover:border-cu-text-3",
        )}
        style={value ? { backgroundColor: value } : undefined}
      >
        {value === null ? (
          <Palette className="h-4 w-4 text-cu-text-2" />
        ) : active ? (
          <Check
            className={cn(
              "h-5 w-5",
              isLightColor(value) ? "text-black/70" : "text-white/90",
            )}
          />
        ) : null}
      </span>
      <span className="text-[11px] text-cu-text-2">{label}</span>
    </button>
  );
}

function BackgroundControl() {
  const { background, setBackground } = useBackground();
  const [invalid, setInvalid] = useState(false);
  const hexRef = useRef<HTMLInputElement>(null);

  function select(hex: string | null) {
    if (hex === null) {
      setInvalid(false);
      setBackground(null);
      return;
    }
    const normalized = normalizeHex(hex);
    if (!normalized) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    setBackground(normalized);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Swatch
          label="Predeterminado"
          value={null}
          active={background === null}
          onSelect={() => select(null)}
        />
        {PASTEL_PRESETS.map((preset) => (
          <Swatch
            key={preset.value}
            label={preset.label}
            value={preset.value}
            active={background === preset.value}
            onSelect={() => select(preset.value)}
          />
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <input
          type="color"
          value={background ?? "#ffffff"}
          onChange={(event) => select(event.target.value)}
          aria-label="Selector de color personalizado"
          className="h-11 w-14 shrink-0 cursor-pointer rounded-2xl border border-cu-border bg-cu-bg p-1"
        />
        {/* No controlado a propósito: la `key` lo reinicia al hex guardado cada
            vez que cambia el fondo, sin necesidad de un efecto de sincronía. */}
        <Input
          ref={hexRef}
          key={background ?? "default"}
          defaultValue={background ?? "#ffffff"}
          onBlur={(event) => select(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              select(event.currentTarget.value);
            }
          }}
          placeholder="#f0e6ff"
          aria-label="Código hexadecimal"
          spellCheck={false}
          className={cn(
            "h-11 max-w-40 font-mono text-[14px]",
            invalid && "border-cu-red focus:border-cu-red focus:ring-cu-red/15",
          )}
        />
        <Button
          variant="surface"
          size="sm"
          onClick={() => select(hexRef.current?.value ?? "")}
        >
          Aplicar
        </Button>
        {background ? (
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5"
            onClick={() => select(null)}
          >
            <RotateCcw className="h-4 w-4" />
            Restablecer
          </Button>
        ) : null}
      </div>

      {invalid ? (
        <p className="text-[12px] text-cu-red">
          Usá un color válido, por ejemplo #f0e6ff.
        </p>
      ) : (
        <p className="text-[12px] text-cu-text-3">
          El texto y las tarjetas se ajustan solos para que todo se lea bien.
        </p>
      )}
    </div>
  );
}

export function SettingsView() {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-[28px] leading-tight font-semibold tracking-tight text-cu-text">
          Ajustes
        </h1>
        <p className="text-[15px] text-cu-text-2">
          Personalizá cómo se ve el organizador. Todo queda en este dispositivo.
        </p>
      </header>

      <Card className="space-y-6">
        <section className="space-y-3">
          <SectionTitle>Tema</SectionTitle>
          <p className="text-[13px] text-cu-text-2">
            Claro u oscuro, o siguiendo la preferencia de tu sistema.
          </p>
          <ThemeControl />
        </section>

        <div className="h-px bg-cu-border" />

        <section className="space-y-3">
          <SectionTitle>Color de fondo</SectionTitle>
          <p className="text-[13px] text-cu-text-2">
            Elegí un pastel o armá el tuyo con el selector o un código
            hexadecimal.
          </p>
          <BackgroundControl />
        </section>
      </Card>

      <p className="text-[12px] text-cu-text-3">
        Las preferencias de apariencia no se incluyen en la exportación: son de
        este dispositivo.
      </p>
    </div>
  );
}
