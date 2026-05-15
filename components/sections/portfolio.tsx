"use client";

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
      "Diseño y desarrollo de una presencia digital enfocada en transmitir confianza, profesionalismo y claridad de mensaje para profesionales de la educación.",
    image: "/images/sitiovicky2.webp",
    link: "https://vickyaphalo.site",
  },
];

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* ORB 1 */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 h-72 w-72 rounded-full bg-brand-secondary/10 blur-[120px]"
      />

      {/* ORB 2 */}
      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-10 h-96 w-96 rounded-full bg-brand-secondary/5 blur-[140px]"
      />

      {/* ORB 3 (más intenso) */}
      <motion.div
        animate={{
          y: [0, -60, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-brand-secondary/15 blur-[160px]"
      />
    </div>
  );
}

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative bg-brand-dark py-28 text-white overflow-hidden"
    >

      {/* BACKGROUND EFFECT */}
      <FloatingOrbs />

      {/* CONTENT */}
      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mb-20 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-block text-sm uppercase tracking-[0.25em] text-brand-secondary"
          >
            Proyectos reales
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
          >
            Resultados construidos junto a clientes reales.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400"
          >
            Cada proyecto está diseñado para comunicar mejor,
            transmitir más confianza y fortalecer la presencia online
            de la marca.
          </motion.p>
        </div>

        {/* PROJECTS */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.a
              key={project.client}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group block"
            >
              <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

                {/* IMAGE */}
                <div className="overflow-hidden rounded-3xl border border-white/5 bg-brand-primary-light">
                  <motion.img
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.client}
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                </div>

                {/* CONTENT */}
                <div className="max-w-xl">
                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-[0.25em] text-brand-secondary">
                      {project.industry}
                    </span>
                  </div>

                  <h3 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                    {project.client}
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                    {project.summary}
                  </p>

                  {/* TRUST BLOCK */}
                  <div className="mt-10 border-l border-brand-secondary pl-6">
                    <p className="text-base leading-relaxed text-zinc-300">
                      “El objetivo no fue solamente crear una web,
                      sino desarrollar una presencia digital alineada
                      con la calidad y profesionalismo de la marca.”
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-10 flex items-center gap-2 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-x-1">
                    Ver proyecto
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