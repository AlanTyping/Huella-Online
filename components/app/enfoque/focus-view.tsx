"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Pause, Play, RotateCcw, Square, Timer } from "lucide-react";
import { playChime } from "@/lib/organizacion/audio";
import { shortDayLabel, todayISO, toISODate, nowMs } from "@/lib/organizacion/date";
import type { FocusSession, Task } from "@/lib/organizacion/types";
import { cn } from "@/lib/utils";
import { useStore } from "../store-provider";
import { useCollection } from "../use-collection";
import { Button, Chip, EmptyState, Spinner } from "../ui";
import { AmbientControl } from "./ambient-control";

const DURATIONS = [15, 25, 45, 60];
const RADIUS = 88;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function formatClock(ms: number): string {
  const total = Math.max(0, Math.round(ms / 1000));
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function FocusStats({ sessions }: { sessions: FocusSession[] }) {
  const today = todayISO();

  const stats = useMemo(() => {
    const days = Array.from({ length: 7 }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - index));
      return toISODate(date);
    });

    const minutesByDay = new Map<string, number>(days.map((day) => [day, 0]));
    let todayMinutes = 0;
    let todayCount = 0;

    for (const session of sessions) {
      const day = toISODate(new Date(session.startedAt));
      const minutes = session.focusedSeconds / 60;
      if (minutesByDay.has(day)) {
        minutesByDay.set(day, (minutesByDay.get(day) ?? 0) + minutes);
      }
      if (day === today) {
        todayMinutes += minutes;
        todayCount += 1;
      }
    }

    const max = Math.max(1, ...minutesByDay.values());
    return { days, minutesByDay, max, todayMinutes, todayCount };
  }, [sessions, today]);

  return (
    <div className="rounded-cu border border-cu-border bg-cu-surface p-5">
      <div className="flex items-baseline justify-between">
        <p className="text-[13px] font-semibold tracking-wide text-cu-text-2 uppercase">
          Hoy
        </p>
        <p className="text-[13px] text-cu-text-2">
          {stats.todayCount} {stats.todayCount === 1 ? "sesión" : "sesiones"} ·{" "}
          {Math.round(stats.todayMinutes)} min
        </p>
      </div>

      <div className="mt-4 flex h-24 items-end gap-2">
        {stats.days.map((day) => {
          const minutes = stats.minutesByDay.get(day) ?? 0;
          const height = Math.round((minutes / stats.max) * 100);
          return (
            <div key={day} className="flex flex-1 flex-col items-center gap-1.5">
              <div className="flex h-20 w-full items-end">
                <div
                  className={cn(
                    "w-full rounded-lg transition-all",
                    minutes > 0 ? "bg-cu-orange" : "bg-cu-surface-2",
                  )}
                  style={{ height: `${Math.max(minutes > 0 ? 8 : 4, height)}%` }}
                />
              </div>
              <span className="text-[10px] text-cu-text-3">
                {shortDayLabel(day).split(" ")[0]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function FocusView() {
  const store = useStore();
  const { records: tasks } = useCollection<Task>("tasks");
  const { records: sessions, loading } = useCollection<FocusSession>("focusSessions");

  const [plannedMinutes, setPlannedMinutesState] = useState(25);
  const [remainingMs, setRemainingMsState] = useState(25 * 60 * 1000);
  const [running, setRunning] = useState(false);
  const [taskId, setTaskIdState] = useState<string | null>(null);

  const plannedRef = useRef(25);
  const remainingRef = useRef(25 * 60 * 1000);
  const taskRef = useRef<string | null>(null);
  const startedAtRef = useRef<number | null>(null);
  const deadlineRef = useRef<number | null>(null);

  const plannedMs = plannedMinutes * 60 * 1000;
  const progress =
    plannedMs > 0 ? Math.min(1, (plannedMs - remainingMs) / plannedMs) : 0;

  function setRemaining(ms: number) {
    remainingRef.current = ms;
    setRemainingMsState(ms);
  }

  function chooseDuration(minutes: number) {
    plannedRef.current = minutes;
    setPlannedMinutesState(minutes);
    setRemaining(minutes * 60 * 1000);
    startedAtRef.current = null;
    deadlineRef.current = null;
    setRunning(false);
  }

  function chooseTask(id: string | null) {
    taskRef.current = id;
    setTaskIdState(id);
  }

  function start() {
    if (running) return;
    deadlineRef.current = nowMs() + remainingRef.current;
    if (startedAtRef.current === null) startedAtRef.current = nowMs();
    setRunning(true);
  }

  function pause() {
    if (!running || deadlineRef.current === null) return;
    setRemaining(Math.max(0, deadlineRef.current - nowMs()));
    setRunning(false);
  }

  const complete = useCallback(
    async (auto: boolean) => {
      const planned = plannedRef.current;
      const focusedSeconds = Math.max(
        0,
        Math.round((planned * 60 * 1000 - remainingRef.current) / 1000),
      );
      const startedAt = startedAtRef.current ?? nowMs();
      const task = taskRef.current;

      deadlineRef.current = null;
      startedAtRef.current = null;
      setRunning(false);
      remainingRef.current = planned * 60 * 1000;
      setRemainingMsState(planned * 60 * 1000);

      if (auto) playChime();

      if (auto || focusedSeconds >= 60) {
        await store.create("focusSessions", {
          plannedMinutes: planned,
          focusedSeconds,
          taskId: task,
          startedAt,
          endedAt: nowMs(),
        });
      }
    },
    [store],
  );

  // Tick del temporizador. No escribe estado de forma sincrónica en el efecto:
  // sólo dentro del callback del intervalo.
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      const deadline = deadlineRef.current;
      if (deadline === null) return;
      const left = deadline - Date.now();
      if (left <= 0) {
        remainingRef.current = 0;
        setRemainingMsState(0);
        void complete(true);
      } else {
        remainingRef.current = left;
        setRemainingMsState(left);
      }
    }, 250);
    return () => window.clearInterval(id);
  }, [running, complete]);

  // Muestra el tiempo restante en el título de la pestaña.
  useEffect(() => {
    if (!running) return;
    document.title = `${formatClock(remainingMs)} · Enfoque`;
    return () => {
      document.title = "Enfoque | Organizador";
    };
  }, [running, remainingMs]);

  const pendingTasks = useMemo(
    () => tasks.filter((task) => !task.done),
    [tasks],
  );

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-[28px] leading-tight font-semibold tracking-tight text-cu-text">
          Enfoque
        </h1>
        <p className="text-[15px] text-cu-text-2">
          Elegí un bloque de tiempo, poné una tarea y trabajá sin distraerte.
        </p>
      </header>

      <div className="flex flex-col items-center gap-6 rounded-cu border border-cu-border bg-cu-surface px-6 py-8">
        <div className="relative">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r={RADIUS}
              fill="none"
              strokeWidth="10"
              className="stroke-cu-surface-2"
            />
            <circle
              cx="100"
              cy="100"
              r={RADIUS}
              fill="none"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
              transform="rotate(-90 100 100)"
              className="stroke-cu-orange transition-[stroke-dashoffset] duration-300"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              role="timer"
              aria-live="polite"
              aria-label="Tiempo restante"
              className="text-[42px] font-semibold tabular-nums tracking-tight text-cu-text"
            >
              {formatClock(remainingMs)}
            </span>
            <span className="text-[12px] text-cu-text-3">
              {plannedMinutes} min planificados
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {DURATIONS.map((minutes) => (
            <Chip
              key={minutes}
              active={plannedMinutes === minutes}
              disabled={running}
              onClick={() => chooseDuration(minutes)}
            >
              {minutes} min
            </Chip>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {running ? (
            <Button onClick={pause} variant="surface" className="gap-2">
              <Pause className="h-4 w-4" />
              Pausar
            </Button>
          ) : (
            <Button onClick={start} className="gap-2">
              <Play className="h-4 w-4" />
              {remainingMs < plannedMs ? "Reanudar" : "Empezar"}
            </Button>
          )}
          <Button
            variant="ghost"
            onClick={() => {
              setRunning(false);
              startedAtRef.current = null;
              deadlineRef.current = null;
              setRemaining(plannedMs);
            }}
            className="gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Reiniciar
          </Button>
          <Button
            variant="ghost"
            onClick={() => void complete(false)}
            disabled={remainingMs === plannedMs}
            className="gap-2"
          >
            <Square className="h-4 w-4" />
            Terminar
          </Button>
        </div>

        <div className="w-full max-w-sm">
          <label className="mb-1.5 block text-[12px] text-cu-text-3">
            Tarea asociada (opcional)
          </label>
          <select
            value={taskId ?? ""}
            onChange={(event) => chooseTask(event.target.value || null)}
            className="h-11 w-full rounded-2xl border border-cu-border bg-cu-bg px-4 text-[15px] text-cu-text outline-none focus:border-cu-orange"
          >
            <option value="">Sin tarea asociada</option>
            {pendingTasks.map((task) => (
              <option key={task.id} value={task.id}>
                {task.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <AmbientControl />

      <FocusStats sessions={sessions} />

      <section className="space-y-3">
        <h2 className="text-[15px] font-semibold text-cu-text">
          Últimas sesiones
        </h2>
        {loading ? (
          <div className="flex justify-center py-10">
            <Spinner />
          </div>
        ) : sessions.length === 0 ? (
          <div className="rounded-cu border border-cu-border bg-cu-surface">
            <EmptyState
              icon={<Timer className="h-5 w-5" />}
              title="Todavía no hay sesiones"
              description="Cuando termines tu primera sesión de enfoque, aparece acá."
            />
          </div>
        ) : (
          <div className="rounded-cu border border-cu-border bg-cu-surface p-1.5">
            {sessions.slice(0, 8).map((session) => {
              const task = tasks.find((item) => item.id === session.taskId);
              const minutes = Math.round(session.focusedSeconds / 60);
              return (
                <div
                  key={session.id}
                  className="flex items-center gap-3 rounded-2xl px-3 py-2.5"
                >
                  <span className="w-16 shrink-0 text-[13px] font-medium tabular-nums text-cu-orange">
                    {minutes} min
                  </span>
                  <span className="min-w-0 flex-1 truncate text-[14px] text-cu-text">
                    {task?.title ?? "Sin tarea"}
                  </span>
                  <span className="shrink-0 text-[12px] text-cu-text-3">
                    {shortDayLabel(toISODate(new Date(session.startedAt)))}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
