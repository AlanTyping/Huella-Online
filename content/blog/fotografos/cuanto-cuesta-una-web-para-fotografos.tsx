import type { BlogPostMeta } from "../types";
import { H2, H3, P, UL, LI } from "@/components/blog/prose";

export const meta: BlogPostMeta = {
  slug: "cuanto-cuesta-una-web-para-fotografos",
  category: "fotografos",
  title: "¿Cuánto cuesta una página web para fotógrafos en Argentina?",
  description:
    "Qué factores definen el precio de una página web para fotógrafos, rangos de referencia en Argentina y cómo elegir un presupuesto sin sorpresas.",
  excerpt:
    "Los factores que mueven el precio de una web para fotógrafos, rangos de referencia y las preguntas que tenés que hacer antes de decir que sí.",
  date: "2026-10-07",
  readingTime: "7 min",
  keywords: [
    "cuánto cuesta una página web para fotógrafos",
    "precio página web para fotógrafos",
    "presupuesto web para fotógrafos Argentina",
  ],
};

export function Content() {
  return (
    <>
      <P>
        “¿Cuánto sale una web?” es la pregunta que más frena a los fotógrafos. Y
        la respuesta honesta es incómoda: <strong>depende del alcance</strong>.
        Pero eso no te sirve si estás planificando tu inversión. Así que vamos a
        los factores concretos que definen el precio de una{" "}
        <strong>página web para fotógrafos</strong>, con rangos de referencia y
        las preguntas que deberías hacer antes de decir que sí. 💸
      </P>

      <H2>🧩 Qué factores mueven el precio</H2>
      <P>
        No es un número al azar: cada ítem suma trabajo real. Estos son los que
        más pesan:
      </P>
      <UL>
        <LI>
          <strong>Cantidad de galerías y secciones:</strong> no es lo mismo un
          portfolio de una sola especialidad que una web con bodas, XV, newborn
          y producto.
        </LI>
        <LI>
          <strong>Diseño a medida vs. plantilla:</strong> un diseño propio toma
          más tiempo, pero te diferencia y convierte mejor.
        </LI>
        <LI>
          <strong>Integraciones:</strong> reservas, pagos, formularios o
          analítica suman trabajo.
        </LI>
        <LI>
          <strong>Optimización SEO y de imágenes:</strong> hacer que cargue
          rápido y aparezca en Google es parte del valor, no un extra.
        </LI>
        <LI>
          <strong>Contenido:</strong> si necesitás ayuda con los textos y la
          estructura, es un servicio adicional.
        </LI>
      </UL>

      <H2>📊 Rangos de referencia en Argentina</H2>
      <P>
        Como orientación, un portfolio profesional bien hecho suele ubicarse en
        un rango que va desde unos <strong>$225.000</strong> para un proyecto
        esencial, hasta alrededor de <strong>$500.000</strong> para una web más
        completa y personalizada. Los valores cambian con el tiempo y según cada
        estudio, así que tomalos como punto de partida, no como regla fija.
      </P>
      <P>
        Lo importante no es el número en sí, sino <strong>qué incluye</strong>.
        Una web de $225.000 que carga lenta y no aparece en Google puede salir
        mucho más caras que una de $500.000 que te trae consultas todos los
        meses. Pensá en la inversión, no en el gasto.
      </P>

      <H2>🚩 Banderas rojas en un presupuesto</H2>
      <P>
        Desconfiá de los presupuestos “cerrados” sin haber hablado con vos: si
        nadie te preguntó qué fotografiás ni cuántas secciones necesitás, el
        número es una adivinanza. Otras señales de alerta:
      </P>
      <UL>
        <LI>Que el dominio o el hosting queden a nombre de otra persona.</LI>
        <LI>Que no te expliquen qué pasa después de publicar.</LI>
        <LI>Precios sospechosamente bajos con “mantenimiento” eterno de por medio.</LI>
        <LI>Que no puedan mostrarte portfolios reales que hayan hecho antes.</LI>
      </UL>

      <H2>🧾 Cómo elegir un presupuesto sin sorpresas</H2>
      <H3>1. Pedí un desglose</H3>
      <P>
        Que te expliquen qué incluye cada etapa: diseño, desarrollo, publicación
        y capacitación o mantenimiento. Un buen presupuesto es claro, no una
        caja negra.
      </P>
      <H3>2. Aclará quién es dueño de qué</H3>
      <P>
        El dominio y el hosting deberían quedar a tu nombre. El código y el
        mantenimiento suelen quedar del lado de quien desarrolla. Que quede
        escrito, no de palabra.
      </P>
      <H3>3. Preguntá por el después</H3>
      <P>
        Actualizar galerías y sumar fotos nuevas es parte del mantenimiento.
        Deberías saber si tiene costo, cada cuánto y qué incluye exactamente.
      </P>

      <H2>💳 Formas de pago</H2>
      <P>
        Es común dividir el pago en dos partes: una al comenzar y otra al
        publicar. Es una forma justa para ambas partes y te permite ver avances
        antes de pagar el total. Si te piden el 100% por adelantado, prestá
        atención.
      </P>

      <H2>⏱️ ¿Y cuánto tarda?</H2>
      <P>
        El tiempo va de la mano con el precio: un proyecto más completo necesita
        más semanas. Como referencia, entre <strong>4 y 8 semanas</strong> según
        las características del sitio y la fluidez de la comunicación. Cuanto
        antes tengas tus fotos y textos listos, más rápido avanza.
      </P>

      <H2>💡 Cómo pensarlo como inversión</H2>
      <P>
        Si tu web te trae una sola boda o un par de sesiones al año que no
        habrías conseguido de otra forma, ya se pagó sola. El error es comparar
        el precio de una web con “lo que cuesta una plantilla”, cuando en
        realidad lo estás comparando con <strong>los clientes que vas a ganar (o
        perder)</strong> por cómo te ven online.
      </P>
    </>
  );
}
