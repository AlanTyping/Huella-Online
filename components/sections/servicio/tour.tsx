"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { TourStep } from "@/content/service-pages/types";
import { BrowserFrame } from "./browser-frame";
import { ServiceInlineCta } from "./inline-cta";

interface ServiceTourProps {
  whatsappHref: string;
  title: string;
  intro: string;
  link?: { href: string; label: string };
  steps: TourStep[];
}

/**
 * Recorrido sección por sección con capturas reales.
 * Equivalente al de `/fotografos`, alimentado por config.
 */
export function ServiceTour({
  whatsappHref,
  title,
  intro,
  link,
  steps,
}: ServiceTourProps) {
  const [active, setActive] = useState(0);
  const current = steps[active];
  const total = String(steps.length).padStart(2, "0");

  if (steps.length === 0) return null;

  return (
    <section
      id="recorrido"
      className="relative scroll-mt-24 overflow-hidden border-t border-ink/10 bg-white py-24 text-ink lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-1/4 h-[18rem] w-[18rem] rounded-full bg-brand-primary/10 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">
            {intro}
          </p>

          {link && (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-graphite"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
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
            fit="contain"
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
                <span className="absolute left-1/2 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-secondary font-display text-sm font-semibold text-ink shadow-[0_10px_24px_-12px_rgba(255,165,0,0.9)] ring-4 ring-white">
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

        <ServiceInlineCta
          whatsappHref={whatsappHref}
          title="¿Arrancamos con tu propio sitio?"
          tone="light"
        />
      </div>
    </section>
  );
}
