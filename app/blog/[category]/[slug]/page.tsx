import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { posts, getPost, getCategory } from "@/content/blog";
import { PostCta } from "@/components/blog/prose";
import { BlogBackground } from "@/components/blog/blog-background";

const siteUrl = "https://huellaonline.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const post = getPost(category, slug);
  if (!post) return {};

  return {
    title: `${post.title} | Huella Online`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.category}/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.category}/${post.slug}`,
      siteName: "Huella Online",
      locale: "es_AR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: categorySlug, slug } = await params;
  const post = getPost(categorySlug, slug);
  if (!post) notFound();

  const category = getCategory(post.category);
  const { Content } = post;
  const postUrl = `${siteUrl}/blog/${post.category}/${post.slug}`;
  const categoryUrl = `${siteUrl}/blog/${post.category}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${postUrl}/#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: "es-AR",
        keywords: post.keywords.join(", "),
        articleSection: category?.name,
        author: { "@id": `${siteUrl}/#organization` },
        publisher: { "@id": `${siteUrl}/#organization` },
        mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${postUrl}/#breadcrumb`,
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
            name: category?.name ?? "Artículos",
            item: categoryUrl,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: post.title,
            item: postUrl,
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

      <article className="relative z-10 pt-32 pb-28 lg:pt-40 lg:pb-36">
        <div className="mx-auto w-full max-w-3xl px-6 md:px-8">
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
              {category && (
                <>
                  <li>
                    <Link
                      href={`/blog/${category.slug}`}
                      className="transition-colors hover:text-white"
                    >
                      {category.name}
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                </>
              )}
              <li className="text-zinc-300" aria-current="page">
                Artículo
              </li>
            </ol>
          </nav>

          <header className="mt-8 border-b border-white/10 pb-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-secondary">
              {category?.title ?? "Blog"}
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-[1.05] tracking-tighter sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-sm font-medium text-zinc-500">
              {post.readingTime} de lectura
            </p>
          </header>

          <div className="mt-2 [&_strong]:font-bold [&_strong]:text-white">
            <Content />
          </div>

          <PostCta
            serviceHref={category?.serviceHref}
            serviceLabel={category?.serviceLabel}
          />

          <div className="mt-14 border-t border-white/10 pt-8">
            <Link
              href={category ? `/blog/${category.slug}` : "/blog"}
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {category ? `Más artículos para ${category.name}` : "Volver al blog"}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
