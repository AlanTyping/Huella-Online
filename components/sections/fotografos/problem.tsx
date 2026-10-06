"use client";

import Image from "next/image";
import { X, Check } from "lucide-react";
import { InstagramIcon } from "@/components/ui/social-links";

const comparisons = [
  {
    pain: "Tu trabajo vive solo dentro de Instagram",
    gain: "Tenés un portafolio propio y profesional",
  },
  {
    pain: "Un algoritmo decide quién ve tus fotos",
    gain: "Vos decidís cómo y cuándo mostrar tu obra",
  },
  {
    pain: "Las imágenes se ven comprimidas y sin contexto",
    gain: "Tus fotos se lucen en máxima calidad",
  },
  {
    pain: "Competís con miles de cuentas parecidas",
    gain: "Te diferenciás con una marca sólida",
  },
  {
    pain: "Perdés consultas fuera de horario",
    gain: "Tu sitio recibe pedidos 24/7",
  },
];

export function FotografosProblem() {
  return (
    <section className="bg-paper py-24 text-ink lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Una web propia cambia la conversación.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">
            Instagram es tu vidriera del día a día. Tu sitio es tu estudio: el
            lugar donde tu obra se muestra como querés y trabaja para vos las
            24 horas.
          </p>
        </div>

        <div className="mt-16 grid max-w-4xl gap-10 md:grid-cols-2 md:gap-x-16">
          {/* Solo Instagram */}
          <div>
            <h3 className="flex items-center gap-3 border-b border-ink/15 pb-4 font-display text-2xl text-graphite">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/40 [&>svg]:h-4 [&>svg]:w-4">
                <InstagramIcon />
              </span>
              Solo Instagram
            </h3>
            <ul>
              {comparisons.map((item) => (
                <li
                  key={item.pain}
                  className="flex items-start gap-4 border-b border-ink/10 py-5"
                >
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-ink/30" />
                  <span className="text-base leading-snug text-graphite">
                    {item.pain}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Con Huella Online */}
          <div>
            <h3 className="flex items-center gap-3 border-b border-ink pb-4 font-display text-2xl text-ink">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink">
                <Image
                  src="/icon.svg"
                  alt="Huella Online"
                  width={22}
                  height={22}
                  className="h-5 w-5 object-contain"
                />
              </span>
              Con Huella Online
            </h3>
            <ul>
              {comparisons.map((item) => (
                <li
                  key={item.gain}
                  className="flex items-start gap-4 border-b border-ink/10 py-5"
                >
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-base font-bold leading-snug text-ink">
                    {item.gain}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
