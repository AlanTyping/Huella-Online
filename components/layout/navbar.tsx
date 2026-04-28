import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-brand-primary/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="transition-opacity hover:opacity-90">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link href="#servicios" className="text-sm font-bold tracking-widest text-white/70 hover:text-brand-secondary transition-colors uppercase">
            Servicios
          </Link>
          <Link href="#filosofia" className="text-sm font-bold tracking-widest text-white/70 hover:text-brand-secondary transition-colors uppercase">
            Filosofía
          </Link>
          <Link 
            href="#contacto" 
            className="rounded-full bg-brand-secondary px-6 py-2.5 text-sm font-black text-brand-primary hover:bg-white hover:scale-105 transition-all uppercase tracking-tighter"
          >
            Empezar
          </Link>
        </nav>
        <button className="md:hidden p-2 text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}
