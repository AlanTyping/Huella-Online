"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function BriefContent() {
  const [loadCount, setLoadCount] = useState(0);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();

  const handleLoad = () => {
    // La primera carga (0) es el formulario inicial.
    // La segunda carga (1) ocurre después del envío (submission).
    if (loadCount === 1) {
      setIsRedirecting(true);
      router.push("/gracias");
    }
    setLoadCount((prev) => prev + 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 pt-24 md:p-12 md:pt-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative w-full max-w-[700px] bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden"
      >
        {isRedirecting && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
            <p className="mt-4 font-medium text-zinc-600">Redirigiendo...</p>
          </div>
        )}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScoAd2ltKSzCqj4Gtw2DeNHp8u1YM5bhGI8di-suc3P2USQjw/viewform?embedded=true"
          width="100%"
          height="2145"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="w-full bg-transparent"
          onLoad={handleLoad}
        >
          Cargando…
        </iframe>
      </motion.div>
    </main>
  );
}
