export interface ServiceEntry {
  /** Slug corto de la vertical (coincide con la carpeta de blog cuando existe). */
  slug: string;
  /** Nombre corto para listados y navegación. */
  name: string;
  /** Emoji representativo para el listado. */
  emoji: string;
  /** Ruta de la página de servicio. Si falta, se muestra como "Próximamente". */
  href?: string;
  /** Imagen de un proyecto relacionado (preview). */
  image: string;
  imageAlt: string;
  /** Frase corta (opcional) para destacar en el listado. */
  tagline?: string;
  /** Descripción para el hub de servicios. */
  description: string;
  /** Slug de la categoría de blog asociada (opcional). */
  blogCategory?: string;
}

/**
 * Fuente única de verdad de las verticales de servicio.
 *
 * Para sumar un rubro nuevo (odontólogos, abogados…):
 * 1. Creá su página de servicio (por ejemplo `app/odontologos/page.tsx`).
 * 2. Agregá una entrada acá (con su `href`, `emoji` e imagen).
 * 3. Opcional: creá la categoría de blog en `content/blog/categories.ts`.
 *
 * El nav, el footer y el hub `/servicios` se actualizan solos.
 */
export const services: ServiceEntry[] = [
  {
    slug: "fotografos",
    name: "Fotógrafos",
    emoji: "📸",
    href: "/fotografos",
    image: "/images/lumos/coberturas-xv.webp",
    imageAlt: "Categoría XV Años del sitio de Lumos Fotografía",
    tagline: "Portfolios que se sienten como una galería.",
    description:
      "Webs para fotógrafos y estudios: galerías inmersivas, carga ultrarrápida y una presencia profesional que convierte visitas en clientes.",
    blogCategory: "fotografos",
  },
  {
    slug: "maestros",
    name: "Maestros",
    emoji: "📚",
    href: "/maestros",
    image: "/images/sitiovicky.webp",
    imageAlt: "Sitio web para docentes y educación de Vicky Aphalo",
    tagline: "Tu propuesta educativa, clara y cercana.",
    description:
      "Webs para docentes, maestros y proyectos educativos: presentá tus cursos, recursos y propuesta pedagógica con una imagen profesional.",
    blogCategory: "maestros",
  },
  {
    slug: "gimnasios",
    name: "Gimnasios",
    emoji: "💪",
    href: "/gimnasios",
    image: "/images/olympo.webp",
    imageAlt: "Sitio web para gimnasios y fitness de Olympo",
    tagline: "Energía y planes que llenan clases.",
    description:
      "Webs para gimnasios, entrenadores y centros de fitness: mostrá tus disciplinas, horarios y planes, y sumá alumnos con una presencia que transmite energía.",
    blogCategory: "gimnasios",
  },
  {
    slug: "arquitectura",
    name: "Arquitectura",
    emoji: "🏛️",
    href: "/arquitectura",
    image: "/images/norma.webp",
    imageAlt: "Sitio web para estudios de arquitectura de NØRMA",
    tagline: "Proyectos que se muestran con criterio.",
    description:
      "Webs para estudios de arquitectura y diseño: portfolios de obra con estética minimalista, atención al detalle y una presentación a la altura de tu trabajo.",
    blogCategory: "arquitectura",
  },
];

export function getService(slug: string): ServiceEntry | undefined {
  return services.find((service) => service.slug === slug);
}
