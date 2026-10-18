/**
 * Decoración sutil de la sección "Una web propia cambia la conversación."
 * Unas ondas finas atraviesan el ancho completo y terminan en una cámara
 * minimalista de línea, con un pequeño destello de flash. Monocroma y de bajo
 * contraste para no competir con el texto.
 */
export function FotografosProblemWave({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 700"
      preserveAspectRatio="xMaxYMax slice"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="fpLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0a0a0b" stopOpacity="0" />
          <stop offset="0.55" stopColor="#0a0a0b" stopOpacity="0.08" />
          <stop offset="1" stopColor="#0a0a0b" stopOpacity="0.28" />
        </linearGradient>
      </defs>

      {/* Ondas finas que atraviesan horizontalmente */}
      <path
        d="M0 470 C 260 448 520 500 780 484 C 1040 468 1240 444 1440 458"
        stroke="url(#fpLine)"
        strokeWidth="1.5"
      />
      <path
        d="M0 540 C 260 518 520 566 780 552 C 1040 538 1240 516 1440 528"
        stroke="url(#fpLine)"
        strokeWidth="1.5"
      />
      <path
        d="M0 606 C 260 586 520 628 780 614 C 1040 600 1240 580 1440 590"
        stroke="url(#fpLine)"
        strokeWidth="2"
      />

      {/* Cámara minimalista (line-art) */}
      <g
        stroke="#0a0a0b"
        strokeOpacity="0.45"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1162" y="468" width="38" height="20" rx="7" fill="#ffffff" />
        <rect x="1246" y="468" width="36" height="20" rx="7" fill="#ffffff" />
        <rect x="1150" y="486" width="150" height="98" rx="14" fill="#ffffff" />
        <circle cx="1225" cy="535" r="32" />
        <circle cx="1225" cy="535" r="20" />
        <circle cx="1298" cy="478" r="4" fill="#ffffff" stroke="none" />
      </g>
      <circle cx="1237" cy="523" r="5" fill="#0a0a0b" fillOpacity="0.35" />

      {/* Chispa del flash */}
      <g
        stroke="#ffa500"
        strokeOpacity="0.75"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <line x1="1181" y1="458" x2="1181" y2="444" />
        <line x1="1170" y1="461" x2="1161" y2="451" />
        <line x1="1192" y1="461" x2="1201" y2="451" />
      </g>
    </svg>
  );
}
