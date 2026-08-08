"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FaqItem[];
}

export function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-20 lg:py-28 text-white bg-brand-primary-deep">

      {/* 🌈 BACKGROUND (optimizado) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-primary-deep" />

        <div className="absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(255,140,0,0.22),transparent_60%)] blur-2xl" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,140,255,0.16),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,165,0,0.12),transparent_65%)] blur-xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
            <HelpCircle className="h-7 w-7 text-zinc-300" />
          </div>

          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
            CONSULTAS <span className="text-brand-secondary">ESTRATÉGICAS</span>
          </h2>

          <p className="mt-6 text-zinc-400 max-w-xl text-lg font-medium">
            Respuestas claras para decisiones importantes.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-5">
          {faqs.map((faq: FaqItem, index: number) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                className={cn(
                  "relative overflow-hidden rounded-xl border transition-all duration-300",
                  isOpen
                    ? "border-blue-500/40 bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
                )}
              >

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-6 p-6 text-left"
                >
                  <span
                    className={cn(
                      "text-base font-bold leading-snug transition-colors",
                      isOpen ? "text-white" : "text-zinc-300"
                    )}
                  >
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? (
                      <Minus className="h-5 w-5 text-blue-500" />
                    ) : (
                      <Plus className="h-5 w-5 text-zinc-500" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* glow suave */}
                {isOpen && (
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.07)_0%,transparent_60%)]" />
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