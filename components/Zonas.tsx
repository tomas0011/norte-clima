/**
 * Zonas de Cobertura - Cobertura en texto, sin fricción
 * Server Component (el buscador de costos se quitó de la UI; antes quedaba
 * lógica de cliente muerta).
 */

import WhatsAppButton from "./WhatsAppButton";

const zonas = ["CABA", "Zona Norte", "Zona Oeste", "Zona Sur"];

export default function Zonas() {
  return (
    <section id="zonas" className="py-16">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="section-eyebrow">Dónde llegamos</span>
          <h2 className="section-title">Zonas de Cobertura</h2>
          <p className="section-subtitle !mb-8">Llegamos a toda CABA y GBA</p>
        </div>

        {/* Pills de zonas */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {zonas.map((zona) => (
            <span
              key={zona}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 text-neutral-700 rounded-full text-sm font-medium hover:border-primary-300 hover:text-primary-600 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              {zona}
            </span>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-neutral-500 text-sm mb-8">
          * El costo de visita puede variar según la zona y disponibilidad
        </p>

        {/* Nota de cobertura extendida */}
        <div className="mt-8 bg-primary-50 border border-primary-100 rounded-xl p-5 text-center">
          <p className="text-primary-700">
            <span className="font-semibold">¿Tu zona no está en la lista?</span>{" "}
            Consultanos — llegamos a más localidades.
          </p>
        </div>

        {/* CTA simple */}
        <div className="mt-8 text-center">
          <WhatsAppButton variant="secondary" size="md">
            Coordinar visita
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
