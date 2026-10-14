"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calendar,
  Cloud,
  Download,
  Flame,
  HardDrive,
  ListTodo,
  NotebookPen,
  Settings,
  Sunrise,
  Timer,
  Upload,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AmbientIndicator } from "./ambient-indicator";
import { QuickCapture } from "./quick-capture";
import { useStoreMode } from "./store-provider";
import { ThemeToggle } from "./theme-toggle";
import { useBackup } from "./use-backup";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/organizacion", label: "Hoy", icon: Sunrise },
  { href: "/organizacion/tareas", label: "Tareas", icon: ListTodo },
  { href: "/organizacion/enfoque", label: "Enfoque", icon: Timer },
  { href: "/organizacion/notas", label: "Notas", icon: NotebookPen },
  { href: "/organizacion/habitos", label: "Hábitos", icon: Flame },
  { href: "/organizacion/agenda", label: "Agenda", icon: Calendar },
  { href: "/organizacion/ajustes", label: "Ajustes", icon: Settings },
];

function Brand() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="h-8 w-8 rounded-[10px] bg-gradient-to-br from-cu-orange to-cu-blue" />
      <div className="leading-none">
        <p className="text-[15px] font-semibold tracking-tight text-cu-text">
          Organizador
        </p>
        <p className="mt-0.5 text-[11px] text-cu-text-3">Huella Online</p>
      </div>
    </div>
  );
}

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  return href === "/organizacion"
    ? pathname === "/organizacion"
    : pathname.startsWith(href);
}

function NavLink({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const active = isActive(pathname, item.href);
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={cn(
        "group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-[15px] transition",
        active
          ? "bg-cu-surface-2 font-semibold text-cu-text"
          : "text-cu-text-2 hover:bg-cu-surface hover:text-cu-text",
      )}
    >
      <Icon
        className={cn(
          "h-[18px] w-[18px] shrink-0",
          active
            ? "text-cu-orange"
            : "text-cu-text-3 group-hover:text-cu-text-2",
        )}
      />
      <span className="flex-1">{item.label}</span>
    </Link>
  );
}

/** De dónde salen los datos y cómo respaldarlos. */
function StoragePanel() {
  const mode = useStoreMode();
  const cloud = mode === "cloud";
  const { busy, status, exportData, pickFile, fileRef, handleFile } = useBackup();

  const actionClass =
    "inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-cu-surface-2 px-2 py-1.5 text-[11px] font-medium text-cu-text-2 transition hover:text-cu-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cu-orange disabled:opacity-50";

  return (
    <div className="rounded-2xl border border-cu-border bg-cu-surface p-3">
      <div className="flex items-center gap-2">
        {cloud ? (
          <Cloud className="h-4 w-4 text-cu-blue" />
        ) : (
          <HardDrive className="h-4 w-4 text-cu-text-3" />
        )}
        <p className="text-[13px] font-medium text-cu-text">
          {cloud ? "En la nube" : "Modo local"}
        </p>
      </div>
      <p className="mt-1 text-[11px] leading-snug text-cu-text-3">
        {cloud
          ? "Sincronizado con tu cuenta."
          : "Tus datos quedan en este dispositivo. Nada sale de acá."}
      </p>

      <div className="mt-2.5 flex gap-1.5">
        <button
          type="button"
          onClick={() => void exportData()}
          disabled={busy}
          className={actionClass}
        >
          <Download className="h-3.5 w-3.5" />
          Exportar
        </button>
        <button
          type="button"
          onClick={pickFile}
          disabled={busy}
          className={actionClass}
        >
          <Upload className="h-3.5 w-3.5" />
          Importar
        </button>
      </div>

      {status ? (
        <p className="mt-2 text-[11px] leading-snug text-cu-text-2">{status}</p>
      ) : null}

      <input
        ref={fileRef}
        type="file"
        accept="application/json,.json"
        className="hidden"
        onChange={(event) => void handleFile(event)}
      />
    </div>
  );
}

function MobileNavChip({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const active = isActive(pathname, item.href);
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium transition",
        active ? "bg-cu-text text-cu-bg" : "bg-cu-surface-2 text-cu-text-2",
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {item.label}
    </Link>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1">
      {/* Sidebar (escritorio) */}
      <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r border-cu-border bg-cu-bg px-3 py-5 md:flex">
        <div className="px-2 pb-5">
          <Brand />
        </div>
        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-2">
          <AmbientIndicator />
          <StoragePanel />
        </div>
      </aside>

      <div className="flex min-h-full flex-1 flex-col">
        {/* Barra superior (móvil) */}
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-cu-border bg-cu-bg/80 px-4 backdrop-blur-xl md:hidden">
          <Brand />
          <div className="flex items-center gap-1">
            <AmbientIndicator compact />
            <ThemeToggle />
          </div>
        </header>

        {/* Nav horizontal (móvil) */}
        <nav className="flex gap-2 overflow-x-auto border-b border-cu-border px-4 py-3 md:hidden [scrollbar-width:none]">
          {NAV_ITEMS.map((item) => (
            <MobileNavChip key={item.href} item={item} />
          ))}
        </nav>

        <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-6 md:px-10 md:py-10">
          {children}
        </main>

        <div className="hidden justify-end px-4 pb-6 md:flex md:px-10">
          <ThemeToggle />
        </div>
      </div>

      <QuickCapture />
    </div>
  );
}
