import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-brand-primary/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Link href="/" className="transition-opacity hover:opacity-90">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link href="#portfolio" className="text-[12px] font-bold tracking-[0.15em] text-white/70 hover:text-brand-secondary transition-colors uppercase">
            Proyectos
          </Link>
          <Link href="#faq" className="text-[12px] font-bold tracking-[0.15em] text-white/70 hover:text-brand-secondary transition-colors uppercase">
            FAQ
          </Link>
          <Link 
            href="#contacto" 
            className="rounded-md bg-brand-secondary px-6 py-2.5 text-[12px] font-black text-brand-primary hover:bg-white hover:scale-105 transition-all uppercase tracking-tighter"
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
