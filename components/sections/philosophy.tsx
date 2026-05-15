"use client";

import { motion } from "framer-motion";
import { Fingerprint, Rocket } from "lucide-react";

export function Philosophy() {
  return (
    <section id="filosofia" className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-black tracking-tighter text-brand-primary sm:text-7xl uppercase leading-[0.85]">
              NUESTRA <span className="text-brand-secondary">ADN</span> <br />
              DIGITAL
            </h2>
            <p className="mt-8 text-xl font-medium text-zinc-600">
              Fusionamos la esencia humana con la potencia de la automatización para crear resultados exponenciales.
            </p>
            
            <div className="mt-12 space-y-10">
              <div className="group flex gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-brand-primary text-brand-secondary transition-transform group-hover:scale-110">
                  <Fingerprint className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-brand-primary uppercase">Identidad Pura</h3>
                  <p className="mt-2 text-zinc-500 font-medium leading-relaxed">
                    Extraemos el núcleo de tu marca para que cada bit de tu ecosistema digital sea un reflejo fiel de tu visión.
                  </p>
                </div>
              </div>
              
              <div className="group flex gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-brand-primary text-brand-secondary transition-transform group-hover:scale-110">
                  <Rocket className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-brand-primary uppercase">Impacto Real</h3>
                  <p className="mt-2 text-zinc-500 font-medium leading-relaxed">
                    Ingeniería de procesos que libera tu potencial creativo. Si es repetitivo, es automatizable.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative aspect-square overflow-hidden rounded-xl bg-brand-primary shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-20">
              <div className="h-full w-full" 
                   style={{ backgroundImage: 'linear-gradient(var(--brand-orange) 1px, transparent 1px), linear-gradient(90deg, var(--brand-orange) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="text-[12rem] font-black text-white/5 leading-none select-none">ID</div>
              <div className="text-7xl font-black text-brand-secondary -mt-10 tracking-tighter">VALUE</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
