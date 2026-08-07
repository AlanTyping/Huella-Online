import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/social-links";

export function Footer() {
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
                <li><Link href="#portfolio" className="hover:text-white transition-colors">Portafolio</Link></li>
                <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="#contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
                Redes
              </h4>
              <ul className="space-y-4 text-sm font-bold text-zinc-500 [&>li>a>svg]:h-4 [&>li>a>svg]:w-4">
                <li><a href="https://www.instagram.com/huellaonline/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2.5"><InstagramIcon /> Instagram</a></li>
                <li><a href="https://wa.me/541138235395" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2.5"><WhatsAppIcon /> WhatsApp</a></li>
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
