"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { GraffitiBackground } from "@/components/ui/GraffitiBackground";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-brand-primary-deep pt-32 pb-20 text-white lg:pt-40">
      {/* Blue-tinted Background Elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1)_0%,rgba(2,6,23,1)_70%)]" />

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-blue" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid-blue)" />
        </svg>
      </div>

      {/* Particles Background */}
      <GraffitiBackground />

      {/* Decorative Blue Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container relative z-10 mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content Left */}
          <div className="flex flex-col items-start text-left lg:pl-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-2xl text-6xl font-black leading-[1.05] tracking-tighter sm:text-7xl lg:text-8xl uppercase text-white"
            >
              TU WEB. <br />
              <span className="text-brand-secondary">SIN LÍMITES.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-lg text-lg font-medium text-zinc-400 sm:text-xl leading-relaxed"
            >
              Construimos ecosistemas digitales transparentes y potentes. Diseño de alto impacto con automatización inteligente para escalar tu visión.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
            >
              <Link
                href="#contacto"
                className="
                  group relative flex items-center gap-3
                  rounded-full bg-blue-500 px-10 py-5
                  text-lg font-bold text-white
                  transition-all duration-300 hover:bg-white hover:text-blue-600 hover:shadow-2xl hover:shadow-blue-500/20
                  active:scale-95
                "
              >
                EMPEZAR AHORA
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Animation Right */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-square w-full max-w-[500px] mx-auto"
            >
              {/* Abstract Animation Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="h-full w-full rounded-[40px] border-2 border-dashed border-brand-secondary/20"
                />
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-3/4 w-3/4 rounded-[30px] border-2 border-white/10"
                />

                {/* Floating "Data" Orbs */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i,
                    }}
                    className={`absolute h-16 w-16 rounded-2xl bg-brand-primary-light/20 shadow-xl flex items-center justify-center border border-white/10 backdrop-blur-sm`}
                    style={{
                      top: `${20 + i * 25}%`,
                      left: `${20 + i * 20}%`,
                    }}
                  >
                    <div className={`h-2 w-8 rounded-full ${i === 1 ? 'bg-brand-secondary' : 'bg-blue-500'}`} />
                  </motion.div>
                ))}

                {/* Central Focus */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="z-10 h-32 w-32 rounded-3xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/40"
                >
                  <div className="h-12 w-12 rounded-full border-4 border-brand-secondary" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

