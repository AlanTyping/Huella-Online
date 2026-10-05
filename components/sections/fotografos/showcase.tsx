"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, ArrowUpRight, Check } from "lucide-react";
import { InstagramIcon } from "@/components/ui/social-links";

const lumosInstagram = "https://www.instagram.com/lumos.fotografia_/";

const highlights = [
  "Portfolio digital a medida",
  "Galería inmersiva con lightbox",
  "Imágenes optimizadas al 100%",
  "Contacto por WhatsApp integrado",
];

const metrics = [
  { value: "Galería", label: "Inmersiva" },
  { value: "< 1s", label: "Carga rápida" },
  { value: "100%", label: "Imágenes optimizadas" },
];

const review =
  "Fue tremenda experiencia. Al principio no voy a negar que desconfié, pero con el paso del tiempo comprendí que realmente estaba trabajando con un profesional. Alan es una persona que está para ayudarte y explicarte con toda la paciencia del mundo hasta que lo entiendas. Finalmente te ayuda a lograr eso que tanto pensaste que querías: tu propia página web. Súper recomendable Huella Online 😎";

function InstagramVerifiedIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <defs>
        <mask id="check-mask-lumos">
          <rect width="100%" height="100%" fill="white" />
          <path
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9 12 2 2 4-4"
            fill="none"
          />
        </mask>
      </defs>
      <path
        fill="#0095F6"
        stroke="#0095F6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        mask="url(#check-mask-lumos)"
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.76 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      />
    </svg>
  );
}

export function FotografosShowcase() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-brand-primary-deep py-24 text-white md:py-32"
    >
      {/* Background system */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />
        <div className="absolute bottom-0 right-[-120px] h-[600px] w-[600px] rounded-full bg-brand-secondary/5 blur-[200px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.15) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl text-4xl font-black uppercase tracking-tighter text-white sm:text-6xl"
          >
            LUMOS <span className="text-brand-secondary">FOTOGRAFÍA</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-zinc-400"
          >
            Un fotógrafo real que dejó de depender del algoritmo y ahora tiene
            su propio escenario digital.
          </motion.p>
        </div>

        {/* Case study */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Project image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-brand-secondary/10 blur-[60px]" />

            <a
              href={lumosInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/50"
            >
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                <div className="ml-3 flex-1 truncate rounded-md bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium tracking-wide text-zinc-500">
                  Lumos Fotografía · Portfolio
                </div>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/lumosfotografia.webp"
                  alt="Portfolio web de Lumos Fotografía creado por Huella Online"
                  fill
                  className="object-cover object-top opacity-90 transition-all duration-1000 group-hover:scale-[1.04] group-hover:opacity-100"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-colors duration-700 group-hover:ring-white/25" />
            </a>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Fotografía · Septiembre 2026
            </span>

            <h3 className="mt-3 text-3xl font-black uppercase tracking-tighter text-white sm:text-4xl">
              Un portfolio que se siente como una galería
            </h3>

            <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
              Diseñamos un sitio para capturar la esencia de cada momento:
              imágenes al frente, navegación clara y una experiencia visual que
              transmite la calidad del trabajo de Lumos desde el primer
              vistazo.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-zinc-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-6 border-y border-white/[0.07] py-4 sm:gap-8">
              {metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col">
                  <span className="text-base font-black tracking-tight text-white sm:text-lg">
                    {metric.value}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={lumosInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link mt-8 inline-flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-brand-secondary"
            >
              Ver su Instagram
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover/link:scale-105 group-hover/link:bg-brand-secondary/20 group-hover/link:text-brand-secondary">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative mt-16 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.05] md:p-12"
        >
          <Quote className="pointer-events-none absolute -left-6 -top-6 h-48 w-48 rotate-6 text-white/5" />
          <Quote className="absolute right-8 top-8 h-8 w-8 text-white/10" />

          <div className="relative z-10">
            <div className="mb-6 flex gap-1 text-brand-secondary">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4 + i * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <Star className="h-5 w-5 fill-current" />
                </motion.div>
              ))}
            </div>

            <p className="mb-10 text-lg italic leading-relaxed text-zinc-300 md:text-xl">
              &quot;{review}&quot;
            </p>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px]">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-brand-primary-deep">
                    <Image
                      src="/images/cristian.webp"
                      alt="Cristian, fotógrafo de Lumos Fotografía"
                      fill
                      className="scale-[1.5] object-cover origin-[65%_0%]"
                      style={{ objectPosition: "65% top" }}
                    />
                  </div>
                </div>
                <div>
                  <h4 className="flex items-center gap-1.5 text-lg font-bold text-white">
                    Cristian
                    <InstagramVerifiedIcon className="h-4 w-4 shrink-0" />
                  </h4>
                  <p className="text-sm font-medium text-zinc-400">
                    Lumos Fotografía
                  </p>
                </div>
              </div>

              <a
                href={lumosInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-colors hover:bg-brand-secondary hover:text-white [&>svg]:h-5 [&>svg]:w-5"
                title="Ver el perfil de Lumos Fotografía"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,165,0,0.04)_0%,transparent_60%)] transition-all duration-500 group-hover:bg-[radial-gradient(circle_at_top,rgba(255,165,0,0.08)_0%,transparent_60%)]" />
        </motion.div>
      </div>
    </section>
  );
}
