import type { Metadata } from "next";
import { ClientOnly } from "@/components/app/client-only";
import { HabitsView } from "@/components/app/habitos/habits-view";
import { ViewSkeleton } from "@/components/app/view-skeleton";

export const metadata: Metadata = {
  title: "Hábitos",
  description:
    "Rachas y seguimiento diario de los hábitos que querés sostener.",
};

export default function HabitosPage() {
  return (
    <ClientOnly fallback={<ViewSkeleton />}>
      <HabitsView />
    </ClientOnly>
  );
}
