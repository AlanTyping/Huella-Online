"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";

export function GraciasContent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 pt-24 md:p-12 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[600px] bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 md:p-12 text-center"
      >
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="w-20 h-20 text-green-500" />
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4">
          ¡Listo! Recibimos tu proyecto
        </h1>
        <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
          Gracias por contarnos lo que tenés en mente. Vamos a revisar tu información y nos pondremos en contacto con vos dentro de <span className="underline decoration-[#ffa500] decoration-[4px] underline-offset-4">1-2 días hábiles</span> para contarte los próximos pasos.
        </p>
        <Link
          href="/"
          className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-blue-500 px-10 py-4 text-lg font-bold text-white transition-all hover:bg-zinc-900 active:scale-95"
        >
          VOLVER AL INICIO
          <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </main>
  );
}
