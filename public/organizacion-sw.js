/*
 * Service worker del organizador.
 *
 * Alcance limitado a /organizacion a propósito: así una versión vieja en caché
 * nunca puede afectar al sitio comercial.
 *
 * Estrategia:
 *  - Navegaciones dentro de /organizacion → red primero, caché como respaldo.
 *  - Assets con hash de /_next/static → caché primero (son inmutables).
 *  - Audio → nunca se cachea (son ~16 MB y se sirven bajo demanda).
 */

const CACHE = "organizador-v1";
const SCOPE = "/organizacion";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll([SCOPE, "/organizacion/manifest.webmanifest"]))
      .catch(() => undefined)
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request);
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return (
      (await cache.match(request)) ||
      (await cache.match(SCOPE)) ||
      Response.error()
    );
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response && response.ok) cache.put(request, response.clone());
  return response;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/audio/")) return;

  if (request.mode === "navigate") {
    if (!url.pathname.startsWith(SCOPE)) return;
    event.respondWith(networkFirst(request));
    return;
  }

  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(cacheFirst(request));
  }
});
