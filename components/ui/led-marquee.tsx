"use client";

export function LEDMarquee() {
  const text = "HUELLA ONLINE";

  return (
    <div className="relative w-full overflow-hidden bg-black py-6 border-y border-white/[0.05] select-none">

      {/* 🎛️ soft LED grid (sutil) */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--brand-orange) 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
      />

      {/* 🌫️ vignette edges (profundidad real) */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20" />

      {/* 🟠 MARQUEE REAL INFINITO */}
      <div className="flex w-max animate-[scroll_100s_linear_infinite]">

        {/* duplicado para loop perfecto */}
        {[...Array(2)].map((_, group) => (
          <div key={group} className="flex items-center">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-10 px-10"
              >
                <span
                  className="text-brand-secondary font-mono text-4xl font-black tracking-[0.35em] uppercase"
                  style={{
                    textShadow: "0 0 10px rgba(255,165,0,0.35)",
                  }}
                >
                  {text}
                </span>

                <div className="h-2 w-2 rounded-full bg-brand-secondary/20" />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* CSS animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
