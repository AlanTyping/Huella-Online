"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ExternalLink, BadgeCheck } from "lucide-react";
import Image from "next/image";

function InstagramVerifiedIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <defs>
        <mask id="check-mask">
          <rect width="100%" height="100%" fill="white" />
          <path 
            stroke="black"
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="m9 12 2 2 4-4"
            fill="none"
          />
        </mask>
      </defs>
      <path 
        fill="#0095F6"
        stroke="#0095F6"
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        mask="url(#check-mask)"
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.76 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      />
    </svg>
  );
}

interface Testimonial {
  id: number;
  name: string;
  followers: string;
  content: ReactNode;
  image: string;
  link?: string;
  verified?: boolean;
  imageScale?: string;
  imagePosition?: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 2,
    name: "Cristian",
    followers: "+1.4mil seguidores",
    content: (
      <>
        Fue tremenda experiencia, al principio no voy a negar que desconfié pero con el paso del tiempo comprendí que realmente estaba{" "}
        <strong className="text-white font-bold">
          trabajando con un profesional
        </strong>
        , Alan es una persona que realmente está para ayudarte y{" "}
        <strong className="text-white font-bold">
          explicarte con toda la paciencia
        </strong>{" "}
        del mundo hasta que lo entiendas, finalmente te ayuda a lograr eso que tanto pensaste que querías,{" "}
        <strong className="text-white font-bold">
          tu propia página web
        </strong>
        . Súper recomendable Huella Online 😎
      </>
    ),
    image: "/images/cristian.webp",
    link: "https://www.instagram.com/lumos.fotografia_/",
    verified: true,
    imageScale: "scale-[1.5] origin-[65%_0%]",
    imagePosition: "65% top",
  },
  {
    id: 1,
    name: "Vicky Aphalo",
    followers: "+4 mil seguidores",
    content: (
      <>
        La experiencia de trabajar con Huella Online fue muy buena. Valoro el{" "}
        <strong className="text-white font-bold">
          diálogo y el acompañamiento
        </strong>{" "}
        durante todo el proceso. Las reuniones fueron{" "}
        <strong className="text-white font-bold">
          muy dinámicas
        </strong>{" "}
        donde pudimos intercambiar ideas y revisar detalles. Sentí que hubo{" "}
        <strong className="text-white font-bold">
          mucha escucha
        </strong>{" "}
        y predisposición para entender lo que necesitaba. Quedé muy conforme con el resultado :)
      </>
    ),
    image: "/images/vicky-square.jpg",
    link: "https://www.vickyaphalo.site/", // Enlace a su web
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-brand-primary-deep py-20 lg:py-28 text-white">
      {/* Background glow optimizado */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,165,0,0.12),transparent_65%)] blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
            TRABAJANDO <span className="text-brand-secondary">JUNTOS</span>
          </h2>
          <p className="mt-6 text-zinc-400 max-w-xl text-lg font-medium">
            La experiencia de construir una presencia online profesional.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-1">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-8 md:p-12 transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.05]"
            >
              {/* Marca de agua (Comillas gigantes) */}
              <Quote
                className="absolute -top-6 -left-6 h-48 w-48 rotate-6 text-white/5 pointer-events-none"
              />
              <Quote className="absolute top-8 right-8 h-8 w-8 text-white/10" />

              <div className="relative z-10">
                {/* Estrellas Animadas */}
                <div className="mb-6 flex gap-1 text-brand-secondary">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.4 + i * 0.1,
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      <Star className="h-5 w-5 fill-current" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-lg md:text-xl leading-relaxed text-zinc-300 italic mb-10">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Borde estilo Instagram Story */}
                    <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px]">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-brand-primary-deep">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className={`object-cover ${testimonial.imageScale || "scale-110"}`}
                          style={{ objectPosition: testimonial.imagePosition || "center 80%" }}
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg flex items-center gap-1.5">
                        {testimonial.name}
                        {testimonial.verified && (
                          <InstagramVerifiedIcon className="h-4 w-4 shrink-0" />
                        )}
                      </h4>
                      <p className="text-sm font-medium text-zinc-400">{testimonial.followers}</p>
                    </div>
                  </div>

                  {testimonial.link && (
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-colors hover:bg-brand-secondary hover:text-white"
                      title="Ver proyecto o perfil"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* glow suave interior */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,165,0,0.04)_0%,transparent_60%)] group-hover:bg-[radial-gradient(circle_at_top,rgba(255,165,0,0.08)_0%,transparent_60%)] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
