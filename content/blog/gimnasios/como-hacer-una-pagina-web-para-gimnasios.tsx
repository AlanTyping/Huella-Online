import type { BlogPostMeta } from "../types";
import { H2, H3, P, UL, LI } from "@/components/blog/prose";

export const meta: BlogPostMeta = {
  slug: "como-hacer-una-pagina-web-para-gimnasios",
  category: "gimnasios",
  title: "Cómo hacer una página web para tu gimnasio",
  description:
    "Guía para gimnasios y entrenadores: qué secciones incluir, cómo mostrar disciplinas, horarios y planes, y cómo llenar tus clases con una web profesional.",
  excerpt:
    "Los pasos para que tu gimnasio tenga una web que transmita energía, ordene la información y sume alumnos todos los meses.",
  date: "2026-10-06",
  readingTime: "6 min",
  keywords: [
    "cómo hacer una página web para gimnasios",
    "página web para gimnasio",
    "web para entrenadores",
    "sitio web fitness",
  ],
};

export function Content() {
  return (
    <>
      <P>
        Tu gimnasio vive de la energía y de la constancia. Pero cuando alguien
        busca dónde entrenar, se encuentra con un perfil de Instagram donde los
        horarios y precios se pierden entre historias. Una{" "}
        <strong>página web para gimnasios</strong> ordena esa información y
        convierte seguidores en alumnos. 💪
      </P>

      <H2>🎯 1. Definí qué querés lograr</H2>
      <P>
        ¿Sumar alumnos nuevos, llenar una disciplina puntual o mostrar tu
        propuesta para competencias? Saber el objetivo define qué secciones
        priorizar. En la mayoría de los casos, el objetivo es que te escriban
        para inscribirse.
      </P>

      <H2>🏋️ 2. Mostrá tus disciplinas y horarios</H2>
      <P>
        La pregunta número uno de cualquier interesado es “¿qué clases hay y a
        qué hora?”. Tenés que responderla sin que te la tengan que preguntar:
      </P>
      <UL>
        <LI>Disciplinas organizadas (musculación, funcional, crossfit, etc.).</LI>
        <LI>Horarios claros, fáciles de leer en el celular.</LI>
        <LI>Nivel o requisitos, si aplica.</LI>
        <LI>Quiénes son los profes, para generar confianza.</LI>
      </UL>

      <H2>💰 3. Planes y precios a la vista</H2>
      <P>
        Responder “¿cuánto sale?” por privado mil veces es agotador. Mostrá tus
        pases y paquetes con claridad: filtra consultas y hace que el interesado
        llegue casi decidido.
      </P>

      <H2>📸 4. Imagen que transmite energía</H2>
      <P>
        Fotos reales de tus clases y tu espacio valen más que cualquier texto.
        Que la gente vea el ambiente, la intensidad y la comunidad que formaste.
        Eso es lo que hace que quieran entrenar con vos y no con el de la
        esquina.
      </P>

      <H2>📲 5. Inscripción en un solo toque</H2>
      <P>
        Un botón de WhatsApp visible en todas las secciones. Cuanto menos
        fricción, más inscripciones: que escribirte sea tan fácil como tocar un
        botón, a cualquier hora.
      </P>

      <H2>🔍 6. Que te encuentren en Google</H2>
      <P>
        Trabajá tus textos con las búsquedas de tu zona (“gimnasio en Merlo”,
        “entrenamiento funcional cerca”). Un sitio bien optimizado te trae
        consultas todos los meses, sin depender de publicar todos los días.
      </P>

      <H2>⚠️ Errores que espantan alumnos</H2>
      <UL>
        <LI>No tener los horarios en ningún lugar claro.</LI>
        <LI>Un sitio que tarda en cargar o se ve mal en el celular.</LI>
        <LI>Fotos oscuras o de baja calidad del espacio.</LI>
        <LI>No responder rápido: el interés se enfría.</LI>
      </UL>

      <H3>🤝 ¿Plantilla o diseño a medida?</H3>
      <P>
        Una plantilla te saca del apuro, pero te hace ver igual a miles de
        gimnasios. Un diseño a medida refleja tu identidad y está pensado para
        convertir. Si querés llenar clases, vale la pena hacerlo bien.
      </P>
    </>
  );
}
