import type { Metadata } from "next";
import { gimnasiosConfig } from "@/content/service-pages/gimnasios";
import { buildServiceMetadata, buildServiceStructuredData } from "@/content/service-pages/helpers";
import { ServiceLanding } from "@/components/sections/servicio/service-landing";

export const metadata: Metadata = buildServiceMetadata(gimnasiosConfig);

export default function GimnasiosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildServiceStructuredData(gimnasiosConfig)),
        }}
      />
      <ServiceLanding config={gimnasiosConfig} />
    </>
  );
}
