"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Handshake } from "lucide-react";

interface Project {
  client: string;
  industry: string;
  summary: string;
  image: string;
  link: string;
  services: string[];
  date: string;
  metrics?: { value: string; label: string }[];
  integrations?: { name: string; color: string; type: "mercadopago" | "gumroad" }[];
}

function MercadoPagoIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return <Handshake className={className} strokeWidth={2.2} />;
}

function GumroadIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.132 15.656c-.98 1.127-2.373 1.748-4.025 1.748-3.364 0-5.74-2.396-5.74-5.808 0-3.411 2.376-5.807 5.74-5.807 1.796 0 3.197.697 4.093 1.854l-1.637 1.412c-.59-.751-1.41-1.162-2.456-1.162-2.022 0-3.363 1.502-3.363 3.703 0 2.202 1.341 3.704 3.363 3.704 1.25 0 2.136-.5 2.682-1.341h-2.932v-2.091h5.275v3.788z" />
    </svg>
  );
}

function BrushUnderline({ className = "w-full h-2 text-[#ffa500]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M2 6C20 2.5 50 2 98 5.5C65 9 30 9.5 4 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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
    metrics: [
      { value: "< 1s", label: "Carga rápida" },
      { value: "100%", label: "SEO Optimizado" },
      { value: "Full", label: "Adaptado a celulares" },
    ],
    integrations: [
      { name: "Mercado Pago", color: "#009ee3", type: "mercadopago" },
      { name: "Gumroad", color: "#7700c1", type: "gumroad" },
    ],
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

function ProjectCard({
  project,
  index = 0,
  isReal = false,
}: {
  project: Project;
  index?: number;
  isReal?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className="group flex flex-col gap-6 sm:gap-8 w-full"
    >
      {/* IMAGE CONTAINER */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full overflow-hidden rounded-xl sm:rounded-2xl bg-white/[0.02] cursor-pointer"
      >
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={project.image}
            alt={`Proyecto de identidad digital para ${project.client} - ${project.industry}`}
            fill
            className="object-cover object-top opacity-90 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:opacity-100"
            sizes="(max-width: 1024px) 100vw, 80vw"
            priority={index === 0}
          />
        </div>

        <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none transition-colors duration-700 group-hover:ring-white/25" />
      </a>

      {/* TEXT CONTAINER */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 pt-2">
        <div className="flex flex-col gap-2 md:w-[45%]">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">
            {project.industry}
          </span>
          <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
            {project.client}
          </h3>
          <span className="mt-1 text-sm font-medium text-zinc-500">
            {project.date}
          </span>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 md:w-[50%]">
          <p className="text-base sm:text-lg leading-relaxed text-zinc-400">
            {project.summary}
          </p>

          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 border-y border-white/[0.07] py-3.5">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col">
                  <span className="text-base sm:text-lg font-black tracking-tight text-white">
                    {metric.value}
                  </span>
                  <span className="text-[10px] font-medium tracking-wider text-zinc-500 uppercase">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {project.integrations && project.integrations.length > 0 && (
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2.5">
              <span className="text-[11px] font-medium text-zinc-400">
                Integración con pasarelas de pago:
              </span>
              <div className="flex items-center gap-2">
                {project.integrations.map((item) => (
                  <span
                    key={item.name}
                    style={{
                      color: item.color,
                      borderColor: `${item.color}35`,
                      backgroundColor: `${item.color}15`,
                    }}
                    className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] font-bold tracking-tight shrink-0"
                  >
                    {item.type === "mercadopago" ? (
                      <MercadoPagoIcon className="h-3.5 w-3.5" />
                    ) : item.type === "gumroad" ? (
                      <GumroadIcon className="h-3.5 w-3.5" />
                    ) : null}
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-3 text-xs font-bold tracking-[0.2em] text-white uppercase transition-colors hover:text-brand-secondary relative group/link"
          >
            <span className="relative pb-3.5">
              Visitar Sitio
              {isReal && (
                <BrushUnderline className="absolute -bottom-1 left-0 w-full h-2.5 text-[#ffa500] pointer-events-none transition-transform duration-300 group-hover/link:scale-x-105" />
              )}
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover/link:bg-brand-secondary/20 group-hover/link:text-brand-secondary group-hover:scale-105">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
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
            <ProjectCard key={project.client} project={project} index={index} isReal />
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
            <ProjectCard key={project.client} project={project} index={index + clientProjects.length} isReal={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
