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
            className="mb-6 text-4xl font-black uppercase leading-none tracking-tighter text-white sm:text-6xl lg:text-7xl"
          >
            ¿LISTO PARA <br />
            <span className="text-brand-secondary">EVOLUCIONAR?</span>
          </motion.h2>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl font-medium"
          >
            Reservemos una <span className="text-white">charla gratuita de 15 minutos</span>.
            Puede ser por Meet, WhatsApp o chat. Quiero conocer lo que estás construyendo y pensar juntos cómo hacerlo destacar en digital.
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
              href="mailto:alantyping.dev@gmail.com?subject=Interés en crear una página web profesional - Huella Online&body=Hola Huella Online 👋,%0D%0A%0D%0AQuiero una página web profesional para mi negocio y me gustaría coordinar la charla de 15 minutos.%0D%0A%0D%0A── SOBRE MÍ / PROYECTO ──%0D%0A%0D%0A▌ Nombre: %0D%0A▌ Contacto: %0D%0A▌ Mi idea: %0D%0A%0D%0A── CHARLA ──%0D%0A%0D%0A▌ Fecha y hora preferida: "
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 px-10 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-blue-500 active:scale-95 sm:w-auto"
            >
              AGENDAR REUNIÓN GRATUITA
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://wa.me/541138235395"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-10 py-4 text-lg font-bold text-white transition-all hover:bg-[#20ba5a] active:scale-95 sm:w-auto group"
            >
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WHATSAPP
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
