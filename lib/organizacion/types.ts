/**
 * Modelo de datos del organizador. Es independiente del motor de guardado:
 * los mismos registros viven en IndexedDB (local, gratis) o en Firestore
 * (nube, pago). Ver `lib/organizacion/store/`.
 *
 * Todo registro tiene `id`, `createdAt` y `updatedAt` para que el motor local y
 * el de la nube puedan intercambiarse (y migrar de uno a otro) sin fricción.
 */

export type BaseRecord = {
  id: string;
  createdAt: number;
  updatedAt: number;
};

export type Priority = "low" | "medium" | "high";

export type Task = BaseRecord & {
  title: string;
  notes: string;
  done: boolean;
  priority: Priority;
  /** Fecha objetivo en formato "YYYY-MM-DD", o null si no tiene fecha. */
  dueDate: string | null;
  completedAt: number | null;
};

export type Note = BaseRecord & {
  title: string;
  body: string;
  pinned: boolean;
};

export type Habit = BaseRecord & {
  name: string;
  /** Días de la semana activos (0 = domingo … 6 = sábado). */
  weekdays: number[];
  /** Registro por día: { "2026-10-13": true }. */
  logs: Record<string, boolean>;
};

export type CalendarEvent = BaseRecord & {
  title: string;
  /** "YYYY-MM-DD" */
  date: string;
  /** "HH:mm" opcional. */
  startTime: string | null;
  /** "HH:mm" opcional. */
  endTime: string | null;
  notes: string;
};

export type FocusSession = BaseRecord & {
  /** Duración planificada en minutos. */
  plannedMinutes: number;
  /** Duración real enfocada en segundos. */
  focusedSeconds: number;
  taskId: string | null;
  startedAt: number;
  endedAt: number | null;
};

export type OrganizacionSettings = {
  defaultFocusMinutes: number;
  ambientSound: string | null;
};
