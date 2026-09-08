"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const skills = [
  "Diseño UX / UI",
  "Diseño Centrado en el Usuario (UCD)",
  "Arquitectura de Información",
  "Pruebas de Usabilidad",
  "Prototipado & Wireframing",
  "Flujos de Usuario & Personas",
  "Accesibilidad Web",
  "Investigación de Diseño",
  "Mapas de Sitio",
  "Estudios de Caso",
];

export function Certificate() {
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
          <p className="mt-6 text-zinc-400 max-w-xl text-lg font-medium">
            Estándares internacionales de diseño y experiencia de usuario aplicados a cada proyecto.
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
          <div className="grid gap-10 md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr] md:gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <a
                href="https://www.credly.com/badges/83d24212-c20a-43e9-8962-b704e94fbe42"
                target="_blank"
                rel="noopener noreferrer"
                className="group/badge relative block transition-transform duration-300 hover:scale-105"
                title="Ver credencial en Credly"
              >
                <div className="relative h-60 w-60 sm:h-64 sm:w-64 lg:h-[280px] lg:w-[280px] overflow-hidden rounded-lg bg-white/[0.03] p-4 backdrop-blur-xl">
                  <Image
                    src="/images/ibm-ux.png"
                    alt="IBM User Experience Design Fundamentals"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 240px, 280px"
                  />
                </div>
              </a>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl uppercase tracking-tight text-white">
                <span className="font-black">IBM</span>{" "}
                <span className="font-normal text-zinc-300">UX Design Fundamentals</span>
              </h3>

              <p className="text-base leading-relaxed text-zinc-400">
                Certificación profesional que valida competencias en metodologías de diseño centrado en el usuario (UCD), arquitectura de información, accesibilidad web e interfaces intuitivas optimizadas para la conversión.
              </p>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-1">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Verification link */}
              <div className="pt-2 flex justify-center md:justify-start">
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
