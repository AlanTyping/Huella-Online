"use client";

import { useMemo, useState } from "react";
import {
  Check,
  NotebookPen,
  Pencil,
  Pin,
  PinOff,
  Plus,
  Search,
  Trash2,
  X,
} from "lucide-react";
import { formatTimestampDay } from "@/lib/organizacion/date";
import type { Note } from "@/lib/organizacion/types";
import { cn } from "@/lib/utils";
import { useStore } from "../store-provider";
import { useUndo } from "../undo";
import { useCollection } from "../use-collection";
import { Button, EmptyState, IconButton, Input, Spinner } from "../ui";

function splitNote(text: string): { title: string; body: string } {
  const lines = text.trim().split("\n");
  const title = (lines.shift() ?? "").trim().slice(0, 120);
  return { title: title || "Sin título", body: lines.join("\n").trim() };
}

function Composer() {
  const store = useStore();
  const [text, setText] = useState("");
  const [saving, setSaving] = useState(false);

  async function save() {
    const value = text.trim();
    if (!value || saving) return;
    setSaving(true);
    try {
      const { title, body } = splitNote(value);
      await store.create("notes", { title, body, pinned: false });
      setText("");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        void save();
      }}
      className="rounded-cu border border-cu-border bg-cu-surface p-3"
    >
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={3}
        placeholder="Volcá lo que tengas en la cabeza…"
        className="w-full resize-none rounded-2xl bg-cu-bg px-4 py-3 text-[15px] text-cu-text outline-none transition placeholder:text-cu-text-3 focus:ring-4 focus:ring-cu-orange-soft"
      />
      <div className="mt-2 flex items-center justify-between gap-3">
        <p className="text-[11px] text-cu-text-3">
          La primera línea es el título.
        </p>
        <Button
          type="submit"
          size="sm"
          disabled={!text.trim() || saving}
          className="gap-1.5"
        >
          {saving ? (
            <Spinner className="h-3.5 w-3.5 border-white/40 border-t-white" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
          Guardar
        </Button>
      </div>
    </form>
  );
}

function NoteCard({ note }: { note: Note }) {
  const store = useStore();
  const { deleteWithUndo } = useUndo();
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const [busy, setBusy] = useState(false);

  async function run(action: () => Promise<void>) {
    setBusy(true);
    try {
      await action();
    } finally {
      setBusy(false);
    }
  }

  if (editing) {
    return (
      <div className="rounded-cu border border-cu-orange/40 bg-cu-surface p-4">
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Título"
          className="h-9 border-transparent bg-cu-bg text-[15px] font-semibold"
        />
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          rows={5}
          placeholder="Detalle…"
          className="mt-2 w-full resize-none rounded-2xl bg-cu-bg px-4 py-3 text-[14px] text-cu-text outline-none transition placeholder:text-cu-text-3 focus:ring-4 focus:ring-cu-orange-soft"
        />
        <div className="mt-3 flex justify-end gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setTitle(note.title);
              setBody(note.body);
              setEditing(false);
            }}
          >
            <X className="h-4 w-4" />
            Cancelar
          </Button>
          <Button
            size="sm"
            className="gap-1.5"
            disabled={busy}
            onClick={() =>
              run(async () => {
                await store.update("notes", note.id, { title, body });
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
        "group rounded-cu border border-cu-border bg-cu-surface p-4 transition",
        busy && "opacity-60",
      )}
    >
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            {note.pinned ? (
              <Pin className="h-3.5 w-3.5 shrink-0 text-cu-orange" />
            ) : null}
            <h3 className="truncate text-[15px] font-semibold text-cu-text">
              {note.title}
            </h3>
          </div>
          {note.body ? (
            <p className="mt-1 line-clamp-3 whitespace-pre-wrap text-[13px] leading-relaxed text-cu-text-2">
              {note.body}
            </p>
          ) : null}
          <p className="mt-2 text-[11px] text-cu-text-3">
            {formatTimestampDay(note.updatedAt)}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-0.5 opacity-0 transition group-hover:opacity-100 focus-within:opacity-100">
          <IconButton
            aria-label={note.pinned ? "Desfijar" : "Fijar"}
            title={note.pinned ? "Desfijar" : "Fijar"}
            onClick={() =>
              run(() => store.update("notes", note.id, { pinned: !note.pinned }))
            }
          >
            {note.pinned ? (
              <PinOff className="h-4 w-4" />
            ) : (
              <Pin className="h-4 w-4" />
            )}
          </IconButton>
          <IconButton
            aria-label="Editar nota"
            title="Editar"
            onClick={() => setEditing(true)}
          >
            <Pencil className="h-4 w-4" />
          </IconButton>
          <IconButton
            aria-label="Eliminar nota"
            title="Eliminar"
            className="hover:bg-cu-red/10 hover:text-cu-red"
            onClick={() =>
              run(() => deleteWithUndo("notes", note, "Nota eliminada"))
            }
          >
            <Trash2 className="h-4 w-4" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export function NotesView() {
  const { records: notes, loading, error } = useCollection<Note>("notes");
  const [search, setSearch] = useState("");

  const visible = useMemo(() => {
    const term = search.trim().toLowerCase();
    const filtered = term
      ? notes.filter((note) =>
          `${note.title} ${note.body}`.toLowerCase().includes(term),
        )
      : notes;
    return [...filtered].sort((a, b) => {
      if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
      return b.updatedAt - a.updatedAt;
    });
  }, [notes, search]);

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-[28px] leading-tight font-semibold tracking-tight text-cu-text">
          Notas
        </h1>
        <p className="text-[15px] text-cu-text-2">
          Un lugar para vaciar la cabeza y no perder ninguna idea.
        </p>
      </header>

      <Composer />

      {notes.length > 0 ? (
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-cu-text-3" />
          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar en tus notas…"
            aria-label="Buscar notas"
            className="h-10 pl-11"
          />
        </div>
      ) : null}

      {loading ? (
        <div className="flex justify-center py-12">
          <Spinner />
        </div>
      ) : error ? (
        <p className="py-8 text-center text-[14px] text-cu-red">{error}</p>
      ) : visible.length === 0 ? (
        <div className="rounded-cu border border-cu-border bg-cu-surface">
          <EmptyState
            icon={<NotebookPen className="h-5 w-5" />}
            title={notes.length === 0 ? "Todavía no hay notas" : "Sin resultados"}
            description={
              notes.length === 0
                ? "Escribí arriba la primera idea y guardala. Nada se pierde."
                : "Probá con otra palabra."
            }
          />
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {visible.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      )}
    </div>
  );
}
