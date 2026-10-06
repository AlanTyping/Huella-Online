"use client";

import { Check, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/social-links";
import { fotografoWhatsappHref } from "./contact";

const plans = [
  {
    name: "Portfolio Esencial",
    emoji: "📸",
    price: "225.000",
    tagline:
      "Para fotógrafos que quieren una presencia profesional para mostrar su trabajo y recibir consultas.",
    features: [
      "Portfolio visual con galería inmersiva",
      "Presentación de tu trabajo y especialidad",
      "Información esencial sobre tus servicios",
      "Contacto directo por WhatsApp y formulario",
      "Adaptado a celulares, tablets y computadoras",
      "Fotografías optimizadas para cargar rápido sin perder calidad visual",
    ],
    highlighted: false,
  },
  {
    name: "Estudio",
    emoji: "✨",
    price: "300.000",
    tagline:
      "Para fotógrafos con varios servicios o especialidades que necesitan una web más completa para presentar su propuesta.",
    features: [
      "Todo lo del plan Esencial",
      "Múltiples galerías por categoría",
      'Secciones "Sobre mí" y "Servicios"',
      "Animaciones y transiciones personalizadas",
      "Google Analytics",
      "Optimización para aparecer en Google",
    ],
    highlighted: true,
  },
  {
    name: "Marca Completa",
    emoji: "👑",
    price: "500.000",
    tagline:
      "Para fotógrafos que necesitan una solución web más completa y personalizada.",
    features: [
      "Todo lo del plan Estudio",
      "Más páginas y contenido",
      "Galerías y secciones según las necesidades del proyecto",
      "Reservas o pagos integrados",
      "Integraciones personalizadas",
      "Funcionalidades personalizadas según el proyecto",
    ],
    highlighted: false,
  },
];

const included = [
  {
    emoji: "🧭",
    text: "Asesoramiento para elegir y configurar tu dominio",
  },
  { emoji: "🔒", text: "Certificado SSL y conexión segura HTTPS" },
  { emoji: "🚀", text: "Publicación y configuración inicial" },
  { emoji: "🎓", text: "Capacitación 1:1 para gestionar tu sitio" },
  { emoji: "🤝", text: "Soporte post-lanzamiento" },
  { emoji: "💬", text: "Integración con tus redes sociales" },
];

export function FotografosPricing() {
  return (
    <section
      id="precios"
      className="relative overflow-hidden bg-ink py-24 text-bone lg:py-32"
    >
      {/* Glow de color para romper el negro plano */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[24rem] w-[44rem] -translate-x-1/2 rounded-full bg-brand-secondary/10 blur-[130px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Planes a tu medida.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone/60">
            Desde <span className="text-brand-secondary">$225.000</span> hasta{" "}
            <span className="text-brand-secondary">$500.000</span>. Elegí el
            punto de partida y lo ajustamos juntos a lo que necesitás.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col border-t pt-8 ${plan.highlighted ? "border-brand-secondary/50" : "border-bone/15"
                }`}
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -top-px left-0 h-40 w-full bg-gradient-to-b to-transparent ${plan.highlighted ? "from-brand-secondary/15" : "from-bone/10"
                  }`}
              />

              <div className="relative flex items-center justify-between gap-4">
                <h3 className="font-display text-xl tracking-tight text-bone">
                  <span aria-hidden="true" className="mr-2">
                    {plan.emoji}
                  </span>
                  {plan.name}
                </h3>
                {plan.highlighted && (
                  <span className="rounded-full border border-brand-secondary/50 bg-brand-secondary/10 px-3 py-1 text-[11px] font-semibold text-brand-secondary">
                    <span aria-hidden="true" className="mr-1">
                      ⭐
                    </span>
                    Más elegido
                  </span>
                )}
              </div>

              <div className="relative mt-6 flex items-baseline gap-2">
                <span className="text-xs text-bone/50">desde</span>
                <span className="font-display text-5xl tracking-tight text-bone">
                  ${plan.price}
                </span>
                <span className="text-xs text-bone/50">ARS</span>
              </div>

              <p className="relative mt-4 text-sm leading-relaxed text-bone/60">
                {plan.tagline}
              </p>

              <ul className="relative mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-secondary/15">
                      <Check className="h-3 w-3 text-brand-secondary" />
                    </span>
                    <span className="text-sm leading-snug text-bone/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={fotografoWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-8 inline-flex items-center justify-center gap-2.5 rounded-md bg-bone px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-bone/85 [&>svg]:h-4 [&>svg]:w-4"
              >
                <WhatsAppIcon />
                Empezar
              </a>
            </div>
          ))}
        </div>

        {/* Incluido en todos los planes */}
        <div className="mt-10">
          <div className="grid rounded-xl border border-brand-secondary/30 bg-brand-secondary/[0.07] p-6 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-x-6 sm:p-7">
            <div className="flex items-center gap-4 sm:col-start-1 sm:row-start-1 sm:gap-5">
              <span aria-hidden="true" className="text-4xl leading-none">
                🎁
              </span>
              <div>
                <p className="font-display text-2xl tracking-tight text-bone">
                  Hosting gratuito
                </p>
                <p className="mt-1 text-sm leading-relaxed text-bone/70">
                  No pagás alojamiento para tu web. Nosotros nos ocupamos de
                  configurarlo y dejarlo funcionando.
                </p>
              </div>
            </div>

            <div className="order-last mt-8 sm:order-none sm:col-start-2 sm:row-start-1 sm:mt-0 sm:max-w-xs sm:text-right">
              <div className="flex items-center gap-2 sm:justify-end">
                <ShieldCheck className="h-4 w-4 shrink-0 text-brand-secondary" />
                <h3 className="font-display text-lg tracking-tight text-bone">
                  Incluido en todos los planes
                </h3>
              </div>
            </div>

            <ul className="order-2 mt-6 grid gap-x-12 gap-y-4 border-t border-brand-secondary/20 pt-6 sm:col-span-2 sm:row-start-2 sm:grid-cols-2 lg:grid-cols-3">
              {included.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-3 text-sm leading-relaxed text-bone/75"
                >
                  <span aria-hidden="true" className="text-base leading-none">
                    {item.emoji}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-bone/45">
          Precios en pesos argentinos (ARS). El valor final se define según el
          alcance del proyecto. Financiación en 2 pagos: 50% para comenzar y 50%
          al publicar.
        </p>
      </div>
    </section>
  );
}
