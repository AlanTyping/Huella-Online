import type { BlogCategory } from "./types";

/**
 * Cada vertical del blog vive en su propia carpeta de contenido y en su propia
 * URL (`/blog/<slug>`). Para sumar una categoría nueva (profesores, arquitectura,
 * odontólogos, etc.): agregá una entrada acá y creá la carpeta de contenido
 * correspondiente en `content/blog/<slug>/`.
 */
export const categories: BlogCategory[] = [
  {
    slug: "fotografos",
    name: "Fotógrafos",
    title: "Blog para fotógrafos",
    description:
      "Guías y consejos sobre páginas web para fotógrafos: cómo crear tu portfolio, cuánto cuesta una web y qué debe tener tu sitio para atraer clientes.",
    intro:
      "Todo lo que un fotógrafo necesita saber para tener una web propia que muestre su trabajo en máxima calidad y convierta visitas en clientes.",
    serviceHref: "/fotografos",
    serviceLabel: "Ver páginas web para fotógrafos",
  },
  {
    slug: "maestros",
    name: "Maestros",
    title: "Blog para maestros",
    description:
      "Guías y consejos sobre páginas web para maestros y docentes: cómo mostrar tus cursos, cuánto cuesta y qué debe tener tu sitio.",
    intro:
      "Todo lo que un docente necesita saber para tener una web propia que presente su propuesta educativa con claridad y atraiga alumnos.",
    serviceHref: "/maestros",
    serviceLabel: "Ver páginas web para maestros",
  },
  {
    slug: "gimnasios",
    name: "Gimnasios",
    title: "Blog para gimnasios",
    description:
      "Guías y consejos sobre páginas web para gimnasios, entrenadores y centros de fitness: cómo mostrar disciplinas, horarios y planes para sumar alumnos.",
    intro:
      "Todo lo que un gimnasio o entrenador necesita para tener una web que transmita energía y convierta seguidores en alumnos.",
    serviceHref: "/gimnasios",
    serviceLabel: "Ver páginas web para gimnasios",
  },
  {
    slug: "arquitectura",
    name: "Arquitectura",
    title: "Blog para arquitectos",
    description:
      "Guías y consejos sobre páginas web para estudios de arquitectura y diseño: cómo presentar tu portfolio de obra con criterio y captar mejores proyectos.",
    intro:
      "Todo lo que un estudio de arquitectura necesita para mostrar su obra con la misma exigencia con la que la proyecta.",
    serviceHref: "/arquitectura",
    serviceLabel: "Ver páginas web para arquitectos",
  },
];

export function getCategory(slug: string): BlogCategory | undefined {
  return categories.find((category) => category.slug === slug);
}
