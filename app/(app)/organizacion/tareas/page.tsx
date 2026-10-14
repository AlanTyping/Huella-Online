import type { Metadata } from "next";
import { ClientOnly } from "@/components/app/client-only";
import { TasksView } from "@/components/app/tasks/tasks-view";
import { ViewSkeleton } from "@/components/app/view-skeleton";

export const metadata: Metadata = {
  title: "Tareas",
  description:
    "Tu lista de tareas con prioridad, fecha y detalle. Siempre a mano y sin registro.",
};

export default function TareasPage() {
  return (
    <ClientOnly fallback={<ViewSkeleton />}>
      <TasksView
        mode="all"
        title="Tareas"
        description="Todo lo que tenés en la cabeza, en un solo lugar."
      />
    </ClientOnly>
  );
}
