/**
 * Página de Política de Privacidad
 * Ruta: /privacidad
 */

import { config } from "@/lib/config";

export const metadata = {
  title: "Política de Privacidad - " + config.companyName,
  description: "Política de privacidad y protección de datos personales.",
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-20">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Política de Privacidad
        </h1>

        <p className="text-neutral-600 mb-8">{config.companyName}</p>

        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            1. Información que Recopilamos
          </h2>

          <h3 className="text-lg font-semibold text-neutral-900 mb-3">
            Información proporcionada por el usuario:
          </h3>
          <ul className="list-disc pl-6 text-neutral-600 mb-4 space-y-2">
            <li>Nombre y apellido</li>
            <li>Número de teléfono</li>
            <li>Dirección de correo electrónico</li>
            <li>Dirección del domicilio (para visitas técnicas)</li>
            <li>Información sobre el equipo a reparar</li>
          </ul>

          <h3 className="text-lg font-semibold text-neutral-900 mb-3">
            Información recopilada automáticamente:
          </h3>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li>Datos de navegación (cookies técnicas)</li>
            <li>Dirección IP</li>
            <li>Tipo de dispositivo y navegador</li>
          </ul>

          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            2. Cómo Usamos la Información
          </h2>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li>
              <strong>Atención de consultas:</strong> Responder mensajes y
              llamadas
            </li>
            <li>
              <strong>Programación de visitas:</strong> Coordinar horarios de
              atención técnica
            </li>
            <li>
              <strong>Presupuestos:</strong> Elaborar cotizaciones
              personalizadas
            </li>
            <li>
              <strong>Facturación:</strong> Generación de comprobantes tipo C
            </li>
          </ul>

          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            3. Protección de Datos
          </h2>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li>
              Los datos se almacenan de forma segura en dispositivos protegidos
            </li>
            <li>Acceso limitado solo al personal autorizado</li>
            <li>Conexiones seguras (HTTPS) en el sitio web</li>
          </ul>

          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            4. Compartir Información
          </h2>
          <p className="text-neutral-600 mb-4">
            <strong>
              NO vendemos ni alquilamos datos personales a terceros.
            </strong>
          </p>
          <p className="text-neutral-600 mb-6">
            Excepciones: proveedores de servicios técnicos necesarios para el
            funcionamiento del sitio y obligaciones legales.
          </p>

          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            5. Derechos del Usuario
          </h2>
          <ul className="list-disc pl-6 text-neutral-600 mb-6 space-y-2">
            <li>
              <strong>Acceder:</strong> Solicitar información sobre los datos
              almacenados
            </li>
            <li>
              <strong>Rectificar:</strong> Solicitar corrección de datos
              incorrectos
            </li>
            <li>
              <strong>Eliminar:</strong> Solicitar eliminación de datos cuando
              corresponda
            </li>
            <li>
              <strong>Oponerse:</strong> Optar por no recibir comunicaciones
              comerciales
            </li>
          </ul>

          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            6. Cookies
          </h2>
          <p className="text-neutral-600 mb-4">
            El sitio utiliza cookies técnicas necesarias para mantener la
            sesión, recordar preferencias y análisis básico de tráfico.
          </p>
          <p className="text-neutral-600 mb-6">
            El usuario puede configurar su navegador para rechazar cookies.
          </p>

          <h2 className="text-xl font-bold text-neutral-900 mb-4">
            7. Contacto
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
