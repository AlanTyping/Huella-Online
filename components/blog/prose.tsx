import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-14 text-3xl font-black uppercase leading-tight tracking-tighter text-white sm:text-4xl">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-8 text-2xl font-bold tracking-tight text-white">
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-5 text-lg font-medium leading-relaxed text-zinc-300">
      {children}
    </p>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="mt-5 space-y-3">{children}</ul>;
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-lg font-medium leading-relaxed text-zinc-300">
      <span
        aria-hidden="true"
        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-secondary"
      />
      <span>{children}</span>
    </li>
  );
}

export function PostCta({
  serviceHref,
  serviceLabel,
}: {
  serviceHref?: string;
  serviceLabel?: string;
}) {
  return (
    <div className="relative mt-16 overflow-hidden rounded-lg border border-white/10 bg-[#051939] p-8 shadow-2xl sm:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,165,0,0.12),transparent_65%)]" />

      <div className="relative z-10">
        <p className="text-2xl font-black uppercase tracking-tighter text-white sm:text-3xl">
          ¿Listo para tu página web profesional?
        </p>
        <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-zinc-400">
          Diseñamos sitios que muestran tu trabajo con la calidad que merece y
          convierten visitas en clientes. Contanos qué hacés y te mostramos cómo
          podría verse tu web.
        </p>
        {serviceHref && (
          <Link
            href={serviceHref}
            className="group mt-7 inline-flex items-center gap-3 rounded bg-blue-600 px-7 py-4 text-sm font-bold uppercase tracking-tight text-white transition-all duration-300 hover:bg-white hover:text-blue-600 active:scale-95"
          >
            {serviceLabel ?? "Ver el servicio"}
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  );
}
