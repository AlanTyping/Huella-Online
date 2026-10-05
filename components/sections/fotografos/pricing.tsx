"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/social-links";
import { fotografoWhatsappHref } from "./contact";

const plans = [
  {
    name: "Portfolio Esencial",
    price: "300.000",
    tagline: "Para empezar con un portfolio profesional y bien presentado.",
    features: [
      "Sitio de una página con tu portfolio",
      "Galería inmersiva con lightbox",
      "Hasta 30 fotos optimizadas",
      "Contacto por WhatsApp y formulario",
      "Diseño 100% responsive",
      "SEO base para Google",
      "1 ronda de revisiones",
    ],
    highlighted: false,
  },
  {
    name: "Estudio",
    price: "450.000",
    tagline: "Para fotógrafos con varios servicios o especialidades.",
    features: [
      "Todo lo del plan Esencial",
      "Múltiples galerías por categoría",
      "Hasta 100 fotos optimizadas",
      'Secciones "Sobre mí" y "Servicios"',
      "Optimización avanzada de imágenes",
      "Google Analytics + SEO local",
      "2 rondas de revisiones",
    ],
    highlighted: true,
  },
  {
    name: "Marca Completa",
    price: "600.000",
    tagline: "Para convertir tu fotografía en una marca que vende sola.",
    features: [
      "Todo lo del plan Estudio",
      "Identidad visual básica (logo y tipografías)",
      "Textos y narrativa de marca",
      "Galerías ilimitadas",
      "Reservas o pagos integrados (opcional)",
      "Capacitación 1:1 + manual de uso",
      "3 rondas de revisiones + soporte 30 días",
    ],
    highlighted: false,
  },
];

const included = [
  "Asesoría de dominio propio",
  "Publicación y hosting",
  "Optimización de imágenes",
  "Sitio responsive",
  "Capacitación de uso",
  "Respuesta en menos de 24 h",
];

export function FotografosPricing() {
  return (
    <section
      id="precios"
      className="relative overflow-hidden border-t border-white/[0.03] bg-brand-primary-deep py-24 lg:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-secondary/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black uppercase tracking-tighter text-white sm:text-6xl"
          >
            PLANES <span className="text-brand-secondary">A TU MEDIDA</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-zinc-400"
          >
            Desde <span className="font-bold text-white">$300.000</span> hasta{" "}
            <span className="font-bold text-white">$600.000</span>. Elegí el
            punto de partida y lo ajustamos juntos a lo que necesitás.
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={
                plan.highlighted
                  ? "relative flex flex-col rounded-xl border border-brand-secondary/50 bg-white/[0.05] p-8 shadow-2xl shadow-brand-secondary/10 backdrop-blur-sm lg:-translate-y-2"
                  : "relative flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-colors hover:border-white/20"
              }
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand-secondary px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary-deep">
                  <Sparkles className="h-3 w-3" />
                  Más elegido
                </span>
              )}

              <h3 className="text-sm font-black uppercase tracking-[0.25em] text-zinc-400">
                {plan.name}
              </h3>

              <div className="mt-5 flex items-end gap-2">
                <span className="text-4xl font-black tracking-tighter text-white">
                  ${plan.price}
                </span>
                <span className="pb-1 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                  desde · ARS
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                {plan.tagline}
              </p>

              <div className="my-8 h-[1px] w-full bg-white/10" />

              <ul className="flex flex-1 flex-col gap-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted
                          ? "bg-brand-secondary/20 text-brand-secondary"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm font-medium leading-snug text-zinc-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={fotografoWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`group mt-8 flex items-center justify-center gap-2.5 rounded-lg px-6 py-4 text-sm font-black uppercase tracking-tight transition-all active:scale-95 [&>svg]:h-5 [&>svg]:w-5 ${
                  plan.highlighted
                    ? "bg-brand-secondary text-brand-primary-deep hover:bg-brand-accent"
                    : "bg-white/10 text-white hover:bg-[#25D366]"
                }`}
              >
                <WhatsAppIcon />
                Empezar
              </a>
            </motion.div>
          ))}
        </div>

        {/* Included in all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-14 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-8 backdrop-blur-sm md:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-brand-secondary/10 blur-3xl" />

          <div className="relative flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-secondary/15 text-brand-secondary ring-1 ring-inset ring-brand-secondary/20">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.28em] text-white">
                  Incluido en todos los planes
                </h3>
                <p className="mt-1 text-xs font-medium text-zinc-500">
                  Sin costos ocultos. Todo listo para publicar.
                </p>
              </div>
            </div>

            <span className="w-fit rounded-full border border-brand-secondary/30 bg-brand-secondary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary">
              Base para todos
            </span>
          </div>

          <div className="relative mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3.5 transition-colors hover:border-brand-secondary/20 hover:bg-white/[0.04]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-secondary/15 text-brand-secondary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-zinc-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <p className="mt-8 text-center text-xs font-medium leading-relaxed text-zinc-500">
          Precios en pesos argentinos (ARS). El valor final se define según el
          alcance del proyecto. Financiación en 2 pagos: 50% para comenzar y 50%
          al publicar.
        </p>
      </div>
    </section>
  );
}
