"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export function FotografosFaq({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-paper py-24 text-ink lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Preguntas frecuentes.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-graphite">
              Si te queda alguna duda, escribinos y te respondemos en menos de
              24 horas.
            </p>
          </div>

          <div className="lg:col-span-8">
            {faqs.map((faq, index) => {
              const isOpen = open === index;
              return (
                <div key={faq.question} className="border-t border-ink/15">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-xl tracking-tight sm:text-2xl">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-graphite">
                      {isOpen ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pr-8 text-base leading-relaxed text-graphite">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
