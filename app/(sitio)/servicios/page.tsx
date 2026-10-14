import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { services } from "@/content/services";
import { BlogBackground } from "@/components/blog/blog-background";

const siteUrl = "https://huellaonline.com";

export const metadata: Metadata = {
  title: "Servicios: diseño de páginas web por rubro | Huella Online",
  description:
    "Diseñamos páginas web a medida según tu rubro: fotógrafos, maestros, gimnasios, arquitectura y más. Galerías inmersivas, carga rápida y sitios pensados para convertir.",
  keywords: [
    "diseño web por rubro",
    "páginas web para profesionales",
    "diseño de páginas web Argentina",
    "webs para negocios",
    "páginas web para gimnasios",
    "páginas web para docentes",
    "páginas web para arquitectos",
  ],
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Servicios: diseño de páginas web por rubro | Huella Online",
    description:
      "Páginas web a medida según tu rubro. Galerías inmersivas, carga rápida y sitios pensados para convertir.",
    url: "/servicios",
    siteName: "Huella Online",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios: diseño de páginas web por rubro | Huella Online",
    description:
      "Páginas web a medida según tu rubro. Galerías inmersivas, carga rápida y sitios pensados para convertir.",
  },
};

const listedServices = services.filter((service) => service.href);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/servicios/#collection`,
      url: `${siteUrl}/servicios`,
      name: "Servicios: diseño de páginas web por rubro",
      description:
        "Páginas web a medida según tu rubro, pensadas para convertir visitas en clientes.",
      inLanguage: "es-AR",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: listedServices.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteUrl}${service.href}`,
          name: service.name,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/servicios/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Servicios",
          item: `${siteUrl}/servicios`,
        },
      ],
    },
  ],
};

export default function ServiciosPage() {
  return (
    <div className="relative overflow-hidden bg-brand-primary-deep text-white">
      <BlogBackground />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* HEADER */}
      <section className="relative z-10 pt-28 pb-10 lg:pt-32 lg:pb-12">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="flex flex-col items-center text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-secondary">
              Servicios
            </p>
            <h1 className="mt-3 max-w-2xl text-3xl font-black uppercase leading-[1.05] tracking-tighter sm:text-4xl lg:text-5xl">
              Páginas web para <span className="text-brand-secondary">tu rubro</span>
            </h1>
            <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-zinc-400">
              Cada profesión necesita una web distinta. Elegí la tuya y mirá cómo
              la pensamos: galerías, servicios, precios y todo lo que convierte
              visitas en clientes.
            </p>
          </div>
        </div>
      </section>

      {/* LISTADO */}
      <section className="relative z-10 pb-16">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* PREVIEW */}
                <div className="relative aspect-video w-full overflow-hidden bg-white/[0.02]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-primary-deep/70 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

                  {/* Emoji badge */}
                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-brand-primary-deep/80 text-2xl shadow-lg backdrop-blur transition-transform duration-300 group-hover:scale-110"
                  >
                    {service.emoji}
                  </span>

                  {!service.href && (
                    <span className="absolute right-4 top-4 rounded-full border border-brand-secondary/40 bg-brand-secondary/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-secondary">
                      Próximamente
                    </span>
                  )}
                </div>

                {/* BODY */}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                    {service.href ? (
                      <Link
                        href={service.href}
                        className="after:absolute after:inset-0 after:content-['']"
                      >
                        {service.name}
                      </Link>
                    ) : (
                      service.name
                    )}
                  </h2>

                  {service.tagline && (
                    <p className="mt-1 text-sm font-semibold text-brand-secondary">
                      {service.tagline}
                    </p>
                  )}

                  <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-zinc-400">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                    {service.href ? (
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary transition-colors group-hover:text-white">
                        Ver el servicio
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                        En preparación
                      </span>
                    )}

                    {service.blogCategory && (
                      <Link
                        href={`/blog/${service.blogCategory}`}
                        className="relative z-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white"
                      >
                        <BookOpen className="h-4 w-4" />
                        Guías
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 pb-28 lg:pb-36">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#051939] p-8 shadow-2xl sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,165,0,0.12),transparent_65%)]" />
            <div className="relative z-10">
              <p className="text-2xl font-black uppercase leading-tight tracking-tighter text-white sm:text-3xl">
                ¿No ves tu rubro?
              </p>
              <p className="mt-3 max-w-xl text-base font-medium leading-relaxed text-zinc-400">
                Trabajamos con negocios y profesionales de todo tipo. Contanos qué
                hacés y te mostramos cómo podría verse tu web.
              </p>
            </div>
            <Link
              href="/brief"
              className="group relative z-10 mt-6 inline-flex shrink-0 items-center gap-3 rounded bg-blue-600 px-7 py-4 text-sm font-bold uppercase tracking-tight text-white transition-all duration-300 hover:bg-white hover:text-blue-600 active:scale-95 sm:mt-0"
            >
              Contanos tu idea
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
