"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Plus } from "lucide-react";

const mainSkills = [
  "Diseño UX / UI",
  "Prototipado & Wireframing",
  "Pruebas de Usabilidad",
  "Arquitectura de Información",
  "Accesibilidad Web",
];

const extraSkills = [
  "Diseño Centrado en el Usuario (UCD)",
  "Flujos de Usuario & Personas",
  "Investigación de Diseño",
  "Mapas de Sitio",
  "Estudios de Caso",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export function Certificate() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section
      id="certificado"
      className="relative overflow-hidden bg-brand-primary-deep py-20 lg:py-28 text-white"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,165,0,0.08),transparent_65%)] blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
            CERTIFICACIÓN <span className="text-brand-secondary">OFICIAL</span>
          </h2>
          <p className="mt-6 text-zinc-400 max-w-xl text-base sm:text-lg font-medium">
            <span className="md:hidden">Estándares de diseño UX y usabilidad para cada proyecto.</span>
            <span className="hidden md:inline">Estándares internacionales de diseño y experiencia de usuario aplicados a cada proyecto.</span>
          </p>
        </motion.div>

        {/* Minimalist Certificate Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          {/* Mobile Title (visible only on mobile) */}
          <div className="md:hidden flex flex-col items-center text-center gap-3 mb-8">
            <ShieldCheck className="h-8 w-8 text-blue-400" />
            <h3 className="text-2xl sm:text-3xl uppercase tracking-tight text-white">
              <span className="font-black">IBM</span>{" "}
              <span className="font-normal text-zinc-300">UX Design Fundamentals</span>
            </h3>
          </div>

          <div className="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr] items-center">
            {/* Image */}
            <div className="flex justify-center relative w-full">
              <a
                href="https://www.credly.com/badges/83d24212-c20a-43e9-8962-b704e94fbe42"
                target="_blank"
                rel="noopener noreferrer"
                className="group/badge relative block w-full max-w-[340px] md:max-w-none"
                title="Ver credencial en Credly"
              >
                {/* Dynamic Background Glow on Hover */}
                <div className="absolute inset-0 rounded-full bg-brand-secondary/30 blur-[60px] opacity-0 transition-opacity duration-500 group-hover/badge:opacity-100 pointer-events-none" />

                {/* Image container: wider on mobile, square on desktop */}
                <div
                  className="relative h-56 sm:h-64 md:h-[260px] lg:h-[280px] w-full md:w-[260px] lg:w-[280px] overflow-hidden rounded-lg bg-white/[0.03] p-4 backdrop-blur-xl border border-white/5 transition-all duration-300 group-hover/badge:border-brand-secondary/30 group-hover/badge:bg-white/[0.06] group-hover/badge:scale-[1.02] group-hover/badge:shadow-[0_0_40px_rgba(255,165,0,0.15)]"
                >
                  <Image
                    src="/images/ibm-ux.png"
                    alt="IBM User Experience Design Fundamentals"
                    fill
                    className="object-contain p-2 drop-shadow-lg"
                    sizes="(max-width: 768px) 340px, 280px"
                  />
                </div>
              </a>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-5 text-left relative z-10">
              {/* Desktop Title (hidden on mobile, icon to the right) */}
              <h3 className="hidden md:flex text-2xl sm:text-3xl uppercase tracking-tight text-white items-center justify-start gap-3">
                <span>
                  <span className="font-black">IBM</span>{" "}
                  <span className="font-normal text-zinc-300">UX Design Fundamentals</span>
                </span>
                <ShieldCheck className="h-7 w-7 text-blue-400 shrink-0 -mt-0.5" />
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-zinc-400 max-w-2xl">
                <span className="md:hidden">Certificación profesional en diseño UX/UI, arquitectura de información y accesibilidad web orientada a la conversión.</span>
                <span className="hidden md:inline">Certificación profesional que valida competencias en metodologías de diseño centrado en el usuario (UCD), arquitectura de información, accesibilidad web e interfaces intuitivas optimizadas para la conversión.</span>
              </p>

              {/* Skills tags with staggered animation */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap items-center gap-2 justify-start"
              >
                {mainSkills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="inline-flex rounded border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-400 transition-colors hover:border-white/20 hover:text-zinc-200"
                  >
                    {skill}
                  </motion.span>
                ))}

                <AnimatePresence>
                  {showAll &&
                    extraSkills.map((skill) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex rounded border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-400 transition-colors hover:border-white/20 hover:text-zinc-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                </AnimatePresence>

                {!showAll && (
                  <button
                    type="button"
                    onClick={() => setShowAll(true)}
                    className="hidden md:inline-flex group/btn items-center gap-1.5 rounded border border-dashed border-white/20 bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-zinc-400 transition-all duration-300 hover:border-white/50 hover:bg-white/[0.08] hover:text-white cursor-pointer active:scale-95"
                  >
                    <Plus className="h-3 w-3 text-zinc-400 transition-transform duration-300 group-hover/btn:rotate-90 group-hover/btn:text-white" />
                    <span>y {extraSkills.length} más</span>
                  </button>
                )}
              </motion.div>

              {/* Verification link */}
              <div className="pt-2 flex justify-start">
                <a
                  href="https://www.credly.com/badges/83d24212-c20a-43e9-8962-b704e94fbe42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-3 text-xs font-bold tracking-[0.2em] text-white uppercase transition-colors hover:text-brand-secondary group/link"
                >
                  <span className="relative">
                    Verificar Credencial
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover/link:bg-brand-secondary/20 group-hover/link:text-brand-secondary group-hover:scale-105">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
