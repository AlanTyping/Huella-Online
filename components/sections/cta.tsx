"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, ChevronRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-brand-primary-deep py-28 lg:py-36 border-t border-white/[0.03]"
    >
      {/* 🌌 BACKGROUND SYSTEM (más controlado y profundo) */}
      <div className="pointer-events-none absolute inset-0">

        {/* main glow */}
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

        {/* secondary orbit */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-[-120px] h-[600px] w-[600px] rounded-full bg-blue-400/10 blur-[200px]"
        />

        {/* grid subtle */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(59,130,246,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-4xl px-6">

        <div className="rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 md:p-20 text-center backdrop-blur-2xl">

          {/* ICON */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex justify-center"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-sm">
              <Mail className="h-9 w-9" />
            </div>
          </motion.div>

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-black uppercase leading-none tracking-tighter text-white sm:text-6xl lg:text-7xl"
          >
            ¿Listo para <br />
            <span className="text-orange-300">evolucionar?</span>
          </motion.h2>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl font-medium"
          >
            Trabajamos con pocos proyectos por trimestre para mantener precisión,
            calidad y foco. Si buscas algo genérico, este no es el lugar.
            <span className="text-white"> Si buscas impacto real, hablemos.</span>
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row"
          >
            <Link
              href="mailto:hola@huellaonline.com"
              className="group flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 px-10 py-4 text-lg font-black text-white transition-all hover:bg-white hover:text-blue-500 active:scale-95 sm:w-auto shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              INICIAR PROYECTO
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://wa.me/tu-numero"
              className="flex w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-10 py-4 text-lg font-black text-white transition-all hover:bg-white/10 sm:w-auto group"
            >
              WHATSAPP
              <ArrowUpRight className="h-5 w-5 text-blue-500 transition-colors" />
            </Link>
          </motion.div>

          {/* MICRO TRUST */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-[11px] font-bold tracking-[0.35em] text-zinc-600 uppercase"
          >
            Respuesta en menos de 24 horas
          </motion.p>
        </div>
      </div>
    </section>
  );
}