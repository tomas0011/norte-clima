/**
 * Nuestros Trabajos - Grilla responsive de servicios con imágenes
 * Cards image-forward: foto real arriba + sello de ícono de marca + texto.
 * Se muestran TODOS los servicios a la vez (sin carrusel).
 */

import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import { WrenchIcon, FlameIcon, DropletIcon } from "./Icons";

const trabajos = [
  {
    id: 1,
    titulo: "Reparación de Calderas",
    descripcion:
      "Ofrecemos un servicio de reparación de calderas que asegura la eficiencia y seguridad del sistema. Diagnosticamos fallas de encendido, fugas y ruidos, utilizando repuestos originales.",
    Icon: WrenchIcon,
    imagen: "/calderas_image.webp",
  },
  {
    id: 2,
    titulo: "Mantenimiento de Piso Radiante",
    descripcion:
      "Detectamos fugas, problemas en bomba o termostatos, asegurando distribución uniforme del calor y eficiencia energética.",
    Icon: FlameIcon,
    imagen: "/piso_radiante_image.webp",
  },
  {
    id: 3,
    titulo: "Reparación de Climatizadores de Piscina",
    descripcion:
      "Solucionamos fallas eléctricas, compresores y refrigerante para mantener la temperatura ideal todo el año.",
    Icon: DropletIcon,
    imagen: "/climatizador_piscina_image.webp",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trabajos.map((trabajo) => (
            <article
              key={trabajo.id}
              className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden transition-all duration-300 hover:border-primary-300 hover:shadow-lg"
            >
              {/* Imagen */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={trabajo.imagen}
                  alt={trabajo.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Sello de ícono de marca */}
                <span className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-white/95 backdrop-blur-sm text-primary-600 flex items-center justify-center shadow">
                  <trabajo.Icon className="w-5 h-5" />
                </span>
              </div>

              {/* Contenido */}
              <div className="p-5 md:p-6">
                <h3 className="font-display text-lg md:text-xl font-bold text-neutral-900 mb-2">
                  {trabajo.titulo}
                </h3>
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
