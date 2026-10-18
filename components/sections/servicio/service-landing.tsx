"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Plus, Minus, ArrowRight, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/social-links";
import { LEDMarquee } from "@/components/ui/led-marquee";
import { ServiceIcon } from "./icons";
import { BrowserFrame } from "./browser-frame";
import { ServiceInlineCta } from "./inline-cta";
import { ServiceSeoContent } from "./seo-content";
import { ServiceTour } from "./tour";
import { ServiceTestimonials } from "./testimonials";
import type { ServicePageConfig } from "@/content/service-pages/types";

const whatsappNumber = "541138235395";

function whatsappHref(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function ServiceLanding({ config }: { config: ServicePageConfig }) {
  const wa = whatsappHref(config.whatsapp);

  return (
    <div className="flex flex-col pb-20 md:pb-0">
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink pt-32 pb-20 text-bone lg:pt-40 lg:pb-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/3 h-[26rem] w-[26rem] rounded-full bg-brand-secondary/10 blur-[150px]" />
          <div className="absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full bg-brand-primary/25 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xs font-bold uppercase tracking-[0.24em] text-brand-secondary"
              >
                Diseño web para {config.name.toLowerCase()}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              >
                {config.hero.title}
                <br />
                <span className="text-brand-secondary">{config.hero.highlight}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7 max-w-lg text-lg leading-relaxed text-bone/70 sm:text-xl"
              >
                {config.hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
              >
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-md bg-white px-8 py-4 text-base font-semibold text-ink transition-colors hover:bg-bone [&>svg]:h-5 [&>svg]:w-5"
                >
                  <WhatsAppIcon />
                  Quiero mi sitio
                </a>
                <Link
                  href="#precios"
                  className="group inline-flex items-center justify-center gap-2 rounded-md border border-bone/25 px-7 py-4 text-base font-medium text-bone/80 backdrop-blur-sm transition-colors hover:border-bone/50 hover:text-bone"
                >
                  Ver precios
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
              >
                {[
                  "Diseño 100% a medida",
                  "Listo en 4 a 8 semanas",
                  "Dominio y hosting a tu nombre",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-bone/60"
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-secondary/15">
                      <Check className="h-3 w-3 text-brand-secondary" />
                    </span>
                    {item}
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <BrowserFrame
                image={config.hero.image}
                alt={config.hero.imageAlt}
                width={config.hero.imageWidth}
                height={config.hero.imageHeight}
                objectPosition={config.hero.imagePosition ?? "object-top"}
                sizes="(max-width: 1024px) 100vw, 560px"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-white py-24 text-ink lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {config.problem.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">
              {config.problem.intro}
            </p>
          </div>

          <div className="mt-16 grid max-w-4xl gap-10 md:grid-cols-2 md:gap-x-16">
            <div>
              <h3 className="flex items-center gap-3 border-b border-ink/15 pb-4 font-display text-2xl text-graphite">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/40">
                  <X className="h-4 w-4" />
                </span>
                Solo redes sociales
              </h3>
              <ul>
                {config.problem.comparisons.map((item) => (
                  <li
                    key={item.pain}
                    className="flex items-start gap-4 border-b border-ink/10 py-5"
                  >
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-ink/30" />
                    <span className="text-base leading-snug text-graphite">
                      {item.pain}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-3 border-b border-ink pb-4 font-display text-2xl text-ink">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink">
                  <Image
                    src="/icon.svg"
                    alt="Huella Online"
                    width={22}
                    height={22}
                    className="h-5 w-5 object-contain"
                  />
                </span>
                Con Huella Online
              </h3>
              <ul>
                {config.problem.comparisons.map((item) => (
                  <li
                    key={item.gain}
                    className="flex items-start gap-4 border-b border-ink/10 py-5"
                  >
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-base font-bold leading-snug text-ink">
                      {item.gain}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      {config.seoContent && (
        <ServiceSeoContent
          title={config.seoContent.title}
          intro={config.seoContent.intro}
          items={config.seoContent.items}
          outro={config.seoContent.outro}
        />
      )}

      {/* INCLUDED */}
      <section className="bg-ink py-24 text-bone lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {config.included.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone/60">
              {config.included.intro}
            </p>
          </div>

          <div className="mt-16 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {config.included.items.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group border-t border-bone/15 pt-6"
              >
                <ServiceIcon
                  name={item.icon}
                  className="h-5 w-5 text-bone/40 transition-colors duration-300 group-hover:text-brand-secondary"
                />
                <h3 className="mt-4 font-display text-2xl tracking-tight text-bone">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-bone/60">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="bg-white py-24 text-ink lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-secondary">
              {config.showcase.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {config.showcase.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite">
              {config.showcase.intro}
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
                href={config.showcase.link?.href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-sm border border-ink/10 bg-ink-soft"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={config.showcase.image}
                    alt={config.showcase.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </a>
            </motion.div>

            <div className="lg:col-span-5">
              <ul>
                {config.showcase.highlights.map((item) => (
                  <li
                    key={item}
                    className="border-b border-ink/10 py-4 text-base text-graphite"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {config.showcase.link && (
                <a
                  href={config.showcase.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand-secondary"
                >
                  {config.showcase.link.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              )}
            </div>
          </div>

          {config.showcase.review && (
            <motion.figure
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 border-t border-ink/15 pt-10"
            >
              <blockquote className="max-w-4xl font-display text-2xl font-light leading-snug text-ink/90 sm:text-3xl">
                &ldquo;{config.showcase.review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm text-graphite">
                <span className="font-semibold text-ink">
                  {config.showcase.review.author}
                </span>{" "}
                · {config.showcase.review.role}
              </figcaption>
            </motion.figure>
          )}

          <ServiceInlineCta
            whatsappHref={wa}
            title="¿Querés un sitio así para tu proyecto?"
            tone="light"
          />
        </div>
      </section>

      {/* TOUR */}
      {config.tour && (
        <ServiceTour
          whatsappHref={wa}
          title={config.tour.title}
          intro={config.tour.intro}
          link={config.tour.link}
          steps={config.tour.steps}
        />
      )}

      {/* PROCESS */}
      <section className="bg-ink py-24 text-bone lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {config.process.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone/60">
              {config.process.intro}
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {config.process.steps.map((step, index) => (
              <div key={step.title} className="border-t border-bone/15 pt-6">
                <span className="font-display text-4xl text-bone/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-2xl tracking-tight text-bone">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bone/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {config.testimonials && (
        <ServiceTestimonials
          whatsappHref={wa}
          title={config.testimonials.title}
          highlight={config.testimonials.highlight}
          intro={config.testimonials.intro}
          items={config.testimonials.items}
        />
      )}

      {/* PRICING */}
      <section
        id="precios"
        className="relative scroll-mt-24 overflow-hidden border-t border-bone/10 bg-ink py-24 text-bone lg:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-[24rem] w-[44rem] -translate-x-1/2 rounded-full bg-brand-secondary/10 blur-[130px]"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {config.pricing.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone/60">
              {config.pricing.intro}
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-10">
            {config.pricing.plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col border-t pt-8 ${
                  plan.highlighted ? "border-brand-secondary/50" : "border-bone/15"
                }`}
              >
                <div className="relative flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl tracking-tight text-bone">
                    <span aria-hidden="true" className="mr-2">
                      {plan.emoji}
                    </span>
                    {plan.name}
                  </h3>
                  {plan.highlighted && (
                    <span className="rounded-full border border-brand-secondary/50 bg-brand-secondary/10 px-3 py-1 text-[11px] font-semibold text-brand-secondary">
                      Más elegido
                    </span>
                  )}
                </div>

                <div className="relative mt-6 flex items-baseline gap-2">
                  <span className="text-xs text-bone/65">desde</span>
                  <span className="font-display text-5xl tracking-tight text-bone">
                    ${plan.price}
                  </span>
                  <span className="text-xs text-bone/65">ARS</span>
                </div>

                <p className="relative mt-4 text-sm leading-relaxed text-bone/60">
                  {plan.tagline}
                </p>

                <ul className="relative mt-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-secondary/15">
                        <Check className="h-3 w-3 text-brand-secondary" />
                      </span>
                      <span className="text-sm leading-snug text-bone/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-8 inline-flex items-center justify-center gap-2.5 rounded-md bg-bone px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-bone/85 [&>svg]:h-4 [&>svg]:w-4"
                >
                  <WhatsAppIcon />
                  Empezar
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="grid rounded-xl border border-brand-secondary/30 bg-brand-secondary/[0.07] p-6 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-x-6 sm:p-7">
              <div className="flex items-center gap-4 sm:col-start-1 sm:row-start-1 sm:gap-5">
                <span aria-hidden="true" className="text-4xl leading-none">
                  🎁
                </span>
                <div>
                  <p className="font-display text-2xl tracking-tight text-bone">
                    Hosting incluido
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-bone/70">
                    Publicamos tu sitio con un plan gratuito que alcanza para la
                    mayoría de los proyectos. El dominio y el hosting quedan a tu
                    nombre y nosotros los dejamos configurados.
                  </p>
                </div>
              </div>

              <div className="order-last mt-8 sm:order-none sm:col-start-2 sm:row-start-1 sm:mt-0 sm:max-w-xs sm:text-right">
                <div className="flex items-center gap-2 sm:justify-end">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-brand-secondary" />
                  <h3 className="font-display text-lg tracking-tight text-bone">
                    Incluido en todos los planes
                  </h3>
                </div>
              </div>

              <ul className="order-2 mt-6 grid gap-x-12 gap-y-4 border-t border-brand-secondary/20 pt-6 sm:col-span-2 sm:row-start-2 sm:grid-cols-2 lg:grid-cols-3">
                {config.pricing.included.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-3 text-sm leading-relaxed text-bone/75"
                  >
                    <span aria-hidden="true" className="text-base leading-none">
                      {item.emoji}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-bone/60">
            {config.pricing.note}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={config.faqs} />

      {/* CTA */}
      <section
        id="contacto"
        className="scroll-mt-24 border-t border-bone/10 bg-ink py-24 text-bone lg:py-32"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-bone/10 bg-ink-soft p-8 sm:p-12 lg:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-brand-secondary/15 blur-[130px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-24 h-[22rem] w-[22rem] rounded-full bg-brand-primary/25 blur-[130px]"
            />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
              <div className="lg:col-span-7">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-secondary">
                  Hablemos
                </p>
                <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                  {config.cta.title}
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-bone/60">
                  {config.cta.subtitle}
                </p>

                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {[
                    "Charla de 15 minutos",
                    "Sin compromiso",
                    "Por Meet o WhatsApp",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-bone/70"
                    >
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-secondary/15">
                        <Check className="h-3 w-3 text-brand-secondary" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 lg:col-span-5">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-md bg-whatsapp px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-whatsapp-hover [&>svg]:h-5 [&>svg]:w-5"
                >
                  <WhatsAppIcon />
                  Escribir por WhatsApp
                </a>
                <Link
                  href="/brief"
                  className="inline-flex items-center justify-center gap-3 rounded-md border border-bone/25 bg-bone/[0.03] px-8 py-4 text-base font-medium text-bone/80 transition-colors hover:border-bone/50 hover:text-bone"
                >
                  Completar formulario
                </Link>
                <p className="mt-1 text-center text-xs text-bone/45 lg:text-left">
                  Respondemos en menos de 24 horas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LEDMarquee />

      {/* STICKY CTA */}
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp"
        title="Hablar por WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:bg-[#20ba5a] hover:shadow-xl [&>svg]:h-7 [&>svg]:w-7"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

function FaqSection({ faqs }: { faqs: ServicePageConfig["faqs"] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-24 text-ink lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Preguntas frecuentes.
            </h2>
          </div>

          <div className="lg:col-span-8">
            {faqs.map((faq, index) => {
              const isOpen = open === index;
              return (
                <div key={faq.question} className="border-t border-ink/15">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-xl tracking-tight sm:text-2xl">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-graphite">
                      {isOpen ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pr-8 text-base leading-relaxed text-graphite">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
