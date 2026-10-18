"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { getImageProps } from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/social-links";
import { fotografoWhatsappHref } from "./contact";

const imageCommon = {
  alt: "Sesión de fotos de Lumos Fotografía",
  sizes: "100vw",
  quality: 80,
};

// Art direction: XV años en mobile, sesión vertical en desktop.
const {
  props: { srcSet: desktopSrcSet },
} = getImageProps({
  ...imageCommon,
  width: 1920,
  height: 1280,
  src: "/images/lumos/xi.webp",
});

const {
  props: { srcSet: mobileSrcSet, ...mobileRest },
} = getImageProps({
  ...imageCommon,
  width: 877,
  height: 1025,
  src: "/images/lumos/galeria-xv.webp",
});

export function FotografosHero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Parallax: la foto de fondo se mueve más lento que el contenido al scrollear.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  // Si la imagen ya está en caché, el evento `load` puede no dispararse:
  // verificamos el estado real en cuanto el nodo se monta.
  const handleImageRef = useCallback((node: HTMLImageElement | null) => {
    if (node?.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink pt-28 pb-32 text-bone lg:pt-32 lg:pb-28"
    >
      {/* Foto a sangre */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-700 ease-out ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <motion.div
          aria-hidden="true"
          style={prefersReducedMotion ? undefined : { y: backgroundY }}
          className="absolute inset-0"
        >
          <picture className="block h-full w-full">
            <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
            <source srcSet={mobileSrcSet} />
            <img
              {...mobileRest}
              ref={handleImageRef}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
              alt={imageCommon.alt}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full origin-top object-cover object-center md:scale-110 md:object-[60%_16%]"
            />
          </picture>
        </motion.div>

        {/* Solo lo justo para que el texto respire */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* Loader: se muestra hasta que la foto de fondo está lista */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-500 ease-out ${
          imageLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="flex flex-col items-center gap-5">
          <span className="h-11 w-11 animate-spin rounded-full border-2 border-bone/15 border-t-brand-secondary" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-bone/50">
            Preparando la galería
          </span>
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={imageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Páginas web
            <br />
            para fotógrafos
            <span
              aria-hidden="true"
              className="inline-block align-[-0.04em] text-[0.85em]"
            >
              📸
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={imageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-bone/70 sm:text-xl"
          >
            Sitios web para fotógrafos que quieren mostrar su trabajo con la
            calidad que merece. Galerías inmersivas, carga rápida y una
            presencia profesional que convierte visitas en clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={imageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
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
