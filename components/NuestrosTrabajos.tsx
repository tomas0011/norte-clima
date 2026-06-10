/**
 * Nuestros Trabajos - Grilla responsive de servicios
 * Mobile-first: cards compactas (ícono + texto en fila) en mobile,
 * cards grandes centradas en 3 columnas en desktop.
 * Se muestran TODOS los servicios a la vez para que el usuario
 * encuentre el que necesita sin depender de un carrusel.
 */

import WhatsAppButton from "./WhatsAppButton";
import { WrenchIcon, FlameIcon, DropletIcon } from "./Icons";

const trabajos = [
  {
    id: 1,
    titulo: "Reparación de Calderas",
    descripcion:
      "Ofrecemos un servicio de reparación de calderas que asegura la eficiencia y seguridad del sistema. Diagnosticamos fallas de encendido, fugas y ruidos, utilizando repuestos originales.",
    Icon: WrenchIcon,
  },
  {
    id: 2,
    titulo: "Mantenimiento de Piso Radiante",
    descripcion:
      "Detectamos fugas, problemas en bomba o termostatos, asegurando distribución uniforme del calor y eficiencia energética.",
    Icon: FlameIcon,
  },
  {
    id: 3,
    titulo: "Reparación de Climatizadores de Piscina",
    descripcion:
      "Solucionamos fallas eléctricas, compresores y refrigerante para mantener la temperatura ideal todo el año.",
    Icon: DropletIcon,
  },
];

export default function NuestrosTrabajos() {
  return (
    <section id="trabajos" className="py-16 md:py-20 bg-neutral-50">
      <div className="container-main">
        {/* Encabezado */}
        <div className="text-center mb-10 md:mb-16">
          <span className="section-eyebrow">Lo que hacemos</span>
          <h2 className="section-title">Nuestros Trabajos</h2>
          <p className="section-subtitle">
            Servicios especializados que realizamos
          </p>
        </div>

        {/* Grilla: 1 columna en mobile, 3 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {trabajos.map((trabajo) => (
            <article
              key={trabajo.id}
              className="card-accent flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center !p-4 md:!p-8"
            >
              {/* Ícono: chico en mobile, grande en desktop */}
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center shrink-0 md:mx-auto md:mb-6">
                <trabajo.Icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>

              <div>
                {/* Título */}
                <h3 className="font-display text-base md:text-xl font-bold text-neutral-900 mb-1 md:mb-3">
                  {trabajo.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  {trabajo.descripcion}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-neutral-500 mb-4">¿Necesitás ayuda con tu equipo?</p>
          <WhatsAppButton size="sm">Consultar por WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
