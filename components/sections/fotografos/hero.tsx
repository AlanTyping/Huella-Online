"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/social-links";
import { fotografoWhatsappHref } from "./contact";

export function FotografosHero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink pt-28 pb-32 text-bone lg:pt-32 lg:pb-28">
      {/* Foto a sangre */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lumos/hero-lumos.webp"
          alt="Sesión de fotos de Lumos Fotografía"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Solo lo justo para que el texto respire */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Tu portafolio
            <br />
            sin límites
            <span
              aria-hidden="true"
              className="inline-block align-[-0.04em] text-[0.85em]"
            >
              📸
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-bone/70 sm:text-xl"
          >
            Sitios web para fotógrafos que quieren mostrar su trabajo con la
            calidad que merece. Galerías inmersivas, carga rápida y una
            presencia profesional que convierte visitas en clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={fotografoWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-white px-8 py-4 text-base font-semibold text-ink transition-colors hover:bg-bone [&>svg]:h-5 [&>svg]:w-5"
            >
              <WhatsAppIcon />
              Quiero mi sitio
            </a>

            <Link
              href="#precios"
              className="group inline-flex items-center justify-center gap-2 rounded-md border border-bone/25 px-7 py-4 text-base font-medium text-bone/80 backdrop-blur-sm transition-colors hover:border-bone/50 hover:text-bone"
            >
              Ver precios
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
