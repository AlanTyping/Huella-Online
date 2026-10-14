/**
 * Ids generados en el cliente. Al ser propios (no autogenerados por el motor)
 * permiten copiar registros de IndexedDB a Firestore sin duplicados ni
 * remapeos el día que alguien activa la nube.
 */
export function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}
