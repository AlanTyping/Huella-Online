"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Target, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
  },
  {
    icon: Target,
    title: "Conversión",
  },
  {
    icon: Zap,
    title: "Performance",
  },
];

export function About() {
  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden bg-[#050816] py-28"
    >
      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#ffa500]/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[320px_1fr]">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">

              {/* Floating badge */}
              <motion.div
                animate={{ y: [8, 0, 8] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -right-5 top-6 z-20 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl"
              >
                <span className="text-lg">
                  💻
                </span>
              </motion.div>

              {/* Orbit animation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-4 rounded-[38px] border border-dashed border-[#ffa500]/20"
              />

              {/* subtle border */}
              <div className="absolute inset-0 rounded-[32px] border border-white/10" />

              {/* image */}
              <div className="relative h-[280px] w-[280px] overflow-hidden rounded-[32px] bg-white/5 p-2 backdrop-blur-xl">
                <div className="relative h-full w-full overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/alan.webp"
                    alt="Alan Rosales"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* accent glow */}
              <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-full bg-[#ffa500]/10 blur-2xl" />
            </div>
          </motion.div>

          {/* CONTENT */}
          <div className="max-w-3xl text-center lg:text-left">



            {/* description */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-8 space-y-5 text-base leading-relaxed text-zinc-400 sm:text-lg"
            >
              <p>
                Soy{" "}
                <span className="font-semibold text-white">
                  Alan Rosales
                </span>
                , el desarrollador detrás de{" "}
                <span className="text-white">
                  Huella <span className="text-brand-secondary">Online</span>
                </span>.
              </p>

              <p>
                Creo sitios web modernos, rápidos y estratégicos para
                negocios de Buenos Aires, para emprendedores, freelancers y
                marcas personales que quieren
                transmitir una imagen más profesional y generar resultados reales.
              </p>

              <p>
                Cada detalle está pensado para construir confianza, destacar
                frente a la competencia y convertir visitas en oportunidades.
              </p>
            </motion.div>

            {/* features */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 transition-all duration-300 hover:border-[#ffa500]/30 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0040FF]/10 text-[#ffffff]">
                      <Icon className="h-4 w-4" />
                    </div>

                    <span className="text-sm font-medium text-zinc-200">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section >
  );
}
