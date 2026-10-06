"use client";

export function FotografosMarquee() {
  const text = "Huella Online";

  return (
    <div className="relative w-full select-none overflow-hidden border-y border-bone/10 bg-ink py-10">
      <div className="flex w-max animate-[marquee-scroll_70s_linear_infinite]">
        {[...Array(2)].map((_, group) => (
          <div key={group} className="flex items-center">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-8">
                <span className="font-display text-3xl font-light tracking-tight text-bone/25 sm:text-4xl">
                  {text}
                </span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-secondary" />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Fundidos laterales */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
