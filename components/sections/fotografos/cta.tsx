"use client";

import Link from "next/link";
import { ClipboardList } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/social-links";
import { fotografoWhatsappHref } from "./contact";

const mailHref =
  "mailto:alantyping.dev@gmail.com?subject=Inter%C3%A9s%20en%20una%20web%20para%20fot%C3%B3grafos%20-%20Huella%20Online&body=Hola%20Huella%20Online!%0D%0A%0D%0AQuiero%20una%20p%C3%A1gina%20web%20para%20mi%20fotograf%C3%ADa%20y%20me%20gustar%C3%ADa%20coordinar%20la%20charla%20de%2015%20minutos.";

export function FotografosCta() {
  return (
    <section
      id="contacto"
      className="border-t border-bone/10 bg-ink py-24 text-bone lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Empecemos por una charla
              <br />
              de 15 minutos.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/60">
              Contanos qué fotografiás y te mostramos cómo podría verse tu
              sitio. Sin compromiso, por Meet o WhatsApp.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
            <a
              href={fotografoWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-whatsapp px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-whatsapp-hover [&>svg]:h-5 [&>svg]:w-5"
            >
              <WhatsAppIcon />
              Escribir por WhatsApp
            </a>

            <Link
              href="/brief"
              className="inline-flex items-center justify-center gap-3 rounded-md border border-bone/25 px-8 py-4 text-base font-medium text-bone/80 transition-colors hover:border-bone/50 hover:text-bone [&>svg]:h-5 [&>svg]:w-5"
            >
              <ClipboardList className="h-5 w-5" />
              Completar formulario
            </Link>

            <a
              href={mailHref}
              className="text-sm text-bone/50 underline-offset-4 transition-colors hover:text-bone hover:underline"
            >
              o escribinos un mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
