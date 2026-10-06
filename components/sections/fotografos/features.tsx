"use client";

import {
  Images,
  Gauge,
  ShieldCheck,
  Palette,
  MessageCircle,
  Search,
} from "lucide-react";

const features = [
  {
    title: "Galería inmersiva",
    description:
      "Tus fotos se exploran a pantalla completa con transiciones suaves y un lightbox pensado para no romper la experiencia.",
    icon: Images,
  },
  {
    title: "Carga ultrarrápida",
    description:
      "Imágenes optimizadas en formatos modernos y carga progresiva para que el sitio vuele incluso con galerías pesadas.",
    icon: Gauge,
  },
  {
    title: "Tu trabajo protegido",
    description:
      "Aplicamos marca de agua y bloqueamos la descarga directa cuando lo necesitás, cuidando tus derechos de autor.",
    icon: ShieldCheck,
  },
  {
    title: "Identidad a tu medida",
    description:
      "Un diseño propio que refleja tu estilo y te diferencia de miles de cuentas parecidas. Nada de plantillas genéricas.",
    icon: Palette,
  },
  {
    title: "Contacto directo",
    description:
      "WhatsApp, formularios y botones de consulta integrados para que un interesado te escriba en un solo toque.",
    icon: MessageCircle,
  },
  {
    title: "Listo para Google",
    description:
      "Estructura y SEO local para que te encuentren quienes buscan un fotógrafo en tu zona y en tu especialidad.",
    icon: Search,
  },
];

export function FotografosFeatures() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-ink py-24 text-bone lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Todo para brillar.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone/60">
            Un sitio pensado para la sensibilidad de un fotógrafo.
          </p>
        </div>

        <div className="mt-16 grid gap-x-16 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group flex gap-5 border-t border-bone/10 py-8"
              >
                <Icon className="mt-1 h-5 w-5 shrink-0 text-bone/40 transition-colors duration-300 group-hover:text-brand-secondary" />
                <div>
                  <h3 className="font-display text-xl tracking-tight text-bone">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-bone/55">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
