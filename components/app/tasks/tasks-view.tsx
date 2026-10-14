"use client";

import { useMemo, useState } from "react";
import {
  Check,
  FileText,
  Inbox,
  Pencil,
  Trash2,
  X,
} from "lucide-react";
import {
  formatDueLabel,
  isOverdue,
  todayISO,
  toISODate,
} from "@/lib/organizacion/date";
import type { Priority, Task } from "@/lib/organizacion/types";
import { cn } from "@/lib/utils";
import { useStore } from "../store-provider";
import { useUndo } from "../undo";
import { useCollection } from "../use-collection";
import { Button, Chip, EmptyState, Input, Spinner } from "../ui";
import { QuickAddTask } from "./quick-add";

const PRIORITY_META: Record<
  Priority,
  { label: string; dot: string; text: string }
> = {
  high: { label: "Alta", dot: "bg-cu-red", text: "text-cu-red" },
  medium: { label: "Media", dot: "bg-cu-orange", text: "text-cu-orange" },
  low: { label: "Baja", dot: "bg-cu-blue", text: "text-cu-blue" },
};

const PRIORITY_RANK: Record<Priority, number> = { high: 0, medium: 1, low: 2 };

function sortTasks(a: Task, b: Task) {
  if (a.done !== b.done) return a.done ? 1 : -1;
  const aDue = a.dueDate ?? "9999-99-99";
  const bDue = b.dueDate ?? "9999-99-99";
  if (aDue !== bDue) return aDue < bDue ? -1 : 1;
  if (a.priority !== b.priority) {
    return PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority];
  }
  return b.createdAt - a.createdAt;
}

type Filter = "pending" | "done" | "all";

const FILTERS: { value: Filter; label: string }[] = [
  { value: "pending", label: "Pendientes" },
  { value: "done", label: "Hechas" },
  { value: "all", label: "Todas" },
];

