import type { ServicePageConfig } from "./types";
import { maestrosConfig } from "./maestros";
import { gimnasiosConfig } from "./gimnasios";
import { arquitecturaConfig } from "./arquitectura";

export const servicePages: ServicePageConfig[] = [
  maestrosConfig,
  gimnasiosConfig,
  arquitecturaConfig,
];

export function getServicePage(slug: string): ServicePageConfig | undefined {
  return servicePages.find((config) => config.slug === slug);
}

export { buildServiceMetadata, buildServiceStructuredData } from "./helpers";
export type { ServicePageConfig } from "./types";
