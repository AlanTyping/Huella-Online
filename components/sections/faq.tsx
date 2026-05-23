"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Por qué Next.js y no WordPress o una plantilla prefabricada?",
    answer:
      "WordPress es excelente para blogs de cocina. Nosotros construimos activos de alta ingeniería. Next.js nos da velocidad, SEO y seguridad de nivel producto."
  },
  {
    question: "Mi negocio es pequeño, ¿esto no es 'demasiado' para mí?",
    answer:
      "Si planeas quedarte pequeño, sí. Si quieres proyectar autoridad y crecer, es exactamente lo que necesitas."
  },
  {
    question: "¿Cuál es la inversión necesaria para mi proyecto?",
    answer:
      "Definimos alcance, estrategia y te damos un número claro. Sin paquetes rígidos."
  },
  {
    question: "¿Realmente voy a vender más con este sitio?",
    answer:
      "El sitio no vende solo, pero cambia cómo te perciben. Y eso cambia todo."
  },
  {
    question: "¿Qué tipo de automatizaciones puedo incluir?",
    answer:
      "Desde captación de leads hasta CRM y pagos. Tu web trabajando 24/7."
  },
  {
    question: "¿Dónde se aloja mi sitio web y quién lo mantiene?",
    answer:
      "Vercel. Infraestructura global, rápida y sin mantenimiento manual."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden py-28 text-white bg-brand-primary-deep">

      {/* 🌈 FONDO NUEVO: AURORA + COLOR */}
      <div className="absolute inset-0 z-0">
        {/* base oscura más profunda */}
        <div className="absolute inset-0 bg-brand-primary-deep" />
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,140,0,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(0,140,255,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,165,0,0.18),transparent_65%)] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
          >
            <HelpCircle className="h-7 w-7 text-zinc-300" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black uppercase tracking-tighter"
          >
            CONSULTAS <span className="text-brand-secondary">ESTRATÉGICAS</span>
          </motion.h2>

          <motion.p className="mt-6 text-zinc-400 max-w-xl text-lg font-medium">
            Respuestas claras para decisiones importantes.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-5">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "relative overflow-hidden rounded-xl border transition-all duration-500",
                  isOpen
                    ? "border-blue-500/40 bg-white/[0.06] shadow-[0_0_60px_rgba(59,130,246,0.1)]"
                    : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                )}
              >

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-6 p-7 text-left"
                >
                  <span
                    className={cn(
                      "text-base font-bold leading-snug",
                      isOpen ? "text-white" : "text-zinc-300"
                    )}
                  >
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <Minus className="h-5 w-5 text-blue-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-zinc-600" />
                  )}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="px-7 pb-7 text-sm text-zinc-400 leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* glow interno más técnico */}
                {isOpen && (
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08)_0%,transparent_65%)]" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center text-zinc-500 font-medium">
          ¿Otra duda?{" "}
          <span className="text-blue-500 font-bold">
            la resolvemos en llamada.
          </span>
        </div>
      </div>
    </section>
  );
}
