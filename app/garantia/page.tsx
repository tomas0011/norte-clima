/**
 * Página de Política de Garantía
 * Ruta: /garantia
 */

import { config } from "@/lib/config";

export const metadata = {
  title: "Política de Garantía - " + config.companyName,
  description:
    "Conoce nuestra política de garantía para trabajos de reparación de calderas.",
};

export default function GarantiaPage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-20">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Política de Garantía
        </h1>

        <p className="text-neutral-600 mb-8">
          {config.companyName} • {config.condicionFiscal}
        </p>

        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            1. Alcance de la Garantía
          </h2>
          <p className="text-neutral-600 mb-6">
            Todos los trabajos de reparación realizados incluyen garantía sobre
            los repuestos utilizados y la mano de obra aplicada.
          </p>

          <h3 className="text-lg font-semibold text-neutral-900 mb-3">
            Período de Garantía
          </h3>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li>Reparación de componentes menores: 30 días</li>
            <li>Reemplazo de piezas principales: 90 días</li>
            <li>Trabajos de instalación: 180 días</li>
          </ul>
          <p className="text-neutral-500 text-sm mb-6">
            * El período de garantía específico depende del repuesto
            reemplazado.
          </p>

          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            2. Cobertura
          </h2>
          <h3 className="text-lg font-semibold text-neutral-900 mb-3">
            La garantía cubre:
          </h3>
          <ul className="list-disc pl-6 text-neutral-600 mb-4 space-y-2">
            <li>Defectos de fabricación del repuesto instalado</li>
            <li>Fallos derivados de la mano de obra aplicada</li>
            <li>Problemas de funcionamiento del sistema reparado</li>
          </ul>

          <h3 className="text-lg font-semibold text-neutral-900 mb-3">
            La garantía NO cubre:
          </h3>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li>Daños causados por uso indebido del equipo</li>
            <li>Problemas derivados de falta de mantenimiento</li>
            <li>Daños por factores externos (sobretensiones, agua, etc.)</li>
            <li>Desgaste natural de componentes</li>
            <li>Problemas preexistentes no detectados durante la reparación</li>
          </ul>

          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            3. Procedimiento para Reclamar
          </h2>
          <p className="text-neutral-600 mb-4">
            Si el trabajo presenta fallas luego de realizado:
          </p>
          <ol className="list-decimal pl-6 text-neutral-600 mb-6 space-y-2">
            <li>
              Contactarse vía WhatsApp o teléfono dentro del período de garantía
            </li>
            <li>Se evaluará si el problema está cubierto por la garantía</li>
            <li>
              Si corresponde, se enviará un técnico para resolver sin costo
              adicional
            </li>
          </ol>

          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            4. Contacto
          </h2>
          <div className="bg-neutral-50 rounded-lg p-4">
            <p className="text-neutral-600">
              <strong>Teléfono:</strong> {config.phoneFormatted}
              <br />
              <strong>WhatsApp:</strong> {config.phoneFormatted}
              <br />
              <strong>Email:</strong> {config.email}
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
