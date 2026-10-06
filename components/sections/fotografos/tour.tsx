"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Aperture,
  ArrowUpRight,
  Camera,
  CreditCard,
  LayoutGrid,
  MessageCircle,
  Star,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { FotografosInlineCta } from "./inline-cta";

const lumosSite = "https://lumosfotografia.com";

interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  alt: string;
  width: number;
  height: number;
}

const steps: Step[] = [
  {
    title: "Portada que impacta",
    description:
      "La primera impresión: una imagen fuerte, un mensaje claro y un botón que invita a seguir explorando. Es el instante donde alguien decide si te conoce o se va.",
    icon: Camera,
    image: "/images/lumosfotografia.webp",
    alt: "Portada del sitio de Lumos Fotografía",
    width: 1917,
    height: 1078,
  },
  {
    title: "Coberturas",
    description:
      "Tus servicios ordenados por tipo de evento, para que cada visitante encuentre exactamente lo que busca y llegue a la categoría que le interesa en segundos.",
    icon: LayoutGrid,
    image: "/images/lumos/coberturas-xv.webp",
    alt: "Categoría XV Años del sitio de Lumos Fotografía",
    width: 1208,
    height: 802,
  },
  {
    title: "Galería inmersiva",
    description:
      "Cada sesión se abre a pantalla completa con transiciones suaves y un lightbox pensado para recorrer tus fotos en máxima calidad, sin salir de la experiencia.",
    icon: Aperture,
    image: "/images/lumos/galeria-xv.webp",
    alt: "Galería de fotos de XV Años de Lumos Fotografía",
    width: 877,
    height: 1025,
  },
  {
    title: "Servicios y planes",
    description:
      "Qué ofrecés y cuánto cuesta, sin vueltas. Paquetes claros que filtran consultas y hacen que el cliente llegue casi decidido.",
    icon: CreditCard,
    image: "/images/lumos/servicios.webp",
    alt: "Sección de servicios y planes del sitio de Lumos Fotografía",
    width: 1917,
    height: 970,
  },
  {
    title: "Quién está detrás",
    description:
      "Tu historia, tu mirada y tu experiencia. Es la sección que convierte un portfolio lindo en alguien en quien se confía para el día más importante.",
    icon: UserRound,
    image: "/images/lumos/sobre-mi.webp",
    alt: "Sección quién está detrás del sitio de Lumos Fotografía",
    width: 1917,
    height: 977,
  },
  {
    title: "Testimonios",
    description:
      "La voz de tus clientes trabajando para vos. Prueba social real que responde las dudas antes de que te las tengan que preguntar.",
    icon: Star,
    image: "/images/lumos/testimonios.webp",
    alt: "Sección de testimonios del sitio de Lumos Fotografía",
    width: 1917,
    height: 978,
  },
  {
    title: "Contacto y reserva",
    description:
      "El cierre: WhatsApp, formulario y redes en un solo lugar para que un interesado te escriba en un toque, desde cualquier dispositivo.",
    icon: MessageCircle,
    image: "/images/lumos/contacto.webp",
    alt: "Sección de contacto del sitio de Lumos Fotografía",
    width: 1917,
    height: 977,
  },
];

export function FotografosTour() {
  return (
    <section id="recorrido" className="bg-paper py-24 text-ink lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
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

        <div className="mt-20 flex flex-col gap-20 lg:gap-28">
          {steps.map((step, index) => {
            const Icon = step.icon;
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
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={flipped ? "lg:order-2" : ""}>
                  <figure
                    className={`overflow-hidden rounded-sm border border-ink/10 bg-white shadow-[0_20px_50px_-30px_rgba(10,10,11,0.5)] ${
                      isPortrait ? "mx-auto max-w-md" : ""
                    }`}
                  >
                    <Image
                      src={step.image}
                      alt={step.alt}
                      width={step.width}
                      height={step.height}
                      sizes={
                        isPortrait
                          ? "(max-width: 1024px) 100vw, 448px"
                          : "(max-width: 1024px) 100vw, 640px"
                      }
                      className="h-auto w-full"
                    />
                  </figure>
                </div>

                <div className={flipped ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-5xl text-ink/20">
                      {number}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-graphite">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-graphite sm:text-lg">
                    {step.description}
                  </p>
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
