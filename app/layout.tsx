import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

// El root layout sólo define el cascarón HTML compartido por TODO el sitio
// (el marketing en `(sitio)` y el organizador en `(app)`). Los metadatos de
// negocio y las herramientas de analítica viven en `(sitio)/layout.tsx` para
// que `/organizacion` —que es privado— no quede indexado ni trackingueado.
export const metadata: Metadata = {
  metadataBase: new URL("https://huellaonline.com"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // Los scripts de arranque del organizador (tema y color de fondo) escriben
    // atributos en <html> antes de que React hidrate, así que el DOM no coincide
    // con el HTML del servidor. Es intencional: le decimos a React que no avise.
    <html
      lang="es-AR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col antialiased">{children}</body>
    </html>
  );
}
