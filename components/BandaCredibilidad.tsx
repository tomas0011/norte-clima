/**
 * Banda de Credibilidad - Bloque oscuro con datos clave
 * Server Component. Rompe el ritmo visual apenas debajo del Hero y refuerza
 * confianza con números grandes en la fuente display.
 */

const datos = [
  { valor: "+20", etiqueta: "Años de experiencia" },
  { valor: "CABA + GBA", etiqueta: "Cobertura a domicilio" },
  { valor: "En el día", etiqueta: "Respuesta a urgencias" },
  { valor: "Multimarca", etiqueta: "Baxi, Caldaia y muchas otras marcas" },
];

export default function BandaCredibilidad() {
  return (
    <section className="relative bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-dark" />
      {/* Línea de acento naranja superior */}
      <div className="absolute inset-x-0 top-0 h-1 bg-primary-500" />

      <div className="relative container-main py-12 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 divide-y-0 lg:divide-x divide-white/10">
          {datos.map((dato) => (
            <div key={dato.etiqueta} className="text-center px-2">
              <p className="font-display text-2xl md:text-3xl font-extrabold text-primary-400 tracking-tight">
                {dato.valor}
              </p>
              <p className="mt-1 text-sm text-neutral-400">{dato.etiqueta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
