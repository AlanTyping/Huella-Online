"use client";

import { type ComponentType } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Image as ImageIcon,
  Images,
  Maximize2,
  CreditCard,
  UserRound,
  Star,
  MessageCircle,
} from "lucide-react";

interface Step {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
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
    icon: ImageIcon,
    image: "/images/lumosfotografia.webp",
    alt: "Portada del sitio de Lumos Fotografía",
    width: 1917,
    height: 1078,
  },
  {
    title: "Coberturas",
    description:
      "Tus servicios ordenados por tipo de evento, para que cada visitante encuentre exactamente lo que busca y llegue a la categoría que le interesa en segundos.",
    icon: Images,
    image: "/images/lumos/coberturas-xv.webp",
    alt: "Categoría XV Años del sitio de Lumos Fotografía",
    width: 1208,
    height: 802,
  },
  {
    title: "Galería inmersiva",
    description:
      "Cada sesión se abre a pantalla completa con transiciones suaves y un lightbox pensado para recorrer tus fotos en máxima calidad, sin salir de la experiencia.",
    icon: Maximize2,
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
    <section
      id="recorrido"
      className="relative bg-brand-primary-deep py-24 text-white lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-[-120px] h-[500px] w-[500px] rounded-full bg-brand-secondary/10 blur-[200px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.15) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl text-4xl font-black uppercase tracking-tighter sm:text-6xl"
          >
            TU SITIO, <span className="text-brand-secondary">PASO A PASO</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-zinc-400"
          >
            Recorré las secciones que puede tener tu web, una por una, con
            ejemplos reales del sitio de Lumos Fotografía.
          </motion.p>
        </div>

        {/* Camino */}
        <ol className="mx-auto mt-20 flex max-w-5xl flex-col items-center">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const number = String(index + 1).padStart(2, "0");
            const isPortrait = step.height > step.width;

            return (
              <li
                key={step.title}
                className="flex w-full flex-col items-center text-center"
              >
                {/* Conector del camino */}
                {index > 0 && (
                  <motion.span
                    aria-hidden
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{ transformOrigin: "top" }}
                    className="my-14 h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-brand-secondary/50 lg:my-20"
                  />
                )}

                {/* Encabezado del paso */}
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 text-brand-secondary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-[0.35em] text-zinc-500">
                    Paso {number}
                  </span>
                </div>

                <h3 className="mt-6 text-3xl font-black uppercase tracking-tighter sm:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-4 w-full max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                  {step.description}
                </p>

                {/* Imagen */}
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative mt-10 w-full ${
                    isPortrait ? "max-w-md" : "max-w-3xl"
                  }`}
                >
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-secondary/15 to-blue-500/10 blur-[40px]" />

                  <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-2xl shadow-black/50">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      width={step.width}
                      height={step.height}
                      sizes={
                        isPortrait
                          ? "(max-width: 1024px) 100vw, 448px"
                          : "(max-width: 1024px) 100vw, 768px"
                      }
                      className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-colors duration-700 group-hover:ring-white/25" />
                  </figure>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
