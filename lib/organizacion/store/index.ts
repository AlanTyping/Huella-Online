// Ojo: NO re-exportar `./cloud` desde acá. `cloud.ts` importa el SDK de Firebase
// y debe quedar fuera del grafo de imports estáticos para no engordar el bundle
// inicial. Se importa dinámicamente desde `components/app/store-provider.tsx`.
export { getLocalStore } from "./local";
export { newId } from "./id";
export { ORDER_FIELD } from "./types";
export type {
  BaseRecord,
  Collection,
  OrganizacionStore,
  StoreMode,
  Unsubscribe,
} from "./types";
