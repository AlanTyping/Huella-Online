import type { ServicePageConfig } from "./types";
import { includedItems, pricingNote } from "./shared";

export const arquitecturaConfig: ServicePageConfig = {
  slug: "arquitectura",
  name: "Arquitectura",
  metaTitle: "Páginas web para estudios de arquitectura | Huella Online",
  metaDescription:
    "Diseñamos páginas web para estudios de arquitectura y diseño: portfolios de obra con estética minimalista, atención al detalle y una presentación a la altura de tu trabajo.",
  keywords: [
    "páginas web para arquitectos",
    "web para estudio de arquitectura",
    "portfolio de arquitectura",
    "sitio web arquitectura",
    "web para estudios de diseño",
  ],
  whatsapp:
    "Hola Huella Online! Tengo un estudio de arquitectura/diseño y quiero una web para mostrar mis proyectos.\n\nMe gustaría coordinar la charla gratuita de 15 minutos.\n\n—— SOBRE NOSOTROS ——\nNombre del estudio:\nTipo de proyectos:\nInstagram / Redes:\nPlan de interés:",
  hero: {
    image: "/images/norma.webp",
    imageAlt: "Sitio web para estudios de arquitectura de NØRMA",
    imagePosition: "object-top",
    imageWidth: 1917,
    imageHeight: 1078,
    title: "Páginas web para",
    highlight: "arquitectura y diseño",
    subtitle:
      "Tus proyectos mostrados con criterio. Un portfolio minimalista que refleja proporción, luz y la atención al detalle de tu estudio.",
  },
  problem: {
    title: "Una web propia está a la altura de tu obra.",
    intro:
      "Tu trabajo se juzga por el detalle. Tu presencia digital también debería: un sitio cuidado transmite el mismo rigor que tus planos.",
    comparisons: [
      {
        pain: "Tus proyectos viven en un feed desordenado",
        gain: "Tenés un portfolio propio y curado",
      },
      {
        pain: "Las fotos pierden fuerza en redes",
        gain: "Tus obras se lucen en máxima calidad",
      },
      {
        pain: "Un perfil no transmite rigor",
        gain: "Tu estudio se percibe profesional y serio",
      },
      {
        pain: "Competís con estudios con mejor imagen",
        gain: "Te diferenciás por criterio y detalle",
      },
      {
        pain: "Perdés consultas fuera de horario",
        gain: "Recibís pedidos 24/7",
      },
    ],
  },
  included: {
    title: "Todo para mostrar tu obra.",
    intro:
      "Una web pensada para estudios de arquitectura y diseño que quieren presentar su trabajo con la misma exigencia que lo proyectan.",
    items: [
      {
        title: "Portfolio de obra",
        icon: "palette",
        description:
          "Tus proyectos organizados por categoría —vivienda, comercial, interiorismo— con imágenes de alta calidad.",
      },
      {
        title: "Estética minimalista",
        icon: "target",
        description:
          "Un diseño sobrio y cuidado donde el protagonista es tu trabajo, no el ruido visual.",
      },
      {
        title: "Fichas de proyecto",
        icon: "book",
        description:
          "Cada obra con su descripción, ubicación, año y detalles que muestran tu proceso y tu criterio.",
      },
      {
        title: "Contacto para consultas",
        icon: "message",
        description:
          "Formulario y WhatsApp para que nuevos clientes te escriban por proyectos o colaboraciones.",
      },
      {
        title: "Optimizada para Google",
        icon: "search",
        description:
          "Estructura y textos para que te encuentren quienes buscan un estudio en tu zona.",
      },
      {
        title: "Mantenimiento y actualización",
        icon: "shield",
        description:
          "Sumás obras nuevas cuando quieras: nos enviás el material y lo publicamos con la misma estética.",
      },
    ],
  },
  seoContent: {
    title: "¿Qué incluye una página web para estudios de arquitectura?",
    intro:
      "Una web para un estudio de arquitectura no es solo un catálogo de obras: es la forma en que tu criterio se presenta antes de la primera reunión. Esto es lo que diseñamos para estudios y arquitectos que quieren mostrar su trabajo a la altura que merece.",
    items: [
      {
        title: "Posicionamiento local",
        description:
          "Estructura, textos y datos estructurados para aparecer cuando alguien busca un estudio de arquitectura en tu zona.",
      },
      {
        title: "Estética a la altura de tu obra",
        description:
          "Un diseño sobrio y cuidado que refleja el rigor de tu trabajo. Nada de plantillas genéricas.",
      },
      {
        title: "Rendimiento con imágenes pesadas",
        description:
          "Optimizamos cada plano y fotografía para que el portfolio cargue rápido sin perder nitidez.",
      },
      {
        title: "Fichas y contenido",
        description:
          "Te ayudamos a estructurar la información de cada obra: descripción, ubicación, año y detalles del proceso.",
      },
      {
        title: "Analítica y seguimiento",
        description:
          "Medimos visitas y consultas para que sepas cuántos proyectos potenciales genera tu web.",
      },
      {
        title: "Soporte y mantenimiento",
        description:
          "Sumamos obras nuevas cuando lo necesites, respetando siempre la estética del sitio.",
      },
    ],
  },
  showcase: {
    eyebrow: "Proyecto · NØRMA",
    title: "Un portfolio que respira proporción y luz.",
    intro:
      "NØRMA es un proyecto de muestra: un sitio elegante y minimalista para un estudio de arquitectura contemporánea, diseñado con atención obsesiva al detalle.",
    image: "/images/norma.webp",
    imageAlt: "Sitio web de arquitectura contemporánea de NØRMA creado por Huella Online",
    highlights: [
      "Estética minimalista y elegante",
      "Proyectos presentados con criterio",
      "Atención al detalle y proporción",
      "Adaptado a celulares",
    ],
    link: { href: "https://norma-mocha.vercel.app/", label: "Ver el proyecto" },
  },
  process: {
    title: "Así trabajamos.",
    intro: "Un proceso simple y acompañado, de la primera charla a tu sitio online.",
    steps: [
      {
        title: "Charlamos",
        description:
          "Una reunión de 15 minutos para entender tu estudio, tus proyectos y el tono de tu marca.",
      },
      {
        title: "Diseñamos",
        description:
          "Armamos la estructura y la propuesta visual, con foco en que tu obra sea la protagonista.",
      },
      {
        title: "Construimos",
        description:
          "Desarrollamos el sitio, optimizamos las imágenes y dejamos todo listo para cargar rápido.",
      },
      {
        title: "Publicamos",
        description:
          "Conectamos tu dominio, publicamos y te explicamos cómo sumamos obras nuevas.",
      },
    ],
  },
  testimonials: {
    title: "El próximo portfolio puede ser",
    highlight: "el de tu estudio.",
    intro:
      "NØRMA es un proyecto de muestra de lo que podemos hacer. Estamos sumando los primeros estudios de arquitectura con sitio propio.",
    items: [],
  },
  pricing: {
    title: "Planes para tu estudio.",
    intro:
      "Elegí el punto de partida y lo ajustamos juntos a lo que necesitás. Todos los planes incluyen hosting configurado y soporte.",
    plans: [
      {
        name: "Portfolio",
        emoji: "🚀",
        price: "225.000",
        tagline:
          "Para arquitectos que quieren un portfolio profesional para mostrar sus proyectos y recibir consultas.",
        features: [
          "Diseño a medida con tu identidad",
          "Portfolio de obra con estética minimalista",
          "Contacto directo por WhatsApp y formulario",
          "Adaptado a celulares, tablets y computadoras",
          "Imágenes optimizadas para cargar rápido",
        ],
      },
      {
        name: "Estudio",
        emoji: "✨",
        price: "300.000",
        tagline:
          "Para estudios con varias obras que necesitan organizar su trabajo y presentar su criterio.",
        highlighted: true,
        features: [
          "Todo lo del plan Portfolio",
          "Proyectos organizados por categoría",
          "Fichas de proyecto con descripción y detalles",
          "Animaciones y transiciones personalizadas",
          "Google Analytics",
          "Optimización para aparecer en Google",
        ],
      },
      {
        name: "Marca Completa",
        emoji: "👑",
        price: "500.000",
        tagline:
          "Para estudios que necesitan una solución web completa y personalizada.",
        features: [
          "Todo lo del plan Estudio",
          "Más páginas y contenido",
          "Secciones según las necesidades del proyecto",
          "Reservas o pagos integrados",
          "Funcionalidades personalizadas",
        ],
      },
    ],
    included: includedItems,
    note: pricingNote,
  },
  faqs: [
    {
      question: "¿Puedo organizar los proyectos por categoría?",
      answer:
        "Sí. Agrupamos tus obras por tipo —vivienda, comercial, interiorismo— para que cada visitante encuentre lo que le interesa.",
    },
    {
      question: "¿Cómo se ven las fotos de mis proyectos?",
      answer:
        "En máxima calidad y con una presentación cuidada. Optimizamos cada imagen para que se vea nítida sin sacrificar la velocidad del sitio.",
    },
    {
      question: "¿Quién es dueño del dominio y el hosting?",
      answer:
        "El dominio y el hosting quedan 100% a tu nombre. El código queda del lado del desarrollador, que es lo que nos permite darte mantenimiento.",
    },
    {
      question: "¿Cuánto tiempo tarda mi sitio?",
      answer:
        "Entre 4 y 8 semanas, según las características del sitio y la comunicación. Trabajamos con un calendario claro desde la primera reunión.",
    },
    {
      question: "¿Trabajan con estudios de todo el país?",
      answer:
        "Sí. Trabajamos de forma remota con estudios de toda Argentina. Las reuniones son por Meet o WhatsApp y te acompañamos en cada etapa.",
    },
  ],
  cta: {
    title: "Empecemos por una charla de 15 minutos.",
    subtitle:
      "Contanos sobre tu estudio y te mostramos cómo podría verse tu portfolio. Sin compromiso, por Meet o WhatsApp.",
  },
};
