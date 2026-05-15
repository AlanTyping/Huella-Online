import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-primary py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        {/* TOP */}
        <div className="grid gap-16 md:grid-cols-2">

          {/* BRAND */}
          <div className="space-y-6">
            <Logo />

            <p className="max-w-md text-lg leading-relaxed text-zinc-500">
              Diseño y desarrollo de sistemas digitales que fortalecen identidad,
              confianza y conversión.
            </p>

            <p className="text-xs tracking-widest text-zinc-600">
              Hecho con foco, no con volumen.
            </p>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-10">

            <div>
              <h4 className="mb-5 text-xs tracking-[0.3em] text-brand-secondary">
                Servicios
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><Link href="#" className="hover:text-white">Webs de alto rendimiento</Link></li>
                <li><Link href="#" className="hover:text-white">Automatización de procesos</Link></li>
                <li><Link href="#" className="hover:text-white">Integración de pagos</Link></li>
                <li><Link href="#" className="hover:text-white">Optimización de conversión</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-xs tracking-[0.3em] text-brand-secondary">
                Contacto
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><Link href="#contacto" className="hover:text-white">Hablemos</Link></li>
                <li><Link href="#" className="hover:text-white">Proyectos</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 md:flex-row">

          <p className="text-xs tracking-widest text-zinc-600">
            © {new Date().getFullYear()} Huella Online · Construcción digital intencional
          </p>

          <div className="flex gap-6 text-xs text-zinc-600">
            <Link href="#" className="hover:text-brand-secondary">
              Privacidad
            </Link>
            <Link href="#" className="hover:text-brand-secondary">
              Términos
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}