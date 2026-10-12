"use client";

import {
  BarChart3,
  BookOpen,
  CreditCard,
  Gauge,
  Handshake,
  MessageCircle,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Registro de íconos disponibles para las páginas de servicio.
 *
 * Los configs (`content/service-pages/*.ts`) referencian estos íconos por su
 * clave, así el contenido queda desacoplado de los componentes de React.
 */
export const serviceIcons: Record<string, LucideIcon> = {
  chart: BarChart3,
  book: BookOpen,
  card: CreditCard,
  gauge: Gauge,
  handshake: Handshake,
  message: MessageCircle,
  palette: Palette,
  rocket: Rocket,
  search: Search,
  shield: ShieldCheck,
  target: Target,
  zap: Zap,
};

export function ServiceIcon({
  name,
  className,
}: {
  name?: string;
  className?: string;
}) {
  const Icon = (name && serviceIcons[name]) || Target;
  return <Icon className={className} />;
}
