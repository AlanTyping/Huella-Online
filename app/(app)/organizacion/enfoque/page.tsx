import type { Metadata } from "next";
import { ClientOnly } from "@/components/app/client-only";
import { FocusView } from "@/components/app/enfoque/focus-view";
import { ViewSkeleton } from "@/components/app/view-skeleton";

export const metadata: Metadata = {
  title: "Enfoque",
  description:
    "Sesiones de concentración tipo Pomodoro con historial, estadísticas y sonido ambiente relajante. Gratis y sin cuenta.",
};

export default function EnfoquePage() {
  return (
    <ClientOnly fallback={<ViewSkeleton />}>
      <FocusView />
    </ClientOnly>
  );
}
