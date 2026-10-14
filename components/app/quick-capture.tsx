"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, ListTodo, NotebookPen, Plus, X } from "lucide-react";
import { addDaysISO, todayISO } from "@/lib/organizacion/date";
import type { Priority } from "@/lib/organizacion/types";
import { cn } from "@/lib/utils";
import { useStore } from "./store-provider";
import { Chip, Spinner } from "./ui";

type Kind = "task" | "note" | "event";

const KINDS: { value: Kind; label: string; icon: typeof ListTodo }[] = [
  { value: "task", label: "Tarea", icon: ListTodo },
  { value: "note", label: "Nota", icon: NotebookPen },
  { value: "event", label: "Evento", icon: Calendar },
];

const PRIORITIES: { value: Priority; label: string; dot: string }[] = [
  { value: "high", label: "Alta", dot: "bg-cu-red" },
  { value: "medium", label: "Media", dot: "bg-cu-orange" },
  { value: "low", label: "Baja", dot: "bg-cu-blue" },
];

/**
 * Captura global (⌘K / Ctrl+K). Un solo lugar para tirar una tarea, una nota o
 * un evento sin decidir primero en qué sección va.
 */
export function QuickCapture() {
  const store = useStore();
  const [open, setOpen] = useState(false);
  const [kind, setKind] = useState<Kind>("task");
  const [text, setText] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");
  const [date, setDate] = useState(() => todayISO());
  const [saving, setSaving] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
        return;
      }
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const hoy = todayISO();
  const manana = addDaysISO(hoy, 1);

  async function save() {
    const value = text.trim();
    if (!value || saving) return;
    setSaving(true);
    try {
      if (kind === "task") {
        await store.create("tasks", {
          title: value,
          notes: "",
          done: false,
          priority,
          dueDate: date || null,
          completedAt: null,
        });
      } else if (kind === "note") {
        const [first, ...rest] = value.split("\n");
        await store.create("notes", {
          title: first.trim().slice(0, 120) || "Sin título",
          body: rest.join("\n").trim(),
          pinned: false,
        });
      } else {
        await store.create("events", {
          title: value,
          date: date || hoy,
          startTime: null,
          endTime: null,
          notes: "",
        });
      }
      setText("");
      setPriority("medium");
      setOpen(false);
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Captura rápida"
        title="Captura rápida (Ctrl+K)"
        className="fixed right-5 bottom-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-cu-orange text-white shadow-[0_10px_28px_rgba(255,149,0,0.35)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-orange focus-visible:ring-offset-2 focus-visible:ring-offset-cu-bg md:hidden"
      >
        <Plus className="h-5 w-5" strokeWidth={2.5} />
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/25 p-4 pt-[12vh] backdrop-blur-sm">
          <div className="absolute inset-0" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-lg overflow-hidden rounded-cu border border-cu-border bg-cu-bg shadow-cu-soft">
            <div className="flex items-center gap-2 border-b border-cu-border px-4 py-3">
              {KINDS.map((option) => {
                const Icon = option.icon;
                const active = kind === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setKind(option.value)}
                    aria-pressed={active}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium transition",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-orange",
                      active
                        ? "bg-cu-text text-cu-bg"
                        : "bg-cu-surface-2 text-cu-text-2 hover:text-cu-text",
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {option.label}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="ml-auto flex h-8 w-8 items-center justify-center rounded-full text-cu-text-3 transition hover:bg-cu-surface-2 hover:text-cu-text"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-4">
              <textarea
                ref={inputRef}
                value={text}
                onChange={(event) => setText(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    void save();
                  }
                }}
                rows={kind === "note" ? 4 : 2}
                placeholder={
                  kind === "task"
                    ? "¿Qué necesitás hacer?"
                    : kind === "note"
                      ? "Primera línea = título, después el detalle…"
                      : "¿Qué tenés ese día?"
                }
                className="w-full resize-none rounded-2xl bg-cu-surface px-4 py-3 text-[15px] text-cu-text outline-none transition placeholder:text-cu-text-3 focus:ring-4 focus:ring-cu-orange-soft"
              />

              {kind === "task" ? (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {PRIORITIES.map((option) => (
                    <Chip
                      key={option.value}
                      active={priority === option.value}
                      onClick={() => setPriority(option.value)}
                    >
                      <span
                        className={cn(
                          "mr-1.5 h-1.5 w-1.5 rounded-full",
                          option.dot,
                        )}
                      />
                      {option.label}
                    </Chip>
                  ))}
                </div>
              ) : null}

              {kind !== "note" ? (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {kind === "task" ? (
                    <>
                      <Chip active={date === ""} onClick={() => setDate("")}>
                        Sin fecha
                      </Chip>
                      <Chip active={date === hoy} onClick={() => setDate(hoy)}>
                        Hoy
                      </Chip>
                      <Chip
                        active={date === manana}
                        onClick={() => setDate(manana)}
                      >
                        Mañana
                      </Chip>
                    </>
                  ) : null}
                  <input
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    aria-label="Fecha"
                    className="h-8 rounded-full border border-cu-border bg-cu-bg px-3 text-[13px] text-cu-text outline-none focus:border-cu-orange"
                  />
                </div>
              ) : null}

              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-[11px] text-cu-text-3">
                  Enter para guardar · Esc para cerrar
                </p>
                <button
                  type="button"
                  onClick={() => void save()}
                  disabled={!text.trim() || saving}
                  className={cn(
                    "inline-flex h-9 items-center gap-2 rounded-full bg-cu-orange px-4 text-[14px] font-medium text-white transition",
                    "hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-orange focus-visible:ring-offset-2 focus-visible:ring-offset-cu-bg",
                    "disabled:opacity-40",
                  )}
                >
                  {saving ? (
                    <Spinner className="h-4 w-4 border-white/40 border-t-white" />
                  ) : null}
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
