import type { BlogPostMeta } from "../types";
import { H2, H3, P, UL, LI } from "@/components/blog/prose";

export const meta: BlogPostMeta = {
  slug: "como-hacer-una-pagina-web-para-maestros",
  category: "maestros",
  title: "Cómo hacer una página web para maestros (paso a paso)",
  description:
    "Guía para docentes y maestros que quieren una web propia: qué secciones incluir, cómo mostrar tus cursos y cómo conseguir alumnos sin depender de las redes.",
  excerpt:
    "Los pasos concretos para que tu propuesta educativa tenga una web clara, profesional y que atraiga alumnos.",
  date: "2026-10-06",
  readingTime: "6 min",
  keywords: [
    "cómo hacer una página web para maestros",
    "página web para docentes",
    "web para dar clases particulares",
    "sitio web educativo",
  ],
};

export function Content() {
  return (
    <>
      <P>
        Enseñar es tu fuerte, no armar webs. Pero hoy, cuando una familia busca
        un docente o un taller, muchas veces el único resultado es un perfil de
        Instagram con posts sueltos. Una <strong>página web para maestros</strong>{" "}
        ordena tu propuesta, genera confianza y trabaja por vos mientras das
        clase. 📚
      </P>
      <P>
        La buena noticia: no necesitás saber de tecnología. Estos son los pasos
        para tener tu sitio listo sin perderte en lo técnico.
      </P>

      <H2>🎯 1. Definí qué ofrecés y a quién</H2>
      <P>
        Antes del diseño, respondé: ¿das clases particulares, talleres, cursos
        online, apoyo escolar? ¿A qué edades o niveles? Cuanto más claro tengas
        eso, más fácil será que una familia entienda de un vistazo si sos lo que
        busca.
      </P>

      <H2>🧭 2. Tu dominio y hosting</H2>
      <P>
        Tu dominio es tu dirección (por ejemplo, tunombre.com) y debería quedar{" "}
        <strong>a tu nombre</strong>. El hosting es dónde vive el sitio: hay
        opciones gratuitas más que suficientes para la mayoría de los proyectos.
      </P>

      <H2>🏗️ 3. Las secciones que no pueden faltar</H2>
      <UL>
        <LI>
          <strong>Portada</strong> con un mensaje claro: qué enseñás y a quién.
        </LI>
        <LI>
          <strong>Tus cursos y talleres</strong> organizados por tema o nivel.
        </LI>
        <LI>
          <strong>“Sobre mí”</strong>: tu formación, tu experiencia y tu forma de
          enseñar.
        </LI>
        <LI>
          <strong>Modalidad y precios</strong>, para filtrar consultas.
        </LI>
        <LI>
          <strong>Testimonios</strong> de alumnos o familias.
        </LI>
        <LI>
          <strong>Contacto directo</strong> por WhatsApp.
        </LI>
      </UL>

      <H2>👩‍🏫 4. Mostrá tu forma de enseñar</H2>
      <P>
        No vendes solo contenido: vendes confianza. Un texto honesto sobre cómo
        trabajás, a quién ayudaste y qué resultados lograron tus alumnos vale más
        que una lista de títulos. Esa cercanía es la que hace que una familia te
        elija.
      </P>

      <H2>📱 5. Pensá primero en el celular</H2>
      <P>
        La mayoría de las familias te van a buscar desde el teléfono. Si tu web
        no se ve impecable en pantallas chicas, perdés la consulta antes de
        empezar. Probala siempre en el celular.
      </P>

      <H2>🔍 6. Que te encuentren en Google</H2>
      <P>
        Trabajá tus textos con las búsquedas de tu zona y tu especialidad
        (“clases de matemática en Buenos Aires”, “taller de lectura para niños”).
        Ese detalle es lo que hace que tu sitio te traiga alumnos todos los
        meses, sin depender del algoritmo.
      </P>

      <H2>⚠️ Errores que conviene evitar</H2>
      <UL>
        <LI>Dejar todo el contenido solo en un PDF o en historias que caducan.</LI>
        <LI>Esconder la modalidad y los precios.</LI>
        <LI>Un sitio que no se adapta al celular.</LI>
        <LI>No tener un botón de contacto claro y visible.</LI>
      </UL>

      <H3>🤝 ¿Lo hacés vos o lo delegás?</H3>
      <P>
        Podés armarlo con una plantilla, o delegarlo en alguien que lo piense a
        tu medida. Delegarlo te ahorra tiempo y suele dar un resultado más
        profesional: vos seguís enfocado en enseñar.
      </P>
    </>
  );
}
