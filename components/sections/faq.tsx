"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Por qué Next.js y no WordPress o una plantilla prefabricada?",
    answer: "WordPress es excelente para blogs de cocina. Nosotros construimos activos de alta ingeniería. Next.js nos da una velocidad absurda, SEO de élite y seguridad que no depende de 50 plugins vulnerables. No hacemos simples páginas; desarrollamos software de alto rendimiento que posiciona tu marca en otra liga."
  },
  {
    question: "Mi negocio es pequeño, ¿esto no es 'demasiado' para mí?",
    answer: "Si planeas quedarte pequeño, sí. Si buscas proyectar autoridad, captar clientes premium y tener una base sólida para crecer, entonces es exactamente lo que necesitas. La percepción es realidad en el mundo digital: sonar profesional es el primer paso para cobrar como tal."
  },
  {
    question: "¿Cuál es la inversión necesaria para mi proyecto?",
    answer: "No vendemos soluciones de molde, por lo que no tenemos precios de 'menú'. El presupuesto depende de si necesitas un landing de aterrizaje letal o un ecosistema completo con automatizaciones. Agendamos una breve sesión estratégica, evaluamos el alcance y te damos un número claro. Sin sorpresas, solo resultados."
  },
  {
    question: "¿Realmente voy a vender más con este sitio?",
    answer: "El sitio no hace milagros, pero hace que tu propuesta sea imposible de ignorar. Combinamos una identidad visual potente con una arquitectura de conversión psicológica. Si tienes un buen servicio, nosotros le damos el megáfono y el escenario premium que se merece para que dejes de perseguir clientes y empieces a atraerlos."
  },
  {
    question: "¿Qué tipo de automatizaciones puedo incluir?",
    answer: "Desde formularios inteligentes que califican a tus prospectos antes de que lleguen a tu inbox, hasta pasarelas de pago y sincronización con tu CRM. El objetivo es que tu sitio trabaje 24/7 filtrando y gestionando leads mientras tú te enfocas en lo que realmente importa: tu negocio."
  },
  {
    question: "¿Dónde se aloja mi sitio web y quién lo mantiene?",
    answer: "Utilizamos Vercel, la infraestructura que utilizan gigantes como Nike o TikTok. Es sinónimo de velocidad global y estabilidad total. Te entregamos un sistema que no requiere que estés pendiente de actualizaciones técnicas constantes ni de servidores que se caen cuando más los necesitas."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-brand-dark py-24 text-white lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex h-16 w-16 items-center justify-center rounded-md bg-brand-primary text-brand-secondary shadow-inner"
          >
            <HelpCircle className="h-8 w-8" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl text-4xl font-black leading-tight tracking-tighter sm:text-6xl uppercase"
          >
            CONSULTAS <span className="text-brand-secondary">ESTRATÉGICAS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-zinc-400"
          >
            Todo lo que necesitas saber antes de escalar tu presencia digital con un sistema de alto rendimiento.
          </motion.p>
        </div>

        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "overflow-hidden rounded-xl border transition-all duration-300",
                openIndex === index
                  ? "border-brand-secondary/50 bg-brand-primary-light/50 shadow-[0_0_20px_rgba(255,165,0,0.1)]"
                  : "border-white/5 bg-white/5 hover:border-white/10 hover:bg-white/[0.07]"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={cn(
                  "text-lg font-bold transition-colors pr-4",
                  openIndex === index ? "text-brand-secondary" : "text-white"
                )}>
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-brand-secondary">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-base leading-relaxed text-zinc-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500">
            ¿Tienes otra duda? <span className="text-brand-secondary font-bold">Sin miedo.</span> Pregúntame lo que quieras en nuestra llamada.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
