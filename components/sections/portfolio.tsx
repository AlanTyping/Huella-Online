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
    services: [],
  }
];

const demoProjects: Project[] = [
  {
    client: "Olympo",
    industry: "gimnasio & fitness",
    date: "Agosto 2026",
    summary:
      "Un sitio dinámico y moderno que refleja la energía de Olympo, diseñado para potenciar la presencia digital de la marca (Proyecto de exploración).",
    image: "/images/olympo.webp",
    link: "https://olympogym.vercel.app",
    services: ["Diseño UI/UX", "Desarrollo Frontend", "Performance"],
  }
];

function DemoProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] transition-all hover:bg-white/[0.08] hover:border-white/20"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-video w-full overflow-hidden block"
      >
        <Image
          src={project.image}
          alt={`Demo de ${project.client}`}
          fill
          className="object-cover object-top opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-deep/90 via-transparent to-transparent" />
      </a>
      
      <div className="flex flex-col p-8 flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-black tracking-[0.2em] text-zinc-500 uppercase">
            {project.industry}
          </span>
          <span className="text-[10px] font-medium text-zinc-500">
            {project.date}
          </span>
        </div>
        
        <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">
          {project.client}
        </h3>
        
        <p className="text-sm leading-relaxed text-zinc-400 mb-8 flex-1">
          {project.summary}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-white transition-colors hover:text-brand-secondary uppercase"
          >
            Ver Sitio
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col gap-10 lg:items-center lg:gap-16 rounded-lg border border-white/10 bg-white/[0.05] p-6 sm:p-10 lg:p-12 transition-colors hover:bg-white/[0.07] hover:border-white/20 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* IMAGE */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group/img relative w-full overflow-hidden rounded-lg border border-white/10 bg-brand-primary-light/10 shadow-2xl transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] block cursor-pointer lg:w-[55%]"
      >
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={project.image}
            alt={`Proyecto de identidad digital para ${project.client} - ${project.industry}`}
            fill
            className="object-cover object-top opacity-85 transition duration-700 group-hover/img:scale-105 group-hover/img:opacity-100"
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority={index === 0}
          />
        </div>
        <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 pointer-events-none" />
      </a>

      {/* CONTENT */}
      <div className="flex flex-col lg:w-[45%]">
        <div className="mb-4">
          <span className="text-sm font-bold tracking-widest text-zinc-500">
            {project.industry}
          </span>
        </div>

        <h3 className="text-4xl font-black uppercase tracking-tighter text-white transition-colors md:text-5xl">
          {project.client}
        </h3>
        
        <span className="mt-1 text-sm font-medium text-zinc-500">
          {project.date}
        </span>

        <p className="mt-5 text-lg leading-relaxed font-medium text-zinc-400">
          {project.summary}
        </p>

        {/* SERVICES */}
        {project.services.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2.5">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-300"
              >
                {service}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-10">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full justify-center md:w-auto items-center gap-4 rounded-lg border border-white/10 bg-white/5 px-6 py-4 text-xs font-black tracking-[0.35em] text-white uppercase transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:border-white/20"
          >
            VISITAR SITIO
            <ArrowUpRight className="h-4 w-4 text-brand-secondary" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-brand-primary-deep py-20 text-white md:py-28">

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

        {/* HEADER CLIENTES */}
        <div className="mb-16 flex flex-col items-center text-center md:mb-24">
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
        <div className="flex flex-col gap-24 lg:gap-32">
          {clientProjects.map((project, index) => (
            <ProjectCard key={project.client} project={project} index={index} />
          ))}
        </div>

        {/* HEADER MUESTRAS */}
        <div className="mt-40 mb-16 flex flex-col items-center text-center md:mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-black uppercase tracking-tighter text-white sm:text-4xl"
          >
            PROYECTOS DE <span className="text-zinc-500">MUESTRA</span>
          </motion.h3>
        </div>

        {/* DEMO PROJECTS LIST */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {demoProjects.map((project) => (
            <DemoProjectCard key={project.client} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

