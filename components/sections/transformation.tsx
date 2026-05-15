"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

export function Transformation() {
  const comparisons = [
    {
      pain: "Dependés completamente de Instagram",
      gain: "Tenés una presencia propia y profesional",
    },
    {
      pain: "Perdés clientes fuera de horario",
      gain: "Tu negocio trabaja 24/7",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-brand-dark py-24 lg:py-32 overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative mx-auto max-w-5xl">
          {/* Section Labels - SIN SITIO WEB / CON SITIO WEB */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 md:gap-8 mb-12 px-2"
          >
            <div className="flex flex-col items-center justify-center py-2 text-center">
              <span className="text-lg md:text-3xl font-black tracking-[0.1em] md:tracking-[0.2em] uppercase text-white">
                Sin sitio web
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-4 h-1.5 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"
              />
            </div>
            <div className="flex flex-col items-center justify-center py-2 text-center">
              <span className="text-lg md:text-3xl font-black tracking-[0.1em] md:tracking-[0.2em] uppercase text-white">
                Con sitio web
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-4 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative grid grid-cols-2 gap-8 md:gap-16"
              >
                {/* SIN SITIO WEB - Dark with Red accent */}
                <div className="flex items-center gap-3 rounded-xl bg-brand-dark/50 p-5 shadow-2xl border border-white/5 transition-all group-hover:border-red-500/30">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                    <X className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold text-zinc-400 md:text-base leading-tight">
                    {item.pain}
                  </span>
                </div>

                {/* Arrow Icon in the middle (Desktop only) - Subtle Grey */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center text-zinc-700 group-hover:text-brand-secondary transition-colors">
                  <ArrowRight className="h-6 w-6" />
                </div>

                {/* CON SITIO WEB - Dark with Emerald accent */}
                <div className="flex items-center gap-3 rounded-xl bg-brand-primary-light p-5 shadow-2xl border border-emerald-500/20 transition-all group-hover:border-emerald-500/50">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-bold text-white md:text-lg leading-tight">
                    {item.gain}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-emerald-500 rounded-full" />
          <p className="text-zinc-400 text-[10px] font-bold tracking-[0.4em] uppercase text-center">Transformación Estructural</p>
        </motion.div>
      </div>
    </section>
  );
}





