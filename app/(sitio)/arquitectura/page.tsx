import type { Metadata } from "next";
import { arquitecturaConfig } from "@/content/service-pages/arquitectura";
import { buildServiceMetadata, buildServiceStructuredData } from "@/content/service-pages/helpers";
import { ServiceLanding } from "@/components/sections/servicio/service-landing";

export const metadata: Metadata = buildServiceMetadata(arquitecturaConfig);

export default function ArquitecturaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildServiceStructuredData(arquitecturaConfig)),
        }}
      />
      <ServiceLanding config={arquitecturaConfig} />
    </>
  );
}
