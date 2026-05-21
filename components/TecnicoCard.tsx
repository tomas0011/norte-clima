/**
 * TecnicoCard - Tarjeta individual de técnico
 * Muestra nombre, CUIT y rol del técnico
 * Diseño coherente con la sección Sobre Nosotros
 */

interface TecnicoCardProps {
  nombre: string;
  cuit: string;
  rol?: string;
}

export default function TecnicoCard({ nombre, cuit, rol }: TecnicoCardProps) {
  return (
    <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
      {/* Icono representativo */}
      <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          className="w-10 h-10 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>

      {/* Info del técnico */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-neutral-900 mb-1">{nombre}</h3>
        {rol && <p className="text-neutral-600 text-sm mb-2">{rol}</p>}

        {/* CUIT del técnico */}
        <p className="text-sm text-neutral-500">CUIT: {cuit}</p>
      </div>
    </div>
  );
}
