/**
 * Problemas Comunes - SEO + Intención de búsqueda
 * Keywords que la gente busca cuando tiene urgencia
 */

import WhatsAppButton from "./WhatsAppButton";
import VerticalCarousel from "./VerticalCarousel";

const problemas = [
  {
    titulo: 'La caldera no enciende',
  },
  {
    titulo: 'Sale agua fria o agua intermitente',
  },
  {
    titulo: 'La caldera se enciende sola',
  },
  {
    titulo: 'Perdida de agua o gas',
  },
  {
    titulo: 'Error en pantalla',
  },
  {
    titulo: 'Ruido extraño',
  },
];

function ProblemaCard({ titulo }: { titulo: string }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all duration-200">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="font-bold text-neutral-900">
          {titulo}
        </h3>
      </div>
    </div>
  );
}

export default function ProblemasComunes() {
  return (
    <section id="problemas" className="py-16">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="section-eyebrow">Síntomas frecuentes</span>
          <h2 className="section-title">¿Tu caldera tiene algún problema?</h2>
          <p className="section-subtitle">
            Estos son los problemas más comunes que solucionamos a diario
          </p>
        </div>

        {/* Layout mitad y mitad */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Izquierda: Carousel Vertical Infinito */}
          <div className="h-[400px] rounded-xl">
            <VerticalCarousel
              itemHeight={88}
              className="h-full"
              speed={30}
              ariaLabel="Problemas comunes de calderas que resolvemos"
            >
              {problemas.map((problema) => (
                <ProblemaCard
                  key={problema.titulo}
                  titulo={problema.titulo}
                />
              ))}
            </VerticalCarousel>
          </div>

          {/* Derecha: CTA */}
          <div className="relative overflow-hidden bg-neutral-950 rounded-3xl p-8 flex flex-col items-center justify-center text-center text-white">
            <div className="absolute inset-0 bg-blueprint-dark" />
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-60 rounded-full opacity-30 blur-[90px]"
              style={{ background: "radial-gradient(circle, #f95d12 0%, transparent 70%)" }}
            />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-500/20 border border-primary-500/30 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-white">
                ¿Tu problema no está en la lista?
              </h3>
              <p className="text-neutral-300 mb-6 max-w-sm">
                Lo revisamos igual. Contanos qué le pasa a tu caldera y te ayudamos.
              </p>
              <WhatsAppButton variant="primary" size="lg">
                Describir mi problema
              </WhatsAppButton>
              <p className="text-neutral-400 text-sm mt-4">
                Respondemos en minutos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
