import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Philosophy } from "@/components/sections/philosophy";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <Philosophy />
      
      {/* Final CTA Section */}
      <section id="contacto" className="bg-brand-primary py-24 text-white lg:py-32">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Únete a los emprendedores que ya están transformando su presencia digital con autenticidad y tecnología de punta.
          </p>
          <div className="mt-10">
            <Link
              href="mailto:hola@huellaonline.com"
              className="rounded-full bg-white px-10 py-4 text-lg font-bold text-brand-primary shadow-xl hover:bg-zinc-100 transition-all active:scale-95"
            >
              Hablemos de tu proyecto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
