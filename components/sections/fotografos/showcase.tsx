"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/social-links";
import { FotografosInlineCta } from "./inline-cta";

const lumosInstagram = "https://www.instagram.com/lumos.fotografia_/";
const lumosSite = "https://lumosfotografia.com";

const highlights = [
  "Portfolio digital a medida",
  "Galería inmersiva con lightbox",
  "Imágenes optimizadas al 100%",
  "Contacto por WhatsApp integrado",
];

const review =
  "Fue tremenda experiencia. Al principio no voy a negar que desconfié, pero con el paso del tiempo comprendí que realmente estaba trabajando con un profesional. Alan está para ayudarte y explicarte con toda la paciencia del mundo hasta que lo entiendas. Finalmente te ayuda a lograr eso que tanto pensaste que querías: tu propia página web. Súper recomendable Huella Online.";

export function FotografosShowcase() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-24 bg-ink py-24 text-bone md:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-brand-secondary">
            Proyecto · De Lumos Fotografía
          </p>
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Un portafolio que se siente como una galería.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bone/60">
            Lumos Fotografía dejó de depender del algoritmo y hoy tiene su
            propio escenario digital. Diseñamos el sitio para que cada imagen se
            vea en su máxima calidad.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <a
              href={lumosSite}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver el sitio de Lumos Fotografía"
              className="group block overflow-hidden rounded-sm border border-bone/10 bg-ink-soft"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/lumosfotografia.webp"
                  alt="Portfolio web de Lumos Fotografía creado por Huella Online"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </a>
          </motion.div>

          <div className="lg:col-span-5">
            <ul>
              {highlights.map((item) => (
                <li
                  key={item}
                  className="border-b border-bone/10 py-4 text-base text-bone/80"
                >
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={lumosSite}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bone transition-colors hover:text-brand-secondary"
            >
              Ver el sitio en vivo
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Pull quote */}
        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-bone/15 pt-10"
        >
          <blockquote className="max-w-4xl font-display text-2xl font-light leading-snug text-bone/90 sm:text-3xl lg:text-4xl">
            &ldquo;{review}&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src="/images/cristian.webp"
                alt="Cristian, fotógrafo de Lumos Fotografía"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-bone">Cristian</p>
              <p className="text-sm text-bone/50">Lumos Fotografía</p>
            </div>
            <a
              href={lumosInstagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver el perfil de Instagram de Lumos Fotografía"
              className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-bone/20 text-bone/70 transition-colors hover:border-bone/50 hover:text-bone [&>svg]:h-5 [&>svg]:w-5"
            >
              <InstagramIcon />
            </a>
          </figcaption>
        </motion.figure>

        <FotografosInlineCta
          title="¿Querés un sitio así para tu estudio?"
          tone="dark"
        />
      </div>
    </section>
  );
}
