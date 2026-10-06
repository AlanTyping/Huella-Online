"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FotografosInlineCta } from "./inline-cta";

const lumosSite = "https://lumosfotografia.com";

interface Step {
  title: string;
  description: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  href?: string;
}

const steps: Step[] = [
  {
    title: "Portada que impacta",
    description:
      "La primera impresión: una imagen fuerte, un mensaje claro y un botón que invita a seguir explorando. Es el instante donde alguien decide si te conoce o se va.",
    image: "/images/lumosfotografia.webp",
    alt: "Portada del sitio de Lumos Fotografía",
    width: 1917,
    height: 1078,
  },
  {
    title: "Coberturas",
    description:
      "Tus servicios ordenados por tipo de evento, para que cada visitante encuentre exactamente lo que busca y llegue a la categoría que le interesa en segundos.",
    image: "/images/lumos/coberturas-xv.webp",
    alt: "Categoría XV Años del sitio de Lumos Fotografía",
    width: 1208,
    height: 802,
  },
  {
    title: "Galería inmersiva",
    description:
      "Cada sesión se abre a pantalla completa con transiciones suaves y un lightbox pensado para recorrer tus fotos en máxima calidad, sin salir de la experiencia.",
    image: "/images/lumos/galeria-xv.webp",
    alt: "Galería de fotos de XV Años de Lumos Fotografía",
    width: 877,
    height: 1025,
  },
  {
    title: "Servicios y planes",
    description:
      "Qué ofrecés y cuánto cuesta, sin vueltas. Paquetes claros que filtran consultas y hacen que el cliente llegue casi decidido.",
    image: "/images/lumos/servicios.webp",
    alt: "Sección de servicios y planes del sitio de Lumos Fotografía",
    width: 1917,
    height: 970,
    href: "#precios",
  },
  {
    title: "Quién está detrás",
    description:
      "Tu historia, tu mirada y tu experiencia. Es la sección que convierte un portfolio lindo en alguien en quien se confía para el día más importante.",
    image: "/images/lumos/sobre-mi.webp",
    alt: "Sección quién está detrás del sitio de Lumos Fotografía",
    width: 1917,
    height: 977,
  },
  {
    title: "Testimonios",
    description:
      "La voz de tus clientes trabajando para vos. Prueba social real que responde las dudas antes de que te las tengan que preguntar.",
    image: "/images/lumos/testimonios.webp",
    alt: "Sección de testimonios del sitio de Lumos Fotografía",
    width: 1917,
    height: 978,
  },
  {
    title: "Contacto y reserva",
    description:
      "El cierre: WhatsApp, formulario y redes en un solo lugar para que un interesado te escriba en un toque, desde cualquier dispositivo.",
    image: "/images/lumos/contacto.webp",
    alt: "Sección de contacto del sitio de Lumos Fotografía",
    width: 1917,
    height: 977,
  },
];

const total = String(steps.length).padStart(2, "0");

/** Marco tipo navegador para que cada captura se lea como una web real. */
function BrowserFrame({
  image,
  alt,
  width,
  height,
  sizes,
  aspect,
  className = "",
  imageClassName = "",
}: {
  image: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  aspect?: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <figure
      className={`group overflow-hidden rounded-xl border border-ink/10 bg-white shadow-[0_24px_60px_-35px_rgba(10,10,11,0.55)] transition-colors duration-300 hover:border-brand-secondary/40 ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-ink/10 bg-ink/[0.03] px-4 py-2.5">
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span
          aria-hidden="true"
          className="ml-3 h-5 flex-1 rounded-full bg-ink/[0.05]"
        />
      </div>

      <div
        className={`overflow-hidden ${
          aspect ? `relative ${aspect} bg-paper-soft/40` : ""
        }`}
      >
        <Image
          src={image}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className={`transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
            aspect
              ? "absolute inset-0 h-full w-full object-contain"
              : "h-auto w-full"
          } ${imageClassName}`}
        />
      </div>
    </figure>
  );
}

export function FotografosTour() {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <section
      id="recorrido"
      className="relative scroll-mt-24 overflow-hidden border-t border-ink/10 bg-paper py-24 text-ink lg:py-32"
    >
      {/* Mancha de color para dar profundidad */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-1/4 h-[18rem] w-[18rem] rounded-full bg-brand-primary/10 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Tu sitio, paso a paso.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">
            Recorré las secciones que puede tener tu web, con ejemplos reales
            del sitio de Lumos Fotografía.
          </p>

          <a
            href={lumosSite}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-graphite"
          >
            Ver el sitio en vivo
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* MÓVIL: panel con navegación por flechas */}
        <div className="mt-16 lg:hidden">
          <BrowserFrame
            image={current.image}
            alt={current.alt}
            width={current.width}
            height={current.height}
            sizes="100vw"
            aspect="aspect-[4/3]"
          />

          <h3 className="mt-8 font-display text-3xl tracking-tight">
            {current.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-graphite">
            {current.description}
          </p>

          {current.href && (
            <Link
              href={current.href}
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary transition-colors hover:text-ink"
            >
              Ver precios
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}

          {/* Controles */}
          <div className="mt-12 flex items-center justify-between gap-4 border-t border-ink/10 pt-8">
            <button
              type="button"
              onClick={() => setActive((value) => Math.max(0, value - 1))}
              disabled={active === 0}
              aria-label="Paso anterior"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink/40 disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <span className="font-display text-base text-graphite">
              <span className="text-brand-secondary">
                {String(active + 1).padStart(2, "0")}
              </span>{" "}
              / {total}
            </span>

            <button
              type="button"
              onClick={() =>
                setActive((value) => Math.min(steps.length - 1, value + 1))
              }
              disabled={active === steps.length - 1}
              aria-label="Paso siguiente"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink/40 disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* DESKTOP: timeline central con pasos alternados */}
        <div className="relative mt-20 hidden flex-col gap-24 lg:flex lg:gap-32">
          {/* Línea central que conecta los pasos */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-secondary/40 to-transparent"
          />

          {steps.map((step, index) => {
            const isPortrait = step.height > step.width;
            const flipped = index % 2 === 1;
            const number = String(index + 1).padStart(2, "0");

            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid items-center gap-16 lg:grid-cols-2"
              >
                {/* Nodo del paso sobre la línea */}
                <span className="absolute left-1/2 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-secondary font-display text-sm font-semibold text-ink shadow-[0_10px_24px_-12px_rgba(255,165,0,0.9)] ring-4 ring-paper">
                  {number}
                </span>

                <div className={flipped ? "lg:order-2" : ""}>
                  <BrowserFrame
                    image={step.image}
                    alt={step.alt}
                    width={step.width}
                    height={step.height}
                    sizes={
                      isPortrait
                        ? "(max-width: 1024px) 100vw, 448px"
                        : "(max-width: 1024px) 100vw, 640px"
                    }
                    className={isPortrait ? "mx-auto max-w-md" : ""}
                  />
                </div>

                <div className={flipped ? "lg:order-1" : ""}>
                  <h3 className="font-display text-3xl tracking-tight sm:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-graphite sm:text-lg">
                    {step.description}
                  </p>
                  {step.href && (
                    <Link
                      href={step.href}
                      className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary transition-colors hover:text-ink"
                    >
                      Ver precios
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        <FotografosInlineCta
          title="¿Arrancamos con tu propio sitio?"
          tone="light"
        />
      </div>
    </section>
  );
}
