"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Calendar,
  Check,
  Flame,
  ListTodo,
  Sparkles,
  Timer,
} from "lucide-react";
import {
  greeting,
  longDateToday,
  shortDayLabel,
  todayISO,
  toISODate,
} from "@/lib/organizacion/date";
import type { CalendarEvent, FocusSession, Habit, Task } from "@/lib/organizacion/types";
import { cn } from "@/lib/utils";
import { useStore } from "../store-provider";
import { useCollection } from "../use-collection";
import { QuickAddTask } from "../tasks/quick-add";
import { TaskRow } from "../tasks/tasks-view";
import { Card, Spinner } from "../ui";

function StatCard({
  icon,
  value,
  label,
  href,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-2 rounded-cu border border-cu-border bg-cu-surface p-4 transition hover:bg-cu-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-orange focus-visible:ring-offset-2 focus-visible:ring-offset-cu-bg"
    >
      <span className="flex items-center justify-between">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cu-bg text-cu-text-2">
          {icon}
        </span>
        <ArrowRight className="h-4 w-4 text-cu-text-3 transition group-hover:translate-x-0.5 group-hover:text-cu-text-2" />
      </span>
      <span className="text-[24px] leading-none font-semibold tabular-nums text-cu-text">
        {value}
      </span>
      <span className="text-[12px] text-cu-text-2">{label}</span>
    </Link>
  );
}

function HabitQuickRow({ habit }: { habit: Habit }) {
  const store = useStore();
  const [busy, setBusy] = useState(false);
  const today = todayISO();
  const done = Boolean(habit.logs[today]);

  async function toggle() {
    setBusy(true);
    try {
      const logs = { ...habit.logs };
      if (logs[today]) delete logs[today];
      else logs[today] = true;
      await store.update("habits", habit.id, { logs });
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={() => void toggle()}
      disabled={busy}
      className={cn(
        "flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition hover:bg-cu-surface-2",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-orange",
        busy && "opacity-60",
      )}
    >
      <span
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition",
          done
            ? "border-cu-orange bg-cu-orange text-white"
            : "border-cu-text-3",
        )}
      >
        {done ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : null}
      </span>
      <span className="flex-1 truncate text-[15px] text-cu-text">
        {habit.name}
      </span>
    </button>
  );
}

function Section({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-[15px] font-semibold text-cu-text">{title}</h2>
        <Link
          href={href}
          className="rounded-full px-2 py-1 text-[12px] text-cu-text-2 transition hover:bg-cu-surface-2 hover:text-cu-text"
        >
          Ver todo
        </Link>
      </div>
      {children}
    </section>
  );
}

