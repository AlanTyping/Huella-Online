"use client";

const steps = [
  {
    number: "01",
    title: "Charlamos",
    description:
      "Una reunión de 15 minutos para entender tu estilo, tus servicios y el tipo de clientes que querés atraer.",
  },
  {
    number: "02",
    title: "Diseñamos",
    description:
      "Armamos la estructura y la propuesta visual de tu portfolio, pensada para que tus fotos sean las protagonistas.",
  },
  {
    number: "03",
    title: "Construimos",
    description:
      "Desarrollamos el sitio, optimizamos cada imagen y dejamos todo listo para que cargue rápido en cualquier dispositivo.",
  },
  {
    number: "04",
    title: "Publicamos",
    description:
      "Conectamos tu dominio, publicamos y te capacitamos para que puedas actualizar tus galerías cuando quieras.",
  },
];

export function FotografosProcess() {
  return (
    <section id="proceso" className="bg-paper py-24 text-ink lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Así trabajamos.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">
            Un proceso simple y acompañado, de la primera charla a tu sitio
            online.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-ink/15 pt-6">
              <span className="font-display text-4xl text-ink/25">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-2xl tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
