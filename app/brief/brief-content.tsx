"use client";

import { motion } from "framer-motion";

export function BriefContent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 pt-24 md:p-12 md:pt-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full max-w-[700px] bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden"
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScoAd2ltKSzCqj4Gtw2DeNHp8u1YM5bhGI8di-suc3P2USQjw/viewform?embedded=true"
          width="100%"
          height="2145"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="w-full bg-transparent"
        >
          Cargando…
        </iframe>
      </motion.div>
    </main>
  );
}
