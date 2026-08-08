/**
 * Configuración centralizada del sitio
 * Centraliza todos los datos editables del negocio
 * Datos integrados desde CUESTIONARIO-ERS.md
 */

// ============================================
// TÉCNICOS DEL SERVICIO (debe definirse ANTES de config)
// ============================================
export const tecnicos = [
  {
    nombre: "Marcelo José Segurola",
    cuit: "20-23178745-4",
    rol: "Técnico principal",
  },
  {
    nombre: "Mariela Yanina Cino",
    cuit: "27-28107887-4",
    rol: "Técnica",
  },
] as const;

export type Tecnico = (typeof tecnicos)[number];

export const config = {
  // ============================================
  // DATOS LEGALES Y FISCALES (del cuestionario)
  // ============================================
  razonSocial: tecnicos[0].nombre,
  segundoTitular: tecnicos[1].nombre,
  cuit: tecnicos[0].cuit,
  cuit2: tecnicos[1].cuit,
  condicionFiscal: "Monotributo",
  facturaTipo: "C",
  direccionFiscal: "Juan de Langara, CABA",

  // ============================================
  // INFORMACIÓN DE LA EMPRESA
  // ============================================
  companyName: "Norte Clima",

  // URL canónica del sitio. Fuente de verdad para metadataBase, canonical,
  // sitemap, robots y JSON-LD. Override en deploy con NEXT_PUBLIC_SITE_URL.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.norteclima.com.ar",

  phone: "+5491169127078",
  phoneFormatted: "11 6912-7078",
  phoneAlt: "+5491158403106",
  phoneAltFormatted: "11 5840-3106",
  whatsapp: "5491169127078",
  whatsappMessage:
    "Hola, necesito información sobre servicio técnico de calderas",
  email: "yacalderas@gmail.com",
  emailAlt: "info@yacalderas.com",
  emailAlt2: "norteclima22@gmail.com",

  // ============================================
  // HORARIO DE ATENCIÓN (del cuestionario)
  // ============================================
  schedule: "Lunes a Viernes de 8:00 a 19:00, Sábado de 8:00 a 14:00",
  scheduleShort: "Lun-Vie 8:00-19:00, Sáb 8:00-14:00",
  horarioAtencion: "08:00 a 19:00 hs",
  horarioTecnico: "10:00 a 17:00 hs",

  // ============================================
  // COBERTURA GEOGRÁFICA (del cuestionario)
  // ============================================
  coverageZones: ["CABA", "Gran Buenos Aires"] as const,
  zonasDetalle: ["Capital Federal", "Gran Buenos Aires"] as const,

  // Ciudades con cobertura (cargadas desde cost-rules.json)
  coveredCities: [] as string[],

  // ============================================
  // SERVICIOS (del cuestionario)
  // ============================================
  ofreceUrgencias: false,
  tiempoRespuesta: "Casi inmediato",

  // ============================================
  // TRACKING / ADS
  // ============================================
  // ID de conversión de Google Ads (gtag.js). Prefijo "AW-" = Google Ads.
  // Se usa en app/layout.tsx para cargar gtag y reportar conversiones.
  // IMPORTANTE: NEXT_PUBLIC_GOOGLE_ADS_ID es OBLIGATORIA en el deploy
  // (configurar en Vercel Production). El default de abajo es un PLACEHOLDER
  // de warning a propósito, NO un ID real: si se imprime/usa tal cual no
  // reporta nada y deja en evidencia que falta configurar la env.
  // ID correcto del cliente (a configurar en Vercel Production):
  // AW-18377151756
  googleAdsId:
    (process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-MISSING-GOOGLE-ADS-ID") as string,

  // ============================================
  // MARCAS (NO son oficiales)
  // ============================================
  brands: ["Baxi", "Peisa", "Ariston", "Orbis", "Euterma", "Caldaia"] as const,

  // ============================================
  // DESCARGO LEGAL (servicio independiente)
  // ============================================
  disclaimer:
    "Servicio técnico independiente. No somos servicio oficial ni estamos afiliados a ninguna marca.",
  disclaimerRepuestos:
    "Trabajamos con repuestos de calidad acordes a cada equipo.",
  disclaimerMonotributo:
    "Monotributista. Emitimos factura tipo C.",
  // Disclaimer completo para auditoría Google Ads
  disclaimerCompleto:
    "Somos un servicio técnico independiente, monotributista. No somos servicio oficial de ninguna marca. Emitimos factura C. El técnico a cargo tiene más de 20 años de experiencia en el rubro.",

  // ============================================
  // URLs GENERADAS DINÁMICAMENTE
  // ============================================
  get whatsappUrl(): string {
    return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },

  get phoneUrl(): string {
    return `tel:${this.phone}`;
  },

  get emailUrl(): string {
    return `mailto:${this.email}`;
  },
} as const;

export type Brand = (typeof config.brands)[number];
export type Zone = (typeof config.coverageZones)[number];
