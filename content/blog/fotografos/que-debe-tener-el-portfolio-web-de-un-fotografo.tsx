import type { BlogPostMeta } from "../types";
import { H2, H3, P, UL, LI } from "@/components/blog/prose";

export const meta: BlogPostMeta = {
  slug: "que-debe-tener-el-portfolio-web-de-un-fotografo",
  category: "fotografos",
  title: "Qué debe tener el portfolio web de un fotógrafo",
  description:
    "Las secciones y detalles que no pueden faltar en el portfolio web de un fotógrafo para mostrar su trabajo en máxima calidad y convertir visitas en clientes.",
  excerpt:
    "Secciones, velocidad y confianza: lo que hace que el portfolio de un fotógrafo convierta en clientes en vez de solo verse lindo.",
  date: "2026-10-09",
  readingTime: "7 min",
  keywords: [
    "portfolio web para fotógrafos",
    "web para fotógrafos",
    "sitio web de fotografía",
    "secciones portfolio fotógrafo",
  ],
};

export function Content() {
  return (
    <>
      <P>
        Un portfolio de fotografía no es un álbum: es tu mejor vendedor. La
        diferencia entre un sitio que solo se ve lindo y uno que te trae
        clientes está en cómo está pensado. Esto es lo que no puede faltar en el{" "}
        <strong>portfolio web de un fotógrafo</strong>. 👇
      </P>

      <H2>🖼️ Una portada con una sola idea</H2>
      <P>
        Tu mejor foto, un mensaje claro y un botón que invite a seguir. Nada de
        carruseles interminables ni veinte imágenes apiladas. La portada es el
        instante donde alguien decide si te conoce o se va, y tenés menos de
        cinco segundos para convencerlo.
      </P>

      <H2>🗂️ Galerías organizadas por especialidad</H2>
      <P>
        No mezcles todo en un mismo lugar. Si hacés bodas, XV y producto,
        separalos en categorías. Cada visitante encuentra en segundos lo que
        busca, y vos te mostrás como especialista y no como generalista. Además,
        una galería ordenada se siente más profesional y demuestra que sabés lo
        que hacés.
      </P>
      <H3>⚡ Calidad sin sacrificar velocidad</H3>
      <P>
        Imágenes grandes y nítidas, pero optimizadas. Un portfolio que tarda en
        cargar pierde al visitante antes de que vea tu primera foto. La regla de
        oro: que se vea impecable y vuele al mismo tiempo.
      </P>

      <H2>👋 Una sección “Sobre mí” que genere confianza</H2>
      <P>
        Detrás de cada contratación hay una persona. Tu historia, tu mirada y tu
        experiencia convierten un portfolio lindo en alguien en quien se confía
        para el día más importante. No hace falta un texto largo: una buena foto
        tuya y unas líneas honestas hacen más que un currículum.
      </P>

      <H2>💰 Servicios y precios claros</H2>
      <P>
        Mostrar qué ofrecés y cuánto cuesta filtra consultas y hace que el
        cliente llegue casi decidido. “Consultar precio” para todo genera dudas
        y trabajo extra para vos. Aun si tus valores varían según el evento,
        podés mostrar “desde $X” o paquetes base: le das una referencia y
        ahorrás conversaciones que no van a ningún lado.
      </P>

      <H2>⭐ Prueba social</H2>
      <P>
        Testimonios reales de clientes responden objeciones antes de que te las
        hagan. Si tenés reseñas en Google o comentarios en Instagram, traelos a
        tu sitio. La confianza de otros clientes vale más que cualquier texto
        que escribas sobre vos mismo.
      </P>

      <H2>📲 Contacto en un solo toque</H2>
      <P>
        WhatsApp, formulario y redes en un solo lugar. Cuanto menos fricción,
        más consultas: que escribirte sea tan fácil como tocar un botón. Y que
        ese botón esté visible en todas las secciones, no solo al final.
      </P>

      <H2>🔍 Que te encuentren en Google</H2>
      <P>
        Un portfolio escondido no vende. Trabajá tus textos y tu estructura para
        las búsquedas de tu zona y especialidad, y mantené el sitio actualizado
        para que Google lo siga considerando relevante. Un sitio bien
        posicionado puede traerte consultas todos los meses, incluso mientras
        dormís.
      </P>

      <H2>⚠️ Errores que espantan clientes</H2>
      <UL>
        <LI>Música que arranca sola al entrar (sí, todavía pasa).</LI>
        <LI>Fotos borrosas o con resolución bajísima.</LI>
        <LI>Menús confusos y botones que no se entienden.</LI>
        <LI>Un sitio que no se adapta al celular.</LI>
        <LI>No responder rápido: la primera impresión se pierde.</LI>
      </UL>

      <H2>✅ Checklist final</H2>
      <UL>
        <LI>Portada con imagen fuerte y mensaje claro.</LI>
        <LI>Galerías por categoría, con lightbox a pantalla completa.</LI>
        <LI>Imágenes optimizadas para cargar rápido.</LI>
        <LI>“Sobre mí”, servicios y precios.</LI>
        <LI>Testimonios y prueba social.</LI>
        <LI>Contacto directo por WhatsApp y formulario.</LI>
        <LI>SEO básico y sitio adaptado al celular.</LI>
      </UL>
      <P>
        Si tu portfolio cumple con todo esto, no es solo una vidriera: es una
        máquina de conseguir clientes trabajando para vos las 24 horas. Y eso,
        al final, es lo que separa a un fotógrafo con presencia de uno que
        simplemente existe online. 🚀
      </P>
    </>
  );
}
