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
  services: string[];
}

const projects: Project[] = [
  {
    client: "Vicky Aphalo",
    industry: "Educación & Bienestar",
    summary:
      "Transformamos una propuesta educativa compleja en una experiencia clara y cercana, ayudando a que cada visitante comprenda rápidamente qué ofrece Vicky y cómo comenzar.",
    image: "/images/sitiovicky.webp",
    link: "https://vickyaphalo.site",
    services: ["Estrategia digital", "Diseño responsive", "Desarrollo web"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-brand-primary-deep py-24 text-white md:py-28">

      {/* 🌌 BACKGROUND DARK SYSTEM */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />
        <div className="absolute bottom-0 right-[-120px] h-[600px] w-[600px] rounded-full bg-blue-400/5 blur-[200px]" />
        <div className="absolute bottom-10 left-[-100px] h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[180px]" />
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
        <div className="mb-16 flex flex-col items-center text-center md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-[11px] font-black uppercase tracking-[0.4em] text-white/40"
          >
            Trabajo reciente
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl text-4xl font-black uppercase tracking-tighter text-white sm:text-6xl"
          >
            PROYECTO <span className="text-brand-secondary">DESTACADO</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 max-w-2xl text-lg leading-relaxed font-medium text-zinc-400"
          >
            Una propuesta profesional convertida en una experiencia digital clara, confiable y fácil de recorrer.
          </motion.p>
        </div>

        {/* PROJECTS */}
        <div>
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
              <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-brand-primary-light/10 shadow-2xl transition-all duration-500 group-hover:border-blue-500/40 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`Proyecto de identidad digital para ${project.client} - ${project.industry}`}
                      fill
                      className="object-cover object-top opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
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

                  <h3 className="text-4xl font-black uppercase tracking-tighter text-white transition-colors md:text-5xl">
                    {project.client}
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed font-medium text-zinc-400">
                    {project.summary}
                  </p>

                  {/* SERVICES */}
                  <div className="mt-9 flex flex-wrap gap-2.5">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-300"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-10 flex w-full items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black px-5 py-4 text-xs font-black tracking-[0.35em] text-white uppercase transition-transform duration-300 group-hover:translate-x-2 sm:w-fit sm:justify-start sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:text-zinc-400">
                    VISITAR SITIO
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
