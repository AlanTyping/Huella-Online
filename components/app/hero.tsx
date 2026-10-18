"use client";

import { Flame, Swords } from "lucide-react";
import { Bar, Card, SectionTitle } from "./ui";
import { useHero } from "./use-hero";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="text-cu-text-3">{label}</span>
      <span className="g-hud text-[11px] text-cu-text">{value}</span>
    </span>
  );
}

/** Panel de estado del héroe: nivel, barra de XP y racha. */
export function HeroPanel() {
  const hero = useHero();

  return (
    <Card className="p-4 sm:p-5">
      <div className="flex items-center gap-4">
        <div className="g-inset flex h-16 w-16 shrink-0 flex-col items-center justify-center">
          <span className="g-hud text-[8px] text-cu-text-3">NIVEL</span>
          <span className="g-hud mt-1 text-[18px] text-cu-orange">
            {hero.level}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
            <SectionTitle>Progreso de héroe</SectionTitle>
            <span className="g-hud text-[10px] text-cu-text-3">
              {hero.into} / {hero.needed} XP
            </span>
          </div>

          <Bar
            value={hero.progress * 100}
            className="mt-2.5"
            label="Progreso de nivel"
          />

          <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5 text-[13px]">
            <Stat label="XP total" value={String(hero.xp)} />
            <Stat label="Misiones" value={String(hero.tasks)} />
            <Stat label="Enfoque" value={`${hero.focusMinutes}m`} />
            {hero.streak > 0 ? (
              <span className="inline-flex items-center gap-1.5 text-[13px]">
                <Flame className="h-3.5 w-3.5 text-cu-orange" />
                <span className="g-hud text-[11px] text-cu-orange">
                  {hero.streak} días seguidos
                </span>
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </Card>
  );
}

/** Versión compacta para la barra lateral. */
export function HeroBadge() {
  const hero = useHero();

  return (
    <div className="g-inset p-3">
      <div className="flex items-center gap-2">
        <Swords className="h-4 w-4 shrink-0 text-cu-orange" />
        <span className="g-hud text-[10px] text-cu-text-2">
          NIVEL {hero.level}
        </span>
        <span className="g-hud ml-auto text-[9px] text-cu-text-3">
          {hero.xp} XP
        </span>
      </div>
      <Bar
        value={hero.progress * 100}
        className="mt-2 h-2.5"
        label="Progreso de nivel"
      />
    </div>
  );
}
