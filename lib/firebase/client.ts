/**
 * Único módulo que importa el SDK de Firebase. Como sólo se carga de forma
 * dinámica (y únicamente si `isFirebaseConfigured` es true), el SDK no entra en
 * el bundle inicial del organizador.
 */

import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type Auth,
  type User,
} from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc,
  type Firestore,
} from "firebase/firestore";
import { firebaseConfig, isFirebaseConfigured } from "./config";

let cachedApp: FirebaseApp | null = null;
let cachedAuth: Auth | null = null;
let cachedDb: Firestore | null = null;

function assertConfigured() {
  if (!isFirebaseConfigured) {
    throw new Error("Firebase no está configurado.");
  }
}

export function getFirebaseApp(): FirebaseApp {
  assertConfigured();
  if (cachedApp) return cachedApp;
  cachedApp = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  return cachedApp;
}

export function getFirebaseAuth(): Auth {
  if (cachedAuth) return cachedAuth;
  cachedAuth = getAuth(getFirebaseApp());
  return cachedAuth;
}

export function getFirebaseDb(): Firestore {
  if (cachedDb) return cachedDb;
  cachedDb = getFirestore(getFirebaseApp());
  return cachedDb;
}

export function subscribeToAuthState(
  onChange: (user: User | null) => void,
): () => void {
  return onAuthStateChanged(getFirebaseAuth(), onChange);
}

export async function signInWithGoogleAccount(): Promise<void> {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  await signInWithPopup(getFirebaseAuth(), provider);
}

export async function signOutAccount(): Promise<void> {
  await signOut(getFirebaseAuth());
}

/** Crea (una sola vez) el documento del perfil y refresca el "último acceso". */
export async function ensureUserProfile(user: User): Promise<void> {
  const ref = doc(getFirebaseDb(), "users", user.uid);
  const snapshot = await getDoc(ref);

  const base = {
    email: user.email ?? null,
    displayName: user.displayName ?? null,
    photoURL: user.photoURL ?? null,
    lastSeenAt: serverTimestamp(),
  };

  if (!snapshot.exists()) {
    await setDoc(ref, { ...base, createdAt: serverTimestamp() });
  } else {
    await setDoc(ref, base, { merge: true });
  }
}
