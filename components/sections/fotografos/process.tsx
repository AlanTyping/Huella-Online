"use client";

import { motion } from "framer-motion";
import { MessageCircle, Palette, Layers, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Charlamos",
    description:
      "Una reunión de 15 minutos para entender tu estilo, tus servicios y el tipo de clientes que querés atraer.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Diseñamos",
    description:
      "Armamos la estructura y la propuesta visual de tu portfolio, pensada para que tus fotos sean las protagonistas.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Construimos",
    description:
      "Desarrollamos el sitio, optimizamos cada imagen y dejamos todo listo para que cargue rápido en cualquier dispositivo.",
    icon: Layers,
  },
  {
    number: "04",
    title: "Publicamos",
    description:
      "Conectamos tu dominio, publicamos y te capacitamos para que puedas actualizar tus galerías cuando quieras.",
    icon: Rocket,
  },
];

export function FotografosProcess() {
  return (
    <section
      id="proceso"
      className="border-t border-white/[0.03] bg-brand-primary-deep py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black uppercase tracking-tighter text-white sm:text-6xl"
          >
            ASÍ <span className="text-brand-secondary">TRABAJAMOS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-zinc-400"
          >
            Un proceso simple y acompañado, de la primera charla a tu sitio
            online.
          </motion.p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-[60px] hidden h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col rounded-lg border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-all hover:border-brand-secondary/30 hover:bg-white/[0.04]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-md bg-blue-500/20 text-brand-secondary transition-all duration-300 group-hover:bg-brand-secondary group-hover:text-brand-primary-deep">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-3xl font-black tracking-tighter text-white/10 transition-colors group-hover:text-brand-secondary/40">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-black uppercase tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-300">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
