import type { Metadata } from "next";
import { ClientOnly } from "@/components/app/client-only";
import { AgendaView } from "@/components/app/agenda/agenda-view";
import { ViewSkeleton } from "@/components/app/view-skeleton";

export const metadata: Metadata = {
  title: "Agenda",
  description: "Vista mensual para ubicar tus compromisos en el tiempo.",
};

export default function AgendaPage() {
  return (
    <ClientOnly fallback={<ViewSkeleton />}>
      <AgendaView />
    </ClientOnly>
  );
}
