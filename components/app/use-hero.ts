"use client";

import { useMemo } from "react";
import { computeHero, type Hero } from "@/lib/organizacion/game";
import type { FocusSession, Habit, Task } from "@/lib/organizacion/types";
import { useCollection } from "./use-collection";

/**
 * Estado del "héroe" (nivel, XP, racha) a partir de las colecciones activas.
 * Se recalcula solo cuando cambian los datos.
 */
export function useHero(): Hero {
  const { records: tasks } = useCollection<Task>("tasks");
  const { records: sessions } = useCollection<FocusSession>("focusSessions");
  const { records: habits } = useCollection<Habit>("habits");

  return useMemo(
    () => computeHero(tasks, sessions, habits),
    [tasks, sessions, habits],
  );
}
