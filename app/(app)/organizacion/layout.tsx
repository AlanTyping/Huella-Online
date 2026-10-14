import type { Metadata } from "next";
import { OrganizacionProviders } from "@/components/app/organizacion-providers";

export const metadata: Metadata = {
  title: {
    default: "Organizador",
    template: "%s | Organizador",
  },
  description:
    "Organizador gratuito para ordenar tu día: tareas, foco, notas, hábitos y agenda. Funciona en tu dispositivo, sin cuenta y sin límites.",
  keywords: [
    "organizador personal gratis",
    "lista de tareas online",
    "app para organizarse",
    "método pomodoro",
    "productividad",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    title: "Organizador | Huella Online",
    description:
      "Ordená tu día con tareas, foco, notas y hábitos. Gratis, local y sin cuenta.",
    type: "website",
  },
};

export default function OrganizacionLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <OrganizacionProviders>{children}</OrganizacionProviders>;
}
