import type { Metadata } from "next";
import { ClientOnly } from "@/components/app/client-only";
import { NotesView } from "@/components/app/notas/notes-view";
import { ViewSkeleton } from "@/components/app/view-skeleton";

export const metadata: Metadata = {
  title: "Notas",
  description:
    "Un lugar para vaciar la cabeza y no perder ninguna idea ni pendiente.",
};

export default function NotasPage() {
  return (
    <ClientOnly fallback={<ViewSkeleton />}>
      <NotesView />
    </ClientOnly>
  );
}
