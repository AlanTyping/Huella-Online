"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import {
  InstagramIcon,
  whatsappHref,
  WhatsAppIcon,
} from "@/components/ui/social-links";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#portfolio", label: "Proyectos" },
    { href: "#sobre-mi", label: "Desarrollador" },
    { href: "#faq", label: "FAQ" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="fixed top-0 z-50 w-full">

      {/* SOLO glass en navbar (sin degradado agresivo) */}
      <div className="absolute inset-0 backdrop-blur-xl border-b border-white/[0.06]" />

      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">

        <Link href="/" className="group flex items-center">
          <div className="transition-transform duration-300 group-hover:scale-[1.02]">
            <Logo />
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[11px] font-bold tracking-[0.22em] text-zinc-400 uppercase transition-colors hover:text-[#ffa500] group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#ffa500] transition-all group-hover:w-full" />
            </Link>
          ))}

          <Link
            href="#contacto"
            className="rounded bg-white px-6 py-2.5 text-[11px] font-black text-black hover:text-white uppercase tracking-tighter transition-all hover:scale-[1.03] hover:bg-[#ffa500]"
          >
            Empezar
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden rounded-full p-2 text-white hover:bg-white/10 transition"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] md:hidden"
          >
            {/* overlay transparente opcional por si acaso */}
            <div className="absolute inset-0 bg-black/20" onClick={() => setIsOpen(false)} />

            {/* panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 240 }}
              className="absolute inset-0 flex h-full flex-col bg-blue-950 p-8"
            >
              {/* top */}
              <div className="flex items-center justify-between mb-14">
                <Logo />

                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 text-white hover:bg-white/10 transition"
                  aria-label="Close menu"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>

              {/* links */}
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-black tracking-tight text-white hover:text-[#ffa500] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="my-6 h-[1px] w-full bg-white/10" />

                <Link
                  href="#contacto"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex w-fit rounded-lg bg-blue-600 px-7 py-4 text-lg font-black text-white uppercase tracking-tighter transition-all duration-300 hover:bg-blue-500 hover:scale-[1.03] active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                >
                  Quiero mi web
                </Link>
              </nav>

              {/* footer */}
              <div className="mt-auto pt-10">
                <div className="mb-8 flex items-center gap-3">
                  <Link
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir WhatsApp"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-105 hover:bg-[#20ba5a]"
                  >
                    <WhatsAppIcon />
                  </Link>
                  <Link
                    href="https://www.instagram.com/huellaonline/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir Instagram"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white transition hover:scale-105 hover:brightness-110"
                  >
                    <InstagramIcon />
                  </Link>
                </div>
                <p className="text-[10px] tracking-[0.35em] font-black text-zinc-400 uppercase">
                  © {new Date().getFullYear()} Huella Online
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

