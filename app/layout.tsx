import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = "https://huellaonline.com";
const siteName = "Huella Online";
const siteTitle =
  "Huella Online | Páginas web modernas en Buenos Aires desde Merlo";
const siteDescription =
  "Páginas web modernas para negocios de Buenos Aires. Trabajamos desde Merlo con diseño claro, carga rápida y presencia digital que transmite confianza.";
const businessPhone = "+541138235395";

const localSeoMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
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
      ],
    },
  ],
};

export const metadata: Metadata = localSeoMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <GoogleTagManager gtmId="GTM-5788G68V" />
      <body
        className="
          min-h-full 
          flex flex-col 
          bg-brand-primary-deep 
          text-white 
          antialiased 
          selection:bg-white 
          selection:text-brand-navy-deep
        "
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <Navbar />

        <main className="flex-1 font-[var(--font-sans)]">
          {children}
        </main>

        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
