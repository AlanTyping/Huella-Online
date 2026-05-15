"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-brand-dark py-28"
    >
      {/* subtle background, no sci-fi glow */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">

        {/* ICON */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex justify-center"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-brand-secondary">
            <Mail className="h-6 w-6" />
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-medium tracking-tight text-white"
        >
          Hablemos de tu proyecto
        </motion.h2>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-zinc-400 leading-relaxed"
        >
          Trabajo con pocos proyectos a la vez para poder enfocarme en lo importante:
          que tu presencia digital realmente funcione y transmita lo que tu negocio vale.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="mailto:hola@huellaonline.com"
            className="flex items-center gap-2 rounded-md bg-brand-secondary px-8 py-4 text-base font-semibold text-brand-primary transition hover:opacity-90"
          >
            Escribirme
          </Link>

          <Link
            href="https://wa.me/tu-numero"
            className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-8 py-4 text-base text-white transition hover:bg-white/[0.06]"
          >
            WhatsApp
            <ArrowUpRight className="h-4 w-4 text-brand-secondary" />
          </Link>
        </motion.div>

        {/* SMALL NOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 text-xs tracking-wide text-zinc-500"
        >
          Respondo normalmente en menos de 24 horas
        </motion.p>
      </div>
    </section>
  );
}