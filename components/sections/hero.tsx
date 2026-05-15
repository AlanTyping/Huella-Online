"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Globe, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-brand-primary-deep py-24 text-white">
      {/* Subtle Blue/Dark Radial Gradient instead of orange dots */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(10,25,49,1)_0%,rgba(1,4,9,1)_100%)]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-bold backdrop-blur-sm"
          >
            <Zap className="h-4 w-4 text-brand-secondary" />
            <span className="text-zinc-300 tracking-widest uppercase text-xs">Sistemas de Alto Rendimiento</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-5xl text-4xl font-black leading-[1.1] tracking-tighter sm:text-7xl lg:text-8xl uppercase"
          >
            TU IDENTIDAD <br />
            <span className="text-brand-secondary">EVOLUCIONADA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg font-medium text-zinc-400 sm:text-xl"
          >
            Construimos ecosistemas digitales con ingeniería de precisión. El equilibrio perfecto entre tu esencia auténtica y la potencia de la automatización moderna.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-5"
          >
            <Link
              href="#contacto"
              className="
    group relative flex items-center gap-2
    overflow-hidden rounded-md
    bg-blue-600
    px-10 py-4
    text-lg font-black
    text-white
    transition-all duration-300
    hover:bg-white
    hover:text-blue-600
    border border-transparent hover:border-blue-600
    active:scale-95
  "
            >
              INICIAR DESPLIEGUE
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#portfolio"
              className="flex items-center gap-2 rounded-md border border-white/20 bg-transparent px-10 py-4 text-lg font-black backdrop-blur-sm transition-all hover:bg-white/5 active:scale-95 text-white"
            >
              <Globe className="h-5 w-5 text-zinc-400 group-hover:text-white" />
              PORTAFOLIO
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Very Subtle Deep Blue Glows */}
      <div className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-brand-primary-light/10 blur-[120px]" />
      <div className="absolute -left-20 -bottom-20 h-[500px] w-[500px] rounded-full bg-brand-primary/5 blur-[120px]" />
    </section>
  );
}
