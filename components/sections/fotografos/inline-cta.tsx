"use client";

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

      <a
        href={fotografoWhatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center justify-center gap-3 rounded-md bg-whatsapp px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-whatsapp-hover [&>svg]:h-5 [&>svg]:w-5"
      >
        <WhatsAppIcon />
        Hablemos
      </a>
    </div>
  );
}
