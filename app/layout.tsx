import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Huella Online | Identidad, Valor Digital y Automatización",
  description:
    "Transformamos tu presencia digital con ingeniería de precisión. Expertos en páginas web modernas con Next.js y automatizaciones que escalan tu negocio.",
  keywords: ["Desarrollo Web", "Next.js", "Automatización", "Identidad Digital", "Sistemas de Alto Rendimiento", "Boutique Digital"],
  authors: [{ name: "Huella Online" }],
  openGraph: {
    title: "Huella Online | Identidad y Valor Digital",
    description: "Dejá una huella auténtica con ecosistemas digitales de alto rendimiento.",
    url: "https://huellaonline.com",
    siteName: "Huella Online",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huella Online | Identidad y Valor Digital",
    description: "Sistemas digitales diseñados para transmitir confianza y conversión.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body
        className="
          min-h-full 
          flex flex-col 
          bg-white 
          text-slate-900 
          antialiased 
          selection:bg-white 
          selection:text-brand-navy-deep
        "
      >
        <Navbar />

        <main className="flex-1 font-[var(--font-sans)]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}