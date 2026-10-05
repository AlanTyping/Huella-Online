"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

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
    <section className="overflow-hidden border-t border-white/[0.03] bg-brand-primary-deep py-20 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="relative mx-auto max-w-5xl">
          <div className="mb-10 text-center md:hidden">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white">
              TU FOTOGRAFÍA <br />
              <span className="text-zinc-500">ANTES</span>{" "}
              <span className="text-white">Y</span>{" "}
              <span className="text-brand-secondary">DESPUÉS</span>
            </h2>
          </div>

          <h2 className="sr-only">
            De depender de Instagram a tener un portafolio profesional propio
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 hidden grid-cols-2 gap-8 px-2 md:grid"
          >
            <div className="flex flex-col items-center justify-center py-2 text-center">
              <span className="text-3xl font-black uppercase tracking-tighter text-white/40">
                Solo Instagram
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-4 h-1 rounded-full bg-zinc-700"
              />
            </div>
            <div className="flex flex-col items-center justify-center py-2 text-center">
              <span className="text-3xl font-black uppercase tracking-tighter text-white">
                Con <span className="text-brand-secondary">Huella Online</span>
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-4 h-1 rounded-full bg-blue-500"
              />
            </div>
          </motion.div>

          <div className="space-y-8 md:space-y-4">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="group relative flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-12"
              >
                <div className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors group-hover:bg-white/10 md:p-6">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-zinc-500">
                    <X className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium leading-tight text-zinc-400 md:text-base">
                    {item.pain}
                  </span>
                </div>

                <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center text-blue-500/40 transition-colors group-hover:text-brand-secondary md:flex">
                  <ArrowRight className="h-5 w-5" />
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#051939] p-6 shadow-2xl backdrop-blur-md transition-all group-hover:border-brand-secondary/30">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-base font-bold leading-tight text-white md:text-lg">
                    {item.gain}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
