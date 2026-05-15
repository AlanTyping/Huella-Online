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
    <section className="bg-brand-primary py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative mx-auto max-w-5xl">
          {/* Section Labels - SIN SITIO WEB / CON SITIO WEB */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 md:gap-8 mb-16 px-2"
          >
            <div className="flex flex-col items-center justify-center py-2 text-center">
              <span className="text-lg md:text-3xl font-black tracking-tighter uppercase text-white/40">
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
              <span className="text-lg md:text-3xl font-black tracking-tighter uppercase text-white">
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
                className="group relative grid grid-cols-2 gap-4 md:gap-12"
              >
                {/* SIN SITIO WEB - Low contrast glass */}
                <div className="flex items-center gap-3 rounded-xl bg-white/5 p-6 border border-white/5 backdrop-blur-sm opacity-50 transition-opacity group-hover:opacity-70">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-zinc-500">
                    <X className="h-3 w-3" />
                  </div>
                  <span className="text-xs font-medium text-zinc-400 md:text-base leading-tight">
                    {item.pain}
                  </span>
                </div>

                {/* Arrow Icon in the middle (Desktop only) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center text-zinc-800 group-hover:text-brand-secondary transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </div>

                {/* CON SITIO WEB - Premium Glass with Glow */}
                <div className="flex items-center gap-3 rounded-xl bg-brand-primary-light/40 p-6 border border-white/10 backdrop-blur-md shadow-2xl transition-all group-hover:border-brand-secondary/30">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-secondary/20 text-brand-secondary">
                    <Check className="h-3 w-3" />
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
          <div className="h-[1px] w-24 bg-white/10 rounded-full" />
          <p className="text-zinc-500 text-[10px] font-bold tracking-[0.4em] uppercase text-center">Transformación Estructural</p>
        </motion.div>
      </div>
    </section>
  );
}





