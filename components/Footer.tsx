/**
 * Footer - Pie de página con información de contacto
 * Incluye disclaimer legal (transparencia para auditoría Google Ads)
 */

import Image from "next/image";
import { PhoneIcon, MapPinIcon, ClockIcon } from "./Icons";
import WhatsAppButton from "./WhatsAppButton";
import { config } from "@/lib/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="relative bg-neutral-950 text-neutral-300">
      {/* Acento de marca */}
      <div className="absolute inset-x-0 top-0 h-1 bg-primary-500" />

      <div className="container-main py-14">
        {/* Bloque de marca + CTA */}
        <div className="flex flex-col gap-6 pb-10 border-b border-white/10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/logo.png"
                alt="Norte Clima"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="font-display text-xl font-bold text-white">
                Norte Clima
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Servicio técnico independiente y multimarca de calderas a
              domicilio en CABA y Gran Buenos Aires.
            </p>
          </div>
          <div className="flex-shrink-0">
            <WhatsAppButton size="md">Escribir por WhatsApp</WhatsAppButton>
          </div>
        </div>

        {/* Columnas de info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          {/* Contacto */}
          <div>
            <h3 className="font-display text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <div className="space-y-3">
              <a
                href={config.phoneUrl}
                className="flex items-center gap-3 hover:text-primary-400 transition-colors"
              >
                <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                <span>{config.phoneFormatted}</span>
              </a>
              <a
                href={config.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-green-400 transition-colors"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Horario */}
          <div>
            <h3 className="font-display text-white font-bold text-sm uppercase tracking-wider mb-4">
              Horario
            </h3>
            <div className="flex items-start gap-3">
              <ClockIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p>{config.schedule}</p>
                <p className="text-sm text-neutral-500 mt-1">
                  Feriados: consultar disponibilidad
                </p>
              </div>
            </div>
          </div>

          {/* Cobertura */}
          <div>
            <h3 className="font-display text-white font-bold text-sm uppercase tracking-wider mb-4">
              Zonas de Atención
            </h3>
            <div className="flex items-start gap-3">
              <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                {config.coverageZones.map((zona) => (
                  <p key={zona}>{zona}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer legal completo - Transparencia para auditoría Google Ads */}
        <div className="bg-neutral-900 rounded-lg p-4 mb-6">
          <p className="text-sm text-neutral-400 leading-relaxed">
            {config.disclaimerCompleto}
          </p>
        </div>

        {/* Links a documentos legales */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a href="/garantia" className="text-neutral-400 hover:text-primary-400 transition-colors">
            Política de Garantía
          </a>
          <a href="/privacidad" className="text-neutral-400 hover:text-primary-400 transition-colors">
            Política de Privacidad
          </a>
          <a href="/terminos" className="text-neutral-400 hover:text-primary-400 transition-colors">
            Términos y Condiciones
          </a>
        </div>

        {/* Barra inferior */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 border-t border-white/10 pt-8">
          <p className="text-sm text-neutral-500">
            © {currentYear} {config.companyName}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-neutral-600 text-center md:text-right">
            Servicio técnico independiente y multimarca. No somos servicio
            oficial ni estamos afiliados a ninguna marca.
          </p>
        </div>
      </div>
    </footer>
  );
}
