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
    <section className="relative bg-neutral-50 border-y border-neutral-200">
      <div className="container-main py-10 md:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 lg:divide-x divide-neutral-200">
          {datos.map((dato) => (
            <div key={dato.etiqueta} className="text-center px-2">
              <p className="font-display text-2xl md:text-3xl font-extrabold text-primary-600 tracking-tight">
                {dato.valor}
              </p>
              <p className="mt-1 text-sm text-neutral-500">{dato.etiqueta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
