/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones de rendimiento
  reactStrictMode: true,

  // Configuración de imágenes (agregar dominio si se usan imágenes externas)
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },

  // Headers de seguridad
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // Fuerza HTTPS (Vercel sirve siempre por HTTPS)
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            // Deshabilita APIs del navegador que el sitio no usa
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
