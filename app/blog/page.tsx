import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts, categories } from "@/content/blog";
import { BlogBackground } from "@/components/blog/blog-background";

const siteUrl = "https://huellaonline.com";

export const metadata: Metadata = {
  title: "Blog | Huella Online",
  description:
    "Guías y consejos para crear la página web de tu negocio: fotografía, arquitectura, salud, educación y más. Precios, pasos y qué debe tener tu sitio.",
  keywords: [
    "blog diseño web",
    "cómo hacer una página web",
    "guías páginas web",
    "diseño web por rubro",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Huella Online",
    description: "Guías y consejos para crear la página web de tu negocio.",
    url: "/blog",
    siteName: "Huella Online",
    locale: "es_AR",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${siteUrl}/blog/#blog`,
  url: `${siteUrl}/blog`,
  name: "Blog | Huella Online",
  inLanguage: "es-AR",
  publisher: { "@id": `${siteUrl}/#organization` },
  blogPost: posts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `${siteUrl}/blog/${post.category}/${post.slug}`,
    datePublished: post.date,
  })),
};

export default function BlogPage() {
  const recent = posts.slice(0, 6);

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
              Blog
            </p>
            <h1 className="mt-3 max-w-2xl text-3xl font-black uppercase leading-[1.05] tracking-tighter sm:text-4xl lg:text-5xl">
              Guías para la <span className="text-brand-secondary">web de tu negocio</span>
            </h1>
            <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-zinc-400">
              Consejos, precios y pasos concretos para crear la página web de tu
              rubro. Elegí tu categoría y empezá por donde más te sirva.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="relative z-10 pb-14">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <h2 className="text-xl font-black uppercase tracking-tighter text-white sm:text-2xl">
            Categorías
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/${category.slug}`}
                className="group flex flex-col rounded-lg border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <h3 className="text-2xl font-black uppercase tracking-tighter text-white">
                  {category.name}
                </h3>
                <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-zinc-400">
                  {category.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary transition-colors group-hover:text-white">
                  Ver artículos
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ÚLTIMOS ARTÍCULOS */}
      <section className="relative z-10 pb-28 lg:pb-36">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <h2 className="text-xl font-black uppercase tracking-tighter text-white sm:text-2xl">
            Últimos artículos
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recent.map((post) => (
              <article
                key={`${post.category}-${post.slug}`}
                className="group flex flex-col rounded-lg border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                  {post.readingTime} de lectura
                </span>
                <h3 className="mt-3 text-xl font-black leading-snug tracking-tight text-white">
                  <Link
                    href={`/blog/${post.category}/${post.slug}`}
                    className="transition-colors hover:text-brand-secondary"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-zinc-400">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.category}/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary transition-colors hover:text-white"
                >
                  Leer artículo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>

          <div className="relative mt-20 overflow-hidden rounded-lg border border-white/10 bg-[#051939] p-8 shadow-2xl sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,165,0,0.12),transparent_65%)]" />
            <p className="relative z-10 max-w-xl text-2xl font-black uppercase leading-tight tracking-tighter text-white sm:text-3xl">
              ¿Querés tu propio sitio?
            </p>
            <Link
              href="/servicios"
              className="group relative z-10 mt-6 inline-flex shrink-0 items-center gap-3 rounded bg-blue-600 px-7 py-4 text-sm font-bold uppercase tracking-tight text-white transition-all duration-300 hover:bg-white hover:text-blue-600 active:scale-95 sm:mt-0"
            >
              Ver servicios
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
