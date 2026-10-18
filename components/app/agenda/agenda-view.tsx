"use client";

import { useMemo, useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, Plus, Trash2 } from "lucide-react";
import {
  formatDueLabel,
  monthLabel,
  monthMatrix,
  todayISO,
  WEEKDAY_INITIALS,
} from "@/lib/organizacion/date";
import type { CalendarEvent } from "@/lib/organizacion/types";
import { cn } from "@/lib/utils";
import { useStore } from "../store-provider";
import { useUndo } from "../undo";
import { useCollection } from "../use-collection";
import { Button, EmptyState, IconButton, Input, Spinner } from "../ui";

function EventForm({ date }: { date: string }) {
  const store = useStore();
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [saving, setSaving] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    const value = title.trim();
    if (!value || saving) return;
    setSaving(true);
    try {
      await store.create("events", {
        title: value,
        date,
        startTime: startTime || null,
        endTime: endTime || null,
        notes: "",
      });
      setTitle("");
      setStartTime("");
      setEndTime("");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={submit}
      className="g-panel p-3"
    >
      <div className="flex flex-wrap items-center gap-2">
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="¿Qué tenés ese día?"
          aria-label="Nuevo evento"
          className="h-10 min-w-40 flex-1"
        />
        <input
          type="time"
          value={startTime}
          onChange={(event) => setStartTime(event.target.value)}
          aria-label="Hora de inicio"
          className="g-inset h-10 px-3 text-[12px] text-cu-text outline-none focus:border-cu-orange"
        />
        <input
          type="time"
          value={endTime}
          onChange={(event) => setEndTime(event.target.value)}
          aria-label="Hora de fin"
          className="g-inset h-10 px-3 text-[12px] text-cu-text outline-none focus:border-cu-orange"
        />
        <Button
          type="submit"
          size="md"
          disabled={!title.trim() || saving}
          className="gap-1.5"
        >
          {saving ? (
            <Spinner className="h-4 w-4 border-white/40 border-t-white" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
          Agregar
        </Button>
      </div>
    </form>
  );
}

function EventRow({ event }: { event: CalendarEvent }) {
  const { deleteWithUndo } = useUndo();
  const time =
    event.startTime && event.endTime
      ? `${event.startTime} – ${event.endTime}`
      : event.startTime
        ? event.startTime
        : "Todo el día";

  return (
    <div className="group flex items-center gap-3 rounded-2xl px-3 py-2.5 transition hover:bg-cu-surface-2">
      <span className="w-24 shrink-0 text-[13px] tabular-nums text-cu-blue">
        {time}
      </span>
      <p className="min-w-0 flex-1 truncate text-[15px] text-cu-text">
        {event.title}
      </p>
      <IconButton
        aria-label="Eliminar evento"
        title="Eliminar"
        className="opacity-0 group-hover:opacity-100 hover:bg-cu-red/10 hover:text-cu-red"
        onClick={() =>
          void deleteWithUndo("events", event, "Evento eliminado")
        }
      >
        <Trash2 className="h-4 w-4" />
      </IconButton>
    </div>
  );
}

export function AgendaView() {
  const { records: events, loading, error } = useCollection<CalendarEvent>("events");
  const today = todayISO();
  const [selected, setSelected] = useState(today);
  const [cursor, setCursor] = useState(() => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  });

  const weeks = useMemo(
    () => monthMatrix(cursor.year, cursor.month),
    [cursor],
  );

  const byDate = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    for (const event of events) {
      const list = map.get(event.date) ?? [];
      list.push(event);
      map.set(event.date, list);
    }
    for (const list of map.values()) {
      list.sort((a, b) =>
        (a.startTime ?? "99").localeCompare(b.startTime ?? "99"),
      );
    }
    return map;
  }, [events]);

  const dayEvents = byDate.get(selected) ?? [];

  function move(delta: number) {
    setCursor((current) => {
      const date = new Date(current.year, current.month + delta, 1);
      return { year: date.getFullYear(), month: date.getMonth() };
    });
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-1">
          <h1 className="text-[28px] leading-tight font-semibold tracking-tight text-cu-text">
            Agenda
          </h1>
          <p className="text-[15px] text-cu-text-2">
            Ubicá tus compromisos en el tiempo.
          </p>
        </div>
        <div className="flex items-center gap-1">
          <IconButton aria-label="Mes anterior" onClick={() => move(-1)}>
            <ChevronLeft className="h-5 w-5" />
          </IconButton>
          <span className="min-w-40 text-center text-[15px] font-semibold text-cu-text capitalize">
            {monthLabel(cursor.year, cursor.month)}
          </span>
          <IconButton aria-label="Mes siguiente" onClick={() => move(1)}>
            <ChevronRight className="h-5 w-5" />
          </IconButton>
          <Button
            variant="ghost"
            size="sm"
            className="ml-1"
            onClick={() => {
              const now = new Date();
              setCursor({ year: now.getFullYear(), month: now.getMonth() });
              setSelected(today);
            }}
          >
            Hoy
          </Button>
        </div>
      </header>

      <div className="g-panel p-3">
        <div className="mb-1 grid grid-cols-7 gap-1">
          {WEEKDAY_INITIALS.map((initial, index) => (
            <span
              key={`${initial}-${index}`}
              className="text-center text-[11px] font-semibold text-cu-text-3"
            >
              {initial}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {weeks.flat().map((iso) => {
            const [, m, d] = iso.split("-").map(Number);
            const inMonth = m - 1 === cursor.month;
            const isToday = iso === today;
            const isSelected = iso === selected;
            const list = byDate.get(iso) ?? [];

            return (
              <button
                key={iso}
                onClick={() => setSelected(iso)}
                className={cn(
                  "flex h-[76px] flex-col items-stretch gap-1 rounded-xl p-1.5 text-left transition",
                  isSelected
                    ? "bg-cu-orange-soft ring-1 ring-cu-orange"
                    : "hover:bg-cu-surface-2",
                  !inMonth && "opacity-40",
                )}
              >
                <span
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-full text-[12px]",
                    isToday
                      ? "bg-cu-orange font-semibold text-white"
                      : "text-cu-text-2",
                  )}
                >
                  {d}
                </span>
                <span className="flex flex-col gap-0.5 overflow-hidden">
                  {list.slice(0, 2).map((event) => (
                    <span
                      key={event.id}
                      className="truncate rounded bg-cu-blue-soft px-1 text-[10px] leading-4 text-cu-blue"
                    >
                      {event.title}
                    </span>
                  ))}
                  {list.length > 2 ? (
                    <span className="px-1 text-[10px] text-cu-text-3">
                      +{list.length - 2} más
                    </span>
                  ) : null}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-[15px] font-semibold text-cu-text capitalize">
          {formatDueLabel(selected)}
        </h2>

        <EventForm date={selected} />

        {loading ? (
          <div className="flex justify-center py-10">
            <Spinner />
          </div>
        ) : error ? (
          <p className="py-6 text-center text-[14px] text-cu-red">{error}</p>
        ) : dayEvents.length === 0 ? (
          <div className="g-panel">
            <EmptyState
              icon={<Calendar className="h-5 w-5" />}
              title="Sin eventos"
              description="Agregá uno arriba para ese día."
            />
          </div>
        ) : (
          <div className="g-panel p-1.5">
            <div className="flex flex-col">
              {dayEvents.map((event) => (
                <EventRow key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
