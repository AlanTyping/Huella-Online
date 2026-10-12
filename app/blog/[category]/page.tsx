import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { categories, getCategory, getPostsByCategory } from "@/content/blog";
import { BlogBackground } from "@/components/blog/blog-background";

const siteUrl = "https://huellaonline.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  return {
    title: `${category.title} | Huella Online`,
    description: category.description,
    alternates: {
      canonical: `/blog/${category.slug}`,
    },
    openGraph: {
      title: category.title,
      description: category.description,
      url: `/blog/${category.slug}`,
      siteName: "Huella Online",
      locale: "es_AR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: category.title,
      description: category.description,
    },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const posts = getPostsByCategory(category.slug);
  const categoryUrl = `${siteUrl}/blog/${category.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${categoryUrl}/#collection`,
        url: categoryUrl,
        name: category.title,
        description: category.description,
        inLanguage: "es-AR",
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: posts.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${categoryUrl}/${post.slug}`,
            name: post.title,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${categoryUrl}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${siteUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: category.name,
            item: categoryUrl,
          },
        ],
      },
    ],
  };

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
          <nav aria-label="Ruta de navegación" className="text-sm font-medium text-zinc-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-white">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-zinc-300" aria-current="page">
                {category.name}
              </li>
            </ol>
          </nav>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-brand-secondary">
            {category.name}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-black uppercase leading-[1.05] tracking-tighter sm:text-4xl lg:text-5xl">
            {category.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-zinc-400">
            {category.intro}
          </p>

          {category.serviceHref && (
            <Link
              href={category.serviceHref}
              className="group mt-6 inline-flex items-center gap-3 rounded bg-blue-600 px-6 py-3.5 text-sm font-bold uppercase tracking-tight text-white transition-all duration-300 hover:bg-white hover:text-blue-600 active:scale-95"
            >
              {category.serviceLabel ?? "Ver el servicio"}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </section>

      {/* ARTÍCULOS */}
      <section className="relative z-10 pb-28 lg:pb-36">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col rounded-lg border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                    {post.readingTime} de lectura
                  </span>
                  <h2 className="mt-3 text-xl font-black leading-snug tracking-tight text-white">
                    <Link
                      href={`/blog/${post.category}/${post.slug}`}
                      className="transition-colors hover:text-brand-secondary"
                    >
                      {post.title}
                    </Link>
                  </h2>
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
          ) : (
            <p className="text-base font-medium leading-relaxed text-zinc-400">
              Todavía no hay artículos en esta categoría.
            </p>
          )}

          <div className="mt-16">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Volver al blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
