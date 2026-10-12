import type { ReactNode } from "react";

export interface BlogPostMeta {
  slug: string;
  /** Slug de la categoría (vertical). Debe existir en categories.ts. */
  category: string;
  title: string;
  description: string;
  excerpt: string;
  /** Fecha en formato ISO (YYYY-MM-DD). */
  date: string;
  readingTime: string;
  keywords: string[];
}

export interface BlogPost extends BlogPostMeta {
  Content: () => ReactNode;
}

export interface BlogCategory {
  slug: string;
  /** Nombre corto para listados y navegación. */
  name: string;
  /** H1 del hub de categoría. */
  title: string;
  /** Meta description del hub. */
  description: string;
  /** Bajada del hub. */
  intro: string;
  /** Página de servicio asociada (funnel interno). Opcional. */
  serviceHref?: string;
  serviceLabel?: string;
}
