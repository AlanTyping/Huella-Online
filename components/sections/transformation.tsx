"use client";

import { motion, Variants } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

export function Transformation() {
  const comparisons = [
    {
      pain: "Dependés completamente de Instagram",
      gain: "Tenés una presencia propia y profesional",
    },
    {
      pain: "Perdés clientes fuera de horario",
      gain: "Tu sitio recibe consultas 24/7",
    },
    {
      pain: "Generás dudas",
      gain: "Transmitís confianza desde el primer vistazo",
    },
    {
      pain: "Competís por precio",
      gain: "Competís por valor y percepción",
    },
    {
      pain: "Tu negocio parece pequeño",
      gain: "Tu marca se percibe más sólida y seria",
    },
  ];



  return (
    <section className="bg-brand-primary-deep py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative mx-auto max-w-5xl">
          {/* Mobile Section Title */}
          <div className="mb-10 text-center md:hidden">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white">
              TU NEGOCIO <br />
              <span className="text-zinc-500">ANTES</span>{" "}
              <span className="text-white">Y</span>{" "}
              <span className="text-brand-secondary">DESPUÉS</span>
            </h2>
          </div>

          {/* Section Labels - SIN SITIO WEB / CON SITIO WEB (Desktop only) */}
          <h2 className="sr-only">Transformación Digital: De un negocio convencional a una marca de alto impacto</h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden md:grid grid-cols-2 gap-8 mb-16 px-2"
          >
            <div className="flex flex-col items-center justify-center py-2 text-center">
              <span className="text-3xl font-black tracking-tighter uppercase text-white/40">
                Sin sitio web
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-4 h-1 bg-zinc-700 rounded-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center py-2 text-center">
              <span className="text-3xl font-black tracking-tighter uppercase text-white">
                Con <span className="text-brand-secondary">Huella Online</span>
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-4 h-1 bg-blue-500 rounded-full"
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
                className="group relative flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-12"
              >
                {/* SIN SITIO WEB - Low contrast glass */}
                <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-5 md:p-6 border border-white/5 backdrop-blur-sm transition-colors group-hover:bg-white/10">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-zinc-500">
                    <X className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-zinc-400 md:text-base leading-tight">
                    {item.pain}
                  </span>
                </div>

                {/* Arrow Icon in the middle (Desktop only) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center text-blue-500/40 group-hover:text-brand-secondary transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </div>

                {/* CON SITIO WEB - Premium Glass with Glow */}
                <div className="flex items-center gap-3 rounded-xl bg-brand-primary-light/40 p-6 border border-white/10 backdrop-blur-md shadow-2xl transition-all group-hover:border-brand-secondary/30">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-base font-bold text-white md:text-lg leading-tight">
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





