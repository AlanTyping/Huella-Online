import type { Metadata } from "next";
import { maestrosConfig } from "@/content/service-pages/maestros";
import { buildServiceMetadata, buildServiceStructuredData } from "@/content/service-pages/helpers";
import { ServiceLanding } from "@/components/sections/servicio/service-landing";

export const metadata: Metadata = buildServiceMetadata(maestrosConfig);

export default function MaestrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildServiceStructuredData(maestrosConfig)),
        }}
      />
      <ServiceLanding config={maestrosConfig} />
    </>
  );
}
