/**
 * Testimonios reales de clientes
 * Lenguaje natural, no marketing
 */

import { QuoteIcon, StarIcon } from './Icons';
import { config } from '@/lib/config';

const testimonios = [
  {
    id: 1,
    texto: "Se me había roto la caldera un domingo a la noche y Marcelo vino ese mismo día. La arregló y funcionó perfecto. Muy conforme.",
    nombre: "Diego R.",
    barrio: "José Ingenieros, Zona Oeste",
    anio: "2024",
  },
  {
    id: 2,
    texto: "Me explicó qué tenía y cuánto costaba antes de empezar. No hubo sorpresas. Vino, lo arregló y listo.",
    nombre: "Margarita S.",
    barrio: "San Miguel, Zona Norte",
    anio: "2023",
  },
  {
    id: 3,
    texto: "Necesitaba cambiar la mía por una más nueva. Me cotizó, buscó el equipo, vino y la instaló. Todo bien.",
    nombre: "Jorge L.",
    barrio: "Caballito, CABA",
    anio: "2024",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="section-eyebrow">Prueba social</span>
          <h2 className="section-title">
            Clientes que nos recomendaron
          </h2>
          <p className="section-subtitle">
            Algunas personas que nos llamaron y volvieron a llamarnos
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.id}
              className="relative bg-white rounded-xl border border-neutral-200 p-6 transition-all duration-300 hover:border-primary-300 hover:shadow-lg overflow-hidden"
            >
              {/* Acento lateral de marca */}
              <span className="absolute inset-y-0 left-0 w-1 bg-primary-500" />

              {/* Comillas */}
              <div className="absolute top-4 right-4 text-primary-100">
                <QuoteIcon className="w-10 h-10" />
              </div>

              {/* Estrellas */}
              <div className="flex gap-0.5 text-highlight-400 mb-4 relative z-10">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" filled />
                ))}
              </div>

              {/* Texto */}
              <p className="text-neutral-700 mb-6 leading-relaxed relative z-10">
                "{testimonio.texto}"
              </p>

              {/* Autor */}
              <div className="border-t border-neutral-100 pt-4">
                <p className="font-display font-semibold text-neutral-900">
                  {testimonio.nombre}
                </p>
                <p className="text-sm text-neutral-500">
                  {testimonio.barrio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Nota */}
        <p className="text-center text-neutral-500 text-sm mt-12">
          ¿Tenés una emergencia con tu caldera?{' '}
          <a
            href={config.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline font-medium"
          >
            Escribinos por WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}