import type { Metadata } from "next";
import { FotografosHero } from "@/components/sections/fotografos/hero";
import { FotografosProblem } from "@/components/sections/fotografos/problem";
import { FotografosFeatures } from "@/components/sections/fotografos/features";
import { FotografosShowcase } from "@/components/sections/fotografos/showcase";
import { FotografosTour } from "@/components/sections/fotografos/tour";
import { FotografosPricing } from "@/components/sections/fotografos/pricing";
import { FotografosProcess } from "@/components/sections/fotografos/process";
import { FotografosStickyCta } from "@/components/sections/fotografos/sticky-cta";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/cta";
import { LEDMarquee } from "@/components/ui/led-marquee";

const siteUrl = "https://huellaonline.com";
const pageTitle = "Páginas web para fotógrafos | Huella Online";
const pageDescription =
  "Diseñamos sitios web para fotógrafos: galerías inmersivas, carga ultrarrápida y una imagen profesional que convierte visitas en clientes. Desde $300.000. Caso real: Lumos Fotografía.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/fotografos",
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
      "Los proyectos arrancan desde $300.000 y llegan hasta $600.000 según el alcance: cantidad de galerías, secciones e integraciones. En la primera reunión te armamos un presupuesto claro y sin sorpresas, y podés pagarlo en dos partes: 50% para empezar y 50% al publicar.",
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
      "@type": "Service",
      name: "Desarrollo web para fotógrafos",
      serviceType: "Diseño y desarrollo de sitios web para fotógrafos",
      url: `${siteUrl}/fotografos`,
      description: pageDescription,
      areaServed: "Argentina",
      provider: {
        "@type": "ProfessionalService",
        name: "Huella Online",
        url: siteUrl,
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "ARS",
        lowPrice: "300000",
        highPrice: "600000",
        offerCount: "3",
      },
      review: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Cristian",
        },
        itemReviewed: {
          "@type": "Service",
          name: "Sitio web para Lumos Fotografía",
        },
        reviewBody:
          "Fue tremenda experiencia. Alan es una persona que está para ayudarte y explicarte con toda la paciencia del mundo. Finalmente te ayuda a lograr eso que tanto pensaste que querías: tu propia página web. Súper recomendable Huella Online.",
      },
    },
    {
      "@type": "BreadcrumbList",
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
      <FotografosShowcase />
      <FotografosTour />
      <FotografosFeatures />
      <FotografosProcess />
      <FotografosPricing />
      <FAQ faqs={faqs} />
      <FinalCTA />
      <LEDMarquee />

      <FotografosStickyCta />
    </div>
  );
}
