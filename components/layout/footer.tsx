"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import {
  InstagramIcon,
  WhatsAppIcon,
  whatsappHref,
} from "@/components/ui/social-links";

const instagramHref = "https://www.instagram.com/huellaonline/";

function EditorialFooter() {
  return (
    <footer className="border-t border-bone/10 bg-ink py-20 text-bone">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-2.5">
              <Image
                src="/icon.svg"
                alt="Huella Online"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
              <span className="font-display text-2xl tracking-tight text-bone">
                Huella Online
              </span>
            </div>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-bone/60">
              Diseñamos sitios para fotógrafos que quieren mostrar su trabajo
              como se merece.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-lg tracking-tight text-bone">
              Explorar
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-bone/60">
              <li>
                <Link href="#portfolio" className="transition-colors hover:text-bone">
                  Casos
                </Link>
              </li>
              <li>
                <Link href="#recorrido" className="transition-colors hover:text-bone">
                  Recorrido
                </Link>
              </li>
              <li>
                <Link href="#precios" className="transition-colors hover:text-bone">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="#faq" className="transition-colors hover:text-bone">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-lg tracking-tight text-bone">
              Hablemos
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-bone/60 [&>li>a>svg]:h-4 [&>li>a>svg]:w-4">
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-bone"
                >
                  <WhatsAppIcon /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-bone"
                >
                  <InstagramIcon /> Instagram
                </a>
              </li>
              <li>
                <Link href="/brief" className="transition-colors hover:text-bone">
                  Formulario
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-bone/10 pt-8 text-xs text-bone/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Huella Online</p>
          <p>Fotografía · Sitios web · Argentina</p>
        </div>
      </div>
    </footer>
  );
}

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/fotografos")) {
    return <EditorialFooter />;
  }

  return (
    <footer className="bg-brand-primary-deep py-24 text-white border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* TOP */}
        <div className="grid gap-16 md:grid-cols-2">
          {/* BRAND */}
          <div className="space-y-6">
            <Logo />

            <p className="max-w-md text-lg leading-relaxed text-zinc-300 font-medium">
              Diseño y desarrollo de sistemas digitales que fortalecen identidad,
              confianza y conversión.
            </p>

            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">
              Hecho con foco, no con volumen.
            </p>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
                Sistema
              </h4>
              <ul className="space-y-4 text-sm font-bold text-zinc-400">
                <li>
                  <Link href="#portfolio" className="hover:text-white transition-colors">
                    Portafolio
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/brief" className="hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
                Redes
              </h4>
              <ul className="space-y-4 text-sm font-bold text-zinc-500 [&>li>a>svg]:h-4 [&>li>a>svg]:w-4">
                <li>
                  <a
                    href={instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-2.5"
                  >
                    <InstagramIcon /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/541138235395"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-2.5"
                  >
                    <WhatsAppIcon /> WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-20 flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-12 md:flex-row">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
            © {new Date().getFullYear()} Huella Online
          </p>
        </div>
      </div>
    </footer>
  );
}
