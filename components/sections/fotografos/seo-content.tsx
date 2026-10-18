"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const items = [
  {
    emoji: "🖼️",
    title: "Portfolio y galerías inmersivas",
    description:
      "Tus mejores fotos a pantalla completa, con lightbox y transiciones suaves. Organizamos las galerías por bodas, XV años, newborn, producto o sesiones, según tu especialidad.",
  },
  {
    emoji: "🔍",
    title: "Optimizada para aparecer en Google",
    description:
      "Estructura, textos y datos estructurados pensados para posicionar tu página web para fotógrafos en las búsquedas de tu zona y tu especialidad, para que te encuentren quienes quieren contratarte.",
  },
  {
    emoji: "⚡",
    title: "Carga rápida y máxima calidad",
    description:
      "Optimizamos cada imagen en formatos modernos para que se vea nítida y el sitio vuele, incluso con galerías pesadas y desde el celular.",
  },
  {
    emoji: "💬",
    title: "Contacto y consultas 24/7",
    description:
      "WhatsApp, formulario y redes integrados para que un interesado te escriba en un solo toque, desde cualquier dispositivo y a cualquier hora.",
  },
  {
    emoji: "🔄",
    title: "Mantenimiento y actualización de galerías",
    description:
      "Sumar fotos nuevas o cambiar las existentes entra dentro del mantenimiento: nos enviás el material y nosotros lo publicamos, sin que tengas que tocar nada técnico.",
  },
  {
    emoji: "🎨",
    title: "Diseño web a medida en Argentina",
    description:
      "Trabajamos de forma remota con fotógrafos de todo el país. Un diseño propio que refleja tu estilo y te diferencia, nada de plantillas genéricas.",
  },
];

export function FotografosSeoContent() {
  return (
    <section className="scroll-mt-24 border-t border-ink/10 bg-white py-16 text-ink sm:py-20 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            ¿Qué incluye una página web para fotógrafos?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-graphite">
            Una página web para fotógrafos no es solo un portfolio lindo: es tu
            propio espacio para mostrar tu trabajo en máxima calidad, aparecer en
            Google y recibir consultas sin depender del algoritmo de Instagram.
            Esto es lo que diseñamos para cada estudio, marca personal o
            fotógrafo profesional.
          </p>
        </div>

        <div className="mt-16 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border-t border-ink/15 pt-6"
            >
              <h3 className="font-display text-2xl tracking-tight">
                <span aria-hidden="true" className="mr-2">
                  {item.emoji}
                </span>
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-graphite">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="mt-14 text-base leading-relaxed text-graphite">
          ¿Querés ver el detalle? Conocé los{" "}
          <Link
            href="#precios"
            className="font-semibold text-ink underline underline-offset-4 transition-colors hover:text-brand-secondary"
          >
            planes de páginas web para fotógrafos
          </Link>{" "}
          y elegí el punto de partida que mejor se adapta a tu estudio.
        </p>
      </div>
    </section>
  );
}
