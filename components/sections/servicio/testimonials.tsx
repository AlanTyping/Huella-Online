"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Quote, Star } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/social-links";
import type { Testimonial } from "@/content/service-pages/types";

interface ServiceTestimonialsProps {
  whatsappHref: string;
  title: string;
  highlight?: string;
  intro: string;
  items: Testimonial[];
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

/**
 * Testimonios + tarjeta "el próximo podés ser vos".
 * Equivalente al de `/fotografos`, alimentado por config.
 */
export function ServiceTestimonials({
  whatsappHref,
  title,
  highlight,
  intro,
  items,
}: ServiceTestimonialsProps) {
  return (
    <section className="relative overflow-hidden border-t border-bone/10 bg-ink py-20 text-bone lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,165,0,0.12),transparent_65%)] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="font-display text-4xl font-light leading-tight tracking-tight sm:text-6xl">
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-brand-secondary">{highlight}</span>
              </>
            )}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/70">
            {intro}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-bone/10 bg-bone/[0.03] p-8 transition-colors duration-300 hover:border-bone/30 hover:bg-bone/[0.05]"
            >
              <Quote className="pointer-events-none absolute -left-6 -top-6 h-48 w-48 rotate-6 text-bone/5" />
              <Quote className="absolute right-8 top-8 h-8 w-8 text-bone/10" />

              <div className="relative z-10">
                <div className="mb-6 flex gap-1 text-brand-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>

                <p className="mb-8 text-base italic leading-relaxed text-bone/80 md:text-lg">
                  &quot;{item.text}&quot;
                </p>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-bone/10 bg-bone/5 font-display text-lg text-bone">
                      {item.avatar ? (
                        <Image
                          src={item.avatar}
                          alt={item.author}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      ) : (
                        initials(item.author)
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-bone">
                        {item.author}
                      </h4>
                      <p className="text-sm font-medium text-bone/60">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {item.siteUrl && (
                    <a
                      href={item.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver el sitio de ${item.author}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-bone/5 text-bone/60 transition-colors hover:bg-brand-secondary hover:text-ink"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,165,0,0.04)_0%,transparent_60%)] transition-all duration-500 group-hover:bg-[radial-gradient(circle_at_top,rgba(255,165,0,0.08)_0%,transparent_60%)]" />
            </motion.div>
          ))}

          {/* El próximo podés ser vos */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: items.length * 0.1 }}
            className={`relative flex flex-col justify-center overflow-hidden rounded-lg border border-brand-secondary/30 bg-ink-soft p-8 text-left md:p-10 ${
              items.length === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,165,0,0.12),transparent_65%)]" />

            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-secondary">
                El próximo podés ser vos
              </span>

              <h3 className="mt-4 font-display text-2xl font-light leading-tight tracking-tight text-bone md:text-3xl">
                Tu proyecto también merece contar su historia
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-bone/70 md:text-base">
                Contanos qué hacés y te mostramos cómo podría verse tu sitio. La
                primera charla de 15 minutos es gratis.
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex w-fit items-center gap-3 rounded-lg bg-whatsapp px-6 py-4 text-sm font-semibold uppercase tracking-tight text-white transition-all hover:bg-whatsapp-hover active:scale-95 [&>svg]:h-5 [&>svg]:w-5"
              >
                <WhatsAppIcon />
                Quiero mi web
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
