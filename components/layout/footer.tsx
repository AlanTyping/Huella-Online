import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#020617] py-20 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Logo />
            <p className="max-w-sm text-lg font-medium text-zinc-500">
              Ingeniería digital enfocada en la autenticidad. Elevamos tu visión con tecnología de alto rendimiento.
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-brand-secondary">Soluciones</h4>
            <ul className="space-y-4 text-sm font-bold tracking-tight text-zinc-400">
              <li><Link href="#" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Process Automation</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Fintech Integration</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Digital DNA</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-brand-secondary">Core</h4>
            <ul className="space-y-4 text-sm font-bold tracking-tight text-zinc-400">
              <li><Link href="#" className="hover:text-white transition-colors">Nuestra Visión</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Sistemas</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold tracking-widest text-zinc-600 uppercase">
            © {new Date().getFullYear()} Huella Online / All Systems Operational.
          </p>
          <div className="flex gap-8 text-xs font-bold tracking-widest text-zinc-600 uppercase">
            <Link href="#" className="hover:text-brand-secondary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-brand-secondary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
