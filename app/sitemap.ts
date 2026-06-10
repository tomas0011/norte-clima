import type { MetadataRoute } from "next";
import { config } from "@/lib/config";

/**
 * Sitemap generado dinámicamente. La home es la prioridad máxima;
 * las páginas legales (requeridas por la auditoría de Google Ads) van con
 * prioridad baja pero indexadas para reforzar la transparencia del negocio.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = config.siteUrl;

  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/terminos`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/garantia`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacidad`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
