import type { ServicePageConfig } from "./types";
import { includedItems, pricingNote } from "./shared";

export const maestrosConfig: ServicePageConfig = {
  slug: "maestros",
  name: "Maestros",
  metaTitle: "Páginas web para maestros y docentes | Huella Online",
  metaDescription:
    "Diseñamos páginas web para maestros y docentes: presentá tus cursos, recursos y propuesta educativa con una imagen profesional que atrae alumnos.",
  keywords: [
    "páginas web para maestros",
    "páginas web para docentes",
    "web para profesores",
    "sitio web educativo",
    "web para dar clases particulares",
  ],
  whatsapp:
    "Hola Huella Online! Soy docente y quiero una web para mi propuesta educativa.\n\nMe gustaría coordinar la charla gratuita de 15 minutos.\n\n—— SOBRE MÍ ——\nNombre:\nQué enseño:\nInstagram / Redes:\nPlan de interés:",
  hero: {
    image: "/images/sitiovicky.webp",
    imageAlt: "Sitio web para docentes y educación de Vicky Aphalo",
    imagePosition: "object-top",
    imageWidth: 1917,
    imageHeight: 1078,
    title: "Páginas web para",
    highlight: "maestros y docentes",
    subtitle:
      "Tu propuesta educativa, clara y cercana. Mostrá tus cursos, tus recursos y tu forma de enseñar con una presencia profesional que genera confianza desde el primer vistazo.",
  },
  problem: {
    title: "Una web propia cambia cómo te ven.",
    intro:
      "Las redes son tu vidriera del día a día. Tu sitio es tu aula: el lugar donde tu propuesta se explica con calma y trabaja para vos las 24 horas.",
    comparisons: [
      {
        pain: "Tu propuesta queda dispersa entre posts",
        gain: "Tenés un espacio propio que explica qué ofrecés",
      },
      {
        pain: "El algoritmo decide quién te ve",
        gain: "Vos decidís cómo presentar tus cursos",
      },
      {
        pain: "Las familias dudan de tu seriedad",
        gain: "Transmitís profesionalismo y confianza",
      },
      {
        pain: "Respondés las mismas preguntas siempre",
        gain: "Tu web responde las dudas por vos",
      },
      {
        pain: "Perdés consultas fuera de horario",
        gain: "Recibís pedidos 24/7",
      },
    ],
  },
  included: {
    title: "Todo para enseñar con presencia.",
    intro:
      "Una web pensada para docentes que quieren mostrar su propuesta con claridad y llegar a más alumnos.",
    items: [
      {
        title: "Presentación de tu propuesta",
        icon: "book",
        description:
          "Qué enseñás, a quién y cómo trabajás. Un espacio claro que genera confianza en familias y alumnos.",
      },
      {
        title: "Cursos y recursos organizados",
        icon: "target",
        description:
          "Tus clases, talleres y materiales ordenados por tema o nivel, fáciles de encontrar y entender.",
      },
      {
        title: "Carga rápida y adaptada al celular",
        icon: "gauge",
        description:
          "La mayoría de las familias te busca desde el teléfono. Tu sitio se ve impecable en cualquier pantalla.",
      },
      {
        title: "Contacto directo",
        icon: "message",
        description:
          "WhatsApp, formulario y redes en un solo lugar para que te consulten en un toque.",
      },
      {
        title: "Optimizada para Google",
        icon: "search",
        description:
          "Estructura y textos pensados para que te encuentren quienes buscan clases en tu zona y tu especialidad.",
      },
      {
        title: "Mantenimiento y actualización",
        icon: "shield",
        description:
          "Sumás cursos nuevos o cambiás contenido cuando quieras: nos enviás el material y lo publicamos.",
      },
    ],
  },
  seoContent: {
    title: "¿Qué incluye una página web para docentes?",
    intro:
      "Una web para docentes no es solo una tarjeta de presentación: es tu espacio propio para explicar tu propuesta, ordenar tus cursos y aparecer en Google sin depender del algoritmo. Esto es lo que diseñamos para cada maestro, profe o proyecto educativo.",
    items: [
      {
        title: "Posicionamiento en Google",
        description:
          "Estructura, textos y datos estructurados para que te encuentren quienes buscan clases en tu zona y tu especialidad.",
      },
      {
        title: "Diseño a medida",
        description:
          "Un sitio propio que refleja tu forma de enseñar. Nada de plantillas genéricas ni perfiles que se parecen entre sí.",
      },
      {
        title: "Rendimiento y accesibilidad",
        description:
          "Imágenes optimizadas y carga progresiva para que el sitio vuele y sea fácil de usar para cualquier familia.",
      },
      {
        title: "Contenido que acompaña",
        description:
          "Te guiamos con los textos y la estructura para que tu propuesta se entienda de un vistazo.",
      },
      {
        title: "Analítica y seguimiento",
        description:
          "Medimos cuántas visitas y consultas genera tu web para que sepas que está funcionando.",
      },
      {
        title: "Soporte y mantenimiento",
        description:
          "Actualizamos cursos y contenido cuando lo necesites, sin que toques nada técnico.",
      },
    ],
  },
  showcase: {
    eyebrow: "Proyecto · Vicky Aphalo",
    title: "Una propuesta educativa que se entiende de un vistazo.",
    intro:
      "Vicky Aphalo convirtió su propuesta educativa en una experiencia clara y cercana, donde cada visitante comprende rápido qué ofrece y cómo dar el primer paso.",
    image: "/images/sitiovicky.webp",
    imageAlt: "Sitio web educativo de Vicky Aphalo creado por Huella Online",
    highlights: [
      "Propuesta clara y cercana",
      "Cursos y recursos organizados",
      "Contacto directo con familias",
      "Adaptado a celulares",
    ],
    link: { href: "https://www.vickyaphalo.site/", label: "Ver el sitio en vivo" },
    review: {
      text: "La experiencia de trabajar con Huella Online fue muy buena. Valoro el diálogo y el acompañamiento durante todo el proceso. Las reuniones fueron muy dinámicas, con mucha escucha y predisposición para entender lo que necesitaba. Quedé muy conforme con el resultado :)",
      author: "Vicky Aphalo",
      role: "Educación & bienestar",
    },
  },
  tour: {
    title: "Tu página web para docentes, paso a paso.",
    intro:
      "Recorré las secciones que puede tener tu web, con ejemplos reales del sitio de Vicky Aphalo.",
    link: { href: "https://www.vickyaphalo.site/", label: "Ver el sitio en vivo" },
    steps: [
      {
        title: "Portada que presenta tu propuesta",
        description:
          "La primera impresión: un mensaje claro, tu enfoque y accesos directos a lo que ofrecés. Es el instante donde una familia decide si te conoce o se va.",
        image: "/images/sitiovicky.webp",
        alt: "Portada del sitio de Vicky Aphalo",
        width: 1917,
        height: 1078,
      },
      {
        title: "Quién está detrás",
        description:
          "Tu historia, tu mirada y tu experiencia. La sección que convierte una propuesta linda en alguien en quien se confía para acompañar a sus hijos.",
        image: "/images/sitiovicky2.webp",
        alt: "Sección quién está detrás del sitio de Vicky Aphalo",
        width: 1918,
        height: 1067,
      },
    ],
  },
  process: {
    title: "Así trabajamos.",
    intro: "Un proceso simple y acompañado, de la primera charla a tu sitio online.",
    steps: [
      {
        title: "Charlamos",
        description:
          "Una reunión de 15 minutos para entender qué enseñás, a quién y qué querés lograr con tu web.",
      },
      {
        title: "Diseñamos",
        description:
          "Armamos la estructura y la propuesta visual de tu sitio, pensada para que tu propuesta se entienda fácil.",
      },
      {
        title: "Construimos",
        description:
          "Desarrollamos el sitio, optimizamos cada imagen y dejamos todo listo para que cargue rápido.",
      },
      {
        title: "Publicamos",
        description:
          "Conectamos tu dominio, publicamos y te explicamos cómo mantenemos y actualizamos el contenido.",
      },
    ],
  },
  testimonials: {
    title: "Docentes que ya dieron",
    highlight: "el paso.",
    intro:
      "Proyectos educativos que hoy tienen su lugar propio en internet y reciben consultas sin depender del algoritmo.",
    items: [
      {
        text: "La experiencia de trabajar con Huella Online fue muy buena. Valoro el diálogo y el acompañamiento durante todo el proceso. Las reuniones fueron muy dinámicas, con mucha escucha y predisposición para entender lo que necesitaba. Quedé muy conforme con el resultado :)",
        author: "Vicky Aphalo",
        role: "Educación & bienestar",
        avatar: "/images/vicky-square.jpg",
        siteUrl: "https://www.vickyaphalo.site/",
      },
    ],
  },
  pricing: {
    title: "Planes para tu web educativa.",
    intro:
      "Elegí el punto de partida y lo ajustamos juntos a lo que necesitás. Todos los planes incluyen hosting configurado y soporte.",
    plans: [
      {
        name: "Esencial",
        emoji: "🚀",
        price: "225.000",
        tagline:
          "Para docentes que quieren una presencia profesional para mostrar su propuesta y recibir consultas.",
        features: [
          "Diseño a medida con tu identidad",
          "Presentación de tu propuesta y tus servicios",
          "Contacto directo por WhatsApp y formulario",
          "Adaptado a celulares, tablets y computadoras",
          "Imágenes optimizadas para cargar rápido",
        ],
      },
      {
        name: "Educativa",
        emoji: "✨",
        price: "300.000",
        tagline:
          "Para docentes con cursos, talleres o recursos que necesitan una web más completa.",
        highlighted: true,
        features: [
          "Todo lo del plan Esencial",
          "Cursos y recursos organizados por tema o nivel",
          "Secciones “Sobre mí” y “Propuesta”",
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
          "Para proyectos educativos que necesitan una solución web completa y personalizada.",
        features: [
          "Todo lo del plan Educativa",
          "Más páginas y contenido",
          "Ebook, guías o recursos descargables",
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
      question: "¿Necesito saber de tecnología para tener mi web?",
      answer:
        "No. Nosotros nos encargamos de todo lo técnico y te explicamos lo esencial en una charla. Vos solo te ocupás de tu contenido y tus clases.",
    },
    {
      question: "¿Puedo mostrar mis cursos y talleres?",
      answer:
        "Sí. Organizamos tus cursos, talleres y recursos por tema o nivel para que las familias encuentren rápido lo que buscan.",
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
      question: "¿Trabajan con docentes de todo el país?",
      answer:
        "Sí. Trabajamos de forma remota con docentes de toda Argentina. Las reuniones son por Meet o WhatsApp y te acompañamos en cada etapa.",
    },
  ],
  cta: {
    title: "Empecemos por una charla de 15 minutos.",
    subtitle:
      "Contanos qué enseñás y te mostramos cómo podría verse tu sitio. Sin compromiso, por Meet o WhatsApp.",
  },
};
