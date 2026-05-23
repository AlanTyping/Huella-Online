"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  client: string;
  industry: string;
  summary: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    client: "Vicky Aphalo",
    industry: "Educación & Bienestar",
    summary:
      "Desarrollamos un ecosistema digital diseñado para transmitir confianza, claridad y autoridad, optimizado para convertir presencia en impacto real.",
    image: "/images/sitiovicky2.webp",
    link: "https://vickyaphalo.site",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-brand-primary-deep py-32 text-white">

      {/* 🌌 BACKGROUND DARK SYSTEM */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />
        <div className="absolute bottom-0 right-[-120px] h-[600px] w-[600px] rounded-full bg-blue-400/5 blur-[200px]" />
        <div className="absolute bottom-10 left-[-100px] h-[500px] w-[500px] rounded-full bg-orange-400/5 blur-[180px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.15) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mb-28 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-[11px] font-black uppercase tracking-[0.4em] text-white/40"
          >
            Casos de estudio reales
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl text-4xl font-black uppercase tracking-tighter sm:text-6xl text-white"
          >
            RESULTADOS <span className="text-brand-secondary">TANGIBLES</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 font-medium"
          >
            Cada proyecto es una pieza de sistema: identidad, conversión y confianza diseñadas con intención.
          </motion.p>
        </div>

        {/* PROJECTS */}
        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.a
              key={project.client}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group block"
            >
              <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-brand-primary-light/10 shadow-2xl transition-all duration-500 group-hover:border-blue-500/40 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`Proyecto de identidad digital para ${project.client} - ${project.industry}`}
                      fill
                      className="object-cover object-top opacity-80 transition duration-700 group-hover:opacity-100 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-[2.2rem] ring-1 ring-inset ring-white/10 group-hover:ring-blue-500/20" />
                </div>

                {/* CONTENT */}
                <div className="max-w-xl">
                  <div className="mb-5">
                    <span className="text-[10px] font-black uppercase tracking-[0.35em] text-blue-500">
                      {project.industry}
                    </span>
                  </div>

                  <h3 className="text-4xl font-black uppercase tracking-tighter transition-colors group-hover:text-brand-secondary md:text-5xl text-white">
                    {project.client}
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed text-zinc-400 font-medium">
                    {project.summary}
                  </p>

                  {/* TRUST BLOCK */}
                  <div className="mt-12 border-l-2 border-blue-500/20 pl-8 transition-colors group-hover:border-blue-500/50">
                    <p className="text-lg italic leading-relaxed text-zinc-300">
                      &quot;No se trató de crear una web, sino de construir un activo digital real.&quot;
                    </p>
                    <div className="mt-4 text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">
                      Arquitectura digital estratégica
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-14 flex items-center gap-3 text-xs font-black tracking-[0.4em] text-blue-500 uppercase transition-transform duration-300 group-hover:translate-x-2">
                    EXPLORAR CASO
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
