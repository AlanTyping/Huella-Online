"use client";

import Link from "next/link";
import { WhatsAppIcon } from "@/components/ui/social-links";
import { fotografoWhatsappHref } from "./contact";

interface FotografosInlineCtaProps {
  title: string;
  tone?: "dark" | "light";
}

export function FotografosInlineCta({
  title,
  tone = "dark",
}: FotografosInlineCtaProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={`mt-20 flex flex-col gap-6 border-t pt-10 sm:flex-row sm:items-center sm:justify-between ${
        isDark ? "border-bone/15" : "border-ink/15"
      }`}
    >
      <p
        className={`max-w-xl font-display text-2xl leading-snug tracking-tight sm:text-3xl ${
          isDark ? "text-bone" : "text-ink"
        }`}
      >
        {title}
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={fotografoWhatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-3 rounded-md bg-whatsapp px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-whatsapp-hover [&>svg]:h-5 [&>svg]:w-5"
        >
          <WhatsAppIcon />
          Hablemos
        </a>

        <Link
          href="#precios"
          className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-md border px-7 py-4 text-base font-medium transition-colors ${
            isDark
              ? "border-bone/25 text-bone/80 hover:border-bone/50 hover:text-bone"
              : "border-ink/20 text-ink/80 hover:border-ink/40 hover:text-ink"
          }`}
        >
          Ver precios
        </Link>
      </div>
    </div>
  );
}