export function HoyDashboard() {
  const today = todayISO();
  const weekday = new Date().getDay();

  const { records: tasks, loading: loadingTasks } = useCollection<Task>("tasks");
  const { records: habits } = useCollection<Habit>("habits");
  const { records: events } = useCollection<CalendarEvent>("events");
  const { records: sessions } = useCollection<FocusSession>("focusSessions");

  const pendingToday = useMemo(
    () =>
      tasks
        .filter(
          (task) =>
            !task.done && (!task.dueDate || task.dueDate <= today),
        )
        .sort((a, b) => {
          const aDue = a.dueDate ?? "9999-99-99";
          const bDue = b.dueDate ?? "9999-99-99";
          if (aDue !== bDue) return aDue < bDue ? -1 : 1;
          return b.createdAt - a.createdAt;
        }),
    [tasks, today],
  );

  const habitsToday = useMemo(
    () => habits.filter((habit) => habit.weekdays.includes(weekday)),
    [habits, weekday],
  );
  const habitsPending = habitsToday.filter((habit) => !habit.logs[today]);

  const eventsToday = useMemo(
    () =>
      events
        .filter((event) => event.date === today)
        .sort((a, b) =>
          (a.startTime ?? "99").localeCompare(b.startTime ?? "99"),
        ),
    [events, today],
  );

  const focusMinutes = useMemo(
    () =>
      Math.round(
        sessions
          .filter((session) => toISODate(new Date(session.startedAt)) === today)
          .reduce((sum, session) => sum + session.focusedSeconds, 0) / 60,
      ),
    [sessions, today],
  );

  const everythingClear =
    pendingToday.length === 0 &&
    habitsPending.length === 0 &&
    eventsToday.length === 0 &&
    focusMinutes === 0;

  return (
    <div className="space-y-7">
      <header className="space-y-1">
        <h1 className="text-[28px] leading-tight font-semibold tracking-tight text-cu-text">
          {greeting()}
        </h1>
        <p className="text-[15px] text-cu-text-2 capitalize">
          {longDateToday()}
        </p>
      </header>

      <QuickAddTask defaultDueDate={today} />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard
          icon={<ListTodo className="h-4 w-4" />}
          value={String(pendingToday.length)}
          label="Tareas para hoy"
          href="/organizacion/tareas"
        />
        <StatCard
          icon={<Flame className="h-4 w-4" />}
          value={String(habitsPending.length)}
          label="Hábitos por marcar"
          href="/organizacion/habitos"
        />
        <StatCard
          icon={<Calendar className="h-4 w-4" />}
          value={String(eventsToday.length)}
          label="Eventos de hoy"
          href="/organizacion/agenda"
        />
        <StatCard
          icon={<Timer className="h-4 w-4" />}
          value={`${focusMinutes}m`}
          label="Foco de hoy"
          href="/organizacion/enfoque"
        />
      </div>

      {everythingClear && !loadingTasks ? (
        <Card className="flex flex-col items-center gap-2 py-10 text-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cu-orange-soft text-cu-orange">
            <Sparkles className="h-5 w-5" />
          </span>
          <p className="text-[15px] font-semibold text-cu-text">
            Todo despejado
          </p>
          <p className="max-w-xs text-[13px] text-cu-text-2">
            No tenés tareas, hábitos ni eventos pendientes para hoy. Aprovechá
            para adelantar algo o descansar.
          </p>
        </Card>
      ) : null}

      {pendingToday.length > 0 ? (
        <Section title="Tus tareas de hoy" href="/organizacion/tareas">
          <div className="rounded-cu border border-cu-border bg-cu-surface p-1.5">
            <div className="flex flex-col">
              {pendingToday.slice(0, 5).map((task) => (
                <TaskRow key={task.id} task={task} />
              ))}
            </div>
          </div>
        </Section>
      ) : loadingTasks ? (
        <div className="flex justify-center py-8">
          <Spinner />
        </div>
      ) : null}

      {habitsToday.length > 0 ? (
        <Section title="Hábitos de hoy" href="/organizacion/habitos">
          <div className="rounded-cu border border-cu-border bg-cu-surface p-1.5">
            <div className="flex flex-col">
              {habitsToday.map((habit) => (
                <HabitQuickRow key={habit.id} habit={habit} />
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      {eventsToday.length > 0 ? (
        <Section title="Agenda de hoy" href="/organizacion/agenda">
          <div className="rounded-cu border border-cu-border bg-cu-surface p-1.5">
            {eventsToday.map((event) => (
              <div
                key={event.id}
                className="flex items-center gap-3 rounded-2xl px-3 py-2.5"
              >
                <span className="w-20 shrink-0 text-[13px] tabular-nums text-cu-blue">
                  {event.startTime ?? "Todo el día"}
                </span>
                <span className="min-w-0 flex-1 truncate text-[15px] text-cu-text">
                  {event.title}
                </span>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      {sessions.length > 0 ? (
        <p className="text-center text-[12px] text-cu-text-3">
          Última sesión de foco:{" "}
          {shortDayLabel(toISODate(new Date(sessions[0].startedAt)))}
        </p>
      ) : null}
    </div>
  );
}
