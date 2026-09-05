"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { GraffitiBackground } from "@/components/ui/GraffitiBackground";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-brand-primary-deep pt-24 pb-20 text-white lg:pt-32 lg:pb-24">
      {/* Deep Blue Background Elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15)_0%,rgba(2,6,23,1)_70%)]" />

      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid-blue"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid-blue)" />
        </svg>
      </div>

      {/* Particles Background */}
      <GraffitiBackground />

      {/* Decorative Blue Glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 z-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content Left */}
          <div className="-mt-6 flex flex-col items-start text-left lg:-mt-10 lg:pl-12">
            <h1 className="max-w-2xl text-6xl font-black uppercase leading-[1.05] tracking-tighter sm:text-7xl lg:text-8xl flex flex-col gap-1 lg:gap-2">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white"
              >
                TU WEB
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="w-fit text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-yellow-400 drop-shadow-[0_0_20px_rgba(255,165,0,0.35)] pb-1 italic pr-4"
              >
                SIN LÍMITES.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 max-w-lg text-lg font-medium leading-relaxed text-zinc-400 sm:text-xl"
            >
              Páginas web modernas para negocios de Buenos Aires. Diseño claro,
              carga rápida y una presencia digital que transmite confianza desde
              el primer vistazo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12"
            >
              <Link
                href="/brief"
                className="
                  group relative flex items-center gap-3
                  rounded bg-blue-600 px-10 py-5
                  text-xl lg:text-lg font-bold text-white lg:uppercase
                  transition-all duration-300
                  hover:bg-white hover:text-blue-600 hover:shadow-2xl hover:shadow-blue-500/20
                  active:scale-95
                "
              >
                Quiero mi página web
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
              className="relative mx-auto aspect-square w-full max-w-[500px]"
            >
              {/* Abstract Animation Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="h-full w-full rounded-lg border-2 border-dashed border-brand-secondary/20 animate-[spin-slow_25s_linear_infinite]"
                />

                <div
                  className="absolute h-3/4 w-3/4 rounded-lg border-2 border-white/10 animate-[spin-slow-reverse_18s_linear_infinite]"
                />

                {/* Floating "Data" Orbs */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute flex h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-brand-primary-light/20 shadow-xl backdrop-blur-sm animate-[float_5s_ease-in-out_infinite]"
                    style={{
                      top: `${20 + i * 25}%`,
                      left: `${20 + i * 20}%`,
                      animationDelay: `${i * 0.7}s`
                    }}
                  >
                    <div
                      className={`h-2 w-8 rounded-full ${i === 1 ? "bg-brand-secondary" : "bg-blue-500"
                        }`}
                    />
                  </div>
                ))}

                {/* Central Focus - Now with brand icon */}
                <div
                  className="z-10 flex h-32 w-32 items-center justify-center rounded-lg border border-white/10 bg-white/5 shadow-2xl shadow-brand-secondary/10 backdrop-blur-md animate-[float-delayed_6s_ease-in-out_infinite]"
                >
                  <Image
                    src="/icon.svg"
                    alt="Brand Icon"
                    width={80}
                    height={80}
                    className="h-20 w-20 object-contain drop-shadow-[0_0_15px_rgba(255,165,0,0.3)] animate-[float_4s_ease-in-out_infinite]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

