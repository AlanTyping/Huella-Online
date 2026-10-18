"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Feature } from "@/content/service-pages/types";

interface ServiceSeoContentProps {
  title: string;
  intro: string;
  items: Feature[];
  outro?: string;
}

/**
 * Bloque de contenido SEO con enlace interno a precios.
 * Equivalente al de `/fotografos`, alimentado por config.
 */
export function ServiceSeoContent({
  title,
  intro,
  items,
  outro,
}: ServiceSeoContentProps) {
  return (
    <section className="scroll-mt-24 border-t border-ink/10 bg-white py-24 text-ink lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-graphite">{intro}</p>
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
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-graphite">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="mt-14 text-base leading-relaxed text-graphite">
          {outro ?? "¿Querés ver el detalle? Conocé los"}{" "}
          <Link
            href="#precios"
            className="font-semibold text-ink underline underline-offset-4 transition-colors hover:text-brand-secondary"
          >
            planes disponibles
          </Link>{" "}
          y elegí el punto de partida que mejor se adapta a tu proyecto.
        </p>
      </div>
    </section>
  );
}
