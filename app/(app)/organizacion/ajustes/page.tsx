import type { Metadata } from "next";
import { SettingsView } from "@/components/app/ajustes/settings-view";
import { ClientOnly } from "@/components/app/client-only";
import { ViewSkeleton } from "@/components/app/view-skeleton";

export const metadata: Metadata = {
  title: "Ajustes",
  description:
    "Personalizá el organizador: tema claro u oscuro y color de fondo a tu gusto.",
};

export default function AjustesPage() {
  return (
    <ClientOnly fallback={<ViewSkeleton />}>
      <SettingsView />
    </ClientOnly>
  );
}
