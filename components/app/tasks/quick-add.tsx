"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { addDaysISO, todayISO } from "@/lib/organizacion/date";
import type { Priority } from "@/lib/organizacion/types";
import { cn } from "@/lib/utils";
import { useStore } from "../store-provider";
import { Chip, Input, Spinner } from "../ui";

const PRIORITY_META: Record<
  Priority,
  { label: string; dot: string }
> = {
  high: { label: "Alta", dot: "bg-cu-red" },
  medium: { label: "Media", dot: "bg-cu-orange" },
  low: { label: "Baja", dot: "bg-cu-blue" },
};

export function QuickAddTask({
  defaultDueDate = null,
}: {
  defaultDueDate?: string | null;
}) {
  const store = useStore();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");
  const [dueDate, setDueDate] = useState<string | null>(defaultDueDate);
  const [saving, setSaving] = useState(false);

  const hoy = todayISO();
  const manana = addDaysISO(hoy, 1);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const value = title.trim();
    if (!value || saving) return;
    setSaving(true);
    try {
      await store.create("tasks", {
        title: value,
        notes: "",
        done: false,
        priority,
        dueDate,
        completedAt: null,
      });
      setTitle("");
      setPriority("medium");
    } finally {
      setSaving(false);
    }
  }

  const dateOptions: { label: string; value: string | null }[] = [
    { label: "Sin fecha", value: null },
    { label: "Hoy", value: hoy },
    { label: "Mañana", value: manana },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="g-panel p-3"
    >
      <div className="flex items-center gap-2">
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="¿Qué necesitás hacer?"
          aria-label="Nueva tarea"
          className="h-10"
        />
        <button
          type="submit"
          disabled={!title.trim() || saving}
          aria-label="Agregar tarea"
          className={cn(
            "g-btn g-btn-primary h-10 w-10 shrink-0",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-orange focus-visible:ring-offset-2 focus-visible:ring-offset-cu-surface",
          )}
        >
          {saving ? (
            <Spinner className="h-4 w-4 border-white/40 border-t-white" />
          ) : (
            <Plus className="h-5 w-5" strokeWidth={2.5} />
          )}
        </button>
      </div>

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

        {dateOptions.map((option) => (
          <Chip
            key={option.label}
            active={dueDate === option.value}
            onClick={() => setDueDate(option.value)}
          >
            {option.label}
          </Chip>
        ))}
      </div>
    </form>
  );
}
