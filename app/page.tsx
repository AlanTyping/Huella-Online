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
    question: "¿Cuánto tiempo tardás en tener mi página lista?",
    answer:
      "Depende de la complejidad, pero generalmente tardo entre 1 y 2 meses desde que definimos la idea hasta que tu sitio está online y listo para recibir clientes.",
  },
  {
    question: "Mi negocio es pequeño, ¿realmente necesito una web profesional?",
    answer:
      "Si quieres atraer mejores clientes y destacar frente a tu competencia, sí. Una web bien hecha te da la autoridad que las redes sociales por sí solas no pueden lograr.",
  },
  {
    question: "¿Me ayudás con los textos y las imágenes de la página?",
    answer:
      "¡Totalmente! Te guío en todo el proceso. Entiendo que tu foco está en tu negocio, así que yo me encargo de darle forma a tu mensaje para que conecte con tu público.",
  },
  {
    question: "¿Cuál es la inversión necesaria para mi proyecto?",
    answer:
      "Cada negocio es único. Primero nos reunimos para entender exactamente qué necesitas y luego te armo un presupuesto claro, a medida y sin sorpresas ocultas.",
  },
  {
    question: "¿Qué pasa con el dominio y el hosting de la web?",
    answer:
      "Te capacito paso a paso para que registres tu propio dominio y seas el único dueño. Respecto al hosting, trabajo con Vercel, que cuenta con una capa gratuita que es más que suficiente para la mayoría de los sitios. Solo en el caso de que tu web supere ese gran límite de visitas, evaluaríamos pasar a un plan pago.",
  },
  {
    question: "¿Realmente voy a conseguir más clientes con este sitio?",
    answer:
      "Una web profesional es como tu mejor vendedor trabajando 24/7. Responde dudas, muestra la calidad de tus servicios y genera la confianza necesaria para que decidan comprarte a vos.",
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
