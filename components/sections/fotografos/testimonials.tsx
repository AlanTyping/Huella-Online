"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star, ExternalLink, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/social-links";
import { fotografoWhatsappHref } from "./contact";

export function FotografosTestimonials() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.03] bg-brand-primary-deep py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,165,0,0.12),transparent_65%)] blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-6xl">
            CLIENTES QUE <span className="text-brand-secondary">DIERON EL PASO</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg font-medium text-zinc-400">
            Fotógrafos y marcas que ya tienen su lugar en internet.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.05]"
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
                      delay: 0.3 + i * 0.08,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <Star className="h-5 w-5 fill-current" />
                  </motion.div>
                ))}
              </div>

              <p className="mb-8 text-base italic leading-relaxed text-zinc-300 md:text-lg">
                &quot;La experiencia de trabajar con Huella Online fue muy buena.
                Valoro el diálogo y el acompañamiento durante todo el proceso.
                Las reuniones fueron muy dinámicas, con mucha escucha y
                predisposición para entender lo que necesitaba. Quedé muy
                conforme con el resultado :)&quot;
              </p>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white/10">
                    <Image
                      src="/images/vicky-square.jpg"
                      alt="Vicky Aphalo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Vicky Aphalo
                    </h4>
                    <p className="text-sm font-medium text-zinc-400">
                      Educación &amp; bienestar
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.vickyaphalo.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-colors hover:bg-brand-secondary hover:text-white"
                  title="Ver el sitio de Vicky Aphalo"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,165,0,0.04)_0%,transparent_60%)] transition-all duration-500 group-hover:bg-[radial-gradient(circle_at_top,rgba(255,165,0,0.08)_0%,transparent_60%)]" />
          </motion.div>

          {/* Next client CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative flex flex-col justify-center overflow-hidden rounded-lg border border-brand-secondary/30 bg-[#051939] p-8 text-left md:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,165,0,0.12),transparent_65%)]" />

            <div className="relative z-10">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-secondary">
                El próximo podés ser vos
              </span>

              <h3 className="mt-4 text-2xl font-black uppercase leading-tight tracking-tighter text-white md:text-3xl">
                Tu proyecto también merece contar su historia
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">
                Contanos qué fotografiás y te mostramos cómo podría verse tu
                sitio. La primera charla de 15 minutos es gratis.
              </p>

              <a
                href={fotografoWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex w-fit items-center gap-3 rounded-lg bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-tight text-white transition-all hover:bg-[#20ba5a] active:scale-95 [&>svg]:h-5 [&>svg]:w-5"
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
