"use client";

import { motion } from "framer-motion";
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
    icon: <Images className="h-6 w-6" />,
    tag: "PORTFOLIO",
  },
  {
    title: "Carga ultrarrápida",
    description:
      "Imágenes optimizadas en formatos modernos y carga progresiva para que el sitio vuele incluso con galerías pesadas.",
    icon: <Gauge className="h-6 w-6" />,
    tag: "PERFORMANCE",
  },
  {
    title: "Tu trabajo protegido",
    description:
      "Aplicamos marca de agua y bloqueamos la descarga directa cuando lo necesitás, cuidando tus derechos de autor.",
    icon: <ShieldCheck className="h-6 w-6" />,
    tag: "PROTECCIÓN",
  },
  {
    title: "Identidad a tu medida",
    description:
      "Un diseño propio que refleja tu estilo y te diferencia de miles de cuentas parecidas. Nada de plantillas genéricas.",
    icon: <Palette className="h-6 w-6" />,
    tag: "DISEÑO",
  },
  {
    title: "Contacto directo",
    description:
      "WhatsApp, formularios y botones de consulta integrados para que un interesado te escriba en un solo toque.",
    icon: <MessageCircle className="h-6 w-6" />,
    tag: "CONVERSIÓN",
  },
  {
    title: "Listo para Google",
    description:
      "Estructura y SEO local para que te encuentren quienes buscan un fotógrafo en tu zona y en tu especialidad.",
    icon: <Search className="h-6 w-6" />,
    tag: "VISIBILIDAD",
  },
];

export function FotografosFeatures() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden border-t border-white/[0.03] bg-brand-primary-deep py-24 lg:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-secondary/[0.07] blur-[170px]" />
        <div className="absolute bottom-0 right-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black uppercase tracking-tighter text-white sm:text-6xl"
          >
            TODO PARA <span className="text-brand-secondary">BRILLAR</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-zinc-400"
          >
            Un sitio pensado para la sensibilidad de un fotógrafo.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-8 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary/40 hover:from-white/[0.08]"
            >
              {/* Top accent */}
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-secondary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Corner glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-secondary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/15 text-brand-secondary ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:bg-brand-secondary group-hover:text-brand-primary-deep">
                  {feature.icon}
                </div>
                <span className="font-mono text-xs font-black tracking-[0.3em] text-white/10 transition-colors duration-300 group-hover:text-brand-secondary/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <span className="relative mt-7 text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary/70">
                {feature.tag}
              </span>

              <h3 className="relative mt-2 text-xl font-black uppercase tracking-tight text-white">
                {feature.title}
              </h3>

              <p className="relative mt-3 text-sm font-medium leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-300">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
