import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Organizador | Huella Online",
    short_name: "Organizador",
    description:
      "Tareas, enfoque, notas, hábitos y agenda en un mismo lugar. Gratis, local y sin cuenta.",
    start_url: "/organizacion",
    scope: "/organizacion",
    display: "standalone",
    orientation: "portrait",
    lang: "es-AR",
    background_color: "#ffffff",
    theme_color: "#ff9500",
    categories: ["productivity", "utilities"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
