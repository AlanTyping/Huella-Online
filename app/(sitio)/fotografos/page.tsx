import type { Metadata } from "next";
import { FotografosHero } from "@/components/sections/fotografos/hero";
import { FotografosProblem } from "@/components/sections/fotografos/problem";
import { FotografosSeoContent } from "@/components/sections/fotografos/seo-content";
import { FotografosShowcase } from "@/components/sections/fotografos/showcase";
import { FotografosTour } from "@/components/sections/fotografos/tour";
import { FotografosPricing } from "@/components/sections/fotografos/pricing";
import { FotografosProcess } from "@/components/sections/fotografos/process";
import { FotografosTestimonials } from "@/components/sections/fotografos/testimonials";
import { FotografosStickyCta } from "@/components/sections/fotografos/sticky-cta";
import { FotografosFaq } from "@/components/sections/fotografos/faq";
import { FotografosCta } from "@/components/sections/fotografos/cta";
import { LEDMarquee } from "@/components/ui/led-marquee";

const siteUrl = "https://huellaonline.com";
const pageTitle =
  "Páginas web para fotógrafos en Argentina | Huella Online";
const pageDescription =
  "Creamos páginas web y portfolios para fotógrafos: galerías inmersivas, carga ultrarrápida y diseño que convierte visitas en clientes. Desde $199.999, en 4 a 8 semanas.";

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
    "web para fotógrafos",
    "diseño web para fotógrafos",
    "sitio web para fotógrafos",
    "portfolio web para fotógrafos",
    "página web para fotógrafo profesional",
    "web para fotógrafos Argentina",
    "web para fotógrafos Buenos Aires",
    "página web estudio de fotografía",
    "web para fotógrafos de bodas",
    "cuánto cuesta una página web para fotógrafos",
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
    question: "¿Puedo actualizar el sitio yo mismo?",
    answer:
      "Las fotos se almacenan dentro del proyecto mismo, por lo que sumar o cambiar imágenes forma parte del mantenimiento. Nos enviás el material y nosotros lo publicamos, optimizamos y dejamos todo en su lugar, así tu web se mantiene prolija y funcionando sin que tengas que tocar nada técnico.",
  },
  {
    question: "¿El mantenimiento tiene un costo?",
    answer:
      "Las actualizaciones de galerías y el mantenimiento se acuerdan como un servicio aparte, con un plan a tu medida según la frecuencia con la que renovás tu contenido. Lo definimos juntos en la primera reunión para que sepas exactamente qué incluye y cuánto sale.",
  },
  {
    question: "¿Qué pasa si no me gusta el diseño?",
    answer:
      "Trabajamos por etapas y con instancias de revisión: te mostramos avances y ajustamos hasta que el resultado refleje lo que buscás. La idea es que llegues al lanzamiento conforme, no que te enteres recién al final.",
  },
  {
    question: "¿Quién escribe los textos y aporta las fotos?",
    answer:
      "Vos aportás las fotos y la información de tus servicios; nosotros te guiamos con la estructura y los textos para que el mensaje sea claro y atractivo. Si necesitás una mano extra con el contenido, también podemos ayudarte a redactarlo.",
  },
  {
    question: "¿Cuánto tiempo tarda mi sitio?",
    answer:
      "Entre 4 y 8 semanas, según las características del sitio y la comunicación con el cliente. Trabajamos con un calendario claro desde la primera reunión.",
  },
  {
    question: "¿Trabajan con fotógrafos de todo el país?",
    answer:
      "Sí. Trabajamos de forma remota con fotógrafos de toda Argentina. Las reuniones son por Meet o WhatsApp y te acompañamos en cada etapa del proyecto.",
  },
  {
    question: "¿De quién es el dominio y el hosting?",
    answer:
      "El dominio y el hosting quedan 100% a tu nombre: te acompañamos para registrarlos y son tuyos. Publicamos el sitio en Vercel, cuyo plan gratuito alcanza de sobra para la mayoría de los portfolios; solo si tu web supera ese límite evaluaríamos otras opciones. El código fuente queda en manos del desarrollador, que es lo que nos permite darle mantenimiento al sitio a lo largo del tiempo.",
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
      datePublished: "2026-08-01",
      dateModified: "2026-10-11",
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
        lowPrice: "199999",
        highPrice: "500000",
        offerCount: "3",
        offers: [
          {
            "@type": "Offer",
            name: "Portfolio Esencial",
            price: "199999",
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
        "Fue tremenda experiencia. Al principio no voy a negar que desconfié, pero con el paso del tiempo comprendí que realmente estaba trabajando con un profesional. Alan está para ayudarte y explicarte con toda la paciencia del mundo hasta que lo entiendas. Finalmente te ayuda a lograr eso que tanto pensaste que querías: tu propia página web. Súper recomendable Huella Online.",
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
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <FotografosHero />
      <FotografosProblem />
      <FotografosSeoContent />
      <FotografosShowcase />
      <FotografosTour />
      <FotografosProcess />
      <FotografosPricing />
      <FotografosTestimonials />
      <FotografosFaq faqs={faqs} />
      <FotografosCta />
      <LEDMarquee tone="ink" />

      <FotografosStickyCta />
    </div>
  );
}
