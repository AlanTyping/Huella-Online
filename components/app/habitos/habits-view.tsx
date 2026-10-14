"use client";

import { useMemo, useState } from "react";
import { Check, Flame, Plus, Trash2 } from "lucide-react";
import { addDaysISO, todayISO, WEEKDAY_INITIALS } from "@/lib/organizacion/date";
import type { Habit } from "@/lib/organizacion/types";
import { cn } from "@/lib/utils";
import { useStore } from "../store-provider";
import { useUndo } from "../undo";
import { useCollection } from "../use-collection";
import { Chip, EmptyState, IconButton, Input, Spinner } from "../ui";

/** Lunes a domingo. */
const WEEK_ORDER = [1, 2, 3, 4, 5, 6, 0];

function currentStreak(habit: Habit): number {
  let cursor = todayISO();
  if (!habit.logs[cursor]) cursor = addDaysISO(cursor, -1);
  let streak = 0;
  while (habit.logs[cursor]) {
    streak += 1;
    cursor = addDaysISO(cursor, -1);
  }
  return streak;
}

function lastDays(count: number): string[] {
  const today = todayISO();
  return Array.from({ length: count }, (_, index) =>
    addDaysISO(today, index - (count - 1)),
  );
}

function Composer() {
  const store = useStore();
  const [name, setName] = useState("");
  const [weekdays, setWeekdays] = useState<number[]>(WEEK_ORDER);
  const [saving, setSaving] = useState(false);

  function toggleWeekday(day: number) {
    setWeekdays((current) =>
      current.includes(day)
        ? current.filter((value) => value !== day)
        : [...current, day],
    );
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    const value = name.trim();
    if (!value || saving) return;
    setSaving(true);
    try {
      await store.create("habits", {
        name: value,
        weekdays: weekdays.length > 0 ? weekdays : WEEK_ORDER,
        logs: {},
      });
      setName("");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-cu border border-cu-border bg-cu-surface p-3"
    >
      <div className="flex items-center gap-2">
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="¿Qué hábito querés sostener?"
          aria-label="Nuevo hábito"
          className="h-10 border-transparent bg-cu-bg"
        />
        <button
          type="submit"
          disabled={!name.trim() || saving}
          aria-label="Agregar hábito"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cu-orange text-white transition hover:brightness-105 disabled:opacity-40"
        >
          {saving ? (
            <Spinner className="h-4 w-4 border-white/40 border-t-white" />
          ) : (
            <Plus className="h-5 w-5" strokeWidth={2.5} />
          )}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-[12px] text-cu-text-3">Días:</span>
        {WEEK_ORDER.map((day) => (
          <Chip
            key={day}
            active={weekdays.includes(day)}
            onClick={() => toggleWeekday(day)}
            className="w-8 justify-center px-0"
          >
            {WEEKDAY_INITIALS[(day + 6) % 7]}
          </Chip>
        ))}
      </div>
    </form>
  );
}

function HabitCard({ habit }: { habit: Habit }) {
  const store = useStore();
  const { deleteWithUndo } = useUndo();
  const [busy, setBusy] = useState(false);

  const today = todayISO();
  const todayIndex = new Date().getDay();
  const activeToday = habit.weekdays.includes(todayIndex);
  const doneToday = Boolean(habit.logs[today]);
  const streak = currentStreak(habit);
  const days = lastDays(7);

  async function toggleDay(date: string) {
    setBusy(true);
    try {
      const logs = { ...habit.logs };
      if (logs[date]) delete logs[date];
      else logs[date] = true;
      await store.update("habits", habit.id, { logs });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div
      className={cn(
        "rounded-cu border border-cu-border bg-cu-surface p-4 transition",
        busy && "opacity-60",
      )}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => toggleDay(today)}
          aria-label={doneToday ? "Desmarcar hoy" : "Marcar hoy"}
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition",
            doneToday
              ? "border-cu-orange bg-cu-orange text-white"
              : activeToday
                ? "border-cu-text-3 hover:border-cu-orange"
                : "border-cu-border text-cu-text-3",
          )}
        >
          <Check className="h-4 w-4" strokeWidth={3} />
        </button>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-medium text-cu-text">
            {habit.name}
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-[12px] text-cu-text-2">
            <Flame
              className={cn(
                "h-3.5 w-3.5",
                streak > 0 ? "text-cu-orange" : "text-cu-text-3",
              )}
            />
            {streak > 0
              ? `${streak} ${streak === 1 ? "día" : "días"} seguidos`
              : activeToday
                ? "Empezá hoy"
                : "Hoy descansa"}
          </p>
        </div>

        <IconButton
          aria-label="Eliminar hábito"
          title="Eliminar"
          className="hover:bg-cu-red/10 hover:text-cu-red"
          onClick={() =>
            void deleteWithUndo("habits", habit, "Hábito eliminado")
          }
        >
          <Trash2 className="h-4 w-4" />
        </IconButton>
      </div>

      <div className="mt-3 flex justify-between gap-1">
        {days.map((date) => {
          const done = Boolean(habit.logs[date]);
          const [y, m, d] = date.split("-").map(Number);
          const weekdayIndex = new Date(y, m - 1, d).getDay();
          const scheduled = habit.weekdays.includes(weekdayIndex);
          return (
            <button
              key={date}
              onClick={() => toggleDay(date)}
              aria-label={`${date}${done ? " hecho" : ""}`}
              className="flex flex-1 flex-col items-center gap-1"
            >
              <span className="text-[10px] text-cu-text-3">
                {WEEKDAY_INITIALS[(weekdayIndex + 6) % 7]}
              </span>
              <span
                className={cn(
                  "h-6 w-full rounded-lg transition",
                  done
                    ? "bg-cu-orange"
                    : scheduled
                      ? "bg-cu-surface-2 hover:bg-cu-orange-soft"
                      : "bg-transparent ring-1 ring-cu-border ring-inset",
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function HabitsView() {
  const { records: habits, loading, error } = useCollection<Habit>("habits");

  const ordered = useMemo(
    () => [...habits].sort((a, b) => a.createdAt - b.createdAt),
    [habits],
  );

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-[28px] leading-tight font-semibold tracking-tight text-cu-text">
          Hábitos
        </h1>
        <p className="text-[15px] text-cu-text-2">
          Rachas y seguimiento diario de lo que querés sostener.
        </p>
      </header>

      <Composer />

      {loading ? (
        <div className="flex justify-center py-12">
          <Spinner />
        </div>
      ) : error ? (
        <p className="py-8 text-center text-[14px] text-cu-red">{error}</p>
      ) : ordered.length === 0 ? (
        <div className="rounded-cu border border-cu-border bg-cu-surface">
          <EmptyState
            icon={<Flame className="h-5 w-5" />}
            title="Todavía no hay hábitos"
            description="Agregá uno arriba y empezá a construir la racha."
          />
        </div>
      ) : (
        <div className="space-y-3">
          {ordered.map((habit) => (
            <HabitCard key={habit.id} habit={habit} />
          ))}
        </div>
      )}
    </div>
  );
}
