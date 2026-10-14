/**
 * Configuración de Firebase. Este módulo NO importa el SDK a propósito: así
 * `isFirebaseConfigured` se puede consultar sin arrastrar `firebase/*` al bundle
 * inicial. Todo lo que toca el SDK vive en `client.ts` y se importa de forma
 * dinámica, sólo cuando hay configuración.
 */

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export { firebaseConfig };

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId,
);

export const FIREBASE_SETUP_MESSAGE =
  "Falta configurar Firebase. Copiá `.env.example` a `.env.local`, completá " +
  "las claves de tu proyecto y reiniciá el servidor. Guía: docs/organizacion-setup.md";
