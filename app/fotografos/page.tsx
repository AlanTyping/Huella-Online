import type { Metadata } from "next";
import { FotografosHero } from "@/components/sections/fotografos/hero";
import { FotografosProblem } from "@/components/sections/fotografos/problem";
import { FotografosShowcase } from "@/components/sections/fotografos/showcase";
import { FotografosTour } from "@/components/sections/fotografos/tour";
import { FotografosPricing } from "@/components/sections/fotografos/pricing";
import { FotografosStickyCta } from "@/components/sections/fotografos/sticky-cta";
import { FotografosFaq } from "@/components/sections/fotografos/faq";
import { FotografosCta } from "@/components/sections/fotografos/cta";
import { FotografosMarquee } from "@/components/sections/fotografos/marquee";

const siteUrl = "https://huellaonline.com";
const pageTitle = "Páginas web para fotógrafos | Huella Online";
const pageDescription =
  "Diseñamos webs para fotógrafos: galerías inmersivas, carga ultrarrápida y una imagen profesional que convierte visitas en clientes. Desde $225.000.";

const ogImage = {
  url: "/images/lumosfotografia.webp",
  width: 1917,
  height: 1078,
  alt: "Sitio web para fotógrafos de Lumos Fotografía creado por Huella Online",
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "páginas web para fotógrafos",
    "diseño web para fotógrafos",
    "sitio web para fotógrafos",
    "portfolio web para fotógrafos",
    "web para fotógrafos Argentina",
    "página web estudio de fotografía",
  ],
  alternates: {
    canonical: "/fotografos",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/fotografos",
    siteName: "Huella Online",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

const faqs = [
  {
    question: "¿Cuánto cuesta mi sitio?",
    answer:
      "Los proyectos arrancan desde $225.000 y llegan hasta $500.000 según el alcance: cantidad de galerías, secciones e integraciones. En la primera reunión te armamos un presupuesto claro y sin sorpresas, y podés pagarlo en dos partes: 50% para empezar y 50% al publicar.",
  },
  {
    question: "¿Por qué necesito una web si ya tengo Instagram?",
    answer:
      "Instagram es ideal para el día a día, pero no te da un espacio propio ni control sobre tu trabajo. Una web te da autoridad, te posiciona en Google y te permite mostrar tus mejores fotos en máxima calidad, sin depender de un algoritmo.",
  },
  {
    question: "¿Se van a ver mis fotos con buena calidad?",
    answer:
      "Sí. Optimizamos cada imagen para que se vea nítida y profesional sin sacrificar la velocidad del sitio. Usamos formatos modernos y carga progresiva para que la experiencia sea fluida incluso desde el celular.",
  },
  {
    question: "¿Pueden proteger mis fotos de la copia?",
    answer:
      "Aplicamos marca de agua, bloqueamos la descarga directa cuando lo necesitás y te asesoramos sobre derechos de autor. La prioridad es que tu trabajo quede protegido.",
  },
  {
    question: "¿Puedo actualizar el sitio yo mismo?",
    answer:
      "Sí. Te entregamos el proyecto con una guía clara y una capacitación 1:1 para que puedas sumar fotos y actualizar tus galerías sin depender de nadie.",
  },
  {
    question: "¿Cuánto tiempo tarda mi sitio?",
    answer:
      "Entre 2 y 4 semanas, según la cantidad de galerías y secciones que necesites. Trabajamos con un calendario claro desde la primera reunión.",
  },
  {
    question: "¿Trabajan con fotógrafos de todo el país?",
    answer:
      "Sí. Trabajamos de forma remota con fotógrafos de toda Argentina. Las reuniones son por Meet o WhatsApp y te acompañamos en cada etapa del proyecto.",
  },
  {
    question: "¿De quién es el dominio y el hosting?",
    answer:
      "El dominio es 100% tuyo y te acompañamos para registrarlo a tu nombre. Publicamos el sitio en Vercel, cuyo plan gratuito alcanza de sobra para la mayoría de los portfolios; solo si tu web supera ese límite evaluaríamos un plan pago.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/fotografos/#webpage`,
      url: `${siteUrl}/fotografos`,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "es-AR",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/fotografos/#service` },
      mainEntity: { "@id": `${siteUrl}/fotografos/#service` },
      breadcrumb: { "@id": `${siteUrl}/fotografos/#breadcrumb` },
      dateModified: new Date().toISOString(),
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/fotografos/#service`,
      name: "Desarrollo web para fotógrafos",
      serviceType: "Diseño y desarrollo de sitios web para fotógrafos",
      url: `${siteUrl}/fotografos`,
      description: pageDescription,
      image: `${siteUrl}${ogImage.url}`,
      category: "Diseño y desarrollo web",
      areaServed: {
        "@type": "Country",
        name: "Argentina",
      },
      provider: { "@id": `${siteUrl}/#organization` },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "ARS",
        lowPrice: "225000",
        highPrice: "500000",
        offerCount: "3",
        offers: [
          {
            "@type": "Offer",
            name: "Portfolio Esencial",
            price: "225000",
            priceCurrency: "ARS",
          },
          {
            "@type": "Offer",
            name: "Estudio",
            price: "300000",
            priceCurrency: "ARS",
          },
          {
            "@type": "Offer",
            name: "Marca Completa",
            price: "500000",
            priceCurrency: "ARS",
          },
        ],
      },
    },
    {
      "@type": "Review",
      "@id": `${siteUrl}/fotografos/#review`,
      itemReviewed: { "@id": `${siteUrl}/fotografos/#service` },
      author: {
        "@type": "Person",
        name: "Cristian",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Fue tremenda experiencia. Alan es una persona que está para ayudarte y explicarte con toda la paciencia del mundo. Finalmente te ayuda a lograr eso que tanto pensaste que querías: tu propia página web. Súper recomendable Huella Online.",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/fotografos/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/fotografos/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Páginas web para fotógrafos",
          item: `${siteUrl}/fotografos`,
        },
      ],
    },
  ],
};

export default function FotografosPage() {
  return (
    <div className="flex flex-col pb-20 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <FotografosHero />
      <FotografosProblem />
      <FotografosTour />
      <FotografosPricing />
      <FotografosFaq faqs={faqs} />
      <FotografosShowcase />
      <FotografosCta />
      <FotografosMarquee />

      <FotografosStickyCta />
    </div>
  );
}
