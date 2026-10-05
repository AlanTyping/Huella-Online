"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/social-links";
import { fotografoWhatsappHref } from "./contact";

export function FotografosHero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-brand-primary-deep pt-28 pb-32 text-white lg:pt-32 lg:pb-28">
      {/* Foto de fondo a pantalla completa */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lumosfotografia.webp"
          alt="Sesión de fotos de Lumos Fotografía"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Gradiente lateral para que el texto respire sin tapar la foto */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-deep via-brand-primary-deep/60 to-transparent" />
        {/* Fundidos superior e inferior para integrarse con la página */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-primary-deep to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand-primary-deep to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl">
          <h1 className="flex flex-col gap-1 text-5xl font-black uppercase leading-[1.02] tracking-tighter sm:text-6xl lg:text-6xl xl:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white"
            >
              Tu portafolio
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="w-fit bg-gradient-to-r from-brand-secondary to-yellow-400 bg-clip-text pb-1 pr-4 italic text-transparent drop-shadow-[0_0_20px_rgba(255,165,0,0.35)]"
            >
              sin límites.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 max-w-lg text-lg font-medium leading-relaxed text-zinc-300 sm:text-xl"
          >
            Sitios web para fotógrafos que quieren mostrar su trabajo con la
            calidad que merece. Galerías inmersivas, carga ultrarrápida y una
            presencia profesional que convierte visitas en clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={fotografoWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 rounded bg-[#25D366] px-10 py-5 text-xl font-bold text-white transition-all duration-300 hover:bg-[#20ba5a] hover:shadow-2xl hover:shadow-[#25D366]/20 active:scale-95 lg:text-lg lg:uppercase [&>svg]:h-6 [&>svg]:w-6"
            >
              <WhatsAppIcon />
              Quiero mi sitio
            </a>

            <Link
              href="#precios"
              className="group flex items-center justify-center gap-3 rounded border border-white/25 bg-brand-primary-deep/40 px-8 py-5 text-base font-bold text-zinc-200 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:text-white lg:text-lg"
            >
              Ver precios
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
