import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const siteUrl = "https://huellaonline.com";
const siteName = "Huella Online";
const siteTitle =
  "Huella Online | Páginas web modernas | Argentina Buenos Aires";
const siteDescription =
  "Páginas web modernas para negocios de Argentina. Trabajamos desde Merlo con diseño claro, carga rápida y presencia digital que transmite confianza.";
const businessPhone = "+541138235395";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "diseño web Buenos Aires",
    "desarrollo web Buenos Aires",
    "diseño web Merlo",
    "desarrollo web Merlo Buenos Aires",
    "páginas web Buenos Aires",
    "páginas web Merlo",
    "agencia web Zona Oeste",
    "identidad digital para negocios",
    "Next.js Buenos Aires",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      inLanguage: "es-AR",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
      image: `${siteUrl}/icon.svg`,
      description: siteDescription,
      telephone: businessPhone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Merlo",
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: businessPhone,
          contactType: "customer service",
          areaServed: "AR",
          availableLanguage: ["es"],
        },
      ],
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Buenos Aires",
        },
        {
          "@type": "City",
          name: "Merlo",
        },
        {
          "@type": "Place",
          name: "Zona Oeste",
        },
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Diseño y desarrollo web",
            serviceType: "Diseño web y desarrollo web con Next.js",
            areaServed: "Buenos Aires",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Identidad digital para negocios",
            serviceType: "Presencia digital, estrategia web y sistemas de conversión",
            areaServed: "Buenos Aires",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Páginas web para fotógrafos",
            serviceType: "Diseño y desarrollo de páginas web para fotógrafos",
            areaServed: "Argentina",
          },
        },
      ],
    },
  ],
};

export default function SitioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-brand-primary-deep text-white selection:bg-white selection:text-brand-navy-deep">
      <GoogleTagManager gtmId="GTM-5788G68V" />
      <GoogleAnalytics gaId="G-EG0S0WM1MY" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar />

      <main className="flex-1 font-[var(--font-sans)]">{children}</main>

      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
