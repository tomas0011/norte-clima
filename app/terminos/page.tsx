/**
 * Página de Términos y Condiciones
 * Ruta: /terminos
 */

import { config } from "@/lib/config";

export const metadata = {
  title: "Términos y Condiciones - " + config.companyName,
  description: "Términos y condiciones del servicio técnico de calderas.",
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-20">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Términos y Condiciones
        </h1>

        <p className="text-neutral-600 mb-8">
          {config.companyName}• {config.condicionFiscal}
        </p>

        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            1. Aceptación de Términos
          </h2>
          <p className="text-neutral-600 mb-6">
            Al acceder y utilizar este sitio web, el usuario acepta estar sujeto
            a los presentes términos y condiciones.
          </p>

          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            2. Descripción del Servicio
          </h2>
          <p className="text-neutral-600 mb-4">
            {config.companyName} es un servicio técnico independiente
            especializado en:
          </p>
          <ul className="list-disc pl-6 text-neutral-600 mb-4 space-y-2">
            <li>Reparación de calderas</li>
            <li>Mantenimiento de sistemas de calefacción</li>
            <li>Diagnóstico técnico</li>
            <li>Instalación de equipos</li>
          </ul>
          <p className="text-neutral-600 mb-6">
            <strong>Nota:</strong> No somos servicio técnico oficial de ninguna
            marca. Trabajamos de forma independiente con repuestos de calidad.
          </p>

          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            3. Cotizaciones y Presupuestos
          </h2>

          <h3 className="text-lg font-semibold text-neutral-900 mb-3">
            Proceso de cotización:
          </h3>
          <ol className="list-decimal pl-6 text-neutral-600 mb-4 space-y-2">
            <li>El cliente contacta por teléfono o WhatsApp</li>
            <li>Se evalúa el caso según la información proporcionada</li>
            <li>Se agenda una visita técnica (presencial)</li>
            <li>El técnico realiza el diagnóstico y presenta el presupuesto</li>
          </ol>

          <h3 className="text-lg font-semibold text-neutral-900 mb-3">
            Política de visita técnica:
          </h3>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li>
              La visita técnica tiene costo, el cual se informa previamente
            </li>
            <li>
              <strong>
                El costo de la visita se cobra únicamente si el cliente NO
                aprueba el presupuesto
              </strong>
            </li>
            <li>
              El presupuesto se presenta ANTES de comenzar cualquier trabajo
            </li>
          </ul>

          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            4. Precios y Pago
          </h2>
          <ul className="list-disc pl-6 text-neutral-600 mb-4 space-y-2">
            <li>
              <strong>Formas de pago:</strong> Efectivo, Transferencia bancaria
            </li>
            <li>
              <strong>Facturación:</strong> Se emite factura tipo C (
              {config.condicionFiscal})
            </li>
            <li>
              <strong>El pago se realiza una vez finalizado el trabajo</strong>
            </li>
          </ul>

          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            5. Garantía
          </h2>
          <p className="text-neutral-600 mb-6">
            Los trabajos realizados incluyen garantía según la política de
            garantía vigente. Ver sección de Garantía en el sitio.
          </p>

          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            6. Limitación de Responsabilidad
          </h2>
          <p className="text-neutral-600 mb-4">
            El servicio no se hace responsable por:
          </p>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li>
              Daños preexistentes en el equipo no detectados durante la
              reparación
            </li>
            <li>Problemas derivados de falta de mantenimiento previo</li>
            <li>Daños causados por uso indebido del equipo</li>
            <li>
              Fallos derivados de factores externos (sobretensiones, agua, etc.)
            </li>
          </ul>

          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            7. Privacidad
          </h2>
          <p className="text-neutral-600 mb-6">
            El tratamiento de datos personales se realiza conforme a la Política
            de Privacidad vigente.
          </p>

          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            8. Ley Aplicable
          </h2>
          <p className="text-neutral-600 mb-6">
            Estos términos se rigen por las leyes de la República Argentina.
            Cualquier disputa será resuelta en los tribunales competentes de la
            Ciudad Autónoma de Buenos Aires.
          </p>

          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            9. Contacto
          </h2>
          <div className="bg-neutral-50 rounded-lg p-4">
            <p className="text-neutral-600">
              <strong>Email:</strong> {config.email}
              <br />
              <strong>Teléfono:</strong> {config.phoneFormatted}
              <br />
              <strong>Dirección:</strong> {config.direccionFiscal}
            </p>
          </div>
        </div>

        <p className="text-sm text-neutral-500 mt-8 text-center">
          Última actualización: Mayo 2026
        </p>
      </div>
    </main>
  );
}
