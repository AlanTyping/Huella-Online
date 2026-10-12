import type { BlogPostMeta } from "../types";
import { H2, H3, P, UL, LI } from "@/components/blog/prose";

export const meta: BlogPostMeta = {
  slug: "que-debe-tener-el-portfolio-de-un-estudio-de-arquitectura",
  category: "arquitectura",
  title: "Qué debe tener el portfolio de un estudio de arquitectura",
  description:
    "Las secciones y detalles que no pueden faltar en la web de un estudio de arquitectura para presentar su obra con criterio y captar mejores proyectos.",
  excerpt:
    "Cómo mostrar tu obra con la misma exigencia con la que la proyectás: secciones, fichas de proyecto y estética.",
  date: "2026-10-06",
  readingTime: "6 min",
  keywords: [
    "portfolio de arquitectura",
    "página web para arquitectos",
    "web para estudio de arquitectura",
    "sitio web arquitectura",
  ],
};

export function Content() {
  return (
    <>
      <P>
        En arquitectura, el detalle lo es todo. Y eso incluye cómo te mostrás
        online. Un <strong>portfolio de arquitectura</strong> no es un álbum de
        fotos: es la primera obra que ve un cliente potencial, y debería estar a
        la altura de las que proyectás. 🏛️
      </P>

      <H2>🎯 1. Una portada con criterio</H2>
      <P>
        Una imagen fuerte de tu mejor proyecto, un mensaje claro y un botón que
        invite a ver más. Sin ruido, sin exceso de elementos. La portada marca el
        tono de todo lo que viene.
      </P>

      <H2>🗂️ 2. Portfolio organizado por categoría</H2>
      <P>
        Agrupá tus obras por tipo —vivienda, comercial, interiorismo,
        rehabilitación— para que cada visitante encuentre lo que le interesa. El
        orden transmite método y criterio, justo lo que un cliente busca en un
        estudio.
      </P>

      <H2>📐 3. Fichas de proyecto bien hechas</H2>
      <P>
        Cada obra debería contar su historia. No alcanza con la foto:
      </P>
      <UL>
        <LI>Título, ubicación y año.</LI>
        <LI>Superficie y programa (qué usos resuelve).</LI>
        <LI>Un texto breve sobre el concepto o el desafío.</LI>
        <LI>Imágenes de calidad: exteriores, interiores y detalles.</LI>
        <LI>Plano o esquema, si aporta.</LI>
      </UL>

      <H2>✨ 4. Estética minimalista, trabajo protagonista</H2>
      <P>
        El diseño de tu web no debe competir con tu obra. Un layout sobrio, buen
        espacio en blanco y tipografía cuidada hacen que tus proyectos respiren.
        Menos adornos, más criterio.
      </P>

      <H2>🖼️ 5. Calidad de imagen sin perder velocidad</H2>
      <P>
        Tus fotos son el producto: tienen que verse nítidas y grandes. Pero
        imágenes pesadas hacen que el sitio tarde y el visitante se vaya.
        Optimizamos cada archivo para que se vea impecable y cargue rápido.
      </P>

      <H2>🤝 6. Contacto para nuevos proyectos</H2>
      <P>
        Un formulario y WhatsApp visibles para que te escriban por proyectos,
        colaboraciones o consultas. Que contactarte sea simple, tanto para un
        particular como para otra empresa.
      </P>

      <H2>🔍 7. Que te encuentren en Google</H2>
      <P>
        Trabajá tus textos con las búsquedas de tu zona y tu especialidad
        (“estudio de arquitectura en Buenos Aires”, “diseño de viviendas”). Un
        portfolio bien posicionado atrae clientes de mayor nivel sin depender de
        las redes.
      </P>

      <H3>⚠️ Errores que restan seriedad</H3>
      <UL>
        <LI>Fotos de obra con baja resolución o mal editadas.</LI>
        <LI>Un sitio genérico que no refleja tu criterio.</LI>
        <LI>Proyectos sin contexto ni información.</LI>
        <LI>No adaptarse al celular, donde te va a ver la mayoría.</LI>
      </UL>
    </>
  );
}
