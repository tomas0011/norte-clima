/**
 * Fondo global - Estética "industrial / blueprint"
 * Server Component (sin JS de cliente): una grilla técnica muy sutil sobre
 * base clara, con un glow naranja tenue arriba. Reemplaza los blobs "aurora"
 * por algo intencional y coherente con un servicio técnico.
 */

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base */}
      <div className="absolute inset-0 bg-neutral-50" />

      {/* Grilla blueprint sutil */}
      <div className="absolute inset-0 bg-blueprint" />

      {/* Glow naranja de marca, arriba */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-[0.12] blur-[120px]"
        style={{ background: "radial-gradient(circle, #f95d12 0%, transparent 70%)" }}
      />
    </div>
  );
}
