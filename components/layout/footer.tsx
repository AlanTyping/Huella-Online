import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black py-24 text-white border-t border-white/5">
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
                Legal
              </h4>
              <ul className="space-y-4 text-sm font-bold text-zinc-500">
                <li><Link href="#" className="hover:text-white transition-colors">Privacidad</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Términos</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-20 flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-12 md:flex-row">

          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
            © {new Date().getFullYear()} Huella Online · Ingeniería Digital
          </p>

          <div className="flex items-center gap-8">
            <Link href="https://vickyaphalo.site" target="_blank" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-brand-secondary transition-colors">
              Último Despliegue
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
