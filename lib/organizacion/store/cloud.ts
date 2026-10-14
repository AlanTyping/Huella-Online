"use client";

import {
  collection as firestoreCollection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase/client";
import { newId } from "./id";
import { ORDER_FIELD, type BaseRecord, type OrganizacionStore } from "./types";

/**
 * Motor en la nube (pago): los datos viven en Firestore bajo `users/{uid}/...`
 * y se sincronizan entre dispositivos en tiempo real.
 *
 * Todavía no hay forma de activarlo desde la UI: la cuenta y el cobro llegan en
 * la fase de MercadoPago. Cuando eso exista, las reglas de Firestore exigirán la
 * suscripción activa (`subscriptions/{uid}`) para dejar escribir acá.
 */
export function createCloudStore(uid: string): OrganizacionStore {
  const base = () => firestoreCollection(getFirebaseDb(), "users", uid);

  return {
    mode: "cloud",

    async list(collection) {
      const snapshot = await getDocs(firestoreCollection(base(), collection));
      return snapshot.docs.map((docSnap) => ({
        ...(docSnap.data() as Record<string, unknown>),
        id: docSnap.id,
      })) as BaseRecord[];
    },

    subscribe(collection, onChange, onError) {
      const q = query(
        firestoreCollection(base(), collection),
        orderBy(ORDER_FIELD, "desc"),
      );
      return onSnapshot(
        q,
        (snapshot) => {
          const records = snapshot.docs.map((docSnap) => ({
            ...(docSnap.data() as Record<string, unknown>),
            id: docSnap.id,
          })) as BaseRecord[];
          onChange(records);
        },
        (error) => onError?.(error),
      );
    },

    async create(collection, data) {
      const now = Date.now();
      const id = newId();
      await setDoc(doc(base(), collection, id), {
        ...data,
        id,
        createdAt: now,
        updatedAt: now,
      });
      return id;
    },

    async update(collection, id, patch) {
      await updateDoc(doc(base(), collection, id), {
        ...patch,
        updatedAt: Date.now(),
      });
    },

    async remove(collection, id) {
      await deleteDoc(doc(base(), collection, id));
    },

    async restore(collection, record) {
      await setDoc(doc(base(), collection, record.id), record);
    },
  };
}
