/**
 * Contenido de la página renderizado en el servidor.
 *
 * La app del organizador es interactiva y se renderiza en el cliente, así que
 * para los buscadores esto es lo único con texto real que hay en la página.
 * Existe porque el organizador se promociona como herramienta gratuita y
 * necesita contenido indexable.
 */
export function ToolSeoSection() {
  return (
    <section className="mt-14 border-t border-cu-border pt-8">
      <h2 className="text-[20px] font-semibold tracking-tight text-cu-text">
        Sobre este organizador
      </h2>

      <div className="mt-3 space-y-3 text-[14px] leading-relaxed text-cu-text-2">
        <p>
          Es una herramienta gratuita para ordenar el día a día: tareas, sesiones
          de enfoque, notas, hábitos y agenda, todo en un mismo lugar. No hace
          falta crear una cuenta ni instalar nada.
        </p>
        <p>
          <strong className="font-semibold text-cu-text">
            Tus datos quedan en tu dispositivo.
          </strong>{" "}
          Todo se guarda localmente en el navegador, así que funciona sin
          internet y nada se envía a ningún servidor. Podés exportar una copia de
          respaldo cuando quieras.
        </p>
      </div>

      <h3 className="mt-7 text-[15px] font-semibold text-cu-text">
        Preguntas frecuentes
      </h3>

      <dl className="mt-3 space-y-4">
        <div>
          <dt className="text-[14px] font-medium text-cu-text">
            ¿Es realmente gratis?
          </dt>
          <dd className="mt-1 text-[14px] leading-relaxed text-cu-text-2">
            Sí. Todas las funciones están disponibles sin costo y sin registro.
          </dd>
        </div>
        <div>
          <dt className="text-[14px] font-medium text-cu-text">
            ¿Necesito internet para usarlo?
          </dt>
          <dd className="mt-1 text-[14px] leading-relaxed text-cu-text-2">
            No. Una vez que la página cargó, funciona sin conexión porque los
            datos viven en tu navegador.
          </dd>
        </div>
        <div>
          <dt className="text-[14px] font-medium text-cu-text">
            ¿Puedo perder mis datos?
          </dt>
          <dd className="mt-1 text-[14px] leading-relaxed text-cu-text-2">
            Sólo si borrás los datos del navegador. Para evitarlo, usá el botón{" "}
            <em>Exportar</em> y guardá el archivo; después podés recuperarlo con{" "}
            <em>Importar</em>.
          </dd>
        </div>
        <div>
          <dt className="text-[14px] font-medium text-cu-text">
            ¿Cómo empiezo?
          </dt>
          <dd className="mt-1 text-[14px] leading-relaxed text-cu-text-2">
            Escribí tu primera tarea arriba y marcala cuando la termines. Después
            podés sumar hábitos, eventos y sesiones de enfoque desde el menú.
          </dd>
        </div>
      </dl>
    </section>
  );
}
