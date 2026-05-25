"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#portfolio", label: "Proyectos" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/[0.05] bg-brand-navy-deep/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
        <Link href="/" className="transition-opacity hover:opacity-90">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 hover:text-brand-secondary transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="rounded-full bg-white px-6 py-2.5 text-[11px] font-black text-brand-primary hover:bg-brand-secondary hover:text-white transition-all uppercase tracking-tighter"
          >
            Empezar
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-white outline-none"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] flex flex-col bg-brand-primary-deep p-8 md:hidden"
          >
            <div className="flex items-center justify-between mb-16">
              <Logo />
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-white"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black tracking-tighter text-white hover:text-brand-secondary transition-colors uppercase"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-block w-fit rounded-full bg-blue-500 px-8 py-4 text-xl font-black text-white hover:bg-brand-secondary transition-all uppercase tracking-tighter"
              >
                Empezar Proyecto
              </Link>
            </nav>

            <div className="mt-auto">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                © {new Date().getFullYear()} Huella Online
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