export function TaskRow({ task }: { task: Task }) {
  const store = useStore();
  const { deleteWithUndo } = useUndo();
  const [busy, setBusy] = useState(false);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [notes, setNotes] = useState(task.notes);
  const [priority, setPriority] = useState<Priority>(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate ?? "");

  const meta = PRIORITY_META[task.priority];
  const overdue = !task.done && task.dueDate ? isOverdue(task.dueDate) : false;

  async function run(action: () => Promise<void>) {
    setBusy(true);
    try {
      await action();
    } finally {
      setBusy(false);
    }
  }

  function toggle() {
    const done = !task.done;
    return store.update("tasks", task.id, {
      done,
      completedAt: done ? Date.now() : null,
    });
  }

  function resetDraft() {
    setTitle(task.title);
    setNotes(task.notes);
    setPriority(task.priority);
    setDueDate(task.dueDate ?? "");
  }

  if (editing) {
    return (
      <div className="rounded-2xl border border-cu-orange/40 bg-cu-bg p-3">
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Título"
          aria-label="Título de la tarea"
          className="h-9 border-transparent bg-cu-surface text-[15px] font-semibold"
        />
        <textarea
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          rows={3}
          placeholder="Detalle, pasos, links…"
          aria-label="Detalle de la tarea"
          className="mt-2 w-full resize-none rounded-2xl bg-cu-surface px-4 py-3 text-[14px] text-cu-text outline-none transition placeholder:text-cu-text-3 focus:ring-4 focus:ring-cu-orange-soft"
        />
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {(Object.keys(PRIORITY_META) as Priority[]).map((value) => (
            <Chip
              key={value}
              active={priority === value}
              onClick={() => setPriority(value)}
            >
              <span
                className={cn(
                  "mr-1.5 h-1.5 w-1.5 rounded-full",
                  PRIORITY_META[value].dot,
                )}
              />
              {PRIORITY_META[value].label}
            </Chip>
          ))}
          <span className="mx-1 h-4 w-px bg-cu-border" />
          <input
            type="date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
            aria-label="Fecha límite"
            className="h-8 rounded-full border border-cu-border bg-cu-bg px-3 text-[13px] text-cu-text outline-none focus:border-cu-orange"
          />
        </div>
        <div className="mt-3 flex justify-end gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              resetDraft();
              setEditing(false);
            }}
          >
            <X className="h-4 w-4" />
            Cancelar
          </Button>
          <Button
            size="sm"
            className="gap-1.5"
            disabled={busy || !title.trim()}
            onClick={() =>
              run(async () => {
                await store.update("tasks", task.id, {
                  title: title.trim(),
                  notes: notes.trim(),
                  priority,
                  dueDate: dueDate || null,
                });
                setEditing(false);
              })
            }
          >
            <Check className="h-4 w-4" />
            Guardar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group flex items-center gap-3 rounded-2xl px-3 py-2.5 transition hover:bg-cu-surface-2",
        busy && "opacity-60",
      )}
    >
      <button
        onClick={() => run(toggle)}
        aria-label={task.done ? "Marcar como pendiente" : "Marcar como hecha"}
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-orange focus-visible:ring-offset-2 focus-visible:ring-offset-cu-surface",
          task.done
            ? "border-cu-orange bg-cu-orange text-white"
            : "border-cu-text-3 hover:border-cu-orange",
        )}
      >
        {task.done ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : null}
      </button>

      <div className="min-w-0 flex-1">
        <p
          className={cn(
            "truncate text-[15px]",
            task.done ? "text-cu-text-3 line-through" : "text-cu-text",
          )}
        >
          {task.title}
        </p>
        <div className="mt-0.5 flex items-center gap-2.5 text-[12px]">
          <span className={cn("inline-flex items-center gap-1.5", meta.text)}>
            <span className={cn("h-1.5 w-1.5 rounded-full", meta.dot)} />
            {meta.label}
          </span>
          {task.dueDate ? (
            <span
              className={overdue ? "font-medium text-cu-red" : "text-cu-text-3"}
            >
              {formatDueLabel(task.dueDate)}
              {overdue ? " · atrasada" : ""}
            </span>
          ) : null}
          {task.notes ? (
            <span
              className="inline-flex items-center gap-1 text-cu-text-3"
              title="Tiene detalle"
            >
              <FileText className="h-3 w-3" />
              Detalle
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-0.5 opacity-0 transition group-hover:opacity-100 focus-within:opacity-100">
        <button
          onClick={() => setEditing(true)}
          aria-label="Editar tarea"
          title="Editar"
          className="flex h-8 w-8 items-center justify-center rounded-full text-cu-text-3 transition hover:bg-cu-surface-2 hover:text-cu-text focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-orange"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          onClick={() =>
            void run(() => deleteWithUndo("tasks", task, "Tarea eliminada"))
          }
          aria-label="Eliminar tarea"
          title="Eliminar"
          className="flex h-8 w-8 items-center justify-center rounded-full text-cu-text-3 transition hover:bg-cu-red/10 hover:text-cu-red focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-red"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function TasksView({
  mode,
  title,
  description,
}: {
  mode: "today" | "all";
  title: React.ReactNode;
  description?: string;
}) {
  const { records: tasks, loading, error } = useCollection<Task>("tasks");
  const [filter, setFilter] = useState<Filter>("pending");

  const today = todayISO();

  // En modo "Hoy" sólo mostramos lo que corresponde a hoy: lo atrasado, lo de
  // hoy y lo que no tiene fecha (para no perder nada por el camino).
  const scoped = useMemo(() => {
    if (mode === "all") return tasks;
    return tasks.filter((task) => {
      if (task.done) {
        return task.completedAt
          ? toISODate(new Date(task.completedAt)) === today
          : false;
      }
      if (!task.dueDate) return true;
      return task.dueDate <= today;
    });
  }, [tasks, mode, today]);

  const visible = useMemo(() => {
    const filtered = scoped.filter((task) =>
      filter === "all" ? true : filter === "done" ? task.done : !task.done,
    );
    return [...filtered].sort(sortTasks);
  }, [scoped, filter]);

  const pendingCount = scoped.filter((task) => !task.done).length;
  const doneCount = scoped.filter((task) => task.done).length;
  const total = pendingCount + doneCount;
  const progress = total === 0 ? 0 : Math.round((doneCount / total) * 100);

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-[28px] leading-tight font-semibold tracking-tight text-cu-text">
          {title}
        </h1>
        {description ? (
          <p className="text-[15px] text-cu-text-2">{description}</p>
        ) : null}
      </header>

      <QuickAddTask defaultDueDate={mode === "today" ? today : null} />

      {total > 0 ? (
        <div className="flex items-center gap-3">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-cu-surface-2">
            <div
              className="h-full rounded-full bg-cu-orange transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[12px] tabular-nums text-cu-text-2">
            {doneCount}/{total}
          </span>
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-2">
        {FILTERS.map((option) => (
          <Chip
            key={option.value}
            active={filter === option.value}
            onClick={() => setFilter(option.value)}
          >
            {option.label}
          </Chip>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Spinner />
        </div>
      ) : error ? (
        <p className="py-8 text-center text-[14px] text-cu-red">{error}</p>
      ) : visible.length === 0 ? (
        <div className="rounded-cu border border-cu-border bg-cu-surface">
          <EmptyState
            icon={<Inbox className="h-5 w-5" />}
            title={
              filter === "done"
                ? "Todavía no completaste nada"
                : mode === "today"
                  ? "Hoy está despejado"
                  : "No hay tareas por acá"
            }
            description={
              filter === "done"
                ? "Cuando marques una tarea como hecha, va a aparecer acá."
                : "Agregá la primera arriba y empezá por lo más chico."
            }
          />
        </div>
      ) : (
        <div className="rounded-cu border border-cu-border bg-cu-surface p-1.5">
          <div className="flex flex-col">
            {visible.map((task) => (
              <TaskRow key={task.id} task={task} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
