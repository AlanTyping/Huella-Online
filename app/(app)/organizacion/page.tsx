import type { Metadata } from "next";
import { ClientOnly } from "@/components/app/client-only";
import { HoyDashboard } from "@/components/app/hoy/dashboard";
import { ToolSeoSection } from "@/components/app/tool-seo-section";
import { ViewSkeleton } from "@/components/app/view-skeleton";

export const metadata: Metadata = {
  title: { absolute: "Organizador gratis para ordenar tu día | Huella Online" },
  description:
    "Tareas, sesiones de enfoque, notas, hábitos y agenda en un mismo lugar. Gratis, sin cuenta y con tus datos en tu dispositivo.",
  alternates: { canonical: "/organizacion" },
};

export default function HoyPage() {
  return (
    <>
      <ClientOnly fallback={<ViewSkeleton />}>
        <HoyDashboard />
      </ClientOnly>
      <ToolSeoSection />
    </>
  );
}
