import { Hero } from "@/components/sections/hero";
import { LEDMarquee } from "@/components/ui/led-marquee";
import { Transformation } from "@/components/sections/transformation";
import { Portfolio } from "@/components/sections/portfolio";
import { About } from "@/components/sections/about";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/cta";
import {
  MobileInstagramLink,
  SocialLinks,
} from "@/components/ui/social-links";

export const faqs = [
  {
    question: "¿Por qué Next.js y no WordPress o una plantilla prefabricada?",
    answer:
      "WordPress es excelente para blogs de cocina. Nosotros construimos activos de alta ingeniería. Next.js nos da velocidad, SEO y seguridad de nivel producto.",
  },
  {
    question: "Mi negocio es pequeño, ¿esto no es 'demasiado' para mí?",
    answer:
      "Si planeas quedarte pequeño, sí. Si quieres proyectar autoridad y crecer, es exactamente lo que necesitas.",
  },
  {
    question: "¿Cuál es la inversión necesaria para mi proyecto?",
    answer:
      "Definimos alcance, estrategia y te damos un número claro. Sin paquetes rígidos.",
  },
  {
    question: "¿Realmente voy a vender más con este sitio?",
    answer:
      "El sitio no vende solo, pero cambia cómo te perciben. Y eso cambia todo.",
  },
  {
    question: "¿Qué incluye una página web profesional?",
    answer:
      "Estructura clara, diseño responsive, carga rápida, SEO base y una experiencia pensada para convertir visitas en consultas.",
  },
  {
    question: "¿Dónde se aloja mi sitio web y quién lo mantiene?",
    answer:
      "Vercel. Infraestructura global, rápida y sin mantenimiento manual.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SocialLinks />
      <MobileInstagramLink />
      <Transformation />
      <About />
      <Portfolio />

      <FAQ faqs={faqs} />
      <FinalCTA />
      <LEDMarquee />
    </div>
  );
}
