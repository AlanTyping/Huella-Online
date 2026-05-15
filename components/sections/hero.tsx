"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Globe, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-brand-dark py-24 text-white">
      {/* Tech Grid Background - Orange dots */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(var(--brand-orange) 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-2 rounded-md border border-brand-secondary/20 bg-brand-secondary/5 px-4 py-1.5 text-sm font-bold backdrop-blur-sm"
          >
            <Zap className="h-4 w-4 text-brand-secondary" />
            <span className="text-brand-secondary tracking-widest uppercase text-xs">Sistemas de Alto Rendimiento</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-5xl text-5xl font-black leading-[1.1] tracking-tighter sm:text-7xl lg:text-8xl uppercase"
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
              className="group relative flex items-center gap-2 overflow-hidden rounded-md bg-brand-secondary px-10 py-4 text-lg font-black text-brand-primary transition-all hover:bg-white active:scale-95 shadow-[0_0_20px_rgba(255,165,0,0.3)] hover:shadow-[0_0_30px_rgba(255,165,0,0.5)]"
            >
              INICIAR DESPLIEGUE
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#servicios"
              className="flex items-center gap-2 rounded-md border border-white/20 bg-transparent px-10 py-4 text-lg font-black backdrop-blur-sm transition-all hover:bg-white/5 active:scale-95"
            >
              <Globe className="h-5 w-5 text-brand-secondary" />
              SERVICIOS
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Subtle Orange Glows */}
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-secondary/10 blur-[120px]" />
      <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-brand-secondary/5 blur-[120px]" />
    </section>
  );
}
