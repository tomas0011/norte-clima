/**
 * Hero Section - Optimizado para Google Ads
 * H1 orientado a urgencia y keyword de búsqueda
 * CTA visible sin scroll
 */

import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import { config } from "@/lib/config";

export default function Hero() {
  const confianza = [
    "+20 años en el rubro",
    "Técnico titular",
    "Mayoría de marcas",
    "Garantía propia",
    "Servicio garantizado",
  ];

  return (
    <section className="relative overflow-hidden pt-16 bg-white">
      {/* Formas suaves de acento (naranja + azul) para dar vida sin oscurecer */}
      <div
        className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #f95d12 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #0685CF 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container-main py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Columna texto */}
          <div className="animate-fade-in text-center lg:text-left">
            {/* Badge con urgencia */}
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm mb-6 border border-green-200">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Respondemos en minutos
            </div>

            {/* H1 ORIENTADO A GOOGLE ADS Y SEO */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900 mb-5 text-balance leading-[1.05] tracking-tight">
              Reparación de calderas
              <br />
              <span className="text-primary-600">en el día en CABA y GBA</span>
            </h1>

            {/* Subtítulo con diferenciadores */}
            <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-xl mx-auto lg:mx-0 text-balance">
              Técnicos calificados · Atención urgente · Servicio multimarca
            </p>

            {/* CTAs - VISIBLES SIN SCROLL */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-5">
              <WhatsAppButton size="lg">Solicitar servicio ahora</WhatsAppButton>

              <a
                href={config.phoneUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-neutral-800 rounded-lg border-2 border-neutral-300 hover:border-primary-400 hover:bg-primary-50 transition-all duration-200"
              >
                <PhoneIcon />
                Llamar ahora
              </a>
            </div>

            {/* Microcopy de urgencia */}
            <p className="text-green-600 font-medium text-sm mb-8">
              Reparación en el día • Presupuesto claro
            </p>

            {/* Señales de confianza */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-neutral-500 text-sm border-t border-neutral-200 pt-6">
              {confianza.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckIcon />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna imagen */}
          <div className="relative">
            {/* Marco con acento de marca */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-primary-100 to-accent-100 rounded-[2rem] -z-10" />
            <Image
              src="/hero_image.webp"
              alt="Técnico de Norte Clima reparando una caldera a domicilio"
              width={612}
              height={408}
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              className="w-full h-auto rounded-2xl shadow-xl ring-1 ring-neutral-900/5"
            />
            {/* Chip flotante de confianza */}
            <div className="absolute -bottom-4 left-4 sm:left-6 bg-white rounded-xl shadow-lg border border-neutral-100 px-4 py-3 flex items-center gap-3">
              <span className="w-9 h-9 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center font-display font-bold">
                +20
              </span>
              <div className="text-left leading-tight">
                <p className="text-sm font-semibold text-neutral-900">Años de experiencia</p>
                <p className="text-xs text-neutral-500">Servicio a domicilio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-green-500"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
