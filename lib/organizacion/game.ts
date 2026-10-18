/**
 * Progreso "tipo RPG" del organizador.
 *
 * No agrega estado nuevo: el nivel y el XP se derivan de los datos que ya
 * existen (tareas completadas, minutos de foco y marcas de hábitos), así que
 * nada que guardar ni migrar. Vive fuera de React para poder testearlo.
 */

import { addDaysISO, todayISO } from "./date";
import type { FocusSession, Habit, Task } from "./types";

export const XP_PER_TASK = 10;
export const XP_PER_FOCUS_MINUTE = 1;
export const XP_PER_HABIT = 5;

export type Hero = {
  xp: number;
  level: number;
  /** XP acumulado dentro del nivel actual. */
  into: number;
  /** XP que pide el nivel actual para subir. */
  needed: number;
  /** 0–1. */
  progress: number;
  tasks: number;
  focusMinutes: number;
  habitChecks: number;
  /** Mejor racha de hábitos vigente. */
  streak: number;
};

/** XP que pide cada nivel (sube de a poco, para que subir sea alcanzable). */
function xpForLevel(level: number): number {
  return 80 + (level - 1) * 40;
}

export function levelFromXp(xp: number): {
  level: number;
  into: number;
  needed: number;
  progress: number;
} {
  let level = 1;
  let into = Math.max(0, xp);
  let needed = xpForLevel(level);
  while (into >= needed) {
    into -= needed;
    level += 1;
    needed = xpForLevel(level);
  }
  return { level, into, needed, progress: needed > 0 ? into / needed : 0 };
}

/** Días seguidos marcados, contando desde hoy (o ayer, si hoy no está marcado). */
export function currentStreak(logs: Record<string, boolean>): number {
  let cursor = todayISO();
  if (!logs[cursor]) cursor = addDaysISO(cursor, -1);
  let streak = 0;
  while (logs[cursor]) {
    streak += 1;
    cursor = addDaysISO(cursor, -1);
  }
  return streak;
}

export function computeHero(
  tasks: Task[],
  sessions: FocusSession[],
  habits: Habit[],
): Hero {
  const completedTasks = tasks.filter((task) => task.done).length;
  const focusMinutes = Math.round(
    sessions.reduce((sum, session) => sum + session.focusedSeconds, 0) / 60,
  );
  const habitChecks = habits.reduce(
    (sum, habit) => sum + Object.keys(habit.logs).length,
    0,
  );
  const streak = habits.reduce(
    (best, habit) => Math.max(best, currentStreak(habit.logs)),
    0,
  );

  const xp =
    completedTasks * XP_PER_TASK +
    focusMinutes * XP_PER_FOCUS_MINUTE +
    habitChecks * XP_PER_HABIT;

  return {
    xp,
    ...levelFromXp(xp),
    tasks: completedTasks,
    focusMinutes,
    habitChecks,
    streak,
  };
}
