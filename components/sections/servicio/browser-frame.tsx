"use client";

import Image from "next/image";

interface BrowserFrameProps {
  image: string;
  alt: string;
  sizes: string;
  /** Dimensiones naturales: usa layout intrínseco (sin recorte). */
  width?: number;
  height?: number;
  /** Clase de aspect-ratio. Si se pasa, la imagen usa `fill`. */
  aspect?: string;
  /** object-fit en modo `aspect` (default: cover). */
  fit?: "cover" | "contain";
  /** object-position en modo `aspect` (default: object-top). */
  objectPosition?: string;
  className?: string;
  priority?: boolean;
}

/**
 * Marco tipo navegador para presentar capturas de sitios como un producto real
 * (no como fondo). Compartido por el hero y el recorrido de las páginas de
 * servicio.
 */
export function BrowserFrame({
  image,
  alt,
  sizes,
  width,
  height,
  aspect,
  fit = "cover",
  objectPosition = "object-top",
  className = "",
  priority,
}: BrowserFrameProps) {
  return (
    <figure
      className={`group overflow-hidden rounded-xl border border-ink/10 bg-white shadow-[0_24px_60px_-35px_rgba(10,10,11,0.55)] transition-colors duration-300 hover:border-ink/50 ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-ink/10 bg-ink/[0.03] px-4 py-2.5">
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span
          aria-hidden="true"
          className="ml-3 h-5 flex-1 rounded-full bg-ink/[0.05]"
        />
      </div>

      {aspect ? (
        <div className={`relative ${aspect} bg-paper-soft/40`}>
          <Image
            src={image}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={`transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
              fit === "contain" ? "object-contain" : "object-cover"
            } ${fit === "cover" ? objectPosition : ""}`}
          />
        </div>
      ) : (
        <Image
          src={image}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      )}
    </figure>
  );
}
