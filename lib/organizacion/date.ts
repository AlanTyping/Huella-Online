/** Utilidades de fecha en horario local (nunca UTC, para no correr el día). */

/**
 * Reloj del sistema aislado en una función propia. Se usa siempre dentro de
 * handlers y efectos (nunca durante el render), pero aislarlo evita que el
 * compilador de React lo trate como una lectura impura en el cuerpo del
 * componente.
 */
export function nowMs(): number {
  return Date.now();
}

export function toISODate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function todayISO(): string {
  return toISODate(new Date());
}

export function addDaysISO(iso: string, days: number): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() + days);
  return toISODate(date);
}

const WEEKDAYS = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
const MONTHS = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
];

/** "Hoy", "Mañana", "Ayer" o "lun 14 oct". */
export function formatDueLabel(iso: string): string {
  const today = todayISO();
  if (iso === today) return "Hoy";
  if (iso === addDaysISO(today, 1)) return "Mañana";
  if (iso === addDaysISO(today, -1)) return "Ayer";

  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return `${WEEKDAYS[date.getDay()]} ${d} ${MONTHS[date.getMonth()]}`;
}

export function isOverdue(iso: string): boolean {
  return iso < todayISO();
}

/** Saludo según la hora, para el encabezado de "Hoy". */
export function greeting(): string {
  const hour = new Date().getHours();
  if (hour < 6) return "Buenas noches";
  if (hour < 13) return "Buenos días";
  if (hour < 20) return "Buenas tardes";
  return "Buenas noches";
}

export function longDateToday(): string {
  const date = new Date();
  return `${WEEKDAYS[date.getDay()]} ${date.getDate()} de ${MONTHS[date.getMonth()]}`;
}

/** "Hoy", "Ayer" o "13 oct" para timestamps. */
export function formatTimestampDay(ts: number): string {
  const date = new Date(ts);
  const iso = toISODate(date);
  const today = todayISO();
  if (iso === today) return "Hoy";
  if (iso === addDaysISO(today, -1)) return "Ayer";
  return `${date.getDate()} ${MONTHS[date.getMonth()]}`;
}

/** Etiqueta corta de un día ISO: "lun 13". */
export function shortDayLabel(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return `${WEEKDAYS[date.getDay()]} ${d}`;
}

/** Nombre del mes y año: "octubre 2026". */
const MONTHS_LONG = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

export function monthLabel(year: number, monthIndex: number): string {
  return `${MONTHS_LONG[monthIndex]} ${year}`;
}

/** Matriz de semanas (lunes a domingo) que cubre el mes indicado. */
export function monthMatrix(year: number, monthIndex: number): string[][] {
  const first = new Date(year, monthIndex, 1);
  const offset = (first.getDay() + 6) % 7; // lunes = 0
  const start = new Date(year, monthIndex, 1 - offset);

  const weeks: string[][] = [];
  const cursor = new Date(start);
  for (let week = 0; week < 6; week += 1) {
    const days: string[] = [];
    for (let day = 0; day < 7; day += 1) {
      days.push(toISODate(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(days);
  }
  return weeks;
}

export const WEEKDAY_INITIALS = ["L", "M", "M", "J", "V", "S", "D"];

