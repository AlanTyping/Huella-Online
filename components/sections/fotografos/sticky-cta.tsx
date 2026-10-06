"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/social-links";
import { fotografoWhatsappHref } from "./contact";

export function FotografosStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile bottom bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-brand-primary-deep/95 px-4 py-3 backdrop-blur-xl transition-transform duration-300 md:hidden ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
              Tu web en pocas semanas
            </span>
            <span className="text-sm font-black text-white">
              Desde $225.000
            </span>
          </div>

          <a
            href={fotografoWhatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-2 rounded-md bg-whatsapp px-5 py-3 text-sm font-black uppercase tracking-tight text-white transition-all active:scale-95 [&>svg]:h-5 [&>svg]:w-5"
          >
            <WhatsAppIcon />
            Hablar
          </a>
        </div>
      </div>

      {/* Desktop floating button */}
      <a
        href={fotografoWhatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp"
        title="Hablar por WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:bg-[#20ba5a] hover:shadow-xl md:flex [&>svg]:h-7 [&>svg]:w-7"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}
