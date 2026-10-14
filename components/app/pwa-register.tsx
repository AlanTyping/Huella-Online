"use client";

import { useEffect } from "react";

/**
 * Registra el service worker que hace instalable y offline al organizador.
 * Sólo en producción: en desarrollo un caché viejo vuelve loco a cualquiera.
 */
export function PwaRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    const register = () => {
      navigator.serviceWorker
        .register("/organizacion-sw.js", { scope: "/organizacion" })
        .catch(() => {
          /* sin service worker igual funciona, sólo pierde el modo offline */
        });
    };

    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });
  }, []);

  return null;
}
