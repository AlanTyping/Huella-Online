export interface Comparison {
  pain: string;
  gain: string;
}

export interface Feature {
  title: string;
  description: string;
  /** Clave de ícono de lucide (ver `components/sections/servicio/icons.tsx`). */
  icon?: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface TourStep {
  title: string;
  description: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  /** Ancla interna opcional (por ejemplo `#precios`). */
  href?: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  /** Foto del cliente. Si falta, se muestran las iniciales. */
  avatar?: string;
  /** Sitio del cliente para el enlace externo. */
  siteUrl?: string;
}

export interface Plan {
  name: string;
  emoji: string;
  price: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface ServicePageConfig {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Mensaje precargado del botón de WhatsApp. */
  whatsapp: string;

  hero: {
    image: string;
    imageAlt: string;
    /** object-position para el recorte de la imagen. */
    imagePosition?: string;
    /** Dimensiones naturales de la captura (para el marco sin recorte). */
    imageWidth?: number;
    imageHeight?: number;
    title: string;
    highlight: string;
    subtitle: string;
  };

  problem: {
    title: string;
    intro: string;
    comparisons: Comparison[];
  };

  included: {
    title: string;
    intro: string;
    items: Feature[];
  };

  /** Bloque de contenido SEO ("¿Qué incluye…?"). Opcional. */
  seoContent?: {
    title: string;
    intro: string;
    items: Feature[];
    outro?: string;
  };

  showcase: {
    eyebrow: string;
    title: string;
    intro: string;
    image: string;
    imageAlt: string;
    highlights: string[];
    link?: { href: string; label: string };
    review?: { text: string; author: string; role: string };
  };

  /** Recorrido sección por sección con capturas reales del proyecto. Opcional. */
  tour?: {
    title: string;
    intro: string;
    link?: { href: string; label: string };
    steps: TourStep[];
  };

  process: {
    title: string;
    intro: string;
    steps: Step[];
  };

  /** Testimonios de clientes. Opcional. */
  testimonials?: {
    title: string;
    highlight?: string;
    intro: string;
    items: Testimonial[];
  };

  pricing: {
    title: string;
    intro: string;
    plans: Plan[];
    included: { emoji: string; text: string }[];
    note: string;
  };

  faqs: Faq[];

  cta: {
    title: string;
    subtitle: string;
  };
}
