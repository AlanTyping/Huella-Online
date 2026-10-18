"use client";

import Link from "next/link";
import { Check, ClipboardList } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/social-links";
import { fotografoWhatsappHref } from "./contact";

const mailHref =
  "mailto:alantyping.dev@gmail.com?subject=Inter%C3%A9s%20en%20una%20web%20para%20fot%C3%B3grafos%20-%20Huella%20Online&body=Hola%20Huella%20Online!%0D%0A%0D%0AQuiero%20una%20p%C3%A1gina%20web%20para%20mi%20fotograf%C3%ADa%20y%20me%20gustar%C3%ADa%20coordinar%20la%20charla%20de%2015%20minutos.";

const trust = [
  "Charla de 15 minutos",
  "Sin compromiso",
  "Por Meet o WhatsApp",
];

export function FotografosCta() {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 border-t border-bone/10 bg-ink py-16 text-bone sm:py-20 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-bone/10 bg-ink-soft p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-brand-secondary/15 blur-[130px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 h-[22rem] w-[22rem] rounded-full bg-brand-primary/25 blur-[130px]"
          />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-secondary">
                Hablemos
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Empecemos por una charla
                <br />
                de 15 minutos.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone/60">
                Contanos qué fotografiás y te mostramos cómo podría verse tu
                sitio. Sin compromiso, por Meet o WhatsApp.
              </p>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {trust.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-bone/70"
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-secondary/15">
                      <Check className="h-3 w-3 text-brand-secondary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-5">
              <a
                href={fotografoWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-md bg-whatsapp px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-whatsapp-hover active:scale-[0.99] [&>svg]:h-5 [&>svg]:w-5"
              >
                <WhatsAppIcon />
                Escribir por WhatsApp
              </a>

              <Link
                href="/brief"
                className="inline-flex items-center justify-center gap-3 rounded-md border border-bone/25 bg-bone/[0.03] px-8 py-4 text-base font-medium text-bone/80 transition-colors hover:border-bone/50 hover:text-bone active:scale-[0.99] [&>svg]:h-5 [&>svg]:w-5"
              >
                <ClipboardList className="h-5 w-5" />
                Completar formulario
              </Link>

              <a
                href={mailHref}
                className="mt-1 text-center text-sm text-bone/60 underline-offset-4 transition-colors hover:text-bone hover:underline lg:text-left"
              >
                o escribinos un mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
