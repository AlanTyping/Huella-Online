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
  Swords,
  Timer,
  Upload,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AmbientIndicator } from "./ambient-indicator";
import { HeroBadge } from "./hero";
import { QuickCapture } from "./quick-capture";
import { useStoreMode } from "./store-provider";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui";
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
      <div className="g-inset flex h-9 w-9 items-center justify-center">
        <Swords className="h-4 w-4 text-cu-orange" />
      </div>
      <div className="leading-none">
        <p className="g-hud text-[11px] text-cu-text">ORGANIZADOR</p>
        <p className="g-hud mt-1.5 text-[8px] text-cu-text-3">
          HUELLA ONLINE
        </p>
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
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative flex items-center gap-3 rounded-lg border-2 px-2.5 py-2.5 transition",
        active
          ? "border-cu-border bg-cu-surface-2 text-cu-text"
          : "border-transparent text-cu-text-2 hover:border-cu-border hover:bg-cu-surface hover:text-cu-text",
      )}
    >
      <span
        className={cn(
          "g-hud w-3 shrink-0 text-[10px]",
          active ? "text-cu-orange" : "text-transparent",
        )}
        aria-hidden
      >
        <span className={active ? "g-cursor" : undefined}>▶</span>
      </span>
      <Icon
        className={cn(
          "h-[18px] w-[18px] shrink-0",
          active
            ? "text-cu-orange"
            : "text-cu-text-3 group-hover:text-cu-text-2",
        )}
      />
      <span className="g-hud flex-1 text-[10px] uppercase">{item.label}</span>
    </Link>
  );
}

/** De dónde salen los datos y cómo respaldarlos. */
function StoragePanel() {
  const mode = useStoreMode();
  const cloud = mode === "cloud";
  const { busy, status, exportData, pickFile, fileRef, handleFile } = useBackup();

  return (
    <div className="g-panel p-3">
      <div className="flex items-center gap-2">
        {cloud ? (
          <Cloud className="h-4 w-4 text-cu-blue" />
        ) : (
          <HardDrive className="h-4 w-4 text-cu-text-3" />
        )}
        <p className="g-hud text-[10px] text-cu-text">
          {cloud ? "EN LA NUBE" : "MODO LOCAL"}
        </p>
      </div>
      <p className="mt-2 text-[12px] leading-snug text-cu-text-3">
        {cloud
          ? "Sincronizado con tu cuenta."
          : "Tus datos quedan en este dispositivo. Nada sale de acá."}
      </p>

      <div className="mt-3 flex gap-2">
        <Button
          variant="surface"
          size="sm"
          className="flex-1"
          onClick={() => void exportData()}
          disabled={busy}
        >
          <Download className="h-3.5 w-3.5" />
          Exportar
        </Button>
        <Button
          variant="surface"
          size="sm"
          className="flex-1"
          onClick={pickFile}
          disabled={busy}
        >
          <Upload className="h-3.5 w-3.5" />
          Importar
        </Button>
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
      aria-current={active ? "page" : undefined}
      data-active={active ? "true" : undefined}
      className="g-chip g-hud h-8 shrink-0 px-3 text-[9px] uppercase"
    >
      <Icon className="h-3.5 w-3.5" />
      {item.label}
    </Link>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1">
      {/* Menú de héroe (escritorio) */}
      <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r-2 border-cu-border bg-cu-bg/75 px-3 py-5 backdrop-blur-md md:flex">
        <div className="px-2 pb-5">
          <Brand />
        </div>
        <nav className="flex flex-col gap-1.5">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-2.5">
          <HeroBadge />
          <AmbientIndicator />
          <StoragePanel />
        </div>
      </aside>

      <div className="flex min-h-full flex-1 flex-col">
        {/* Barra de estado (móvil) */}
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b-2 border-cu-border bg-cu-bg/85 px-4 backdrop-blur-xl md:hidden">
          <Brand />
          <div className="flex items-center gap-1">
            <AmbientIndicator compact />
            <ThemeToggle />
          </div>
        </header>

        {/* Menú horizontal (móvil) */}
        <nav className="flex gap-2 overflow-x-auto border-b-2 border-cu-border px-4 py-3 md:hidden [scrollbar-width:none]">
          {NAV_ITEMS.map((item) => (
            <MobileNavChip key={item.href} item={item} />
          ))}
        </nav>

        <main className="g-scrim mx-auto mb-4 w-full max-w-4xl flex-1 rounded-3xl px-4 py-6 md:px-10 md:py-10">
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
