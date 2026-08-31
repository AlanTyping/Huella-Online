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
  date: string;
}

const clientProjects: Project[] = [
  {
    client: "Vicky Aphalo",
    industry: "educación & bienestar",
    date: "Junio 2026",
    summary:
      "Un diseño enfocado en convertir una propuesta educativa en una experiencia clara y cercana, ayudando a que cada visitante comprenda rápidamente qué se ofrece y cómo dar el primer paso.",
    image: "/images/sitiovicky.webp",
    link: "https://vickyaphalo.site",
    services: ["Educación", "Bienestar docente"],
  }
];

const demoProjects: Project[] = [
  {
    client: "NØRMA",
    industry: "arquitectura contemporánea",
    date: "Agosto 2026",
    summary:
      "Un sitio elegante y minimalista para un estudio de arquitectura. Diseñado con atención obsesiva al detalle para reflejar profesionalismo, proporción y luz (Proyecto de muestra).",
    image: "/images/norma.webp",
    link: "https://norma-mocha.vercel.app/",
    services: ["Arquitectura", "Estudio"],
  },
  {
    client: "Olympo",
    industry: "gimnasio & fitness",
    date: "Agosto 2026",
    summary:
      "Un sitio dinámico y moderno que refleja la energía de Olympo, diseñado para potenciar la presencia digital de la marca (Proyecto de exploración).",
    image: "/images/olympo.webp",
    link: "https://olympogym.vercel.app",
    services: ["Gimnasio", "Competencias"],
  }
];

function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="group flex flex-col gap-8 w-full"
    >
      {/* IMAGE CONTAINER */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full overflow-hidden rounded-3xl bg-white/[0.02] cursor-pointer"
      >
        <div className="relative aspect-[16/10] sm:aspect-[16/8] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={`Proyecto de identidad digital para ${project.client} - ${project.industry}`}
            fill
            className="object-cover object-top opacity-90 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
            sizes="(max-width: 1024px) 100vw, 80vw"
            priority={index === 0}
          />
        </div>
        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none transition-colors duration-500 group-hover:ring-white/20" />
      </a>

      {/* TEXT CONTAINER */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-12 px-2">
        <div className="flex flex-col gap-2 md:w-[45%]">
          <span className="text-xs font-semibold tracking-[0.2em] text-brand-secondary uppercase">
            {project.industry}
          </span>
          <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white">
            {project.client}
          </h3>
          <span className="mt-1 text-sm font-medium text-zinc-500">
            {project.date}
          </span>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 md:w-[50%]">
          <p className="text-lg leading-relaxed text-zinc-400">
            {project.summary}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-3 text-xs font-bold tracking-[0.2em] text-white uppercase transition-colors hover:text-brand-secondary relative group/link"
          >
            Visitar Sitio
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors group-hover/link:bg-brand-secondary/20 group-hover/link:text-brand-secondary">
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:scale-110" />
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-brand-primary-deep py-24 text-white md:py-32">
      {/* BACKGROUND SYSTEM */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />
        <div className="absolute bottom-0 right-[-120px] h-[600px] w-[600px] rounded-full bg-blue-400/5 blur-[200px]" />
        <div className="absolute bottom-10 left-[-100px] h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[180px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.15) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* HEADER CLIENTES */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl text-4xl font-black uppercase tracking-tighter text-white sm:text-6xl"
          >
            ÚLTIMOS <span className="text-brand-secondary">PROYECTOS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 max-w-2xl text-lg leading-relaxed font-medium text-zinc-400"
          >
            Propuestas profesionales convertidas en experiencias digitales claras, confiables y memorables.
          </motion.p>
        </div>

        {/* CLIENT PROJECTS LIST */}
        <div className="flex flex-col gap-32">
          {clientProjects.map((project, index) => (
            <ProjectCard key={project.client} project={project} index={index} />
          ))}
        </div>

        {/* HEADER MUESTRAS */}
        <div className="mt-40 mb-20 flex flex-col items-center text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-black uppercase tracking-tighter text-zinc-400 sm:text-4xl"
          >
            PROYECTOS DE <span className="text-white">MUESTRA</span>
          </motion.h3>
        </div>

        {/* DEMO PROJECTS LIST */}
        <div className="flex flex-col gap-32">
          {demoProjects.map((project, index) => (
            <ProjectCard key={project.client} project={project} index={index + clientProjects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
