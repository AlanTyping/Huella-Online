"use client";

import { motion } from "framer-motion";
import { Code, Cpu, CreditCard } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Desarrollo Web Next-Gen",
      description: "Sistemas de alto rendimiento que fusionan tu identidad con ingeniería de vanguardia.",
      icon: <Code className="h-6 w-6" />,
      tag: "FRONTEND"
    },
    {
      title: "Automatización Inteligente",
      description: "Diseñamos ecosistemas que trabajan por ti, eliminando la fricción operativa.",
      icon: <Cpu className="h-6 w-6" />,
      tag: "SISTEMAS"
    },
    {
      title: "Fintech & Pagos",
      description: "Integración de pasarelas globales para una experiencia de usuario fluida y segura.",
      icon: <CreditCard className="h-6 w-6" />,
      tag: "NEGOCIO"
    },
  ];

  return (
    <section id="servicios" className="bg-brand-primary py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tighter text-white sm:text-6xl uppercase"
          >
            INGENIERÍA DE <span className="text-brand-secondary">VALOR</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-2xl text-zinc-500 font-bold tracking-widest uppercase text-xs"
          >
            Precisión técnica aplicada a la visión de tu negocio.
          </motion.p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-[2rem] border border-white/5 bg-brand-dark p-10 transition-all hover:border-brand-secondary/30 shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-white/10 uppercase group-hover:text-brand-secondary/50 transition-colors">
                  {service.tag}
                </span>
              </div>
              
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary text-brand-secondary group-hover:bg-brand-secondary group-hover:text-brand-primary transition-all duration-300 shadow-inner">
                {service.icon}
              </div>
              
              <h3 className="mt-4 text-2xl font-black text-white tracking-tight uppercase">
                {service.title}
              </h3>
              
              <p className="text-zinc-500 font-medium leading-relaxed group-hover:text-zinc-300 transition-colors">
                {service.description}
              </p>
              
              {/* Decorative Tech Line */}
              <div className="mt-6 h-[1px] w-full bg-white/5 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-brand-secondary to-transparent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
