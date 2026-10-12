import type { Metadata } from "next";
import type { ServicePageConfig } from "./types";

const siteUrl = "https://huellaonline.com";

export function buildServiceMetadata(config: ServicePageConfig): Metadata {
  const url = `/${config.slug}`;
  return {
    title: config.metaTitle,
    description: config.metaDescription,
    keywords: config.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url,
      siteName: "Huella Online",
      locale: "es_AR",
      type: "website",
      images: [{ url: config.hero.image, alt: config.hero.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: config.metaTitle,
      description: config.metaDescription,
      images: [config.hero.image],
    },
  };
}

export function buildServiceStructuredData(config: ServicePageConfig) {
  const url = `${siteUrl}/${config.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}/#service`,
        name: config.metaTitle,
        serviceType: `Diseño y desarrollo de páginas web para ${config.name.toLowerCase()}`,
        url,
        description: config.metaDescription,
        image: `${siteUrl}${config.hero.image}`,
        category: "Diseño y desarrollo web",
        areaServed: { "@type": "Country", name: "Argentina" },
        provider: { "@id": `${siteUrl}/#organization` },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "ARS",
          lowPrice: "225000",
          highPrice: "500000",
          offerCount: "3",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: config.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Servicios",
            item: `${siteUrl}/servicios`,
          },
          { "@type": "ListItem", position: 3, name: config.name, item: url },
        ],
      },
    ],
  };
}
