# Organizador personal — `/organizacion`

Herramienta **gratuita** para ordenar el día: tareas, foco, notas, hábitos,
agenda y sonido ambiente.

## Cómo funciona (local-first)

- **Sin cuenta, sin registro, sin límites.** Entrás y usás todo.
- **Tus datos quedan en tu dispositivo**, en IndexedDB. Nada viaja a ningún
  servidor. Funciona incluso sin internet.
- **La cuenta en la nube es opcional y paga.** Sirve para sincronizar entre
  dispositivos y tener backup. Todavía no está disponible (ver *Estado*).

## Arquitectura

Toda la UI habla con una sola interfaz, `OrganizacionStore`
(`lib/organizacion/store/types.ts`), que tiene dos motores:

```
lib/organizacion/store/
├── types.ts   → la interfaz + tipos compartidos
├── local.ts   → IndexedDB  (gratis, sin cuenta, offline)
├── cloud.ts   → Firestore  (requiere cuenta + suscripción)
└── id.ts      → ids generados en el cliente
```

El `StoreProvider` (`components/app/store-provider.tsx`) elige el motor: si no
hay sesión, usa el local; si en el futuro hay una cuenta con suscripción activa,
usa la nube. **Los componentes no cambian.**

Los ids se generan en el cliente (`newId()`), no en el motor. Por eso, el día
que alguien activa la nube, migrar sus datos locales es copiar y pegar: mismos
ids, sin duplicados.

## Firebase (opcional, para la fase de nube)

El organizador funciona **sin configurar nada**. Firebase sólo hace falta cuando
se active la cuenta paga.

1. Creá un proyecto en <https://console.firebase.google.com>.
2. Habilitá **Authentication → Google**.
3. Creá **Firestore Database** en modo producción.
4. Agregá una app **Web** y copiá su `firebaseConfig`.
5. Copiá `.env.example` a `.env.local` y completá:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu-proyecto
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

Reiniciá `npm run dev`. `.env.local` está en `.gitignore`.

### Reglas de Firestore

Están en `firestore.rules`. Hoy permiten que cada persona toque sólo sus propios
datos. **Antes de habilitar la nube hay que sumar el chequeo de suscripción**:

```
allow read, write: if request.auth != null
  && request.auth.uid == userId
  && get(/databases/$(database)/documents/subscriptions/$(userId)).data.status == "active";
```

El documento `subscriptions/{uid}` lo escribe **sólo el servidor** (el webhook de
MercadoPago). El cliente nunca puede falsificarlo.

Publicar reglas:

```bash
npm install -g firebase-tools
firebase login
firebase use --add
firebase deploy --only firestore:rules
```

## Modelo de datos

```
users/{uid}/tasks/{taskId}          → tareas
users/{uid}/notes/{noteId}          → notas
users/{uid}/habits/{habitId}        → hábitos
users/{uid}/events/{eventId}        → agenda
users/{uid}/focusSessions/{id}      → sesiones de enfoque
```

En modo local, las mismas colecciones viven en la base IndexedDB
`huella-organizacion`.

## Estado

| Módulo             | Estado                 |
| ------------------ | ---------------------- |
| Modo local         | ✅ Listo               |
| Hoy (tablero)      | ✅ Listo               |
| Tareas             | ✅ Listo               |
| Enfoque (Pomodoro) | ✅ Listo               |
| Sonido ambiente    | ✅ Listo (en Enfoque)  |
| Notas              | ✅ Listo               |
| Hábitos            | ✅ Listo               |
| Agenda             | ✅ Listo               |
| Respaldo           | ✅ Listo               |
| PWA / offline      | ✅ Listo               |
| Cuenta + pago      | 🚧 Fase de MercadoPago |

Todos los módulos funcionan **en modo local, gratis y sin cuenta**. La cuenta en
la nube (sincronización entre dispositivos) es lo único pago y todavía no está
disponible.

### Detalle de cada módulo

- **Hoy** — tablero con lo del día: tareas pendientes, hábitos por marcar,
  eventos y minutos de foco. Con alta rápida y acceso directo a cada sección.
- **Tareas** — alta rápida con prioridad y fecha, detalle, edición en línea,
  filtros y progreso. Vista "Hoy" que junta lo atrasado, lo de hoy y lo sin
  fecha.
- **Enfoque** — temporizador tipo Pomodoro (15/25/45/60 min) con anillo de
  progreso, tarea asociada, campanita al terminar, historial, gráfico de 7 días
  y **sonido ambiente**.
- **Sonido ambiente** — vive dentro de Enfoque. Pistas reales con licencia para
  uso comercial (ver `public/audio/CREDITS.md`), carga diferida y loop sin
  costura. Sigue sonando al cambiar de sección y se corta desde el indicador de
  la barra lateral.
- **Notas** — captura rápida (la primera línea es el título), buscador, fijar y
  edición en línea.
- **Hábitos** — días activos por hábito, racha actual y grilla de los últimos 7
  días con marcado retroactivo.
- **Agenda** — vista mensual con eventos por día, horarios y navegación de mes.

### Funciones transversales

- **Captura global** — `Ctrl`/`⌘` + `K` (o el botón flotante en móvil) abre un
  cuadro para tirar una tarea, nota o evento sin decidir dónde va.
- **Deshacer** — borrar una tarea, nota, hábito o evento muestra un aviso con
  "Deshacer" durante 7 segundos.
- **Respaldo** — "Exportar" descarga un JSON con todo; "Importar" lo recupera.
  Es la red de seguridad del modo local.
- **Entre pestañas** — los cambios se sincronizan solos con `BroadcastChannel`.
- **PWA** — se puede instalar en el celular y funciona sin conexión (service
  worker con alcance limitado a `/organizacion`).

### Accesibilidad

- Contraste de texto ajustado a WCAG AA.
- Anillo de foco visible en todos los controles.
- `prefers-reduced-motion` respetado.
- El temporizador anuncia el tiempo con `aria-live`.


